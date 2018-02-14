document.addEventListener('keydown', function(event) {
  if(event.keyCode == 32) {
    console.log("start");
    start();
    goDown();
    document.removeEventListener('keydown', function(event) {
      if(event.keyCode == 32) {
        console.log("start");
        start();
        goDown();
      }
    })
  }
});
document.addEventListener('keydown', function(event) {
  if(event.keyCode == 39) {
    console.log("right");
    move_right();
  }
  if(event.keyCode == 37) {
    console.log("left");
    move_left();
  }
});

var billFases = [
  "healthy_lifestyle_sources/bill_100.png",
  "healthy_lifestyle_sources/bill_100_underweight.png",
  "healthy_lifestyle_sources/bill_100_fase_3.png",
  "healthy_lifestyle_sources/bill_100_fase_4.png",
  "healthy_lifestyle_sources/bill_100_fase_5.png",
  "healthy_lifestyle_sources/bill_100_fase_6.png",
  "healthy_lifestyle_sources/bill_100_fase_dead_underweight.png",
  "healthy_lifestyle_sources/bill_100_fase_dead_overobesed.png",
];
var fases;

var imgBill, imgCalorical, imgSomeCalorical, imgMediumCalorical, imgLittleCalorical, imgMostHealthier,
imgSomeHealthy, imgLittleHealthy, imgMediumLittleHealthy, imgLittlestCalorical, imgMediumLittleCalorical;

var caloricalFood = [
  "healthy_lifestyle_sources/black.png", //not used
  "healthy_lifestyle_sources/black.png",
  "healthy_lifestyle_sources/black.png"
]
var caloricalNum;

var mostHealthierFood = [
  "healthy_lifestyle_sources/black.png", //not used
  "healthy_lifestyle_sources/asparagus.png",
  "healthy_lifestyle_sources/watermelon.png",
  "healthy_lifestyle_sources/eggplant.png"
]
var mostHealthierNum;

var someHealthyFood = [
  "healthy_lifestyle_sources/black.png", //not used
  "healthy_lifestyle_sources/brown.png",
  "healthy_lifestyle_sources/brown.png",
  "healthy_lifestyle_sources/brown.png"
]
var someHealthyNum;

var healthierFood = [
  "healthy_lifestyle_sources/white.png", //not used
  "healthy_lifestyle_sources/white.png",
  "healthy_lifestyle_sources/white.png",
  "healthy_lifestyle_sources/white.png",
  "healthy_lifestyle_sources/white.png"
]
var healthierNum;

var littleCaloricalFood = [
  "healthy_lifestyle_sources/purple.png", //not used
  "healthy_lifestyle_sources/purple.png",
  "healthy_lifestyle_sources/purple.png",
]
var littleCaloricalNum;

var mediumCaloricalFood = [
  "healthy_lifestyle_sources/red.png", //not used
  "healthy_lifestyle_sources/red.png",
  "healthy_lifestyle_sources/red.png",
  "healthy_lifestyle_sources/red.png",
]
var mediumCaloricalNum;

var someCaloricalFood = [
  "healthy_lifestyle_sources/yellow.png", //not used
  "healthy_lifestyle_sources/yellow.png",
  "healthy_lifestyle_sources/yellow.png",
  "healthy_lifestyle_sources/yellow.png",
]
var someCaloricalNum;

var littleHealthyFood = [
  "healthy_lifestyle_sources/aqua.png",
  "healthy_lifestyle_sources/aqua.png",
  "healthy_lifestyle_sources/aqua.png",
  "healthy_lifestyle_sources/aqua.png",
]
var littleHealthyNum;

var littlestCaloricalFood = [
  "healthy_lifestyle_sources/aqua.png",
  "healthy_lifestyle_sources/orange.png",
]
var littlestCaloricalNum;

var mediumLittleCaloricalFood = [
  "healthy_lifestyle_sources/aqua.png",
  "healthy_lifestyle_sources/green.png",
  "healthy_lifestyle_sources/green.png",
]
var mediumLittleCaloricalNum;

