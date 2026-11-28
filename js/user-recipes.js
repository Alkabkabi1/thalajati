window.Thalajati = window.Thalajati || {};

Thalajati._userRecipes = [];
Thalajati._userRecipesReady = null;

Thalajati.isSupabaseConfigured = function () {
  return !!(Thalajati.SUPABASE_URL && Thalajati.SUPABASE_ANON_KEY);
};

Thalajati.getSupabaseClient = function () {
  if (!Thalajati.isSupabaseConfigured()) return null;
  if (typeof supabase === "undefined" || !supabase.createClient) return null;
  if (!Thalajati._supabaseClient) {
    Thalajati._supabaseClient = supabase.createClient(
      Thalajati.SUPABASE_URL,
      Thalajati.SUPABASE_ANON_KEY,
    );
  }
  return Thalajati._supabaseClient;
};

Thalajati.mapUserRecipeRow = function (row) {
  var ingredients = Array.isArray(row.ingredients) ? row.ingredients : [];
  var steps = Array.isArray(row.steps) ? row.steps : [];
  return {
    id: "user-" + row.id,
    name: row.name,
    image: row.image || "",
    cuisine: row.cuisine || "خليجي",
    category: row.category || "main",
    minutes: row.minutes != null ? row.minutes : 30,
    servingsAdult: row.servings_adult != null ? row.servings_adult : 4,
    tags: ["وصفتي"],
    ingredients: ingredients,
    steps: steps,
    isUserRecipe: true,
  };
};

Thalajati.getAllRecipes = function () {
  return Thalajati.RECIPES.concat(Thalajati._userRecipes);
};

Thalajati.fetchUserRecipes = function () {
  if (Thalajati._userRecipesReady) return Thalajati._userRecipesReady;

  Thalajati._userRecipesReady = (async function () {
    var client = Thalajati.getSupabaseClient();
    if (!client) {
      Thalajati._userRecipes = [];
      return Thalajati._userRecipes;
    }
    try {
      var result = await client
        .from("user_recipes")
        .select(
          "id, name, category, cuisine, minutes, servings_adult, ingredients, steps, image, created_at",
        )
        .order("created_at", { ascending: false });
      if (result.error) throw result.error;
      Thalajati._userRecipes = (result.data || []).map(Thalajati.mapUserRecipeRow);
    } catch (e) {
      console.warn("Thalajati: failed to load user recipes", e);
      Thalajati._userRecipes = [];
    }
    return Thalajati._userRecipes;
  })();

  return Thalajati._userRecipesReady;
};

Thalajati.saveUserRecipe = async function (payload) {
  var client = Thalajati.getSupabaseClient();
  if (!client) {
    return { ok: false, error: "Supabase غير مضبوط. أضيفي الرابط والمفتاح في js/supabase-config.js" };
  }
  try {
    var result = await client
      .from("user_recipes")
      .insert([
        {
          name: payload.name,
          category: payload.category || "main",
          cuisine: payload.cuisine || "خليجي",
          minutes: payload.minutes != null ? payload.minutes : 30,
          servings_adult: payload.servingsAdult != null ? payload.servingsAdult : 4,
          ingredients: payload.ingredients || [],
          steps: payload.steps || [],
          image: payload.image || null,
        },
      ])
      .select("id")
      .single();
    if (result.error) throw result.error;
    Thalajati._userRecipesReady = null;
    await Thalajati.fetchUserRecipes();
    return { ok: true, id: result.data && result.data.id };
  } catch (e) {
    console.warn("Thalajati: failed to save user recipe", e);
    return {
      ok: false,
      error: (e && e.message) || "ما قدرنا نحفظ الوصفة. جرّبي مرة ثانية.",
    };
  }
};
