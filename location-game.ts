

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


console.log(position);  // { x: 0, y: 0}
move('up');
move('down');
move('left');
move('right');

calculate = (cal: string, num: number[]) => {

}