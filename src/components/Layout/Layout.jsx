import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Layout1280 } from "./LayoutStyle";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Layout1280>{children}</Layout1280>
      <Footer />
    </>
  );
}
