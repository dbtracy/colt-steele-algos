// accepts object, finds all values which are
// numbers and converts them to strings

function stringifyNumbers(obj) {
  let newObj = {}
  let keys = Object.keys(obj)

  keys.forEach(key => {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString()
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  });

  return newObj
}


let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}


console.dir(stringifyNumbers(obj))
console.log(typeof obj.num)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
