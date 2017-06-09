describe ("Finders Keepers", function () {

	it('findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return a number.', function () {
		expect(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).to.be.a('number');
	});

	it('findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.', function () {
		expect(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).to.equal(8);
	});

	it('findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.', function () {
		expect(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })).to.be.undefined;
	});
});

