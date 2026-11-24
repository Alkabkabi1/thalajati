window.Thalajati = window.Thalajati || {};

Thalajati.COMMON_INGREDIENTS = [
  { key: "chicken", label: "دجاج" },
  { key: "rice", label: "أرز" },
  { key: "tomato", label: "طماطم" },
  { key: "onion", label: "بصل" },
  { key: "potato", label: "بطاطس" },
  { key: "egg", label: "بيض" },
  { key: "yogurt", label: "لبن / زبادي" },
  { key: "bread", label: "خبز" },
  { key: "pasta", label: "معكرونة" },
  { key: "lentils", label: "عدس" },
  { key: "chickpeas", label: "حمص" },
  { key: "mince", label: "لحم مفروم" },
  { key: "lamb", label: "لحم غنم" },
  { key: "fish", label: "سمك" },
  { key: "garlic", label: "ثوم" },
  { key: "lemon", label: "ليمون" },
  { key: "cucumber", label: "خيار" },
  { key: "flour", label: "دقيق" },
  { key: "dates", label: "تمر" },
  { key: "milk", label: "حليب" },
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

Thalajati.RECIPES = [
  {
    id: "chicken-rice",
    name: "رز بخاري بالدجاج",
    image: "images/recipe-bukhari.jpg",
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
    image: "images/recipe-marqooq.jpg",
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
    image: "images/recipe-kabsa.jpg",
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
    id: "egg-shakshuka",
    name: "شكشوكة بيض",
    image: "images/recipe-shakshuka.jpg",
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
    id: "pasta-mince",
    name: "معكرونة باللحم المفروم",
    image: "images/recipe-pasta.jpg",
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
    id: "lentil-soup",
    name: "شوربة عدس",
    image: "images/recipe-lentil.jpg",
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
    id: "potato-omelette",
    name: "عجة بطاطس",
    image: "images/recipe-omelette.jpg",
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
    id: "mutabbaq",
    name: "مطبق لحم أو خضار",
    image: "images/recipe-mutabbaq.jpg",
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
    id: "hummus-plate",
    name: "صحن حمص بيتي مع خبز",
    image: "images/recipe-hummus.jpg",
    minutes: 15,
    servingsAdult: 2,
    tags: ["سريع", "خفيف", "ميزانية"],
    ingredients: [
      { key: "chickpeas", label: "حمص" },
      { key: "lemon", label: "ليمون" },
      { key: "bread", label: "خبز" },
      { key: "cucumber", label: "خيار", optional: true },
    ],
    steps: [
      "اهرسي الحمص مع ليمون وثوم وطحينة إن توفرت.",
      "عدّلي الملح والقوام.",
      "قدّميه مع خبز وخيار.",
    ],
  },
  {
    id: "yogurt-salad-meal",
    name: "فتّة دجاج خفيفة",
    image: "images/recipe-fatteh.jpg",
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
  {
    id: "fish-rice",
    name: "سمك مقلي مع أرز أبيض",
    image: "images/recipe-fish.jpg",
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
    image: "images/recipe-stew.jpg",
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
    id: "makluba",
    name: "مقلوبة خضار مبسّطة",
    image: "images/recipe-bukhari.jpg",
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
    id: "garlic-bread-eggs",
    name: "بيض مقلي مع خبز",
    image: "images/recipe-omelette.jpg",
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
  {
    id: "balaleet",
    name: "بلاليط",
    image: "images/recipe-pasta.jpg",
    minutes: 25,
    servingsAdult: 3,
    tags: ["سريع"],
    ingredients: [
      { key: "pasta", label: "شعيرية / معكرونة" },
      { key: "egg", label: "بيض" },
    ],
    steps: [
      "اسلقي الشعيرية وصفيها.",
      "حلّيها قليلًا حسب الذوق.",
      "اقلي بيض عجة وقدّميه فوقها.",
    ],
    blockedBy: ["egg", "gluten"],
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

Thalajati.matchRecipes = function (available, blocked, peopleCount) {
  var availableSet = {};
  available.forEach(function (k) {
    availableSet[k] = true;
  });
  var pool = Thalajati.filterByAllergens(Thalajati.RECIPES, blocked);

  return pool
    .map(function (recipe) {
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
    })
    .filter(function (r) {
      return r.coverage >= 0.34 || r.have.length >= 2;
    })
    .sort(function (a, b) {
      return b.score - a.score;
    })
    .slice(0, 3);
};

Thalajati.suggestForEmptyFridge = function (blocked, peopleCount) {
  return Thalajati.filterByAllergens(Thalajati.RECIPES, blocked)
    .map(function (recipe) {
      var need = recipe.ingredients.filter(function (i) {
        return !i.optional;
      });
      var optionalNeed = recipe.ingredients.filter(function (i) {
        return i.optional;
      });
      var peopleBonus = peopleCount <= recipe.servingsAdult + 1 ? 2 : 0;
      var speedBonus = recipe.tags.indexOf("سريع") >= 0 ? 4 : 0;
      var budgetBonus = recipe.tags.indexOf("ميزانية") >= 0 ? 3 : 0;
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
    })
    .slice(0, 3);
};

Thalajati.pickRandomRecipe = function (blocked, recentIds) {
  var pool = Thalajati.filterByAllergens(Thalajati.RECIPES, blocked);
  var fresh = pool.filter(function (r) {
    return recentIds.indexOf(r.id) === -1;
  });
  var usePool = fresh.length ? fresh : pool;
  var recipe = usePool[Math.floor(Math.random() * usePool.length)] || pool[0];
  return { recipe: recipe, recycled: !fresh.length && pool.length > 0 };
};
