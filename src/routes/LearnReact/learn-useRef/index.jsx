import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const LearnUseRef = () => {
  //코드가 길어질지언정 속도개선에 효과적임
  //상수는 2번실행하지만 얘는 한번만 실행함
  //useState의 초기값넣을때 많이씀
  const initialState = useMemo(() => {
    return 0;
  }, []);
  const [state, setState] = useState(0);
  const counting = () => {
    setState((prev) => prev + 1);
  };
  //ref=reference의 줄임말=document.querySelector()
  const pRef = useRef();

  const checkP = () => {
    if (pRef.current) console.log(pRef.current.innerText);
    // pRef.current.innerText = "123123113";
  };
  const inputRef = useRef();
  const CheckInput = () => {
    console.log(inputRef.current.value);
  };
  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log(state, pRef.current?.innerText);
  });
  return (
    <div>
      <h1>LearnUseRef</h1>
      <p ref={pRef}>{state}</p>
      <button onClick={counting}>++</button>
      <button onClick={checkP}>check P tag</button>
      <input type="text" ref={inputRef} />
      <button onClick={CheckInput}>check input</button>
      <button onClick={focusInput}>focus input</button>
    </div>
  );
};

export default LearnUseRef;
