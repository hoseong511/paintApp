const canvas = document.getElementById("jsCanvas");
const colors = document.querySelectorAll(".jsColor");
const ctx = canvas.getContext("2d");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITAL_COLOR = "##2c2c2c";
const CANVAS_SIZE=700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle="white";
ctx.fillRect(0, 0, canvas.width, canvas.height);  
ctx.strokeStyle=INITAL_COLOR;
ctx.fillStyle=INITAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const SHOWING_CN = "showing";

function stopPainting(){
  painting=false;
}

function startPainting(){
  painting=true;
}

function onMouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;  
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else{
    ctx.lineTo(x, y);    
    ctx.stroke();
  }  
}

function handleColorClick(event){
  colors.forEach(color =>
    color.classList.remove(SHOWING_CN));

  const color = event.target.style.backgroundColor;  
  event.target.classList.add(SHOWING_CN)
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handlRangeChage(event){
  const size = event.target.value
  ctx.lineWidth = size;
  console.log(event.target.value);
}

function handleModeClick(){
  if(filling === true){
    filling = false;
    mode.innerText = "Fill";
  } else{
    filling = true;
    mode.innerText="Paint";    
  }
}

function handleCanvasClick(){
  if(filling){
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
  } 
  
}

function handleCM(event){
  event.preventDefault();
  console.log(event);
}

function handleSaveClick(event){
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download= "PaintApp[🎨]";
  console.log(image);
  link.click();
  
}

if(canvas){  
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

if(colors){
  Array.from(colors).forEach(color =>  
    color.addEventListener("click", handleColorClick));
}

if(range){
  range.addEventListener("input", handlRangeChage);
}

if(mode){
  mode.addEventListener("click",handleModeClick)
}

if(saveBtn){
  saveBtn.addEventListener("click", handleSaveClick)
}