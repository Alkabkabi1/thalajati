window.Thalajati = window.Thalajati || {};

Thalajati.renderRecipeCard = function (match, options) {
  options = options || {};
  var recipe = match.recipe;
  var haveKeys = {};
  (match.have || []).forEach(function (h) {
    haveKeys[h.key] = true;
  });
  var showAvailability = options.showAvailability !== false;
  var openClass = options.defaultOpen ? " is-open" : "";
  var standaloneClass = options.standalone ? " is-standalone" : "";
  var needLabels = (match.need || [])
    .filter(function (n) {
      return !n.optional;
    })
    .map(function (n) {
      return n.label;
    });

  var ingredientsHtml = recipe.ingredients
    .map(function (ing) {
      var status = "";
      if (showAvailability) {
        status = haveKeys[ing.key]
          ? '<span class="have">عندك ✓</span>'
          : '<span class="need">اشتري 🛒</span>';
      }
      return (
        "<li><span>" +
        ing.label +
        (ing.optional ? " (اختياري)" : "") +
        "</span>" +
        status +
        "</li>"
      );
    })
    .join("");

  var stepsHtml = recipe.steps
    .map(function (step) {
      return "<li>" + step + "</li>";
    })
    .join("");

  var shopHint =
    showAvailability && needLabels.length
      ? '<div class="shop-hint">للتسوق السريع: ' + needLabels.join("، ") + "</div>"
      : "";

  var cuisineBit = recipe.cuisine ? " · " + recipe.cuisine : "";
  var tagsBit = recipe.tags && recipe.tags.length ? " · " + recipe.tags.join(" · ") : "";
  var fallbackLetter = (recipe.name || "?").charAt(0);
  var media =
    '<div class="recipe-media"><img src="' +
    recipe.image +
    '" alt="' +
    recipe.name +
    '" loading="lazy" data-fallback="' +
    fallbackLetter +
    '"></div>';

  return (
    '<article class="recipe-card' +
    openClass +
    standaloneClass +
    '">' +
    media +
    '<button type="button" class="recipe-head" aria-expanded="' +
    (options.defaultOpen ? "true" : "false") +
    '">' +
    '<div class="recipe-head-text"><h3>' +
    recipe.name +
    "</h3><p>حوالي " +
    recipe.minutes +
    " د · ~" +
    recipe.servingsAdult +
    " أشخاص" +
    cuisineBit +
    tagsBit +
    "</p></div>" +
    "<span aria-hidden='true'>▾</span>" +
    "</button>" +
    '<div class="recipe-body">' +
    "<h4>المكونات</h4>" +
    '<ul class="ing-list">' +
    ingredientsHtml +
    "</ul>" +
    shopHint +
    "<h4>الخطوات</h4>" +
    '<ol class="steps">' +
    stepsHtml +
    "</ol>" +
    "</div></article>"
  );
};

Thalajati.renderPreviewCard = function (recipe) {
  return (
    '<article class="preview-card">' +
    '<div class="preview-media"><img src="' +
    recipe.image +
    '" alt="' +
    recipe.name +
    '" loading="lazy"></div>' +
    '<div class="preview-body"><p class="preview-kicker">مثال نتيجة</p><h3>' +
    recipe.name +
    "</h3><p>حوالي " +
    recipe.minutes +
    " د · ~" +
    recipe.servingsAdult +
    " أشخاص · " +
    (recipe.cuisine || "") +
    "</p></div></article>"
  );
};

Thalajati.flashRecipeSwap = function (el) {
  if (!el) return;
  el.classList.remove("is-fading");
  void el.offsetWidth;
  el.classList.add("is-fading");
  window.setTimeout(function () {
    el.classList.remove("is-fading");
  }, 320);
};

