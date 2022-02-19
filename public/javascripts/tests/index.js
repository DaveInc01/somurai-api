;
const shouldEqual = (a, b) => a === b;
const test = () => {
    const testValues = [
        shouldEqual(sum(3, 1), 4),
        shouldEqual(sum(12, 8), 20)
    ]
    testValues.forEach(elem => {
        if (!elem) console.error('Test failed')
    }) 
    //return testValues.filter(i => i).length === testValues.length;
}
// module.exports = {shouldEqual}

test();