import React from 'react';
import 'whatwg-fetch';

import StudentAdd from './StudentAdd.jsx';
import StudentFilter from './StudentFilter.jsx';

function StudentTable(props){
    const studentRows = props.students.map(student => <StudentRow key={student._id} student={student} />)
    return(
        <table className="bordered-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Entry Date</th>
                    <th>Name</th>
                    <th>Score Card</th>
                    <th>Status</th>
                    <th>Favorite Quote</th>
                </tr>
            </thead>
            <tbody>
                {studentRows}
            </tbody>
        </table>
    );
}

const StudentRow = (props) => (
    <tr>
        <td>{props.student._id}</td>
        <td>{props.student.entryDate.toDateString()}</td>
        <td>{props.student.name}</td>
        <td>{props.student.scoreCard}</td>
        <td>{props.student.status}</td>
        <td>{props.student.favQuote}</td>
    </tr>
)


export default class StudentList extends React.Component{
    constructor(){
        super();
        this.state = {students: []}

        this.createStudent = this.createStudent.bind(this);
    }
    createStudent(newStudent){
        fetch("api/students", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newStudent),
        }).then(response => {
            if (response.ok){
                response.json()
                .then(parsedNewStudent => {
                    parsedNewStudent.entryDate = new Date(parsedNewStudent.entryDate);
                    const newStudentsList = this.state.students.concat(parsedNewStudent);
                    this.setState({students: newStudentsList});
                });
            } else{
                response.json().then(error => {
                    alert("Failed to add student" + error.message);
                });
            }
        }).catch(err => {
            alert("Error in sending data to the server: " + err.message);
        });
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        fetch("/api/students").then(response => {
        if (response.ok){
            response.json().then(data => {
                console.log("Total number of students:", data._metadata.total_count)
                data.records.forEach(student => {
                    student.entryDate = new Date(student.entryDate)
                });
                this.setState({students: data.records});
            });
        } else {
            response.json().then(error => {
                alert("Failed to fetch students:", error.message)
            });
        }        
        }).catch(err => {
            alert("Error in fetching data from the server:", err);
        });
    }
    render(){
        return(
            <div>
                <h1>School Of Hard Knocks</h1>
                <StudentFilter />
                <hr/>
                <StudentTable students={this.state.students}/>
                <hr/>
                <StudentAdd createStudent={this.createStudent}/>
            </div>
        );
    }
}
