window.Thalajati = window.Thalajati || {};

Thalajati.INGREDIENT_GROUPS = [
  { key: "protein", label: "بروتينات" },
  { key: "starch", label: "نشويات" },
  { key: "veg", label: "خضار" },
  { key: "dairy", label: "ألبان" },
  { key: "other", label: "أخرى" },
];

Thalajati.QUICK_INGREDIENTS = [
  "chicken",
  "rice",
  "tomato",
  "onion",
  "egg",
  "pasta",
  "potato",
  "yogurt",
];

Thalajati.COMMON_INGREDIENTS = [
  { key: "chicken", label: "دجاج", group: "protein" },
  { key: "mince", label: "لحم مفروم", group: "protein" },
  { key: "lamb", label: "لحم غنم", group: "protein" },
  { key: "fish", label: "سمك", group: "protein" },
  { key: "egg", label: "بيض", group: "protein" },
  { key: "lentils", label: "عدس", group: "protein" },
  { key: "chickpeas", label: "حمص", group: "protein" },
  { key: "beans", label: "فاصوليا / فاصوليا حمراء", group: "protein" },
  { key: "rice", label: "أرز", group: "starch" },
  { key: "bread", label: "خبز", group: "starch" },
  { key: "pasta", label: "معكرونة", group: "starch" },
  { key: "flour", label: "دقيق", group: "starch" },
  { key: "potato", label: "بطاطس", group: "starch" },
  { key: "tortilla", label: "تورتيلا / خبز مكسيكي", group: "starch" },
  { key: "corn", label: "ذرة", group: "starch" },
  { key: "tomato", label: "طماطم", group: "veg" },
  { key: "onion", label: "بصل", group: "veg" },
  { key: "garlic", label: "ثوم", group: "veg" },
  { key: "cucumber", label: "خيار", group: "veg" },
  { key: "lemon", label: "ليمون", group: "veg" },
  { key: "pepper", label: "فلفل رومي", group: "veg" },
  { key: "avocado", label: "أفوكادو", group: "veg" },
  { key: "yogurt", label: "لبن / زبادي", group: "dairy" },
  { key: "milk", label: "حليب", group: "dairy" },
  { key: "cheese", label: "جبن", group: "dairy" },
  { key: "butter", label: "زبدة", group: "dairy" },
  { key: "cream", label: "قشطة / كريمة", group: "dairy" },
  { key: "dates", label: "تمر", group: "other" },
  { key: "sugar", label: "سكر", group: "other" },
  { key: "orange", label: "برتقال", group: "other" },
  { key: "banana", label: "موز", group: "other" },
  { key: "mango", label: "مانجو", group: "other" },
  { key: "strawberries", label: "فراولة", group: "other" },
  { key: "nuts", label: "مكسرات", group: "other" },
];

Thalajati.ALLERGEN_OPTIONS = [
  { key: "egg", label: "بيض" },
  { key: "fish", label: "مأكولات بحر / سمك" },
  { key: "milk", label: "حليب / ألبان" },
  { key: "yogurt", label: "لبن" },
  { key: "nuts", label: "مكسرات" },
  { key: "banana", label: "موز" },
  { key: "gluten", label: "جلوتين / قمح" },
];

Thalajati.CATEGORIES = [
  { key: "main", label: "أطباق رئيسية" },
  { key: "dessert", label: "حلويات" },
  { key: "juice", label: "عصائر" },
  { key: "soup", label: "شوربات" },
  { key: "bread", label: "خبز" },
  { key: "pastry", label: "معجنات" },
  { key: "side", label: "أطباق جانبية" },
];

Thalajati.CUISINES = [
  { key: "خليجي", label: "خليجي" },
  { key: "إيطالي", label: "إيطالي" },
  { key: "مكسيكي", label: "مكسيكي" },
];

