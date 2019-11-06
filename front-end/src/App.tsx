import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

// Component
import HeaderContainer from "./component/Header";
import FooterContainer from "./component/Footer";
import HomeContainer from "./component/Home";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Route path="/" component={HeaderContainer} />

      <Route exact path="/" component={HomeContainer} />
      <Route path="/" component={FooterContainer} />
    </Router>
  );
};

export default App;
