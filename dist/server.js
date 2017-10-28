"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongodb = require("mongodb");

var _student = require("./student.js");

var _student2 = _interopRequireDefault(_student);

require("babel-polyfill");

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _sourceMapSupport = require("source-map-support");

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

_sourceMapSupport2.default.install();

app.use(_express2.default.static('static'));
app.use(_bodyParser2.default.json());

app.get('/api/students', (req, res) => {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.scoreCard_gte) filter.scoreCard = {};
    if (req.query.scoreCard_gte) filter.scoreCard.$gte = parseInt(req.query.scoreCard_gte, 10);

    db.collection('students').find(filter).toArray().then(students => {
        const metadata = { "total_count": students.length };
        res.json({ _metadata: metadata, records: students });
    }).catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.get('/api/students/:id', (req, res) => {
    let studentId;
    try {
        studentId = new _mongodb.ObjectId(req.params.id);
    } catch (error) {
        res.status(422).json({ message: `Invalid Student ID format: ${error}` });
        return;
    }

    db.collection('students').find({ _id: studentId }).limit(1).next().then(student => {
        if (!student) res.status(404).json({ message: `No such student: ${studentId}` });else res.json(student);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.get('*', (req, res) => {
    res.sendFile(_path2.default.resolve('static/index.html'));
});

app.post("/api/students", (req, res) => {
    const newStudent = req.body;
    newStudent.entryDate = new Date();
    if (!newStudent.status) {
        newStudent.status = "Novice";
    }
    if (!newStudent.scoreCard) {
        newStudent.scoreCard = 40;
    }
    const err = _student2.default.validateStudent(_student2.default.cleanupStudent(newStudent));
    if (err) {
        res.status(422).json({ message: `Invalid request: ${err}` });
        return;
    }
    db.collection('students').insertOne(newStudent).then(result => db.collection('students').find({ _id: result.insertedId }).limit(1).next()).then(newStudent => {
        res.json(newStudent);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.put('/api/students/:id', (req, res) => {
    let studentId;
    try {
        studentId = new _mongodb.ObjectId(req.params.id);
    } catch (error) {
        res.status(422).json({ message: `Invalid student ID format: ${error}` });
        return;
    }
    const student = req.body;
    delete student._id;
    const err = _student2.default.validateStudent(student);
    if (err) {
        res.status(422).json({ message: `Invalid request: ${err}` });
        return;
    }
    console.log(req.params);
    console.log(req.body);
    db.collection('students').update({ _id: studentId }, _student2.default.convertStudent(student)).then(() => db.collection('students').find({ _id: studentId }).limit(1).next()).then(savedStudent => {
        res.json(savedStudent);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

let db;
_mongodb.MongoClient.connect("mongodb://localhost/sohkstudents").then(connection => {
    db = connection;
    app.listen(3200, () => console.log("App started on port 3200"));
}).catch(error => {
    console.log('ERROR', error);
});
//# sourceMappingURL=server.js.map