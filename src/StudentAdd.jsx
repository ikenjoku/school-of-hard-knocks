import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

export default class StudentAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
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
    handleStatusInput(score){
        if (score <= 50) {
            return "Novice";
        } else if (score <= 60){
            return "Fair";
        } else if (score <=70){
            return "Good";
        } else if (score <= 80){
            return "Pro";
        } else if(score <= 100){
            return "Sensei";
        } else{
            return "Novice";
        }
    }
    render() {
        return ( 
            <div>
                <Form inline name = "studentAdd" onSubmit = { this.handleSubmit }>
                    <FormControl name = "name" placeholder = "Name"/>
                    {' '}
                    <FormControl name = "scoreCard" placeholder = "Score Card"/>
                    {' '}
                    <FormControl name = "favQuote" placeholder = "Favorite Quote"/>
                    {' '}
                    <Button type="submit" bsStyle="primary">Add Student</Button>
                </Form> 
            </div>
        );
    }
}