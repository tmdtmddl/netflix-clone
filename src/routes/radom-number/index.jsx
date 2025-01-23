//1.

// import { useState, useEffect } from "react";
// import { FaCuttlefish } from "react-icons/fa";

// const RandomNumber = () => {
//   const initialMembers = [
//     "유경환",
//     "강산",
//     "최한나",
//     "허승이",
//     "김영화",
//     "이형진",
//     "강찬희",
//   ];
//   const [members, setMembers] = useState(initialMembers);
//   const [selectedMembers, setSelectedMembers] = useState([]); // 뽑힌멤버는 배열안의 배열이 들어갑니다.
//   const [teams, setTeams] = useState([]);
//   const [isMakingTeam, setIsMakingTeam] = useState(false);
//   const [max, setMax] = useState(0);
//   const [conut, setConut] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const onSubmit = (event) => {
//     //인자로 이벤트에 있는 모든 이벤트를 가져옴
//     event.preventDefault();
//     if (max <= 0) {
//       return alert("팀크기를 선택해주세요.");
//     }

//     if (conut <= 0) {
//       //맥스값에서 이미뽐음
//       return alert("팀원을 모두뽑음");
//     }

//     let number = Math.floor(Math.random() * members.length);
//     // setCurrentIndex(number);
//     const member = members[number];

//     const found = selectedMembers[currentIndex].find((person) => {
//       if (person === member) {
//         return person;
//       }
//     });
//     if (found) {
//       return alert("중복된사람");
//     }
//     setConut((prev) => {
//       if (prev > 0) {
//         return prev - 1;
//       }
//       return prev;
//     });

//     setSelectedMembers((prev) => {
//       //배열은 배열로 복사
//       let copy = [...prev];

//       return copy;
//     });
//     setTimeout(() => {
//       setMembers((prev) => {
//         let copy = [...prev];
//         copy.splice(number, 1); //넘버는 위에서 구한 멤버의 인덱스 값임
//         return copy;
//       });
//     }, 100);
//   };

//   const onReset = () => {
//     setMax(0);
//     setConut(0);
//   };
//   useEffect(() => {
//     console.log({ members, max, conut, selectedMembers });
//   }, [members, max, conut, selectedMembers]);

//   useEffect(() => {
//     if (max > 0) {
//       console.log(selectedMembers.length);
//       //   setCurrentIndex(selectedMembers.length);
//     }
//   }, [selectedMembers, max]);

//   return (
//     <div>
//       <h1>팀짜기 프로젝트</h1>
//       <h2>남은팀원</h2>
//       <ul>
//         {members.map((member) => {
//           return <li key={member}>{member}</li>;
//         })}
//       </ul>
//       <form action="" onSubmit={onSubmit}>
//         <select
//           onChange={(e) => {
//             setMax(Number(e.target.value));
//             setConut(Number(e.target.value));
//           }}
//           value={max}
//         >
//           <option>팀 크기를 선택하세요.</option>
//           {members.map((member, index) => {
//             return (
//               <option key={member} value={index + 1}>
//                 {index + 1}
//               </option>
//             );
//           })}
//         </select>
//         <button>팀원 뽑기</button>
//         <button type="button" onClick={onReset}>
//           초기화
//         </button>
//       </form>
//       {/* <h1>{currentIndex >= 0 && members[currentIndex]}</h1> */}
//       <ul>
//         {currentIndex >= 0 &&
//           selectedMembers[currentIndex].map((member) => {
//             //?는 앞에가 있으면 맵을 해줘라
//             return <li key={member}>{member}</li>;
//           })}
//       </ul>
//     </div>
//   );
// };

// export default RandomNumber;

//2.
// import { useState, useEffect } from "react";

// const initialMembers = [
//   "유경환",
//   "강산",
//   "최한나",
//   "허승이",
//   "김영화",
//   "이형진",
//   "강찬희",
// ];

// const RandomNumber = () => {
//   const [members, setMembers] = useState(initialMembers);

//   const [selectedMembers, setSelectedMembers] = useState([]); // 뽑힌 멤버는 배열

//   const [teams, setTeams] = useState([]);

