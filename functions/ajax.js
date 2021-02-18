var ajax = {
    get: function() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '/', true);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304) {
                console.log(xhr.responseText);
            }
        }
        xhr.send();
    },
    post: function(data) {
        let xhr = new XMLHttpRequest();
        xhr.open('post', '/', true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304) {
                console.log(xhr.responseText);
            }
        }
        xhr.send(data);
    }
}