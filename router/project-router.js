const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

//requests start here

//add a resource
router.post('/resources', (req, res) => {
    const body = req.body;

    Projects.addResource(body)
        .then(added => {
            if(body.name) {
                res.status(201).json(added);
            }
            else {
                res.status(400).json({
                    errorMessage: "A name field is required. Please add one."
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "There was an error creating this resource."
            })
        })
});

//get resources
router.get('/resources',(req, res) => {
    Projects.findResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "There was an error getting the resource list."
            })
        })
})

//add project
router.post("/", (req, res) => {
    const body = req.body;

    Projects.addProject(body)
        .then(added => {
            if(body.name === "" || body.name === undefined) {
                res.status(400).json({
                    errorMessage: "The post is missing a Name field. Please enter it."
                })
            }
            else {
                res.status(201).json(added);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errorMessage: "There was an error creating this project."
            })
        })
})

//get projects
router.get("/", (req, res) => {
    Projects.find()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "There was an error retrieving the project list."
            })
        })
})

//add task
router.post("/tasks", (req, res) => {
    const body = req.body;

    Projects.addTask(body)
        .then(added => {
            if(body.description && body.project_id) {
                res.status(201).json(added);
            }
            else {
                res.status(400).json({
                    errorMessage: "Please add a description and an ID of an existing post."
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "There was an error adding this task."
            })
        })
})

//get tasks
router.get('/tasks', (req, res) => {
    Projects.findTask()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "There was an error finding this task"
            })
        })
})

module.exports = router;