Thalajati.RECIPES = [
  // —— خليجي / رئيسي ——
  {
    id: "chicken-rice",
    name: "رز بخاري بالدجاج",
    image: "images/dish-bukhari-chicken-rice.jpg",
    cuisine: "خليجي",
    category: "main",
    minutes: 55,
    servingsAdult: 4,
    tags: ["استقبال"],
    ingredients: [
      { key: "chicken", label: "دجاج" },
      { key: "rice", label: "أرز" },
      { key: "onion", label: "بصل" },
      { key: "garlic", label: "ثوم", optional: true },
    ],
    steps: [
      "اقلي البصل حتى يذبل ثم أضيفي قطع الدجاج.",
      "تبّلي بالبهارات وشوّحي دقيقتين.",
      "أضيفي ماء يغطي الدجاج واتركيه ينضج.",
      "أضيفي الأرز المنقوع وكمية الماء المناسبة.",
      "غطّي القدر على نار هادئة حتى ينضج الأرز.",
    ],
  },
  {
    id: "marqooq",
    name: "مرقوق دجاج",
    image: "images/dish-marqooq.jpg",
    cuisine: "خليجي",
    category: "main",
    minutes: 70,
    servingsAdult: 5,
    tags: ["استقبال"],
    ingredients: [
      { key: "chicken", label: "دجاج" },
      { key: "flour", label: "دقيق" },
      { key: "onion", label: "بصل" },
      { key: "tomato", label: "طماطم" },
      { key: "potato", label: "بطاطس", optional: true },
    ],
    steps: [
      "اعجني عجينة رقيقة من الدقيق والماء والملح.",
      "حضّري مرق الدجاج مع البصل والطماطم.",
      "افردي العجين رقيقًا وقطّعيه.",
      "أضيفي العجين فوق المرق على دفعات.",
      "اتركيه على نار هادئة حتى يستوي.",
    ],
    blockedBy: ["gluten"],
  },
  {
    id: "kabsa",
    name: "كبسة دجاج سريعة",
    image: "images/dish-kabsa.jpg",
    cuisine: "خليجي",
    category: "main",
    minutes: 50,
    servingsAdult: 4,
    tags: ["سريع"],
    ingredients: [
      { key: "chicken", label: "دجاج" },
      { key: "rice", label: "أرز" },
      { key: "onion", label: "بصل" },
      { key: "tomato", label: "طماطم" },
      { key: "nuts", label: "مكسرات", optional: true },
    ],
    steps: [
      "اقلي البصل والدجاج مع بهارات الكبسة.",
      "أضيفي الطماطم وقلّبي.",
      "أضيفي الماء حتى ينضج الدجاج نصف نضج.",
      "أضيفي الأرز وكمّلي الطبخ على نار هادئة.",
      "زيّني بالمكسرات إن أحببتِ (اختياري).",
    ],
    blockedBy: ["nuts"],
  },
  {
    id: "makluba",
    name: "مقلوبة خضار مبسّطة",
    image: "images/dish-maqluba.jpg",
    cuisine: "خليجي",
    category: "main",
    minutes: 60,
    servingsAdult: 5,
    tags: ["استقبال"],
    ingredients: [
      { key: "rice", label: "أرز" },
      { key: "chicken", label: "دجاج", optional: true },
      { key: "potato", label: "بطاطس" },
      { key: "onion", label: "بصل" },
    ],
    steps: [
      "اقلي شرائح البطاطس نصف قلية.",
      "رتّبي الدجاج ثم الخضار ثم الأرز.",
      "أضيفي المرق وغطّي على نار هادئة.",
      "اقلبي القدر عند التقديم.",
    ],
  },
  {
    id: "fish-rice",
    name: "سمك مقلي مع أرز أبيض",
    image: "images/dish-fried-fish-rice.jpg",
    cuisine: "خليجي",
    category: "main",
    minutes: 40,
    servingsAdult: 3,
    tags: ["استقبال"],
    ingredients: [
      { key: "fish", label: "سمك" },
      { key: "rice", label: "أرز" },
      { key: "lemon", label: "ليمون" },
    ],
    steps: [
      "تبّلي السمك بليمون وملح وبهارات.",
      "اقليه حتى ينضج.",
      "اسلقي الأرز الأبيض.",
      "قدّمي السمك مع الأرز.",
    ],
    blockedBy: ["fish"],
  },
  {
    id: "okro-stew",
    name: "مرقة بطاطس بالدجاج",
    image: "images/dish-chicken-potato-stew.jpg",
    cuisine: "خليجي",
    category: "main",
    minutes: 45,
    servingsAdult: 4,
    tags: ["ميزانية"],
    ingredients: [
      { key: "chicken", label: "دجاج" },
      { key: "potato", label: "بطاطس" },
      { key: "tomato", label: "طماطم" },
      { key: "onion", label: "بصل" },
    ],
    steps: [
      "شوّحي البصل والدجاج.",
      "أضيفي الطماطم والبطاطس وماء.",
      "اتركي المرقة تنضج.",
      "قدّميها مع خبز أو أرز.",
    ],
  },
  {
    id: "lamb-madhbi",
    name: "مظبي لحم مبسّط",
    image: "images/dish-mandi.jpg",
    cuisine: "خليجي",
    category: "main",
    minutes: 75,
    servingsAdult: 5,
    tags: ["استقبال"],
    ingredients: [
      { key: "lamb", label: "لحم غنم" },
      { key: "rice", label: "أرز" },
      { key: "onion", label: "بصل" },
      { key: "tomato", label: "طماطم", optional: true },
    ],
    steps: [
      "شوّحي البصل واللحم مع بهارات المظبي.",
      "أضيفي ماء واتركي اللحم ينضج.",
      "أضيفي الأرز وكمّلي على نار هادئة.",
      "قدّميه ساخنًا مع سلطة.",
    ],
  },
  {
    id: "balaleet",
    name: "بلاليط",
    image: "images/dish-balaleet.jpg",
    cuisine: "خليجي",
    category: "main",
    minutes: 25,
    servingsAdult: 3,
    tags: ["سريع"],
    ingredients: [
      { key: "pasta", label: "شعيرية / معكرونة" },
      { key: "egg", label: "بيض" },
      { key: "sugar", label: "سكر", optional: true },
    ],
    steps: [
      "اسلقي الشعيرية وصفيها.",
      "حلّيها قليلًا حسب الذوق.",
      "اقلي بيض عجة وقدّميه فوقها.",
    ],
    blockedBy: ["egg", "gluten"],
  },
  {
    id: "egg-shakshuka",
    name: "شكشوكة بيض",
    image: "images/dish-shakshuka.jpg",
    cuisine: "خليجي",
    category: "main",
    minutes: 20,
    servingsAdult: 2,
    tags: ["سريع", "ميزانية", "خفيف"],
    ingredients: [
      { key: "egg", label: "بيض" },
      { key: "tomato", label: "طماطم" },
      { key: "onion", label: "بصل" },
      { key: "bread", label: "خبز", optional: true },
    ],
    steps: [
      "اقلي البصل والطماطم حتى تصير صلصة.",
      "تبّلي بكمون وملح.",
      "اكسري البيض فوق الصلصة وغطّي المقلاة.",
      "اتركيه حتى يستوي البيض.",
      "قدّميه مع خبز.",
    ],
    blockedBy: ["egg"],
  },
  {
    id: "potato-omelette",
    name: "عجة بطاطس",
    image: "images/dish-potato-omelette.jpg",
    cuisine: "خليجي",
    category: "main",
    minutes: 25,
    servingsAdult: 3,
    tags: ["سريع", "ميزانية"],
    ingredients: [
      { key: "egg", label: "بيض" },
      { key: "potato", label: "بطاطس" },
      { key: "onion", label: "بصل", optional: true },
    ],
    steps: [
      "اقلي شرائح البطاطس حتى تلين.",
      "اخفقي البيض مع ملح وفلفل.",
      "أضيفي البيض على البطاطس وغطّي المقلاة.",
      "قدّميها مع سلطة خفيفة.",
    ],
    blockedBy: ["egg"],
  },
  {
    id: "yogurt-salad-meal",
    name: "فتّة دجاج خفيفة",
    image: "images/dish-fatteh.jpg",
    cuisine: "خليجي",
    category: "main",
    minutes: 35,
    servingsAdult: 3,
    tags: ["خفيف"],
    ingredients: [
      { key: "chicken", label: "دجاج" },
      { key: "yogurt", label: "لبن" },
      { key: "bread", label: "خبز" },
      { key: "nuts", label: "مكسرات", optional: true },
    ],
    steps: [
      "اسلقي الدجاج وفتّتيه.",
      "حمّصي قطع خبز.",
      "اخلطي اللبن مع ثوم وملح.",
      "رتّبي الخبز ثم الدجاج ثم اللبن.",
    ],
    blockedBy: ["yogurt", "milk", "gluten", "nuts"],
  },

  // —— إيطالي / رئيسي ——
  {
    id: "pasta-mince",
    name: "معكرونة باللحم المفروم",
    image: "images/dish-pasta-bolognese.jpg",
    cuisine: "إيطالي",
    category: "main",
    minutes: 30,
    servingsAdult: 4,
    tags: ["سريع", "ميزانية"],
    ingredients: [
      { key: "pasta", label: "معكرونة" },
      { key: "mince", label: "لحم مفروم" },
      { key: "onion", label: "بصل" },
      { key: "tomato", label: "طماطم" },
    ],
    steps: [
      "اسلقي المعكرونة.",
      "اقلي البصل واللحم المفروم.",
      "أضيفي الطماطم والبهارات.",
      "اخلطي المعكرونة مع الصلصة.",
    ],
    blockedBy: ["gluten"],
  },
  {
    id: "pasta-aglio",
    name: "معكرونة بالثوم والزيت",
    image: "images/dish-spaghetti-aglio.jpg",
    cuisine: "إيطالي",
    category: "main",
    minutes: 20,
    servingsAdult: 2,
    tags: ["سريع", "خفيف"],
    ingredients: [
      { key: "pasta", label: "معكرونة" },
      { key: "garlic", label: "ثوم" },
      { key: "lemon", label: "ليمون", optional: true },
    ],
    steps: [
      "اسلقي المعكرونة.",
      "شوّحي الثوم بزيت زيتون على نار هادئة.",
      "اخلطي المعكرونة مع الثوم وملح وفلفل.",
      "أضيفي رشة ليمون إن أحببتِ.",
    ],
    blockedBy: ["gluten"],
  },
  {
    id: "margherita-pizza",
    name: "بيتزا مارغريتا سريعة",
    image: "images/dish-pizza-margherita.jpg",
    cuisine: "إيطالي",
    category: "main",
    minutes: 35,
    servingsAdult: 3,
    tags: ["استقبال"],
    ingredients: [
      { key: "flour", label: "دقيق" },
      { key: "tomato", label: "طماطم" },
      { key: "cheese", label: "جبن موزاريلا" },
      { key: "garlic", label: "ثوم", optional: true },
    ],
    steps: [
      "حضّري عجينة بسيطة واتركيها ترتاح.",
      "افردي العجين ودهنيه بصلصة طماطم.",
      "وزّعي الجبن واخبزي حتى يذوب.",
    ],
    blockedBy: ["gluten", "milk"],
  },
  {
    id: "risotto-chicken",
    name: "ريزوتو دجاج مبسّط",
    image: "images/dish-risotto.jpg",
    cuisine: "إيطالي",
    category: "main",
    minutes: 40,
    servingsAdult: 3,
    tags: ["استقبال"],
    ingredients: [
      { key: "rice", label: "أرز" },
      { key: "chicken", label: "دجاج" },
      { key: "onion", label: "بصل" },
      { key: "cheese", label: "جبن بارميزان", optional: true },
    ],
    steps: [
      "شوّحي البصل والدجاج.",
      "أضيفي الأرز وقلّبي.",
      "أضيفي المرق تدريجيًا مع التحريك.",
      "أنهيه بجبن إن توفّر.",
    ],
    blockedBy: ["milk"],
  },
  {
    id: "lasagna-easy",
    name: "لازانيا سريعة بالفرن",
    image: "images/dish-lasagna.jpg",
    cuisine: "إيطالي",
    category: "main",
    minutes: 55,
    servingsAdult: 5,
    tags: ["استقبال"],
    ingredients: [
      { key: "pasta", label: "شرائح لازانيا / معكرونة" },
      { key: "mince", label: "لحم مفروم" },
      { key: "tomato", label: "طماطم" },
      { key: "cheese", label: "جبن" },
      { key: "onion", label: "بصل" },
    ],
    steps: [
      "حضّري صلصة اللحم بالطماطم.",
      "رتّبي طبقات المعكرونة والصلصة والجبن.",
      "اخبزي حتى تذوب الطبقة العليا.",
    ],
    blockedBy: ["gluten", "milk"],
  },

  // —— مكسيكي / رئيسي ——
  {
    id: "chicken-tacos",
    name: "تاكو دجاج",
    image: "images/dish-tacos.jpg",
    cuisine: "مكسيكي",
    category: "main",
    minutes: 30,
    servingsAdult: 3,
    tags: ["سريع"],
    ingredients: [
      { key: "chicken", label: "دجاج" },
      { key: "tortilla", label: "تورتيلا" },
      { key: "onion", label: "بصل" },
      { key: "tomato", label: "طماطم", optional: true },
      { key: "avocado", label: "أفوكادو", optional: true },
    ],
    steps: [
      "شوّحي الدجاج مع بهارات التاكو والبصل.",
      "سخّني التورتيلا.",
      "احشيه بالدجاج والطماطم والأفوكادو.",
    ],
    blockedBy: ["gluten"],
  },
  {
    id: "beef-burrito",
    name: "بوريتو لحم مفروم",
    image: "images/dish-burrito.jpg",
    cuisine: "مكسيكي",
    category: "main",
    minutes: 35,
    servingsAdult: 3,
    tags: ["سريع"],
    ingredients: [
      { key: "mince", label: "لحم مفروم" },
      { key: "tortilla", label: "تورتيلا" },
      { key: "rice", label: "أرز", optional: true },
      { key: "beans", label: "فاصوليا", optional: true },
      { key: "cheese", label: "جبن", optional: true },
      { key: "onion", label: "بصل" },
    ],
    steps: [
      "اقلي اللحم مع البصل والبهارات.",
      "أضيفي أرز أو فاصوليا إن توفّرت.",
      "لفّي الحشوة داخل التورتيلا وقدّمي.",
    ],
    blockedBy: ["gluten", "milk"],
  },
  {
    id: "quesadilla",
    name: "كيساديا جبن وخضار",
    image: "images/dish-quesadilla.jpg",
    cuisine: "مكسيكي",
    category: "main",
    minutes: 20,
    servingsAdult: 2,
    tags: ["سريع", "ميزانية"],
    ingredients: [
      { key: "tortilla", label: "تورتيلا" },
      { key: "cheese", label: "جبن" },
      { key: "pepper", label: "فلفل رومي", optional: true },
      { key: "onion", label: "بصل", optional: true },
    ],
    steps: [
      "ضعي جبن وخضار بين تورتيلا.",
      "اقليها على الجانبين حتى يذوب الجبن.",
      "قطّعيها مثلثات وقدّميها.",
    ],
    blockedBy: ["gluten", "milk"],
  },
  {
    id: "chili-con-carne",
    name: "تشيلي باللحم والفاصوليا",
    image: "images/dish-chili-con-carne.jpg",
    cuisine: "مكسيكي",
    category: "main",
    minutes: 45,
    servingsAdult: 4,
    tags: ["ميزانية"],
    ingredients: [
      { key: "mince", label: "لحم مفروم" },
      { key: "beans", label: "فاصوليا" },
      { key: "tomato", label: "طماطم" },
      { key: "onion", label: "بصل" },
      { key: "pepper", label: "فلفل رومي", optional: true },
    ],
    steps: [
      "اقلي البصل واللحم.",
      "أضيفي الطماطم والفاصوليا والبهارات.",
      "اتركيها تغلي حتى تتكثّف.",
      "قدّميها مع أرز أو خبز.",
    ],
  },
  {
    id: "nachos-plate",
    name: "ناتشوز بالجبن",
    image: "images/dish-nachos.jpg",
    cuisine: "مكسيكي",
    category: "main",
    minutes: 25,
    servingsAdult: 3,
    tags: ["سريع"],
    ingredients: [
      { key: "corn", label: "شيبس ذرة / ذرة" },
      { key: "cheese", label: "جبن" },
      { key: "tomato", label: "طماطم", optional: true },
      { key: "beans", label: "فاصوليا", optional: true },
      { key: "avocado", label: "أفوكادو", optional: true },
    ],
    steps: [
      "رتّبي الشيبس في صينية.",
      "رشّي الجبن والإضافات.",
      "ادخلي الفرن حتى يذوب الجبن.",
    ],
    blockedBy: ["milk"],
  },

  // —— شوربات ——
  {
    id: "lentil-soup",
    name: "شوربة عدس",
    image: "images/dish-lentil-soup.jpg",
    cuisine: "خليجي",
    category: "soup",
    minutes: 35,
    servingsAdult: 4,
    tags: ["ميزانية", "خفيف"],
    ingredients: [
      { key: "lentils", label: "عدس" },
      { key: "onion", label: "بصل" },
      { key: "potato", label: "بطاطس", optional: true },
      { key: "lemon", label: "ليمون", optional: true },
      { key: "bread", label: "خبز", optional: true },
    ],
    steps: [
      "اقلي البصل ثم أضيفي العدس.",
      "أضيفي ماء وخضار واتركيها تغلي.",
      "تبّلي بكمون وملح.",
      "قدّميها مع ليمون وخبز.",
    ],
  },
  {
    id: "tomato-soup",
    name: "شوربة طماطم كريمية",
    image: "images/dish-tomato-soup.jpg",
    cuisine: "إيطالي",
    category: "soup",
    minutes: 30,
    servingsAdult: 3,
    tags: ["خفيف", "سريع"],
    ingredients: [
      { key: "tomato", label: "طماطم" },
      { key: "onion", label: "بصل" },
      { key: "garlic", label: "ثوم", optional: true },
      { key: "cream", label: "كريمة", optional: true },
      { key: "bread", label: "خبز", optional: true },
    ],
    steps: [
      "اقلي البصل والطماطم.",
      "أضيفي ماء واتركيها تغلي ثم اهرسيها.",
      "أضيفي كريمة إن أحببتِ وقدّمي مع خبز.",
    ],
    blockedBy: ["milk"],
  },
  {
    id: "chicken-soup",
    name: "شوربة دجاج بالخضار",
    image: "images/dish-chicken-soup.jpg",
    cuisine: "خليجي",
    category: "soup",
    minutes: 40,
    servingsAdult: 4,
    tags: ["خفيف"],
    ingredients: [
      { key: "chicken", label: "دجاج" },
      { key: "potato", label: "بطاطس", optional: true },
      { key: "onion", label: "بصل" },
      { key: "pasta", label: "شعيرية", optional: true },
    ],
    steps: [
      "اسلقي الدجاج مع البصل.",
      "أضيفي الخضار والشعيرية.",
      "تبّلي وقدّمي ساخنة.",
    ],
  },
  {
    id: "corn-soup",
    name: "شوربة ذرة",
    image: "images/dish-corn-soup.jpg",
    cuisine: "مكسيكي",
    category: "soup",
    minutes: 25,
    servingsAdult: 3,
    tags: ["سريع", "خفيف"],
    ingredients: [
      { key: "corn", label: "ذرة" },
      { key: "milk", label: "حليب" },
      { key: "onion", label: "بصل", optional: true },
      { key: "butter", label: "زبدة", optional: true },
    ],
    steps: [
      "اقلي البصل قليلًا إن توفّر.",
      "أضيفي الذرة والحليب واتركيها تغلي بهدوء.",
      "تبّلي واهرسي جزءًا منها للقوام.",
    ],
    blockedBy: ["milk"],
  },

  // —— جانبية ——
  {
    id: "hummus-plate",
    name: "صحن حمص بيتي",
    image: "images/dish-hummus.jpg",
    cuisine: "خليجي",
    category: "side",
    minutes: 15,
    servingsAdult: 2,
    tags: ["سريع", "خفيف", "ميزانية"],
    ingredients: [
      { key: "chickpeas", label: "حمص" },
      { key: "lemon", label: "ليمون" },
      { key: "garlic", label: "ثوم", optional: true },
      { key: "cucumber", label: "خيار", optional: true },
    ],
    steps: [
      "اهرسي الحمص مع ليمون وثوم وطحينة إن توفرت.",
      "عدّلي الملح والقوام.",
      "قدّميه مع خيار.",
    ],
  },
  {
    id: "fattoush",
    name: "فتوش",
    image: "images/dish-fattoush.jpg",
    cuisine: "خليجي",
    category: "side",
    minutes: 15,
    servingsAdult: 3,
    tags: ["سريع", "خفيف"],
    ingredients: [
      { key: "cucumber", label: "خيار" },
      { key: "tomato", label: "طماطم" },
      { key: "bread", label: "خبز", optional: true },
      { key: "lemon", label: "ليمون" },
    ],
    steps: [
      "قطّعي الخضار.",
      "أضيفي خبز محمّص إن أحببتِ.",
      "تبّلي بليمون وزيت وملح.",
    ],
    blockedBy: ["gluten"],
  },
  {
    id: "guacamole",
    name: "جواكامولي",
    image: "images/dish-guacamole.jpg",
    cuisine: "مكسيكي",
    category: "side",
    minutes: 10,
    servingsAdult: 2,
    tags: ["سريع", "خفيف"],
    ingredients: [
      { key: "avocado", label: "أفوكادو" },
      { key: "lemon", label: "ليمون" },
      { key: "tomato", label: "طماطم", optional: true },
      { key: "onion", label: "بصل", optional: true },
    ],
    steps: [
      "اهرسي الأفوكادو.",
      "أضيفي ليمون وملح وطماطم وبصل مفروم.",
      "قدّميه مع تورتيلا أو خضار.",
    ],
  },
  {
    id: "garlic-bread-side",
    name: "خبز بالثوم جانبي",
    image: "images/dish-garlic-bread.jpg",
    cuisine: "إيطالي",
    category: "side",
    minutes: 12,
    servingsAdult: 3,
    tags: ["سريع"],
    ingredients: [
      { key: "bread", label: "خبز" },
      { key: "garlic", label: "ثوم" },
      { key: "butter", label: "زبدة", optional: true },
      { key: "cheese", label: "جبن", optional: true },
    ],
    steps: [
      "اخلطي ثوم مع زبدة أو زيت.",
      "ادهني الخبز ورشّي جبن إن أحببتِ.",
      "حمّصي حتى يحمر الطرف.",
    ],
    blockedBy: ["gluten", "milk"],
  },
  {
    id: "mexican-rice",
    name: "أرز مكسيكي",
    image: "images/dish-mexican-rice.jpg",
    cuisine: "مكسيكي",
    category: "side",
    minutes: 30,
    servingsAdult: 4,
    tags: ["ميزانية"],
    ingredients: [
      { key: "rice", label: "أرز" },
      { key: "tomato", label: "طماطم" },
      { key: "onion", label: "بصل" },
      { key: "corn", label: "ذرة", optional: true },
    ],
    steps: [
      "شوّحي الأرز مع البصل.",
      "أضيفي صلصة طماطم وماء.",
      "أضيفي ذرة إن توفّرت واتركيه ينضج.",
    ],
  },
  {
    id: "garlic-bread-eggs",
    name: "بيض مقلي مع خبز",
    image: "images/dish-fried-eggs-toast.jpg",
    cuisine: "خليجي",
    category: "side",
    minutes: 10,
    servingsAdult: 1,
    tags: ["سريع", "ميزانية"],
    ingredients: [
      { key: "egg", label: "بيض" },
      { key: "bread", label: "خبز" },
      { key: "tomato", label: "طماطم", optional: true },
    ],
    steps: [
      "حمّصي الخبز.",
      "اقلي البيض.",
      "أضيفي طماطم شرائح إن توفرت.",
    ],
    blockedBy: ["egg"],
  },

  // —— خبز ——
  {
    id: "flatbread",
    name: "خبز صاج سريع",
    image: "images/dish-flatbread.jpg",
    cuisine: "خليجي",
    category: "bread",
    minutes: 30,
    servingsAdult: 4,
    tags: ["ميزانية"],
    ingredients: [
      { key: "flour", label: "دقيق" },
      { key: "yogurt", label: "لبن", optional: true },
    ],
    steps: [
      "اخلطي الدقيق مع ماء وملح (ولبن إن توفّر).",
      "اعجني وافردي رقيقًا.",
      "اخبزي على مقلاة ساخنة من الجهتين.",
    ],
    blockedBy: ["gluten", "yogurt", "milk"],
  },
  {
    id: "focaccia-easy",
    name: "فوكاتشا إيطالية خفيفة",
    image: "images/dish-focaccia.jpg",
    cuisine: "إيطالي",
    category: "bread",
    minutes: 50,
    servingsAdult: 4,
    tags: ["استقبال"],
    ingredients: [
      { key: "flour", label: "دقيق" },
      { key: "garlic", label: "ثوم", optional: true },
      { key: "tomato", label: "طماطم كرزية", optional: true },
    ],
    steps: [
      "اعجني العجين واتركيه يختمر.",
      "افرديه بصينية وادخلي أصابعك لعمل نقرات.",
      "زيّني بثوم وطماطم واخبزي حتى يحمر.",
    ],
    blockedBy: ["gluten"],
  },
  {
    id: "cornbread",
    name: "خبز ذرة مكسيكي",
    image: "images/dish-cornbread.jpg",
    cuisine: "مكسيكي",
    category: "bread",
    minutes: 40,
    servingsAdult: 4,
    tags: ["ميزانية"],
    ingredients: [
      { key: "corn", label: "دقيق ذرة / ذرة" },
      { key: "flour", label: "دقيق", optional: true },
      { key: "egg", label: "بيض" },
      { key: "milk", label: "حليب" },
      { key: "butter", label: "زبدة", optional: true },
    ],
    steps: [
      "اخلطي المكونات الجافة ثم الرطبة.",
      "اسكبي في صينية واخبزي حتى ينضج الوسط.",
    ],
    blockedBy: ["egg", "milk", "gluten"],
  },

  // —— معجنات ——
  {
    id: "mutabbaq",
    name: "مطبق لحم أو خضار",
    image: "images/dish-mutabbaq.jpg",
    cuisine: "خليجي",
    category: "pastry",
    minutes: 40,
    servingsAdult: 4,
    tags: ["ميزانية"],
    ingredients: [
      { key: "flour", label: "دقيق" },
      { key: "mince", label: "لحم مفروم", optional: true },
      { key: "onion", label: "بصل" },
      { key: "egg", label: "بيض", optional: true },
    ],
    steps: [
      "حضّري عجينة رقيقة.",
      "اقلي الحشوة (بصل + لحم أو خضار).",
      "غلّفي الحشوة بالعجين.",
      "اقلي المطبق حتى يحمر.",
    ],
    blockedBy: ["gluten"],
  },
  {
    id: "sambousek",
    name: "سمبوسة لحم",
    image: "images/dish-sambousek.jpg",
    cuisine: "خليجي",
    category: "pastry",
    minutes: 45,
    servingsAdult: 5,
    tags: ["استقبال"],
    ingredients: [
      { key: "flour", label: "عجينة / دقيق" },
      { key: "mince", label: "لحم مفروم" },
      { key: "onion", label: "بصل" },
    ],
    steps: [
      "حضّري حشوة اللحم والبصل.",
      "غلّفي المثلثات واقلي أو اخبزي.",
    ],
    blockedBy: ["gluten"],
  },
  {
    id: "cheese-pastry",
    name: "معجنات جبن بالفرن",
    image: "images/dish-cheese-pastry.jpg",
    cuisine: "خليجي",
    category: "pastry",
    minutes: 35,
    servingsAdult: 4,
    tags: ["سريع"],
    ingredients: [
      { key: "flour", label: "عجينة جاهزة / دقيق" },
      { key: "cheese", label: "جبن" },
      { key: "egg", label: "بيض", optional: true },
    ],
    steps: [
      "احشي العجينة بالجبن.",
      "ادهني ببيض إن أحببتِ.",
      "اخبزي حتى تحمر.",
    ],
    blockedBy: ["gluten", "milk", "egg"],
  },
  {
    id: "empanadas",
    name: "إمباناداس مكسيكية",
    image: "images/dish-empanadas.jpg",
    cuisine: "مكسيكي",
    category: "pastry",
    minutes: 50,
    servingsAdult: 4,
    tags: ["استقبال"],
    ingredients: [
      { key: "flour", label: "دقيق" },
      { key: "mince", label: "لحم مفروم", optional: true },
      { key: "beans", label: "فاصوليا", optional: true },
      { key: "cheese", label: "جبن", optional: true },
      { key: "onion", label: "بصل" },
      { key: "pepper", label: "فلفل رومي", optional: true },
    ],
    steps: [
      "حضّري عجينة دوائر.",
      "احشي باللحم أو الفاصوليا والجبن.",
      "أغلقي الحواف واخبزي أو اقلي.",
    ],
    blockedBy: ["gluten", "milk"],
  },
  {
    id: "calzone",
    name: "كالزوني إيطالي",
    image: "images/dish-calzone.jpg",
    cuisine: "إيطالي",
    category: "pastry",
    minutes: 45,
    servingsAdult: 3,
    tags: ["استقبال"],
    ingredients: [
      { key: "flour", label: "دقيق" },
      { key: "cheese", label: "جبن" },
      { key: "tomato", label: "طماطم" },
      { key: "chicken", label: "دجاج", optional: true },
    ],
    steps: [
      "افردي عجينة البيتزا.",
      "ضعي الحشوة على نصفها وطبّقي.",
      "اخبزي حتى يحمر السطح.",
    ],
    blockedBy: ["gluten", "milk"],
  },

  // —— حلويات ——
  {
    id: "date-balls",
    name: "كرات تمر بالمكسرات",
    image: "images/dish-date-balls.jpg",
    cuisine: "خليجي",
    category: "dessert",
    minutes: 15,
    servingsAdult: 4,
    tags: ["سريع", "خفيف"],
    ingredients: [
      { key: "dates", label: "تمر" },
      { key: "nuts", label: "مكسرات", optional: true },
    ],
    steps: [
      "اهرسي التمر.",
      "اخلطيه بمكسرات مطحونة إن توفّرت.",
      "شكّلي كرات وقدّميها.",
    ],
    blockedBy: ["nuts"],
  },
  {
    id: "rice-pudding",
    name: "أرز بالحليب",
    image: "images/dish-rice-pudding.jpg",
    cuisine: "خليجي",
    category: "dessert",
    minutes: 35,
    servingsAdult: 4,
    tags: ["ميزانية"],
    ingredients: [
      { key: "rice", label: "أرز" },
      { key: "milk", label: "حليب" },
      { key: "sugar", label: "سكر" },
    ],
    steps: [
      "اسلقي الأرز بقليل من الماء.",
      "أضيفي الحليب والسكر وحرّكي حتى يثخن.",
      "برّديه وقدّميه.",
    ],
    blockedBy: ["milk"],
  },
  {
    id: "basbousa",
    name: "بسبوسة سريعة",
    image: "images/dish-basbousa.jpg",
    cuisine: "خليجي",
    category: "dessert",
    minutes: 45,
    servingsAdult: 6,
    tags: ["استقبال"],
    ingredients: [
      { key: "flour", label: "سميد / دقيق" },
      { key: "sugar", label: "سكر" },
      { key: "yogurt", label: "لبن" },
      { key: "butter", label: "زبدة", optional: true },
      { key: "nuts", label: "مكسرات", optional: true },
    ],
    steps: [
      "اخلطي المكونات واسكبي في صينية.",
      "اخبزي حتى تحمر.",
      "اسكبي شيرة خفيفة فوقها وهي ساخنة.",
    ],
    blockedBy: ["gluten", "yogurt", "milk", "nuts"],
  },
  {
    id: "tiramisu-easy",
    name: "تيراميسو مبسّط",
    image: "images/dish-tiramisu.jpg",
    cuisine: "إيطالي",
    category: "dessert",
    minutes: 25,
    servingsAdult: 4,
    tags: ["استقبال"],
    ingredients: [
      { key: "cream", label: "كريمة / قشطة" },
      { key: "cheese", label: "جبن مساكاربوني / كريمي" },
      { key: "sugar", label: "سكر" },
      { key: "egg", label: "بيض", optional: true },
    ],
    steps: [
      "اخفقي الكريمة والجبن مع سكر.",
      "رتّبي طبقات بسكويت مغموس بقهوة مع الكريمة.",
      "برّدي قبل التقديم.",
    ],
    blockedBy: ["milk", "egg", "gluten"],
  },
  {
    id: "churros",
    name: "تشوروز منزلية",
    image: "images/dish-churros.jpg",
    cuisine: "مكسيكي",
    category: "dessert",
    minutes: 40,
    servingsAdult: 4,
    tags: ["استقبال"],
    ingredients: [
      { key: "flour", label: "دقيق" },
      { key: "egg", label: "بيض" },
      { key: "sugar", label: "سكر" },
      { key: "butter", label: "زبدة", optional: true },
    ],
    steps: [
      "حضّري عجينة مسلوقة خفيفة.",
      "أضيفي البيض وشكّلي أصابع.",
      "اقلي ورشّي سكر وقرفة.",
    ],
    blockedBy: ["gluten", "egg", "milk"],
  },
  {
    id: "banana-pudding",
    name: "بودينغ موز سريع",
    image: "images/dish-banana-pudding.jpg",
    cuisine: "خليجي",
    category: "dessert",
    minutes: 15,
    servingsAdult: 2,
    tags: ["سريع"],
    ingredients: [
      { key: "banana", label: "موز" },
      { key: "milk", label: "حليب" },
      { key: "sugar", label: "سكر", optional: true },
    ],
    steps: [
      "اهرسي الموز مع حليب وسكر.",
      "برّدي قليلًا وقدّمي.",
    ],
    blockedBy: ["banana", "milk"],
  },

  // —— عصائر ——
  {
    id: "orange-juice",
    name: "عصير برتقال طازج",
    image: "images/dish-orange-juice.jpg",
    cuisine: "خليجي",
    category: "juice",
    minutes: 10,
    servingsAdult: 2,
    tags: ["سريع", "خفيف"],
    ingredients: [{ key: "orange", label: "برتقال" }],
    steps: ["اعصري البرتقال وقدّميه باردًا أو مع ثلج."],
  },
  {
    id: "lemon-mint",
    name: "ليمون بالنعناع",
    image: "images/dish-lemonade-mint.jpg",
    cuisine: "خليجي",
    category: "juice",
    minutes: 10,
    servingsAdult: 2,
    tags: ["سريع", "خفيف"],
    ingredients: [
      { key: "lemon", label: "ليمون" },
      { key: "sugar", label: "سكر", optional: true },
    ],
    steps: [
      "اعصري الليمون مع ماء ونعناع وسكر حسب الرغبة.",
      "قدّميه مثلّجًا.",
    ],
  },
  {
    id: "mango-smoothie",
    name: "سموذي مانجو",
    image: "images/dish-mango-smoothie.jpg",
    cuisine: "خليجي",
    category: "juice",
    minutes: 10,
    servingsAdult: 2,
    tags: ["سريع"],
    ingredients: [
      { key: "mango", label: "مانجو" },
      { key: "milk", label: "حليب", optional: true },
      { key: "yogurt", label: "لبن", optional: true },
      { key: "sugar", label: "سكر", optional: true },
    ],
    steps: ["اخفقي المانجو مع حليب أو لبن وسكر وقدّمي باردًا."],
    blockedBy: ["milk", "yogurt"],
  },
  {
    id: "strawberry-milk",
    name: "حليب فراولة",
    image: "images/dish-strawberry-milk.jpg",
    cuisine: "خليجي",
    category: "juice",
    minutes: 8,
    servingsAdult: 2,
    tags: ["سريع"],
    ingredients: [
      { key: "strawberries", label: "فراولة" },
      { key: "milk", label: "حليب" },
      { key: "sugar", label: "سكر", optional: true },
    ],
    steps: ["اخفقي الفراولة مع الحليب والسكر وقدّمي مثلّجًا."],
    blockedBy: ["milk"],
  },
  {
    id: "avocado-smoothie",
    name: "عصير أفوكادو",
    image: "images/dish-avocado-smoothie.jpg",
    cuisine: "مكسيكي",
    category: "juice",
    minutes: 10,
    servingsAdult: 2,
    tags: ["سريع", "خفيف"],
    ingredients: [
      { key: "avocado", label: "أفوكادو" },
      { key: "milk", label: "حليب" },
      { key: "sugar", label: "سكر", optional: true },
    ],
    steps: ["اخفقي الأفوكادو مع الحليب وسكر خفيف وقدّمي باردًا."],
    blockedBy: ["milk"],
  },
  {
    id: "banana-milkshake",
    name: "ميلك شيك موز",
    image: "images/dish-banana-milkshake.jpg",
    cuisine: "خليجي",
    category: "juice",
    minutes: 8,
    servingsAdult: 2,
    tags: ["سريع"],
    ingredients: [
      { key: "banana", label: "موز" },
      { key: "milk", label: "حليب" },
      { key: "sugar", label: "سكر", optional: true },
    ],
    steps: ["اخفقي الموز والحليب حتى يصير ناعمًا وقدّمي فورًا."],
    blockedBy: ["banana", "milk"],
  },
];

