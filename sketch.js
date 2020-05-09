var movingRect,fixedRect;
var rectangle1,rectangle2;


var rectangle3,rectangle4;


function setup(){
    var canvas = createCanvas(1200,800);
 rectangle1=createSprite(500,150,50,80);
rectangle2=createSprite(500,450,50,80);
rectangle1.shapeColor="blue";
rectangle2.shapeColor="orange";

rectangle3=createSprite(200,200,50,80);
rectangle4=createSprite(350,200,50,80);

//rectangle3.velocityX=5;
//rectangle4.velocityX=-5;

rectangle1.velocityY=5;
rectangle2.velocityY=-5;
 
}

function draw()
{
background(0);
result=isTouching(rectangle1,rectangle2);

if(result==true)
{
    rectangle1.shapeColor="green";
    rectangle2.shapeColor="red";
}
drawSprites();
}
function isTouching(rectangle1,rectangle2)
{
    if(rectangle1.y-rectangle2.y<rectangle1.height/2+rectangle2.height/2
        && rectangle2.y-rectangle1.y<rectangle1.height/2+rectangle2.height/2
        && rectangle1.x-rectangle2.x<rectangle1.width/2+rectangle2.width/2
        && rectangle2.x-rectangle1.x<rectangle1.width/2+rectangle2.width/2
        )
        {
            return true;
        }
        else
        {
            return false;
        }
    
}

function bounceOff(rectangle1,rectangle2)
{
    if(rectangle1.y-rectangle2.y<rectangle1.height/2+rectangle2.height/2
        && rectangle2.y-rectangle1.y<rectangle1.height/2+rectangle2.height/2
        )
        {
            rectangle1.velocityY=rectangle1.velocityY*(-1);
            rectangle2.velocityY=rectangle2.velocityY*(-1);
           
        }

      else  if(rectangle1.x-rectangle2.x<rectangle1.width/2+rectangle2.width/2
            && rectangle2.x-rectangle1.x<rectangle1.width/2+rectangle2.width/2
            )
            {
                rectangle1.velocityX=rectangle1.velocityX*(-1);
                rectangle2.velocityX=rectangle2.velocityX*(-1);
                
            }
}