// class UndergroundSystem {
//   constructor() {
//     this.idMap = new Map();
//     this.durationMap = new Map();
//   }
//   checkIn(id, stationName, t) {
//     this.idMap.set(id, { stationName, checkInTime: t });
//   }
//   checkOut(id, stationName, t) {
//     const startStation = this.idMap.get(id);
//     const stationRoute = `${startStation.stationName}, ${stationName}`;
//     const duration = t - startStation.checkInTime;
//     if (this.durationMap.has(stationRoute)) {
//       this.durationMap.get(stationRoute).push(duration);
//     } else {
//       this.durationMap.set(stationRoute, [duration]);
//     }
//   }
//   getAverageTime(startStation, endStation) {
//     const durationList = this.durationMap.get(`${startStation}, ${endStation}`);
//     return durationList.reduce((a, b) => a + b) / durationList.length;
//   }
// }



class UndergroundSystem {
  constructor() {
    this.ids = new Map();
    this.durations = new Map;
  }
  checkIn(id, stationName, t) {
    this.ids.set(id, { stationName, checkInTime: t })
  }
  checkOut(id, stationName, t) {
    // set a start,end key in durations to t-startTime
    const startAndEnd = `${this.ids.get(id).stationName}, ${stationName}`
    if (!this.durations.has(startAndEnd)) {
      this.durations.set(startAndEnd, [t - this.ids.get(id).checkInTime])
    } else {
      this.durations.get(startAndEnd).push(t - this.ids.get(id).checkInTime)
    }
  }
  getAverageTime(startStation, endStation) {
    const durations = this.durations.get(`${startStation}, ${endStation}`)
    return durations.reduce((a, b) => a + b) / durations.length
  }
}

let stat = new UndergroundSystem()
stat.checkIn(1, 'london', 30)
stat.checkIn(2, 'derry', 50)
stat.checkIn(1, 'london', 80)
stat.checkIn(3, 'rogerburg', 75)
stat.checkOut(2, 'woolshead', 90)
stat.checkOut(1, 'derry', 80)
stat.checkOut(3, 'london', 100)
stat.checkIn(2, 'rogerburg', 920)
stat.checkOut(2, 'london', 1000)

console.log(stat)

console.log(stat.getAverageTime('rogerburg', 'london'))
