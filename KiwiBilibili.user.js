// ==UserScript==
// @name         bilibili适配kiwi浏览器桌面版模式
// @namespace    https://github.com/SoClear/scripts
// @homepage     https://github.com/SoClear/scripts
// @updateURL    https://cdn.jsdelivr.net/gh/SoClear/scripts@main/KiwiBilibili.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/SoClear/scripts@main/KiwiBilibili.user.js
// @version      0.1.0
// @description  bilibili适配kiwi浏览器桌面版模式
// @author       soclear
// @match        https://www.bilibili.com/video/*
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('.bpx-player-control-mask').style.background = 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))'
})();
