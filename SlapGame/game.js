var isMale = true;
var name = "John Jacob Jingleheimer Schmidt";
var maxHealth = 100;
var health = maxHealth;
var hits = 0;

function changeGender() {
  var node = document.getElementById("character");
  if (isMale) {
    node.classList.remove("fa-male");
    node.classList.add("fa-female");
  } else {
    node.classList.remove("fa-female");
    node.classList.add("fa-male");    
  }
  isMale = !isMale;
}

function slap() {
  health -= 1;
  hits += 1;
  update();
}

function punch() {
  health -= 5;
  hits += 1;
  update();
}

function kick() {
  health -= 10;
  hits += 1;
  update();
}

function changeName() {
  var newName = prompt("Rename victim", name);
  if (newName !== name) {
    name = newName;
    update();
  }
}

function update() {
  var node = document.getElementById("player-health");
  node.innerText = health.toString();
  
  var healthMeter = document.getElementById("health-meter");
  // meter needs a percentage
  healthMeter.value = (maxHealth - health)/100;
  
  var player = document.getElementById("player-name");
  player.innerText = name;
  
  var hitNode = document.getElementById("player-hits");
  hitNode.innerText = hits.toString();
  
  if (health <= 0) {
    var gender = isMale? "his": "her";
    alert(`You kicked ${gender} butt!`);
    reset();
  }
}

function reset() {
  isMale = true;
  name = "John Jacob Jingleheimer Schmidt";
  maxHealth = 100;
  health = maxHealth;
  hits = 0;
  update();
}

update();