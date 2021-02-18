//深拷贝
//没办法处理函数
function deepCopy(data) {
    let obj = {};
    if (Array.isArray(data)) {
        obj = [];
        data.forEach((item, index) => {
            obj[index] = deepCopy(item);
        });
        return obj;
    } else if (data instanceof Object) {
        Object.keys(data).map((key) => {
            obj[key] = deepCopy(data[key]);
        });
        return obj;
    } else {
        return data;
    }
}

//浅拷贝
// Object.assign()
//JSON.stringify() JSON.parse()
