import React from 'react';
import { Link } from 'react-router';

class Application extends React.Component {
    render() {
        return (
            <main>
                <h1>react-express-base</h1>
                <ul>
                    <li><Link to="/foo">Foo</Link></li>
                    <li><Link to="/bar">Bar</Link></li>
                    <li><Link to="/baz">Baz</Link></li>
                </ul>

                {this.props.children}
            </main>
        );
    }
}

export default Application;
