const canvas = document.getElementById("jsCanvas");
let painting = false;
let click = true;


function stopPainting(){
  painting=false
}

function onMouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;  
  console.log(x, y);  
}

function onMouseDown(event){
  console.log(event);
  painting = true;

}
function onMouseUp(event){
  stopPainting();
}

if(canvas && click){  
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
