// plotProbs

/**
 * Plot the probabilities of the choosing a move for each of the my moves.
 */


const plotProbs() {
	var divs = ['div1', 'div2', 'div3']
	var probs;
	var data;
	var xs;
	var logits;
	for(var i=0;i<3;i++){
		xs = tf.tensor2d(convertToOneHot(moves[i]), [1, 3]);
		logits = model.predict(xs).arraySync()[0];
		probs = tf.softmax(logits).arraySync();
		data = [
			{
				x:moves,
				y:probs,
				type:'bar'
			}
		];

		var layout = {
			title: 'What should I play against ' + moves[i] + '?',
			width: 450,
			height: 300

		};
		Plotly.newPlot(divs[i], data, layout);
	}
}

module.exports = { plotProbs };
