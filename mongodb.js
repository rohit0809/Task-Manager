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

//    db.collection('users').updateOne({
//         _id: new ObjectID("5cd08cf5e2e079118c296c07")
//     },{
//         // $set : {
//         //     name: 'Rohit Anand'
//         // }
//         $inc : {
//             age: 1
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

//    db.collection('users').deleteMany({
//        age: 24
//    }).then((result) => {
//        console.log(result)
//    }).catch((error) => {
//        console.log(error)
//    })

        db.collection('tasks').deleteOne({
           description: 'Clean the house'
       }).then((result) => {
           console.log(result)
       }).catch((error) => {
           console.log(error)
       })
})
