//格式化字符串
function format(str, options) {
    let leftDelimiterIndex = str.indexOf('{'),
        rightDelimiterIndex = str.indexOf('}', leftDelimiterIndex + 1);

    if (leftDelimiterIndex > -1 && rightDelimiterIndex > -1 && leftDelimiterIndex < rightDelimiterIndex) {
        let subStr = str.slice(leftDelimiterIndex, rightDelimiterIndex);
        let rlIndex = subStr.lastIndexOf('{');
        let name = subStr.slice(rlIndex + 1);
        let matched = '{' + name + '}';
        if (options[name]) {
            str = str.replace(matched, options[name] || matched);
            return format(str, options);
        } else {
            return str;
        }
    } else {
        return str;
    }
}

function replace2(str, options) {
    let ll = str.indexOf('{');
    let rl = str.indexOf('}', ll);
    ll = str.lastIndexOf('{', rl);
    let name = str.slice(ll + 1, rl)
    str = str.replace('{' + name + '}', options[name] || '{' + name + '}')
    while(ll > -1 && rl > -1) {
        ll = str.indexOf('{', ll + 1);
        rl = str.indexOf('}', ll);
        ll = str.lastIndexOf('{', rl);
        name = str.slice(ll + 1, rl).trim();

        if (options[name] && options[name].indexOf('{') === -1 && options[name].indexOf('}') === -1) {
            str = str.replace('{' + name + '}', options[name]);
            ll += name.length;
        } else {
            return str;
        }
    }
    return str;
}

let str1 = "}}}}} {{{}{{name}";
console.log(replace2(str1, { name: '{lisa}', value: 'hello', greet: 'morning' }));

function format(str, options) {
    var newstr = '';
    var phstr = '';
    for (var c of str) {
      if (c === '{') {
        if (phstr[0] === c) {
          newstr += phstr;
          phstr = c;
        } else {
          phstr = c;
        }
      } else if (c === '}') {
        if (phstr !== '') {
          var name = phstr.slice(1, phstr.length);
          newstr += options.hasOwnProperty(name)? options[name]: phstr+c;
          phstr = '';
        } else {
          newstr += c;
        }
      } else {
        if (phstr !== '') {
          phstr += c;
        } else {
          newstr += c;
        }
      }
    }
    return newstr + phstr;
  }