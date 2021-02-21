{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //class 는 관련있는 데이터나 기능을 한곳에 묶어 놓는 기능을 하기위함이다.
  class CoffeeMachine {
    //CoffeeMashine 에는 두가지 멤버 변수(속성)와 constructor 1개와 makeCoffee 1개의 함수가 있다.
    static BEANS_GRAMM_PER_SHOT: number = 10; //static class level 입니다. method도 가능 // 이경우 타입 추론을 통해 primitive type 이니까 number 를 안적어줘도 된다. 생략가능!, class object 안에서 바뀌지않고 공유가 되어지는 이놈의 경우 static 을 써주면 새로운 instance를 생성 했을때 일일이 들어가지 않아서 매모리 낭비가 일어나지 않음
    coffeeBeans: number = 100; //instance (object) level 입니다. //instance 생성될때마다 들어간다 (생성될때 마다 값이 바뀌어서 들어가야 하니까)

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("beans are not enough to make coffee");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const machine = new CoffeeMachine(50); // coffeeBeans { coffeeBeans: 50 }  BEANS_GRAMM_PER_SHOT: 10은 static이기에 빠졌다.

  const machine2 = CoffeeMachine.makeMachine(150);
}
