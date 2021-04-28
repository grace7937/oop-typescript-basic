{
  //Javascript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  //TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //JavaScript 💩
  function jsFetchNum(id) {
    //code ...
    //code ...
    //code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    //code ...
    //code ...
    //code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //Optional parameter
  //인자가 두개인데 한개만 적으면 코드가 불평한다. 그래서 "?"를 써주면 lastName은 써도되고, 안써도 되는것이 된다.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("jhon");
  printName("ana", undefined);

  //Default parameter
  //함수에 인자를 전달하지 않으면 default값으로 저장된것이 함수의 인자로 들아간다.
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //Rest parameter
  //동일한 타입의 데이터를 함수 인자로 전달할때 쓴다.
  function addNumbers(...num: number[]): number {
    return num.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7));
}
