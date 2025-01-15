import { useEffect, useState } from "react";

const LearnUseEffect = () => {
  const [time, setTime] = useState(0); //second 초
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const onStart = () => {
    setStart(true);
  };
  const onReset = () => {
    setTime(0);
  };
  const onStop = () => {
    setStart(false);
  };

  useEffect(() => {
    if (start) {
      const counting = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      counting;
      return () => {
        clearInterval(counting);
      };
    }
  }, [start]); //[]의존성을 추가한뒤에 useEffect를 사용하면 해당 컴포넌트가 render에서 딱 한번 실행한다.
  //[]안에는 의존성을 넣어주는 데 해당변수가 업데이트 될때마다 실행한다.
  //리액트에서 useStat등의 훅으로 변수를 선언할때 컴포넌트 안의 상단에 선언
  //중간즘에 함수를 작성 또는 위의 선언된변수 근처에서 작성
  //함수가 useState의 훅의 set함수를 사용하지 않는 함수를 만들면 인자값으로 변수를 받아오고 리액트컴포넌트 바깥아래 부분에 작성(다른파일에만들어두고 사용할수도 있다)
  return (
    <div>
      <h1>Use Effect</h1>
      <div>
        <p>{time}초</p>
        <button onClick={onReset}>초기화</button>
        <button onClick={onStart}>시작</button>
        <button onClick={onStop}>Stop</button>
      </div>
    </div>
  );
};

export default LearnUseEffect;
