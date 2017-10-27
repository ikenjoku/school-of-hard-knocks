import React from 'react';
import ReactDOM from 'react-dom';

import StudentList from './StudentList.jsx';
const contentNode = document.getElementById('contents');


ReactDOM.render(<StudentList />, contentNode);

if (module.hot) {
    module.hot.accept();
}