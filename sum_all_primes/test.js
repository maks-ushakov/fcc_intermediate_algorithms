describe ("Sum All Primes", function () {

	it('sumPrimes(10) should return a number.', function () {
		expect(sumPrimes(10)).to.be.a('number');
	});

	it('sumPrimes(10) should return 17.', function () {
		expect(sumPrimes(10)).to.equal(17);	
	});
	
	it('sumPrimes(977) should return 73156.', function () {
		expect(sumPrimes(977)).to.equal(73156);
	});
});
