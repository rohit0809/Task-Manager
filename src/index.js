const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else {
//         next()
//     }
// })

// app.use((req,res,next) => {
//     res.status(503).send('Site is under Maintainance.Try after some time!!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})

const Task = require('./models/tasks')
const User = require('./models/user')
const main = async () => {
    // const task = await Task.findById('5cdc5a7198bce62d88099444')
    // await task.populate('owner').execPopulate()

    const user = await User.findById('5cdc592f37025e2e0075bba5')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks) 
}

main()