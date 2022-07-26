// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backGroundColor = "#FF69B4"; 
// dodger.style.bottom = "0px";
// dodger.style.left = "0px";
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
 document.addEventListener("keydown", function (event) {
  if (event.key === "arrowLeft") {
    moveDodgerLeft();
  }
  if (event.key === "arrowRight") {
    moveDodgerRight();
  }
 });


