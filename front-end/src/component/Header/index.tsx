import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header<any>`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 2;
  height: 50px;
  background: #ecf0f1;
  border-bottom: ${props => props.isScroll && "1px solid #95a5a6"};
  justify-content: center;
`;

const HeaderWrap = styled.div<any>`
  padding: ${props => (props.isScroll ? "0px 40px 0px" : "56px 40px 0px")};
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

const LoginButton = styled.div`
  border: 1px solid #000;
  padding: 0.3rem;
  border-radius: 20%;
  cursor: pointer;
  background: #fff;
`;

const HeaderContainer: React.FC = () => {
  const [scroll, setScroll] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleWidth, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleWidth, true);
    };
  }, []);

  useEffect(() => {
    handleScroll();
    handleWidth();
  }, [scroll, isMobile]);

  const handleScroll = () => {
    const scrollHeight = window.scrollY;

    // Scroll reflow issue 처리전
    if (scrollHeight > 80) {
      if (scrollHeight > 80 && scroll) return true;
      setScroll(true);
      // console.log("true", scroll);
    } else if (scrollHeight < 80) {
      setScroll(false);
      // console.log("false");
    }
  };

  const handleWidth = () => {
    const width = window.innerWidth;
    if (width < 825) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // console.log(scroll);

  return (
    <Header isScroll={scroll}>
      <HeaderWrap isScroll={scroll}>
        <HeadItem>
          <SearchWrap>
            <Icon src={isMobile ? "/images/menu.png" : "/images/search.png"} />
            {!isMobile && <span>Search</span>}
          </SearchWrap>
        </HeadItem>
        <HeadItem>
          <CustomLink to="">
            <h1>Dlog</h1>
          </CustomLink>
        </HeadItem>
        <HeadItem>
          {/* <Icon src="/images/facebook.png" />
          <Icon src="/images/github.png" />
          <Icon src="/images/google.png" />
          <Icon src="/images/instagram.png" /> */}
          {/* Icon for Not SNS login user */}
          {/* <Icon src="/images/lock.png" /> */}
          <LoginButton>Login</LoginButton>
        </HeadItem>
      </HeaderWrap>
    </Header>
  );
};

export default HeaderContainer;
