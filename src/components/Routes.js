import React, { Component } from 'react';
import Client from './Client';
import xml2js from 'xml2js';
import { Route} from 'react-router-dom';
import { VerticalMenu } from './VerticalMenu';
import { Example } from './Example';
import { ExampleOverview  } from './ExampleOverview';
import { Home } from './Home';

const parseString = xml2js.parseString;

export class Routes extends Component {
  state = {
    feed: '',
    items: [],
    itemPath: 'snapSvg',
  }
  staticMenuItems = [
    {
      title: 'Home',
      path: '/',
      id: 0,
    },
    {
      title: 'Overview',
      path: '/snapSvg',
      id: 1,
    },
  ]

  componentDidMount() {
    Client.getFeed((feed) => {
      var parsedData;
      parseString(feed, (err, response) => {
        parsedData = response;
      })
      parsedData = parsedData.rss.channel[0];

      var newItems = parsedData.item.map((item, i) => {
        item.id = i;
        return item;
      })
      parsedData.item = newItems;
      this.setState({
        feed: parsedData,
        items: newItems,
      })
    })
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="main_wrapper">
        <VerticalMenu
          items={this.state.items}
          itemPath={this.state.itemPath}
          staticMenuItems={this.staticMenuItems}
        />
        <Route exact path='/' component={Home} />
        <Route exact path={'/' + this.state.itemPath} render={(props) => (
          <ExampleOverview {...props} data={this.state.items} />
        )} />

        <Route path={'/' + this.state.itemPath +'/:number'} render={(props) => (
          <Example {...props} data={this.state.items} />
        )} />
      </div>
    );
  }
}
