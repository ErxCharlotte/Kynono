var cursorFrames = {
    default: [
        '/cursors/default/1.png', '/cursors/default/2.png', '/cursors/default/3.png', '/cursors/default/4.png', '/cursors/default/5.png', '/cursors/default/6.png', '/cursors/default/7.png', '/cursors/default/8.png'
    ],
    pointer: [
        '/cursors/text/1.png', '/cursors/text/2.png', '/cursors/text/3.png', '/cursors/text/4.png', '/cursors/text/5.png', '/cursors/text/6.png', '/cursors/text/7.png', '/cursors/text/8.png', '/cursors/text/9.png', '/cursors/text/10.png', '/cursors/text/11.png', '/cursors/text/12.png', '/cursors/text/13.png'
    ],
};

var currentCursorState = 'default';
var cursorInterval;

function setCursorState(state) {
    if (cursorFrames[state]) {
        clearInterval(cursorInterval);
        currentFrame = 0; // 重置当前帧
        currentCursorState = state;
        cursorInterval = setInterval(function() {
            cursor.style.backgroundImage = 'url(' + cursorFrames[state][currentFrame] + ')';
            currentFrame = (currentFrame + 1) % cursorFrames[state].length;
        }, 100); // 根据需要调整间隔时间
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.getElementById('animated-cursor');
    setCursorState('default'); // 设置初始状态

    document.querySelectorAll('a').forEach(function(el) {
        el.addEventListener('mouseenter', function() { setCursorState('pointer'); });
        el.addEventListener('mouseleave', function() { setCursorState('default'); });
    });

    // ... 监听其他事件以设置其他状态
});

