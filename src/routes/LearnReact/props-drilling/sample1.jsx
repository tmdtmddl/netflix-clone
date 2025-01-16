import { useState, useEffect } from "react";
import SampleItem from "./SampleItem";

const PDsameple1 = () => {
  const [text, setText] = useState("");
  const name = {
    first: "승이",
    last: "허",
  };
  return (
    <div>
      <h1>PDsameple1</h1>
      <input
        type="text "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* 2.컴포넌트로 불러오는 곳에서 정확한 속성을 입력 */}
      <SamepleInput {...text} />
      <SamepleInput text="너는 병아리" />
      <SamepleInput text="" />
      <SamepleInput />
      <SamepleInput />
      <SamepleOBJ
        //   first={name.first} last={name.last}
        {...name}
        middle="세바스찬"
      />
    </div>
  );
};

export default PDsameple1;

//1.컴포넌트로 만드는 곳에서 인자값으로 받아올 속성을 정해준다

//4.인자 값의 이름을 고유하게  유지한다. 그리고 불러오는 ㄱ곳에도 인자값이고유하게 작명한다.
const SamepleInput = (props) => {
  //3.컴포넌트의 인자를 정할때 js에서는 타입을 지정할수 없음(그래서 좀 불편)
  return (
    <div>
      <p>
        <b>{props.text}</b>
      </p>
      <SampleItem text={props.text} />
    </div>
  );
};

//내가받아야할인자값이랑동일한 값과 동일한 값 {...값}으로 전달받을 수있음
//내가 필요한것을 꺼내오면 됨
const SamepleOBJ = ({ first, last, middle }) => {
  //객체를 받아올 때는 {}가아닌 그냥 ()안에다가 바로 인자를 선언해서 가져오면 됨
  return (
    <div>
      {last}, {middle}, {first}
    </div>
  );
};

//props-dilling을 할때 리액트 컴포넌트 끼리 주고 받는 값은 객체임.
//내가만들어놓은 보내야하는 객체가 받아야할 객체가모자를땐 아래에 추가해도됨
