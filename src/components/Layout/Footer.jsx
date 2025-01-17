import React from "react";
import { fMenus } from "../../assets/fakebase";
import { Button } from "../ui/Button";
import { HiLanguage } from "react-icons/hi2";
import OpenColor from "open-color";
import FooterItem from "./Footeritem";
//해당경로로 이동함
//<Link to={경로}>이름</Link>
//fMenus.map()으로 구현
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: OpenColor.gray[9],
        color: OpenColor.gray[0],
        padding: 10,
        display: "flex",
        flexDirection: "column",
        rowGap: 20,
        alignItems: "start",
        fontSize: ".75rem",
      }}
    >
      <p>질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)</p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 10,
        }}
      >
        {fMenus.map((menu) => {
          return (
            <FooterItem key={menu.path} {...menu} />
            //중괄호안에 ...객체의 변수명은 복사하는 뜻이다
            //리액트컴포넌트에 이렇게 하는것은 복사한 객체의 전부를 전달해주는것이다.
          );
        })}
      </ul>
      <Button
        style={{
          border: "1px solid",
        }}
      >
        <HiLanguage />
        한국어
      </Button>
      <p>넷플릭스 대한민국</p>
      <p>
        넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
        제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담) 대표:
        레지널드 숀 톰프슨 이메일 주소: korea@netflix.com 주소: 대한민국
        서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161
        사업자등록번호: 165-87-00119 클라우드 호스팅: Amazon Web Services Inc.
        공정거래위원회 웹사이트
      </p>
    </footer>
  );
};

export default Footer;
