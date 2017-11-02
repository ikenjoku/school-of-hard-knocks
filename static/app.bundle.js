webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(184);
	
	var _reactBootstrap = __webpack_require__(247);
	
	var _reactRouterBootstrap = __webpack_require__(499);
	
	var _StudentList = __webpack_require__(502);
	
	var _StudentList2 = _interopRequireDefault(_StudentList);
	
	var _StudentEdit = __webpack_require__(506);
	
	var _StudentEdit2 = _interopRequireDefault(_StudentEdit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var contentNode = document.getElementById('contents');
	var NoMatch = function NoMatch() {
	    return _react2.default.createElement(
	        'p',
	        null,
	        'Page not found'
	    );
	};
	
	var Header = function Header() {
	    return _react2.default.createElement(
	        _reactBootstrap.Navbar,
	        null,
	        _react2.default.createElement(
	            _reactBootstrap.Navbar.Header,
	            null,
	            _react2.default.createElement(
	                _reactBootstrap.Navbar.Brand,
	                null,
	                _react2.default.createElement(
	                    'a',
	                    { href: '#' },
	                    _react2.default.createElement('img', { src: './sohklogo.png', alt: 'logo', height: '40' }),
	                    'School of Hard Knocks'
	                )
	            )
	        ),
	        _react2.default.createElement(
	            _reactBootstrap.Nav,
	            null,
	            _react2.default.createElement(
	                _reactRouterBootstrap.LinkContainer,
	                { to: '/students' },
	                _react2.default.createElement(
	                    _reactBootstrap.NavItem,
	                    null,
	                    'Home'
	                )
	            ),
	            _react2.default.createElement(
	                _reactRouterBootstrap.LinkContainer,
	                { to: '/students' },
	                _react2.default.createElement(
	                    _reactBootstrap.NavItem,
	                    null,
	                    'Students'
	                )
	            )
	        ),
	        _react2.default.createElement(
	            _reactBootstrap.Nav,
	            { pullRight: true },
	            _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                null,
	                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'plus' }),
	                'Add Student'
	            ),
	            _react2.default.createElement(
	                _reactBootstrap.NavDropdown,
	                { id: 'user-dropdown', title: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'option-horizontal' }), noCaret: true },
	                _react2.default.createElement(
	                    _reactBootstrap.MenuItem,
	                    null,
	                    'Logout'
	                )
	            )
	        )
	    );
	};
	
	var App = function App(props) {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(Header, null),
	        _react2.default.createElement(
	            'div',
	            { className: 'container-fluid' },
	            props.children,
	            _react2.default.createElement('hr', null),
	            _react2.default.createElement(
	                'h5',
	                null,
	                _react2.default.createElement(
	                    'small',
	                    null,
	                    'ALC 2.0 Intermediate Web Track Assessment Project. Source code is at this ',
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'https://github.com/ikenjoku/school-of-hard-knocks' },
	                        'Github repo'
	                    )
	                )
	            )
	        )
	    );
	};
	App.prototype = {
	    children: _react2.default.PropTypes.object.isRequired
	};
	var RoutedApp = function RoutedApp() {
	    return _react2.default.createElement(
	        _reactRouter.Router,
	        { history: _reactRouter.browserHistory },
	        _react2.default.createElement(_reactRouter.Redirect, { from: '/', to: '/students' }),
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: '/', component: App },
	            _react2.default.createElement(_reactRouter.Route, { path: '/students', component: (0, _reactRouter.withRouter)(_StudentList2.default) }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/students/:id', component: _StudentEdit2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/*', component: NoMatch })
	        )
	    );
	};
	
	_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);
	
	if (false) {
	    module.hot.accept();
	}

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(503);
	
	var _reactRouter = __webpack_require__(184);
	
	var _reactBootstrap = __webpack_require__(247);
	
	var _StudentAdd = __webpack_require__(504);
	
	var _StudentAdd2 = _interopRequireDefault(_StudentAdd);
	
	var _StudentFilter = __webpack_require__(505);
	
	var _StudentFilter2 = _interopRequireDefault(_StudentFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StudentRow = function StudentRow(props) {
	    function onDeleteClick() {
	        props.deleteStudent(props.student._id);
	    }
	    return _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	            'td',
	            null,
	            _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/students/' + props.student._id },
	                props.student._id.substr(-4)
	            )
	        ),
	        _react2.default.createElement(
	            'td',
	            null,
	            props.student.entryDate.toDateString()
	        ),
	        _react2.default.createElement(
	            'td',
	            null,
	            props.student.name
	        ),
	        _react2.default.createElement(
	            'td',
	            null,
	            props.student.scoreCard
	        ),
	        _react2.default.createElement(
	            'td',
	            null,
	            props.student.status
	        ),
	        _react2.default.createElement(
	            'td',
	            null,
	            props.student.favQuote
	        ),
	        _react2.default.createElement(
	            'td',
	            null,
	            _react2.default.createElement(
	                _reactBootstrap.Button,
	                { bsSize: 'xsmall', onClick: onDeleteClick },
	                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'trash' })
	            )
	        )
	    );
	};
	StudentRow.propTypes = {
	    student: _react2.default.PropTypes.object.isRequired,
	    deleteStudent: _react2.default.PropTypes.func.isRequired
	};
	
	function StudentTable(props) {
	    var studentRows = props.students.map(function (student) {
	        return _react2.default.createElement(StudentRow, { key: student._id, student: student, deleteStudent: props.deleteStudent });
	    });
	    return _react2.default.createElement(
	        _reactBootstrap.Table,
	        { bordered: true, condensed: true, hover: true, responsive: true },
	        _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                    'th',
	                    null,
	                    'ID'
	                ),
	                _react2.default.createElement(
	                    'th',
	                    null,
	                    'Entry Date'
	                ),
	                _react2.default.createElement(
	                    'th',
	                    null,
	                    'Name'
	                ),
	                _react2.default.createElement(
	                    'th',
	                    null,
	                    'Score Card'
	                ),
	                _react2.default.createElement(
	                    'th',
	                    null,
	                    'Status'
	                ),
	                _react2.default.createElement(
	                    'th',
	                    null,
	                    'Favorite Quote'
	                ),
	                _react2.default.createElement('th', null)
	            )
	        ),
	        _react2.default.createElement(
	            'tbody',
	            null,
	            studentRows
	        )
	    );
	}
	StudentTable.prototype = {
	    student: _react2.default.PropTypes.object.isRequired,
	    deleteStudent: _react2.default.PropTypes.func.isRequired
	};
	
	var StudentList = function (_React$Component) {
	    _inherits(StudentList, _React$Component);
	
	    function StudentList() {
	        _classCallCheck(this, StudentList);
	
	        var _this = _possibleConstructorReturn(this, (StudentList.__proto__ || Object.getPrototypeOf(StudentList)).call(this));
	
	        _this.state = { students: [] };
	        _this.setFilter = _this.setFilter.bind(_this);
	        _this.createStudent = _this.createStudent.bind(_this);
	        _this.deleteStudent = _this.deleteStudent.bind(_this);
	        return _this;
	    }
	
	    _createClass(StudentList, [{
	        key: 'deleteStudent',
	        value: function deleteStudent(id) {
	            var _this2 = this;
	
	            fetch('api/students/' + id, { method: 'DELETE' }).then(function (response) {
	                if (!response.ok) alert("failed to delete student");else _this2.loadData();
	            });
	        }
	    }, {
	        key: 'createStudent',
	        value: function createStudent(newStudent) {
	            var _this3 = this;
	
	            fetch("api/students", {
	                method: 'POST',
	                headers: { 'Content-Type': 'application/json' },
	                body: JSON.stringify(newStudent)
	            }).then(function (response) {
	                if (response.ok) {
	                    response.json().then(function (parsedNewStudent) {
	                        parsedNewStudent.entryDate = new Date(parsedNewStudent.entryDate);
	                        var newStudentsList = _this3.state.students.concat(parsedNewStudent);
	                        _this3.setState({ students: newStudentsList });
	                    });
	                } else {
	                    response.json().then(function (error) {
	                        alert("Failed to add student" + error.message);
	                    });
	                }
	            }).catch(function (err) {
	                alert("Error in sending data to the server: " + err.message);
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.loadData();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            var oldQuery = prevProps.location.query;
	            var newQuery = this.props.location.query;
	            if (oldQuery.status === newQuery.status && oldQuery.scoreCard_gte === newQuery.scoreCard_gte) {
	                return;
	            }
	            this.loadData();
	        }
	    }, {
	        key: 'loadData',
	        value: function loadData() {
	            var _this4 = this;
	
	            fetch('/api/students' + this.props.location.search).then(function (response) {
	                if (response.ok) {
	                    response.json().then(function (data) {
	                        console.log("Total number of students:", data._metadata.total_count);
	                        data.records.forEach(function (student) {
	                            student.entryDate = new Date(student.entryDate);
	                        });
	                        _this4.setState({ students: data.records });
	                    });
	                } else {
	                    response.json().then(function (error) {
	                        alert("Failed to fetch students:", error.message);
	                    });
	                }
	            }).catch(function (err) {
	                alert("Error in fetching data from the server:", err);
	            });
	        }
	    }, {
	        key: 'setFilter',
	        value: function setFilter(query) {
	            this.props.router.push({ pathname: this.props.location.pathname, query: query });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _reactBootstrap.Panel,
	                    { collapsible: true, header: 'Filter Students' },
	                    _react2.default.createElement(_StudentFilter2.default, { setFilter: this.setFilter, initFilter: this.props.location.query })
	                ),
	                _react2.default.createElement(StudentTable, { students: this.state.students, deleteStudent: this.deleteStudent }),
	                _react2.default.createElement(_StudentAdd2.default, { createStudent: this.createStudent })
	            );
	        }
	    }]);
	
	    return StudentList;
	}(_react2.default.Component);
	
	exports.default = StudentList;
	
	
	StudentList.propTypes = {
	    location: _react2.default.PropTypes.object.isRequired,
	    router: _react2.default.PropTypes.object
	};

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(247);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StudentAdd = function (_React$Component) {
	    _inherits(StudentAdd, _React$Component);
	
	    function StudentAdd() {
	        _classCallCheck(this, StudentAdd);
	
	        var _this = _possibleConstructorReturn(this, (StudentAdd.__proto__ || Object.getPrototypeOf(StudentAdd)).call(this));
	
	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        return _this;
	    }
	
	    _createClass(StudentAdd, [{
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            var form = document.forms.studentAdd;
	            this.props.createStudent({
	                entryDate: new Date(),
	                name: form.name.value,
	                scoreCard: parseInt(form.scoreCard.value, 10),
	                status: this.handleStatusInput(form.scoreCard.value),
	                favQuote: form.favQuote.value
	            });
	            //clears the form for the next entry
	            form.name.value = "";
	            form.favQuote.value = "";
	            form.scoreCard.value = "";
	        }
	    }, {
	        key: 'handleStatusInput',
	        value: function handleStatusInput(score) {
	            if (score <= 50) {
	                return "Novice";
	            } else if (score <= 60) {
	                return "Fair";
	            } else if (score <= 70) {
	                return "Good";
	            } else if (score <= 80) {
	                return "Pro";
	            } else if (score <= 100) {
	                return "Sensei";
	            } else {
	                return "Novice";
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _reactBootstrap.Form,
	                    { inline: true, name: 'studentAdd', onSubmit: this.handleSubmit },
	                    _react2.default.createElement(_reactBootstrap.FormControl, { name: 'name', placeholder: 'Name' }),
	                    ' ',
	                    _react2.default.createElement(_reactBootstrap.FormControl, { name: 'scoreCard', placeholder: 'Score Card' }),
	                    ' ',
	                    _react2.default.createElement(_reactBootstrap.FormControl, { name: 'favQuote', placeholder: 'Favorite Quote' }),
	                    ' ',
	                    _react2.default.createElement(
	                        _reactBootstrap.Button,
	                        { type: 'submit', bsStyle: 'primary' },
	                        'Add Student'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return StudentAdd;
	}(_react2.default.Component);
	
	exports.default = StudentAdd;

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(184);
	
	var _reactBootstrap = __webpack_require__(247);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StudentFilter = function (_React$Component) {
	    _inherits(StudentFilter, _React$Component);
	
	    function StudentFilter(props) {
	        _classCallCheck(this, StudentFilter);
	
	        var _this = _possibleConstructorReturn(this, (StudentFilter.__proto__ || Object.getPrototypeOf(StudentFilter)).call(this, props));
	
	        _this.state = {
	            status: props.initFilter.status || '',
	            scoreCard_gte: props.initFilter.scoreCard_gte || '',
	            changed: false
	        };
	        _this.onChangeStatus = _this.onChangeStatus.bind(_this);
	        _this.onChangeScoreCardGte = _this.onChangeScoreCardGte.bind(_this);
	        _this.applyFilter = _this.applyFilter.bind(_this);
	        _this.resetFilter = _this.resetFilter.bind(_this);
	        _this.clearFilter = _this.clearFilter.bind(_this);
	        return _this;
	    }
	
	    _createClass(StudentFilter, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(newProps) {
	            this.setState({
	                status: newProps.initFilter.status || '',
	                scoreCard_gte: newProps.initFilter.scoreCard_gte || '',
	                changed: false
	            });
	        }
	    }, {
	        key: 'resetFilter',
	        value: function resetFilter() {
	            this.setState({
	                status: this.props.initFilter.status || '',
	                scoreCard_gte: this.props.initFilter.scoreCard_gte || '',
	                changed: false
	            });
	        }
	    }, {
	        key: 'applyFilter',
	        value: function applyFilter() {
	            var newFilter = {};
	            if (this.state.status) newFilter.status = this.state.status;
	            if (this.state.scoreCard_gte) newFilter.scoreCard_gte = this.state.scoreCard_gte;
	            this.props.setFilter(newFilter);
	        }
	    }, {
	        key: 'clearFilter',
	        value: function clearFilter() {
	            this.props.setFilter({});
	        }
	    }, {
	        key: 'onChangeStatus',
	        value: function onChangeStatus(e) {
	            this.setState({ status: e.target.value, changed: true });
	        }
	    }, {
	        key: 'onChangeScoreCardGte',
	        value: function onChangeScoreCardGte(e) {
	            var scoreCardString = e.target.value;
	            if (scoreCardString.match(/^\d*$/)) {
	                this.setState({ scoreCard_gte: e.target.value, changed: true });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactBootstrap.Row,
	                null,
	                _react2.default.createElement(
	                    _reactBootstrap.Col,
	                    { xs: 6, sm: 4, md: 3, lg: 3 },
	                    _react2.default.createElement(
	                        _reactBootstrap.FormGroup,
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.ControlLabel,
	                            null,
	                            'Status'
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.FormControl,
	                            { componentClass: 'select', value: this.state.status, onChange: this.onChangeStatus },
	                            _react2.default.createElement(
	                                'option',
	                                { value: '' },
	                                '(Any)'
	                            ),
	                            _react2.default.createElement(
	                                'option',
	                                { value: 'Novice' },
	                                'Novice'
	                            ),
	                            _react2.default.createElement(
	                                'option',
	                                { value: 'Fair' },
	                                'Fair'
	                            ),
	                            _react2.default.createElement(
	                                'option',
	                                { value: 'Good' },
	                                'Good'
	                            ),
	                            _react2.default.createElement(
	                                'option',
	                                { value: 'Pro' },
	                                'Pro'
	                            ),
	                            _react2.default.createElement(
	                                'option',
	                                { value: 'Sensei' },
	                                'Sensei'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Col,
	                    { xs: 6, sm: 4, md: 3, lg: 3 },
	                    _react2.default.createElement(
	                        _reactBootstrap.FormGroup,
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.ControlLabel,
	                            null,
	                            'Minimun Score'
	                        ),
	                        _react2.default.createElement(_reactBootstrap.FormControl, { componentClass: 'input', value: this.state.scoreCard_gte, onChange: this.onChangeScoreCardGte })
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Col,
	                    { xs: 12, sm: 4, md: 3, lg: 3 },
	                    _react2.default.createElement(
	                        _reactBootstrap.FormGroup,
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.ControlLabel,
	                            null,
	                            '\xA0'
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.ButtonToolbar,
	                            null,
	                            _react2.default.createElement(
	                                _reactBootstrap.Button,
	                                { bsStyle: 'primary', onClick: this.applyFilter },
	                                'Apply'
	                            ),
	                            _react2.default.createElement(
	                                _reactBootstrap.Button,
	                                { onClick: this.resetFilter, disabled: !this.state.changed },
	                                'Reset'
	                            ),
	                            _react2.default.createElement(
	                                _reactBootstrap.Button,
	                                { onClick: this.clearFilter },
	                                'Clear'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return StudentFilter;
	}(_react2.default.Component);
	
	exports.default = StudentFilter;
	
	
	StudentFilter.propTypes = {
	    setFilter: _react2.default.PropTypes.func.isRequired,
	    initFilter: _react2.default.PropTypes.object.isRequired
	};

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NumInput = __webpack_require__(507);
	
	var _NumInput2 = _interopRequireDefault(_NumInput);
	
	var _reactBootstrap = __webpack_require__(247);
	
	var _reactRouterBootstrap = __webpack_require__(499);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StudentEdit = function (_React$Component) {
	    _inherits(StudentEdit, _React$Component);
	
	    function StudentEdit() {
	        _classCallCheck(this, StudentEdit);
	
	        var _this = _possibleConstructorReturn(this, (StudentEdit.__proto__ || Object.getPrototypeOf(StudentEdit)).call(this));
	
	        _this.state = {
	            student: {
	                _id: "",
	                entryDate: null,
	                name: "",
	                scoreCard: null,
	                status: "",
	                favQuote: ""
	            },
	            invalidFields: {}
	        };
	        _this.onChange = _this.onChange.bind(_this);
	        _this.onSubmit = _this.onSubmit.bind(_this);
	        _this.onValidityChange = _this.onValidityChange.bind(_this);
	        return _this;
	    }
	
	    _createClass(StudentEdit, [{
	        key: 'onValidityChange',
	        value: function onValidityChange(event, valid) {
	            var invalidFields = Object.assign({}, this.state.invalidFields);
	            if (!valid) {
	                invalidFields[event.target.name] = true;
	            } else {
	                delete invalidFields[event.target.name];
	            }
	            this.setState({ invalidFields: invalidFields });
	        }
	    }, {
	        key: 'onSubmit',
	        value: function onSubmit(event) {
	            var _this2 = this;
	
	            event.preventDefault();
	            if (Object.keys(this.state.invalidFields).length != 0) {
	                return;
	            }
	            fetch('/api/students/' + this.props.params.id, {
	                method: 'PUT',
	                headers: { 'Content-Type': 'application/json' },
	                body: JSON.stringify(this.state.student)
	            }).then(function (response) {
	                if (response.ok) {
	                    response.json().then(function (updatedStudent) {
	                        updatedStudent.entryDate = new Date(updatedStudent.entryDate);
	                        _this2.setState({ student: updatedStudent });
	                        alert('Updated Student Successfully.');
	                    });
	                } else {
	                    response.json().then(function (error) {
	                        alert('Failed to update student: ' + error.message);
	                    });
	                }
	            }).catch(function (err) {
	                alert('Error in sending data to server: ' + err.message);
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.loadData();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (prevProps.params.id != this.props.params.id) {
	                this.loadData();
	            }
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(event, convertedValue) {
	            var student = Object.assign({}, this.state.student);
	            var value = convertedValue !== undefined ? convertedValue : event.target.value;
	            student[event.target.name] = value;
	            this.setState({ student: student });
	        }
	    }, {
	        key: 'loadData',
	        value: function loadData() {
	            var _this3 = this;
	
	            fetch('/api/students/' + this.props.params.id).then(function (response) {
	                if (response.ok) {
	                    response.json().then(function (student) {
	                        student.entryDate = new Date(student.entryDate);
	                        _this3.setState({ student: student });
	                    });
	                } else {
	                    response.json().then(function (error) {
	                        alert('Failed to fetch student: ' + error.message);
	                    });
	                }
	            }).catch(function (err) {
	                alert('Error in fetching from server: ' + err.message);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var student = this.state.student;
	            var validationMessage = Object.keys(this.state.invalidFields).length === 0 ? null : _react2.default.createElement(
	                'div',
	                { className: 'error' },
	                'Please correct invalid fields before submitting.'
	            );
	            return _react2.default.createElement(
	                _reactBootstrap.Panel,
	                { header: 'Student Detail' },
	                _react2.default.createElement(
	                    _reactBootstrap.Form,
	                    { horizontal: true, onSubmit: this.onSubmit },
	                    _react2.default.createElement(
	                        _reactBootstrap.FormGroup,
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
	                            'ID'
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { sm: 9 },
	                            _react2.default.createElement(
	                                _reactBootstrap.FormControl.Static,
	                                null,
	                                student._id
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactBootstrap.FormGroup,
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
	                            'Entry Date'
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { sm: 9 },
	                            _react2.default.createElement(
	                                _reactBootstrap.FormControl.Static,
	                                null,
	                                student.entryDate ? student.entryDate.toDateString() : ''
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactBootstrap.FormGroup,
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
	                            'Name'
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { sm: 9 },
	                            _react2.default.createElement(_reactBootstrap.FormControl, { name: 'name', value: student.name, onChange: this.onChange })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactBootstrap.FormGroup,
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
	                            'Score Card'
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { sm: 9 },
	                            _react2.default.createElement(_reactBootstrap.FormControl, { componentClass: _NumInput2.default, name: 'scoreCard', value: student.scoreCard, onChange: this.onChange })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactBootstrap.FormGroup,
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
	                            'Status'
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { sm: 9 },
	                            _react2.default.createElement(
	                                _reactBootstrap.FormControl,
	                                { componentClass: 'select', name: 'status', value: student.status, onChange: this.onChange },
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: 'Novice' },
	                                    'Novice'
	                                ),
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: 'Fair' },
	                                    'Fair'
	                                ),
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: 'Good' },
	                                    'Good'
	                                ),
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: 'Pro' },
	                                    'Pro'
	                                ),
	                                _react2.default.createElement(
	                                    'option',
	                                    { value: 'Sensei' },
	                                    'Sensei'
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactBootstrap.FormGroup,
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { componentClass: _reactBootstrap.ControlLabel, sm: 3 },
	                            'Favorite Quote'
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { sm: 9 },
	                            _react2.default.createElement(_reactBootstrap.FormControl, { name: 'favQuote', value: student.favQuote, onChange: this.onChange })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactBootstrap.FormGroup,
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { smOffset: 3, sm: 6 },
	                            _react2.default.createElement(
	                                _reactBootstrap.ButtonToolbar,
	                                null,
	                                _react2.default.createElement(
	                                    _reactBootstrap.Button,
	                                    { bsStyle: 'primary', type: 'submit' },
	                                    'Update'
	                                ),
	                                _react2.default.createElement(
	                                    _reactRouterBootstrap.LinkContainer,
	                                    { to: '/students' },
	                                    _react2.default.createElement(
	                                        _reactBootstrap.Button,
	                                        { bsStyle: 'link' },
	                                        'Back'
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactBootstrap.FormGroup,
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.Col,
	                            { smOffset: 3, sm: 9 },
	                            validationMessage
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return StudentEdit;
	}(_react2.default.Component);
	
	exports.default = StudentEdit;
	
	StudentEdit.propTypes = {
	    params: _react2.default.PropTypes.object.isRequired
	};

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NumInput = function (_React$Component) {
	    _inherits(NumInput, _React$Component);
	
	    function NumInput(props) {
	        _classCallCheck(this, NumInput);
	
	        var _this = _possibleConstructorReturn(this, (NumInput.__proto__ || Object.getPrototypeOf(NumInput)).call(this, props));
	
	        _this.state = { value: _this.format(props.value) };
	        _this.onBlur = _this.onBlur.bind(_this);
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }
	
	    _createClass(NumInput, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(newProps) {
	            this.setState({ value: this.format(newProps.value) });
	        }
	    }, {
	        key: 'onBlur',
	        value: function onBlur(e) {
	            this.props.onChange(e, this.unformat(this.state.value));
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            if (e.target.value.match(/^\d*$/)) {
	                this.setState({ value: e.target.value });
	            }
	        }
	    }, {
	        key: 'format',
	        value: function format(num) {
	            return num != null ? num.toString() : '';
	        }
	    }, {
	        key: 'unformat',
	        value: function unformat(str) {
	            var val = parseInt(str, 10);
	            return isNaN(val) ? null : val;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('input', _extends({ type: 'text' }, this.props, { value: this.state.value, onBlur: this.onBlur, onChange: this.onChange }));
	        }
	    }]);
	
	    return NumInput;
	}(_react2.default.Component);
	
	exports.default = NumInput;
	
	NumInput.propTypes = {
	    value: _react2.default.PropTypes.number,
	    onChange: _react2.default.PropTypes.func.isRequired
	};

/***/ })

});
//# sourceMappingURL=app.bundle.js.map