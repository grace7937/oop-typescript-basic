{
  //Intersection Type
  //union은 발생할수 있는 모든Type중 하나라면, intersection은 &&(and)같은 개념이예요.

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  //인자로 student, worker 둘다 받으니까 프로퍼티를(name, score, employeeId, work) 4개 다 적어줘야한다.
  internWork({
    name: "chong",
    score: 1,
    employeeId: 88930,
    work: () => {},
  });
}
