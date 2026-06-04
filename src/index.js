function typeAnswer(response) {
  new Typewriter("#AI-answer", {
    strings: response.data.answer,
    autoStart: true,
  });
}
function generateAnswer(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  apiKey = "9c764o4f1faeb3c3bct46f73f94b0e7b";
  context =
    "be like a real movie expert, who is really into horror movies, pick only one movie, it should be horror, be very precise, dont write any other words, only movie name, year and director, be polite";
  prompt = `movie idea: ${userInput.value}`;
  apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(typeAnswer);
}

let answer = document.querySelector("form");
answer.addEventListener("submit", generateAnswer);
