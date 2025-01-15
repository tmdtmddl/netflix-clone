import { useEffect, useState } from "react";

const UseState = () => {
  const [string, setString] = useState("");

  const onChangeString = () => {
    //함수이름은 버튼의 이름을 따서 앞의 on만 붙여서 적을 수도 있다.(캐멀케이스)

    //1.직접입력하기
    //초기값과 동일한타입의값을입력한다.
    //setString("허승이");
    //2.이전값을 가져와서 가공처리하기.(꼭리턴처리하기)
    setString((prev) => {
      return `${prev}승이`;
    });
  };

  const [number, setNumber] = useState(0);
  const onMinus = () => {
    setNumber((prev) => {
      return prev - 1; //숫자
    });
  };
  const onReset = () => {
    //1.값을 직접넣기 초기값과타입을 동일하게
    setNumber(0);
  };
  const onPlus = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };

  const [boolean, setBoolean] = useState(false);
  const [boolean2, setBoolean2] = useState(false);
  const [boolean3, setBoolean3] = useState(false);

  const onSwitch1 = () => {
    setBoolean((prev) => {
      //boolean타입은 참/거짓 밖에없다.
      //!boolean=>boolean의 반대값
      return !prev;
    });
  };

  const onSwitch2 = () => {
    setBoolean2((prev) => {
      return !prev;
    });
  };

  const onSwitch3 = () => {
    setBoolean3((prev) => {
      return !prev;
    });
  };
  const onMasterSwitch = () => {
    if (!boolean && !boolean2 && !boolean3) {
      setBoolean(true);
      setBoolean2(true);
      setBoolean3(true);
      return;
    }
    setBoolean(false);
    setBoolean2(false);
    setBoolean3(false);
  };

  const [obj, setObj] = useState({
    last: "허",
    first: "승이",
  });

  const [first, setFirst] = useState(obj.first);
  const [last, setLast] = useState(obj.last);

  const onLast = () => {
    //성을 입력하지 않았다면입력해라
    if (last.length === 0) {
      return alert("입력해주세요");
    }
    //달라지지않았으면 달라지지않았음
    if (last === obj.last) {
      return alert("달라지지않았어요");
    }
    setObj((prev) => {
      return { ...prev, last };
    });
    alert("성을 개명했어요");
  };
  const onFirst = () => {
    if (first.length === 0) {
      return alert("입력해주세요");
    }
    if (first === obj.first) {
      return alert("달라지지않았어요");
    }
    setObj((prev) => {
      return { ...prev, first };
    });
    alert("이름을 개명했어요");
  };

  const onSubmitObj = () => {
    const newFirstname = "빈";
    const newLastname = "원";
    //1.이름만 개명
    // setObj((prev) => {
    //   return { ...prev, fist: newFirstname };
    // });

    //2.성만 개명
    setObj((prev) => {
      return { ...prev, last: newLastname };
    });

    //3.성이름 모두개명
    // const newName = {
    //   last: newLastname,
    //   first: newFirstname,
    // };
    // setObj(newName); //바로새로운값입력
  };

  const [array, setArray] = useState(["a", "b", "c", "d"]);

  const onAddArray = () => {
    console.log(string.length);
    //만약에 string이라는 변수가길이가 0일때가 아무것도 입력하지 않은때 인데 이때에는 안됨

    if (string.length === 0) {
      return alert("적어라");
    }
    const found = array.find((item) => item === string);
    if (found) {
      return alert("중복된 값");
    }
    setArray((prev) => {
      console.log(prev);
      let copy = [string, ...prev];
      console.log(copy);
      return [...prev, string];
    });
  };

  const [objArray, setObjArray] = useState([
    { l: "김", f: "영화" },
    { l: "이", f: "형진" },
    { l: "강", f: "찬희" },
  ]);

  const onObjArray = () => {
    const kyh = objArray[0];
    const lhj = objArray[1];

    const newPerson = { l: last, f: first };
    const found = objArray.find((person) => {
      const isSame = isSamePerson(newPerson, person);

      if (isSame) {
        return person;
      }
    });
    if (found) {
      return alert("동일 인물존재");
    }
    alert("새로운 인물입니다.");

    setObjArray((prev) => {
      return [newPerson, ...prev];
    });
  };
  useEffect(() => {
    console.log({
      objArray,
      array,
    });
  }, [objArray, array]);

  return (
    <div>
      <h1>UseState</h1>
      <input
        type="text"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      {/* <p style={{ fontSize: 100, color: "tomato" }}>{string}</p> */}
      <button onClick={onChangeString}>Change String</button>

      <div>
        <button onClick={onMinus}>-</button>
        <button onClick={onReset}>{number}</button>
        <button onClick={onPlus}>+</button>
      </div>
      <div>
        <p>Switch is{boolean ? "On" : "Off"}</p>
        <button onClick={onSwitch1}>switch</button>
      </div>
      <div>
        <p>Switch is{boolean2 ? "On" : "Off"}</p>
        <button onClick={onSwitch2}>switch</button>
      </div>
      <div>
        <p>Switch is{boolean3 ? "On" : "Off"}</p>
        <button onClick={onSwitch3}>switch</button>
      </div>
      <button onClick={onMasterSwitch}>master switch</button>

      <div>
        <p>
          {obj.last} {obj.first}
        </p>
        <input
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          placeholder=" 새로운 성을입력해주셈"
        />
        <button onClick={onLast}>성개명</button>
      </div>
      <div>
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          placeholder=" 새로운 이름을입력해주셈"
        />
        <button onClick={onFirst}>이름개명</button>
      </div>

      <div>
        <input
          type="text"
          value={string}
          onChange={(e) => setString(e.target.value)}
        />
        <button onClick={onAddArray}>Add to Array</button>
      </div>
      <button onClick={onObjArray}>check obj array</button>
    </div>
  );
};

export default UseState;

const isSamePerson = (p1, p2) => {
  const name1 = `${p1.l}${p1.f}`;
  const name2 = `${p2.l}${p2.f}`;
  if (name1 === name2) {
    return true;
  }
  return false;
};

//문자열과 문자열 비교 간단함 === // !== 같은지 다른지
//숫자비교는 ===,!==,<,>,<=,>=
//객체비교는 모든 값을 하나하나 일일이 비교해줘야한다.