//   const [max, setMax] = useState(0);
//   const [count, setCount] = useState(0);

//   const onSubmit = (event) => {
//     event.preventDefault();

//     if (max <= 0) {
//       return alert("팀 크기를 선택해주세요.");
//     }

//     if (count <= 0) {
//       return alert("팀원을 모두 뽑았습니다.");
//     }

//     let number = Math.floor(Math.random() * members.length);
//     const member = members[number];

//     const found = selectedMembers?.find((person) => {
//       if (person === member) {
//         return person;
//       }
//     });
//     if (found) {
//       return alert("중복된 사람입니다.");
//     }
//     setCount((prev) => {
//       if (prev > 0) {
//         return prev - 1;
//       }
//       return prev;
//     });

//     setSelectedMembers((prev) => [...prev, member]);

//     //   setTimeout(() => {
//     //     setMembers((prev) => {
//     //       let copy = [...prev];
//     //       copy.splice(number, 1);
//     //       return copy;
//     //     });
//     //   }, 100);
//   };

//   const onReset = () => {
//     setMax(0);
//     setCount(0);
//   };

//   const onConfirm = () => {
//     const newTeam = [...selectedMembers];
//     setTeams((prev) => [...prev, newTeam]);
//     // //선태된 멤버들 초기화
//     setSelectedMembers([]);
//     //기존멤버들에서 멤버들만 골라서 삭제
//     //map,find
//     // newTeam.map((person) => {
//     //   const index = members.findIndex((member) => {
//     //     if (member === person) {
//     //       return member;
//     //     }
//     //   });

//     //   if (index >= 0) {
//     //     // setMembers((prev) => {
//     //     //   let copy = [...prev];
//     //     //   copy.splice(index, 1);
//     //     //   return copy;
//     //     // });
//     //   }
//     //filter 함수 (배열에만 씀) :배열.filter()
//     //   setMembers((prev) => prev.filter((member) => {}));
//     // });
//     newTeam.map((person) => {
//       setMembers((prev) =>
//         prev.filter((member) => {
//           if (member !== person) {
//             return member;
//           }
//         })
//       );
//     });
//     //max값초기화
//     setMax(0);

//     // const a=''
//     // a.
//     // //변수를 만들고  .찍어보기
//     // 할수있는 함수, 값찾아서 console.log()로 출력해보기
//     // 이걸로뭐할수 있을지고민해보기
//   };

//   useEffect(() => {
//     console.log({ teams });
//   }, [teams]);

//   return (
//     <div>
//       <h1>팀짜기 프로젝트</h1>
//       <h2>남은 팀원</h2>
//       <ul>
//         {members.map((member) => {
//           return <li key={member}>{member}</li>;
//         })}
//       </ul>
//       <form onSubmit={onSubmit}>
//         <select
//           onChange={(e) => {
//             setMax(Number(e.target.value));
//             setCount(Number(e.target.value));
//           }}
//           value={max}
//         >
//           <option>팀 크기를 선택하세요.</option>
//           {members.map((member, index) => {
//             return (
//               <option key={member} value={index + 1}>
//                 {index + 1}
//               </option>
//             );
//           })}
//         </select>
//         <button>팀원 뽑기</button>
//         <button type="button" onClick={onReset}>
//           초기화
//         </button>
//       </form>

//       <ul>
//         {selectedMembers.map((member, index) => {
//           //인자이름이랑 {}안에 이름을 통일해야함
//           return (
//             <li key={member}>
//               {index + 1}
//               {member}
//             </li>
//           );
//         })}
//       </ul>

//       {max > 0 && count === 0 && <button onClick={onConfirm}>멤버확정</button>}

//       {teams.length > 0 && (
//         <>
//           <h1>만들어진 팀</h1>
//           <ul>
//             {teams.map((team, index) => {
//               return (
//                 <li key={team.length}>
//                   <h3>{index + 1}번 팀</h3>
//                   <ul>
//                     {team.map((member) => {
//                       return <li key={member}>{member}</li>;
//                     })}
//                   </ul>
//                 </li>
//               );
//             })}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// };

// export default RandomNumber;

//3.
import { useState, useMemo, useCallback, useRef } from "react";

