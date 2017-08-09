function Stores( name, minCust, maxCust, cookieAvg, id) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.cookieAvg = cookieAvg;
    this.avgHour = [];
    this.hourlyCookieCount = [ '6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: '];
    this.id = id;
    this.renderRow();
}

Stores.prototype.averageCook = function () {
        for (var i = 0; i < this.hourlyCookieCount.length; i++) {
            var rando = (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.cookieAvg));
            this.avgHour.push( rando );
        }
        return this.avgHour;
    }

Stores.prototype.renderRow = function () {
    this.averageCook();
    console.log(this.agvHour);
    var tbody = document.getElementsByTagName( 'tbody')[0];
    var newRow = document.createElement( 'tr' );
    var title = document.createElement( 'td' );
    title.innerHTML = this.name;
    newRow.appendChild( title );
     for (var i = 0; i < this.avgHour.length; i++ ) {
        var newCell = document.createElement( 'td' );
        newCell.innerText = this.avgHour[i];
        newRow.appendChild( newCell);
    }
        tbody.appendChild( newRow );
}

var pdxAirport = new Stores( 'PDX Airport', 23, 65, 6.3, 'pdx-airport' );   
var pioneerSquare = new Stores( 'Pioneer Square', 3, 24, 1.2, 'pioneer-square');
var powells = new Stores( 'Powell\'s', 3, 24, 1.2, 'powells');
var stJohns = new Stores( 'St John\'s', 3, 24, 1.2, 'stjohns');
var waterFront = new Stores( 'Waterfront', 3, 24, 1.2, 'waterfront');


























// pdxAirport.renderRow();
// pioneerSquare.renderRow();
// powells.renderRow();
// stJohns.renderRow();
// waterFront.renderRow();






/*
var pdxAirport = {
    minCust: 23,
    maxCust: 65,
    cookieAvg: 6.3,              //This is how you get a random average between two points: BELOW
    totalCookies: 0,
    getTotal: function () {
        for (var i = 0; i < averagePerHour; i++);
        this.totalCookies += this.averagePerHour;
        console.log( this.getTotal);
    
    },
    randomCust: function () {
         var avgHour = [];
        for (var i = 0; i < hourCookCount.length; i++) {
            var rando = (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.cookieAvg));
            avgHour.push( rando );
        }
    this.averagePerHour = avgHour; // <-- needs 'this.' cause our own pro. AddTD not cause specia
   
    },
    addToDom: function () {
        var displayNum = document.getElementById( 'pdxAirport' );
        this.randomCust();
        for (var i = 0; i < hourCookCount.length; i++) {
            var item = document.createElement( 'li' );
            item.innerHTML = hourCookCount[i];        // [i] is one index at a time, 14 times
            displayNum.appendChild( item );       // assign item (li) to parent element (ul)
            console.log(this.averagePerHour);
            item.innerHTML = hourCookCount[i] + this.averagePerHour[i];
        }
   
    }
     
}
                  
  
                                                          // make var names more concise!!!!!
         

      
  

var pioneerSquare = {
    minCust: 3,
    maxCust: 24,
    cookieAvg: 1.2,
    randomCust: function () {
         var avgHour = [];
        for (var i = 0; i < hourCookCount.length; i++) {
            var rando = (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.cookieAvg));
            avgHour.push( rando );
        }
    this.averagePerHour = avgHour;
    },
    addToDom: function () {
        var displayNum = document.getElementById( 'pioneersquare' );
        this.randomCust();
        for (var i = 0; i < hourCookCount.length; i++) {
            var item = document.createElement( 'li' );
            item.innerHTML = hourCookCount[i];        //one index at a time, 14 times
            displayNum.appendChild( item );
            item.innerHTML = hourCookCount[i] + this.averagePerHour[i];

        }
        
    }   
}

var powells = {
    minCust: 11,
    maxCust: 38,
    cookieAvg: 3.7,
    randomCust: function () {
         var avgHour = [];
        for (var i = 0; i < hourCookCount.length; i++) {
            var rando = (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.cookieAvg));
            avgHour.push( rando );
        }
    this.averagePerHour = avgHour;
    },
    addToDom: function () {
        var displayNum = document.getElementById( 'powells' );
        this.randomCust();
        for (var i = 0; i < hourCookCount.length; i++) {
            var item = document.createElement( 'li' );
            item.innerHTML = hourCookCount[i];        //one index at a time, 14 times
            displayNum.appendChild( item );
            item.innerHTML = hourCookCount[i] + this.averagePerHour[i];

        }
        
    }   
}

var stJohns = {
    minCust: 20,
    maxCust: 38,
    cookieAvg: 2.3,
    randomCust: function () {
         var avgHour = [];
        for (var i = 0; i < hourCookCount.length; i++) {
            var rando = (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.cookieAvg));
            avgHour.push( rando );
        }
    this.averagePerHour = avgHour;
    },
    addToDom: function () {
        var displayNum = document.getElementById( 'stjohns' );
        this.randomCust();
        for (var i = 0; i < hourCookCount.length; i++) {
            var item = document.createElement( 'li' );
            item.innerHTML = hourCookCount[i];        //one index at a time, 14 times
            displayNum.appendChild( item );
            item.innerHTML = hourCookCount[i] + this.averagePerHour[i];

        }
        
    }   
}               



var waterFront = {
    minCust: 2,
    maxCust: 16,
    cookieAvg: 4.6,
    randomCust: function () {
        var avgHour = [];
        for (var i = 0; i < hourCookCount.length; i++) {
            var rando = (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.cookieAvg));
            avgHour.push( rando );
        }
    this.averagePerHour = avgHour;
    },
    addToDom: function () {
        var displayNum = document.getElementById( 'waterfront' );
        this.randomCust();
        for (var i = 0; i < hourCookCount.length; i++) {
            var item = document.createElement( 'li' );
            item.innerHTML = hourCookCount[i];        //one index at a time, 14 times
            displayNum.appendChild( item );
            item.innerHTML = hourCookCount[i] + this.averagePerHour[i];

        }
        
    }   

}   

pdxAirport.addToDom();
pioneerSquare.addToDom();
powells.addToDom();
stJohns.addToDom();
waterFront.addToDom();      





//more concise var names!



// control d
// control shift L

*/