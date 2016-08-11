/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {lightBlue600, deepOrange200, white} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/Search.jsx'
import TextString from './components/TextString.jsx'
import SetIcon from './components/SetIcon.jsx'
import InfoPaper from './components/InfoPaper.jsx'
import PaperChild from './components/PaperChild.jsx'

const styles = {
  container: {
    background: deepOrange200,
    fontColor: "white",
    textAlign: 'center',
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    margin: "0 auto",
    marginTop: 0,
    width: 360,
  },
  infoStyle: {
    marginTop:35,
  },
  stringsCity:{
    color: "white",
    fontSize:20,
    textAlign: "left"
  },
  stringsTime:{
    color: "white",
    fontSize:18,
    textAlign: "left"
  },
  temp: {
    color: "white",
    fontSize: 30,
    margin: "0 auto",
    textAlign: "center"
  },
  tempIcon: {
    color: "white",
    fontSize: 30,
    margin: "0 auto",
    paddingTop: 20,
    textAlign: "center"
  },
  weatherIcon: {
    color: "white",
    fontSize: 50,
    margin: "0 auto",
    marginTop: 20,
    textAlign: 'center'
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange200,
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
            iconClasses="icon-location2"
            position="before"
            styles={styles.stringsCity}
            text="Sincelejo, Co"
          />
          <TextString
            iconClasses="icon-clock"
            position="before"
            styles={styles.stringsTime}
            text=" 00:00"
          />
          <div>
            <SetIcon
              iconClasses="icon-sunrise" styles={styles.weatherIcon}/>
          </div>
          <TextString
            iconClasses="icon-Celsius"
            iconStyles={styles.tempIcon}
            position="after"
            styles={styles.temp}
            text="30"
          />
          <div style={styles.infoStyle}>
            <InfoPaper children={<PaperChild text="Item 01" />}/>
            <InfoPaper children={<PaperChild text="Item 02" />}/>
            <InfoPaper children={<PaperChild text="Item 03" />}/>
            <InfoPaper children={<PaperChild text="Item 04" />}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
