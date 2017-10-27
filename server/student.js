'use strict';

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

function validateStudent(student) {
    for (const field in studentFieldType) {
        const type = studentFieldType[field];
        if (!type) {
            delete student[field];
        } else if (type == 'required' && !student[field]) {
            return `${field} is required.`;
        }
    }
    if (!validStudentStatus[student.status]) {
        return `${student.status} is not a valid status.`;
    }
    return null;
}

module.exports = {
    validateStudent: validateStudent,
};