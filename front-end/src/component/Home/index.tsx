import React from "react";
import styled from "styled-components";
import NavList from "./NavList";
import PostCard from "./PostCard";

const Main = styled.main`
  /* min-width: 1250px; */
  max-width: 1440px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  padding: 170px 0px 32px 0;
`;

const Section = styled.div<any>`
  margin-left: ${props => !props.isMobile && "160px"};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  /* align-content: space-around; */
  /* flex-direction: row; */
`;

const HomeContainer: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWidth, { passive: true });

    return window.removeEventListener("resize", handleWidth, true);
  }, []);

  React.useEffect(() => {
    handleWidth();
  }, [isMobile]);

  const handleWidth = () => {
    const width = window.innerWidth;
    if (width < 825) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  return (
    <Main>
      <Section isMobile={isMobile}>
        <PostCard />
      </Section>
      <NavList isMobile={isMobile} />
    </Main>
  );
};

export default HomeContainer;
