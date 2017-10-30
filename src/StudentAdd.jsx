import React from 'react';

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
                <form name = "studentAdd" onSubmit = { this.handleSubmit }>
                    <input type = "text" name = "name" placeholder = "Name" />
                    <input type = "text" name = "scoreCard" placeholder = "Score Card" />
                    <input type = "text" name = "favQuote" placeholder = "Favorite Quote" />
                    <button> Add </button> 
                </form> 
            </div>
        );
    }
}