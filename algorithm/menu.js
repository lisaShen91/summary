var data1 = [
    {
        value: '浙江',
        children: [
            {
                value: '杭州',
                children: [
                    {
                        value: '西湖',
                    },
                ],
            },
        ],
    },
    {
        value: '四川',
        children: [
            {
                value: '成都',
                children: [
                    {
                        value: '锦里',
                    },
                    {
                        value: '方所',
                    },
                ],
            },
            {
                value: '阿坝',
                children: [
                    {
                        value: '九寨沟',
                    },
                ],
            },
        ],
    },
];
var data = [
    {
        province: '浙江',
        city: '杭州',
        name: '西湖',
    },
    {
        province: '四川',
        city: '成都',
        name: '锦里',
    },
    {
        province: '四川',
        city: '成都',
        name: '方所',
    },
    {
        province: '四川',
        city: '阿坝',
        name: '九寨沟',
    },
];
function orderMenu(data, keys) {
    let obj = {};
    if (keys.length > 0) {
        let key = keys.shift();
        obj = uniq(data, key);
        for (let k in obj) {
            let children = orderMenu(obj[k].children, [...keys]);
            children ? (obj[k].children = children) : delete obj[k].children;
        }
        return Object.values(obj);
    }
}

function uniq(data, key) {
    if (!key) return;
    let obj = {};
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let uniqKey = item[key];
        if (obj[uniqKey] && obj[uniqKey].value) {
            obj[uniqKey].children.push(item);
        } else {
            obj[uniqKey] = {
                value: uniqKey,
                children: [item],
            };
        }
    }
    return obj;
}

console.time('t0');
let r = orderMenu(data, ['province', 'city', 'name']);
console.timeEnd('t0');

var transObject = function (tableData, keys) {
    let hashTable = {},
        res = [];
    for (let i = 0; i < tableData.length; i++) {
        let arr = res,
            cur = hashTable;
        for (let j = 0; j < keys.length; j++) {
            let key = keys[j],
                filed = tableData[i][key];
            if (!cur[filed]) {
                let pusher = {
                        value: filed,
                    },
                    tmp;

                if (j !== keys.length - 1) {
                    tmp = [];
                    pusher.children = tmp;
                }

                let length = arr.push(pusher),
                    index = length - 1;
                cur[filed] = {index};
                cur = cur[filed];
                arr = tmp;
            } else {
                cur = cur[filed];
                arr = arr[cur.index].children;
            }
        }
    }
    return res;
};

console.time('t1');
let r1 = transObject(data, ['province', 'city', 'name']);
console.timeEnd('t1');

// console.log(JSON.stringify(r, null, 4));
// console.log(JSON.stringify(r1, null, 4));

var orderMenu2 = (data,  keys) => {
    var arr = [], obj = {};
    for(let i = 0; i < data.length; i++) {
        let o = obj;
        let ary = arr;
        for(let j = 0; j < keys.length; j++) {
            let value = data[i][keys[j]];
            let item = {
                value
            };

            if (!o[value]) {
                if (j != keys.length - 1) {
                    item.children = [];
                }
                o[value] = {
                    i: ary.push(item) - 1
                };
                o = o[value];
                ary = item.children;
            } else {
                o = o[value];
                ary = ary[o.i].children;
            }
        }
    }
    return arr;
}

console.time('t2');
let r2 = orderMenu2(data, ['province', 'city', 'name']);
console.timeEnd('t2');

console.log(JSON.stringify(r2, null, 4));
console.log(JSON.stringify(data1, null, 4));
