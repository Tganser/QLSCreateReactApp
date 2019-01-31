import React from 'react';
//import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class InputPage extends React.Component {
  state = {
  name: '',
  age: '',
  multiline: 'Controlled',
};

handleChange = name => event => {
  this.setState({
    [name]: event.target.value,
  });
};

  render(){
    const { classes } = this.props;
    //Clients/Sites/Management Units/Project/Tasks/Activities
    return(
      <div>
        <h1>Create a Client Organization</h1>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Name"
            //className={classes.textField}
            value={this.state.name}
            //onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Short Name"
            //className={classes.textField}
            value={this.state.shortname}
            margin="normal"
          />
        </form>

        <h1>Set up Client Contacts</h1>
        <form noValidate autoComplete="off">
          {/* //className={classes.container} */}
          <TextField
            id="standard-name"
            label="Name"
            //className={classes.textField}
            value={this.state.name}
            //onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Short Name"
            //className={classes.textField}
            value={this.state.shortname}
            margin="normal"
          />
        </form>
      </div>
    );
  }
}

InputPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default InputPage;
