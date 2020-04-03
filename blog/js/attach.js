/**
 * 本文件为shuiRong为博客添加的各种小功能使用的JS合集
 */

// // 如果用户在博客首页，则跳转到/，否则跳转到/blog/
var brand = document.querySelector('.navbar-brand');
brand && brand.addEventListener('click', function(e) {
    var url = location.href;
    if (/blog\/$/.test(url)) {
        location.href = location.origin;
    } else {
        location.href = '/blog/';
    };
});

// 点击出现文字效果
$('document').ready(function() {
    var a_idx = 0;
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
            );
            var $i = $('<span />').text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                'z-index': 999,
                top: y - 20,
                left: x,
                position: 'absolute',
                'font-weight': 'bold',
                color: '#d92412',
                'font-size': '20px',
            });
            $('body').append($i);
            $i.animate(
                {
                    top: y - 180,
                    opacity: 0,
                },
                1500,
                function() {
                    $i.remove();
                }
            );
        });
    });
});

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
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isPc: isPc,
    };
})();

// 移动端不展示看板娘
if (!os.isPc) {
    $('#updown').hide();
    var setTime = setInterval(function() {
        if ($('#live2d-widget').length) {
            $('#live2d-widget').hide();
            clearInterval(setTime);
        }
    }, 200);
}

// Author: http://weibo.com/fanweixiao
// 用户从百度过来，弹窗提示效果。
(function() {
    var jQuery_cdn =
        'https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js';
    var jQuery_bpopup_cdn =
        'https://cdn.jsdelivr.net/gh/dinbror/bpopup@0.11.0/jquery.bpopup.min.js';

    var isBaiduReferrer = (function() {
        var url = document.referrer;
        if (typeof isTest !== 'undefined') {
            url = testURL;
        }

        if (url && url.search('http[s]?://') > -1) {
            var refurl = url.match(/:\/\/(.[^/]+)/)[1];
            if (refurl.indexOf('baidu.com') > -1) {
                return true;
            }
        }
        return false;
    })();

    var loader = function() {
        var anti_baidu = function() {
            jQuery
                .getScript(jQuery_bpopup_cdn)
                .done(function() {
                    (function($) {
                        $(document).ready(function() {
                            var css =
                                '<style type="text/css">' +
                                '  * {' +
                                '    box-sizing: border-box;' +
                                '  }' +
                                '  a {' +
                                '    color: #607D8B;' +
                                '    text-decoration: none;' +
                                '  }' +
                                '  .anti-baidu-row::after {' +
                                '    content: "";' +
                                '    clear: both;' +
                                '    display: table;' +
                                '  }' +
                                '  [class*="anti-baidu-col-"] {' +
                                '    float: left;' +
                                '    padding: 15px;' +
                                '  }' +
                                '  .anti-baidu-col-1 {width: 8.33%;}' +
                                '  .anti-baidu-col-2 {width: 16.66%;}' +
                                '  .anti-baidu-col-3 {width: 25%;}' +
                                '  .anti-baidu-col-4 {width: 33.33%;}' +
                                '  .anti-baidu-col-5 {width: 41.66%;}' +
                                '  .anti-baidu-col-6 {width: 50%;}' +
                                '  .anti-baidu-col-7 {width: 58.33%;}' +
                                '  .anti-baidu-col-8 {width: 66.66%;}' +
                                '  .anti-baidu-col-9 {width: 75%;}' +
                                '  .anti-baidu-col-10 {width: 83.33%;}' +
                                '  .anti-baidu-col-11 {width: 91.66%;}' +
                                '  .anti-baidu-col-12 {width: 100%;}' +
                                '  @media only screen and (max-width: 768px) {' +
                                '    /* For mobile phones: */' +
                                '    [class*="anti-baidu-col-"] {' +
                                '      width: 100%;' +
                                '    }' +
                                '  }' +
                                '</style>';
                            var antiDiv =
                                '<div id="nobaidu_dlg" class="anti-baidu-col-4" style="background-color:#fff; border-radius:15px;color:#000;display:none;padding:20px;min-height:180px;">' +
                                '  <div class="anti-baidu-row">' +
                                '    <div class="anti-baidu-col-5" style="text-align:center;">' +
                                '      <img src="https://cdn.jsdelivr.net/gh/lurongkai/anti-baidu/images/nobaidu.jpg">' +
                                '    </div>' +
                                '    <div class="anti-baidu-col-7" style="text-align:center;line-height: 30px;padding-top: 35px;">' +
                                '      检测到你还在使用百度这个搜索引擎<br>作为一个程序员，这是一种自暴自弃' +
                                '    </div>' +
                                '  </div>' +
                                '  <div class="anti-baidu-row">' +
                                '    <div class=anti-baidu-col-12>' +
                                '      <p align="center"><b><a href="https://www.zhihu.com/question/39322261/answer/81023987">如何看待百度将「血友病吧」吧主撤掉并售卖贴吧的行为？</a></b><br><b><a href="https://zhuanlan.zhihu.com/p/23099632">百度作恶一小步，互联网倒退一大步</a></b></p>' +
                                '    </div>' +
                                '  </div>' +
                                '</div>';
                            $('head').append(css);
                            $('body').append(antiDiv);
                            if (isBaiduReferrer) {
                                $('#nobaidu_dlg').bPopup();
                            }
                        });
                    })(jQuery);
                })
                .fail(function() {});
        };

        if (typeof jQuery === 'undefined') {
            function getScript(url, success) {
                var script = document.createElement('script');
                script.src = url;

                var head = document.getElementsByTagName('head')[0],
                    done = false;

                script.onload = script.onreadystatechange = function() {
                    if (
                        !done &&
                        (!this.readyState ||
                            this.readyState == 'loaded' ||
                            this.readyState == 'complete')
                    ) {
                        done = true;

                        success();
                        script.onload = script.onreadystatechange = null;
                        head.removeChild(script);
                    }
                };
                head.appendChild(script);
            }

            getScript(jQuery_cdn, function() {
                if (typeof jQuery == 'undefined') {
                    return;
                } else {
                    anti_baidu();
                }
            });
        } else {
            anti_baidu();
        }
    };

    if (isBaiduReferrer) {
        loader();
    }
})();

