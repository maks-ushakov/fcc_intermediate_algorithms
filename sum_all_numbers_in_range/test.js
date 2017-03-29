describe ("Sum all numbers in range", function () {
	it("Should return a number", function() {
		assert.isNumber(sumAll([1,4]), "Not a number" );
	});

	it("Should sumAll([1,4])  return 10", function() {
    		assert.equal( sumAll([1,4]), 10 );
 	 });

	it("Should sumAll([1,4]) also return 10", function() {
    		assert.equal( sumAll([1,4]), 10 );
 	 });

	it("Should sumAll([5,10]) return 45", function() {
    		assert.equal( sumAll([5,10]), 45 );
 	 });

	it("Should sumAll([10,5]) return 45", function() {
    		assert.equal( sumAll([10,5]), 45 );
 	 });

});

