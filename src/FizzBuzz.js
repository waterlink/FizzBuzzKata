var FIZZ = "Fizz"
var BUZZ = "Buzz"
var FIZZBUZZ = FIZZ + BUZZ

function makeFizzBuzzSequence() {
  var array = []

  for (var number = 1; number <= 100; number++) {
    if (shouldReplaceWithFizzBuzz(number)) {
      array.push(FIZZBUZZ)
    } else if (shouldReplaceWithFizz(number)) {
      array.push(FIZZ)
    } else if (shouldReplaceWithBuzz(number)) {
      array.push(BUZZ)
    } else {
      array.push(number.toString())
    }
  }

  return array
}

function containsDigit(digit) {
  return function(number) {
    return lastDigit(number) == digit ||
           firstDigit(number) == digit
  }
}

function lastDigit(number) {
  return number % 10
}

function firstDigit(number) {
  return Math.floor(number / 10)
}

function dividesBy(divisor) {
  return function(number) {
    return number % divisor == 0
  }
}

var containsDigitThree = containsDigit(3)
var containsDigitFive = containsDigit(5)

dividesByThree = dividesBy(3)
dividesByFive = dividesBy(5)

function shouldReplaceWithFizz(number) {
  return dividesByThree(number) ||
         containsDigitThree(number)
}

function shouldReplaceWithBuzz(number) {
  return dividesByFive(number) ||
         containsDigitFive(number)
}

function shouldReplaceWithFizzBuzz(number) {
  return shouldReplaceWithFizz(number) &&
         shouldReplaceWithBuzz(number)
}
