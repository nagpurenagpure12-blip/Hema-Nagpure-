function generateScenes() {
  let text = document.getElementById("script").value;
  let count = document.getElementById("scenes").value || 5;
  let words = text.split(" ");
  let scenes = [];

  for(let i=0;i<count;i++){
    let part = words.slice(i*5, i*5+8).join(" ");
    scenes.push(part);
  }

  let output = "";
  scenes.forEach(s=>{
    output += `<img src="https://image.pollinations.ai/prompt/${s}"><br>`;
  });

  document.getElementById("output").innerHTML = output;
}
