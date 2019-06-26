$('document').ready(function() {
  var a_idx = 0
  jQuery(document).ready(function($) {
    $('body').click(function(e) {
      var a = new Array(
        '富强',
        '民主',
        '文明',
        '和谐',
        '自由',
        '平等',
        '公正',
        '法治',
        '爱国',
        '敬业',
        '诚信',
        '友善'
      )
      var $i = $('<span />').text(a[a_idx])
      a_idx = (a_idx + 1) % a.length
      var x = e.pageX,
        y = e.pageY
      $i.css({
        'z-index': 999,
        top: y - 20,
        left: x,
        position: 'absolute',
        'font-weight': 'bold',
        color: '#d92412',
        'font-size': '20px'
      })
      $('body').append($i)
      $i.animate(
        {
          top: y - 180,
          opacity: 0
        },
        1500,
        function() {
          $i.remove()
        }
      )
    })
  })
})

var os = (function() {
  var ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isTablet =
      /(?:iPad|PlayBook)/.test(ua) ||
      (isAndroid && !/(?:Mobile)/.test(ua)) ||
      (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian
  return {
    isPc: isPc
  }
})()

if (!os.isPc) {
  $('#updown').hide()
  var setTime = setInterval(function() {
    if ($('#live2d-widget').length) {
      $('#live2d-widget').hide()
      clearInterval(setTime)
    }
  }, 200)
}

var sawaboutme = localStorage.getItem("sawaboutme");
if(!sawaboutme && window.confirm("总结了下我的前端学习经历：大事件表(2016-7至今)，即「关于我」部分。要去看看吗？")){
  document.location.href =  "https://linshuirong.cn/about.html"
  localStorage.setItem("sawaboutme",true)
}