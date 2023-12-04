document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.getElementById('animated-cursor');

    var defaultCursorImages = ['/cursors/default/1.png', '/cursors/default/2.png', '/cursors/default/3.png', '/cursors/default/4.png', '/cursors/default/5.png', '/cursors/default/6.png', '/cursors/default/7.png', '/cursors/default/8.png']; // 光标帧的路径
    var textCursorImages = ['/cursors/text/1.png', '/cursors/text/2.png', '/cursors/text/3.png', '/cursors/text/4.png', '/cursors/text/5.png', '/cursors/text/6.png', '/cursors/text/7.png', '/cursors/text/8.png', '/cursors/text/9.png', '/cursors/text/10.png', '/cursors/text/11.png', '/cursors/text/12.png', '/cursors/text/13.png'];
    
    
    var currentFrame = 0;

    var cursorImages = defaultCursorImages;

    function updateCursor() {
        cursor.style.backgroundImage = 'url(' + cursorImages[currentFrame] + ')';
        currentFrame = (currentFrame + 1) % cursorImages.length;
    }

    setInterval(updateCursor, 100); // 每 100ms 更换一次帧
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = (e.clientX + window.scrollX) + 'px';
        cursor.style.top = (e.clientY + window.scrollY) + 'px';
        cursor.style.display = 'block';
    });

    document.addEventListener('selectionchange', function() {
        var selection = window.getSelection();
        
        if (selection && selection.toString().trim() !== '') {
            // 用户选择了文本，触发事件，可以在这里添加相应的处理代码
            cursorImages = textCursorImages; // 切换到文本光标
        } else {
            // 用户没有选择文本，不触发事件，可以在这里添加相应的处理代码
            cursorImages = defaultCursorImages; // 切换回默认光标
        }
    });

});