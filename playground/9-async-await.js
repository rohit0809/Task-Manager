const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a<0 || b<0){
                return reject('Numbers must be positive')
            }
            resolve(a+b)
        },2000)
    })
}

const dowork = async () => {
    const sum = await add(1,9)
    const sum1 = await add(sum,-20)
    const sum2 = await add(sum1,30)
    return sum2
}

dowork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log('Error: ',e)
})