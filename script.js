function swapNumber(arr, i, j) {
	let x = arr[i];
	arr[i] = arr[j];
	arr[j] = x;
}

function rearrangeNumber(arr, i, j) {
	while (i < j) {
		swapNumber(arr, i++, j--);
	}
}

function permutationStep(num) {

	if (!num || num.length == 0) {
		return -1;

	} else if (!Number(num)) {
		return -1;
	}

	let string = num.toString();

	let l = string.length;
	if (l <= 1) {
		return -1
	}

	let stringArray = string.split('');
	stringArray.sort();

	while (true) {
		//check if the num is greater than input number 
		//if true return the value
		if (Number(stringArray.join('')) > num) {
			return Number(stringArray.join(''));
		}
		//i is largest index of stringArray such that stringArray[i-1] is less than stringArray[i]
		let i = l - 1;
		while (stringArray[i - 1] >= stringArray[i]) {
			//check if i is the first index
			//if true its last possible permutation
			if (--i == 0) {
				return -1;
			}
		}

		//j is the highest index next to i such that stringArray[j] is greater than stringArray[i-1]
		let j = l - 1;
		while (j > i && stringArray[j] <= stringArray[i - 1]) {
			j--;
		}

		//swap character of array at index i-1 with index j
		swapNumber(stringArray, i - 1, j)

		//rearrange substring of array within given index in ascending order until i is less than l-1
		rearrangeNumber(stringArray, i, l - 1);
	}
}

function onSubmit() {
	let inputVal = document.getElementById('inputValue').value;
	let outputVal = permutationStep(inputVal);
	document.getElementById("output").innerHTML = `Output: ${outputVal}`;
}