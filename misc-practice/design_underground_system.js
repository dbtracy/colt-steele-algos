var UndergroundSystem = function () {
  this.stations = {};
  this.customers = {};
}

UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  console.log('before checkin', this)
  if (this.customers[id] && this.customers[id].checkedInAt) return false
  else {
    // this.stations[stationName] = {}
    this.customers[id] = {
      checkedInAt: stationName,
      time: t
    }
  }
  console.log('after checkin', this)
}

UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  console.log('before checkout', this)
  let station = this.stations[stationName]
  let customer = this.customers[id]

  if (!customer) return false

  if (!station) {
    this.stations[stationName] = {}
    this.stations[stationName][customer.checkedInAt] = {
      count: 0,
      totalTime: 0,
    }
  }

  station[customer.checkedInAt].count++
  station[customer.checkedInAt].totalTime += t
  console.log('after checkout', this)
}

UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {

}

let stat = new UndergroundSystem()
stat.checkIn(1, 'london', 30)
stat.checkIn(2, 'derry', 50)
stat.checkIn(1, 'london', 80)
stat.checkOut(3, 'rogerburg', 75)
stat.checkOut(2, 'woolshead', 90)
stat.checkOut(1, 'derry', 80)

console.log(stat)
