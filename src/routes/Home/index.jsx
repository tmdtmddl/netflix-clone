// import React, { useEffect } from "react";
// import { useTextInput } from "../../components/ui/TextInput";
// import OpenColor from "open-color";
// import styles from "./home.css";

// const Home = () => {
//   const Text = useTextInput();
//   const onSubmit = (e) => {
//     e.preventDefault();

//     console.log(Text.ref.current.value);
//   };
//   return (
//     <div>
//       <h1 className={styles.h1}>Home</h1>
//       <Text.Component
//         id={"text"}
//         placeholder={"이메일을 입력하세요"}
//         divCn={styles.input.div}
//         inputCn={styles.input.input}
//       />
//       <button>시작하기</button>
//     </div>
//   );
// };

// export default Home;
import { useEffect } from "react";
import { useTextInput } from "../../components/ui/TextInput";
import OpenColor from "open-color";
import styles from "./home.css";
import { anotherReasons } from "../../assets/fakebase";
import AnotherReasonItem from "./AnotherReasonItem";
import More from "./More";
import FAQ from "./FAQ";
import Start from "./Start";
import ImageSlider from "./ImageSlider";

const Home = () => {
  const Text = useTextInput();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(Text.ref.current.value);
  };

  return (
    <div className={styles.wrap}>
      <Start />
      <More />
      <ImageSlider />
      <div className={styles.container.div}>
        <p className={styles.container.p}>가입해야하는 또다른이유</p>
        <ul className={styles.container.ul}>
          {
            //함수사용한다=호출 call/fire =>괄호까지적기
            anotherReasons.map((reason) => {
              return <AnotherReasonItem key={reason.title} {...reason} />;
            })
          }
        </ul>
      </div>
      <FAQ />
    </div>
  );
};

export default Home;
