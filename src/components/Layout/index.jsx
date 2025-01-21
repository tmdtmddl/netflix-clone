import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import OpenColor from "open-color";
//childern을 중괄호 안에서 가져오는 방법은 props drilling을 사용한방법 리액트스러운 방법 (rrd는 <outlet/>사용함)
const Layout = () => {
  return (
    <>
      <Header />
      <main
        style={{
          backgroundColor: OpenColor.gray[9],
          minHeight: "100vh",
          // paddingTop: 60,
          color: OpenColor.gray[0],
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
