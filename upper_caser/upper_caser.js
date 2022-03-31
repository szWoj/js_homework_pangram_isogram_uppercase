const UpperCaser = function (words) {
this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
words = this.words;

const result = this.words.map((word) => {
    return word.toUpperCase()
})
return result;
}

module.exports = UpperCaser;
