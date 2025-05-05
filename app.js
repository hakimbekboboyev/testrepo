// // object
// const object = {
//     ism: "Hakimbek",
//     familiya: "Boboyev",
//     yosh: 20,
//     kasb: "QA Engineer",
//     location: {
//         country: "Uzbekistan",
//         city: "Tashkent",
//         street: "Yunusobod",
//     }
//   };


//   object["work"] = "QA"
//   let result = `I am ${object.ism} ${object.familiya} and ${object.yosh} years old, I am a ${object.kasb}`
//   let res = `${object.ism}\n${object.familiya}`
//   let uzunlik = object.ism.concat(object.familiya).length
//   console.log(res)
  
// const a = BigInt(10)    
// const b = BigInt(20)
// const mid = (a + b) / 2n
// const user = { name: "Ali", age: a.toString() };
// const jsonStr = JSON.stringify(user);
// console.log(jsonStr); // {"name":"Ali","age":25}

// let email = "hakimbekboboyev@gmail.com"
// let stat = false
// for(let i = 0; i<email.length; i++){
//     if(email[i] == "a"){
//         stat = true
//         break
//     }else{
//         continue
//     }
// }
// console.log(stat=== true ? "Topildi" : "Topilmadi")
// console.log(email.includes('@'))

// let inputx = prompt("Ismingizni kiriting: ")
// console.log(inputx)


// let str = "hello world"

// let arrayStr = ["hello", "world", "hi", "everyone", "goodbye"]

// for (let i = 0; i<arrayStr.length; i++){
//     console.log(toUpperOne(arrayStr[i]))
// }

// function toUpperOne(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }
// console.log(ASCii("A")) // 65
// console.log(ASCii("Z")) // 90
// console.log(ASCii("a")) // 97
// console.log(ASCii("z")) // 122
// console.log(ASCii("0")) // 48   
// console.log(ASCii("9")) // 57
// console.log(ASCii(" ")) // 32
// console.log(ASCii("!")) // 33
// console.log(ASCii("@")) // 64
// console.log(ASCii("#")) // 35
// console.log(ASCii("$")) // 36
// console.log(ASCii("%")) // 37
// console.log(ASCii("^")) // 94
// console.log(ASCii("&")) // 38
// console.log(ASCii("*")) // 42
// console.log(ASCii("(")) // 40
// console.log(ASCii(")")) // 41

const arrayX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arrayY = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// arrayX.push(...arrayY)
// console.log(arrayX)
arrayX.forEach((item, index) => {
    if (item % 2 == 0) {
        console.log(item)
    } else {
        console.log(`${index+1}-indexdagi son juft emas`)
    }
}
)
