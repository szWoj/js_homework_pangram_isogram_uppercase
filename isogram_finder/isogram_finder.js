const IsogramFinder = function (word) {
this.word = word.toLowerCase()
}

IsogramFinder.prototype.isIsogram = function () {
const sortedWord = Array.from(this.word).sort();

const result = sortedWord.every((letter, i) => {
    // if (i === (sortedWord.length - 1)){
    //     return false
    // }
    return letter !== sortedWord[i - 1]
})

return result;
}

module.exports = IsogramFinder;
