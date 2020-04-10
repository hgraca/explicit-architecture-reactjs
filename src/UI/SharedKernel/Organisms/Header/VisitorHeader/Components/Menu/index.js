import React from "react";

import { Nav, NavItemLink, NavItemIcon } from "./index.styled";

import GlobeIcon from "~/UI/SharedKernel/Atoms/Icons/GlobeIcon";
import HomeIcon from "~/UI/SharedKernel/Atoms/Icons/HomeIcon";
import MenuCaretIcon from "~/UI/SharedKernel/Atoms/Icons/MenuCaretIcon";
import SearchIcon from "~/UI/SharedKernel/Atoms/Icons/SearchIcon";

export default () => (
  <Nav>
    <NavItemLink to="/gist-list">
      <NavItemIcon>
        <HomeIcon />
      </NavItemIcon>
      Homepage
    </NavItemLink>
    <NavItemLink to="/search">
      <NavItemIcon>
        <SearchIcon />
      </NavItemIcon>
      Search
    </NavItemLink>
    <NavItemLink to="#">
      <NavItemIcon>
        <GlobeIcon />
      </NavItemIcon>
      <MenuCaretIcon />
    </NavItemLink>
  </Nav>
);
