import React, { Fragment } from "react";
import Header from "../components/home/header/Header";
import Featured from "../components/home/featured/Featured";

export default function Homepage() {
  return (
    <Fragment>
      <Header />
      <Featured />
    </Fragment>
  );
}
