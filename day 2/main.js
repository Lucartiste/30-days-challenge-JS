//usefull variable
const aiguille = document.querySelectorAll('.hand');
const trotteuse = document.querySelector('.second-hand');
const minuteAig = document.querySelector('.min-hand');
const heureAig = document.querySelector('.hour-hand');


//loop every seconds
setInterval(function(){

  const date = new Date();

  //seconds rotate
  const seconds = date.getSeconds();
  const secondDeg = seconds / 60 *360 +90;
  trotteuse.style.transform = 'rotate('+secondDeg+'deg)';

  //minutes rotate
  const minutes = date.getMinutes();
  const minuteDeg = minutes / 60 *360+90;
  minuteAig.style.transform = 'rotate('+minuteDeg+'deg)';

  //hours rotate
  const heures = date.getHours();
  const heureDeg = heures / 12 *360+90;
  heureAig.style.transform = 'rotate('+heureDeg+'deg)';

  //prevent for a bug at 60s
  if(secondDeg < 91){
    trotteuse.classList.remove('tick');
  }else{
    trotteuse.classList.add('tick');
  }
}, 1000)