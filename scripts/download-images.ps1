$ErrorActionPreference = "Continue"
$outDir = "c:\Users\bobka\OneDrive\المستندات\thalajati\images"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

function Get-Wiki($file) {
  return "https://commons.wikimedia.org/wiki/Special:FilePath/$([uri]::EscapeDataString($file))?width=800"
}

# Real camera photos from Wikimedia Commons + Unsplash
$map = [ordered]@{
  "recipe-bukhari.jpg"        = (Get-Wiki "Bukhari Rice ارز بخاري بالدجاج.JPG")
  "recipe-kabsa.jpg"          = (Get-Wiki "Kabsa 1.JPG")
  "recipe-makluba.jpg"        = (Get-Wiki "Maqluba.jpg")
  "recipe-madhbi.jpg"         = (Get-Wiki "Chicken Mandi Rice during Cooking.JPG")
  "recipe-hummus.jpg"         = (Get-Wiki "Hummus.jpg")
  "recipe-shakshuka.jpg"      = (Get-Wiki "Shakshuka_with_peppers.jpg")
  "recipe-fattoush.jpg"       = (Get-Wiki "Fattoush1.JPG")
  "recipe-fish.jpg"           = "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
  "recipe-stew.jpg"           = "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80"
  "recipe-marqooq.jpg"        = "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
  "recipe-balaleet.jpg"       = "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80"
  "recipe-omelette.jpg"       = "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  "recipe-fatteh.jpg"         = "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  "recipe-pasta.jpg"          = "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=800&q=80"
  "recipe-aglio.jpg"          = "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80"
  "recipe-pizza.jpg"          = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  "recipe-risotto.jpg"        = "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80"
  "recipe-lasagna.jpg"        = "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80"
  "recipe-tacos.jpg"          = "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80"
  "recipe-burrito.jpg"        = "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80"
  "recipe-quesadilla.jpg"     = "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80"
  "recipe-chili.jpg"          = "https://images.unsplash.com/photo-1455619453994-4b9beaa3c8a8?auto=format&fit=crop&w=800&q=80"
  "recipe-nachos.jpg"         = "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80"
  "recipe-lentil.jpg"         = "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
  "recipe-tomato-soup.jpg"    = "https://images.unsplash.com/photo-1547593026-a55d919ef859?auto=format&fit=crop&w=800&q=80"
  "recipe-chicken-soup.jpg"   = "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80"
  "recipe-corn-soup.jpg"      = "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80"
  "recipe-guacamole.jpg"      = "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80"
  "recipe-garlic-bread.jpg"   = "https://images.unsplash.com/photo-1573140401552-3fab57d23780?auto=format&fit=crop&w=800&q=80"
  "recipe-mexican-rice.jpg"   = "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80"
  "recipe-eggs-bread.jpg"     = "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  "recipe-flatbread.jpg"      = "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  "recipe-focaccia.jpg"       = "https://images.unsplash.com/photo-1604068549290-dea0e4a8199e?auto=format&fit=crop&w=800&q=80"
  "recipe-cornbread.jpg"      = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
  "recipe-mutabbaq.jpg"       = "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  "recipe-sambousek.jpg"      = "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80"
  "recipe-cheese-pastry.jpg"  = "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  "recipe-empanadas.jpg"      = "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80"
  "recipe-calzone.jpg"        = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  "recipe-date-balls.jpg"     = "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  "recipe-rice-pudding.jpg"   = "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  "recipe-basbousa.jpg"       = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
  "recipe-tiramisu.jpg"       = "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"
  "recipe-churros.jpg"        = "https://images.unsplash.com/photo-1668236455050-ef0e1c3d4c0e?auto=format&fit=crop&w=800&q=80"
  "recipe-banana-pudding.jpg" = "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  "recipe-orange-juice.jpg"   = "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80"
  "recipe-lemon-mint.jpg"     = "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=800&q=80"
  "recipe-mango-smoothie.jpg" = "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80"
  "recipe-strawberry-milk.jpg"= "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80"
  "recipe-avocado-smoothie.jpg"= "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80"
  "recipe-banana-shake.jpg"   = "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80"
}

# Fallbacks if primary URL fails (also real photos)
$fallback = @{
  "recipe-shakshuka.jpg"      = "https://images.unsplash.com/photo-1590412202413-2e5a0d3d0b0b?auto=format&fit=crop&w=800&q=80"
  "recipe-makluba.jpg"        = (Get-Wiki "Kabsa 1.JPG")
  "recipe-madhbi.jpg"         = (Get-Wiki "Kabsa 1.JPG")
  "recipe-fattoush.jpg"       = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  "recipe-hummus.jpg"         = "https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=800&q=80"
  "recipe-churros.jpg"        = "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80"
  "recipe-garlic-bread.jpg"   = "https://images.unsplash.com/photo-1619536477590-ef75fe6221ad?auto=format&fit=crop&w=800&q=80"
  "recipe-balaleet.jpg"       = "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
  "recipe-sambousek.jpg"      = "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  "recipe-date-balls.jpg"     = "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=800&q=80"
  "recipe-basbousa.jpg"       = "https://images.unsplash.com/photo-1464349095431-e991c6b2aa0d?auto=format&fit=crop&w=800&q=80"
}

function Download-One($url, $dest) {
  $tmp = "$dest.tmp"
  if (Test-Path $tmp) { Remove-Item $tmp -Force }
  & curl.exe -fsSL --max-time 60 -A "Mozilla/5.0" -o $tmp $url
  if ($LASTEXITCODE -ne 0 -or -not (Test-Path $tmp)) { return $false }
  $len = (Get-Item $tmp).Length
  if ($len -lt 3000) { Remove-Item $tmp -Force; return $false }
  $sig = [System.IO.File]::ReadAllBytes($tmp)[0..2]
  if ($sig[0] -ne 0xFF -or $sig[1] -ne 0xD8) { Remove-Item $tmp -Force; return $false }
  Move-Item -Force $tmp $dest
  return $true
}

$ok = 0
$fail = @()
foreach ($name in $map.Keys) {
  $dest = Join-Path $outDir $name
  if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 3000)) {
    Write-Host "SKIP $name (exists)"
    $ok++
    continue
  }
  $urls = @($map[$name])
  if ($fallback.ContainsKey($name)) { $urls += $fallback[$name] }
  $done = $false
  foreach ($url in $urls) {
    if (Download-One $url $dest) {
      Write-Host "OK   $name"
      $ok++
      $done = $true
      break
    }
  }
  if (-not $done) {
    Write-Host "FAIL $name"
    $fail += $name
  }
}

Write-Host "---"
Write-Host "Ready $ok / $($map.Count)"
if ($fail.Count) { Write-Host ("Failed: " + ($fail -join ", ")) }
