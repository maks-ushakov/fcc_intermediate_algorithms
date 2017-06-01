describe ("Search and Replace", function () {

	it('pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].', function() {
    		assert.deepEqual(pairElement("ATCGA"), [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
 	 });

	it('pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].', function() {
    		assert.deepEqual(pairElement("TTGAG"), [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
 	 });

	it('pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].', function() {
    		assert.deepEqual(pairElement("CTCTA"), [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
 	 });

});

