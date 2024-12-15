"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, setLoginBtn, loginBtn }) {
  return (
    <div>
      <Header loginBtn={loginBtn} setLoginBtn={setLoginBtn} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
