//Barre etat mob // 
document.getElementById("fantome").onmouseover = function() {mouseOver(pvMob)};
document.getElementById("fantome").onmouseout = function() {mouseOut()};

document.getElementById("dragon").onmouseover = function() {mouseOver2(pvMob)};
document.getElementById("dragon").onmouseout = function() {mouseOut2()};

document.getElementById("poulet").onmouseover = function() {mouseOver3(pvMob)};
document.getElementById("poulet").onmouseout = function() {mouseOut3()};
//changement de perso //

//degat mob attaque de base // 
document.getElementById("attack").onclick = function() {degat(atkPlayer,pvMob,target,nbPLayer)};
document.getElementById("attack1").onclick = function() {degat(atkPlayer,pvMob,target,nbPLayer)};
document.getElementById("attack2").onclick = function() {degat(atkPlayer,pvMob,target,nbPLayer)};
document.getElementById("attack3").onclick = function() {degat(atkPlayer,pvMob,target,nbPLayer)};
document.getElementById("heal").onclick = function() {heal(pvPlayer,pvmaxPlayer)};
//pvMob = document.getElementById("defence").onclick = function() {degatAttack(defPlayer)};
// ciblage mob //
target = document.getElementById("fantome").onclick = function() {cible()};
target = document.getElementById("poulet").onclick = function() {cible2()};
target = document.getElementById("dragon").onclick = function() {cible3()};
// fonction etat mob // 

degat = function(atkPlayer,pvMob,target){
  pvMob = degatAttack(atkPlayer,pvMob,target,player,nbMob);
  player = chgtPlayer(player,pvPlayer);
  monstreTurn = monstreTurn + 1 ;  
  if (monstreTurn==4 && target!=8 ){
    monstreTurn = 0;
    for (let i = 0 ; i <= nbMob; i++){
      attaqueMob(monstreTurn,defPlayer,pvPlayer,nbPLayer);
      document.getElementById("azerty").innerHTML=pvPlayer;
    }
    setTimeout(() => {
  
    }, 5000);
  }
  initialisationVie(pvPlayer,pvmaxPlayer,maxmana,mana);
  return player , monstreTurn ,pvPlayer ;
}





