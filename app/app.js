import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import Application from './components/Application';
import Foo from './components/Foo';
import Bar from './components/Bar';
import Baz from './components/Baz';

ReactDOM.render(
    <Router>
        <Route path="/" component={Application}>
            <Route path="foo" component={Foo} />
            <Route path="bar" component={Bar} />
            <Route path="baz" component={Baz} />
        </Route>
    </Router>,
    document.getElementById('app'));
