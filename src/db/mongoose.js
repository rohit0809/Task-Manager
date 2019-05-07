const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'
const databaseName = 'task-manager-api'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Rohit',
//     age: 25
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!!', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Learn the Mongoose model',
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})