const initialMembers = [
  "유경환",
  "강산",
  "최한나",
  "허승이",
  "김영화",
  "이형진",
  "강찬희",
];

const RandomNumber = () => {
  const [members, setMembers] = useState(initialMembers);

  const [selectedMembers, setSelectedMembers] = useState([]); // 뽑힌 멤버는 배열

  const [teams, setTeams] = useState([]);

  const [max, setMax] = useState(0);
  const [count, setCount] = useState(0);

  const selectRef = useRef(null);

  const maxMessage = useMemo(() => {
    if (max <= 0) {
      return "팀 크기를 선택해주세요.";
    }
    return null;
  }, [max]);

  const countMessage = useMemo(() => {
    if (count <= 0) {
      return "팀원을 모두 뽑았습니다.";
    }
    return null;
  }, [count]);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (maxMessage) {
        alert(maxMessage);
        return selectRef.current?.showPicker();
      }
      if (countMessage) {
        return alert(countMessage);
      }

      let number = Math.floor(Math.random() * members.length);
      const member = members[number];

      const found = selectedMembers?.find((person) => {
        if (person === member) {
          return person;
        }
      });
      if (found) {
        return alert("중복된 사람입니다.");
      }

      setCount((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return prev;
      });

      setSelectedMembers((prev) => [...prev, member]);
    },
    [members, selectedMembers, maxMessage, countMessage, selectRef]
  );

  const onReset = () => {
    setMax(0);
    setCount(0);
  };

  const onConfirm = useCallback(() => {
    const newTeam = [...selectedMembers];
    setTeams((prev) => [...prev, newTeam]);
    // 선택된 멤버들 초기화
    setSelectedMembers([]);
    // 기존 멤버들에서 선택된 멤버들만 골라서 삭제
    // map, find
    // newTeam.map((person) => {
    //   // const index = members.findIndex((member) => {
    //   //   if (member === person) {
    //   //     return member
    //   //   }
    //   // })
    //   // if (index >= 0) {
    //   //   // setMembers((prev) => {
    //   //   //   let copy = [...prev]
    //   //   //   copy.splice(index, 1)
    //   //   //   return copy
    //   //   // })
    //   //   //filter 함수 :  배열.filter()
    //   //   setMembers((prev) => prev.filter((member) => {}))
    //   // }
    //   setMembers()
    // })

    newTeam.map((person) => {
      setMembers((prev) => prev.filter((member) => member !== person));
    });

    // max 초기화
    setMax(0);

    const a = "";
    a.at();

    //  변수를 만들고 .찍어보기
    //  할수 있는 함수, 값 찾아서 console.log()로 출력해보기.
    //  이걸로 뭐 할 수 있을지 고민해보기
  }, [selectedMembers]);

  return (
    <div>
      <h1>팀짜기 프로젝트</h1>
      <h2>남은 팀원</h2>
      <ul>
        {members.map((member) => {
          return <li key={member}>{member}</li>;
        })}
      </ul>
      <form onSubmit={onSubmit}>
        <select
          onChange={(e) => {
            setMax(Number(e.target.value));
            setCount(Number(e.target.value));
          }}
          value={max}
          ref={selectRef}
        >
          <option>팀 크기를 선택하세요.</option>
          {members.map((member, index) => {
            return (
              <option key={member} value={index + 1}>
                {index + 1}
              </option>
            );
          })}
        </select>
        <button>팀원 뽑기</button>
        <button type="button" onClick={onReset}>
          초기화
        </button>
      </form>

      <ul>
        {selectedMembers.map((member, index) => {
          return (
            <li key={member}>
              {index + 1}. {member}
            </li>
          );
        })}
      </ul>

      {max > 0 && count === 0 && <button onClick={onConfirm}>멤버 확정</button>}

      {teams.length > 0 && (
        <>
          <h1>만들어진 팀</h1>
          <ul>
            {teams.map((team, index) => {
              return (
                <li key={team.length}>
                  <h3>{index + 1}번 팀</h3>

                  <ul>
                    {team.map((member) => {
                      return <li key={member}>{member}</li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default RandomNumber;
