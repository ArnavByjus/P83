// var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var vScreenWidth = screen.width;
var vNewWidth = screen.width - 70;
var vNewHeight = screen.height - 300;

var vButton = document.getElementById("btnClear");
vButton.addEventListener("click", fn_clear);

function fn_clear(e){
    ctx.canvas.width=ctx.canvas.width;
}

if(vScreenWidth<<992){
    document.getElementById("myCanvas").width = vNewWidth; 
    document.getElementById("myCanvas").height = vNewHeight; 
    document.body.style.overflow = "hidden";
}

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my TouchStart");

        mouseEvent = "touchStart";
        current_position_of_mouse_x = e.touches[0].clientX;
        current_position_of_mouse_y = e.touches[0].clientY;
        last_position_of_x = current_position_of_mouse_x - canvas.offsetLeft;
        last_position_of_y = current_position_of_mouse_y - canvas.offsetTop;
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUp";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseLeave";
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

