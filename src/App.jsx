import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import AdList from './Components/Ads/AdList';
import AdDetail from './Components/Ads/AdDetail';
import CreateAd from './Components/Ads/CreateAd';
import EditAd from './Components/Ads/EditAd';
import Footer from './Components/Layout/Footer';


const GlobalStyle = createGlobalStyle`
    body {
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
    background-color: #f1f1f1
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/adlist" component={AdList} />
          <Route path="/addetail/:id" component={AdDetail} />
          <Route path="/editad/:id" component={EditAd} />
          <Route path="/createad" component={CreateAd} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
