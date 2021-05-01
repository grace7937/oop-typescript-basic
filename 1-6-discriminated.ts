{
  //Union Type을 사용할떄 공통적인 프로퍼티를 가지고 있을때(밑의경우 'result')
  type SuccessState = {
    result: "success";
    response: { boby: string };
  };
  type FailState = {
    reuslt: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function doLogin(): LoginState {
    return {
      result: "success",
      response: {
        boby: "logged in!",
      },
    };
  }

  function printLoginState(state: LoginState) {
    if (state.result == "success") {
      console.log(`🥳 ${state.response.body}`);
    } else {
      console.log(`🥳 ${state.reason}`);
    }
  }
}
