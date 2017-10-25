"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var StudentFilter = function (_React$Component) {
    _inherits(StudentFilter, _React$Component);

    function StudentFilter() {
        _classCallCheck(this, StudentFilter);

        return _possibleConstructorReturn(this, (StudentFilter.__proto__ || Object.getPrototypeOf(StudentFilter)).apply(this, arguments));
    }

    _createClass(StudentFilter, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "This is the Students Filter placeholder"
            );
        }
    }]);

    return StudentFilter;
}(React.Component);

function StudentTable(props) {
    var studentRows = props.students.map(function (student) {
        return React.createElement(StudentRow, { key: student._id, student: student });
    });
    return React.createElement(
        "table",
        { className: "bordered-table" },
        React.createElement(
            "thead",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    null,
                    "ID"
                ),
                React.createElement(
                    "th",
                    null,
                    "Entry Date"
                ),
                React.createElement(
                    "th",
                    null,
                    "Name"
                ),
                React.createElement(
                    "th",
                    null,
                    "Score Card"
                ),
                React.createElement(
                    "th",
                    null,
                    "Status"
                ),
                React.createElement(
                    "th",
                    null,
                    "Favorite Quote"
                )
            )
        ),
        React.createElement(
            "tbody",
            null,
            studentRows
        )
    );
}

var StudentRow = function StudentRow(props) {
    return React.createElement(
        "tr",
        null,
        React.createElement(
            "td",
            null,
            props.student._id
        ),
        React.createElement(
            "td",
            null,
            props.student.entryDate.toDateString()
        ),
        React.createElement(
            "td",
            null,
            props.student.name
        ),
        React.createElement(
            "td",
            null,
            props.student.scoreCard
        ),
        React.createElement(
            "td",
            null,
            props.student.status
        ),
        React.createElement(
            "td",
            null,
            props.student.favQuote
        )
    );
};

var StudentAdd = function (_React$Component2) {
    _inherits(StudentAdd, _React$Component2);

    function StudentAdd() {
        _classCallCheck(this, StudentAdd);

        var _this2 = _possibleConstructorReturn(this, (StudentAdd.__proto__ || Object.getPrototypeOf(StudentAdd)).call(this));

        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        return _this2;
    }

    _createClass(StudentAdd, [{
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var form = document.forms.studentAdd;
            this.props.createStudent({
                entryDate: new Date(),
                name: form.name.value,
                scoreCard: 40,
                status: "Novice",
                favQuote: form.favQuote.value
            });
            //clears the form for the next entry
            form.name.value = "";
            form.favQuote.value = "";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { name: "studentAdd", onSubmit: this.handleSubmit },
                    React.createElement("input", { type: "text", name: "name", placeholder: "Name" }),
                    React.createElement("input", { type: "text", name: "favQuote", placeholder: "Favorite Quote" }),
                    React.createElement(
                        "button",
                        null,
                        "Add"
                    )
                )
            );
        }
    }]);

    return StudentAdd;
}(React.Component);

var StudentList = function (_React$Component3) {
    _inherits(StudentList, _React$Component3);

    function StudentList() {
        _classCallCheck(this, StudentList);

        var _this3 = _possibleConstructorReturn(this, (StudentList.__proto__ || Object.getPrototypeOf(StudentList)).call(this));

        _this3.state = { students: [] };

        _this3.createStudent = _this3.createStudent.bind(_this3);
        return _this3;
    }

    _createClass(StudentList, [{
        key: "createStudent",
        value: function createStudent(newStudent) {
            var _this4 = this;

            fetch("api/students", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newStudent)
            }).then(function (response) {
                if (response.ok) {
                    response.json().then(function (parsedNewStudent) {
                        parsedNewStudent.entryDate = new Date(parsedNewStudent.entryDate);
                        var newStudentsList = _this4.state.students.concat(parsedNewStudent);
                        _this4.setState({ students: newStudentsList });
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
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadData();
        }
    }, {
        key: "loadData",
        value: function loadData() {
            var _this5 = this;

            fetch("/api/students").then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log("Total number of students:", data._metadata.total_count);
                        data.records.forEach(function (student) {
                            student.entryDate = new Date(student.entryDate);
                        });
                        _this5.setState({ students: data.records });
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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "School Of Hard Knocks"
                ),
                React.createElement(StudentFilter, null),
                React.createElement("hr", null),
                React.createElement(StudentTable, { students: this.state.students }),
                React.createElement("hr", null),
                React.createElement(StudentAdd, { createStudent: this.createStudent })
            );
        }
    }]);

    return StudentList;
}(React.Component);

ReactDOM.render(React.createElement(StudentList, null), contentNode);