describe ("Search and Replace", function () {

	it('steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].', function() {
    		assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"]);
 	 });

	it('steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].', function() {
    		assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
 	 });

	it('steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].', function() {
    		assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
 	 });

	it('steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].', function() {
    		assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
 	 });


});

