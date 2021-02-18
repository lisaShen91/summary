
var obj = {
	sd: 1,
	a: 2
}
//underscore pluck方法简单实现
function pluck(data, key) {
	return data.map(item => item[key])
}
//underscore sortBy方法简单实现
function sortBy(data, key) {
	let resData = []
	let newData = {}
	data.map(item => {
		if (!newData[item[key]]) {
			newData[item[key]] = [item]
		} else {
			newData[item[key]].push(item)
		}
	})
	console.log(newData, Object.keys(newData).sort((a, b) => a - b))
	Object.keys(newData)
		.sort()
		.forEach(key => {
			resData.push(...newData[key])
		})
	return resData
}
var data = [{
		name: 'cn-shanghai-3b',
		age: 18,
	},
	{
		name: 'cn-shanghai-3a',
		age: 19,
	},
	{
		name: 'cn-shanghai-3b',
		age: 18,
	},
];
console.log(sortBy(data, 'name'))

//柯里化实现bing函数
function bind(fn, ctx) {
	let args = Array.prototype.slice.call(arguments, 2)
	return function () {
		let innerArgs = Array.prototype.slice.call(arguments, 0)
		fn.call(ctx, args.concat(innerArgs))
	}
}

function test() {
	console.log(arguments)
}
bind(test, this, '12')(3);









