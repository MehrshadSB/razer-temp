"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, cookies, cart }) {
  return (
    <div>
      <Header cookies={cookies} cart={cart} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
