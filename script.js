document.getElementById("fantome").addEventListener("mouseover", mouseOver);
document.getElementById("fantome").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("StatFantome").style.display = 'block';
}

function mouseOut() {
  document.getElementById("StatFantome").style.display ='none';
}

document.getElementById("dragon").addEventListener("mouseover", mouseOver2);
document.getElementById("dragon").addEventListener("mouseout", mouseOut2);

function mouseOver2() {
  document.getElementById("StatDragon").style.display = 'block';
}

function mouseOut2() {
  document.getElementById("StatDragon").style.display ='none';
}

document.getElementById("poulet").addEventListener("mouseover", mouseOver3);
document.getElementById("poulet").addEventListener("mouseout", mouseOut3);

function mouseOver3() {
  document.getElementById("StatPoulet").style.display = 'block';
}

function mouseOut3() {
  document.getElementById("StatPoulet").style.display ='none';
}

