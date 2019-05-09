const checkboxes = document.querySelectorAll('.inbox input');
console.log(checkboxes)
let lastChecked;

function handlecheck(e) {

  let inBetween = false;
  if (e.shiftKey && this.checked) {

    checkboxes.forEach(function(checkbox){



      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(function(e){
	e.addEventListener('click', handlecheck)
})

