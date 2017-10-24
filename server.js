const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static('static'));
app.use(bodyParser.json());

const students = [{
    id: 1,
    entryDate: new Date('2016-08-15'),
    name: 'Eddy Hack',
    scoreCard: 89,
    status: "Pro",
    favQuote: "I don't like trouble. She just loves me "
}, {
    id: 2,
    entryDate: new Date('2015-04-14'),
    name: 'Harrison Fever',
    scoreCard: 52,
    status: "Good",
    favQuote: "Don't study me, you'll never graduate"
}];


app.get('/api/students', (req, res) => {
    const metadata = { "total_count": students.length };
    res.json({ _metadata: metadata, records: students })

});

app.post("/api/students", (req, res) => {
    const newStudent = req.body;
    newStudent.id = students.length + 1;
    newStudent.entryDate = new Date();
    if (!newStudent.status) {
        newStudent.status = "Newbie"
    }
    if (!newStudent.scoreCard) {
        newStudent.scoreCard = 40;
    }
    students.push(newStudent);
    res.json(newStudent);
});

app.listen(3200, () => console.log("App started on port 3200"))