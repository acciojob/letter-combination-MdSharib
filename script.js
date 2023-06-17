function letterCombinations(input) {
  //Complete the function
	let table = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz",
	}

	let solutions =[];
	function solve(currIndex, calculatedString){
		if(input.length <= currIndex){
	           solutions.push(calculatedString);
			return;
		}
		let currChar = input[currIndex];
		for(let i=0; i<table[currChar].length; i++){
			solve(currIndex+1, calculatedString + table[currChar][i]);
		}
	}
	solve(0, "");
	return solutions;
}

module.exports = letterCombinations;
