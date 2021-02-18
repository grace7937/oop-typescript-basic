{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    //interface는 나랑 의사소통하려면 나는 이런 규약을 가지고 있어 라는 의미
    //CoffeeMaker 이라는 인터페이스는 makeCoffee라는 함수가 있어 shots은 number를 받고 CoffeeCup을 return 받을 수 있어
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  //CoffeeMachine 은 interface CoffeeMaker를 구현하는 아이입니다.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 10;
    private coffeeBeans: number = 100;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      //새로운 instance에 static을 준 이유는 constructor에 private를 붙여 이 함수를 통해서만 새로운 instance를 생성할 수 있게 하기위해.
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("beans are not enough to make coffee");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // const maker: CoffeeMachine = CoffeeMachine.makeMachine(50);
  // maker.fillCoffeeBeans(100);
  // maker.makeCoffee(1);
  // //위와 같이 maker. 이라고 치면 자동완성 되어 쓸수 있는 함수들이 나옫다. class에는 많은 함수가 담겨있지만 private로 감추고 interface상으로 이 함수만 보여지게 한것이다. 이것을 추상화라한다.
  // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(50);
  // maker2.fillCoffeeBeans(100);
  // maker2.makeCoffee(1);
  // maker2.clean();
  // //위와같이 CoffeeMaker interface를 type으로 주면 interface CoffeeMaker안에 정의된 함수는 makeCoffe밖에 없기때문에 fillCoffeeBenas는 사용기 불가능하다.

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      this.machine.fillCoffeeBeans(80);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(60);

  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

  amateur.makeCoffee();
  pro.makeCoffee();
}
