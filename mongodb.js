// CRUD Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error,client) => {
    if(error){
        return console.log('Unable to connect to database')
    }

    console.log('Connected Correctly!!')
    const db = client.db(databaseName)

    // db.collection('users').findOne({_id: new ObjectID("5cd08cf5e2e079118c296c07")}, (error,user) => {
    //     if(error){
    //         return console.log('Unable to fetch!!')
    //     }

    //     console.log(user)
    // })

    db.collection('users').find({age: 24}).toArray((error,users)  => {
        console.log(users)
    })

    db.collection('users').find({age: 24}).count((error,count)  => {
        console.log(count)
    })
})