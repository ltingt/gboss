import React from "react";
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Dashboard from "./containers/dashboard/dashboard"
import Register from "./containers/register/register"
import Login from "./containers/login/login";
import store from "./redux/store-new"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route  component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>

  ,document.getElementById("root"))