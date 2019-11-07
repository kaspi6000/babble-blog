import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  height: 50vh;
  margin-top: -50vh;
  bottom: 150px;
`;

const NavItem = styled.div``;

const NavList: React.FC = () => {
  return (
    <Nav>
      <NavItem>Diary</NavItem>
      <NavItem>Development</NavItem>
      <NavItem>E.T.C</NavItem>
    </Nav>
  );
};

export default NavList;
