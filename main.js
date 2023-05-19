var mouseevent="empty";
var lastx;
var lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="black";
var width=3;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
var last_position_of_x, last_position_of_y;

    
    
    
    var width=screen.width;
    newheight=screen.height-200;
    newwidth=screen.width-100;

    if(width < 992){

        document.getElementById("myCanvas").width=newwidth;
        document.getElementById("myCanvas").height=newheight;
        document.body.style.overflow="hidden";


    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width = document.getElementById("width").value;
        //Addictonal Activity ends

        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }
    
    