heal = function(pvPlayer,pvmaxPlayer){
  pvPlayer = soin (pvPlayer,pvmaxPlayer);
  player = chgtPlayer(player,pvPlayer);
  initialisationVie(pvPlayer,pvmaxPlayer,maxmana,mana);
  
  monstreTurn = monstreTurn + 1 ; 
  if (monstreTurn==4 ){
    monstreTurn = 0;
    if (target !=8 ){     
      for (let i = 0 ; i <= nbMob; i++){
        attaqueMob(monstreTurn,defPlayer,pvPlayer,nbPLayer);
        document.getElementById("azerty").innerHTML=pvPlayer;
      
    }
    }
    setTimeout(() => {
  
    }, 5000);
  }
  initialisationVie(pvPlayer,pvmaxPlayer,maxmana,mana);
  return player , pvPlayer ,monstreTurn ;
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
  if(pvPlayer[0]<=0){
    if(pvPlayer[1]<=0){
      if(pvPlayer[2]<=0){
        if(pvPlayer[3]<=0){
          document.getElementById("Skill4").style.visibility="hidden";
          document.getElementById("Skill3").style.visibility="hidden";
          document.getElementById("Skill2").style.visibility="hidden";
          document.getElementById("Skill1").style.visibility="hidden";
          document.getElementById("gameOver").style.visibility="visible";
    
        }
      }
    }
  }
  if (player==0){
    if (pvPlayer[player]>0 ) {
      document.getElementById("Skill1").style.visibility="visible";
      document.getElementById("Skill2").style.visibility="hidden";
      document.getElementById("Skill4").style.visibility="hidden";
      document.getElementById("Skill3").style.visibility="hidden";
    }
    else {
      player ++
    }
    
  }
  if (player==1){
    if (pvPlayer[player]>0 ) {
      document.getElementById("Skill1").style.visibility="hidden";
      document.getElementById("Skill4").style.visibility="hidden";
      document.getElementById("Skill2").style.visibility="visible";
      document.getElementById("Skill3").style.visibility="hidden";
    }
    else {
      player ++
    }
  }
  if (player==2){
    if (pvPlayer[player]>0 ) {
      document.getElementById("Skill1").style.visibility="hidden";
      document.getElementById("Skill2").style.visibility="hidden";
      document.getElementById("Skill3").style.visibility="visible";
      document.getElementById("Skill4").style.visibility="hidden";
    }
    else {
      player ++
    }
  }
  if (player==3){
    if (pvPlayer[player]>0 ) {
      document.getElementById("Skill4").style.visibility="visible";
      document.getElementById("Skill3").style.visibility="hidden";
      document.getElementById("Skill2").style.visibility="hidden";
      document.getElementById("Skill1").style.visibility="hidden";
    }
    else {
      player ++
    }
  }
  player ++ ; 
  if (player>3){
    player=0;
    
  }
  return player ;
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
// fonction de Skill // 
function degatAttack(a,b,c,player,nbMob) {
  if (c==0){
    b[0]=b[0]-a[player];
    if (b[0]<=0){
      nbMob=nbMob-1;
      document.getElementById("fantome").style.display="none"
      document.getElementById("StatFantome").style.display="none"
      document.getElementById("fantome").style.border="0px solid red "
    }
    return b[0] , nbMob;
  }
  if (c==1){
    b[1]=b[1]-a[player];    
    if (b[1]<=0){
      nbMob=nbMob-1;
      document.getElementById("poulet").style.display="none"
      document.getElementById("StatPoulet").style.display="none"
      document.getElementById("poulet").style.border="0px solid red "
    }
    return b[1] , nbMob;
  }
  if (c==2){
    b[2]=b[2]-a[player];    
    if (b[2]<=0){
      nbMob=nbMob-1;
      document.getElementById("dragon").style.display="none"
      document.getElementById("StatDragon").style.display="none"
      document.getElementById("dragon").style.border="0px solid red "
      
    }

    return b[2] , nbMob;
  }
}

function soin(pvPlayer,pvmaxPlayer) {  
  var pvMin=pvPlayer[0];
  var stockage=0;
  for (let i = 0 ; i <= 3; i++){
    if(pvMin>pvPlayer[i]){
      pvMin=pvPlayer[i];
      stockage=i;    
    }  
  }
  
  pvPlayer[stockage] = pvPlayer[stockage] + 50;
  if (pvPlayer[stockage]>pvmaxPlayer[stockage]){
    pvPlayer[stockage]=pvmaxPlayer[stockage];
  }
  return pvPlayer ; 
}

function initialisationVie(pvPlayer,pvmaxPlayer,mana,maxmana){
  document.getElementById("Kilyann1").innerHTML=pvPlayer[0]+"/"+pvmaxPlayer[0]+"  Pv" ; 
  document.getElementById("Kilyann2").innerHTML=mana[0]+"/"+maxmana[0]+" Mana" ; 
  document.getElementById("Tibleu1").innerHTML=pvPlayer[1]+"/"+pvmaxPlayer[1] + " Pv" ; 
  document.getElementById("Tibleu2").innerHTML=mana[1]+"/"+maxmana[1]+" Mana" ; 
  document.getElementById("John1").innerHTML=pvPlayer[2]+"/"+pvmaxPlayer[2] + " Pv" ; 
  document.getElementById("John2").innerHTML=mana[2]+"/"+maxmana[2]+" Mana" ; 
  document.getElementById("Alice1").innerHTML=pvPlayer[3]+"/"+pvmaxPlayer[3] + " Pv" ; 
  document.getElementById("Alice2").innerHTML=mana[3]+"/"+maxmana[3]+" Mana" ; 
}


function attaqueMob (monstreTurn,defPlayer,pvPlayer,nbPLayer){  
  var cibleMonstre = Math.floor(Math.random()*nbPLayer);
  while (pvPlayer[cibleMonstre] <= 0 ){
    cibleMonstre = Math.floor(Math.random()*nbPLayer);
    if(pvPlayer[0]<=0){
      if(pvPlayer[1]<=0){
        if(pvPlayer[2]<=0){
          if(pvPlayer[3]<=0){
            document.getElementById("gameOver").style.visibility="visible";
      
          }
        }
      }
    }
  }  
  pvPlayer[cibleMonstre]=pvPlayer[cibleMonstre]-(60-defPlayer[cibleMonstre]);
  if (pvPlayer[cibleMonstre]<0){
    pvPlayer[cibleMonstre]=0;
  }
  
  return pvPlayer[cibleMonstre] , monstreTurn ; 
}

setTimeout(() => {
  
}, 5000);

var statFantome = document.getElementById("StatFantome");
var statDragon = document.getElementById("StatDragon");
var statPoulet = document.getElementById("StatPoulet");
var pvMob = [100,250,400];
var pvPlayer = [200,200,200,200];
var pvmaxPlayer = [200,200,200,200];
var atkPlayer = [20,30,10,50];
var mana = [50,80,40,20];
var maxmana = [50,80,40,20];
var defPlayer = [30,20,30,50];
var target = 8 ;
var player = 1 ;
var monstreTurn = 0 ;
var nbPLayer = 4 ; 
var nbMob = 2;

initialisationVie(pvPlayer,pvmaxPlayer,mana,maxmana);
