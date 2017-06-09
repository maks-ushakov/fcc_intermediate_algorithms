describe ("Smallest Common Multiple", function () {

	it('smallestCommons([1, 5]) should return a number.', function() {
		expect(smallestCommons([1, 5])).to.be.a("number");
	});

	it('smallestCommons([1, 5]) should return 60.', function() {
		expect(smallestCommons([1, 5])).to.equal(60);
	});

	it('smallestCommons([5, 1]) should return 60.', function() {
		expect(smallestCommons([5, 1])).to.equal(60);
	});

	it('smallestCommons([1, 13]) should return 360360.', function() {
		expect(smallestCommons([1, 13])).to.equal(360360);
	});

	it('smallestCommons([23, 18]) should return 6056820.', function() {
		expect(smallestCommons([23, 18])).to.equal(6056820);
	});


});

