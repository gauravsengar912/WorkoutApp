self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("lean-muscle").then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./styles.css",
        "./app.js",
        "./workouts.js"
      ])
    )
  );
});