import React, { Fragment } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";
import Background from "./Background";
const Root = () => {
  return (
    <Fragment>
      <NavBar />
      <Background />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Root;
