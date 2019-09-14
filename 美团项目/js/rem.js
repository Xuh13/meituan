;
(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        // 获取屏幕宽度
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 7.5; // 将屏幕宽度分成6.4份，
        //320/6.4     html的fontsize  = 50
        // 640/6.4    html的fontsize  =  100
        // 1份为1rem

        docEl.style.fontSize = rem + 'px';
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();

})(window);

