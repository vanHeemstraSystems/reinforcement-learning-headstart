// definitions.js

const tf = require('@tensorflow/tfjs');

const moves = ["ROCK", "PAPER", "SCISSORS"];
const model = tf.sequential();

module.exports = { moves, model };
