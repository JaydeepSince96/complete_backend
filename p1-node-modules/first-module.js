 function add(a, b){
    return a + b;
}

module.exports = {
    add
}

//  You can export function something like this also 😎
module.exports.greet = function(name){
    console.log(`Your name is : ${name}`)
}