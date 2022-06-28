import "./App.css";
import { useState } from "react";

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter += 1;
    setCounter2(counter2 + 1);
    console.log("counter는", counter, "counter2 state는", counter2);
  };

  //1. 유저가 버튼을 클릭한다
  //2. counter+1해서 1이됨
  //3. setState함수호출
  //4. console.log실행됨
  //5. 변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전의 값이 보인다.
  //6. 함수끝
  //7. app다시 re render
  //8. let counter=0을 거치면서 counter 값은 다시 0으로 초기화 된다.
  //9. state값은 update가 되면서 다시 render를 한다.(업데이트된 state값이 보인다.)

  return (
    <div>
      {counter}
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
