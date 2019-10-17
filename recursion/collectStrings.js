// accepts object, returns array of all values in
// object that have a typeof string

function collectStrings(obj) {

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

collectStrings(obj) // ["foo", "bar", "baz"])
