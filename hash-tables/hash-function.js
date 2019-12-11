/* initial hash */

// function hash() {
//   let total = 0
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96
//     total = (total + value) % arrayLen
//   }
//   return total
// }

/* refining hash */

// function improvedHash(key, arrayLen) {
//   let total = 0
//   let WEIRD_PRIME = 31
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i]
//     let value = char.charCodeAt(0) - 96
//     total = (total * WEIRD_PRIME + value) % arrayLen
//   }
//   return total
// }

/* class definition */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }
  set(key, value) {
    let hashed = this._hash(key)
    // console.log(`keymap at index:${hashed}`, this.keyMap[hashed])
    if (!this.keyMap[hashed]) {
      this.keyMap[hashed] = [[key, value]]
    } else {
      this.keyMap[hashed].push([key, value])
    }
  }
  get(key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (key === this.keyMap[index][i][0]) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }
  keys() {
    let result = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!result.includes(this.keyMap[i][j][0])) {
            result.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return result
  }
  values() {
    let result = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!result.includes(this.keyMap[i][j][1])) {
            result.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return result
  }
}

let ht = new HashTable(17)

ht.set('purple', '#808080')
ht.set('red', '#818181')
ht.set('green', '#949596')
ht.set('plum', '#149596')
ht.set('salmon', '#249596')
ht.set('yellow', '#349596')
ht.set('maroon', '#449596')
ht.set('black', '#549596')
ht.set('white', '#649596')

// console.log(ht.get('green'))
// console.log('KEYMAP:', ht.keyMap)

console.log(ht.keys())
console.log(ht.values())
