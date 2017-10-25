db = new Mongo().getDB("sohkstudents")

db.students.remove({});

db.students.insert([{
    entryDate: new Date('2016-08-15'),
    name: 'Eddy Hack',
    scoreCard: 89,
    status: "Pro",
    favQuote: "I don't like trouble. She just loves me "
}, {
    entryDate: new Date('2015-04-14'),
    name: 'Harrison Fever',
    scoreCard: 52,
    status: "Good",
    favQuote: "Don't study me, you'll never graduate"
}]);

db.students.createIndex({ status: 1 });
db.students.createIndex({ name: 1 });
db.students.createIndex({ entryDate: 1 });