import React, { Component } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import Header from './components/common/header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet defaultTitle="Quercus">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Helmet>
        <Routes>
          <div className="container-fluid">
            <Header />
            {this.props.children}
          </div>
        </Routes>
      </div>
    );
  }
}

export default App;

//something is wrong with mui theme provider that shits out the whole thing
