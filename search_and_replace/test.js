describe ("Search and Replace", function () {
	it("Should return a string", function() {
		assert.isString(myReplace("This is a Number", "Number", "string"), "Not a String" );
	});

	it('myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall"', function() {
    		assert.equal( myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall");
 	 });

	it('myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return ""He is Sitting on the couch"', function() {
    		assert.equal( myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch" );
 	 });

	it('myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error"', function() {
    		assert.equal( myReplace("This has a spellngi error", "spellngi", "spelling") , "This has a spelling error" );
 	 });

	it('myReplace("His name is Tom", "Tom", "john") should return "His name is John"', function() {
    		assert.equal( myReplace("His name is Tom", "Tom", "john") ,"His name is John" );
 	 });
	
	it('myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms"', function() {
    		assert.equal(myReplace("Let us get back to more Coding", "Coding", "algorithms") , "Let us get back to more Algorithms");
 	 });


});

