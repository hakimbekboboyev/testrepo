// object
const object = {
    ism: "Hakimbek",
    familiya: "Boboyev",
    yosh: 20,
    kasb: "QA Engineer",
    location: {
        country: "Uzbekistan",
        city: "Tashkent",
        street: "Yunusobod",
    }
  };


  object["work"] = "QA"
  let result = `I am ${object.ism} ${object.familiya} and ${object.yosh} years old, I am a ${object.kasb}`
  let res = `${object.ism}\n${object.familiya}`
  let uzunlik = object.ism.concat(object.familiya).length
  console.log(res)
  
