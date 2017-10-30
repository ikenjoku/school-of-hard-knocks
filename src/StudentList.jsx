import React from 'react';
import 'whatwg-fetch';
import {Link} from 'react-router';
import {Button, Glyphicon, Table, Panel} from 'react-bootstrap';

import StudentAdd from './StudentAdd.jsx';
import StudentFilter from './StudentFilter.jsx';


const StudentRow = (props) => {
    function onDeleteClick(){
        props.deleteStudent(props.student._id);
    }
    return (
    <tr>
        <td><Link to={`/students/${props.student._id}`}>{props.student._id.substr(-4)}</Link></td>
        <td>{props.student.entryDate.toDateString()}</td>
        <td>{props.student.name}</td>
        <td>{props.student.scoreCard}</td>
        <td>{props.student.status}</td>
        <td>{props.student.favQuote}</td>
        <td>
            <Button bsSize="xsmall" onClick={onDeleteClick}><Glyphicon glyph="trash" /></Button>
        </td>
    </tr>
)
};
StudentRow.propTypes = {
    student: React.PropTypes.object.isRequired,
    deleteStudent: React.PropTypes.func.isRequired
}

function StudentTable(props){
    const studentRows = props.students.map(student => <StudentRow key={student._id} student={student} deleteStudent={props.deleteStudent}/>);
    return(
        <Table bordered condensed hover responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Entry Date</th>
                    <th>Name</th>
                    <th>Score Card</th>
                    <th>Status</th>
                    <th>Favorite Quote</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {studentRows}
            </tbody>
        </Table>
    );
}
StudentTable.prototype = {
    student: React.PropTypes.object.isRequired,
    deleteStudent: React.PropTypes.func.isRequired,
}


export default class StudentList extends React.Component{
    constructor(){
        super();
        this.state = {students: []}
        this.setFilter = this.setFilter.bind(this);
        this.createStudent = this.createStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    deleteStudent(id){
        fetch(`api/students/${id}`, {method: 'DELETE'})
        .then(response => {
            if (!response.ok) alert("failed to delete student");
            else this.loadData();
        });
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
                <Panel collapsible header="Filter Students">
                    <StudentFilter setFilter={this.setFilter} initFilter={this.props.location.query}/>
                </Panel>
                <StudentTable students={this.state.students} deleteStudent={this.deleteStudent}/>
                <StudentAdd createStudent={this.createStudent}/>
            </div>
        );
    }
}

StudentList.propTypes = {
    location: React.PropTypes.object.isRequired,
    router: React.PropTypes.object,
};