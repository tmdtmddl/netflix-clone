//리액트에서 받는 인자값을 props(프랍스)라고 부른다.

import { useState, useEffect } from "react";
import Item from "./Item";

const PropsDrilling2 = () => {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const onSubmit = () => {
    setPeople((prev) => [{ name, id: prev.length }, ...prev]);
  };
  return (
    <div>
      <h1>props-drilling</h1>
      <p>{fn("허", "승이")}</p>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>추가</button>
      </form>
      {/* map할때 주의할점 key속성에 넣는 값으로 index는 ㄴㄴ 훨씬더 정교하고 고유하고 반복되지 않을 값을 넣어야함 타입은 문자열 */}
      {people.map((person, index) => {
        return <Item key={person.id} text={person.name} />;
      })}
    </div>
  );
};

export default PropsDrilling2;

//원시타입 primitive 프리머티브
//string,number,null,undefined
//리액트에서 방목한다.

//객체타입 object//+배열 arry
//리액트에서 모심 그래서 시간이 좀걸림
const fn = (a, b) => {
  //   console.log(typeof "");
  //   console.log(typeof 2);
  //   console.log(typeof null);
  //   console.log(typeof undefined);

  //   console.log(typeof { name: "허승이" });
  //   console.log(typeof ["a", "b"]);
  return a + b;
};

// const name = {
//   first: "승이",
//   last: "허",
// };
const { first, last } = {
  first: "승이",
  last: "허",
};

// const { first, last } = name;
// console.log(name.last);
// console.log(name.first);

// console.log(first);
// console.log(last);
//객체는 특별해서 {}안에 담아놓은 값을 바로 불러올수 있음
