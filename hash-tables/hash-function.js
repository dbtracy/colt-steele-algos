/* initial hash */

function hash() {
  let total = 0
  for (let char of key) {
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen
  }
  return total
}

/* refining hash */

function improvedHash(key, arrayLen) {
  let total = 0
  let WEIRD_PRIME = 31
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen
  }
  return total
}

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
      total = (total * WEIRD_PRIME + value) % arrayLen
    }
    return total
  }
  set(key, value) {
    let hashed = this._hash(key)
    if (!this.keyMap[hashed]) {
      this.keyMap[hashed] = [[key, value]]
    } else {
      this.keyMap[hashed].push([key, value])
    }
  }
}
