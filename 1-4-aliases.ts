{
  //Type Aliases 란 새로운 타입을 내가 정의 하는것! TypeScript의 꽃🌹
  type Text = string;
  // const name: string = 'ana';  //또는
  const name: Text = "ana";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "ellie",
    age: 15,
  };

  //String Literal Types
  //위에서는 Type에 Type을 할당해 줬지만 이것은 그냥 글자 그자체를 할당한다.
  type Name = 'name';
  let eName: Name;
  eName = 'name';        //eName에는 'name'이라는 글자밖에 못쓴다.

  type Boal = true;
  const isCat: Boal = false;    //Boal는 ture이기에 false입력하면 에러
}
