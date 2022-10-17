'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  wordCounts = {}
  list = phrase.split(' ')

  for (const i in list){
    if (wordCounts[list[i]){
      wordCounts[list[i] += 1
    } else {
      wordCounts[list[i] = 1
    }
  }
  return wordCounts
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
}
    if (! melonPrices.hasOwnProperty(price) ){
      return
    }
    return melonPrices[price].sort()
}
