var invalidTransactions = function (transactions) {
  let invalid = [];
  let trans = {};
  for (let x of transactions) {
    // console.log('X:', x)
    let temp = x.split(',');
    let obj = {
      time: temp[1],
      amount: temp[2],
      city: temp[3],
      string: x
    };
    // console.log('OBJ:', obj)
    if (!trans[temp[0]]) {
      trans[temp[0]] = [];
    }
    // console.log('TRANS BEFORE:', trans)
    if (temp[2] > 1000) {
      invalid.push(x);
    }
    if (trans[temp[0]].length > 0) {
      for (let curr of trans[temp[0]]) {
        if (Math.abs(curr.time - obj.time) <= 60
          && curr.city !== obj.city) {
          invalid.push(x);
          invalid.push(curr.string);
        }
      }
    }
    trans[temp[0]].push(obj);
    // console.log('TRANS AFTER:', trans)
    // console.log('INVALID:', invalid)
  }
  return [...new Set(invalid)]
}

invalidTransactions(
  ["bob,689,1910,barcelona",
    "alex,696,122,bangkok",
    "bob,832,1726,barcelona",
    "bob,820,596,bangkok",
    "chalicefy,217,669,barcelona",
    "bob,175,221,amsterdam"])
