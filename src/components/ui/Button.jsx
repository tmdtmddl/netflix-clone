//props drilling 다르곳에서 아래의 컴포넌트를 불러쓸대 전달해주는 값

const Button = ({ onClick, type, children, style }) => {
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      style={{
        padding: "5px 10px",
        borderRadius: 4,
        fontSize: 100,
        display: "flex",
        justifyContent: "center ",
        alignItems: "center",
        ...style,
      }}
    >
      {/* 조건 ?? 연산자 <==>조건&&연산자 */}
      {/* 앞의 조건이 부합하지 않을 때 실행하는 코드를 ?? 오른편에 작성 */}
      {children ?? "Button"}
    </button>
  );
};

//핸드폰버튼 => 2,3가지
//1.클릭했을때 투명도변함
//2.클릭시 조금 진하게변함
//3.아무변화없음
export { Button };
