describe ("Everything Be True", function () {
	var tests = [
	[[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex", true],
	[[{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex", false],
	[[{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age", false],
	[[{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat", false],
	[[{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat", true],
	[[{"single": "yes"}], "single", true],
	[[{"single": ""}, {"single": "double"}], "single", false],
	[[{"single": "double"}, {"single": undefined}], "single", false],
	[[{"single": "double"}, {"single": NaN}], "single", false]
	];
	
	for (var i = 0; i < tests.length; i++) {
	
		it('truthCheck( ' + JSON.stringify( tests[i][0]) + ', ' + tests[i][1] + ') should return ' + tests[i][2] , (function (testsItem) {
			return function () {
			expect(truthCheck(testsItem[0], testsItem[1])).to.be.equal(testsItem[2]);
			};

		})(tests[i]));
	}

});


