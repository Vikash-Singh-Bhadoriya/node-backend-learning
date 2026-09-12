const express = require("express");

const PORT = 3000;

const app = express();

const tasks = [
  { id: 1, title: "Learn Node.js", completed: true },
  { id: 2, title: "Learn express.js", completed: true },
  { id: 3, title: "Learn api", completed: false },
];

// app.use(express.json())

app.post("/tasks", (req,res) => {
    const {title, completed} = req.body

    if(!title || typeof title !== 'string' || title.trim().length === 0) {
        res.status(400).json({error: `Task title cannot be blank`})
        return;
    }

    const taskId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1: 1;
    const task = {
        id: taskId,
        title: title,
        completed: completed === "true" || completed === true
    };

    tasks.push(task);
    res.status(201).json({id: taskId});
})

app.get("/", (req,res) => {
    res.json({message: "Hello from Express"});
})

app.get("/tasks", (req,res) => {
    res.json(tasks);
})

app.get("/tasks/:id", (req,res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if(!task) {
        res.status(404).json({error: `No task with id ${id} exist`})
        return;
    }
    res.status(200).json(task);
})

app.listen(
    PORT, () => {
        console.log(`App server running at http://localhost:${PORT}`);
    }
)