function loadImages() {
  fases = 0;
  imgBill = new Image();

  caloricalNum = 1;
  imgCalorical = new Image();

  someCaloricalNum = 1;
  imgSomeCalorical = new Image();

  healthierNum = 1;
  imgHealthier = new Image();

  mediumCaloricalNum = 1;
  imgMediumCalorical = new Image();

  littleCaloricalNum = 1;
  imgLittleCalorical = new Image();

  mostHealthierNum = 1;
  imgMostHealthier = new Image();

  someHealthyNum = 1;
  imgSomeHealthy = new Image();

  littleHealthyNum = 1;
  imgLittleHealthy = new Image();

  littlestCaloricalNum = 1;
  imgLittlestCalorical = new Image();

  mediumLittleCaloricalNum = 1;
  imgMediumLittleCalorical = new Image();
}

var width = 400;
var height = 600;
//var canvas,ctx;
var inicialFeedNumber;
var seconds;

function inicialize() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  loadImages();
  inicialFeedNumber = 18.5;
  document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
  console.log("inicialized");
}
function deleteCanvas() {
  canvas.height = height;
  canvas.width = width;
}

// Main Character
var bill = {
   y: height - 105,
   x: 150,
   vx: 0,
 };
function drawBill() {
  imgBill.src = billFases[fases];
  canvas.getContext("2d").drawImage(imgBill,0,0,100,100,bill.x,bill.y,100,100);
}

function move_right() {
  if (bill.x < 300 && inicialFeedNumber < 50 && inicialFeedNumber > 5) {
    if (inicialFeedNumber < 18.5) {
      bill.x += 10;
    }
    if (inicialFeedNumber <= 24.9 && inicialFeedNumber >= 18.5) {
      bill.x += 8;
    }
    if (inicialFeedNumber <= 29.9 && inicialFeedNumber >= 25) {
      bill.x += 7;
    }
    if (inicialFeedNumber <= 34.9 && inicialFeedNumber >= 30) {
      bill.x += 6;
    }
    if (inicialFeedNumber <= 39.9 && inicialFeedNumber >= 35) {
      bill.x += 5;
    }
    if (inicialFeedNumber > 40) {
      bill.x += 4;
    }
  }
}
function move_left() {
  if (bill.x > 0 && inicialFeedNumber < 50 && inicialFeedNumber > 5) {
    if (inicialFeedNumber < 18.5) {
      bill.x -= 10;
    }
    if (inicialFeedNumber <= 24.9 && inicialFeedNumber >= 18.5) {
      bill.x -= 8;
    }
    if (inicialFeedNumber <= 29.9 && inicialFeedNumber >= 25) {
      bill.x -= 7;
    }
    if (inicialFeedNumber <= 34.9 && inicialFeedNumber >= 30) {
      bill.x -= 6;
    }
    if (inicialFeedNumber <= 39.9 && inicialFeedNumber >= 35) {
      bill.x -= 5;
    }
    if (inicialFeedNumber > 40) {
      bill.x -= 4;
    }
  }
}
// Objects
var calorical = {
   y: Math.floor(Math.random() * -100) + -1000,
   x: Math.floor(Math.random() * 300) + 1,
   vx: 0,
 };
function drawCalorical() {
  imgCalorical.src = caloricalFood[caloricalNum];
  canvas.getContext("2d").drawImage(imgCalorical,0,0,100,100,calorical.x,calorical.y,40,40);
}

var healthier = {
   y: Math.floor(Math.random() * -100) + -1000,
   x: Math.floor(Math.random() * 360) + 1,
   vx: 0,
 };
function drawHealthier() {
  imgHealthier.src = healthierFood[healthierNum];
  canvas.getContext("2d").drawImage(imgHealthier,0,0,100,100,healthier.x,healthier.y,40,40);
}

var someCalorical = {
  y:-550,
  x: Math.floor(Math.random() * 300) + 1,
  vx: 0,
}
function drawSomeCalorical() {
  imgSomeCalorical.src = someCaloricalFood[someCaloricalNum];
  canvas.getContext("2d").drawImage(imgSomeCalorical,0,0,100,100,someCalorical.x,someCalorical.y,40,40);
}

var mediumCalorical = {
  y:Math.floor(Math.random() * -100) + -1000,
  x: Math.floor(Math.random() * 300) + 1,
  vx: 0,
}
function drawMediumCalorical() {
  imgMediumCalorical.src = mediumCaloricalFood[mediumCaloricalNum];
  canvas.getContext("2d").drawImage(imgMediumCalorical,0,0,100,100,mediumCalorical.x,mediumCalorical.y,40,40);
}

