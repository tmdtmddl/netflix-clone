import { useCallback, useMemo, useState } from "react";

const LearnUseMemo = () => {
  //const 변수명 =useMemo()
  //const 변수명 =useMemo(
  //()=>{},[] //()안에 콜백함수와 의 존성을 넣어줘야함(,로구분)
  //)

  //1.초기값으로 사용하는 경우
  const initialState = useMemo(() => {
    return 0;
  }, []);
  //2.
  const [state, setState] = useState(initialState);
  const stateMessage = useMemo(() => {
    if (state === 0) {
      return "상품담아";
    }
    if (state > 10) {
      return "ㄴㄴ";
    }
    return null;
  }, [state]);
  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     if (stateMessage) {
  //       return alert(stateMessage);
  //     }
  //     console.log(state, stateMessage, initialState);
  //   };
  const ref = useRef();
  //   const onSubmit = useCallback(
  //     (e) => {
  //       e.preventDefault();
  //       if (stateMessage) {
  //         alert(stateMessage);
  //         setTimeout(() => {
  //           ref.current.showPicker();
  //         }, 500);
  //         return;
  //       }
  //       alert(`상품`);
  //     },
  //     [state, stateMessage, ref]
  //   );
  return (
    <div>
      <h1>LearnUseMemo</h1>
      <form action="">
        <select
          name=""
          id=""
          onChange={(e) => setState(Number(e.target.value))}
          ref={ref}
          value={state}
        >
          <option value="">상품수량</option>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <button>주문하기</button>
      </form>
    </div>
  );
};

export default LearnUseMemo;
