(function () {
  var blocked = Thalajati.loadBlocked();

  function suggest() {
    var recent = Thalajati.loadRecentRandomIds();
    var result = Thalajati.pickRandomRecipe(blocked, recent);
    Thalajati.pushRecentRandom(result.recipe.id);

    document.getElementById("randomName").textContent = result.recipe.name;
    document.getElementById("randomMeta").textContent =
      "حوالي " + result.recipe.minutes + " دقيقة · ~" + result.recipe.servingsAdult + " أشخاص";
    document.getElementById("recycledNote").classList.toggle("hidden", !result.recycled);

    var card = document.getElementById("randomCard");
    card.innerHTML = Thalajati.renderRecipeCard(
      { recipe: result.recipe, have: [], need: result.recipe.ingredients.slice() },
      { defaultOpen: true, showAvailability: false },
    );
    Thalajati.bindRecipeToggles(card);
  }

  document.getElementById("againBtn").addEventListener("click", suggest);
  suggest();
})();
