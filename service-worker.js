self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("lean-muscle").then(cache =>
      cache.addAll(["./", "./index.html", "./style.css", "./app.js"])
    )
  );
});
