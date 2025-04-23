// IMPORTANT

let vl: unknown = 100.324324
let numVl = vl as number // we can use type assertion to convert unknown to any type

console.log(numVl.toFixed(2)) // 100.32
