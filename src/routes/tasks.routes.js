const {Router} = require('express')
const { Pool } = require('pg')
const {getAlltasks, getTasks, createTask, updateTasks, deleteTask} = require('../controllers/taks.controllers')


const router = Router()


router.get('/tasks', getAlltasks)
router.get('/tasks/:id', getTasks )
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTasks)
router.delete('/tasks/:id', deleteTask)


module.exports = router