// 左/右下角蕾姆拉姆图片
jQuery(document).ready(function($) {
    var leimuHTML = `
<div id="updown">
<div class="sidebar_wo" id="leimu">
    <img src="https://i.imgur.com/iy0XCno.jpg" alt="雷姆" onmouseover="this.src='https://i.imgur.com/iy0XCno.jpg'" onmouseout="this.src='https://i.imgur.com/iy0XCno.jpg'"
    id="audioBtn" />
</div>
<div class="sidebar_wo" id="lamu">
    <img src="https://i.imgur.com/jRAQATb.jpg" alt="拉姆" onmouseover="this.src='https://i.imgur.com/ZblGvrA.jpg'" onmouseout="this.src='https://i.imgur.com/jRAQATb.jpg'"
    id="audioBtn" />
</div>
</div>
<style>
  .sidebar_wo {
    position: fixed;
    line-height: 0;
    bottom: 0;
    z-index: 1000;
  }

  #leimu {
    left: 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-transform: translate(-7px, 7px);
    -ms-transform: translate(-7px, 7px);
    transform: translate(-7px, 7px);
  }

  #lamu {
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-transform: translate(7px, 7px);
    -ms-transform: translate(7px, 7px);
    transform: translate(7px, 7px);
    right: 0;
  }

  #leimu:hover {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  #lamu:hover {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }
</style>
`;
    $('body').append(leimuHTML);
});

// var sawaboutme = localStorage.getItem("sawaboutme");
// if(!sawaboutme && window.confirm("总结了下我的前端学习经历：大事件表(2016-7至今)，即「关于我」部分。要去看看吗？")){
//   document.location.href =  "/about.html"
//   localStorage.setItem("sawaboutme",true)
// }
