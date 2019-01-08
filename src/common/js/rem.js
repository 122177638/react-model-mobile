(function (designWidth, maxWidth) {
  var doc = document
  var win = window
  var docEl = doc.documentElement
  var remStyle = document.createElement('style')
  var tid

  function refreshRem () {
    var width = docEl.getBoundingClientRect().width
    maxWidth = maxWidth || 540
    width > maxWidth && (width = maxWidth)
    var rem = width * 100 / designWidth
    // 为了匹配ant组件库，将字体放大两倍。
    remStyle.innerHTML = 'html{font-size:' + rem*2 + 'px;}'
  }

  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(remStyle)
  } else {
    var wrap = doc.createElement('div')
    wrap.appendChild(remStyle)
    doc.write(wrap.innerHTML)
    wrap = null
  }
  // 要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
  refreshRem()

  win.addEventListener('resize', function () {
    clearTimeout(tid) // 防止执行两次
    tid = setTimeout(refreshRem, 300)
  }, false)

  win.addEventListener('pageshow', function (e) {
    if (e.persisted) { // 浏览器后退的时候重新计算
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    }
  }, false)

  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = '16px'
  } else {
    doc.addEventListener('DOMContentLoaded', function (e) {
      doc.body.style.fontSize = '16px'
    }, false)
  }
})(750, 750)

// 缩放适配，不支持ipad
// (function(baseFontSize,fontscale){var _baseFontSize=baseFontSize||100;var _fontscale=fontscale||1;var win=window;var doc=win.document;var ua=navigator.userAgent;var matches=ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);var UCversion=ua.match(/U3\/((\d+|\.){5,})/i);var isUCHd=UCversion&&parseInt(UCversion[1].split('.').join(''),10)>=80;var isIos=navigator.appVersion.match(/(iphone|ipad|ipod)/gi);var dpr=win.devicePixelRatio||1;if(!isIos&&!(matches&&matches[1]>534)&&!isUCHd){dpr=1}var scale=1/dpr;var metaEl=doc.querySelector('meta[name="viewport"]');if(!metaEl){metaEl=doc.createElement('meta');metaEl.setAttribute('name','viewport');doc.head.appendChild(metaEl)}metaEl.setAttribute('content','width=device-width,user-scalable=no,initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale);doc.documentElement.style.fontSize=_baseFontSize/2*dpr*_fontscale+'px';window.viewportScale=dpr})();