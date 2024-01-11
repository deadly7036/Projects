

function randomColor() {
  let hex = "0123456789ABCDEF"
  let color = "#"
   for(let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16) + 1]
   }
  return color;
}
let intervalId;
function startChangingColor() {
  if(!intervalId) {
    intervalId = setInterval(startColor,1000);
  }
    function startColor() {
    document.body.style.backgroundColor = randomColor();
    }
}
function stopChangingColor() {
  clearInterval(intervalId);
   intervalId = null;
   console.log("stopped");
}

document.getElementById("start").addEventListener("click", startChangingColor)

document.getElementById("stop").addEventListener("click",stopChangingColor)