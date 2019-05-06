const doWorkPromise = new Promise((resolve,reject) => {
    setTimeout( () => {
        //resolve([1,2,5,9])
        reject('This is errorrrrr!!!')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success '+ result)
}).catch((error) => {
    console.log('Error!! '+ error)
})