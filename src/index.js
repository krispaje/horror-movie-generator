function generateAnswer(event) {
  event.preventDefault();
  new Typewriter("#AI-answer", {
    strings: ["Shutter Island"],
    autoStart: true,
  });
}

let answer = document.querySelector("form");
answer.addEventListener("submit", generateAnswer);
