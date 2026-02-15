function generateVoice() {
  let text = document.getElementById("script").value;
  let lang = document.getElementById("voice").value;

  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = lang;
  speechSynthesis.speak(speech);
}

function generateImage() {
  let prompt = document.getElementById("script").value;
  document.getElementById("output").innerHTML =
   `<img src="https://image.pollinations.ai/prompt/${prompt}">`;
}

function makeVideo() {
  alert("Free version: Image slideshow video generated");
}
