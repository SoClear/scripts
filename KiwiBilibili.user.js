// ==UserScript==
// @name         bilibili适配kiwi浏览器桌面版模式
// @namespace    https://github.com/SoClear/scripts
// @homepage     https://github.com/SoClear/scripts
// @updateURL    https://cdn.jsdelivr.net/gh/SoClear/scripts@main/KiwiBilibili.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/SoClear/scripts@main/KiwiBilibili.user.js
// @version      0.1.0
// @description  bilibili适配kiwi浏览器桌面版模式
// @author       soclear
// @match        https://t.bilibili.com/*
// @match        https://message.bilibili.com/*
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('aside.left').style.paddingLeft = '20vw'
    document.querySelector('.dialog').style.paddingBottom = '6vh'
})();
