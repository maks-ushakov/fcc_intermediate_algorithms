describe ("Search and Replace", function () {

	it('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].', function() {
    		assert.deepEqual( uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
 	 });


	it('uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].', function() {
    		assert.deepEqual( uniteUnique([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]]);
 	 });

	it('uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].', function() {
    		assert.deepEqual( uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
 	 });

	it('uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].', function() {
    		assert.deepEqual( uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8]);
 	 });

});
