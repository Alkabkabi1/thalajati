(function () {
  var session = Thalajati.loadSession();
  if (!session) {
    window.location.href = "fridge.html";
    return;
  }

  var matches = session.matches || [];
  var people = (session.adults || 0) + (session.kids || 0);
  var title = document.getElementById("resultsTitle");
  var lead = document.getElementById("resultsLead");
  var list = document.getElementById("resultsList");
  var empty = document.getElementById("emptyState");
  var shopBox = document.getElementById("shopBox");
  var shopTags = document.getElementById("shopTags");

  if (!matches.length) {
    title.textContent = "ما لقينا تطابق قوي";
    empty.classList.remove("hidden");
  } else {
    title.textContent = session.emptyFridge
      ? "ثلاجتك فاضية — ابدئي بهالأكلات"
      : "هذي أنسب أكلات الحين";
    lead.textContent =
      "لـ " +
      people +
      " نفر" +
      (session.emptyFridge ? " · كل المكونات للشراء" : "") +
      (session.blocked && session.blocked.length
        ? " · مع استبعاد " + session.blocked.length + " ممنوعات"
        : "");

    list.innerHTML = matches
      .map(function (match, index) {
        return Thalajati.renderRecipeCard(match, { defaultOpen: index === 0 });
      })
      .join("");
    Thalajati.bindRecipeToggles(list);

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
    }
  }
})();
