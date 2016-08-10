/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {lightBlue600, deepOrange500, white} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/Search.jsx'
import TextString from './components/TextString.jsx'
import SetIcon from './components/SetIcon.jsx'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
    margin: "0 auto",
    marginTop: 0,
    minHeight: 500,
    width: 480,

  },
  weatherIcon: {
    fontSize: 150,
    margin: "0 auto",
    marginTop: 20,
    textAlign: 'center'
  },
  temp: {
    fontSize: 120,
    margin: "0 auto",
    textAlign: "center"
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Search />
          <TextString
            iconBefore="icon-location2"
            styles={{fontSize:22, textAlign: "left"}}
            text="Sincelejo, Co"
          />
          <TextString
            iconBefore="icon-clock"
            styles={{fontSize:20, textAlign: "left"}}
            text=" 00:00"
          />
          <div>
            <SetIcon classes="icon-sunrise" styles={styles.weatherIcon}/>
          </div>
          <TextString
            iconAfter="icon-Celsius"
            iconStyles={styles.weatherIcon}
            styles={styles.temp}
            text="30"
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
