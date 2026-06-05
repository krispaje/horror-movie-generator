function typeAnswer(response) {
  new Typewriter("#AI-answer", {
    strings: response.data.answer,
    autoStart: true,
  });
}
function generateAnswer(event) {
  event.preventDefault();

  let userInputElement = document.querySelector("#user-input");
  let userInputValue = userInputElement.value;
  let answerElement = document.querySelector("#AI-answer");
  answerElement.classList.remove("hidden");
  answerElement.innerHTML = `Searching for: ${userInputValue}....<span class="loader">⏳</span>`;
  apiKey = "9c764o4f1faeb3c3bct46f73f94b0e7b";
  let context =
    "You are a horror movie expert. Pick only one movie. The movie must be horror. The user may provide an actor's name, a theme, a plot, or a context. Be very precise. Return only the movie title, release year, and director. Do not write any other text. If there is not enough information, respond with a funny message and ask for more details.";
  prompt = `movie idea: ${userInputValue}`;
  apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(typeAnswer);
}

let answer = document.querySelector("form");
answer.addEventListener("submit", generateAnswer);
