describe('FizzBuzz', function() {

	var fizzBuzz;

	beforeEach(function() {
		fizzBuzz = new FizzBuzz();

	});

	describe('multiples of 3', function() {

		it('should return fizz when number is divisible by 3', function() {
			expect(fizzBuzz.play(3)).toEqual('fizz');
		});


	});

	describe('multiples of 5', function() {

		it('should return buzz when number is divisible by 5', function() {
			expect(fizzBuzz.play(10)).toEqual('buzz');
		});

	});

	describe('multiples of 3&5', function() {
		it('should return fizzbuzz when number is divisible by 3 and 5', function(){
			expect(fizzBuzz.play(15)).toEqual('fizzbuzz');

		});

	});

	describe('is not divisible by 3 or 5', function() {
		it('should return the number', function() {
			expect(fizzBuzz.play(8)).toEqual(8);
		});

	});

});
