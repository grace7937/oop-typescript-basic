{
  //내가 작성한 코드
  // function makeCoffee(shots: number): string {
  //   return (`'${shots}' + 'of coffee'`);
  // }

  //Ellie 작성 코드

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 10; // 이경우 타입 추론을 통해 primitive type 이니까 number 를 안적어줘도 된다. 생략가능!
  let coffeeBeans: number = 100;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("beans are not enough to make coffee");
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  const coffee = makeCoffee(2);
  console.log(coffee);
}
