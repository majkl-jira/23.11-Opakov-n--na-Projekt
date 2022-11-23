const hrac = document.getElementById("hrac");
const attack = document.getElementById("attack");
const playerHP = document.getElementById("playerHP");
const enemyHP = document.getElementById("enemyHP");
const info = document.getElementById("info");

attack.onmousedown = () => {
  if (enemyHP.innerHTML > 0 && playerHP.innerHTML > 0) {
    enemyHP.innerHTML--;
    hrac.style.left = "200px";
  }

  if (enemyHP.innerHTML == 0) {
    info.innerHTML = "Info : Nepritel zemrel";
    clearInterval(enemyAttackInterval);
  }
};

attack.onmouseup = () => {
  hrac.style.left = "0px";
};

const enemyAttackInterval = setInterval(() => {
  if (playerHP.innerHTML <= 0) {
    clearInterval(enemyAttackInterval);
    info.innerHTML = "Info : Hrac zemrel";
  }
  playerHP.innerHTML--;
}, 500);
