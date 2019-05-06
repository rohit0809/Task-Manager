// CRUD Create Read Update Delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error,client) => {
    if(error){
        return console.log('Unable to connect to database')
    }

    console.log('Connected Correctly!!')
    const db = client.db(databaseName)

    /* insert one example
    db.collection('users').insertOne({
        name: 'Sanjeev',
        age: 56
    }, (error,result) => {
        if(error){
            return console.log('Unable to insert user!!')
        }

        console.log(result.ops)
    })

    /* insert many
    db.collection('users').insertMany([{
        name: 'Shrirupa',
        age: 24
    },{
        name: 'Rashmi',
        age: 52
    }], (error,result) => {
        if(error){
            return console.log('Unable to insert user!!')
        }

        console.log(result.ops)
    })*/

    db.collection('tasks').insertMany([{
        description: 'Clean the house',
        completed: true
    },{
        description: 'Renew inspection',
        completed: false
    }, {
        description: 'Pot plants',
        completed: false
    }], (error,result) => {
        if(error){
            return console.log('Unable to insert tasks!!')
        }

        console.log(result.ops)
    })
})