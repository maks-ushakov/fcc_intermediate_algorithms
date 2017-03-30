describe ("Diff Two Arrays", function () {
	it("should return an array", function() {
		expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.be.instanceof(Array);
	});

	it('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"]', function() {
		var arr1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];
		var arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
		var result = ["pink wool"];
    	expect(diffArray(arr1, arr2)).to.be.deep.equal(result)
 	 });

	it('["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool", "diorite"].', function() {
		var arr1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
		var arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
		var result = ["pink wool", "diorite"];
    	expect(diffArray(arr1, arr2)).to.be.deep.equal(result)
 	 });

	it('["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return []', function() {
		var arr1 = ["andesite", "grass", "dirt", "dead shrub"];
		var arr2 = ["andesite", "grass", "dirt", "dead shrub"];
		var result = [];
    	expect(diffArray(arr1, arr2)).to.be.deep.equal(result)
 	 });

	it('[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4]', function() {
		var arr1 = [1, 2, 3, 5];
		var arr2 = [1, 2, 3, 4, 5];
		var result = [4];
    	expect(diffArray(arr1, arr2)).to.be.deep.equal(result)
 	 });

	it('[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4]', function() {
		var arr1 = [1, "calf", 3, "piglet"];
		var arr2 = [1, "calf", 3, 4];
		var result = ["piglet", 4];
    	expect(diffArray(arr1, arr2)).to.be.deep.equal(result)
 	 });

	it('[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"]', function() {
		var arr1 = [];
		var arr2 = ["snuffleupagus", "cookie monster", "elmo"];
		var result = ["snuffleupagus", "cookie monster", "elmo"];
    	expect(diffArray(arr1, arr2)).to.be.deep.equal(result)
 	 });

	it('[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"]', function() {
		var arr1 = [1, "calf", 3, "piglet"];
		var arr2 = [7, "filly"];
		var result = [1, "calf", 3, "piglet", 7, "filly"];
    	expect(diffArray(arr1, arr2)).to.be.deep.equal(result)
 	 });
});

