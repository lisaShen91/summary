//多列排序
function quickSort(ary) {
    if (ary.length <= 1) return ary;
    let midIndex = ary.length % 2 == 0 ? ary.length / 2 : (ary.length + 1) / 2;
    let middle = ary[midIndex];
    let left = [];
    let right = [];
    for (let i = 0; i < ary.length; i++) {
        if (i == midIndex) continue;
        ary[i] > middle ? right.push(ary[i]) : left.push(ary[i]);
    }
    return [...quickSort(left), middle, ...quickSort(right)]
}

function uniq(ary) {
    return Array.from(new Set(ary))
}

function isArray(data) {
    return Object.prototype.toString.call(data) === '[object Array]';
}

/**
 *
 * @param {*} ary  = []
 * @param {*} orderKey 排序字段名
 * @param {*} asc 升序降序
 * return {a: [ { name: 'a', age: 29, weight: 119 },
  { name: 'a', age: 30, weight: 119 }]}
 */
function aOrder(ary, orderKey, isAsc = true) {
    let obj = {};
    let keys = ary.map(item => item[orderKey]);
    keys = uniq(isAsc ? quickSort(keys) : quickSort(keys).reverse());
    keys.forEach((key, index) => {
        //读取，对象的key可能会和添加的顺序不一致，所以添加index强制添加顺序作为读取key的顺序
        obj[`${index}-${key}`] = ary.filter(item => item[orderKey] === key)
    })
    return obj;
}

/**
 * @param {*} ary
 * @param {*} options {oderBy: 'name', order: 'asc'}
 */
function orderGroup(obj, key, isAsc) {
    if (isArray(obj)) {
        return aOrder(obj, key, isAsc);
    } else {
        for (let attr in obj) {
            obj[attr] = orderGroup(obj[attr], key, isAsc);
        }
        return obj;
    }
}


function getValues(obj) {
    console.log(obj);
    let ary = [];
    for (let attr in obj) {
        let data = isArray(obj[attr]) ? obj[attr] : getValues(obj[attr]);
        ary = ary.concat(data);
    }
    return ary;
}

function orderByMultiColumns(ary = [], rules = []) {
    let obj = ary;
    rules.map(rule => {
        obj = orderGroup(obj, rule.orderBy, rule.isAsc);
    })
    return getValues(obj);
}

var data = [
    {
        name: 'a',
        age: 13,
        weight: 100
    },
    {
        name: 'b',
        age: 15,
        weight: 101
    },
    {
        name: 'a',
        age: 12,
        weight: 80
    },
    {
        name: 'a',
        age: 12,
        weight: 101
    },
    {
        name: 'g',
        age: 10,
        weight: 89
    },
    {
        name: 'g',
        age: 8,
        weight: 89
    }
];
let orders = [{
    orderBy: 'name',
    isAsc: true
}, {
    orderBy: 'age',
    isAsc: false
},
{
    orderBy: 'age',
    isAsc: true
}];
console.log(orderByMultiColumns(data, orders));
