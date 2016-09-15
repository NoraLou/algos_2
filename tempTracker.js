
Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode())
over speeding up the insert() function.


function TempTracker () {
    this.minTemp = null;
    this.maxTemp = null;
    this.numTemps = null;
    this.sumTemps = 0;
}


TempTracker.prototype.insert = function(value){
    this.numTemps++;
    this.sumTemps += value;

    if ( this.maxTemp === null || value > this.maxTemp ) {
        this.maxTemp = value;
    } else if (this.minTemp === null || value < this.minTemp) {
        this.minTemp = value;
    }
}


TempTracker.prototype.getMean = function(){
    return this.numTemps/ this.sumTemps;
}
