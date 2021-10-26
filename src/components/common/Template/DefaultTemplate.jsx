import React from "react";

import { Link } from "react-router-dom";
function Header({ children }) {
  return (
    <>
      <Link to="/user">user</Link>
      <br />
      <Link to="/count">count</Link>
      <hr />
      {children}
    </>
  );
}

export default Header;
