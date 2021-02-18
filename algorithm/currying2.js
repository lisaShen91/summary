function add() {
	var args = Array.prototype.slice.call(arguments);

	var fn = function () {
		var sub_arg = Array.prototype.slice.call(arguments);
		// 把全部的参数聚集到参数的入口为一个参数： args.concat(sub_arg)
		return add.apply(null, args.concat(sub_arg));
	}

	fn.valueOf = function () {
		return args.reduce(function (a, b) {
			return a + b;
		})
	}

	return fn;
}

function add() {
	var args = Array.prototype.slice.call(arguments);

	var fn = function () {
		args.push(...arguments);
		return fn;
	}

	fn.valueOf = function () {
		return args.reduce(function (a, b) {
			return a + b;
		})
	}

	return fn;
}
add(1, 2)(3)

const curry = (fn, ...args) => args.length < fn.length ?
	(...arguments) => curry(fn, ...args, ...arguments) : fn.apply(null, ...args);

function add(a, b, c, d) {
	return a + b + c + d
}
var sum = curry(add);
console.log(sum(1)(2)(3)(4))
console.log(sum(1, 2)(3)(4))
console.log(sum(1, 2, 3, 4))
console.log(sum(1)(2, 3)(4))