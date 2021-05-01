{
  /**
   * Union Types: OR
   * 발생할수 있는 타입을저의 한뒤 그중 하나만 할당될수 있도록 한다. (aliases인데 OR이 붙은 느낌 ㅎ)
   */

  type Direction = "left" | "right" | "up" | "down";

  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tileSize: TileSize = 8;





  type SuccessState = {
    response: { boby: string };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;




  function doLogin(): LoginState {
    return {
      response: {
        boby: "logged in!",
      },
    };
  }

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🥳 ${state.response.body}`);
    } else {
      console.log(`🥳 ${state.reason}`);
    }
  }
}
