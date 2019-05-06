// CRUD Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error,client) => {
    if(error){
        return console.log('Unable to connect to database')
    }

    console.log('Connected Correctly!!')
    const db = client.db(databaseName)

    // insert one example
    db.collection('users').insertOne({
        _id: id,
        name: 'Babu',
        age: 24
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
    })

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
    })*/
})