(function () {
  var blocked = Thalajati.loadBlocked();
  var card = document.getElementById("randomCard");

  function suggest() {
    var recent = Thalajati.loadRecentRandomIds();
    var result = Thalajati.pickRandomRecipe(blocked, recent);
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

  document.getElementById("againBtn").addEventListener("click", suggest);
  suggest();
})();
