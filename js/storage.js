window.Thalajati = window.Thalajati || {};

var BLOCKED_KEY = "thalajati.blocked";
var RECENT_KEY = "thalajati.recentRandom";
var SESSION_KEY = "thalajati.session";
var SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

Thalajati.loadBlocked = function () {
  try {
    var raw = localStorage.getItem(BLOCKED_KEY);
    var parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
};

Thalajati.saveBlocked = function (blocked) {
  localStorage.setItem(BLOCKED_KEY, JSON.stringify(blocked));
};

Thalajati.loadRecentRandomIds = function () {
  try {
    var raw = localStorage.getItem(RECENT_KEY);
    var parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    var cutoff = Date.now() - SEVEN_DAYS_MS;
    return parsed
      .filter(function (e) {
        return e.at >= cutoff;
      })
      .map(function (e) {
        return e.id;
      });
  } catch (e) {
    return [];
  }
};

Thalajati.pushRecentRandom = function (id) {
  var cutoff = Date.now() - SEVEN_DAYS_MS;
  var entries = [];
  try {
    var raw = localStorage.getItem(RECENT_KEY);
    entries = raw ? JSON.parse(raw) : [];
  } catch (e) {
    entries = [];
  }
  var next = [{ id: id, at: Date.now() }]
    .concat(
      entries.filter(function (e) {
        return e.at >= cutoff && e.id !== id;
      }),
    )
    .slice(0, 20);
  localStorage.setItem(RECENT_KEY, JSON.stringify(next));
};

Thalajati.saveSession = function (data) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
};

Thalajati.loadSession = function () {
  try {
    var raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
};
