{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★         type, interface 둘다 타입을 정의하고 object를 할당 할 수 있다.
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };


  // class ★           둘다 class에서 구현이 가능함
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }


  // Extends          둘다 아래와 같은 방법으로 확장이 가능함  interface는 extends를 통해, type은 아래와같이
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };



  // 😆 only interfaces can be merged. //아래와 같이 두번 정의 해주면 PositionInterface는 합쳐지게된다 (x,y,z를 다가진다) 이것은 interface 만이 가능하다 

  interface PositionInterface {
    x: number;
    y: number;
  }
  interface PositionInterface {
    z: number;
  }



  // type PositionType {
  // }
  // 😆 Type aliases can use computed properties       //아래와 같이 person을 선언하고 
  type Person = {                             
    name: string;
    age: number;
  };
  type Name = Person['name'];          // string        //person안의 name을 Name의 type으로 선언했음  
 
  // only type can to that.
  type NumberType = number;        //새로운 타입을 만드는것 
  type Direction = 'left' | 'right';           //union type을 만드는것 




  //Type과 Interface 비슷한거 같은데 언제 써야할까?
  //데이터를 담는 용도면 Type을 쓴다. 
  //특정한 규격을 정의하거나, 규격을 통해서 어느것이 구현된다면 Interface로 사용!

  //ex) Type 
  type Position = {
    x: number;
    y: number;
  };
  const pos: Position = {
    x: 0,
    y: 0
  };
  printPosition(pos);


  //ex) Interface
  interface CoffeeMaker {
    coffeeBeans:
  }

  class CoffeeMachine implements CoffeeMaker {
    coffeeBeans: number;
    makeCoffee(shts: number) {
      return {};
    }
  }














  type pos = {
    1: string;
    2: string;
  }

  const pos: Location = {
    1: "rigth",
    2: "left",
  }
  print(pos);







}
