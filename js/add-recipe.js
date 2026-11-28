(function () {
  var form = document.getElementById("addRecipeForm");
  var nameInput = document.getElementById("recipeName");
  var categorySelect = document.getElementById("recipeCategory");
  var cuisineSelect = document.getElementById("recipeCuisine");
  var minutesInput = document.getElementById("recipeMinutes");
  var stepsInput = document.getElementById("recipeSteps");
  var chipsEl = document.getElementById("ingredientChips");
  var statusEl = document.getElementById("formStatus");
  var submitBtn = document.getElementById("saveRecipeBtn");
  var selected = {};

  function setStatus(message, kind) {
    statusEl.textContent = message || "";
    statusEl.classList.remove("is-error", "is-ok", "hidden");
    if (!message) {
      statusEl.classList.add("hidden");
      return;
    }
    statusEl.classList.add(kind === "ok" ? "is-ok" : "is-error");
  }

  function fillSelects() {
    Thalajati.CATEGORIES.forEach(function (cat) {
      var opt = document.createElement("option");
      opt.value = cat.key;
      opt.textContent = cat.label;
      if (cat.key === "main") opt.selected = true;
      categorySelect.appendChild(opt);
    });
    Thalajati.CUISINES.forEach(function (c) {
      var opt = document.createElement("option");
      opt.value = c.key;
      opt.textContent = c.label;
      cuisineSelect.appendChild(opt);
    });
  }

  function renderChips() {
    chipsEl.innerHTML = "";
    Thalajati.COMMON_INGREDIENTS.forEach(function (ing) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (selected[ing.key] ? " is-on" : "");
      btn.textContent = ing.label;
      btn.addEventListener("click", function () {
        if (selected[ing.key]) delete selected[ing.key];
        else selected[ing.key] = ing;
        btn.classList.toggle("is-on");
      });
      chipsEl.appendChild(btn);
    });
  }

  fillSelects();
  renderChips();

  if (!Thalajati.isSupabaseConfigured()) {
    setStatus(
      "أضيفي رابط المشروع ومفتاح anon في js/supabase-config.js بعد إنشاء جدول user_recipes.",
      "error",
    );
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    var name = (nameInput.value || "").trim();
    var keys = Object.keys(selected);
    if (!name) {
      setStatus("اكتبي اسم الوصفة.", "error");
      nameInput.focus();
      return;
    }
    if (!keys.length) {
      setStatus("اختاري على الأقل مكوّن واحد عشان نقدر نطابقها مع الثلاجة.", "error");
      return;
    }

    var steps = (stepsInput.value || "")
      .split(/\n+/)
      .map(function (s) {
        return s.trim();
      })
      .filter(Boolean);

    var minutes = parseInt(minutesInput.value, 10);
    if (!minutes || minutes < 1) minutes = 30;

    submitBtn.disabled = true;
    setStatus("جاري الحفظ…", "ok");

    var result = await Thalajati.saveUserRecipe({
      name: name,
      category: categorySelect.value || "main",
      cuisine: cuisineSelect.value || "خليجي",
      minutes: minutes,
      servingsAdult: 4,
      ingredients: keys.map(function (k) {
        return { key: selected[k].key, label: selected[k].label };
      }),
      steps: steps,
    });

    submitBtn.disabled = false;

    if (!result.ok) {
      setStatus(result.error || "ما قدرنا نحفظ الوصفة.", "error");
      return;
    }

    setStatus("انحفظت الوصفة — صارت ضمن اقتراحات الثلاجة والعشوائي.", "ok");
    form.reset();
    selected = {};
    renderChips();
    categorySelect.value = "main";
  });
})();
