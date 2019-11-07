import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Icon = styled.img.attrs(props => ({
  src: props.src
}))`
  width: 1.5rem;
  margin: auto 8px;
  cursor: pointer;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const SearchWrap = styled.div`
  cursor: pointer;
  span {
    color: #95a5a6;
    vertical-align: super;
  }
`;

const HeaderContainer: React.FC = () => {
  return (
    <Header>
      <HeaderWrap>
        <HeadItem>
          <SearchWrap>
            <Icon src="/images/search.png" />
            <span>Search</span>
          </SearchWrap>
        </HeadItem>
        <HeadItem>
          <CustomLink to="">
            <h1>Dlog</h1>
          </CustomLink>
        </HeadItem>
        <HeadItem>
          <Icon src="/images/facebook.png" />
          <Icon src="/images/github.png" />
          <Icon src="/images/google.png" />
          <Icon src="/images/instagram.png" />
          {/* Icon for Not SNS login user */}
          <Icon src="/images/lock.png" />
        </HeadItem>
      </HeaderWrap>
    </Header>
  );
};

export default HeaderContainer;
