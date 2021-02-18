// 已知如下数组：（数组方法掌握运用）
// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
function flatten(array) {
	let ary = []
	array.forEach(item => {
		if (Array.isArray(item)) {
			ary.push(...flatten(item))
		} else {
			ary.push(item)
		}
	})
	return ary
}
var arr = [
	[1, 2, 2],
	[3, 4, 5, 5],
	[6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
]
// 掘金上看到的 ,用法同es2019的新的api Array.flat 相同
const arr1 = [1, 2, [3, 4]]
flat = function (depth = 1) {
	let arr = Array.prototype.slice.call(this)
	if (depth === 0) return arr
	return arr.reduce((pre, cur) => {
		if (Array.isArray(cur)) {
			// 需要用 call 绑定 this 值，否则会指向 window
			return [...pre, ...flat.call(cur, depth - 1)]
		} else {
			return [...pre, cur]
		}
	}, [])
}
console.log(flat.call(arr1))