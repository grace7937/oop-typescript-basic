{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    //interface는 나랑 의사소통하려면 나는 이런 규약을 가지고 있어 라는 의미
    //CoffeeMaker 이라는 인터페이스는 makeCoffee라는 함수가 있어 shots은 number를 받고 CoffeeCup을 return 받을 수 있어
  }

  //CoffeeMachine 은 interface CoffeeMaker를 구현하는 아이입니다.
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 10;
    private coffeeBeans: number = 100;
    public constructor(coffeeBeans: number) {
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
  //머신 카페라테
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      milkFrother: CheapMilkSteamer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }
  //싸구려 우유 커품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("steaming some milk...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //설탕 제조기
  class CandysugarMixer {
    private getSugar() {
      console.log("Getting some sugar from jar");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  //sweetCoffeeMaker
  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: CandysugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: CandysugarMixer
    ) {
      super(beans);
    }
    makecoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  const machines: CoffeeMaker = [
    new CoffeeMachine(1000),
    new CaffeLatteMachine(1000, "sss"),
    new SweetCoffeeMaker(1000),
  ];

  machines.forEach(machine => {
    console.log("---------------");
    machine.makeCoffee(2);
  });

  // const sweetCoffee = new SweetCoffeeMaker(12);
  // console.log(sweetCoffee);

  // const machine = new CoffeeMachine(23);
  // const latteMachine = new CaffeLatteMachine(23, "ssss");
  // const coffee = latteMachine.makeCoffee(1);
  // console.log(coffee);
  // console.log(latteMachine.serialNumber);

  const cheapMilkmaker = new CheapMilkSteamer();
  const candySugar = new CandysugarMixer();

  //4.18 강의 들을차례
}
