var inputs = document.querySelectorAll('input');
console.log(inputs);

function modifyStyle(){
	var suffix = this.dataset.sizing || '';
	console.log(this.name);
	console.log(suffix)
	document.documentElement.style.setProperty('--'+this.name, this.value + suffix);
	console.log(this.name + ' + ' + this.value)

}


inputs.forEach(function(element) {
  element.addEventListener('change', modifyStyle)
});

inputs.forEach(function(element) {
  element.addEventListener('mousemove', modifyStyle)
});