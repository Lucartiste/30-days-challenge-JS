const panels = document.querySelectorAll('.panel');

function toggle(){
  this.classList.toggle('open')
}

function toggleActive(e){
  if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active')
  }
}


panels.forEach(function(e){
  e.addEventListener('click', toggle)
})

panels.forEach(function(e){
  e.addEventListener('transitionend', toggleActive)
})
