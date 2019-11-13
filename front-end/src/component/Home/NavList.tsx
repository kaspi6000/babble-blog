import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav<any>`
  display: ${props => props.isMobile && "none"};
  position: fixed;
  height: 50vh;
  margin-top: -50vh;
  margin-left: 8px;
  bottom: 150px;
  width: 160px;
`;

const NavItem = styled.div`
  cursor: pointer;
  margin-top: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const WriteButton = styled(Link)`
  position: absolute;
  bottom: 0;
  outline-style: none;
  color: #000;
`;

interface Iprops {
  isMobile: boolean;
}

const NavList: React.FC<Iprops> = ({ isMobile }) => {
  return (
    <Nav isMobile={isMobile}>
      <NavItem title="Diary">Diary</NavItem>
      <NavItem title="Development">Development</NavItem>
      <NavItem title="E.T.C">E.T.C</NavItem>

      <WriteButton to="/write">글 쓰기</WriteButton>
    </Nav>
  );
};

export default NavList;
