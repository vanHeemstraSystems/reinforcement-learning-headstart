// init.js

/**
 *Initialize the model parameters and plot the initial probabilities.
 */

// Functions
const { model } = require('./definitions');
const { plotProbs } = require('./plotProbs');
const ts = require('@tensorflow/tfjs');

const init = () => {
	//create model class
	model.add(tf.layers.dense({units: 3, inputShape: [3], useBias: false, kernelInitializer: 'heNormal'}));
	model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
	plotProbs();
};

module.exports = { init };
