import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, browserHistory, withRouter} from 'react-router';

import StudentList from './StudentList.jsx';
import StudentEdit from './StudentEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page not found</p>

const App = (props) => (
    <div>
        <div className='header'>
            <h1>School of Hard Knocks</h1>
            <p>Student Information System</p>
        </div>
        <div className="contents">
            {props.children}
        </div>
        <div className="footer">
            <p>ALC 2.0 Intermediate Web Track Assessment Project.
            Source code is at this <a href="https://github.com/ikenjoku/school-of-hard-knocks">Github repo</a></p>
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