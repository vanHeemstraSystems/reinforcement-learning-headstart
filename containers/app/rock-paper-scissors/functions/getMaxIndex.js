// getMaxIndex.js

/**
 * Choose the index of the maximum value from the array.
 *
 * Params: Array of values
 * Return: Index of the max value
 */

const getMaxIndex = (values) => {
	var max=values[0];
	var index=0;

	for(var i=1;i<values.length;i++){
		if(values[i]>max){
			max = values[i];
			index = i;
		}
	}
	return index;
}

module.exports = { getMaxIndex }
