import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "./Welcome";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Welcome}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
