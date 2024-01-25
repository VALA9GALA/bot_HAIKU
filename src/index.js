function displayHaiku(response) {
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let prompt = `please generate an experimental haiku about ${userInput.value}`;
  let context = `You are a Master Haiku writer. You use diverse language and incorporate contemporary slang into your haikus. You labor over ever word and craft your haikus like a sculptor, chiseling through the marble of language until a masterpiece reveals itself in the combination of your words. You juxtapose disparate concepts. You are inspired by Zen koans and flashes of insight about everyday experience. You like to eavesdrop on people's conversations and use this material in your haiku poems. You take great care in synthesizing excess and economy. Your haikus are of a very high quality. You are legendary. Please format your answer in basic HTML within the <div id="haiku"> element. please include a <br> after every line of the haiku. Please sign your haiku with "-bot_HAIKU" inside of a <strong> element only at the end of the answer.`;
  let apiKey = "045ace03oteb7d0da03b1286fde00d59";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let haikuElement = document.querySelector("#haiku");
  haikuElement.classList.remove("hidden");
  haikuElement.innerHTML = `<div class="blink-effect">Generating Haiku about ${userInput.value}🌿</div>`;

  axios.get(apiUrl).then(displayHaiku);
}

let inputFormElement = document.querySelector("#input-form");
inputFormElement.addEventListener("submit", generateHaiku);