var littleCalorical = {
  y:Math.floor(Math.random() * -100) + -1000,
  x: Math.floor(Math.random() * 300) + 1,
  vx: 0,
}
function drawLittleCalorical() {
  imgLittleCalorical.src = littleCaloricalFood[littleCaloricalNum];
  canvas.getContext("2d").drawImage(imgLittleCalorical,0,0,100,100,littleCalorical.x,littleCalorical.y,40,40);
}

var mostHealthier = {
   y: Math.floor(Math.random() * -100) + -1000,
   x: Math.floor(Math.random() * 300) + 1,
   vx: 0,
 };
function drawMostHealthier() {
  imgMostHealthier.src = mostHealthierFood[mostHealthierNum];
  canvas.getContext("2d").drawImage(imgMostHealthier,0,0,100,100,mostHealthier.x,mostHealthier.y,40,40);
}

var someHealthy = {
   y: Math.floor(Math.random() * -100) + -1000,
   x: Math.floor(Math.random() * 300) + 1,
   vx: 0,
 };
function drawSomeHealthy() {
  imgSomeHealthy.src = someHealthyFood[someHealthyNum];
  canvas.getContext("2d").drawImage(imgSomeHealthy,0,0,100,100,someHealthy.x,someHealthy.y,40,40);
}

var littleHealthy = {
  y: Math.floor(Math.random() * -100) + -1000,
  x: Math.floor(Math.random() * 300) + 1,
}
function drawLittleHealthy() {
  imgLittleHealthy.src = littleHealthyFood[littleHealthyNum];
  canvas.getContext("2d").drawImage(imgLittleHealthy,0,0,100,100,littleHealthy.x,littleHealthy.y,40,40);
}

var littlestCalorical = {
  y: Math.floor(Math.random() * -100) + -1000,
  x: Math.floor(Math.random() * 300) + 1,
}
function drawLittlestCalorical() {
  imgLittlestCalorical.src = littlestCaloricalFood[littlestCaloricalNum];
  canvas.getContext("2d").drawImage(imgLittlestCalorical,0,0,100,100,littlestCalorical.x,littlestCalorical.y,40,40);
}

var mediumLittleCalorical = {
  y: Math.floor(Math.random() * -100) + -1200,
  x: Math.floor(Math.random() * 300) + 1,
}
function drawMediumLittleCalorical() {
  imgMediumLittleCalorical.src = mediumLittleCaloricalFood[mediumLittleCaloricalNum];
  canvas.getContext("2d").drawImage(imgMediumLittleCalorical,0,0,100,100,mediumLittleCalorical.x,mediumLittleCalorical.y,40,40);
}

