const pool = require('../db')

const getAlltasks = async (req, res, next) => {
    try {
        const allTasks = await pool.query('SELECT * FROM task')
        res.json(allTasks.rows)
    } catch (error) {
        next(error);
    }

}       


const getTasks = async (req, res, next) => {
        try {
        const {id} = req.params // extrear el Id de la data
        const result = await pool.query('SELECT * FROM task WHERE id = $1', [id] ) //consulta a postgres con el SELECT del ID
    
        if(result.rows.length === 0)
        return res.status(404).json({
            message: 'task not found',
        })
        res.send(result.rows[0])
        } catch (error) {
            next(error)
        }
    
}



const createTask = async (req, res, next) => {
  try {
    const {title, category, description} = req.body;

    const result = await pool.query("INSERT INTO task (title, category, description) VALUES ($1, $2, $3) RETURNING *",[
        title,
        category,
        description,
    ]);
        res.json(result.rows[0])
   } catch (error) {
        next(error)
   }
}




const updateTasks = async (req, res, next) => {
  try {
    const {id} = req.params
    const {title, category, description} =req.body

    const result = await pool.query('UPDATE task SET title = $1, category = $2, description = $3  WHERE id = $4 RETURNING*', [
        title, category, description, id
    ])

    if (result.rows.length === 0)
    return res.status(404).json({
        message: 'task not found',
    })
    return res.json(result.rows[0]) 
    } catch (error) {
        next(error)
    }   
}

    



const deleteTask = async (req, res, next) => {
  try {
    const {id} = req.params

      const result = await pool.query('DELETE FROM task WHERE id = $1 RETURNING *', [id])

      if (result.rowCount === 0) 
          return res.status(404).json({
              message: "task no found",
          })
      
          return res.status(204).json({
            message: "succesfull"
          });
      } catch (error) {
          next(error)
    } 
    
}













module.exports = {
    getAlltasks,
    getTasks,
    createTask,
    updateTasks,
    deleteTask
}