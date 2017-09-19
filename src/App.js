import React, { Component } from 'react';
import Client from './Client';
import xml2js from 'xml2js';

const parseString = xml2js.parseString;

class App extends Component {
  state = {
    feed: '',
  }

  componentDidMount() {
    Client.getFeed((feed) => {
      var parsedData = '';
      parseString(feed, (err, response) => {
        console.log(response);
        parsedData = response;
      })
      this.setState({
        feed: parsedData.rss.channel[0],
      })
    })
  }
  render() {
    console.log(this.state.feed);
    if(this.state.feed !== '') {
      console.log('ji');
      const items = this.state.feed.item.map((item, i) => {
        return (
          <div className="f_item" key={i}>
            <h2>{item.title}</h2>
            <div>{item.description}</div>
          </div>
        );
      });
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
    }
  }
}

export default App;
