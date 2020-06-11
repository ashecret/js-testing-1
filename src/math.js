// intentionaly broken
const sum = (a, b) => a - b
const subtract = (a, b) => a - b

// pointless, just to simulate async function
const sumAsync = (...args) => Promise.resolve(sum(...args))
const subtractAsync = (...args) => Promise.resolve(subtract(...args))

module.exports = { sum, subtract, sumAsync, subtractAsync }
