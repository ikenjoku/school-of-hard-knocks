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

function cleanupStudent(student) {
    const cleanedUpStudent = {};
    Object.keys(student).forEach(field => {
        if (studentFieldType[field]) cleanedUpStudent[field] = student[field];
    });
    return cleanedUpStudent;
}

function validateStudent(student) {
    const errors = [];
    Object.keys(studentFieldType).forEach(field => {
        if (studentFieldType[field] === 'required' && !student[field]) {
            errors.push(`Missing mandatory field: ${field}`)
        }
    });

    if (!validStudentStatus[student.status]) {
        errors.push(`${student.status} is not a valid status.`);
    }
    return (errors.length ? errors.join('; ') : null);
}

function convertStudent(student) {
    if (student.entryDate) student.entryDate = new Date(student.entryDate);
    return cleanupStudent(student);
}

export default {
    validateStudent,
    cleanupStudent,
    convertStudent,
};