import React, { Component } from 'react';
import Client from './Client';
import xml2js from 'xml2js';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Routes } from './Routes';

const parseString = xml2js.parseString;

class App extends Component {
  state = {
    feed: '',
  }

  componentDidMount() {
    Client.getFeed((feed) => {
      var parsedData;
      parseString(feed, (err, response) => {
        parsedData = response;
      })
      this.setState({
        feed: parsedData.rss.channel[0],
      })
    })
  }
  render() {
    /*
    console.log(this.state.feed);
    if(this.state.feed !== '') {
    data.map((item, i) => {
      var iframeLink = item.link[0].replace('/pen/', '/embed/');
      iframeLink = iframeLink + '/?theme-id=0&default-tab=result&embed-version=2&editable=false';
      return (
        <div className="f_item" key={i}>
          <iframe
            className="overview_frame"
            title={item.title[0]}
            name={item.title[0]}
            src={iframeLink}
            sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-modals allow-forms"
            allowTransparency="true"
            frameBorder="0"
            scrolling="no"
            allowFullScreen="false"
          >
          </iframe>
          <h3>{item.title[0]}</h3>
        </div>
      )
      return (
        <div>
          {items}
        </div>
      );
    }
    else {
      return (
        <div>

        </div>
      )
    } */

    return (
      <Router>
        <Switch>
          <Routes />>
        </Switch>
      </Router>
    );
  }
}

export default App;
