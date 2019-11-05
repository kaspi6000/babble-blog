import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 2;
  height: 50px;
  background: #ecf0f1;
  border-bottom: 1px solid transparent;
  justify-content: center;
`;

const HeaderWrap = styled.div`
  padding: 56px 40px 0px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeadItem = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer: React.FC = () => {
  return (
    <Header>
      <HeaderWrap>
        <HeadItem>Left</HeadItem>
        <HeadItem>Center</HeadItem>
        <HeadItem>Right</HeadItem>
      </HeaderWrap>
    </Header>
  );
};

export default HeaderContainer;
