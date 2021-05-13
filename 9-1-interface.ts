{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ★
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ★
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // 😆 only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

  // type PositionType {
  // }

  // 😆 Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right';


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
