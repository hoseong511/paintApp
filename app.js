const canvas = document.getElementById("jsCanvas");
const colors = document.querySelectorAll(".jsColor");
const ctx = canvas.getContext("2d");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle="##2c2c2c";
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

if(canvas){  
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
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