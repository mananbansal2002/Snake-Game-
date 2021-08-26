let indir={x:0,y:0};
let speed=10;
let lastPaintTime=0;
let snake=[{x: 13,y: 15}];
let food={x:6,y:7};
let scorejs=0;


function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<(1/speed)){
        return;
    }
    lastPaintTime=ctime;
    gameengine();
}


function gameengine(){
    
    if(iscollide(snake)){
        indir={x:0,y:0};
        alert("Game Over");
        snake=[{x: 13,y: 15}];
    }
    
    
    
    if(snake[0].x==food.x && snake[0].y==food.y)
        {
           let a=2;
           let b=16;
            snake.unshift({x:snake[0].x+indir.x,y:snake[0].y+indir.y});
            food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
            scorejs+=10;
            score.innerHTML="Score : "+ scorejs;
        }
    
    
    for(let  i=snake.length-2;i>=0;i--)
        {
            
           snake[i+1]={...snake[i]}; 
        }
    snake[0].x+=indir.x;
    snake[0].y+=indir.y;
    
    
    
    
    
    board.innerHTML="";
    snake.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index==0)
             snakeElement.classList.add('head');
        else
            snakeElement.classList.add('snake');
        board.appendChild(snakeElement);
        
    });
    
        foodElement=document.createElement('div');
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
    
}









function iscollide(snake){
    for(let index=1;index<snake.length;index++)
        {
            if(snake[index].x===snake[0].x && snake[index].y===snake[0].y)
                return true;    
        }
    if(snake[0].x>=18 || snake[0].y>=18 || snake[0].y<=0 ||snake[0].x<=0)
                return true;
    
}


window.requestAnimationFrame(main);

window.addEventListener('keydown',e =>{
    indir={x:0,y:1};
    switch(e.key){
        case "ArrowUp" : 
            
            indir.x=0;
            indir.y=-1;
            break;
        case "ArrowDown" :
            indir.x=0;
            indir.y=1;
            break;
        case "ArrowLeft" :
            indir.x=-1;
            indir.y=0;
            break;
        case "ArrowRight" :
            indir.x=1;
            indir.y=0;
            break;
       default:
                break;
    }
});
