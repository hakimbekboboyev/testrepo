// const obj = {age:20}

// if (obj.age>30){
//     console.log("Adult")
// }else{
//     console.log("Child")
// }

// let result = (obj.age > 30) ? "Adult" : "Child"
// console.log(result)

// const obj2 = {ism:"Hakimbek"}
// let len_ism = obj2.ism.length
// if (len_ism <=10 ){
//     console.log("Short")
// }else if (len_ism > 10 && len_ism <= 20){
//     console.log("Medium")
// }
// else{
//     console.log("Long")
// }

// const array_juft = [2,4,6,8,10]
// for(let i in array_juft){
//     array_juft[i] = array_juft[i] * 2
// }
// console.log(array_juft)

// const array_juft2 = [2,7,14,19,20]
// for(let i of array_juft2){
//     if (i % 2 != 0){
//         console.log(i)
//     }else{
//         continue
//     }
// }

// const map1 = new Map([
//     ["ism", "Hakimbek"],
//     ["familiya", "Boboyev"],
//     ["yosh", 20],
//     ["manzil", "Tashkent"]
// ])
// map1.set("ism", "Hakimjon")

try{
    let x = 10%0
    console.log(x)
    if (x == Infinity){
        throw new Error("Infinity")
    }
} catch (error) {
    console.log("Error: " + "0 ga bolinmaydi")
}
finally{
    console.log("Run qilindi")
}