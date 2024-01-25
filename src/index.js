function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku", {
    strings: "rest light crimson demeanor",
    autoStart: true,
    delay: 100,
    cursor: "🌿",
  });
}

let inputFormElement = document.querySelector("#input-form");
inputFormElement.addEventListener("submit", generateHaiku);