Thalajati.filterByAllergens = function (recipes, blocked) {
  if (!blocked.length) return recipes.slice();
  var set = {};
  blocked.forEach(function (b) {
    set[b] = true;
  });
  return recipes.filter(function (recipe) {
    if ((recipe.blockedBy || []).some(function (b) {
      return set[b];
    }))
      return false;
    if (
      recipe.ingredients.some(function (i) {
        return set[i.key];
      })
    )
      return false;
    return true;
  });
};

Thalajati.filterByMenuPrefs = function (recipes, categories, cuisines) {
  var catSet = null;
  var cuisineSet = null;
  if (categories && categories.length) {
    catSet = {};
    categories.forEach(function (c) {
      catSet[c] = true;
    });
  }
  if (cuisines && cuisines.length) {
    cuisineSet = {};
    cuisines.forEach(function (c) {
      cuisineSet[c] = true;
    });
  }
  return recipes.filter(function (recipe) {
    if (catSet && !catSet[recipe.category || "main"]) return false;
    if (cuisineSet && !cuisineSet[recipe.cuisine]) return false;
    return true;
  });
};

Thalajati.scoreRecipe = function (recipe, availableSet, peopleCount) {
  var required = recipe.ingredients.filter(function (i) {
    return !i.optional;
  });
  var have = recipe.ingredients.filter(function (i) {
    return availableSet[i.key];
  });
  var need = recipe.ingredients.filter(function (i) {
    return !availableSet[i.key] && !i.optional;
  });
  var optionalNeed = recipe.ingredients.filter(function (i) {
    return !availableSet[i.key] && i.optional;
  });
  var haveRequired = have.filter(function (h) {
    return !h.optional;
  }).length;
  var coverage = required.length === 0 ? 1 : haveRequired / required.length;
  var peopleBonus =
    peopleCount <= recipe.servingsAdult + 1
      ? 0.05
      : peopleCount > recipe.servingsAdult + 2
        ? -0.08
        : 0;
  var score =
    coverage * 10 + have.length - need.length * 1.5 - optionalNeed.length * 0.2 + peopleBonus;
  return {
    recipe: recipe,
    have: have,
    need: need.concat(optionalNeed),
    score: score,
    coverage: coverage,
  };
};

