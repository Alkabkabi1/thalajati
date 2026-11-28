(function () {
  var blocked = Thalajati.loadBlocked();
  var card = document.getElementById("randomCard");
  var againBtn = document.getElementById("againBtn");

  async function suggest() {
    if (Thalajati.fetchUserRecipes) await Thalajati.fetchUserRecipes();
    var recent = Thalajati.loadRecentRandomIds();
    var result = Thalajati.pickRandomRecipe(blocked, recent);
    if (!result.recipe) {
      card.innerHTML = '<p class="lead">ما في وصفات رئيسية للعرض حاليًا.</p>';
      return;
    }
    Thalajati.pushRecentRandom(result.recipe.id);

    document.getElementById("randomMeta").textContent =
      "حوالي " + result.recipe.minutes + " دقيقة · تكفي ~" + result.recipe.servingsAdult + " أشخاص";
    document.getElementById("recycledNote").classList.toggle("hidden", !result.recycled);

    card.innerHTML = Thalajati.renderRecipeCard(
      { recipe: result.recipe, have: [], need: result.recipe.ingredients.slice() },
      { defaultOpen: true, showAvailability: false, standalone: true },
    );
    Thalajati.bindRecipeToggles(card);
    Thalajati.flashRecipeSwap(card);
  }

  againBtn.addEventListener("click", function () {
    againBtn.disabled = true;
    suggest().finally(function () {
      againBtn.disabled = false;
    });
  });

  if (Thalajati.fetchUserRecipes) Thalajati.fetchUserRecipes();
  suggest();
})();
