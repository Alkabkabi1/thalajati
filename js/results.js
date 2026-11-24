(function () {
  var session = Thalajati.loadSession();
  if (!session) {
    window.location.href = "fridge.html";
    return;
  }

  var allMatches = session.matches || [];
  var title = document.getElementById("resultsTitle");
  var list = document.getElementById("resultsList");
  var empty = document.getElementById("emptyState");
  var shopBox = document.getElementById("shopBox");
  var shopTags = document.getElementById("shopTags");
  var filterPanel = document.getElementById("filterPanel");
  var filterToggle = document.getElementById("filterToggle");
  var filterBody = document.getElementById("filterBody");
  var filterSummary = document.getElementById("filterSummary");
  var filterDot = document.getElementById("filterDot");
  var categoryFilterChips = document.getElementById("categoryFilterChips");
  var cuisineFilterChips = document.getElementById("cuisineFilterChips");
  var suggestChips = document.getElementById("suggestChips");

  if (filterToggle && filterBody) {
    filterToggle.addEventListener("click", function () {
      var open = filterPanel.classList.toggle("is-open");
      filterToggle.setAttribute("aria-expanded", open ? "true" : "false");
      filterBody.hidden = !open;
      var chevron = filterToggle.querySelector(".filter-chevron");
      if (chevron) chevron.textContent = open ? "▴" : "▾";
    });
  }

  var selectedCategories =
    session.categories && session.categories.length
      ? session.categories.slice()
      : Thalajati.CATEGORIES.map(function (c) {
          return c.key;
        });
  var selectedCuisines = session.cuisines ? session.cuisines.slice() : [];
  var allCategoryCount = Thalajati.CATEGORIES.length;

  function updateFilterStatus() {
    if (!filterSummary) return;
    var parts = [];
    if (selectedCategories.length && selectedCategories.length < allCategoryCount) {
      parts.push(selectedCategories.length + " أقسام");
    }
    if (selectedCuisines.length) {
      parts.push(selectedCuisines.length + " مطابخ");
    }
    var constrained = parts.length > 0;
    filterSummary.textContent = constrained ? "· مفعّل: " + parts.join(" · ") : "";
    if (filterDot) filterDot.hidden = !constrained;
  }

  function filterMatches() {
    return allMatches.filter(function (match) {
      var recipe = match.recipe;
      var cat = recipe.category || "main";
      if (selectedCategories.indexOf(cat) === -1) return false;
      if (selectedCuisines.length && selectedCuisines.indexOf(recipe.cuisine) === -1) return false;
      return true;
    });
  }

  function updateShop(matches) {
    var map = {};
    matches.forEach(function (m) {
      (m.need || []).forEach(function (n) {
        if (!n.optional) map[n.key] = n.label;
      });
    });
    var labels = Object.keys(map).map(function (k) {
      return map[k];
    });
    if (labels.length) {
      shopBox.classList.remove("hidden");
      shopTags.innerHTML = labels
        .map(function (label) {
          return "<span>" + label + "</span>";
        })
        .join("");
    } else {
      shopBox.classList.add("hidden");
      shopTags.innerHTML = "";
    }
  }

  function renderFilterChips(container, items, selected, requireOne, onChange) {
    container.innerHTML = "";
    items.forEach(function (item) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (selected.indexOf(item.key) >= 0 ? " is-on" : "");
      btn.textContent = item.label;
      btn.addEventListener("click", function () {
        var idx = selected.indexOf(item.key);
        if (idx >= 0) {
          if (requireOne && selected.length <= 1) return;
          selected.splice(idx, 1);
        } else {
          selected.push(item.key);
        }
        onChange();
      });
      container.appendChild(btn);
    });
  }

  function refresh() {
    var filtered = filterMatches();
    var sections = Thalajati.groupMatchesByCategory(filtered, session.emptyFridge ? 6 : 8);

    renderFilterChips(categoryFilterChips, Thalajati.CATEGORIES, selectedCategories, true, refresh);
    renderFilterChips(cuisineFilterChips, Thalajati.CUISINES, selectedCuisines, false, refresh);
    updateFilterStatus();

    if (!sections.length) {
      title.textContent = "ما لقينا تطابق قوي";
      empty.classList.remove("hidden");
      list.innerHTML = "";
      shopBox.classList.add("hidden");
      return;
    }

    empty.classList.add("hidden");
    title.textContent = session.emptyFridge
      ? "ثلاجتك فاضية — ابدئي بهالقائمة"
      : "هذي قائمتك حسب النوع";
    updateShop(filtered);

    Thalajati.mountMenuPager(list, sections, {
      showAvailability: !session.emptyFridge,
    });
  }

  var suggestions = [
    { key: "chicken", label: "دجاج" },
    { key: "rice", label: "أرز" },
    { key: "tomato", label: "طماطم" },
    { key: "onion", label: "بصل" },
  ];
  suggestChips.innerHTML = suggestions
    .map(function (item) {
      return (
        '<a class="chip" href="fridge.html">' + item.label + "</a>"
      );
    })
    .join("");

  if (!allMatches.length) {
    title.textContent = "ما لقينا تطابق قوي";
    empty.classList.remove("hidden");
    filterPanel.classList.add("hidden");
    return;
  }

  refresh();
})();
