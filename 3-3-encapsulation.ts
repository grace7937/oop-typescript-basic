//encapsulation 에서는 외부에 노출해도 되는 것과 안되는 것을 알수 있다.
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //정보은닉 방법

  //public   class 안에 작성된것은 기본값이 public 으로 되어있다.
  //private
  //protected   //외부에서는 접근을 할 수 없지만 상속을 할 떄 자식 에서 접근이 가능하게 한다.

  class CoffeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 10;
    private coffeeBeans: number = 100;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMaker {
      //새로운 instance에 static을 준 이유는 constructor에 private를 붙여 이 함수를 통해서만 새로운 instance를 생성할 수 있게 하기위해.
      return new CoffeMaker(coffeeBeans);
    }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("beans are not enough to make coffee");
      }
      this.coffeeBeans -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeMaker(50); //이 경우에 외부에서 새로운 instance를 만들 수 있다. 그러나 constructor이 private로 설정된 경우에는 아래와 같이 CoffeeMaker안에 함수에 접근해 새로운 instance를 생성 해야한다.
  // const maker2 = CoffeMaker.makeMachine(50);
  // maker.coffeeBeans = 3; //이렇게 외부에서 coffeeBeans 의 값을 건드릴 수 있는것은 위험하다. coffeeBeans에 private를 사용하여 접근을 못하게했다. 어떻게 접근할 수 있을까?
  // maker.fillCoffeeBeans(30); //class 안에 바로 coffeeBeans에 접근 하는것이 아니라 함수를 거쳐서 coffeeeBeans를 건드린다.

  // get, set 이해하기
  // class User {
  //   private firstName: string;                                                       //한번 생성자에 전달된 이름은 변경될수 없으면 private를 해주는것이 맞겠죠.
  //   private lastName: string;
  //   get fullName(): string {                                                  //get을 fullNmae이 호출될 때 그시점의 값을들 모아 새로운 값이 return 된다.
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  //   constructor(firstName: string, lastName: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }

  // 위의것을 아래와같이 constructor 안에서 private를 설정해주면 자동으로 멤버가 된다.
  class User {
    get fullName(): string {
      //get은 User.fullNmae의 값을 읽고 싶을때 사용한다.
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      //set은 User.age 로 값을 바꿀때 사용한다. //전달된 숫자가 정확한지 유효성 검사를 하는데도 set을 사용한다.
      if (num < 0) {
        throw new Error(`it couln't be under 0`);
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      //public도 작성가능
    }
  }

  const user = new User("steve", "Jobs");

  console.log(user.fullName);
}
