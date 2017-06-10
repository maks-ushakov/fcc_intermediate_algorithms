describe ("Arguments Optional", function () {

	it('addTogether(2, 3) should return 5.', function () {
		expect(addTogether(2, 3)).to.equal(5);
	});

	it('addTogether(2)(3) should return 5.', function () {
		expect(addTogether(2)(3)).to.equal(5);
	});

	it('addTogether(2, 3) should return a number.', function () {
		expect(addTogether(2, 3)).to.be.a('number');
	});

	it('addTogether(2)(3) should return a number.', function () {
		expect(addTogether(2)(3)).to.be.a('number');
	});

	it('addTogether("http://bit.ly/IqT6zt") should return undefined.', function () {
		expect(addTogether("http://bit.ly/IqT6zt")).to.be.undefined;
	});

	it('addTogether(2, "3") should return undefined.', function () {
		expect(addTogether(2, "3")).to.be.undefined;
	});

	it('addTogether(2)([3]) should return undefined.', function () {
		expect(addTogether(2)([3])).to.be.undefined;
	});

});

