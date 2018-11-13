
const express = require('express');
const app = express();

let courses = [
    {id: 1, name: 'course1'}
 //   id2: 2, name: 'course2'
 //   {"id3": '3', name: 'course3'}
];

app.get('/', (_req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (_req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, _res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found');
    res.send('Course not found');
});



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to port fucking ${port}...`));