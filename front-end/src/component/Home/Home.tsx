import React from "react";
import styled from "styled-components";
import NavList from "./NavList";

const Main = styled.div`
  min-width: 1250px;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  padding: 170px 0px 32px 0;
  min-height: 1000px;
  /* height: 3000px; */
`;

const Section = styled.div`
  margin-left: 200px;
`;

const Home: React.FC = () => (
  <Main>
    <NavList />
    <Section>Home</Section>
  </Main>
);

export default Home;
