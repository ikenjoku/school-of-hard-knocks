import React from 'react';
import 'whatwg-fetch';
import {Link} from 'react-router';

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
        <td><Link to={`/students/${props.student._id}`}>{props.student._id.substr(-4)}</Link></td>
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
        this.setFilter = this.setFilter.bind(this);
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
    componentDidUpdate(prevProps){
        const oldQuery = prevProps.location.query;
        const newQuery = this.props.location.query;
        if (oldQuery.status === newQuery.status && oldQuery.scoreCard_gte === newQuery.scoreCard_gte){
            return;
        }
        this.loadData();
    }
    loadData(){
        fetch(`/api/students${this.props.location.search}`).then(response => {
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
    setFilter(query){
        this.props.router.push({pathname: this.props.location.pathname, query});
    }
    render(){
        return(
            <div>
                <StudentFilter setFilter={this.setFilter} initFilter={this.props.location.query}/>
                <hr/>
                <StudentTable students={this.state.students}/>
                <hr/>
                <StudentAdd createStudent={this.createStudent}/>
            </div>
        );
    }
}

StudentList.propTypes = {
    location: React.PropTypes.object.isRequired,
    router: React.PropTypes.object,
};