var mouseEvent=""
var xlastp=""
var ylastp=""
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    mouseEvent="mousedown"
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    xcurrentp=e.clientX-canvas.offsetLeft
    ycurrentp=e.clientY-canvas.offsetTop
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle= "purple"
        ctx.lineWidth=4
        ctx.moveTo(xlastp,ylastp)
        ctx.lineTo(xcurrentp,ycurrentp)
        ctx.stroke()
    } 
    xlastp=xcurrentp
    ylastp=ycurrentp
}