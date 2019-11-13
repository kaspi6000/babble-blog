// IE issue
import "react-app-polyfill/ie9";

import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

// Component
import HeaderContainer from "./component/Header";
import FooterContainer from "./component/Footer";
import HomeContainer from "./component/Home";
import WriteContainer from "./component/Write";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={HeaderContainer} />

      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/write" component={WriteContainer} />

      <Route exact path="/" component={FooterContainer} />
    </Router>
  );
};

export default App;
