{
    //Type Assertions 💩  강제로 하기 type 지정 

    function jsStrFun(): any {
        return 'hello';
    }
    const result = jsStrFun();    //jsStrFun의 리턴은 any기 때문에 문자열에서 사용가능한 api를 ex) result.length 사용할 수 없다. 그렇기에 강제로 '이거진짜 string을 리턴해!' 라고 말하면 srt.length를 이용할 수 있다. 
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(4));   //😱Error (wrong은 숫자인데 숫자 배열이라고 assertion했으니....)

    function findNumber(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumber()!;        
    numbers!.push(2);  // 😱             //!는 undefined일리 없어 무조건 배열이야 할때 쓰는거임

    const button = document.querySelector('class')!;  //button은 요소, null두개가 올수 있는데 이렇게 사용하면 100퍼 button에 요소가 담기니까 !를 쓴다.
    button.nodeValue;

}