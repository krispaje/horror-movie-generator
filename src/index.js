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
  answerElement.innerHTML = `Generating horror movie about ${userInputValue}....<span class="loader">⏳</span>`;
  apiKey = "9c764o4f1faeb3c3bct46f73f94b0e7b";
  context =
    "be like a real movie expert, who is really into horror movies, pick only one movie, it should be horror, be very precise, it can be a title or just a context of a movie, dont write any other words, only movie name, year and director, be polite, if there is no valid answer, just be funny and at the end tell them to give you more context";
  prompt = `movie idea: ${userInputValue}`;
  apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(typeAnswer);
}

let answer = document.querySelector("form");
answer.addEventListener("submit", generateAnswer);
