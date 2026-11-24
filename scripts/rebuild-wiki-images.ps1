$ErrorActionPreference = "Continue"
$outDir = "c:\Users\bobka\OneDrive\المستندات\thalajati\images"
$oldDir = Join-Path $outDir "_old_mismatched"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
New-Item -ItemType Directory -Force -Path $oldDir | Out-Null

# Move previous recipe-* files aside
Get-ChildItem $outDir -File -Filter "recipe-*.jpg" | ForEach-Object {
  Move-Item -Force $_.FullName (Join-Path $oldDir $_.Name)
}

function WikiUrl([string]$file) {
  return "https://commons.wikimedia.org/wiki/Special:FilePath/$([uri]::EscapeDataString($file))?width=900"
}

function Download-Wiki([string]$destName, [string[]]$candidates) {
  $dest = Join-Path $outDir $destName
  foreach ($file in $candidates) {
    $url = WikiUrl $file
    $tmp = "$dest.tmp"
    if (Test-Path $tmp) { Remove-Item $tmp -Force }
    & curl.exe -fsSL --max-time 90 -A "Mozilla/5.0" -o $tmp $url 2>$null
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path $tmp)) { continue }
    $len = (Get-Item $tmp).Length
    if ($len -lt 4000) { Remove-Item $tmp -Force; continue }
    $b = [System.IO.File]::ReadAllBytes($tmp)[0..2]
    if ($b[0] -ne 0xFF -or $b[1] -ne 0xD8) { Remove-Item $tmp -Force; continue }
    Move-Item -Force $tmp $dest
    Write-Host ("OK  {0} <= {1} ({2} KB)" -f $destName, $file, [int]($len/1KB))
    return $true
  }
  Write-Host "FAIL $destName"
  return $false
}

