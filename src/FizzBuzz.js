function makeFizzBuzzSequence() {
  var array = []
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      array.push("Fizz")
    } else {
      array.push(i.toString())
    }
  }
  return array
}
