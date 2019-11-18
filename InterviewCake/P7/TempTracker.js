function TempTracker() {
    this.tempCount = [];
    this.totalCount = 0;
    this.totalTemp = 0;
    this.maxTemp = null;
    this.minTemp = null;
    this.mode = null;
}

//Code Can Be Cleaned Up By Initialliazing tempCount as 0's
TempTracker.prototype.insert = function (item) {
    this.tempCount[item] = (this.tempCount[item]) ? this.tempCount[item]++ : 1;
    if (this.maxTemp === null || item > this.maxTemp) {
        this.maxTemp = item;
    }
    if (this.minTemp === null || item < this.minTemp) {
        this.minTemp = item;
    }
    if (this.mode === null || this.tempCount[item] > this.tempCount[this.mode]) {
        this.mode = item;
    }
    this.totalTemp += item;
    this.totalCount++;

};

TempTracker.prototype.getMax = function () {
    return this.maxTemp;
};

TempTracker.prototype.getMin = function () {
    return this.minTemp
};

TempTracker.prototype.getMean = function () {
    return this.totalTemp / this.totalCount;
};

TempTracker.prototype.getMode = function () {
    return this.mode;
};

let temps = new TempTracker();

temps.insert(1);
temps.insert(2);
temps.insert(5);
temps.insert(15);
temps.insert(67);
temps.insert(0);
temps.insert(110);
temps.insert(2);

console.log(temps.getMax());
console.log(temps.getMin());
console.log(temps.getMode());
console.log(temps.getMean());