# dest filename => wiki candidate filenames (actual dish photos)
$map = [ordered]@{
  "dish-bukhari-chicken-rice.jpg" = @("Bukhari Rice ارز بخاري بالدجاج.JPG", "Kabsa 1.JPG")
  "dish-kabsa.jpg"                = @("Kabsa 1.JPG", "Kabsa (6486384335).jpg")
  "dish-maqluba.jpg"              = @("طبخة المقلوبة Maqluba.jpg", "Maqluba.jpg", "Maghlopa Jordanian Famous Food.jpg")
  "dish-marqooq.jpg"              = @("Chicken soup.jpg", "Flickr - cyclonebill - Hønsekødssuppe.jpg", "Homemade chicken noodle soup.jpg")
  "dish-fried-fish-rice.jpg"      = @("Fried fish.jpg", "Fish and rice.jpg", "Grilled fish with rice.jpg", "Fish dish.jpg")
  "dish-chicken-potato-stew.jpg"  = @("Chicken stew.jpg", "Irish stew.jpg", "Beef stew.jpg", "Potatoes with chicken.jpg")
  "dish-mandi.jpg"                = @("Chicken Mandi Rice during Cooking.JPG", "Mandi (food).jpg", "Kabsa 1.JPG")
  "dish-balaleet.jpg"             = @("Balaleet 2019.jpg")
  "dish-shakshuka.jpg"            = @("Israelsk shakshuka (21. oktober 2018).jpg", "Liat Portal for Foodie Disorder - Classic Red Shakshuka with Egg.jpg")
  "dish-potato-omelette.jpg"      = @("Spanish omelette.jpg", "Tortilla de patatas.jpg", "Omelette.jpg")
  "dish-fatteh.jpg"               = @("Syrian Fatteh sold in Mardin, Turkey.jpg", "Fatteh.jpg")
  "dish-pasta-bolognese.jpg"      = @("Spaghetti bolognese.jpg", "Tagliatelle al ragù.jpg", "Pasta with meat sauce.jpg")
  "dish-spaghetti-aglio.jpg"      = @("Spaghetti aglio e olio.jpg", "Aglio e olio.jpg")
  "dish-pizza-margherita.jpg"     = @("Pizza Margherita.jpg", "Pizza Margarita.jpg", "Margherita pizza.jpg")
  "dish-risotto.jpg"              = @("Risotto.jpg", "Risotto alla milanese.jpg", "Mushroom risotto.jpg")
  "dish-lasagna.jpg"              = @("Lasagne bolognese.jpg", "Lasagna.jpg", "Lasagne.jpg")
  "dish-tacos.jpg"                = @("Tacos.jpg", "Tacos al pastor.jpg", "Chicken tacos.jpg")
  "dish-burrito.jpg"              = @("Burrito.jpg", "Beef burrito.jpg")
  "dish-quesadilla.jpg"           = @("Cheese quesadillas with guacamole and sour cream (31712732886).jpg", "01 Quesadillas con guacamole.jpg", "Chicken Quesadilla dish at Latin Bistro restaurant Summit NJ.JPG")
  "dish-chili-con-carne.jpg"      = @("Bowl of chili.jpg", "Chili con carne 50 A.jpg", "Flickr - cyclonebill - Chili con carne (2).jpg")
  "dish-nachos.jpg"               = @("Nachos with sour cream, salsa and guacamole.jpg", "Nachos at Maya in Sonoma California - Sarah Stierch.jpg")
  "dish-lentil-soup.jpg"          = @("Lentil Soup - Schnitzel & Co. 2026-05-16.jpg", "Vegan Arabian Lentil and Rice Soup (7230462472).jpg", "Red lentil curry soup.jpg")
  "dish-tomato-soup.jpg"          = @("Tomato soup.jpg", "Grilled four-cheese on Jesus bread sandwich with garlic-tomato soup.jpg", "Cream of tomato soup.jpg")
  "dish-chicken-soup.jpg"         = @("Chicken soup.jpg", "Homemade chicken noodle soup.jpg", "Jewish chicken soup.jpg")
  "dish-corn-soup.jpg"            = @("Corn soup.jpg", "Cream of corn soup.jpg", "Sweet corn soup.jpg")
  "dish-hummus.jpg"               = @("Hummus.jpg", "Hummus and pita.jpg")
  "dish-fattoush.jpg"             = @("Arab Salad.jpg", "Fattoush.jpg")
  "dish-guacamole.jpg"            = @("Guacamole y nachos.jpg", "Doritos and Guacamole in a wooden bowl.JPG", "Nachos with sour cream, salsa and guacamole.jpg")
  "dish-garlic-bread.jpg"         = @("Garlic bread.jpg", "Garlic Bread.jpg", "Homemade garlic bread.jpg")
  "dish-mexican-rice.jpg"         = @("Mexican rice.jpg", "Arroz rojo.jpg", "Spanish rice.jpg", "Red rice.jpg")
  "dish-fried-eggs-toast.jpg"     = @("Fried eggs.jpg", "Eggs on toast.jpg", "Sunny side up eggs.jpg", "Breakfast eggs.jpg")
  "dish-flatbread.jpg"            = @("Pita bread.jpg", "Flatbread.jpg", "Arabic bread.jpg", "Khubz.jpg")
  "dish-focaccia.jpg"             = @("Focaccia.jpg", "Focaccia genovese.jpg", "Focaccia with rosemary.jpg")
  "dish-cornbread.jpg"            = @("Cornbread.jpg", "Corn bread.jpg", "Skillet cornbread.jpg")
  "dish-mutabbaq.jpg"             = @("Murtabak.jpg", "MURTABAK 1 0031.jpg", "MartabakTelur.JPG")
  "dish-sambousek.jpg"            = @("Samosa.jpg", "Samosas.jpg", "Sambousek.jpg", "Sambusa.jpg")
  "dish-cheese-pastry.jpg"        = @("Cheese börek.jpg", "Borek.jpg", "Börek.jpg", "Cheese pastry.jpg", "Fatayer.jpg")
  "dish-empanadas.jpg"            = @("Empanadas.jpg", "Empanada.jpg", "Boon Hotel + Spa - Sarah Stierch - April 2019 - 9.jpg")
  "dish-calzone.jpg"              = @("Calzone.jpg", "Calzone pizza.jpg")
  "dish-date-balls.jpg"           = @("Date balls.jpg", "Energy balls.jpg", "Dates.jpg", "Dried dates.jpg")
  "dish-rice-pudding.jpg"         = @("Rice pudding.jpg", "Arroz con leche.jpg", "Milchreis.jpg")
  "dish-basbousa.jpg"             = @("Basbousa.jpg", "Basbousa with almonds.jpg", "Hareesa.jpg")
  "dish-tiramisu.jpg"             = @("Dolce Tiramisù monoporzione.jpg", "Tiramisu.jpg", "Tiramisu dessert.jpg")
  "dish-churros.jpg"              = @("Churros.jpg", "Churro.jpg", "Chocolate churros.jpg")
  "dish-banana-pudding.jpg"       = @("Banana pudding.jpg", "Banana dessert.jpg", "Bananas foster.jpg", "Banana split.jpg")
  "dish-orange-juice.jpg"         = @("Orange juice 1 edit1.jpg", "Orange juice.jpg")
  "dish-lemonade-mint.jpg"        = @("Lemonade.jpg", "Mint lemonade.jpg", "Limonana.jpg", "Lemon mint drink.jpg")
  "dish-mango-smoothie.jpg"       = @("Mango smoothie.jpg", "Mango lassi.jpg", "Mango juice.jpg", "Mango drink.jpg")
  "dish-strawberry-milk.jpg"      = @("Strawberry milkshake.jpg", "Strawberry milk.jpg", "Strawberry smoothie.jpg")
  "dish-avocado-smoothie.jpg"     = @("Avocado smoothie.jpg", "Avocado juice.jpg", "Green smoothie.jpg")
  "dish-banana-milkshake.jpg"     = @("Banana milkshake.jpg", "Banana smoothie.jpg", "Milkshake.jpg")
}

$ok = 0
$fail = @()
foreach ($name in $map.Keys) {
  if (Download-Wiki $name $map[$name]) { $ok++ } else { $fail += $name }
}

Write-Host "---"
Write-Host "Downloaded $ok / $($map.Count)"
if ($fail.Count) {
  Write-Host "Still missing:"
  $fail | ForEach-Object { Write-Host "  $_" }
}
