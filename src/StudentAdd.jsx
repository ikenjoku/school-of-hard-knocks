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
            scoreCard: 40,
            status: "Novice",
            favQuote: form.favQuote.value
        });
        //clears the form for the next entry
        form.name.value = "";
        form.favQuote.value = "";
    }
    render() {
        return ( 
            <div>
                <form name = "studentAdd" onSubmit = { this.handleSubmit }>
                    <input type = "text" name = "name" placeholder = "Name" />
                    <input type = "text" name = "favQuote" placeholder = "Favorite Quote" />
                    <button> Add </button> 
                </form> 
            </div>
        );
    }
}