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
    expect(sequence[2]).toEqual("Fizz")
  })

  it("is Fizz when the number is 6", function() {
    expect(sequence[5]).toEqual("Fizz")
  })

  it("is Buzz when the number is 5", function() {
    expect(sequence[4]).toEqual("Buzz")
  })

  it("is Buzz when the number is 10", function() {
    expect(sequence[9]).toEqual("Buzz")
  })
})
