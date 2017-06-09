describe ("Drop It", function () {

	it('dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return an Array.', function () {
		expect(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})).to.be.an.instanceof(Array);
	});

	it('dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].', function () {
		expect(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})).to.deep.equal([3, 4]);
	});

	it('dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].', function () {
		expect(dropElements([0, 1, 0, 1], function(n) {return n === 1;})).to.deep.equal([1, 0, 1]);
	});

	it('dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].', function () {
		expect(dropElements([1, 2, 3], function(n) {return n > 0;})).to.deep.equal([1, 2, 3]);
	});

	it('dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].', function () {
		expect(dropElements([1, 2, 3, 4], function(n) {return n > 5;})).to.deep.equal([]);
	});

	it('dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].', function () {
		expect(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})).to.deep.equal([7, 4]);
	});

	it('dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].', function () {
		expect(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})).to.deep.equal([3, 9, 2]);
	});

});

