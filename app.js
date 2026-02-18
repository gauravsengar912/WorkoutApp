const workouts = [
  {
    day: "Day 1 – Chest & Triceps",
    exercises: [
      { name: "Bench Press", reps: "8-10", link: "https://youtube.com/results?search_query=bench+press+form+shorts" },
      { name: "Incline DB Press", reps: "10-12", link: "https://youtube.com/results?search_query=incline+dumbbell+press+shorts" },
      { name: "Triceps Pushdown", reps: "10-12", link: "https://youtube.com/results?search_query=triceps+pushdown+shorts" }
    ]
  },
  {
    day: "Day 2 – Back & Biceps",
    exercises: [
      { name: "Lat Pulldown", reps: "10-12", link: "https://youtube.com/results?search_query=lat+pulldown+shorts" },
      { name: "Barbell Curl", reps: "10-12", link: "https://youtube.com/results?search_query=barbell+curl+shorts" }
    ]
  },
  {
    day: "Day 3 – Legs & Abs",
    exercises: [
      { name: "Squats", reps: "8-10", link: "https://youtube.com/results?search_query=squat+form+shorts" },
      { name: "Leg Raise", reps: "12-15", link: "https://youtube.com/results?search_query=hanging+leg+raise+shorts" }
    ]
  },
  {
    day: "Day 4 – Shoulders & Arms",
    exercises: [
      { name: "Shoulder Press", reps: "8-10", link: "https://youtube.com/results?search_query=shoulder+press+shorts" },
      { name: "Lateral Raise", reps: "12-15", link: "https://youtube.com/results?search_query=lateral+raise+shorts" }
    ]
  }
];

const container = document.getElementById("workoutContainer");

function render() {
  container.innerHTML = "";
  workouts.forEach(day => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${day.day}</h3>`;

    day.exercises.forEach(ex => {
      card.innerHTML += `
        <div class="exercise">
          <strong>${ex.name}</strong> (${ex.reps})<br>
          <input placeholder="kg" /> <input placeholder="reps" />
          <br><a target="_blank" href="${ex.link}">▶ Form Video</a>
        </div>`;
    });

    container.appendChild(card);
  });
}

render();

function showSummary() {
  alert("🔥 Keep training! Progress summary coming soon.");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
