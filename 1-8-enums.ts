{
    //Eunm 상수값을 한대로 모아서 정의하는 Type(TypeScript 에서 Enum은 사용하지 않는것이좋다. union을 사용하라)
    

    //JavaScript
    const MAX_UNM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1,});

    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript
    //type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednessday';    enum대신 이렇게 union으로 쓰기!
    enum DAYS{
        Monday = 1,               //이렇게하면 0부터 시작 아니라 1부터 시작, 문자열도 '1'대신 할당가능 그대신 다음 에오는 것에도 쭉 문자작성해줘야함 (숫자는 자동)
        Tuesday,
        Wednesday,
    }
    console.log(DAYS.Monday);    // Monday 값은  0

   // 모바일 클라이언트 에서는 union을 쓸수 없기에 Eunm쓰지만 그외에 다른경우는 다 union으로 바꿔 쓰기!

}