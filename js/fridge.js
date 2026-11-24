(function () {
  var step = 1;
  var adults = 2;
  var kids = 0;
  var blocked = Thalajati.loadBlocked();
  var available = [];
  var emptyFridge = false;

  var stepLabels = ["كم نفر؟", "الممنوعات", "وش عندك؟"];
  var allergenChips = document.getElementById("allergenChips");
  var ingredientChips = document.getElementById("ingredientChips");
  var nextBtn = document.getElementById("nextBtn");
  var emptyFridgeBtn = document.getElementById("emptyFridgeBtn");
  var backLink = document.getElementById("backLink");

  function people() {
    return adults + kids;
  }

  function renderChips(container, items, selected, danger) {
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
        if (container === allergenChips) {
          Thalajati.saveBlocked(blocked.slice());
          updateAllergenStatus();
        } else {
          emptyFridge = false;
          emptyFridgeBtn.classList.remove("is-on");
          updateIngredientStatus();
        }
        renderAll();
      });
      container.appendChild(btn);
    });
  }

  function updateAllergenStatus() {
    document.getElementById("allergenStatus").textContent = blocked.length
      ? "محفوظ: " + blocked.length + " ممنوع — يتذكرها التطبيق للجوال."
      : "ما في ممنوعات؟ تمام، كمّلي.";
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

  function showStep() {
    document.getElementById("step1").classList.toggle("hidden", step !== 1);
    document.getElementById("step2").classList.toggle("hidden", step !== 2);
    document.getElementById("step3").classList.toggle("hidden", step !== 3);
    document.getElementById("stepLabel").textContent =
      "خطوة " + step + " من 3 — " + stepLabels[step - 1];
    document.getElementById("stepPct").textContent = Math.round((step / 3) * 100) + "%";
    document.getElementById("progressBar").style.width = Math.round((step / 3) * 100) + "%";
    document.getElementById("peopleWarn").classList.toggle("hidden", !(step === 1 && people() === 0));
    backLink.href = step === 1 ? "index.html" : "#";
    backLink.textContent = step === 1 ? "← الرئيسية" : "← الخطوة السابقة";
    nextBtn.textContent = step < 3 ? "متابعة" : "ورّيني الأكلات";
    nextBtn.disabled = !canContinue();
  }

  function renderAll() {
    document.getElementById("adultsValue").textContent = String(adults);
    document.getElementById("kidsValue").textContent = String(kids);
    renderChips(allergenChips, Thalajati.ALLERGEN_OPTIONS, blocked, true);
    renderChips(ingredientChips, Thalajati.COMMON_INGREDIENTS, available, false);
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

  backLink.addEventListener("click", function (e) {
    if (step > 1) {
      e.preventDefault();
      step -= 1;
      renderAll();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (!canContinue()) return;
    if (step < 3) {
      step += 1;
      renderAll();
      return;
    }

    var count = Math.max(people(), 1);
    var matches = emptyFridge
      ? Thalajati.suggestForEmptyFridge(blocked, count)
      : Thalajati.matchRecipes(available, blocked, count);

    Thalajati.saveSession({
      adults: adults,
      kids: kids,
      blocked: blocked.slice(),
      available: available.slice(),
      emptyFridge: emptyFridge,
      matches: matches,
    });
    window.location.href = "results.html";
  });

  renderAll();
})();
