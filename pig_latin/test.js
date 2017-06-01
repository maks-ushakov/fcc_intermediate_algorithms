describe ("Search and Replace", function () {

	it('translatePigLatin("california") should return "aliforniacay".', function() {
    	expect(translatePigLatin("california")).to.equal("aliforniacay");
 	 });

	it('translatePigLatin("paragraphs") should return "aragraphspay".', function() {
		expect(translatePigLatin("paragraphs")).to.equal("aragraphspay");
	});

	it('translatePigLatin("glove") should return "oveglay".', function() {
		expect(translatePigLatin("glove")).to.equal("oveglay");
	});

	it('translatePigLatin("algorithm") should return "algorithmway".', function() {
		expect(translatePigLatin("algorithm")).to.equal("algorithmway");
	});

	it('translatePigLatin("eight") should return "eightway".', function() {
		expect(translatePigLatin("eight")).to.equal("eightway");
	});

});

