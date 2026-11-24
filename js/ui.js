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

  return (
    '<article class="recipe-card' +
    openClass +
    '">' +
    '<div class="recipe-media"><img src="' +
    recipe.image +
    '" alt="' +
    recipe.name +
    '" loading="lazy"></div>' +
    '<button type="button" class="recipe-head" aria-expanded="' +
    (options.defaultOpen ? "true" : "false") +
    '">' +
    "<div><h3>" +
    recipe.name +
    "</h3><p>حوالي " +
    recipe.minutes +
    " د · تكفي ~" +
    recipe.servingsAdult +
    " أشخاص" +
    (recipe.tags.length ? " · " + recipe.tags.join(" · ") : "") +
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

Thalajati.bindRecipeToggles = function (root) {
  root.querySelectorAll(".recipe-card .recipe-head").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".recipe-card");
      var open = card.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
};
