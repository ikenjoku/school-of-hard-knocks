import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, browserHistory, withRouter} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import StudentList from './StudentList.jsx';
import StudentEdit from './StudentEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page not found</p>

const Header = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand><a href="#"><img src="./sohklogo.png" alt="logo" weign="40" height="40"/>School of Hard Knocks</a></Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <LinkContainer to="/students">
                <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/students">
                <NavItem>Students</NavItem>
            </LinkContainer>
        </Nav>
        <Nav pullRight>
            <NavItem><Glyphicon glyph="plus" />Add Student</NavItem>
            <NavDropdown id="user-dropdown" title={<Glyphicon glyph="option-horizontal"/>} noCaret>
                <MenuItem>Logout</MenuItem>
            </NavDropdown>
        </Nav>
    </Navbar>
);

const App = (props) => (
    <div>
        <Header />
        <div className="container-fluid">
            {props.children}
            <hr/>
            <h5>
                <small>
                    ALC 2.0 Intermediate Web Track Assessment Project.
                    Source code is at this <a href="https://github.com/ikenjoku/school-of-hard-knocks">Github repo</a>
                </small>
            </h5>
        </div>
    </div>
);
App.prototype = {
    children: React.PropTypes.object.isRequired,
};
const RoutedApp = () => (
    <Router history={browserHistory}>
        <Redirect from="/" to="/students" />
        <Route path="/" component={App}>
            <Route path="/students" component={withRouter(StudentList)} />
            <Route path="/students/:id" component={StudentEdit} />
            <Route path="/*" component={NoMatch} />
        </Route>
    </Router>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
    module.hot.accept();
}