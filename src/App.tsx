import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./views/dashboard/dashboard";
import SignIn from "./views/onboarding/sign-in/sign-in";
import SignUp from "./views/onboarding/sign-up/sign-up";
import { dashboardRoute, signInRoute, signUpRoute } from "./shared/routes/routes";

function App() {
  return (
    <>
      <div className='app'>
        <Switch>
          <Route path={dashboardRoute()} component={Dashboard} />
          <Route path={signInRoute()} component={SignIn} />
          <Route path={signUpRoute()} component={SignUp} />
          <Route path={'/'} component={Dashboard} />
        </Switch>
      </div>
    </>
  );
}

export default App;
