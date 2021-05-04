{
    //Type Inference 말그대로 타입을 추론하는 것이다. 

    let text = 'hello';          //hello 를 입력했으니 text는 자동으로 string 이라 추론된다.
    text = 1      
    
    

    //타입 추론이란 인자에 넘버가 들어왔네, 그럼 return 값은 두개 더하는 것이니 넘버겠네 하며 추론하는것.
    function add(x: number, y: number) {
        return x + y;
    }
    const result = add(1,2);           // 이렇게 하면 result도 추론에의해 자동으로 숫자타입으로 됨.
}

//Type 추론 자동으로 하게끔 하고 안쓰는것 괜찮은가? 뻔한 원시타입의 경우는 괜찮겠지만, 함수같은 복잡은 곳에서는 꼭 타입을 써줘야한다.