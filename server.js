const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

app.use(express.static('static'));
app.use(bodyParser.json());

const validStudentStatus = {
    Novice: true,
    Fair: true,
    Good: true,
    Pro: true,
    Sensei: true,
};

const studentFieldType = {
    entryDate: "required",
    name: "required",
    scoreCard: "optional",
    status: "optional",
    favQuote: "required"
}

function validateStudent(student) {
    for (const field in studentFieldType) {
        const type = studentFieldType[field];
        if (!type) {
            delete student[field];
        } else if (type == 'required' && !student[field]) {
            return `${field} is required.`;
        }
    }
    if (!validStudentStatus[student.status]) {
        return `${student.status} is not a valid status.`;
    }
    return null;
}

app.get('/api/students', (req, res) => {
    db.collection('students').find().toArray()
        .then(students => {
            const metadata = { "total_count": students.length };
            res.json({ _metadata: metadata, records: students })
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: `Internal Server Error: ${error}` });
        });
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
    const err = validateStudent(newStudent);
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

let db;
MongoClient.connect("mongodb://localhost/sohkstudents")
    .then(connection => {
        db = connection;
        app.listen(3200, () => console.log("App started on port 3200"));
    }).catch(error => {
        console.log('ERROR', error);
    });