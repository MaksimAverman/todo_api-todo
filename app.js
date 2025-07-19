const express = require('express');
const app = express();
app.use(express.json());

let tasks = []; //  (in-memory)
let idCounter = 1;

// create task
app.post('/tasks', (req, res) => {
    const { text, status } = req.body;
    if (!text || !['in progress', 'completed'].includes(status)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const task = { id: idCounter++, text, status };
    tasks.push(task);
    res.status(201).json(task);
});

// get kist of tasks
app.get('/tasks', (req, res) => {
    const { status } = req.query;
    let result = tasks;
    if (status) {
        result = tasks.filter(t => t.status === status);
    }
    res.json(result);
});

// update task status
app.patch('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    const { status } = req.body;
    if (!['in progress', 'completed'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
    }
    task.status = status;
    res.json(task);
});

// delete task
app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Task not found' });
    tasks.splice(index, 1);
    res.status(204).send();
});

// run the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
