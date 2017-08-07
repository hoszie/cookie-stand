
var pdxAirport = {
    minCust: 23,
    maxCust: 65,
    cookieAvg: 6.3,
    randomCust: function () {
        var avgHour = [];
        for (var i = 0; i < 12; i++) {
            var rando = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            avgHour.push( rando );
        }
        return avgHour;
    }
}
        
  

var pioneerSquare = {
    minCust: 3,
    maxCust: 24,
    cookieAvg: 1.2,
    randomCust: function () {
        var avgHour = [];
        for (var i = 0; i < 12; i++) {
            var rando = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            avgHour.push( rando );
        }
        return avgHour;
    }
}

var powells = {
    minCust: 11,
    maxCust: 38,
    cookieAvg: 3.7,
    randomCust: function () {
        var avgHour = [];
        for (var i = 0; i < 12; i++) {
            var rando = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            avgHour.push( rando );
        }
        return avgHour;
    }
}

var stJohns = {
    minCust: 20,
    maxCust: 38,
    cookieAvg: 2.3,
    randomCust: function () {
        var avgHour = [];
        for (var i = 0; i < 12; i++) {
            var rando = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            avgHour.push( rando );
        }
        return avgHour;
    }
}

var waterFront = {
    minCust: 2,
    maxCust: 16,
    cookieAvg: 4.6,
    randomCust: function () {
        var avgHour = [];
        for (var i = 0; i < 12; i++) {
            var rando = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
            avgHour.push( rando );
        }
        return avgHour;
    }
}