function goDown() {
  //Most Healthier - 3 (Asparagus, Eggplant, Watermelon)
  if (inicialFeedNumber < 50 && inicialFeedNumber > 5) {
    mostHealthier.y += 2.9;
  }
  if (inicialFeedNumber > 50) {
    mostHealthier.y += 0;
  }
  if (inicialFeedNumber < 5) {
    mostHealthier.y += 0;
  }
  if (mostHealthier.y > 600) {
    mostHealthier.y = Math.floor(Math.random() * -100) + -1000;;
    mostHealthier.x = Math.floor(Math.random() * 360) + 1;
    mostHealthierNum = Math.floor(Math.random() * 3) + 1;
  }
  if (mostHealthier.x < bill.x + 100 &&
   mostHealthier.x + 40 > bill.x &&
   mostHealthier.y < bill.y + 100 &&
   40 + mostHealthier.y > bill.y) {
     mostHealthier.y = Math.floor(Math.random() * -100) + -1000;
     mostHealthier.x = Math.floor(Math.random() * 360) + 1;
     inicialFeedNumber -= 3;
     document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
     mostHealthierNum = Math.floor(Math.random() * 3)+ 1;
  }

  //Healthier -2 (Potatoe, Tomatoe, Strawberry, Broccoli)
  if (inicialFeedNumber < 50 && inicialFeedNumber > 5) {
    healthier.y += 2;
  }
  if (inicialFeedNumber > 50) {
    healthier.y += 0;
  }
  if (inicialFeedNumber < 5) {
    healthier.y += 0;
  }
  if (healthier.y > 600) {
    healthier.y = Math.floor(Math.random() * -100) + -1000;
    healthier.x = Math.floor(Math.random() * 360) + 1;
    healthierNum = Math.floor(Math.random() * 4) + 1;
  }
  if (healthier.x < bill.x + 100 &&
   healthier.x + 40 > bill.x &&
   healthier.y < bill.y + 100 &&
   40 + healthier.y > bill.y) {

     healthier.y = Math.floor(Math.random() * -100) + -1000;
     healthier.x = Math.floor(Math.random() * 360) + 1;
     inicialFeedNumber -= 2;
     document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
     healthierNum = Math.floor(Math.random() * 4) + 1;
}
// Some of it healthy -1 (Orange, Kiwi, 100% Fruit juice)
  if (inicialFeedNumber < 50 && inicialFeedNumber > 5) {
    someHealthy.y += 2.5;
  }
  if (inicialFeedNumber > 50) {
    someHealthy.y += 0;
  }
  if (inicialFeedNumber < 5) {
    someHealthy.y += 0;
  }
  if (someHealthy.y > 600) {
    someHealthy.y = Math.floor(Math.random() * -100) + -1000;;
    someHealthy.x = Math.floor(Math.random() * 360) + 1;
    someHealthyNum = Math.floor(Math.random() * 3) + 1;
  }
  if (someHealthy.x < bill.x + 100 &&
   someHealthy.x + 40 > bill.x &&
   someHealthy.y < bill.y + 100 &&
   40 + someHealthy.y > bill.y) {
     someHealthy.y = Math.floor(Math.random() * -100) + -1000;
     someHealthy.x = Math.floor(Math.random() * 360) + 1;
     inicialFeedNumber -= 1;
     document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
     someHealthyNum = Math.floor(Math.random() * 3) + 1;
  }

// Little Healthy -0.5 (Cabagge, Onion, Mushroom)
if (inicialFeedNumber < 50 && inicialFeedNumber > 5) {
  littleHealthy.y += 4;
}
if (inicialFeedNumber > 50) {
  littleHealthy.y += 0;
}
if (inicialFeedNumber < 5) {
  littleHealthy.y += 0;
}
if (littleHealthy.y > 600) {
  littleHealthy.y = Math.floor(Math.random() * -100) + -1000;;
  littleHealthy.x = Math.floor(Math.random() * 360) + 1;
  littleHealthyNum = Math.floor(Math.random() * 3) + 1;
}
if (littleHealthy.x < bill.x + 100 &&
 littleHealthy.x + 40 > bill.x &&
 littleHealthy.y < bill.y + 100 &&
 40 + littleHealthy.y > bill.y) {
   littleHealthy.y = Math.floor(Math.random() * -100) + -1000;
   littleHealthy.x = Math.floor(Math.random() * 360) + 1;
   inicialFeedNumber -= (0.5 * 10) / 10;;
   document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
   littleHealthyNum = Math.floor(Math.random() * 3)+ 1;
}

// Medium little calorical +0.2 (Banana, Milk)
  if (inicialFeedNumber < 50 && inicialFeedNumber > 5) {
    mediumLittleCalorical.y += 1.9;
  }
  if (inicialFeedNumber > 50) {
    mediumLittleCalorical.y += 0;
  }
  if (inicialFeedNumber < 5) {
    mediumLittleCalorical.y += 0;
  }
  if (mediumLittleCalorical.y > 600) {
    mediumLittleCalorical.y = Math.floor(Math.random() * -100) + -1200;;
    mediumLittleCalorical.x = Math.floor(Math.random() * 360) + 1;
    mediumLittleCaloricalNum = Math.floor(Math.random() * 2) + 1;
  }
  if (mediumLittleCalorical.x < bill.x + 100 &&
   mediumLittleCalorical.x + 40 > bill.x &&
   mediumLittleCalorical.y < bill.y + 100 &&
   40 + mediumLittleCalorical.y > bill.y) {
     mediumLittleCalorical.y = Math.floor(Math.random() * -100) + -1200;
     mediumLittleCalorical.x = Math.floor(Math.random() * 360) + 1;
     inicialFeedNumber += (0.2 * 10) / 10;
     document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
     mediumLittleCaloricalNum = Math.floor(Math.random() * 2) + 1;
  }
// Little calorical +1.5 (Chicken, Salmon)
  if (inicialFeedNumber < 50 && inicialFeedNumber > 5) {
    littleCalorical.y += 1.9;
  }
  if (inicialFeedNumber > 50) {
    littleCalorical.y += 0;
  }
  if (inicialFeedNumber < 5) {
    littleCalorical.y += 0;
  }
  if (littleCalorical.y > 600) {
    littleCalorical.y = Math.floor(Math.random() * -100) + -1000;;
    littleCalorical.x = Math.floor(Math.random() * 360) + 1;
    littleCaloricalNum = Math.floor(Math.random() * 2) + 1;
  }
  if (littleCalorical.x < bill.x + 100 &&
   littleCalorical.x + 40 > bill.x &&
   littleCalorical.y < bill.y + 100 &&
   40 + littleCalorical.y > bill.y) {
     littleCalorical.y = Math.floor(Math.random() * -100) + -1000;
     littleCalorical.x = Math.floor(Math.random() * 360) + 1;
     inicialFeedNumber += 1.5;
     document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
     littleCaloricalNum = Math.floor(Math.random() * 2) + 1;
  }

// Medium calorical +2 (Beff, Bread)
  if (inicialFeedNumber < 50 && inicialFeedNumber > 5) {
    mediumCalorical.y += 1.4;
  }
  if (inicialFeedNumber > 50) {
    mediumCalorical.y += 0;
  }
  if (inicialFeedNumber < 5) {
    mediumCalorical.y += 0;
  }
  if (mediumCalorical.y > 600) {
    mediumCalorical.y = Math.floor(Math.random() * -100) + -1000;;
    mediumCalorical.x = Math.floor(Math.random() * 360) + 1;
    mediumCaloricalNum = Math.floor(Math.random() * 2) + 1;
  }
  if (mediumCalorical.x < bill.x + 100 &&
   mediumCalorical.x + 40 > bill.x &&
   mediumCalorical.y < bill.y + 100 &&
   40 + mediumCalorical.y > bill.y) {
     mediumCalorical.y = Math.floor(Math.random() * -100) + -1000;;
     mediumCalorical.x = Math.floor(Math.random() * 360) + 1;
     inicialFeedNumber += 2;
     document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
     mediumCaloricalNum = Math.floor(Math.random() * 2) + 1;
  }

// Not at all calorical + 4 (Hamburger, Fries, Cookies)
  if (inicialFeedNumber < 50 && inicialFeedNumber > 5) {
    someCalorical.y += 3;
  }
  if (inicialFeedNumber > 50) {
    someCalorical.y += 0;
  }
  if (inicialFeedNumber < 5) {
    someCalorical.y += 0;
  }
  if (someCalorical.y > 600) {
    someCalorical.y = Math.floor(Math.random() * -100) + -1000;;
    someCalorical.x = Math.floor(Math.random() * 360) + 1;
    someCaloricalNum = Math.floor(Math.random() * 3) + 1;
  }
  if (someCalorical.x < bill.x + 100 &&
   someCalorical.x + 40 > bill.x &&
   someCalorical.y < bill.y + 100 &&
   40 + someCalorical.y > bill.y) {
     someCalorical.y = Math.floor(Math.random() * -100) + -1000;;
     someCalorical.x = Math.floor(Math.random() * 360) + 1;
     inicialFeedNumber += 5;
     document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
     someCaloricalNum = Math.floor(Math.random() * 3) + 1;
  }

// Calorical +5 (Chocolate, Bacon, Peanut)
  if (inicialFeedNumber < 50 && inicialFeedNumber > 5) {
    calorical.y += 2;
  }
  if (inicialFeedNumber > 50) {
    calorical.y += 0;
  }
  if (inicialFeedNumber < 5) {
    calorical.y += 0;
  }
  if (calorical.y > 600) {
    calorical.y = Math.floor(Math.random() * -100) + -1000;;
    calorical.x = Math.floor(Math.random() * 360) + 1;
    caloricalNum = Math.floor(Math.random() * 2) + 1;
  }
  if (calorical.x < bill.x + 100 &&
   calorical.x + 40 > bill.x &&
   calorical.y < bill.y + 100 &&
   40 + calorical.y > bill.y) {
     calorical.y = Math.floor(Math.random() * -100) + -1000;;
     calorical.x = Math.floor(Math.random() * 360) + 1;
     inicialFeedNumber += 5;
     document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
     caloricalNum = Math.floor(Math.random() * 2) + 1;
  }

// To me = Ignore
/* if (inicialFeedNumber < 50 && inicialFeedNumber > 5) {
  mostCalorical.y += 1;
}
if (inicialFeedNumber > 50) {
  mostCalorical.y += 0;
}
if (inicialFeedNumber < 5) {
  mostCalorical.y += 0;
}
if (mostCalorical.y > 600) {
  mostCalorical.y = -150;
  mostCalorical.x = Math.floor(Math.random() * 360) + 1;
}
if (mostCalorical.x < bill.x + 100 &&
 mostCalorical.x + 40 > bill.x &&
 mostCalorical.y < bill.y + 100 &&
 40 + mostCalorical.y > bill.y) {
   mostCalorical.y = -100;
   mostCalorical.x = Math.floor(Math.random() * 360) + 1;
   inicialFeedNumber += 6;
   document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
 } */

//Fases in obesity
  if (document.getElementById('value_BIM').innerHTML >= 50) {
    document.getElementById("text_will_die").style.display = "inline";
    console.log("over-obesed");
    fases = 6;
    document.getElementById("physical").style.display = "none";
    document.removeEventListener('keydown', keydown_w);
  }
  if (document.getElementById('value_BIM').innerHTML <= 5) {
    document.getElementById("text_will_die").style.display = "inline";
    console.log("underweight");
    fases = 7;
    document.getElementById("physical").style.display = "none";
    document.removeEventListener('keydown', keydown_w);
    }
  if (inicialFeedNumber < 18.5) {
    document.getElementById("value_BIM").style.backgroundColor = "rgb(249, 238, 181)";
    document.getElementById("value_BIM").style.color = "#000";
    fases = 1;
  }
  if (inicialFeedNumber <= 24.9 && inicialFeedNumber >= 18.5) {
    document.getElementById("value_BIM").style.backgroundColor = "rgb(85, 127, 251)";
    document.getElementById("value_BIM").style.color = "#fff";
    fases = 0;
  }
  if (inicialFeedNumber <= 29.9 && inicialFeedNumber >= 25) {
    document.getElementById("value_BIM").style.backgroundColor = "rgb(254, 213, 0)";
    document.getElementById("value_BIM").style.color = "#fff";
    fases = 2;
  }
  if (inicialFeedNumber <= 34.9 && inicialFeedNumber >= 30) {
    document.getElementById("value_BIM").style.backgroundColor = "rgb(255, 99, 0)";
    document.getElementById("value_BIM").style.color = "#fff";
    fases = 3;
  }
  if (inicialFeedNumber <= 39.9 && inicialFeedNumber >= 35) {
    document.getElementById("value_BIM").style.backgroundColor = "rgb(94, 0, 0)";
    document.getElementById("value_BIM").style.color = "#fff";
    fases = 4;
  }
  if (inicialFeedNumber > 40) {
    document.getElementById("value_BIM").style.backgroundColor = "rgb(254, 0, 0)";
    document.getElementById("value_BIM").style.color = "#fff";
    fases = 5;
  }
}
// inicialFeedNumber += 5;
// document.getElementById('value_BIM').innerHTML = inicialFeedNumber;

// -------BUCLE PRINCIPAL---------
var FPS = 60;
function start() {
document.getElementById("physical").style.display = "block";
setInterval(
  function() {
    principal();
  }, 1000/FPS);
}

function principal() {
  deleteCanvas();
  drawBill();
  drawCalorical();
  drawHealthier();
  drawSomeCalorical();
  drawMediumCalorical();
  drawLittleCalorical();
  drawSomeHealthy();
  drawMostHealthier();
  drawLittleHealthy();
  drawLittlestCalorical();
  drawMediumLittleCalorical();
  goDown();
}
var clics = 0;

function physical() {
  inicialFeedNumber -= 6;
  document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
  clics += 1;
  if (clics == 3){
    document.getElementById("physical").style.display = "none";
    document.removeEventListener('keydown', keydown_w);
  }
}

var keydown_w = function(event) {
  if(event.keyCode == 87) {
    console.log("physical");
    inicialFeedNumber -= 6;
    document.getElementById('value_BIM').innerHTML = inicialFeedNumber;
    clics += 1;
    if (clics == 3){
      document.getElementById("physical").style.display = "none";
      document.removeEventListener('keydown', keydown_w);
    }
  }
}
document.addEventListener('keydown', keydown_w);
