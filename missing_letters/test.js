describe ("Missing leters", function () {

	it('fearNotLetter("abce") should return string.', function() {
		expect(fearNotLetter("abce")).to.be.a('string');
	});

	it('fearNotLetter("abce") should return "d".', function() {
		expect(fearNotLetter("abce")).to.equal("d");
	});

	it('fearNotLetter("abcdefghjklmno") should return string.', function() {
		expect(fearNotLetter("abcdefghjklmno")).to.be.a('string');
	});

	it('fearNotLetter("abcdefghjklmno") should return "i".', function() {
		expect(fearNotLetter("abcdefghjklmno")).to.equal("i");
	});

	it('fearNotLetter("bcd") should return undefined.', function() {
		expect(fearNotLetter("bcd")).to.be.an('undefined');
	});

	it('fearNotLetter("yz") should return undefined.', function() {
		expect(fearNotLetter("yz")).to.be.an('undefined');
	});

});
