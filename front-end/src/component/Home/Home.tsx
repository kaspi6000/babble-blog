import React from "react";
import styled from "styled-components";

const Main = styled.div`
  min-width: 1250px;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  padding: 170px 32px 32px 0;
  /* height: 3000px; */
`;

const Home: React.FC = () => <Main>Home</Main>;

export default Home;
