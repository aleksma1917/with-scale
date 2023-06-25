const button = document.querySelector(".bubbly-button");
document.querySelector(".bubbly-button").onclick = function () {
  let posLeft = 0;
  let intervalIdLeft;
  let posR = 0;
  let intervalIdR;
  clearInterval(intervalIdLeft);
  posLeft = 0;
  intervalIdLeft = setInterval(move, 30);
  console.log("функция start left");
  posR = 185;
  intervalIdR = setInterval(move, 30);

  function move() {
    const elemLeft = document.getElementById("leftDoor");
    posLeft += 1;
    elemLeft.style.left = posLeft + "px";
    const elemR = document.getElementById("rightDoor");
    posR += 1;
    elemR.style.right = posR + "px";
    if (posLeft >= 200) {
      clearInterval(intervalIdLeft);
      console.log("Конец left");
    }
    if (posR >= 400) {
      clearInterval(intervalIdR);
      console.log("конец right");
    }

    btn = setInterval(hide, 150);
    function hide() {
      button.style.display = "none";
    }

    btn = setInterval(cls, 3000);
    function cls() {
      containDoors.style.display = "none";
    }

    btn = setInterval(increaseSize, 3000);
    function increaseSize() {
      var myObject = document.getElementById("card");
      
      myObject.style.transition = "width 0.8s ease-in-out, height 0.8s ease-in-out"; // Длительность и тип перехода
       
      myObject.style.width = "500px";
      myObject.style.height = "650px";
    }
    }
  }

