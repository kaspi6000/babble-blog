import React, { useRef } from "react";
import Home from "./Home";

const HomeContainer: React.FC = () => {
  return useRef(<Home />);
};

export default HomeContainer;
