function isPalindrome(input) {
	var standard = input.split('');
	var reverse = [];
	for (var i = standard.length; i >=0; i--){
		reverse.push(standard[i]);
	}
	var reverse = reverse.join('');
	var standard = standard.join('');

	if (standard===reverse){
		return "True";
	}
	else {
		return "False";
	}
};

isPalindrome("insticator");
isPalindrome("abba");