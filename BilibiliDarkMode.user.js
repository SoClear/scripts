// ==UserScript==
// @name         bilibili暗黑模式
// @description  bilibili黑色模式
// @namespace    https://github.com/SoClear/scripts
// @homepage     https://github.com/SoClear/scripts
// @updateURL    https://cdn.jsdelivr.net/gh/SoClear/scripts@main/BilibiliDarkMode.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/SoClear/scripts@main/BilibiliDarkMode.user.js
// @version      0.1.0
// @author       soclear
// @match        https://*.bilibili.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // 当前页面地址
    let url = window.location.href

    if (url.startsWith("https://message.bilibili.com/pages/nav/index_new_pc_sync")
        || url.startsWith("https://message.bilibili.com/pages/nav/header_sync")
    ) {
        console.log("啥也不是啥也不是啥也不是啥也不是啥也不是啥也不是啥也不是啥也不是啥也不是啥也不是", url)
        return
    }

    // 主页
    if (url.startsWith("https://www.bilibili.com/") && url.lastIndexOf('/') == 24) {
        console.log("主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页", url)
        GM_addStyle(`
           :root{
                --dark0: #000;
                --dark1: #111;
                --dark2: #222;
                --dark3: #333;
                --dark4: #444;
                --dark6: #666;
                --dark9: #999;
                --blue0:#03a0d6;
                
                /*页面整体背景*/
                --Wh0: var(--dark0) !important;
                /*顶部导航栏*/
                --Ga11: #050505 !important;
                /*分区导航标签背景*/
                --Ga0_s: var(--dark2) !important;
                /*分区导航标签边框颜色,未下拉时搜索框背景颜色*/
                --Ga1_s: var(--dark2) !important;
                /*下拉时搜索框背景*/
                --Ga1: var(--dark2) !important;
                /*视频标题文字*/
                --Ga10: var(--dark9) !important;
                /*搜索框的边框*/
                --Ga2: var(--dark2) !important;
                /*排行榜第二种颜色*/
                --Ga0: var(--dark1) !important;
            }

            /*视频数据*/
            .bili-video-card__stats * {
                color:#bbb !important;
            }

            /*视频卡片的边角*/
            .v-img {
                background-color: var(--dark0) !important;
            }
        `)
        return
    }

    // 视频
    if (url.startsWith("https://www.bilibili.com/video/")) {
        console.log("视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频", url)
        GM_addStyle(`
            :root {
                --dark0: #000;
                --dark1: #111;
                --dark2: #222;
                --dark3: #333;
                --dark4: #444;
                --dark5: #555;
                --dark6: #666;
                --dark9: #999;
                --blue0: #03a0d6;
                /*页面整体背景*/
                --Wh0: var(--dark0) !important;
                /*顶部导航栏*/
                --Ga11: #050505 !important;
                /*分区导航标签背景*/
                --Ga0_s: var(--dark2) !important;
                /*分区导航标签边框颜色,未下拉时搜索框背景颜色*/
                --Ga1_s: var(--dark2) !important;
                /*下拉时搜索框背景*/
                --Ga1: var(--dark2) !important;
                /*视频标题文字*/
                --Ga10: var(--dark9) !important;
                /*搜索框的边框*/
                --Ga2: var(--dark2) !important;
                /*排行榜第二种颜色*/
                --Ga0: var(--dark1) !important;
            }

            /*头部导航条*/
            #biliMainHeader .mini-header 
            {
                background-color: #050505 !important;
            }


            /*取消播放器四周光晕*/
            .bilibili-player {
                -webkit-box-shadow: 0 0 !important;
                box-shadow: 0 0 !important;
            }

            /*整体背景,视频下方弹幕框背景,评论区*/
            .v-wrap, .bilibili-player-video-sendbar, .bb-comment {
                background-color: var(--dark0) !important;
            }

            /*视频标签背景*/
            .s_tag .tag-area > li {
                background-color: var(--dark1) !important;
            }

            /*视频下方弹幕输入框背景*/
            .bilibili-player-video-sendbar .bilibili-player-video-inputbar {
                background-color: var(--dark2) !important;
            }

            /*视频下方弹幕输入框文字*/
            .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-danmaku-input {
                color: var(--dark6) !important;
            }

            /*视频下方弹幕输入框边框*/
            .bilibili-player-video-sendbar .bilibili-player-video-inputbar .bilibili-player-video-inputbar-wrap {
                border-color: var(--dark2) !important;
            }

            /*视频标题*/
            .video-info .video-title {
                color: var(--dark9) !important;
            }

            /*视频标题下的数据*/
            .video-info .video-data {
                color: var(--dark6) !important;
            }

            /*评论*/
            .common{
                color: var(--dark9) !important;
            }

            /*up主觉得很赞标签背景*/
            .bb-comment .comment-list .list-item .info .reply-tags span, .comment-bilibili-fold .comment-list .list-item .info .reply-tags span {
                background: var(--dark2) !important;
            }

            /*评论输入框*/
            .bb-comment .comment-send .textarea-container .ipt-txt, .comment-bilibili-fold .comment-send .textarea-container .ipt-txt, .bb-comment .comment-send-lite .textarea-container .ipt-txt, .comment-bilibili-fold .comment-send-lite .textarea-container .ipt-txt {
                color: var(--dark9) !important;
                background: var(--dark2) !important;
            }

            /*下拉时的评论输入框*/
            .bb-comment .comment-send.comment-send-lite, .comment-bilibili-fold .comment-send.comment-send-lite, .bb-comment .comment-send-lite.comment-send-lite, .comment-bilibili-fold .comment-send-lite.comment-send-lite {
                background: var(--dark0) !important;
            }

            /*页面右下悬浮按钮*/
            .float-nav .nav-menu .nav-btn-item {
                background: var(--dark2) !important;
                border: 1px solid var(--dark2) !important;
            }

            /*为TA充电按钮背景*/
            .up-info .btn-panel .not-follow-charge-btn {
                background-color: var(--dark2) !important;
            }

            /*弹幕列表背景*/
            .bui-collapse .bui-collapse-header {
                border-radius: 0  !important;
                background-color: var(--dark2) !important;
            }
            .player-auxiliary-area .player-auxiliary-filter-title {
                color: var(--dark6) !important;
            }
            .player-auxiliary, .player-auxiliary-area {
                background-color: var(--dark3) !important;
            }
            .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap {
                background-color: var(--dark2) !important;
            }
            .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap .player-auxiliary-danmaku-list .danmaku-info-row span.danmaku-info-danmaku {
                color: var(--dark9) !important;
            }
            .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function, .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function > *  {
                background-color: var(--dark3) !important;
            }
            .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-btn-footer, .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-btn-footer > * {
                color: var(--dark9) !important;
                background-color: var(--dark2) !important;
            }
            .danmaku-info-report-btn, .danmaku-info-block-btn {
                background-color: var(--dark2) !important;
            }
            .danmaku-info-report-btn:hover, .danmaku-info-block-btn:hover {
                background-color: var(--blue0) !important;
            }
            .player-auxiliary-danmaku-date-picker-container {
                background-color: var(--dark3) !important;
            }
            .player-auxiliary-danmaku-date-picker-container .player-auxiliary-danmaku-date-picker-body * {
                border:0 !important;
            }
            .player-auxiliary-danmaku-date-picker-container .player-auxiliary-danmaku-date-picker-body .player-auxiliary-danmaku-date-picker-week .day-span {
                color: var(--dark9) !important;
            }
            .player-auxiliary-danmaku-date-picker-day-content.clearfix > *[class="day-span"] {
                color: var(--dark2) !important;
            }

            /*悬浮在标签上时弹出的div 鼠标悬浮在评论中用户头像上的卡片背景 鼠标悬浮在up头像上的卡片背景*/
            .tag-channel-pane, .user-card, .user-card-m {
                background-color: var(--dark4) !important;
            }

            /*自动连播按钮为关时的背景*/
            .next-button .switch-button {
                border: 1px solid var(--dark4) !important;
                background-color: var(--dark4) !important;
            }

            /*自动连播按钮为开时的背景*/
            .next-button .switch-button.on {
                border: 1px solid #00a1d6 !important;
                background: #00a1d6 !important;
            }

            /*自动连播按钮中的小球*/
            .next-button .switch-button:after {
                background-color: var(--dark9) !important;
            }

            /*分享界面*/
            .share-box .share-pos {
                background-color: var(--dark6) !important;
            }

            /*推荐的视频列表标题*/
            .video-page-card .title {
                color: var(--dark9) !important;
            }

            /*成员列表背景*/
            .members-info__header {
                background-color: var(--dark2) !important;
                
            }

            /*成员列表文字,非大会员成员名称*/
            .members-info__header .title,
            .members-info .avatar-name__container *[class="name-text"] {
                color: var(--dark9) !important;
            }

            /*选集*/
            .base-video-sections {
                background-color: var(--dark2) !important;
            }

            .base-video-sections .video-sections-head_first-line .first-line-left .first-line-title,
            .base-video-sections .video-section-list .video-episode-card__info-title {
                color: var(--dark9) !important;
            }

            .base-video-sections .video-sections-head_first-line .first-line-left .first-line-title:hover,
            .base-video-sections .video-section-list .video-episode-card__info-title:hover {
                color: var(--blue0) !important;
            
            }

            .base-video-sections .video-section-list .video-episode-card__info-playing {
                background-color: var(--dark6) !important;
            }

            /*没开会员的up名字*/
            .up-info .up-info_right .name *[class="username"] {
                color: var(--dark9) !important;
            }

            .up-info .up-info_right .name *[class="username"]:hover {
                color: var(--blue0) !important;
            }

            /*评论标题*/
            .comment-m .b-head {
                color: var(--dark9) !important;
            }
            
            /*接下来播放*/
            .recommend-list .rec-title {
                color: var(--dark6) !important;
            }

            .recommend-list .rec-footer {
                color: var(--dark9) !important;
                background-color: var(--dark3) !important;
            }

            /*up主名字*/
            .up-info .up-info_right .name .username {
                color: var(--dark9) !important;
            }

            .up-info .up-info_right .name .username:hover {
                color: var(--blue0) !important;
            }

            .base-video-sections .video-section-title .title {
                color: var(--dark6) !important;
            }

            /*视频分段背景*/
            .player-auxiliary-viewpointlist {
                color: var(--dark2) !important;
            }

            .player-auxiliary-area .player-auxiliary-collapse-viewpointlist, 
            .player-auxiliary-viewpointlist {
                background-color: var(--dark2) !important;
            }

            .player-auxiliary-viewpoint-list > *[class="player-auxiliary-viewpointlist-item"] .player-auxiliary-viewpointlist-content {
                color: var(--dark9) !important;
            }

            /*视频选集*/
            .multi-page {
                background-color: var(--dark2) !important;
            }

            .multi-page .cur-list .list-box li a {
                color: var(--dark9) !important;
            }

            .multi-page .cur-list .list-box li.on {
                color: var(--dark4) !important;
                background-color: var(--dark5) !important;
            }

            .multi-page .cur-list .list-box li:hover {
                background-color: var(--dark4) !important;
            }

        `)
        return
    }

    //动态页
    if (url.startsWith("https://t.bilibili.com/")) {
        console.log("动态动态动态动态动态动态动态动态动态动态动态动态动态动态动态动态动态动态动态动态", url)
        GM_addStyle(`
            :root{
                --dark0: #000;
                --dark1: #111;
                --dark2: #222;
                --dark3: #333;
                --dark4: #444;
                --dark5: #555;
                --dark6: #666;
                --dark9: #999;
                --blue0:#03a0d6;

                /*页面整体背景*/
                --Wh0: var(--dark0);
                /*顶部导航栏*/
                --Ga11: #050505;
                /*分区导航标签背景*/
                --Ga0_s: var(--dark2);
                /*分区导航标签边框颜色,未下拉时搜索框背景颜色*/
                --Ga1_s: var(--dark2);
                /*下拉时搜索框背景*/
                --Ga1: var(--dark2);
                /*视频标题文字*/
                --Ga10: var(--dark9);
                /*搜索框的边框*/
                --Ga2: var(--dark2);
                /*排行榜第二种颜色*/
                --Ga0: var(--dark1);
            }

            /*整体背景*/
            #app {
                background: var(--dark0) !important;
            }
            .fixed-bg {
                background-image: url(#) !important;
            }

            /*头部导航背景*/
            .international-header .mini-type, .van-popover .mini-type {
                background-color: var(--dark0) !important;
            }

            /*头部导航文字*/
            .international-header .mini-type .nav-link .nav-link-ul .nav-link-item .link, .van-popover .mini-type .nav-link .nav-link-ul .nav-link-item .link, .mini-type .nav-user-center .user-con .item .name {
                color: var(--dark9) !important;
            }

            /*搜索框*/
            .international-header .mini-type .nav-search #nav_searchform, .van-popover .mini-type .nav-search #nav_searchform {
                background: var(--dark2) !important;
                border: 1px solid var(--dark2) !important;
            }
            .bili-header-m .nav-search .nav-search-btn, .international-header .nav-search .nav-search-btn {
                background-color: var(--dark6) !important;
            }
            .suggest-wrap.header-search-suggest {
                background-color: var(--dark6) !important;
            }
            .suggest-wrap.header-search-suggest .histories .history-item {
                background-color: var(--dark9) !important;
            }

            /*左侧用户卡片背景*/
            .user-panel.f-left {
                background-color: var(--dark2) !important;
            }

            /*左侧用户卡片文字*/
            .user-name.tc-black.c-pointer {
                color: var(--dark9) !important;
            }

            /*左侧用户卡片文字*/
            .user-panel.f-left .numbers.fs-14 {
                color: var(--dark9) !important;
            }
            
            /*顶部消息输入框*/
            .home-page .home-container .home-content .center-panel .section-block {
                background-color: var(--dark2) !important;
            }

            /*直播*/
            .live-panel {
                background-color: var(--dark2) !important;
            }
            .tc-black, .live-panel-item .live-detail .up-name {
                color: var(--dark9) !important;
            }

            /*分享*/
            .publish-panel {
                background-color: var(--dark2) !important;
            }

            .bili-topic-search__popover {
                background-color: var(--dark4) !important;
            }

            .core-style {
                background-color: var(--dark9) !important;
            }

            /*全部动态*/
            .most-viewed-panel, .tab-bar, .card {
                background-color: var(--dark2) !important;
            }
            .card .main-content .user-name a:not([style]) {
                color: var(--dark9) !important;
            }
            .content-full, .content-ellipsis {
                color: var(--dark9) !important;
            }

            .video-container {
                background-color: var(--dark4) !important;
            }

            .video-container .text-area .title {
                color: var(--dark9) !important;
            }

            .video-container .text-area .title:hover {
                color: var(--blue0) !important;
            }
            .shop-panel .shop-list {
                background-color: var(--dark6) !important;
            }

            .card-content .repost[data-v-5584c656], .card-content .not-support, .card-content .deleted {
                background-color: var(--dark5) !important;
            }

            .loading-text.tc-slate {
                background-color: var(--dark2) !important;
            }
            .imagesbox .boost-control {
                background-color: var(--dark0) !important;
            }

            .notice-panel, .topic-panel, .bb-comment, .comment-bilibili-fold {
                background-color: var(--dark2) !important;
            }

            .topic-panel__nav-title, 
            .relevant-topic__title, 
            .bb-comment .comment-list .list-item .text, 
            .comment-bilibili-fold .comment-list .list-item .text {
                color: var(--dark9) !important;
            }

            .relevant-topic__title:hover {
                color: var(--blue0) !important;
            }

            .bb-comment .comment-send .textarea-container .ipt-txt {
                color: var(--dark9) !important;
                background-color: var(--dark4) !important;
            }

            .article-container {
                background-color: var(--dark4) !important;
            }

            .bangumi-container {
                background-color: var(--dark5) !important;
            }

            .bb-comment .comment-list .list-item .user .text-con, .comment-bilibili-fold .comment-list .list-item .user .text-con {
                color: var(--dark9) !important;
            }
            
        `)
        return
    }

    //文章页
    if (url.startsWith("https://www.bilibili.com/read/cv")) {
        console.log("文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章", url)
        GM_addStyle(`
            :root{
                --dark0: #000;
                --dark1: #111;
                --dark2: #222;
                --dark3: #333;
                --dark4: #444;
                --dark6: #666;
                --dark9: #999;
                --blue0:#03a0d6;

                /*页面整体背景*/
                --Wh0: var(--dark0);
                /*顶部导航栏*/
                --Ga11: #050505;
                /*分区导航标签背景*/
                --Ga0_s: var(--dark2);
                /*分区导航标签边框颜色,未下拉时搜索框背景颜色*/
                --Ga1_s: var(--dark2);
                /*下拉时搜索框背景*/
                --Ga1: var(--dark2);
                /*视频标题文字*/
                --Ga10: var(--dark9);
                /*搜索框的边框*/
                --Ga2: var(--dark2);
                /*排行榜第二种颜色*/
                --Ga0: var(--dark1);
            }
            .comment-m {
                background-color: var(--dark0) !important;
            }

            .comment-wrapper .comment-m .b-head {
                color: var(--dark9) !important;
            }

            .bb-comment .comment-header .tabs-order li, .comment-bilibili-fold .comment-header .tabs-order li {
                color: var(--dark9) !important;
            }

            .bb-comment .comment-header .tabs-order li:hover, .comment-bilibili-fold .comment-header .tabs-order li:hover {
                color: var(--blue0) !important;
            }

            .bb-comment .comment-header .tabs-order li.on, .comment-bilibili-fold .comment-header .tabs-order li.on {
                color: var(--blue0) !important;
            }
        `)
        return
    }

    console.log("呦呵,没见过的地址", url)
})();
