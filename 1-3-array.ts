{
    //Array 
    // const fruits = [ "apple", "banana"];
    // const scroes = [1,2,3];

    //TypeScript Array
    //아래와같이 2가지 방법이 있지만 readonly 쓸때 위에 형식으로 쓰니까 일관성있게 string[]이렇게 쓰면됨
    const fruits: string[] = [ "apple", "banana" ];
    const scores: Array<number> = [ 1, 2, 3,];

    function printArray(fruits: readonly string[]) {}


    //Tuple -> interface, type alias, class로 대체해서 써라 Tuple은 가독성이 떨어져서 사용권장x
    //한가지 타입만 있는 배열이 아닐때(react useState가 Tuple이다.)

    let student: [string, number];
    student = ['name', 123];
    student[0];
    student[1];
    //이렇게 쓰면좀 괜찮지만 그래도 별로다.
    const [name, age] = student;
    
}