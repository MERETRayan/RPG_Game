//Barre etat mob // 
document.getElementById("fantome").onmouseover = function() {mouseOver(pvMob)};
document.getElementById("fantome").onmouseout = function() {mouseOut()};

document.getElementById("dragon").onmouseover = function() {mouseOver2(pvMob)};
document.getElementById("dragon").onmouseout = function() {mouseOut2()};

document.getElementById("poulet").onmouseover = function() {mouseOver3(pvMob)};
document.getElementById("poulet").onmouseout = function() {mouseOut3()};
//changement de perso //

//degat mob attaque de base // 
document.getElementById("attack").onclick = function() {degat(atkPlayer,pvMob,target)};
document.getElementById("attack1").onclick = function() {degat(atkPlayer,pvMob,target)};
document.getElementById("attack2").onclick = function() {degat(atkPlayer,pvMob,target)};
document.getElementById("attack3").onclick = function() {degat(atkPlayer,pvMob,target)};
//pvMob = document.getElementById("poison").onclick = function() {degatAttack(atkPlayer,pvMob,target)};
//pvMob = document.getElementById("defence").onclick = function() {degatAttack(defPlayer)};
// ciblage mob //
target = document.getElementById("fantome").onclick = function() {cible()};
target = document.getElementById("poulet").onclick = function() {cible2()};
target = document.getElementById("dragon").onclick = function() {cible3()};
// fonction etat mob // 

degat = function(atkPlayer,pvMob,target){
  pvMob = degatAttack(atkPlayer,pvMob,target,player);
  player = chgtPlayer(player,pvPlayer);
}

function mouseOver(pvMob) {
  document.getElementById("StatFantome").style.visibility = 'visible';
  document.getElementById("pvFantome").innerHTML="Fantome :"+ pvMob[0] +" Pv";
}
function mouseOut() {
  document.getElementById("StatFantome").style.visibility ='hidden';
}
function mouseOver2(pvMob) {
  document.getElementById("StatDragon").style.visibility = 'visible';
  document.getElementById("pvDragon").innerHTML="Dragon :"+ pvMob[2] +" Pv";
  
}
function mouseOut2() {
  document.getElementById("StatDragon").style.visibility ='hidden';
}
function mouseOver3(pvMob) {
  document.getElementById("StatPoulet").style.visibility = 'visible';
  document.getElementById("pvPoulet").innerHTML="Poulet :"+ pvMob[1] +" Pv";
}
function mouseOut3() {
  document.getElementById("StatPoulet").style.visibility ='hidden';
}
function chgtPlayer(player,pvPlayer) {
  if (player==0){
    if (pvPlayer[player]>0 ) {
      document.getElementById("Skill1").style.visibility="hidden";
      document.getElementById("Skill2").style.visibility="visible";
    }
  }
  if (player==1){
    if (pvPlayer[player]>0 ) {
      document.getElementById("Skill2").style.visibility="hidden";
      document.getElementById("Skill3").style.visibility="visible";
    }
  }
  if (player==2){
    if (pvPlayer[player]>0 ) {
      document.getElementById("Skill3").style.visibility="hidden";
      document.getElementById("Skill4").style.visibility="visible";
    }
  }
  if (player==3){
    if (pvPlayer[player]>0 ) {
      document.getElementById("Skill4").style.visibility="hidden";
      document.getElementById("Skill1").style.visibility="visible";
    }
  }
  player ++ ; 
  if (player>3){
    player=0;
  }
  return player;
}
// fonction de ciblage // 
function cible(){
  target =  0 ; 
  document.getElementById("fantome").style.border = '1px solid red ' ;
  document.getElementById("dragon").style.border = '0px solid red ' ;
  document.getElementById("poulet").style.border = '0px solid red ' ;
  return target ;
}
function cible2(){
  target =  1 ; 
  document.getElementById("poulet").style.border = '1px solid red ' ;
  document.getElementById("fantome").style.border = '0px solid red ' ;
  document.getElementById("dragon").style.border = '0px solid red ' ;
  return target ;
}
function cible3(){
  target =  2 ; 
  document.getElementById("dragon").style.border = '1px solid red ' ;
  document.getElementById("fantome").style.border = '0px solid red ' ;
  document.getElementById("poulet").style.border = '0px solid red ' ;
  return target ;
}
// fonction de degat Perso 2 // 
function degatAttack(a,b,c,player) {
  if (c==0){
    b[0]=b[0]-a[player];
    if (b[0]<=0){
      document.getElementById("fantome").style.display="none"
      document.getElementById("StatFantome").style.display="none"
      document.getElementById("fantome").style.border="0px solid red "
    }
    return b[0];
  }
  if (c==1){
    b[1]=b[1]-a[player];    
    if (b[1]<=0){
      document.getElementById("poulet").style.display="none"
      document.getElementById("StatPoulet").style.display="none"
      document.getElementById("poulet").style.border="0px solid red "
    }
    return b[1];
  }
  if (c==2){
    b[2]=b[2]-a[player];    
    if (b[2]<=0){
      document.getElementById("dragon").style.display="none"
      document.getElementById("StatDragon").style.display="none"
      document.getElementById("dragon").style.border="0px solid red "
      
    }

    return b[2];
  }
}

var statFantome = document.getElementById("StatFantome");
var statDragon = document.getElementById("StatDragon");
var statPoulet = document.getElementById("StatPoulet");
var pvMob = [100,250,400];
var pvPlayer = [200,150,240,300];
var atkPlayer = [20,30,10,50];
var mana = [50,80,40,20];
var defPlayer = [50,20,40,80];
var target = 8 ;
var player = 0 ;
