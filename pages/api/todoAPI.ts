import connMongoDB  from "../../utils/mongoDB"
import Todo from "../../models/todoModel"
export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { title, desc } = req.body
    try {
      await connMongoDB()
      const todo = await Todo.create({
        title,
        desc
      }) 
      res.status(200).json(todo)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  } else if(req.method === 'GET') {
    try {
      await connMongoDB()
      const todos = await Todo.find()
      res.status(200).json(todos)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }
}
