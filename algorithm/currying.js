// 函数式编程实现以下功能： （函数式编程科里化）
add(1)(2)(3) == 6
add(1, 2, 3) == 6
add(1)(2, 3) == 6
add(1, 2)(3) == 6

function add(...rest) {
	if (rest.length === 3) {
		return eval(rest.join('+'))
	} else if (rest.length === 1) {
		return function (...rest2) {
			if (rest2.length === 1) {
				return function (...rest3) {
					return eval([...rest, ...rest2, ...rest3].join('+'))
				}
			} else if (rest2.length === 2) {
				return eval([...rest, ...rest2])
			}
		}
	} else if (rest.length === 2) {
		return (...rest2) => {
			return eval([...rest, ...rest2].join('+'))
		}
	}
}
add(1)(2)(3)
add(1, 2, 3)
add(1)(2, 3)
add(1, 2)(3)