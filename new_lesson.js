const your_self = ["Hakimbek", "Boboyev", 20, "QA Engineer", "Tashkent", "Uzbekistan"]
console.log(your_self[3])
your_self.pop()
console.log(your_self)

// function reverseArray(array){
//     let newArray = []
//     for(let i = array.length - 1; i >= 0; i--){
//         newArray.push(array[i])
//     }
//     return newArray
// }

// console.log(reverseArray(your_self))    

let number = [1,2,3,4,5,6]

for (let i = 0; i < number.length; i++){
    number[i] = number[i] * 2
}
console.log(number)

function randomSon(){
    const random = Math.floor(100000000+Math.random()*900000000);
    return random
}
console.log(randomSon())

