import React from "react";
import { fMenus } from "../../assets/fakebase";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { HiLanguage } from "react-icons/hi2";
import OpenColor from "open-color";
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
        {fMenus.map((menu, index) => {
          return (
            <Link
              key={index}
              to={menu.path}
              style={{
                color: OpenColor.gray[5],
                textDecoration: "underline",
              }}
            >
              {menu.name}
            </Link>
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit,
        distinctio voluptatibus nesciunt doloribus voluptatem sunt consequuntur
        temporibus quas tempore exercitationem eaque ullam magnam asperiores
        consectetur quasi nisi vitae. Maxime, quibusdam.
      </p>
    </footer>
  );
};

export default Footer;
