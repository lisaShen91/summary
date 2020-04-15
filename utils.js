function transformationRgba(color) {
    let colors = color.toLowerCase();
    let arr = [];
    if (colors.indexOf('#') != -1) {
        for (var i = 1; i < 7; i += 2) {
            let str = colors.slice(i, i + 2);
            arr.push(parseInt(str, 16));
        }
        return arr;
    }
    //rgba(300,300,300)
    if (colors.indexOf('rgba') != -1) {
        let reg = /rgba\((.+)\)/;
        colors.replace(reg, function (a, b) {
            arr = b.split(',');
        });
        return arr;
    }
}
console.log(transformationRgba('#4A2971'));