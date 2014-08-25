var Arrays = function() {};

Arrays.apply = function(x, callback){
	for (var i=0; i<x.length; i++) {
		callback(x[i], i, x.length);
	}
};

Arrays.fill = function(n, callback) {
	var x = [];
	for (var i=0; i<n; i++) {
		x.push(callback(i, n));
	}
	return x;
};

Arrays.range = function(start, stop) {
	var x = [];
	var i = start;
	do {
		x.push(i++);
	} while (i <= stop);
	return x;
};

Arrays.transform = function(x, callback) {
	var y = [x.length];
	for (var i=0; i<x.length; i++) {
		y[i] = callback(x[i]);
	}
	return y;
};

Arrays.filter = function(x, callback) {
	var y = [];
	for (var i=0; i<x.length; i++) {
		if (callback(x[i])) {
			y.push(x[i]);
		}
	}
	return y;
};

// TODO recursive operations
Arrays.aggregate = function(x, a0, callback) {
	var a = a0;
	for (var i=0; i<x.length; i++) {
		a = callback(a, x[i], i);
	}
	return a;
};

Arrays.sum = function(x) {
	return Arrays.aggregate(x, 0, function(a, xi, i) {
		return a + xi;
	});
};

Arrays.sum = function(x, prop) {
	return Arrays.aggregate(x, 0, function(a, xi, i) {
		return a + xi[prop];
	});
};

Arrays.find = function(x, callback) {
	for (var i=0; i<x.length; i++) {
		if (callback(x[i], i)) {
			return x[i];
		}
	}
	return null;
};
