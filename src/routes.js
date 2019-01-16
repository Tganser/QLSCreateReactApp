import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/home/Home';
import AboutPage from './components/about/AboutPage';
import AdminPage from './components/admin/AdminPage';
import InputPage from './components/input/InputPage';
import QueryPage from './components/query/QueryPage';

export class Routes extends React.Component {
  render = () =>{
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/input" exact component={InputPage} />
          <Route path="/query" exact component={QueryPage} />
        </Switch>
      </BrowserRouter>
    );
  };
};

export default Routes;
