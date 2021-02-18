function transformationRgba(color) {
  let colors = color.toLowerCase()
  let arr = []
  if (colors.indexOf("#") != -1) {
    for (var i = 1; i < 7; i += 2) {
      let str = colors.slice(i, i + 2)
      arr.push(parseInt(str, 16))
    }
    return arr
  }
  //rgba(300,300,300)
  if (colors.indexOf("rgba") != -1) {
    let reg = /rgba\((.+)\)/
    colors.replace(reg, function (a, b) {
      arr = b.split(",")
    })
    return arr
  }
}
console.log(transformationRgba("#4A2971"))

function testClosure() {
  global.i = 3
  Object.prototype.i = 2
  function closure() {
    // let i = 0;
    return function () {
      console.log(i)
    }
  }

  var getI = closure()
  getI()
}

//leecode 830
module.exports.largeGroupPositions = function (str) {
  let s = 0,
    e = 0,
    arr = [],
    len = str.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (str[i] == str[j]) {
        e = j
        if (j == len - 1 && e - s >= 2) {
          arr.push([s, e])
          return arr
        }
      } else {
        if (e - s >= 2) {
          arr.push([s, e])
        }
        i = j - 1
        e = s = j
        break
      }
    }
  }
  return arr
}

module.exports.reverse = function (x) {
  let s = x.toString()
  let newStr = ""
  let signal = ""

  if (isNaN(Number(s[0]))) {
    signal = true
    newStr = s[0]
  }
  let i = s.length - 1

  while (i >= signal ? 1 : 0) {
    newStr += s[i]
    i--
  }

  if (newStr >= -Math.pow(2, 31) && newStr <= Math.pow(2, 31)) {
    return newStr
  } else {
    return 0
  }
}

// 如何判断一个对象为{}.
function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

module.exports.isPalindrome = function (x) {
  let s = x.toString()
  let m = Math.ceil(s.length / 2)
  let i = 0,
    isH = true
  while (i <= m && isH) {
    if (s[i] != s[s.length - 1 - i]) {
      isH = false
      return false
    }
    i++
  }
  return true
}

module.exports.isPalindrome1 = function (x) {
  return x.toString().split("").reverse().join("") === x.toString()
}

module.exports.romanToInt = function (s) {
  var romanToInt = function (s) {
    let o = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      },
      n = 0
    for (let i = 0, len = s.length; i < len; i++) {
      const temp = o[s[i]]
      if (i < len - 1 && temp < o[s[i + 1]]) {
        n -= temp
      } else {
        n += temp
      }
    }
    return n
  }
}

module.exports.getRepeatNumber = function getRepeatNumber(ary) {
  let obj = {}
  let newAry = []
  for (let i = 0, len = ary.length; i < len; i++) {
    let item = ary[i]
    if (!obj[item]) {
      obj[item] = 1
    } else {
      obj[item]++
    }
  }
  for (let attr in obj) {
    if (obj[attr] > 1) {
      newAry.push(Number(attr))
    }
  }
  return newAry
}
