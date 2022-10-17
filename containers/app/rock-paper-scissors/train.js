function train(reward){
	var phase = document.getElementsByName('phase')
	if(phase[0].checked){
		
		var intMove = convertToOneHot(myMove);
		var xs = tf.tensor2d(intMove, [1,3]);
		var logits = model.predict(xs).arraySync()[0];

		//update model
		logits[opMoveIdx] = logits[opMoveIdx] + reward;
		const ys = tf.tensor2d(logits, [1, 3])
		model.fit(xs, ys).then(()=>{
			plotProbs();
		});
	}
}
