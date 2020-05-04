const express = require('express');

const api = require('./api-model');

const router = express.Router();

router.post('/resources', (req, res) => {
    const resource = req.body;
  
    api.addResources(resource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resources' });
    });
  });

router.get('/resources', (req, res) => {
    api.listResources()
    .then(resource => {
      res.json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

router.post('/projects', (req, res) => {
    const project = req.body;
  
    api.addProjects(project)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new projects' });
    });
  });

router.get('/projects', (req, res) => {
    api.listProjects()
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

router.post('/tasks', (req, res) => {
    const task = req.body;
  
    api.addTasks(task)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

router.get('/tasks', (req, res) => {
    api.listTasks()
    .then(task => {
        res.json(task);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get tasks' });
      });
});

module.exports = router;