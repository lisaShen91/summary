
// 进入全屏：
function entryFullScreen() {
    var docE = document.documentElement;
    if (docE.requestFullScreen) {
        docE.requestFullScreen();
    } else if (docE.mozRequestFullScreen) {
        docE.mozRequestFullScreen();
    } else if (docE.webkitRequestFullScreen) {
        docE.webkitRequestFullScreen();
    }
}

// 退出全屏
function exitFullScreen() {
    var docE = document;
    if (docE.exitFullscreen) {
        docE.exitFullscreen();
    } else if (docE.mozCancelFullScreen) {
        docE.mozCancelFullScreen();
    } else if (docE.webkitCancelFullScreen) {
        docE.webkitCancelFullScreen();
    }
}
