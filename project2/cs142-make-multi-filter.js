"use strict";

function cs142MakeMultiFilter(originalArray) {
	var currentArray = originalArray;
	function arrayFilterer(filter, callback) {
		if (!filter) {
			return currentArray;
		}
		currentArray = currentArray.filter(filter);
		if (callback) {
			callback.call(originalArray, currentArray);
		}
		return arrayFilterer;
	}
	return arrayFilterer;
}