Thalajati.mountMenuPager = function (root, sections, options) {
  options = options || {};
  if (!sections.length) {
    root.innerHTML = "";
    return null;
  }

  var catIndex = 0;
  var recipeIndex = 0;
  var currentSections = sections;

  root.innerHTML =
    '<div class="menu-pager fade-up">' +
    '<div class="category-tabs" id="categoryTabs" role="tablist" aria-label="أقسام القائمة"></div>' +
    '<div class="menu-pager-recipe-row">' +
    '<button type="button" class="nav-btn" data-recipe-step="-1" aria-label="الوصفة السابقة">‹</button>' +
    '<div class="menu-pager-card" id="pagerCard"></div>' +
    '<button type="button" class="nav-btn" data-recipe-step="1" aria-label="الوصفة التالية">›</button>' +
    "</div>" +
    '<div class="pager-thumbs" id="pagerThumbs" aria-label="وصفات قريبة"></div>' +
    "</div>";

  var tabsEl = root.querySelector("#categoryTabs");
  var cardEl = root.querySelector("#pagerCard");
  var thumbsEl = root.querySelector("#pagerThumbs");
  var recipePrev = root.querySelector('[data-recipe-step="-1"]');
  var recipeNext = root.querySelector('[data-recipe-step="1"]');

  function currentSection() {
    return currentSections[catIndex];
  }

  function renderTabs() {
    tabsEl.innerHTML = currentSections
      .map(function (section, i) {
        return (
          '<button type="button" class="category-tab' +
          (i === catIndex ? " is-active" : "") +
          '" data-cat-index="' +
          i +
          '" role="tab" aria-selected="' +
          (i === catIndex ? "true" : "false") +
          '">' +
          section.label +
          "</button>"
        );
      })
      .join("");

    tabsEl.querySelectorAll("[data-cat-index]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        catIndex = Number(btn.getAttribute("data-cat-index"));
        recipeIndex = 0;
        render();
      });
    });
  }

  function render() {
    if (!currentSections.length) {
      cardEl.innerHTML = "";
      return;
    }
    if (catIndex >= currentSections.length) catIndex = 0;
    var section = currentSection();
    var matches = section.matches;
    if (recipeIndex >= matches.length) recipeIndex = matches.length - 1;
    if (recipeIndex < 0) recipeIndex = 0;

    renderTabs();

    cardEl.innerHTML = Thalajati.renderRecipeCard(matches[recipeIndex], {
      defaultOpen: true,
      showAvailability: options.showAvailability,
      standalone: true,
    });
    Thalajati.bindRecipeToggles(cardEl);
    Thalajati.flashRecipeSwap(cardEl);
    renderThumbs(matches);

    recipePrev.disabled = recipeIndex <= 0;
    recipeNext.disabled = recipeIndex >= matches.length - 1;
  }

  function renderThumbs(matches) {
    if (!thumbsEl) return;
    if (matches.length <= 1) {
      thumbsEl.innerHTML = "";
      return;
    }

    var start = Math.max(0, recipeIndex - 1);
    if (start + 3 > matches.length) start = Math.max(0, matches.length - 3);
    var end = Math.min(matches.length, start + 3);
    var html = "";
    for (var i = start; i < end; i++) {
      var recipe = matches[i].recipe;
      html +=
        '<button type="button" class="pager-thumb' +
        (i === recipeIndex ? " is-active" : "") +
        '" data-thumb-index="' +
        i +
        '" aria-label="' +
        recipe.name +
        '">' +
        '<img src="' +
        recipe.image +
        '" alt="" loading="lazy">' +
        "<span>" +
        recipe.name +
        "</span></button>";
    }
    thumbsEl.innerHTML = html;
    thumbsEl.querySelectorAll("[data-thumb-index]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        recipeIndex = Number(btn.getAttribute("data-thumb-index"));
        render();
      });
    });
  }

  recipePrev.addEventListener("click", function () {
    if (recipeIndex <= 0) return;
    recipeIndex -= 1;
    render();
  });

  recipeNext.addEventListener("click", function () {
    if (recipeIndex >= currentSection().matches.length - 1) return;
    recipeIndex += 1;
    render();
  });

  render();

  return {
    updateSections: function (nextSections) {
      currentSections = nextSections || [];
      catIndex = 0;
      recipeIndex = 0;
      if (!currentSections.length) {
        root.innerHTML = "";
        return;
      }
      if (!root.querySelector(".menu-pager")) {
        Thalajati.mountMenuPager(root, currentSections, options);
        return;
      }
      render();
    },
  };
};

Thalajati.bindRecipeToggles = function (root) {
  root.querySelectorAll(".recipe-card .recipe-head").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".recipe-card");
      var willOpen = !card.classList.contains("is-open");
      card.classList.toggle("is-open", willOpen);
      btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
  });

  root.querySelectorAll(".recipe-media img, img.recipe-icon").forEach(function (img) {
    function showFallback() {
      if (img.dataset.fallen) return;
      img.dataset.fallen = "1";
      var letter = img.getAttribute("data-fallback") || "?";
      var parent = img.parentElement;
      if (parent && parent.classList.contains("recipe-media")) {
        parent.classList.add("is-fallback");
        parent.textContent = letter;
        return;
      }
      var placeholder = document.createElement("div");
      placeholder.className = "recipe-icon is-fallback";
      placeholder.setAttribute("aria-hidden", "true");
      placeholder.textContent = letter;
      img.replaceWith(placeholder);
    }
    img.addEventListener("error", showFallback);
    if (img.complete && img.naturalWidth === 0) showFallback();
  });
};
