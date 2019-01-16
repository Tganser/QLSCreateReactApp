import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/header';
import Routes from '../routes';
import { Helmet } from 'react-helmet';
import MuiThemeProvider from '@material-ui/core/styles';
import muiTheme from '../themeconfig';

class App extends React.Component {
  render = () =>  {
    return (
      <div class="App">
      <MuiThemeProvider theme={muiTheme}>
        <Helmet defaultTitle="Quercus">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Helmet>
      <Routes>
        <div className="container-fluid">
          <Header />
        </div>
      </Routes>
    </MuiThemeProvider>
  </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
