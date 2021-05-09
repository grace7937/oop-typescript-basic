/**
 * Let's make a game 🕹
 */

{
    const positon = { x: 0, y: 0 };

    function move(direction: 'up' | 'down' | 'left' | 'right') {
    switch(direction) {
        case 'up' : 
           position.y +=1;
            break;
        case 'left' : 
            x + 1;
            break;
        //이렇게 down, left까지 작성한다.
    }
}


    const positon = { x: 0, y: 0 };

    function move(direction: 'up' | 'down' | 'left' | 'right') {
    switch(direction) {
        case 'up' : 
           position.y +=1;
            break;
        case 'left' : 
            x + 1;
            break;
        //이렇게 down, left까지 작성한다.
    }

  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}

  function move();
}
