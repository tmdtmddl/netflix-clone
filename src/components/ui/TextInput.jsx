// import { useState, useEffect, useRef, useCallback } from "react";
// //리액트버전 19이상에서만 {}prodrilling에서 ref라는 속성 전달가능

// const TextInput = ({ inputRef, value, onChangeText, id, placeholder }) => {
//   const onChange = (e) => {
//     onChangeText(e.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor={id}>{placeholder}</label>
//       <input
//         type="text"
//         id={id}
//         value={value}
//         onChange={onChange}
//         ref={inputRef}
//         style={{ color: "black" }}
//       />
//     </div>
//   );
// };

// //커스텀 훅
// const useTextInput = () => {
//   const ref = useRef();
//   const Input = useCallback(({ value, onChangeText, id, placeholder }) => {
//     //props를 받는 컴포넌트가 속성으로 많은 개체들을 요구 할때 예)3개 이상
//     //문자열이 아닐대, 객체로 만들어서 전달.
//     const props = {
//       value,
//       onChangeText,
//       id,
//       placeholder,
//     };
//     return <TextInput {...props} inputRef={ref} />;
//   });
//   const focus = () => {
//     if (ref.current) {
//       ref.current.focus();
//     }
//   };
//   return {
//     Input,
//   };
// };

// export { TextInput, useTextInput };

// import { useRef, useCallback, divCn, inputCn } from "react";

// function TextInput({ placeholder, id, inputRef, style }) {
//   return (
//     <div className={divCn}>
//       {/* <label htmlFor={id}>{placeholder}</label> */}
//       <input
//         type="text"
//         id={id}
//         ref={inputRef}
//         placeholder={placeholder}
//         className={inputCn}
//       />
//     </div>
//   );
// }

// export const useTextInput = () => {
//   const ref = useRef();
//   const focus = useCallback(() => {
//     if (ref.current) {
//       ref.current.focus();
//     }
//   }, [ref]);
//   const Component = useCallback(
//     ({ placeholder, id, divCn, inputCn }) => {
//       return (
//         <TextInput
//           id={id}
//           inputRef={ref}
//           placeholder={placeholder}
//           divCn={divCn}
//           inputCn={inputCn}
//         />
//       );
//     },
//     [ref]
//   );
//   return {
//     ref,
//     focus,
//     Component,
//   };
// };

import { useRef, useCallback } from "react";

export const TextInput = ({ inputRef, placeholder, id, divCn, inputCn }) => {
  return (
    <div className={divCn}>
      {/* <label htmlFor={id}>{placeholder}</label> */}
      <input
        type="text"
        id={id}
        ref={inputRef}
        placeholder={placeholder}
        className={inputCn}
      />
    </div>
  );
};

// custom Hook 리액트의 훅을 나만의 스타일로 만들어서 사용한다.
export const useTextInput = () => {
  const ref = useRef();
  const focus = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  const Component = useCallback(
    ({ placeholder, id, divCn, inputCn }) => {
      return (
        <TextInput
          id={id}
          inputRef={ref}
          placeholder={placeholder}
          divCn={divCn}
          inputCn={inputCn}
        />
      );
    },
    [ref]
  );

  return {
    ref,
    focus,
    Component,
  };
};
