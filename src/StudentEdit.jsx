import React from 'react';
import {Link} from 'react-router';
import NumInput from './NumInput.jsx';

export default class StudentEdit extends React.Component{
    constructor(){
        super();
        this.state = {
            student: {
                _id: "",
                entryDate: null,
                name: "",
                scoreCard: null,
                status: "",
                favQuote: ""
            },
            invalidFields: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onValidityChange = this.onValidityChange.bind(this);
    }
    onValidityChange(event, valid){
        const invalidFields = Object.assign({}, this.state.invalidFields);
        if (!valid){
            invalidFields[event.target.name] = true;
        } else {
            delete invalidFields[event.target.name];
        }
        this.setState({invalidFields});
    }
    onSubmit(event){
        event.preventDefault();
        if (Object.keys(this.state.invalidFields).length != 0){
            return;
        }
        fetch(`/api/students/${this.props.params.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.student),
        }).then(response => {
            if (response.ok){
                response.json().then(updatedStudent =>{
                    updatedStudent.entryDate = new Date(updatedStudent.entryDate);
                    this.setState({student: updatedStudent});
                    alert('Updated Student Successfully.');
                });
            } else {
                response.json().then(error => {
                    alert(`Failed to update student: ${error.message}`);
                });
            }
        }).catch(err => {
            alert(`Error in sending data to server: ${err.message}`)
        });
    }
    componentDidMount(){
        this.loadData();
    }
    componentDidUpdate(prevProps){
        if (prevProps.params.id != this.props.params.id){
            this.loadData();
        }
    }
    onChange(event, convertedValue){
        const student = Object.assign({}, this.state.student);
        const value = (convertedValue !== undefined) ? convertedValue : event.target.value;
        student[event.target.name] = value;
        this.setState({student});
    }

    loadData(){
        fetch(`/api/students/${this.props.params.id}`)
        .then(response => {
            if (response.ok){
                response.json().then(student => {
                    student.entryDate = new Date(student.entryDate);
                    this.setState({student});
                });
            } else {
                response.json().then(error => {
                    alert(`Failed to fetch student: ${error.message}`);
                });
            }
        }).catch(err => {
            alert(`Error in fetching from server: ${err.message}`)
        });
    }
    render(){
        const student = this.state.student;
        const validationMessage = Object.keys(this.state.invalidFields).length === 0 ? null : 
        (<div className="error">Please correct invalid fields before submitting.</div>);
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    ID: {student._id}
                    <br/>
                    Entry Date: {student.entryDate ? student.entryDate.toDateString() : ''}
                    <br/>
                    Name: <input name="name" value={student.name} onChange={this.onChange}/>
                    <br/>
                    Score Card: <NumInput size={5} name="scoreCard" value={student.scoreCard} onChange={this.onChange}/>
                    <br/>
                    Status:<select name="status" value={student.status} onChange={this.onChange}>
                    <option value="Novice">Novice</option>
                    <option value="Fair">Fair</option>
                    <option value="Good">Good</option>
                    <option value="Pro">Pro</option>
                    <option value="Sensei">Sensei</option>
                </select>
                    <br/>
                    Favorite Quote: <input name="favQuote" value={student.favQuote} onChange={this.onChange}/>
                    <br/>
                    {validationMessage}
                    <button type="submit">Submit</button>
                    <Link to="/students">Back to Student List</Link>
                </form>
            </div>
        );
    }
}
StudentEdit.propTypes = {
    params: React.PropTypes.object.isRequired,
};
