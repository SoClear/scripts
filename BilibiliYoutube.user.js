// ==UserScript==
// @name         调节视频
// @namespace    https://github.com/SoClear/scripts
// @homepage     https://github.com/SoClear/scripts
// @updateURL    https://cdn.jsdelivr.net/gh/SoClear/scripts@main/BilibiliYoutube.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/SoClear/scripts@main/BilibiliYoutube.user.js
// @version      0.2.0
// @description  调节Bilibili和Youtube视频的播放速度、尺寸、旋转角度
// @author       soclear
// @match        https://www.youtube.com/*
// @match        https://www.bilibili.com/video/BV*
// @run-at       document-end
// ==/UserScript==

/**
 * Bilibili：按数字 1 2 3 4键设置对应的视频速度
 * Youtube: 按alt加数字 1 2 3 4键设置对应的视频速度
 * 
 * 通用：
 * R：每次旋转90度
 * z：设置视频播放速度为原速度
 * x：设置视频速度 -0.1 倍
 * c：设置视频速度 +0.1 倍
 * Shift + z：设置视频尺寸为原尺寸
 * Shift + x：设置视频尺寸 -0.05倍
 * Shift + c：设置视频尺寸 +0.05倍
 * Shift + r：视频旋转90度并设置视频尺寸为1.6倍
 */
(function() {
    'use strict';
    // 返回Bilibili当前视频的元素
    function bilibiliVideoElement() {
        return document.querySelector('video')
    }


    // 返回Youtube当前视频的元素
    function youtubeVideoElement() {
        // 长视频
        if (window.location.pathname === '/watch') {
            return document.querySelector('video')
        }
        // 短视频
        return document.querySelector('ytd-reel-video-renderer[is-active] video')
    }

    
    // 是不是B站
    function isBilibili() {
        return window.location.host === 'www.bilibili.com'
    }

    // 视频元素
    function videoElement() {
        return isBilibili() ? bilibiliVideoElement() : youtubeVideoElement()
    }
    
    // 设置视频播放速度，参数videoElement 是<vidoe>标签元素
    function setPlaybackRate(callback) {
        // 设置视频速度，alt + 数字键
        document.addEventListener("keydown", function(event) {
            if(callback(event)) {
                return
            }
            // 视频速度
            let playbackRate = 1
            // 绑定按键
            switch(event.key) {
                case '1': {
                    playbackRate = 1
                    break
                }
                case '2': {
                    playbackRate = 2
                    break
                }
                case '3': {
                    playbackRate = 3
                    break
                }
                case '4': {
                    playbackRate = 4
                    break
                }
            }
            // 设置视频速度
            if (videoElement()) {
                videoElement().playbackRate = playbackRate
            }
        })
    }

    
    // 回调
    const callback = (event) => {
        // 是B站，控制速度就按 1 2 3 4
        if (isBilibili()) {
            return false
        }
        // 是Youtube，控制速度按alt + 1 2 3 4
        return !event.altKey
    }
    // 执行设置视频速度
    setPlaybackRate(callback)

    // 计数
    const count = {
        // 视频播放速度
        speed: 1,
        // 视频旋转几个90度
        rotate90deg: 0,
        // 视频尺寸倍数
        scale: 1
    }

    // 设置旋转和放大
    function setTransform() {
        if (videoElement()) {
            videoElement().style.transform = `rotate(${count.rotate90deg * 90}deg) scale(${count.scale})`
        }
    }
    // 设置视频播放速度
    function setSpeed() {
        if (videoElement()) {
            videoElement().playbackRate = count.speed
        }
    }
    // 设置放大缩小和设置视频速度
    function setStyle() {
        document.addEventListener("keydown", event => {
            switch(event.key) {
                case 'r': {
                    count.rotate90deg = (count.rotate90deg + 1) % 4
                    setTransform()
                    break
                }
                case 'z': {
                    count.speed = 1
                    setSpeed()
                    break
                }
                case 'x': {
                    count.speed -= 0.1
                    setSpeed()
                    break
                }
                case 'c': {
                    count.speed += 0.1
                    setSpeed()
                    break
                }
                case 'Z': {
                    count.scale = 1
                    setTransform()
                    break
                }
                case 'X': {
                    count.scale -= 0.05
                    setTransform()
                    break
                }
                case 'C': {
                    count.scale += 0.05
                    setTransform()
                    break
                }
                case 'R': {
                    count.rotate90deg = (count.rotate90deg + 1) % 4
                    count.scale = 1.6
                    setTransform()
                    break
                }
            }
        })
    }
    setStyle()
})();
