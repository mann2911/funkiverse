import React from "react";
import { MenuContainer } from "./styles";
import { Link, useLocation } from "react-router-dom";
const Menu = ({ label, path, hash, history }) => {
  const loc = useLocation();
  const pathName = loc.pathname;
  const pathHash = loc.hash;
  const routPath = pathName + pathHash;

  return (
    <MenuContainer>
      <Link className={
        hash
          ? routPath === path + hash
            ? "active"
            : ""
          : routPath === path
            ? "active"
            : ""
      } to={{ pathname: path, hash: hash }}>{label}</Link>
    </MenuContainer>
  );
};

export default Menu;
