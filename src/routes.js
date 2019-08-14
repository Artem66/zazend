import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import restricted from './restricted';
import Layout from './components/Layout';
import ListPost from './components/Posts';
import DetailPost from './components/SinglePost';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={restricted(ListPost)} />
          <Route path="/posts/:postId" component={restricted(DetailPost)} />
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
