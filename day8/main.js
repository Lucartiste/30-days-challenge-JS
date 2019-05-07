const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'join';
ctx.lineCap = 'join';
ctx.lineWidth = '10';
//ctx.globalCompositeOperation = 'xor';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

//function draw only if isDrawing true
function draw(e){
	if (!isDrawing) return;
		ctx.strokeStyle = 'hsl('+hue+', 75%, 50%)';

		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		[lastX, lastY] = [e.offsetX, e.offsetY];
		hue++;
		if (ctx.lineWidth >= 100 || ctx.lineWidth <= 9) {
			direction = !direction;
		}

		if (direction) {
			ctx.lineWidth++;
		}
		else{
			ctx.lineWidth--;
		}
}


//handle
canvas.addEventListener('mousedown', function(e){
	[lastX, lastY] = [e.offsetX, e.offsetY]
	isDrawing = true;
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', function(){
	isDrawing = false;
})

canvas.addEventListener('mouseout', function(){
	isDrawing = false;
})

