const contentNode = document.getElementById('contents');


class StudentFilter extends React.Component{
    render(){
        return(
            <div>This is the Students Filter placeholder</div>
        );
    }
}

function StudentTable(props){
    const studentRows = props.students.map(student => <StudentRow key={student.id} student={student} />)
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
        <td>{props.student.id}</td>
        <td>{props.student.entryDate.toDateString()}</td>
        <td>{props.student.name}</td>
        <td>{props.student.scoreCard}</td>
        <td>{props.student.status}</td>
        <td>{props.student.favQuote}</td>
    </tr>
)


class StudentAdd extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        var form = document.forms.studentAdd;
        this.props.createStudent({
            entryDate: new Date(),
            name: form.name.value,
            scoreCard: 40,    
            status: "Newbie",
            favQuote: form.favQuote.value
        });
        //clears the form for the next entry
        form.name.value="";
        form.favQuote.value="";
    }
    render(){
        return(
            <div>
                <form name="studentAdd" onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="favQuote" placeholder="Favorite Quote" />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

class StudentList extends React.Component{
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
        }).then(response => response.json())
        .then(parsedNewStudent => {
            parsedNewStudent.entryDate = new Date(parsedNewStudent.entryDate);
            const newStudentsList = this.state.students.concat(parsedNewStudent);
            this.setState({students: newStudentsList});
        }).catch(err => {
            alert("Error in sending data to the server: " + err.message);
        });
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        fetch("/api/students")
        .then(response => response.json())
        .then(data => {
            console.log("Total number of students:", data._metadata.total_count)
            data.records.forEach(student => {
                student.entryDate = new Date(student.entryDate)
            });
            this.setState({students: data.records});
        }).catch(err => {
            console.log(err);
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



ReactDOM.render(<StudentList />, contentNode);