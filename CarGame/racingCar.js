let score = 0;
let road = document.querySelector(".road");
let roadDimensions = road.getBoundingClientRect();
let playerCar;
var userDetails = JSON.parse(localStorage.getItem("Signupdetails"));
var loginUserDetails = JSON.parse(sessionStorage.getItem("LoginUsers"));
var currUser=loginUserDetails[loginUserDetails.length-1];
document.querySelector(".name").textContent=currUser.name;
document.querySelector(".highScore").textContent=currUser.highestScore;

player = {
  speed: 5,
  x: roadDimensions.width / 2 - 50 / 2,
  y: roadDimensions.height - 100 - 5,
};

let controls = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

function moveLines() {
  let lines = document.querySelectorAll(".line");
  lines.forEach(function (item) {
    if (item.y >= 1000) {
      item.y -= 1000;
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}

function playGame() {
  // console.log("inplay");
  let scoreEle = document.querySelector(".score");
  let roadDimensions = road.getBoundingClientRect();
  playerCar = document.querySelector("#playerCar");
  let carDimensions = playerCar.getBoundingClientRect();
  moveLines();
  moveEnemyCar(playerCar);
  if (player.start) {
    scoreEle.textContent = ++score;
    if(score>currUser.highestScore){
      currUser.highestScore=score;
      document.querySelector(".highScore").textContent=currUser.highestScore;
    }
    if (controls.ArrowUp && player.y > 0) {
      player.y -= player.speed;
    }
    if (controls.ArrowDown && player.y < roadDimensions.height - 100 - 5) {
      player.y += player.speed;
    }
    if (controls.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
    }
    if (
      controls.ArrowRight &&
      player.x < roadDimensions.width - carDimensions.width - 5
    ) {
      player.x += player.speed;
    }
    playerCar.style.top = player.y + "px";
    playerCar.style.left = player.x + "px";
    window.requestAnimationFrame(playGame);
  }
}

document.querySelector(".startGameBtn").addEventListener("click", () => {
  document.querySelector(".road").innerHTML = "";
  playerCar = document.createElement("div");
  playerCar.setAttribute("id", "playerCar");
  playerCar.setAttribute("class", "car");
  document.querySelector(".road").append(playerCar);

  document.querySelector(".start-screen").classList.add("hide");
  document.querySelector(".game-area").classList.remove("makeOpaque");

  for (let x = 0; x < 10; x++) {
    let div = document.createElement("div");
    div.classList.add("line");
    div.y = x * 100;
    // console.log(div.y);
    div.style.top = x * 150 + "px";
    document.querySelector(".road").appendChild(div);
  }

  player.start = true;
  window.requestAnimationFrame(playGame);

  for (let x = 0; x < 4; x++) {
    let enemyCar = document.createElement("div");
    enemyCar.classList.add("enemyCar");
    enemyCar.y = (x + 1) * 600 * -1;
    enemyCar.style.top = enemyCar.y + "px";
    enemyCar.style.left =
      Math.floor(Math.random() * (roadDimensions.width - 50)) + "px";
    enemyCar.style.backgroundColor = randomColor();
    document.querySelector(".road").appendChild(enemyCar);
  }
});

function randomColor() {
  function c() {
    let hex = Math.floor(Math.random() * 256).toString(16);
    return ("0" + String(hex)).substr(-2);
  }
  return "#" + c() + c() + c();
}

function moveEnemyCar(playerCar) {
  let ele = document.querySelectorAll(".enemyCar");
  ele.forEach(function (item) {
    if (isCollide(playerCar, item)) {
      // console.log("HIT");
      endGame();
    }
    if (item.y >= 1500) {
      item.y = -600;
      item.style.left =
        Math.floor(Math.random() * (roadDimensions.width - 50)) + "px";
      item.style.backgroundColor = randomColor();
    }
    item.y += player.speed; //-595 -1195 -1795
    item.style.top = item.y + "px";
  });
}

document.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key in controls) controls[e.key] = false;
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key in controls) controls[e.key] = true;
});

function isCollide(a, b) {
  let aRect = a.getBoundingClientRect(); //playerCar
  let bRect = b.getBoundingClientRect(); //enemyCar
  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}

function endGame() {
  player.start = false;
  setNewHighScore();
  document.querySelector(".start-screen").classList.remove("hide");
  document.querySelector(".game-area").classList.add("makeOpaque");
  document.querySelector("#instructions").textContent = "GAME OVER";
  document.querySelector("#instructions").style.color = "red";
}

function setNewHighScore(){
  sessionStorage.setItem("LoginUsers", JSON.stringify(loginUserDetails));
  for(user of userDetails){
    if(user.email==currUser.email){
        user.highestScore=currUser.highestScore;
    }
  }
  localStorage.setItem("Signupdetails", JSON.stringify(userDetails));
  score=0;
}
