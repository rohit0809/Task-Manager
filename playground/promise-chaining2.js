require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('5cd352b12e45580f10d6f385').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskandCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count  = await Task.countDocuments({completed:false})
    return count 
}

deleteTaskandCount('5cd352b12e45580f10d6f385').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})