// accepts object, returns array of all values in
// object that have a typeof string

function collectStrings(obj) {
  let result = []
  let keys = Object.keys(obj)

  keys.forEach(key => {
    if (typeof obj[key] === "string") {
      result.push(obj[key])
    } else if (typeof obj[key] === "object") {
      result = result.concat(collectStrings(obj[key]))
    }
  })

  return result
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
