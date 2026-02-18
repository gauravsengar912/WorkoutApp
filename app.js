const app = document.getElementById("app");

function loadHome() {
  app.innerHTML = "<h2>Weekly Split</h2>" +
    workouts.home.map(d => `<div class="card">${d}</div>`).join("");
}

function loadWorkout() {
  renderWorkout("pull");
}

function renderWorkout(day) {
  const list = workouts[day];
  app.innerHTML = `
    <h2>${day.toUpperCase()} DAY</h2>
    ${list.map(e => `
      <div class="card">
        <h3>${e[0]}</h3>
        Sets: ${e[1]} | Reps: ${e[2]}<br>
        <a href="${e[3]}" target="_blank">▶ Form Check</a>
      </div>
    `).join("")}
  `;
}

function loadProgress() {
  app.innerHTML = `
    <div class="card">
      <h3>Progress</h3>
      <p>Tracking coming next 🔥</p>
    </div>
  `;
}

// AUTO LOAD HOME
loadHome();