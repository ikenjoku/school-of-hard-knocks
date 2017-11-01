import express from "express";
const app = express();
import bodyParser from "body-parser";
import { MongoClient, ObjectId } from "mongodb";
import Student from './student.js';
import 'babel-polyfill';
import path from 'path';
import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();

app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/api/students', (req, res) => {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.scoreCard_gte) filter.scoreCard = {};
    if (req.query.scoreCard_gte) filter.scoreCard.$gte = parseInt(req.query.scoreCard_gte, 10);

    db.collection('students').find(filter).toArray()
        .then(students => {
            const metadata = { "total_count": students.length };
            res.json({ _metadata: metadata, records: students })
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: `Internal Server Error: ${error}` });
        });
});

app.get('/api/students/:id', (req, res) => {
    let studentId;
    try {
        studentId = new ObjectId(req.params.id);
    } catch (error) {
        res.status(422).json({ message: `Invalid Student ID format: ${error}` });
        return;
    }

    db.collection('students').find({ _id: studentId }).limit(1).next()
        .then(student => {
            if (!student) res.status(404).json({ message: `No such student: ${studentId}` });
            else res.json(student);
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: `Internal Server Error: ${error}` })
        });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve('static/index.html'));
});

app.post("/api/students", (req, res) => {
    const newStudent = req.body;
    newStudent.entryDate = new Date();
    if (!newStudent.status) {
        newStudent.status = "Novice"
    }
    if (!newStudent.scoreCard) {
        newStudent.scoreCard = 40;
    }
    const err = Student.validateStudent(Student.cleanupStudent(newStudent));
    if (err) {
        res.status(422).json({ message: `Invalid request: ${err}` });
        return;
    }
    db.collection('students').insertOne(newStudent)
        .then(result => db.collection('students').find({ _id: result.insertedId }).limit(1).next())
        .then(newStudent => {
            res.json(newStudent);
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: `Internal Server Error: ${error}` });
        });
});

app.put('/api/students/:id', (req, res) => {
    let studentId;
    try {
        studentId = new ObjectId(req.params.id);
    } catch (error) {
        res.status(422).json({ message: `Invalid student ID format: ${error}` });
        return;
    }
    const student = req.body;
    delete student._id;
    const err = Student.validateStudent(student);
    if (err) {
        res.status(422).json({ message: `Invalid request: ${err}` });
        return;
    }

    db.collection('students').update({ _id: studentId }, Student.convertStudent(student))
        .then(() => db.collection('students').find({ _id: studentId }).limit(1).next())
        .then(savedStudent => {
            res.json(savedStudent);
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: `Internal Server Error: ${error}` });
        });
});

app.delete('/api/students/:id', (req, res) => {
    let studentId;
    try {
        studentId = new ObjectId(req.params.id);
    } catch (error) {
        res.status(422).json({ message: `Invalid student ID format: ${error}` });
        return;
    }
    db.collection('students').deleteOne({ _id: studentId })
        .then((deleteResult) => {
            if (deleteResult.result.n === 1) res.json({ status: 'OK' });
            else res.json({ status: 'Warning: object not found' });
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: `Internal Server Error: ${error}` });
        });
});

let db;
MongoClient.connect("mongodb://alcsohk:stud14AIKEE159@ds035856.mlab.com:35856/sohkstudents")
    //"mongodb://localhost/sohkstudents"
    .then(connection => {
        db = connection;
        app.listen(3200, () => console.log("App started on port 3200"));
    }).catch(error => {
        console.log('ERROR', error);
    });