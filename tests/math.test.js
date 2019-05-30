const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math.js')

test('Should calculate total with tip', () => {
    const total = calculateTip(10,.3)

    expect(total).toBe(13)

    // if(total !== 13){
    //     throw new Error('Total tip should be 13. Got '+total)
    // }

})

test('Should convert farenheit to celcius', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert celcius to farenheit', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     },2000)
// })

test('Add two numbers', (done) => {
    add(2,3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('Add two numbers async/await', async () => {
    const sum = await add(5,10)
    expect(sum).toBe(15)
})

