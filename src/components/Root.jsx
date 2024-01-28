import React, { Fragment } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";
import Background from "./Background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Root = () => {
  return (
    <Fragment>
      <NavBar />
      <Background />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Aayush Dhiman</p>
        <p>
          <FontAwesomeIcon icon={faCopyright} /> Copyright @2024 all right
          reserved
        </p>
      </footer>
    </Fragment>
  );
};

export default Root;
