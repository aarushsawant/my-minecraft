var canvas=new fabric.Canvas('myCanvas');
player_Y=10;
player_X=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
   {
       player_object=Img;
       player_object.scaleToWidth(150);
       player_object.scaleToHeight(140);
       player_object.set({
           top:player_Y,
           left:player_X
       });
       canvas.add(player_object);
   } 
    );
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
   {
       block_object=Img;
       block_object.scaleToWidth(block_width);
       block_object.scaleToHeight(block_height);
       block_object.set({
           top:player_Y,
           left:player_X
       });
       canvas.add(block_object);
   } 
    );
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    if(e.shiftkey==true && keyPressed=='80')
{
    block_height=block_height+10;
    block_width=block_width+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
    
}

if(e.shiftkey==true && keyPressed=='77')
{
    block_height=block_height-10;
    block_width=block_width-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
    
}

if(keyPressed=='38')
{
    up();
}

if(keyPressed=='40')
{
    down();
}

if(keyPressed=='37')
{
    left();
}

if(keyPressed=='39')
{
    right();
}

if(keyPressed=='87')
{
    new_image('wall.jpg');
}

if(keyPressed=='71')
{
    new_image('ground.png');
}

if(keyPressed=='76')
{
    new_image('light_green.png');
}

if(keyPressed=='84')
{
    new_image('trunk.jpg');
}

if(keyPressed=='82')
{
    new_image('roof.jpg');
}

if(keyPressed=='89')
{
    new_image('yellow_wall.png');
}

if(keyPressed=='68')
{
    new_image('dark_green.png');
}

if(keyPressed=='67')
{
    new_image('cloud.jpg');
}

if(keyPressed=='85')
{
    new_image('unique.png');
}
}
function up()
{
    if(player_Y>=0)
    {
        player_Y=player_Y-block_height;
        canvas.remove(player_object);
player_update();

    }
}

function down()
{
    if(player_Y<=500)
    {
        player_Y=player_Y+block_height;
        canvas.remove(player_object);
player_update();

    }
}

function left()
{
    if(player_X>=0)
    {
        player_X=player_X-block_width;
        canvas.remove(player_object);
player_update();

    }
}

function right()
{
    if(player_X<=850)
    {
        player_X=player_X+block_width;
        canvas.remove(player_object);
player_update();

    }
}
