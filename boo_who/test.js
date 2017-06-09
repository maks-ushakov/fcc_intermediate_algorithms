describe ("Boo who", function () {

it("booWho(true) should return true.", function () { 
	expect(booWho(true)).to.be.true;
});

it("booWho(false) should return true.", function () { 
	expect(booWho(false)).to.be.true;
});

it("booWho([1, 2, 3]) should return false.", function () { 
	expect(booWho([1, 2, 3])).to.be.false;
});

it("booWho([].slice) should return false.", function () { 
	expect(booWho([].slice)).to.be.false;
});

it('booWho({ "a": 1 }) should return false.', function () { 
	expect(booWho({ "a": 1 })).to.be.false;
});

it("booWho(1) should return false.", function () { 
	expect(booWho(1)).to.be.false;
});

it("booWho(NaN) should return false.", function () { 
	expect(booWho(NaN)).to.be.false;
});

it('booWho("a") should return false.', function () { 
	expect(booWho("a")).to.be.false;
});

it('booWho("true") should return false.', function () { 
	expect(booWho("true")).to.be.false;
});

it('booWho("false") should return false.', function () { 
	expect(booWho("false")).to.be.false;
});

});
