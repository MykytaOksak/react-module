import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom"
import PrivateRoute from './components/PrivateRoute'
import SignForm from './components/SignForm'
import Forecast from './components/Forecast'
import React from 'react';
import PublicRoute from './components/PublicRoute';
import Landing from './components/Landing'
import Navbar from './components/Navbar';
import { saveToLocalStorage } from "./utils/saveToLocalStorage.js"

function App() {
  return (
    <div class="bg-body relative min-h-screen">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PublicRoute exact path="/login" render={() => <SignForm saveUser={saveToLocalStorage} />} />
          <PrivateRoute exact path="/forecast" component={Forecast} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
