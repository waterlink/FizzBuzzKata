describe("makeFizzBuzzSequence()", function() {
  var sequence

  beforeEach(function() {
    sequence = makeFizzBuzzSequence()
  })

  it("is 1 when the number is 1", function() {
    expect(sequence[0]).toEqual("1")
  })

  it("is 2 when the number is 2", function() {
    expect(sequence[1]).toEqual("2")
  })

  it("is 19 when the number is 19", function() {
    expect(sequence[18]).toEqual("19")
  })

  it("is Fizz when the number is 3", function() {
    expect(sequence[2]).toEqual(FIZZ)
  })

  it("is Fizz when the number is 6", function() {
    expect(sequence[5]).toEqual(FIZZ)
  })

  it("is Buzz when the number is 5", function() {
    expect(sequence[4]).toEqual(BUZZ)
  })

  it("is Buzz when the number is 10", function() {
    expect(sequence[9]).toEqual(BUZZ)
  })

  it("is FizzBuzz when the number is 15", function() {
    expect(sequence[14]).toEqual(FIZZBUZZ)
  })

  it("is FizzBuzz when the number is 45", function() {
    expect(sequence[44]).toEqual(FIZZBUZZ)
  })

  it("is Fizz when the number is 13", function() {
    expect(sequence[12]).toEqual(FIZZ)
  })

  it("is Fizz when the number is 23", function() {
    expect(sequence[22]).toEqual(FIZZ)
  })

  it("is Fizz when the number is 32", function() {
    expect(sequence[31]).toEqual(FIZZ)
  })

  it("is FizzBuzz when the number is 35", function() {
    expect(sequence[34]).toEqual(FIZZBUZZ)
  })

  it("is Buzz when the number is 52", function() {
    expect(sequence[51]).toEqual(BUZZ)
  })

  it("is Buzz when the number is 54", function() {
    expect(sequence[53]).toEqual(FIZZBUZZ)
  })

  it("is Buzz when the number is 53", function() {
    expect(sequence[52]).toEqual(FIZZBUZZ)
  })
})
