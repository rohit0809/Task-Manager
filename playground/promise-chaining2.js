require('../src/db/mongoose')
const Task = require('../src/models/tasks')

Task.findByIdAndDelete('5cd352b12e45580f10d6f385').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})