import React from 'react';
import Header from '../common/header.js'
import InputPage from '../input/InputPage.js'

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <InputPage />
      </React.Fragment>
    );
  }
}

export default HomePage;
