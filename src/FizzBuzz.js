var FIZZ = "Fizz"
var BUZZ = "Buzz"
var FIZZBUZZ = FIZZ + BUZZ

function FizzBuzz(rules) {
  this.rules = rules

  this.makeSequence = function() {
    var array = []

    for (var number = 1; number <= 100; number++) {
      var rule = rules.find(function(rule) {
        return rule.isApplicable(number)
      })

      array.push(rule.replacement(number))
    }

    return array
  }
}

function FizzRule() {
  this.isApplicable = function(number) {
    return dividesBy(3)(number) ||
           containsDigit(3)(number)
  }

  this.replacement = function(number) {
    return FIZZ
  }
}

function BuzzRule() {
  this.isApplicable = function(number) {
    return dividesBy(5)(number) ||
           containsDigit(5)(number)
  }

  this.replacement = function(number) {
    return BUZZ
  }
}

function FizzBuzzRule(fizzRule, buzzRule) {
  this.isApplicable = function(number) {
    return fizzRule.isApplicable(number) &&
           buzzRule.isApplicable(number)
  }

  this.replacement = function(number) {
    return fizzRule.replacement(number) +
           buzzRule.replacement(number)
  }
}

function DefaultRule() {
  this.isApplicable = function(number) {
    return true
  }

  this.replacement = function(number) {
    return number.toString()
  }
}

function makeFizzBuzzSequence() {
  var fizzBuzz = new FizzBuzz([
    new FizzBuzzRule(new FizzRule(), new BuzzRule()),
    new FizzRule(),
    new BuzzRule(),
    new DefaultRule(),
  ])

  return fizzBuzz.makeSequence()
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
