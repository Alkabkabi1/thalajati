(function () {
  var step = 1;
  var adults = 2;
  var kids = 0;
  var blocked = Thalajati.loadBlocked();
  var available = [];
  var emptyFridge = false;
  var categories = Thalajati.CATEGORIES.map(function (c) {
    return c.key;
  });
  var cuisines = [];
  var groupsOpen = false;

  var totalSteps = 3;
  var stepLabels = ["كم نفر؟", "الممنوعات", "وش عندك؟"];
  var allergenChips = document.getElementById("allergenChips");
  var ingredientGroups = document.getElementById("ingredientGroups");
  var ingredientGroupsBody = document.getElementById("ingredientGroupsBody");
  var ingredientGroupsToggle = document.getElementById("ingredientGroupsToggle");
  var quickPicks = document.getElementById("quickPicks");
  var nextBtn = document.getElementById("nextBtn");
  var earlyResultsBtn = document.getElementById("earlyResultsBtn");
  var emptyFridgeBtn = document.getElementById("emptyFridgeBtn");
  var skipAllergensBtn = document.getElementById("skipAllergensBtn");
  var backLink = document.getElementById("backLink");

  function people() {
    return adults + kids;
  }

  function renderChips(container, items, selected, danger, onChange) {
    container.innerHTML = "";
    items.forEach(function (item) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (danger ? " is-danger" : "") + (selected.indexOf(item.key) >= 0 ? " is-on" : "");
      btn.textContent = item.label;
      btn.addEventListener("click", function () {
        var idx = selected.indexOf(item.key);
        if (idx >= 0) selected.splice(idx, 1);
        else selected.push(item.key);
        if (onChange) onChange();
        renderAll();
      });
      container.appendChild(btn);
    });
  }

  function onIngredientChange() {
    emptyFridge = false;
    emptyFridgeBtn.classList.remove("is-on");
    updateIngredientStatus();
  }

  function renderQuickPicks() {
    if (!quickPicks) return;
    var keys = Thalajati.QUICK_INGREDIENTS || [];
    var items = keys
      .map(function (key) {
        return Thalajati.COMMON_INGREDIENTS.find(function (ing) {
          return ing.key === key;
        });
      })
      .filter(Boolean);

    quickPicks.innerHTML = "";
    var title = document.createElement("h3");
    title.className = "quick-picks-title";
    title.textContent = "اختيارات سريعة";
    var chips = document.createElement("div");
    chips.className = "chips";
    quickPicks.appendChild(title);
    quickPicks.appendChild(chips);
    renderChips(chips, items, available, false, onIngredientChange);
  }

  function renderGroupedIngredients() {
    var groups = Thalajati.INGREDIENT_GROUPS || [];
    ingredientGroups.innerHTML = "";
    groups.forEach(function (group) {
      var items = Thalajati.COMMON_INGREDIENTS.filter(function (ing) {
        return ing.group === group.key;
      });
      if (!items.length) return;

      var block = document.createElement("div");
      block.className = "ingredient-group";
      var title = document.createElement("h3");
      title.className = "ingredient-group-title";
      title.textContent = group.label;
      var chips = document.createElement("div");
      chips.className = "chips";
      block.appendChild(title);
      block.appendChild(chips);
      ingredientGroups.appendChild(block);

      renderChips(chips, items, available, false, onIngredientChange);
    });
  }

  function syncGroupsDisclosure() {
    if (!ingredientGroupsToggle || !ingredientGroupsBody) return;
    ingredientGroupsToggle.setAttribute("aria-expanded", groupsOpen ? "true" : "false");
    ingredientGroupsBody.hidden = !groupsOpen;
    var chevron = ingredientGroupsToggle.querySelector(".ingredient-groups-chevron");
    if (chevron) chevron.textContent = groupsOpen ? "▴" : "▾";
  }

  function updateAllergenStatus() {
    document.getElementById("allergenStatus").textContent = blocked.length
      ? "محفوظ على جهازك: " + blocked.length + " ممنوع — بنتذكّرها للمرات الجاية."
      : "ما في ممنوعات؟ اضغطي تخطّي أو متابعة.";
  }

  function updateIngredientStatus() {
    var el = document.getElementById("ingredientStatus");
    if (emptyFridge) el.textContent = "تمام — بنقترح أكلات بسيطة مع قائمة شراء كاملة";
    else if (!available.length) el.textContent = "اختاري مكونات، أو «ما عندي شي بالثلاجة»";
    else el.textContent = "اخترتِ " + available.length + " مكونات";
  }

  function canContinue() {
    if (step === 1) return people() >= 1;
    if (step === 2) return true;
    return available.length >= 1 || emptyFridge;
  }

  function syncEarlyResultsBtn() {
    if (!earlyResultsBtn) return;
    var show = step === 3 && !emptyFridge && available.length >= 3;
    earlyResultsBtn.classList.toggle("hidden", !show);
  }

  function showStep() {
    for (var i = 1; i <= totalSteps; i++) {
      document.getElementById("step" + i).classList.toggle("hidden", step !== i);
    }
    document.getElementById("stepLabel").textContent =
      "خطوة " + step + " من " + totalSteps + " — " + stepLabels[step - 1];
    var pct = Math.round((step / totalSteps) * 100);
    document.getElementById("stepPct").textContent = pct + "%";
    document.getElementById("progressBar").style.width = pct + "%";
    document.getElementById("peopleWarn").classList.toggle("hidden", !(step === 1 && people() === 0));
    backLink.href = step === 1 ? "index.html" : "#";
    backLink.textContent = step === 1 ? "← الرئيسية" : "← الخطوة السابقة";
    nextBtn.textContent = step < totalSteps ? "متابعة" : "ورّيني الأكلات";
    nextBtn.disabled = !canContinue();
    syncEarlyResultsBtn();
  }

  function finishFridge() {
    var count = Math.max(people(), 1);
    var selectedCategories = categories.slice();
    var selectedCuisines = cuisines.slice();
    var matches = emptyFridge
      ? Thalajati.suggestForEmptyFridge(blocked, count, selectedCategories, selectedCuisines)
      : Thalajati.matchRecipes(available, blocked, count, selectedCategories, selectedCuisines);

    Thalajati.saveSession({
      adults: adults,
      kids: kids,
      blocked: blocked.slice(),
      available: available.slice(),
      emptyFridge: emptyFridge,
      categories: selectedCategories,
      cuisines: selectedCuisines,
      matches: matches,
    });
    window.location.href = "results.html";
  }

  function renderAll() {
    document.getElementById("adultsValue").textContent = String(adults);
    document.getElementById("kidsValue").textContent = String(kids);
    renderChips(allergenChips, Thalajati.ALLERGEN_OPTIONS, blocked, true, function () {
      Thalajati.saveBlocked(blocked.slice());
      updateAllergenStatus();
    });
    renderQuickPicks();
    renderGroupedIngredients();
    syncGroupsDisclosure();
    emptyFridgeBtn.classList.toggle("is-on", emptyFridge);
    updateAllergenStatus();
    updateIngredientStatus();
    showStep();
  }

  document.querySelectorAll("[data-count]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.getAttribute("data-count");
      var delta = Number(btn.getAttribute("data-delta"));
      if (key === "adults") adults = Math.max(0, Math.min(12, adults + delta));
      if (key === "kids") kids = Math.max(0, Math.min(12, kids + delta));
      renderAll();
    });
  });

  emptyFridgeBtn.addEventListener("click", function () {
    available = [];
    emptyFridge = true;
    renderAll();
  });

  skipAllergensBtn.addEventListener("click", function () {
    step = 3;
    renderAll();
  });

  if (ingredientGroupsToggle) {
    ingredientGroupsToggle.addEventListener("click", function () {
      groupsOpen = !groupsOpen;
      syncGroupsDisclosure();
    });
  }

  backLink.addEventListener("click", function (e) {
    if (step > 1) {
      e.preventDefault();
      step -= 1;
      renderAll();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (!canContinue()) return;
    if (step < totalSteps) {
      step += 1;
      renderAll();
      return;
    }
    finishFridge();
  });

  if (earlyResultsBtn) {
    earlyResultsBtn.addEventListener("click", function () {
      if (step !== 3 || emptyFridge || available.length < 3) return;
      finishFridge();
    });
  }

  renderAll();
})();