Thalajati.matchRecipes = function (available, blocked, peopleCount, categories, cuisines) {
  var availableSet = {};
  available.forEach(function (k) {
    availableSet[k] = true;
  });
  var catalog = Thalajati.getAllRecipes ? Thalajati.getAllRecipes() : Thalajati.RECIPES;
  var pool = Thalajati.filterByMenuPrefs(
    Thalajati.filterByAllergens(catalog, blocked),
    categories,
    cuisines,
  );

  return pool
    .map(function (recipe) {
      return Thalajati.scoreRecipe(recipe, availableSet, peopleCount);
    })
    .filter(function (r) {
      return r.coverage >= 0.34 || r.have.length >= 2 || r.recipe.ingredients.length <= 2;
    })
    .sort(function (a, b) {
      return b.score - a.score;
    });
};

Thalajati.suggestForEmptyFridge = function (blocked, peopleCount, categories, cuisines) {
  var catalog = Thalajati.getAllRecipes ? Thalajati.getAllRecipes() : Thalajati.RECIPES;
  return Thalajati.filterByMenuPrefs(
    Thalajati.filterByAllergens(catalog, blocked),
    categories,
    cuisines,
  )
    .map(function (recipe) {
      var need = recipe.ingredients.filter(function (i) {
        return !i.optional;
      });
      var optionalNeed = recipe.ingredients.filter(function (i) {
        return i.optional;
      });
      var peopleBonus = peopleCount <= recipe.servingsAdult + 1 ? 2 : 0;
      var speedBonus = (recipe.tags || []).indexOf("سريع") >= 0 ? 4 : 0;
      var budgetBonus = (recipe.tags || []).indexOf("ميزانية") >= 0 ? 3 : 0;
      var score = speedBonus + budgetBonus + peopleBonus - need.length * 0.8 - recipe.minutes / 20;
      return {
        recipe: recipe,
        have: [],
        need: need.concat(optionalNeed),
        score: score,
        coverage: 0,
      };
    })
    .sort(function (a, b) {
      return b.score - a.score;
    });
};

Thalajati.groupMatchesByCategory = function (matches, perCategory) {
  var limit = perCategory == null ? 8 : perCategory;
  var byKey = {};
  matches.forEach(function (match) {
    var key = match.recipe.category || "main";
    if (!byKey[key]) byKey[key] = [];
    if (byKey[key].length < limit) byKey[key].push(match);
  });

  return Thalajati.CATEGORIES.map(function (cat) {
    return {
      key: cat.key,
      label: cat.label,
      matches: byKey[cat.key] || [],
    };
  }).filter(function (section) {
    return section.matches.length > 0;
  });
};

Thalajati.pickRandomRecipe = function (blocked, recentIds) {
  var catalog = Thalajati.getAllRecipes ? Thalajati.getAllRecipes() : Thalajati.RECIPES;
  var pool = Thalajati.filterByAllergens(catalog, blocked).filter(function (r) {
    return (r.category || "main") === "main";
  });
  var fresh = pool.filter(function (r) {
    return recentIds.indexOf(r.id) === -1;
  });
  var usePool = fresh.length ? fresh : pool;
  var recipe = usePool[Math.floor(Math.random() * usePool.length)] || pool[0];
  return { recipe: recipe, recycled: !fresh.length && pool.length > 0 };
};
