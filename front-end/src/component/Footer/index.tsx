import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
`;

const FooterContainer: React.FC = () => {
  return <Footer>Footer</Footer>;
};

export default FooterContainer;
