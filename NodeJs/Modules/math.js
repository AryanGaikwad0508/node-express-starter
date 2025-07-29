const add = (a, b) => {
    return a + b;
    
}
const mult = (a, b) => {
    return a * b;
    
}
const sub  = (a, b) => {
    return a - b;
    
}

const PI = 3.214;

module.exports.add = add;
module.exports.mult = mult;

module.exports = {add, mult, sub, PI};