// ==UserScript==
// @name         百度翻译净化加暗黑模式
// @description  去顶栏底栏,背景暗黑
// @author       SoClear
// @namespace    https://github.com/SoClear/scripts
// @homepage     https://github.com/SoClear/scripts
// @updateURL    https://cdn.jsdelivr.net/gh/SoClear/scripts@main/PurgeAndDarkBaiduFanyi.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/SoClear/scripts@main/PurgeAndDarkBaiduFanyi.user.js
// @version      0.1.0
// @match        https://fanyi.baidu.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`
        .header,
        .footer.cleafix,
        .divide-wrap,
        .need-collapse .details-cont-item:after, 
        .need-collapse.to-expand .details-cont-item:after,
        #app-read
        {
            display: none !important;
        }

        .main-outer,
        .from-to-exchange,
        .input-wrap,
        .ordinary-wrap,
        .sug-wrap,
        .dictionary-wrap.dictionary-wrap-f .simple-dict-f,
        .output-blank,
        .history-container
        {
            background-color: #000000 !important;
        }
       

       .select-from-language, .select-to-language {
           background-color: #101010 !important;
           border: 1px solid #666 !important;
        }

       .language-selected,
       .textarea,
       .ordinary-output
        {
           color: #999 !important;
        }

        .language-selected:hover {
           color: #2e82ff !important;
        }


        .sug-item.sug-item-selected {
            background-color: #101010 !important;
        }

        .sug-item.sug-item-selected .sug-translate {
            color: #eee !important;
        }

        .dictionary-wrap .dictionary-tags li,
        #side-nav .nav-ol .nav-sort-btn,
        #side-nav .nav-ol .nav-search-again,
        .domain-trans-wrapper .domain-trans-wrapper-inner,
        .domain-trans-wrapper .domain-trans-bottom,
        .history-items li
        {
            background-color: #111 !important;
        }

       
    `)
    
})();