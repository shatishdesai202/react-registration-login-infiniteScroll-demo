import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Login from "./Screens/Login";
import Registration from "./Screens/Registration";
import Home from "./Screens/Home";
import store from "./store";
import PrivateRoute from "./Component/privateRoute";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <PrivateRoute exact path="/home" component={Home} />
          </Switch>
        </Router>
        <ToastContainer />
      </Provider>
    </div>
  );
};

export default App;
