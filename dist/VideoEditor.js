/*! For license information please see VideoEditor.js.LICENSE.txt */
(() => {
  var e = {
      367: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          '.croppie-container{width:100%;height:100%}.croppie-container .cr-image{z-index:-1;position:absolute;top:0;left:0;transform-origin:0 0;max-height:none;max-width:none}.croppie-container .cr-boundary{position:relative;overflow:hidden;margin:0 auto;z-index:1;width:100%;height:100%}.croppie-container .cr-viewport,.croppie-container .cr-resizer{position:absolute;border:2px solid #fff;margin:auto;top:0;bottom:0;right:0;left:0;box-shadow:0 0 2000px 2000px rgba(0,0,0,.5);z-index:0}.croppie-container .cr-resizer{z-index:2;box-shadow:none;pointer-events:none}.croppie-container .cr-resizer-vertical,.croppie-container .cr-resizer-horisontal{position:absolute;pointer-events:all}.croppie-container .cr-resizer-vertical::after,.croppie-container .cr-resizer-horisontal::after{display:block;position:absolute;box-sizing:border-box;border:1px solid #000;background:#fff;width:10px;height:10px;content:""}.croppie-container .cr-resizer-vertical{bottom:-5px;cursor:row-resize;width:100%;height:10px}.croppie-container .cr-resizer-vertical::after{left:50%;margin-left:-5px}.croppie-container .cr-resizer-horisontal{right:-5px;cursor:col-resize;width:10px;height:100%}.croppie-container .cr-resizer-horisontal::after{top:50%;margin-top:-5px}.croppie-container .cr-original-image{display:none}.croppie-container .cr-vp-circle{border-radius:50%}.croppie-container .cr-overlay{z-index:1;position:absolute;cursor:move;touch-action:none}.croppie-container .cr-slider-wrap{width:75%;margin:15px auto;text-align:center}.croppie-result{position:relative;overflow:hidden}.croppie-result img{position:absolute}.croppie-container .cr-image,.croppie-container .cr-overlay,.croppie-container .cr-viewport{-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.cr-slider{-webkit-appearance:none;width:300px;max-width:100%;padding-top:8px;padding-bottom:8px;background-color:rgba(0,0,0,0)}.cr-slider::-webkit-slider-runnable-track{width:100%;height:3px;background:rgba(0,0,0,.5);border:0;border-radius:3px}.cr-slider::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:16px;width:16px;border-radius:50%;background:#ddd;margin-top:-6px}.cr-slider:focus{outline:none}.cr-slider::-moz-range-track{width:100%;height:3px;background:rgba(0,0,0,.5);border:0;border-radius:3px}.cr-slider::-moz-range-thumb{border:none;height:16px;width:16px;border-radius:50%;background:#ddd;margin-top:-6px}.cr-slider:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}.cr-slider::-ms-track{width:100%;height:5px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);border-width:6px 0;color:rgba(0,0,0,0)}.cr-slider::-ms-fill-lower{background:rgba(0,0,0,.5);border-radius:10px}.cr-slider::-ms-fill-upper{background:rgba(0,0,0,.5);border-radius:10px}.cr-slider::-ms-thumb{border:none;height:16px;width:16px;border-radius:50%;background:#ddd;margin-top:1px}.cr-slider:focus::-ms-fill-lower{background:rgba(0,0,0,.5)}.cr-slider:focus::-ms-fill-upper{background:rgba(0,0,0,.5)}.cr-rotate-controls{position:absolute;bottom:5px;left:5px;z-index:1}.cr-rotate-controls button{border:0;background:none}.cr-rotate-controls i:before{display:inline-block;font-style:normal;font-weight:900;font-size:22px}.cr-rotate-l i:before{content:"↺"}.cr-rotate-r i:before{content:"↻"}',
          '',
        ]);
        const s = a;
      },
      423: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => x });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i),
          s = n(667),
          f = n.n(s),
          c = new URL(n(975), n.b),
          l = new URL(n(43), n.b),
          u = new URL(n(35), n.b),
          h = new URL(n(809), n.b),
          p = new URL(n(615), n.b),
          d = new URL(n(197), n.b),
          b = a()(o()),
          m = f()(c),
          g = f()(l, { hash: '?#iefix&v=4.7.0' }),
          v = f()(u),
          y = f()(h),
          _ = f()(p),
          w = f()(d, { hash: '#fontawesomeregular' });
        b.push([
          e.id,
          '/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:"FontAwesome";src:url(' +
            m +
            ');src:url(' +
            g +
            ') format("embedded-opentype"),url(' +
            v +
            ') format("woff2"),url(' +
            y +
            ') format("woff"),url(' +
            _ +
            ') format("truetype"),url(' +
            w +
            ') format("svg");font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:""}.fa-music:before{content:""}.fa-search:before{content:""}.fa-envelope-o:before{content:""}.fa-heart:before{content:""}.fa-star:before{content:""}.fa-star-o:before{content:""}.fa-user:before{content:""}.fa-film:before{content:""}.fa-th-large:before{content:""}.fa-th:before{content:""}.fa-th-list:before{content:""}.fa-check:before{content:""}.fa-remove:before,.fa-close:before,.fa-times:before{content:""}.fa-search-plus:before{content:""}.fa-search-minus:before{content:""}.fa-power-off:before{content:""}.fa-signal:before{content:""}.fa-gear:before,.fa-cog:before{content:""}.fa-trash-o:before{content:""}.fa-home:before{content:""}.fa-file-o:before{content:""}.fa-clock-o:before{content:""}.fa-road:before{content:""}.fa-download:before{content:""}.fa-arrow-circle-o-down:before{content:""}.fa-arrow-circle-o-up:before{content:""}.fa-inbox:before{content:""}.fa-play-circle-o:before{content:""}.fa-rotate-right:before,.fa-repeat:before{content:""}.fa-refresh:before{content:""}.fa-list-alt:before{content:""}.fa-lock:before{content:""}.fa-flag:before{content:""}.fa-headphones:before{content:""}.fa-volume-off:before{content:""}.fa-volume-down:before{content:""}.fa-volume-up:before{content:""}.fa-qrcode:before{content:""}.fa-barcode:before{content:""}.fa-tag:before{content:""}.fa-tags:before{content:""}.fa-book:before{content:""}.fa-bookmark:before{content:""}.fa-print:before{content:""}.fa-camera:before{content:""}.fa-font:before{content:""}.fa-bold:before{content:""}.fa-italic:before{content:""}.fa-text-height:before{content:""}.fa-text-width:before{content:""}.fa-align-left:before{content:""}.fa-align-center:before{content:""}.fa-align-right:before{content:""}.fa-align-justify:before{content:""}.fa-list:before{content:""}.fa-dedent:before,.fa-outdent:before{content:""}.fa-indent:before{content:""}.fa-video-camera:before{content:""}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:""}.fa-pencil:before{content:""}.fa-map-marker:before{content:""}.fa-adjust:before{content:""}.fa-tint:before{content:""}.fa-edit:before,.fa-pencil-square-o:before{content:""}.fa-share-square-o:before{content:""}.fa-check-square-o:before{content:""}.fa-arrows:before{content:""}.fa-step-backward:before{content:""}.fa-fast-backward:before{content:""}.fa-backward:before{content:""}.fa-play:before{content:""}.fa-pause:before{content:""}.fa-stop:before{content:""}.fa-forward:before{content:""}.fa-fast-forward:before{content:""}.fa-step-forward:before{content:""}.fa-eject:before{content:""}.fa-chevron-left:before{content:""}.fa-chevron-right:before{content:""}.fa-plus-circle:before{content:""}.fa-minus-circle:before{content:""}.fa-times-circle:before{content:""}.fa-check-circle:before{content:""}.fa-question-circle:before{content:""}.fa-info-circle:before{content:""}.fa-crosshairs:before{content:""}.fa-times-circle-o:before{content:""}.fa-check-circle-o:before{content:""}.fa-ban:before{content:""}.fa-arrow-left:before{content:""}.fa-arrow-right:before{content:""}.fa-arrow-up:before{content:""}.fa-arrow-down:before{content:""}.fa-mail-forward:before,.fa-share:before{content:""}.fa-expand:before{content:""}.fa-compress:before{content:""}.fa-plus:before{content:""}.fa-minus:before{content:""}.fa-asterisk:before{content:""}.fa-exclamation-circle:before{content:""}.fa-gift:before{content:""}.fa-leaf:before{content:""}.fa-fire:before{content:""}.fa-eye:before{content:""}.fa-eye-slash:before{content:""}.fa-warning:before,.fa-exclamation-triangle:before{content:""}.fa-plane:before{content:""}.fa-calendar:before{content:""}.fa-random:before{content:""}.fa-comment:before{content:""}.fa-magnet:before{content:""}.fa-chevron-up:before{content:""}.fa-chevron-down:before{content:""}.fa-retweet:before{content:""}.fa-shopping-cart:before{content:""}.fa-folder:before{content:""}.fa-folder-open:before{content:""}.fa-arrows-v:before{content:""}.fa-arrows-h:before{content:""}.fa-bar-chart-o:before,.fa-bar-chart:before{content:""}.fa-twitter-square:before{content:""}.fa-facebook-square:before{content:""}.fa-camera-retro:before{content:""}.fa-key:before{content:""}.fa-gears:before,.fa-cogs:before{content:""}.fa-comments:before{content:""}.fa-thumbs-o-up:before{content:""}.fa-thumbs-o-down:before{content:""}.fa-star-half:before{content:""}.fa-heart-o:before{content:""}.fa-sign-out:before{content:""}.fa-linkedin-square:before{content:""}.fa-thumb-tack:before{content:""}.fa-external-link:before{content:""}.fa-sign-in:before{content:""}.fa-trophy:before{content:""}.fa-github-square:before{content:""}.fa-upload:before{content:""}.fa-lemon-o:before{content:""}.fa-phone:before{content:""}.fa-square-o:before{content:""}.fa-bookmark-o:before{content:""}.fa-phone-square:before{content:""}.fa-twitter:before{content:""}.fa-facebook-f:before,.fa-facebook:before{content:""}.fa-github:before{content:""}.fa-unlock:before{content:""}.fa-credit-card:before{content:""}.fa-feed:before,.fa-rss:before{content:""}.fa-hdd-o:before{content:""}.fa-bullhorn:before{content:""}.fa-bell:before{content:""}.fa-certificate:before{content:""}.fa-hand-o-right:before{content:""}.fa-hand-o-left:before{content:""}.fa-hand-o-up:before{content:""}.fa-hand-o-down:before{content:""}.fa-arrow-circle-left:before{content:""}.fa-arrow-circle-right:before{content:""}.fa-arrow-circle-up:before{content:""}.fa-arrow-circle-down:before{content:""}.fa-globe:before{content:""}.fa-wrench:before{content:""}.fa-tasks:before{content:""}.fa-filter:before{content:""}.fa-briefcase:before{content:""}.fa-arrows-alt:before{content:""}.fa-group:before,.fa-users:before{content:""}.fa-chain:before,.fa-link:before{content:""}.fa-cloud:before{content:""}.fa-flask:before{content:""}.fa-cut:before,.fa-scissors:before{content:""}.fa-copy:before,.fa-files-o:before{content:""}.fa-paperclip:before{content:""}.fa-save:before,.fa-floppy-o:before{content:""}.fa-square:before{content:""}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:""}.fa-list-ul:before{content:""}.fa-list-ol:before{content:""}.fa-strikethrough:before{content:""}.fa-underline:before{content:""}.fa-table:before{content:""}.fa-magic:before{content:""}.fa-truck:before{content:""}.fa-pinterest:before{content:""}.fa-pinterest-square:before{content:""}.fa-google-plus-square:before{content:""}.fa-google-plus:before{content:""}.fa-money:before{content:""}.fa-caret-down:before{content:""}.fa-caret-up:before{content:""}.fa-caret-left:before{content:""}.fa-caret-right:before{content:""}.fa-columns:before{content:""}.fa-unsorted:before,.fa-sort:before{content:""}.fa-sort-down:before,.fa-sort-desc:before{content:""}.fa-sort-up:before,.fa-sort-asc:before{content:""}.fa-envelope:before{content:""}.fa-linkedin:before{content:""}.fa-rotate-left:before,.fa-undo:before{content:""}.fa-legal:before,.fa-gavel:before{content:""}.fa-dashboard:before,.fa-tachometer:before{content:""}.fa-comment-o:before{content:""}.fa-comments-o:before{content:""}.fa-flash:before,.fa-bolt:before{content:""}.fa-sitemap:before{content:""}.fa-umbrella:before{content:""}.fa-paste:before,.fa-clipboard:before{content:""}.fa-lightbulb-o:before{content:""}.fa-exchange:before{content:""}.fa-cloud-download:before{content:""}.fa-cloud-upload:before{content:""}.fa-user-md:before{content:""}.fa-stethoscope:before{content:""}.fa-suitcase:before{content:""}.fa-bell-o:before{content:""}.fa-coffee:before{content:""}.fa-cutlery:before{content:""}.fa-file-text-o:before{content:""}.fa-building-o:before{content:""}.fa-hospital-o:before{content:""}.fa-ambulance:before{content:""}.fa-medkit:before{content:""}.fa-fighter-jet:before{content:""}.fa-beer:before{content:""}.fa-h-square:before{content:""}.fa-plus-square:before{content:""}.fa-angle-double-left:before{content:""}.fa-angle-double-right:before{content:""}.fa-angle-double-up:before{content:""}.fa-angle-double-down:before{content:""}.fa-angle-left:before{content:""}.fa-angle-right:before{content:""}.fa-angle-up:before{content:""}.fa-angle-down:before{content:""}.fa-desktop:before{content:""}.fa-laptop:before{content:""}.fa-tablet:before{content:""}.fa-mobile-phone:before,.fa-mobile:before{content:""}.fa-circle-o:before{content:""}.fa-quote-left:before{content:""}.fa-quote-right:before{content:""}.fa-spinner:before{content:""}.fa-circle:before{content:""}.fa-mail-reply:before,.fa-reply:before{content:""}.fa-github-alt:before{content:""}.fa-folder-o:before{content:""}.fa-folder-open-o:before{content:""}.fa-smile-o:before{content:""}.fa-frown-o:before{content:""}.fa-meh-o:before{content:""}.fa-gamepad:before{content:""}.fa-keyboard-o:before{content:""}.fa-flag-o:before{content:""}.fa-flag-checkered:before{content:""}.fa-terminal:before{content:""}.fa-code:before{content:""}.fa-mail-reply-all:before,.fa-reply-all:before{content:""}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:""}.fa-location-arrow:before{content:""}.fa-crop:before{content:""}.fa-code-fork:before{content:""}.fa-unlink:before,.fa-chain-broken:before{content:""}.fa-question:before{content:""}.fa-info:before{content:""}.fa-exclamation:before{content:""}.fa-superscript:before{content:""}.fa-subscript:before{content:""}.fa-eraser:before{content:""}.fa-puzzle-piece:before{content:""}.fa-microphone:before{content:""}.fa-microphone-slash:before{content:""}.fa-shield:before{content:""}.fa-calendar-o:before{content:""}.fa-fire-extinguisher:before{content:""}.fa-rocket:before{content:""}.fa-maxcdn:before{content:""}.fa-chevron-circle-left:before{content:""}.fa-chevron-circle-right:before{content:""}.fa-chevron-circle-up:before{content:""}.fa-chevron-circle-down:before{content:""}.fa-html5:before{content:""}.fa-css3:before{content:""}.fa-anchor:before{content:""}.fa-unlock-alt:before{content:""}.fa-bullseye:before{content:""}.fa-ellipsis-h:before{content:""}.fa-ellipsis-v:before{content:""}.fa-rss-square:before{content:""}.fa-play-circle:before{content:""}.fa-ticket:before{content:""}.fa-minus-square:before{content:""}.fa-minus-square-o:before{content:""}.fa-level-up:before{content:""}.fa-level-down:before{content:""}.fa-check-square:before{content:""}.fa-pencil-square:before{content:""}.fa-external-link-square:before{content:""}.fa-share-square:before{content:""}.fa-compass:before{content:""}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:""}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:""}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:""}.fa-euro:before,.fa-eur:before{content:""}.fa-gbp:before{content:""}.fa-dollar:before,.fa-usd:before{content:""}.fa-rupee:before,.fa-inr:before{content:""}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:""}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:""}.fa-won:before,.fa-krw:before{content:""}.fa-bitcoin:before,.fa-btc:before{content:""}.fa-file:before{content:""}.fa-file-text:before{content:""}.fa-sort-alpha-asc:before{content:""}.fa-sort-alpha-desc:before{content:""}.fa-sort-amount-asc:before{content:""}.fa-sort-amount-desc:before{content:""}.fa-sort-numeric-asc:before{content:""}.fa-sort-numeric-desc:before{content:""}.fa-thumbs-up:before{content:""}.fa-thumbs-down:before{content:""}.fa-youtube-square:before{content:""}.fa-youtube:before{content:""}.fa-xing:before{content:""}.fa-xing-square:before{content:""}.fa-youtube-play:before{content:""}.fa-dropbox:before{content:""}.fa-stack-overflow:before{content:""}.fa-instagram:before{content:""}.fa-flickr:before{content:""}.fa-adn:before{content:""}.fa-bitbucket:before{content:""}.fa-bitbucket-square:before{content:""}.fa-tumblr:before{content:""}.fa-tumblr-square:before{content:""}.fa-long-arrow-down:before{content:""}.fa-long-arrow-up:before{content:""}.fa-long-arrow-left:before{content:""}.fa-long-arrow-right:before{content:""}.fa-apple:before{content:""}.fa-windows:before{content:""}.fa-android:before{content:""}.fa-linux:before{content:""}.fa-dribbble:before{content:""}.fa-skype:before{content:""}.fa-foursquare:before{content:""}.fa-trello:before{content:""}.fa-female:before{content:""}.fa-male:before{content:""}.fa-gittip:before,.fa-gratipay:before{content:""}.fa-sun-o:before{content:""}.fa-moon-o:before{content:""}.fa-archive:before{content:""}.fa-bug:before{content:""}.fa-vk:before{content:""}.fa-weibo:before{content:""}.fa-renren:before{content:""}.fa-pagelines:before{content:""}.fa-stack-exchange:before{content:""}.fa-arrow-circle-o-right:before{content:""}.fa-arrow-circle-o-left:before{content:""}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:""}.fa-dot-circle-o:before{content:""}.fa-wheelchair:before{content:""}.fa-vimeo-square:before{content:""}.fa-turkish-lira:before,.fa-try:before{content:""}.fa-plus-square-o:before{content:""}.fa-space-shuttle:before{content:""}.fa-slack:before{content:""}.fa-envelope-square:before{content:""}.fa-wordpress:before{content:""}.fa-openid:before{content:""}.fa-institution:before,.fa-bank:before,.fa-university:before{content:""}.fa-mortar-board:before,.fa-graduation-cap:before{content:""}.fa-yahoo:before{content:""}.fa-google:before{content:""}.fa-reddit:before{content:""}.fa-reddit-square:before{content:""}.fa-stumbleupon-circle:before{content:""}.fa-stumbleupon:before{content:""}.fa-delicious:before{content:""}.fa-digg:before{content:""}.fa-pied-piper-pp:before{content:""}.fa-pied-piper-alt:before{content:""}.fa-drupal:before{content:""}.fa-joomla:before{content:""}.fa-language:before{content:""}.fa-fax:before{content:""}.fa-building:before{content:""}.fa-child:before{content:""}.fa-paw:before{content:""}.fa-spoon:before{content:""}.fa-cube:before{content:""}.fa-cubes:before{content:""}.fa-behance:before{content:""}.fa-behance-square:before{content:""}.fa-steam:before{content:""}.fa-steam-square:before{content:""}.fa-recycle:before{content:""}.fa-automobile:before,.fa-car:before{content:""}.fa-cab:before,.fa-taxi:before{content:""}.fa-tree:before{content:""}.fa-spotify:before{content:""}.fa-deviantart:before{content:""}.fa-soundcloud:before{content:""}.fa-database:before{content:""}.fa-file-pdf-o:before{content:""}.fa-file-word-o:before{content:""}.fa-file-excel-o:before{content:""}.fa-file-powerpoint-o:before{content:""}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:""}.fa-file-zip-o:before,.fa-file-archive-o:before{content:""}.fa-file-sound-o:before,.fa-file-audio-o:before{content:""}.fa-file-movie-o:before,.fa-file-video-o:before{content:""}.fa-file-code-o:before{content:""}.fa-vine:before{content:""}.fa-codepen:before{content:""}.fa-jsfiddle:before{content:""}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:""}.fa-circle-o-notch:before{content:""}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:""}.fa-ge:before,.fa-empire:before{content:""}.fa-git-square:before{content:""}.fa-git:before{content:""}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:""}.fa-tencent-weibo:before{content:""}.fa-qq:before{content:""}.fa-wechat:before,.fa-weixin:before{content:""}.fa-send:before,.fa-paper-plane:before{content:""}.fa-send-o:before,.fa-paper-plane-o:before{content:""}.fa-history:before{content:""}.fa-circle-thin:before{content:""}.fa-header:before{content:""}.fa-paragraph:before{content:""}.fa-sliders:before{content:""}.fa-share-alt:before{content:""}.fa-share-alt-square:before{content:""}.fa-bomb:before{content:""}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:""}.fa-tty:before{content:""}.fa-binoculars:before{content:""}.fa-plug:before{content:""}.fa-slideshare:before{content:""}.fa-twitch:before{content:""}.fa-yelp:before{content:""}.fa-newspaper-o:before{content:""}.fa-wifi:before{content:""}.fa-calculator:before{content:""}.fa-paypal:before{content:""}.fa-google-wallet:before{content:""}.fa-cc-visa:before{content:""}.fa-cc-mastercard:before{content:""}.fa-cc-discover:before{content:""}.fa-cc-amex:before{content:""}.fa-cc-paypal:before{content:""}.fa-cc-stripe:before{content:""}.fa-bell-slash:before{content:""}.fa-bell-slash-o:before{content:""}.fa-trash:before{content:""}.fa-copyright:before{content:""}.fa-at:before{content:""}.fa-eyedropper:before{content:""}.fa-paint-brush:before{content:""}.fa-birthday-cake:before{content:""}.fa-area-chart:before{content:""}.fa-pie-chart:before{content:""}.fa-line-chart:before{content:""}.fa-lastfm:before{content:""}.fa-lastfm-square:before{content:""}.fa-toggle-off:before{content:""}.fa-toggle-on:before{content:""}.fa-bicycle:before{content:""}.fa-bus:before{content:""}.fa-ioxhost:before{content:""}.fa-angellist:before{content:""}.fa-cc:before{content:""}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:""}.fa-meanpath:before{content:""}.fa-buysellads:before{content:""}.fa-connectdevelop:before{content:""}.fa-dashcube:before{content:""}.fa-forumbee:before{content:""}.fa-leanpub:before{content:""}.fa-sellsy:before{content:""}.fa-shirtsinbulk:before{content:""}.fa-simplybuilt:before{content:""}.fa-skyatlas:before{content:""}.fa-cart-plus:before{content:""}.fa-cart-arrow-down:before{content:""}.fa-diamond:before{content:""}.fa-ship:before{content:""}.fa-user-secret:before{content:""}.fa-motorcycle:before{content:""}.fa-street-view:before{content:""}.fa-heartbeat:before{content:""}.fa-venus:before{content:""}.fa-mars:before{content:""}.fa-mercury:before{content:""}.fa-intersex:before,.fa-transgender:before{content:""}.fa-transgender-alt:before{content:""}.fa-venus-double:before{content:""}.fa-mars-double:before{content:""}.fa-venus-mars:before{content:""}.fa-mars-stroke:before{content:""}.fa-mars-stroke-v:before{content:""}.fa-mars-stroke-h:before{content:""}.fa-neuter:before{content:""}.fa-genderless:before{content:""}.fa-facebook-official:before{content:""}.fa-pinterest-p:before{content:""}.fa-whatsapp:before{content:""}.fa-server:before{content:""}.fa-user-plus:before{content:""}.fa-user-times:before{content:""}.fa-hotel:before,.fa-bed:before{content:""}.fa-viacoin:before{content:""}.fa-train:before{content:""}.fa-subway:before{content:""}.fa-medium:before{content:""}.fa-yc:before,.fa-y-combinator:before{content:""}.fa-optin-monster:before{content:""}.fa-opencart:before{content:""}.fa-expeditedssl:before{content:""}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:""}.fa-battery-3:before,.fa-battery-three-quarters:before{content:""}.fa-battery-2:before,.fa-battery-half:before{content:""}.fa-battery-1:before,.fa-battery-quarter:before{content:""}.fa-battery-0:before,.fa-battery-empty:before{content:""}.fa-mouse-pointer:before{content:""}.fa-i-cursor:before{content:""}.fa-object-group:before{content:""}.fa-object-ungroup:before{content:""}.fa-sticky-note:before{content:""}.fa-sticky-note-o:before{content:""}.fa-cc-jcb:before{content:""}.fa-cc-diners-club:before{content:""}.fa-clone:before{content:""}.fa-balance-scale:before{content:""}.fa-hourglass-o:before{content:""}.fa-hourglass-1:before,.fa-hourglass-start:before{content:""}.fa-hourglass-2:before,.fa-hourglass-half:before{content:""}.fa-hourglass-3:before,.fa-hourglass-end:before{content:""}.fa-hourglass:before{content:""}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:""}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:""}.fa-hand-scissors-o:before{content:""}.fa-hand-lizard-o:before{content:""}.fa-hand-spock-o:before{content:""}.fa-hand-pointer-o:before{content:""}.fa-hand-peace-o:before{content:""}.fa-trademark:before{content:""}.fa-registered:before{content:""}.fa-creative-commons:before{content:""}.fa-gg:before{content:""}.fa-gg-circle:before{content:""}.fa-tripadvisor:before{content:""}.fa-odnoklassniki:before{content:""}.fa-odnoklassniki-square:before{content:""}.fa-get-pocket:before{content:""}.fa-wikipedia-w:before{content:""}.fa-safari:before{content:""}.fa-chrome:before{content:""}.fa-firefox:before{content:""}.fa-opera:before{content:""}.fa-internet-explorer:before{content:""}.fa-tv:before,.fa-television:before{content:""}.fa-contao:before{content:""}.fa-500px:before{content:""}.fa-amazon:before{content:""}.fa-calendar-plus-o:before{content:""}.fa-calendar-minus-o:before{content:""}.fa-calendar-times-o:before{content:""}.fa-calendar-check-o:before{content:""}.fa-industry:before{content:""}.fa-map-pin:before{content:""}.fa-map-signs:before{content:""}.fa-map-o:before{content:""}.fa-map:before{content:""}.fa-commenting:before{content:""}.fa-commenting-o:before{content:""}.fa-houzz:before{content:""}.fa-vimeo:before{content:""}.fa-black-tie:before{content:""}.fa-fonticons:before{content:""}.fa-reddit-alien:before{content:""}.fa-edge:before{content:""}.fa-credit-card-alt:before{content:""}.fa-codiepie:before{content:""}.fa-modx:before{content:""}.fa-fort-awesome:before{content:""}.fa-usb:before{content:""}.fa-product-hunt:before{content:""}.fa-mixcloud:before{content:""}.fa-scribd:before{content:""}.fa-pause-circle:before{content:""}.fa-pause-circle-o:before{content:""}.fa-stop-circle:before{content:""}.fa-stop-circle-o:before{content:""}.fa-shopping-bag:before{content:""}.fa-shopping-basket:before{content:""}.fa-hashtag:before{content:""}.fa-bluetooth:before{content:""}.fa-bluetooth-b:before{content:""}.fa-percent:before{content:""}.fa-gitlab:before{content:""}.fa-wpbeginner:before{content:""}.fa-wpforms:before{content:""}.fa-envira:before{content:""}.fa-universal-access:before{content:""}.fa-wheelchair-alt:before{content:""}.fa-question-circle-o:before{content:""}.fa-blind:before{content:""}.fa-audio-description:before{content:""}.fa-volume-control-phone:before{content:""}.fa-braille:before{content:""}.fa-assistive-listening-systems:before{content:""}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:""}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:""}.fa-glide:before{content:""}.fa-glide-g:before{content:""}.fa-signing:before,.fa-sign-language:before{content:""}.fa-low-vision:before{content:""}.fa-viadeo:before{content:""}.fa-viadeo-square:before{content:""}.fa-snapchat:before{content:""}.fa-snapchat-ghost:before{content:""}.fa-snapchat-square:before{content:""}.fa-pied-piper:before{content:""}.fa-first-order:before{content:""}.fa-yoast:before{content:""}.fa-themeisle:before{content:""}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:""}.fa-fa:before,.fa-font-awesome:before{content:""}.fa-handshake-o:before{content:""}.fa-envelope-open:before{content:""}.fa-envelope-open-o:before{content:""}.fa-linode:before{content:""}.fa-address-book:before{content:""}.fa-address-book-o:before{content:""}.fa-vcard:before,.fa-address-card:before{content:""}.fa-vcard-o:before,.fa-address-card-o:before{content:""}.fa-user-circle:before{content:""}.fa-user-circle-o:before{content:""}.fa-user-o:before{content:""}.fa-id-badge:before{content:""}.fa-drivers-license:before,.fa-id-card:before{content:""}.fa-drivers-license-o:before,.fa-id-card-o:before{content:""}.fa-quora:before{content:""}.fa-free-code-camp:before{content:""}.fa-telegram:before{content:""}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:""}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:""}.fa-thermometer-2:before,.fa-thermometer-half:before{content:""}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:""}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:""}.fa-shower:before{content:""}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:""}.fa-podcast:before{content:""}.fa-window-maximize:before{content:""}.fa-window-minimize:before{content:""}.fa-window-restore:before{content:""}.fa-times-rectangle:before,.fa-window-close:before{content:""}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:""}.fa-bandcamp:before{content:""}.fa-grav:before{content:""}.fa-etsy:before{content:""}.fa-imdb:before{content:""}.fa-ravelry:before{content:""}.fa-eercast:before{content:""}.fa-microchip:before{content:""}.fa-snowflake-o:before{content:""}.fa-superpowers:before{content:""}.fa-wpexplorer:before{content:""}.fa-meetup:before{content:""}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}',
          '',
        ]);
        const x = b;
      },
      378: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          '.control-btn{display:flex;justify-content:center;align-items:center;background:#fff;border:4px solid var(--control-btn);border-radius:50%;width:0;height:0;padding:35px;cursor:pointer;transition:all .2s ease;margin:0 .5rem}.control-btn i{position:relative;width:35px;font-size:30px;background:rgba(0,0,0,0);padding:0px;color:var(--control-btn-i)}.control-btn:active,.control-btn-active{transform:scale(0.95)}.control-btn:active i{transform:scale(1.05)}.control-btn:hover:not(.control-btn.active){border-color:var(--control-btn-hover);opacity:.9}.control-btn:hover:not(.control-btn-active) i{color:var(--control-btn-hover)}.control-btn.control-btn-active{background-color:var(--control-btn-focus-bg);outline:none}.control-btn.control-btn-active i{color:var(--control-btn-focus-i)}.control-btn:disabled{opacity:.5;pointer-events:none}@media(min-device-width: 360px){.control-btn{padding:25px}.control-btn i{width:25px;font-size:22px}}',
          '',
        ]);
        const s = a;
      },
      36: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          '.video-editor-controls{margin-top:1.5rem;display:flex;flex-direction:row;justify-content:center}.play i{margin-left:7px}.pause i{color:blue}@media(max-device-width: 380px){.video-editor-controls{margin-top:0rem;display:flex;flex-direction:row}}',
          '',
        ]);
        const s = a;
      },
      981: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          '.play-head{box-sizing:border-box;-webkit-box-sizing:border-box;left:0;position:absolute;z-index:3;top:0;width:0;border-top:var(--play-head-width) solid var(--play-head-color);border-bottom:var(--play-head-width) solid var(--play-head-color);border-left:var(--play-head-width) solid var(--play-head-color);border-right:var(--play-head-width) solid var(--play-head-color);height:100%;padding:0;margin:0}',
          '',
        ]);
        const s = a;
      },
      672: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          '.marker{border:var(--marker-border-size) solid var(--marker-border-color);user-select:none;-moz-user-select:none;-webkit-user-select:none}.marker{position:absolute;z-index:1;top:0;width:var(--marker-width);height:100%;background:var(--marker-bg-color);box-sizing:border-box;-webkit-box-sizing:border-box;cursor:grab}.marker{cursor:grabbing}.in-marker{left:0;margin-left:calc(var(--marker-width)*-1);top:0;border-radius:20px 0px 0px 20px}.out-marker{right:0;margin-right:calc(var(--marker-width)*-1);top:0;border-radius:0 20px 20px 0}',
          '',
        ]);
        const s = a;
      },
      705: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          '.timeline .timestamp{position:absolute;left:50%;bottom:-1rem;transform:translate(-50%, 100%);background:#2e2e2e;padding:1rem;width:fit-content;opacity:0;transition:opacity .5s ease}.timeline .timestamp p{color:#fff}',
          '',
        ]);
        const s = a;
      },
      585: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          '.range-selector-container{position:absolute;width:100%;height:100%;margin:0;padding:0;box-sizing:border-box;-webkit-box-sizing:border-box;visibility:hidden}.range-selector-container::before{content:"";position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.range-selector{position:absolute;z-index:1;top:0;width:100%;height:100%;padding:0px;border:var(--range-selector-border-size) solid var(--range-selector-border-color);margin:0;box-sizing:border-box !important;-webkit-box-sizing:border-box !important;overflow:hidden;cursor:default}.range-selector{user-select:none;-moz-user-select:none;-webkit-user-select:none}.selected-frames{position:absolute !important;top:0;right:0;margin:calc(var(--range-selector-border-size)*-1) !important}.selected-frames::after{content:"";background:rgba(0,0,0,0) !important}',
          '',
        ]);
        const s = a;
      },
      606: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          '.timeline-container{width:fit-content;width:100%;padding:30px !important;display:flex;justify-content:center;box-sizing:border-box;margin-top:1.5rem}.timeline{position:relative;width:calc(100% - var(--marker-width)*2) !important;height:100px}.frames-container{position:relative;width:100%;height:100%}.frames-container::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.frame{display:inline-flex;justify-content:center;border-width:var(--frame-border-size);border-style:var(--frame-border-style);border-color:var(--frame-border-color);box-sizing:border-box;-webkit-box-sizing:border-box;overflow:hidden;background:var(--frame-bg)}.frame canvas{object-fit:contain;width:100%;height:100%;margin:0 auto;background:#252525}@media(max-device-width: 380px){.timeline-container{margin-top:0rem;padding:20px 30px !important;width:calc(100% + 40px);background:rgba(0,0,0,0)}.timeline{height:70px}}',
          '',
        ]);
        const s = a;
      },
      412: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var r = n(81),
          o = n.n(r),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          e.id,
          '.video-editor-container{--frame-bg: rgb(111, 111, 111);--frame-border-size: 2px;--frame-border-style: solid;--frame-border-color: rgb(58, 58, 58);--range-selector-border-size: 4px;--range-selector-border-color: rgb(243, 71, 19);--marker-border-size: 7px;--marker-width: 30px;--marker-border-color: rgb(243, 71, 19);--marker-bg-color: rgb(255, 122, 33);--play-head-width: 2px;--play-head-color: white;--control-btn: dodgerblue;--control-btn-i: rgb(17, 86, 155);--control-btn-hover: rgb(24, 114, 204);--control-btn-hover-i: white;--control-btn-focus-bg: dodgerblue;--control-btn-focus-i: rgb(255, 255, 255);--control-btn-active-icon: rgb(16, 78, 141)}.video-editor-container{position:relative}.video-editor-container video{position:absolute;top:0;z-index:1;width:100%}.video-container{position:relative}.video-wrap{position:relative;overflow:hidden}.video-wrap,.video-wrap video{transform-origin:50% 50%}.video-container svg{position:absolute;left:0;top:0;z-index:2;opacity:1}',
          '',
        ]);
        const s = a;
      },
      645: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  r && (n += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                  (n += e(t)),
                  r && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, r, o, i) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var f = this[s][0];
                  null != f && (a[f] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var l = [].concat(e[c]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = '@media '.concat(l[2], ' {').concat(l[1], '}')), (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = '@supports ('.concat(l[4], ') {').concat(l[1], '}')), (l[4] = o))
                      : (l[4] = ''.concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      667: (e) => {
        'use strict';
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        'use strict';
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        'use strict';
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], s = 0; s < e.length; s++) {
            var f = e[s],
              c = r.base ? f[0] + r.base : f[0],
              l = i[c] || 0,
              u = ''.concat(c, ' ').concat(l);
            i[c] = l + 1;
            var h = n(u),
              p = { css: f[1], media: f[2], sourceMap: f[3], supports: f[4], layer: f[5] };
            if (-1 !== h) t[h].references++, t[h].updater(p);
            else {
              var d = o(p, r);
              (r.byIndex = s), t.splice(s, 0, { identifier: u, updater: d, references: 1 });
            }
            a.push(u);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var s = n(i[a]);
              t[s].references--;
            }
            for (var f = r(e, o), c = 0; c < i.length; c++) {
              var l = n(i[c]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            i = f;
          };
        };
      },
      569: (e) => {
        'use strict';
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        'use strict';
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      795: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var o = void 0 !== n.layer;
                o && (r += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')),
                  (r += n.css),
                  o && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var i = n.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                    ' */'
                  )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        'use strict';
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      257: function (e, t, n) {
        var r, o;
        'undefined' != typeof self && self,
          (r = function () {
            'function' != typeof Promise &&
              (function (t) {
                function n(e, t) {
                  return function () {
                    e.apply(t, arguments);
                  };
                }
                function r(e) {
                  if ('object' != typeof this)
                    throw new TypeError('Promises must be constructed via new');
                  if ('function' != typeof e) throw new TypeError('not a function');
                  (this._state = null),
                    (this._value = null),
                    (this._deferreds = []),
                    c(e, n(i, this), n(a, this));
                }
                function o(e) {
                  var t = this;
                  return null === this._state
                    ? void this._deferreds.push(e)
                    : void u(function () {
                        var n = t._state ? e.onFulfilled : e.onRejected;
                        if (null !== n) {
                          var r;
                          try {
                            r = n(t._value);
                          } catch (t) {
                            return void e.reject(t);
                          }
                          e.resolve(r);
                        } else (t._state ? e.resolve : e.reject)(t._value);
                      });
                }
                function i(e) {
                  try {
                    if (e === this)
                      throw new TypeError('A promise cannot be resolved with itself.');
                    if (e && ('object' == typeof e || 'function' == typeof e)) {
                      var t = e.then;
                      if ('function' == typeof t) return void c(n(t, e), n(i, this), n(a, this));
                    }
                    (this._state = !0), (this._value = e), s.call(this);
                  } catch (e) {
                    a.call(this, e);
                  }
                }
                function a(e) {
                  (this._state = !1), (this._value = e), s.call(this);
                }
                function s() {
                  for (var e = 0, t = this._deferreds.length; t > e; e++)
                    o.call(this, this._deferreds[e]);
                  this._deferreds = null;
                }
                function f(e, t, n, r) {
                  (this.onFulfilled = 'function' == typeof e ? e : null),
                    (this.onRejected = 'function' == typeof t ? t : null),
                    (this.resolve = n),
                    (this.reject = r);
                }
                function c(e, t, n) {
                  var r = !1;
                  try {
                    e(
                      function (e) {
                        r || ((r = !0), t(e));
                      },
                      function (e) {
                        r || ((r = !0), n(e));
                      }
                    );
                  } catch (e) {
                    if (r) return;
                    (r = !0), n(e);
                  }
                }
                var l = setTimeout,
                  u =
                    ('function' == typeof setImmediate && setImmediate) ||
                    function (e) {
                      l(e, 1);
                    },
                  h =
                    Array.isArray ||
                    function (e) {
                      return '[object Array]' === Object.prototype.toString.call(e);
                    };
                (r.prototype.catch = function (e) {
                  return this.then(null, e);
                }),
                  (r.prototype.then = function (e, t) {
                    var n = this;
                    return new r(function (r, i) {
                      o.call(n, new f(e, t, r, i));
                    });
                  }),
                  (r.all = function () {
                    var e = Array.prototype.slice.call(
                      1 === arguments.length && h(arguments[0]) ? arguments[0] : arguments
                    );
                    return new r(function (t, n) {
                      function r(i, a) {
                        try {
                          if (a && ('object' == typeof a || 'function' == typeof a)) {
                            var s = a.then;
                            if ('function' == typeof s)
                              return void s.call(
                                a,
                                function (e) {
                                  r(i, e);
                                },
                                n
                              );
                          }
                          (e[i] = a), 0 == --o && t(e);
                        } catch (e) {
                          n(e);
                        }
                      }
                      if (0 === e.length) return t([]);
                      for (var o = e.length, i = 0; i < e.length; i++) r(i, e[i]);
                    });
                  }),
                  (r.resolve = function (e) {
                    return e && 'object' == typeof e && e.constructor === r
                      ? e
                      : new r(function (t) {
                          t(e);
                        });
                  }),
                  (r.reject = function (e) {
                    return new r(function (t, n) {
                      n(e);
                    });
                  }),
                  (r.race = function (e) {
                    return new r(function (t, n) {
                      for (var r = 0, o = e.length; o > r; r++) e[r].then(t, n);
                    });
                  }),
                  (r._setImmediateFn = function (e) {
                    u = e;
                  }),
                  e.exports ? (e.exports = r) : t.Promise || (t.Promise = r);
              })(this),
              'undefined' != typeof window &&
                'function' != typeof window.CustomEvent &&
                (function () {
                  function e(e, t) {
                    t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                    var n = document.createEvent('CustomEvent');
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                  }
                  (e.prototype = window.Event.prototype), (window.CustomEvent = e);
                })(),
              'undefined' == typeof HTMLCanvasElement ||
                HTMLCanvasElement.prototype.toBlob ||
                Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
                  value: function (e, t, n) {
                    for (
                      var r = atob(this.toDataURL(t, n).split(',')[1]),
                        o = r.length,
                        i = new Uint8Array(o),
                        a = 0;
                      a < o;
                      a++
                    )
                      i[a] = r.charCodeAt(a);
                    e(new Blob([i], { type: t || 'image/png' }));
                  },
                });
            var t,
              n,
              r,
              o = ['Webkit', 'Moz', 'ms'],
              i = 'undefined' != typeof document ? document.createElement('div').style : {},
              a = [1, 8, 3, 6],
              s = [2, 7, 4, 5];
            function f(e) {
              if (e in i) return e;
              for (var t = e[0].toUpperCase() + e.slice(1), n = o.length; n--; )
                if ((e = o[n] + t) in i) return e;
            }
            function c(e, t) {
              for (var n in ((e = e || {}), t))
                t[n] && t[n].constructor && t[n].constructor === Object
                  ? ((e[n] = e[n] || {}), c(e[n], t[n]))
                  : (e[n] = t[n]);
              return e;
            }
            function l(e) {
              return c({}, e);
            }
            function u(e) {
              if ('createEvent' in document) {
                var t = document.createEvent('HTMLEvents');
                t.initEvent('change', !1, !0), e.dispatchEvent(t);
              } else e.fireEvent('onchange');
            }
            function h(e, t, n) {
              if ('string' == typeof t) {
                var r = t;
                (t = {})[r] = n;
              }
              for (var o in t) e.style[o] = t[o];
            }
            function p(e, t) {
              e.classList ? e.classList.add(t) : (e.className += ' ' + t);
            }
            function d(e, t) {
              for (var n in t) e.setAttribute(n, t[n]);
            }
            function b(e) {
              return parseInt(e, 10);
            }
            function m(e, t) {
              var n = e.naturalWidth,
                r = e.naturalHeight,
                o = t || _(e);
              if (o && o >= 5) {
                var i = n;
                (n = r), (r = i);
              }
              return { width: n, height: r };
            }
            (n = f('transform')), (t = f('transformOrigin')), (r = f('userSelect'));
            var g = { translate3d: { suffix: ', 0px' }, translate: { suffix: '' } },
              v = function (e, t, n) {
                (this.x = parseFloat(e)), (this.y = parseFloat(t)), (this.scale = parseFloat(n));
              };
            (v.parse = function (e) {
              return e.style
                ? v.parse(e.style[n])
                : e.indexOf('matrix') > -1 || e.indexOf('none') > -1
                ? v.fromMatrix(e)
                : v.fromString(e);
            }),
              (v.fromMatrix = function (e) {
                var t = e.substring(7).split(',');
                return (
                  (t.length && 'none' !== e) || (t = [1, 0, 0, 1, 0, 0]),
                  new v(b(t[4]), b(t[5]), parseFloat(t[0]))
                );
              }),
              (v.fromString = function (e) {
                var t = e.split(') '),
                  n = t[0].substring(ie.globals.translate.length + 1).split(','),
                  r = t.length > 1 ? t[1].substring(6) : 1,
                  o = n.length > 1 ? n[0] : 0,
                  i = n.length > 1 ? n[1] : 0;
                return new v(o, i, r);
              }),
              (v.prototype.toString = function () {
                var e = g[ie.globals.translate].suffix || '';
                return (
                  ie.globals.translate +
                  '(' +
                  this.x +
                  'px, ' +
                  this.y +
                  'px' +
                  e +
                  ') scale(' +
                  this.scale +
                  ')'
                );
              });
            var y = function (e) {
              if (!e || !e.style[t]) return (this.x = 0), void (this.y = 0);
              var n = e.style[t].split(' ');
              (this.x = parseFloat(n[0])), (this.y = parseFloat(n[1]));
            };
            function _(e) {
              return e.exifdata && e.exifdata.Orientation ? b(e.exifdata.Orientation) : 1;
            }
            function w(e, t, n) {
              var r = t.width,
                o = t.height,
                i = e.getContext('2d');
              switch (((e.width = t.width), (e.height = t.height), i.save(), n)) {
                case 2:
                  i.translate(r, 0), i.scale(-1, 1);
                  break;
                case 3:
                  i.translate(r, o), i.rotate((180 * Math.PI) / 180);
                  break;
                case 4:
                  i.translate(0, o), i.scale(1, -1);
                  break;
                case 5:
                  (e.width = o), (e.height = r), i.rotate((90 * Math.PI) / 180), i.scale(1, -1);
                  break;
                case 6:
                  (e.width = o), (e.height = r), i.rotate((90 * Math.PI) / 180), i.translate(0, -o);
                  break;
                case 7:
                  (e.width = o),
                    (e.height = r),
                    i.rotate((-90 * Math.PI) / 180),
                    i.translate(-r, o),
                    i.scale(1, -1);
                  break;
                case 8:
                  (e.width = o), (e.height = r), i.translate(0, r), i.rotate((-90 * Math.PI) / 180);
              }
              i.drawImage(t, 0, 0, r, o), i.restore();
            }
            function x() {
              var e,
                t,
                n,
                r,
                o,
                i,
                a = this,
                s = a.options.viewport.type ? 'cr-vp-' + a.options.viewport.type : null;
              (a.options.useCanvas = a.options.enableOrientation || T.call(a)),
                (a.data = {}),
                (a.elements = {}),
                (e = a.elements.boundary = document.createElement('div')),
                (n = a.elements.viewport = document.createElement('div')),
                (t = a.elements.img = document.createElement('img')),
                (r = a.elements.overlay = document.createElement('div')),
                a.options.useCanvas
                  ? ((a.elements.canvas = document.createElement('canvas')),
                    (a.elements.preview = a.elements.canvas))
                  : (a.elements.preview = t),
                p(e, 'cr-boundary'),
                e.setAttribute('aria-dropeffect', 'none'),
                (o = a.options.boundary.width),
                (i = a.options.boundary.height),
                h(e, { width: o + (isNaN(o) ? '' : 'px'), height: i + (isNaN(i) ? '' : 'px') }),
                p(n, 'cr-viewport'),
                s && p(n, s),
                h(n, {
                  width: a.options.viewport.width + 'px',
                  height: a.options.viewport.height + 'px',
                }),
                n.setAttribute('tabindex', 0),
                p(a.elements.preview, 'cr-image'),
                d(a.elements.preview, { alt: 'preview', 'aria-grabbed': 'false' }),
                p(r, 'cr-overlay'),
                a.element.appendChild(e),
                e.appendChild(a.elements.preview),
                e.appendChild(n),
                e.appendChild(r),
                p(a.element, 'croppie-container'),
                a.options.customClass && p(a.element, a.options.customClass),
                A.call(this),
                a.options.enableZoom && C.call(a),
                a.options.enableResize && k.call(a);
            }
            function T() {
              return this.options.enableExif && window.EXIF;
            }
            function k() {
              var e,
                t,
                n,
                o,
                i,
                a,
                s,
                f = this,
                c = document.createElement('div'),
                l = !1,
                u = 50;
              function d(a) {
                if ((void 0 === a.button || 0 === a.button) && (a.preventDefault(), !l)) {
                  var s = f.elements.overlay.getBoundingClientRect();
                  if (
                    ((l = !0),
                    (t = a.pageX),
                    (n = a.pageY),
                    (e = -1 !== a.currentTarget.className.indexOf('vertical') ? 'v' : 'h'),
                    (o = s.width),
                    (i = s.height),
                    a.touches)
                  ) {
                    var c = a.touches[0];
                    (t = c.pageX), (n = c.pageY);
                  }
                  window.addEventListener('mousemove', b),
                    window.addEventListener('touchmove', b),
                    window.addEventListener('mouseup', m),
                    window.addEventListener('touchend', m),
                    (document.body.style[r] = 'none');
                }
              }
              function b(r) {
                var a = r.pageX,
                  s = r.pageY;
                if ((r.preventDefault(), r.touches)) {
                  var l = r.touches[0];
                  (a = l.pageX), (s = l.pageY);
                }
                var p = a - t,
                  d = s - n,
                  b = f.options.viewport.height + d,
                  m = f.options.viewport.width + p;
                'v' === e && b >= u && b <= i
                  ? (h(c, { height: b + 'px' }),
                    (f.options.boundary.height += d),
                    h(f.elements.boundary, { height: f.options.boundary.height + 'px' }),
                    (f.options.viewport.height += d),
                    h(f.elements.viewport, { height: f.options.viewport.height + 'px' }))
                  : 'h' === e &&
                    m >= u &&
                    m <= o &&
                    (h(c, { width: m + 'px' }),
                    (f.options.boundary.width += p),
                    h(f.elements.boundary, { width: f.options.boundary.width + 'px' }),
                    (f.options.viewport.width += p),
                    h(f.elements.viewport, { width: f.options.viewport.width + 'px' })),
                  z.call(f),
                  F.call(f),
                  console.log('*********#########update center point'),
                  O.call(f),
                  X.call(f),
                  (n = s),
                  (t = a);
              }
              function m() {
                (l = !1),
                  window.removeEventListener('mousemove', b),
                  window.removeEventListener('touchmove', b),
                  window.removeEventListener('mouseup', m),
                  window.removeEventListener('touchend', m),
                  (document.body.style[r] = '');
              }
              p(c, 'cr-resizer'),
                h(c, {
                  width: this.options.viewport.width + 'px',
                  height: this.options.viewport.height + 'px',
                }),
                this.options.resizeControls.height &&
                  (p((a = document.createElement('div')), 'cr-resizer-vertical'), c.appendChild(a)),
                this.options.resizeControls.width &&
                  (p((s = document.createElement('div')), 'cr-resizer-horisontal'),
                  c.appendChild(s)),
                a && (a.addEventListener('mousedown', d), a.addEventListener('touchstart', d)),
                s && (s.addEventListener('mousedown', d), s.addEventListener('touchstart', d)),
                this.elements.boundary.appendChild(c);
            }
            function E(e) {
              if (this.options.enableZoom) {
                var t = this.elements.zoomer,
                  n = G(e, 4);
                t.value = Math.max(parseFloat(t.min), Math.min(parseFloat(t.max), n)).toString();
              }
            }
            function C() {
              var e = this,
                t = (e.elements.zoomerWrap = document.createElement('div')),
                n = (e.elements.zoomer = document.createElement('input'));
              function r() {
                M.call(e, {
                  value: parseFloat(n.value),
                  origin: new y(e.elements.preview),
                  viewportRect: e.elements.viewport.getBoundingClientRect(),
                  transform: v.parse(e.elements.preview),
                });
              }
              function o(t) {
                var n, o;
                if ('ctrl' === e.options.mouseWheelZoom && !0 !== t.ctrlKey) return 0;
                (n = t.wheelDelta
                  ? t.wheelDelta / 1200
                  : t.deltaY
                  ? t.deltaY / 1060
                  : t.detail
                  ? t.detail / -60
                  : 0),
                  (o = e._currentZoom + n * e._currentZoom),
                  t.preventDefault(),
                  E.call(e, o),
                  r.call(e);
              }
              p(t, 'cr-slider-wrap'),
                p(n, 'cr-slider'),
                (n.type = 'range'),
                (n.step = '0.0001'),
                (n.value = '1'),
                (n.style.display = e.options.showZoomer ? '' : 'none'),
                n.setAttribute('aria-label', 'zoom'),
                e.element.appendChild(t),
                t.appendChild(n),
                (e._currentZoom = 1),
                e.elements.zoomer.addEventListener('input', r),
                e.elements.zoomer.addEventListener('change', r),
                e.options.mouseWheelZoom &&
                  (e.elements.boundary.addEventListener('mousewheel', o),
                  e.elements.boundary.addEventListener('DOMMouseScroll', o));
            }
            function M(e) {
              var r = this,
                o = e ? e.transform : v.parse(r.elements.preview),
                i = e ? e.viewportRect : r.elements.viewport.getBoundingClientRect(),
                a = e ? e.origin : new y(r.elements.preview);
              function s() {
                var e = {};
                (e[n] = o.toString()), (e[t] = a.toString()), h(r.elements.preview, e);
              }
              if (
                ((r._currentZoom = e ? e.value : r._currentZoom),
                (o.scale = r._currentZoom),
                r.elements.zoomer.setAttribute('aria-valuenow', r._currentZoom),
                s(),
                r.options.enforceBoundary)
              ) {
                var f = S.call(r, i),
                  c = f.translate,
                  l = f.origin;
                o.x >= c.maxX && ((a.x = l.minX), (o.x = c.maxX)),
                  o.x <= c.minX && ((a.x = l.maxX), (o.x = c.minX)),
                  o.y >= c.maxY && ((a.y = l.minY), (o.y = c.maxY)),
                  o.y <= c.minY && ((a.y = l.maxY), (o.y = c.minY));
              }
              s(), I.call(r), X.call(r);
            }
            function S(e) {
              var t = this,
                n = t._currentZoom,
                r = e.width,
                o = e.height,
                i = t.elements.boundary.clientWidth / 2,
                a = t.elements.boundary.clientHeight / 2,
                s = t.elements.preview.getBoundingClientRect(),
                f = s.width,
                c = s.height,
                l = r / 2,
                u = o / 2,
                h = -1 * (l / n - i),
                p = -1 * (u / n - a),
                d = (1 / n) * l,
                b = (1 / n) * u;
              return {
                translate: {
                  maxX: h,
                  minX: h - (f * (1 / n) - r * (1 / n)),
                  maxY: p,
                  minY: p - (c * (1 / n) - o * (1 / n)),
                },
                origin: { maxX: f * (1 / n) - d, minX: d, maxY: c * (1 / n) - b, minY: b },
              };
            }
            function O(e) {
              var r = this,
                o = r._currentZoom,
                i = r.elements.preview.getBoundingClientRect(),
                a = r.elements.viewport.getBoundingClientRect(),
                s = v.parse(r.elements.preview.style[n]),
                f = new y(r.elements.preview),
                c = a.top - i.top + a.height / 2,
                l = a.left - i.left + a.width / 2,
                u = {},
                p = {};
              if (e) {
                var d = f.x,
                  b = f.y,
                  m = s.x,
                  g = s.y;
                (u.y = d), (u.x = b), (s.y = m), (s.x = g);
              } else
                (u.y = c / o),
                  (u.x = l / o),
                  (p.y = (u.y - f.y) * (1 - o)),
                  (p.x = (u.x - f.x) * (1 - o)),
                  (s.x -= p.x),
                  (s.y -= p.y);
              var _ = {};
              (_[t] = u.x + 'px ' + u.y + 'px'), (_[n] = s.toString()), h(r.elements.preview, _);
            }
            function A() {
              var e,
                t,
                o,
                i,
                a,
                s = this,
                f = !1;
              function c(e, t) {
                var n = s.elements.preview.getBoundingClientRect(),
                  r = a.y + t,
                  o = a.x + e;
                s.options.enforceBoundary
                  ? (i.top > n.top + t && i.bottom < n.bottom + t && (a.y = r),
                    i.left > n.left + e && i.right < n.right + e && (a.x = o))
                  : ((a.y = r), (a.x = o));
              }
              function l(e) {
                s.elements.preview.setAttribute('aria-grabbed', e),
                  s.elements.boundary.setAttribute('aria-dropeffect', e ? 'move' : 'none');
              }
              function p(n) {
                if ((void 0 === n.button || 0 === n.button) && (n.preventDefault(), !f)) {
                  if (((f = !0), (e = n.pageX), (t = n.pageY), n.touches)) {
                    var o = n.touches[0];
                    (e = o.pageX), (t = o.pageY);
                  }
                  l(f),
                    (a = v.parse(s.elements.preview)),
                    window.addEventListener('mousemove', d),
                    window.addEventListener('touchmove', d),
                    window.addEventListener('mouseup', b),
                    window.addEventListener('touchend', b),
                    (document.body.style[r] = 'none'),
                    (i = s.elements.viewport.getBoundingClientRect());
                }
              }
              function d(r) {
                r.preventDefault();
                var i = r.pageX,
                  f = r.pageY;
                if (r.touches) {
                  var l = r.touches[0];
                  (i = l.pageX), (f = l.pageY);
                }
                var p = i - e,
                  d = f - t,
                  b = {};
                if ('touchmove' === r.type && r.touches.length > 1) {
                  var m = r.touches[0],
                    g = r.touches[1],
                    v = Math.sqrt(
                      (m.pageX - g.pageX) * (m.pageX - g.pageX) +
                        (m.pageY - g.pageY) * (m.pageY - g.pageY)
                    );
                  o || (o = v / s._currentZoom);
                  var y = v / o;
                  return E.call(s, y), void u(s.elements.zoomer);
                }
                c(p, d),
                  (b[n] = a.toString()),
                  h(s.elements.preview, b),
                  z.call(s),
                  (t = f),
                  (e = i);
              }
              function b() {
                l((f = !1)),
                  window.removeEventListener('mousemove', d),
                  window.removeEventListener('touchmove', d),
                  window.removeEventListener('mouseup', b),
                  window.removeEventListener('touchend', b),
                  (document.body.style[r] = ''),
                  O.call(s),
                  X.call(s),
                  (o = 0);
              }
              s.elements.overlay.addEventListener('mousedown', p),
                s.elements.viewport.addEventListener('keydown', function (e) {
                  var t,
                    f = 37,
                    l = 38,
                    u = 39,
                    p = 40;
                  if (!e.shiftKey || (e.keyCode !== l && e.keyCode !== p)) {
                    if (s.options.enableKeyMovement && e.keyCode >= 37 && e.keyCode <= 40) {
                      e.preventDefault();
                      var d = (function (e) {
                        switch (e) {
                          case f:
                            return [1, 0];
                          case l:
                            return [0, 1];
                          case u:
                            return [-1, 0];
                          case p:
                            return [0, -1];
                        }
                      })(e.keyCode);
                      (a = v.parse(s.elements.preview)),
                        (document.body.style[r] = 'none'),
                        (i = s.elements.viewport.getBoundingClientRect()),
                        (function (e) {
                          var t = {};
                          c(e[0], e[1]),
                            (t[n] = a.toString()),
                            h(s.elements.preview, t),
                            z.call(s),
                            (document.body.style[r] = ''),
                            O.call(s),
                            X.call(s),
                            (o = 0);
                        })(d);
                    }
                  } else (t = e.keyCode === l ? parseFloat(s.elements.zoomer.value) + parseFloat(s.elements.zoomer.step) : parseFloat(s.elements.zoomer.value) - parseFloat(s.elements.zoomer.step)), s.setZoom(t);
                }),
                s.elements.overlay.addEventListener('touchstart', p);
            }
            function z() {
              if (this.elements) {
                var e = this,
                  t = e.elements.boundary.getBoundingClientRect(),
                  n = e.elements.preview.getBoundingClientRect();
                h(e.elements.overlay, {
                  width: n.width + 'px',
                  height: n.height + 'px',
                  top: n.top - t.top + 'px',
                  left: n.left - t.left + 'px',
                });
              }
            }
            y.prototype.toString = function () {
              return this.x + 'px ' + this.y + 'px';
            };
            var P,
              D,
              L,
              R,
              I =
                ((P = z),
                (D = 500),
                function () {
                  var e = this,
                    t = arguments,
                    n = L && !R;
                  clearTimeout(R),
                    (R = setTimeout(function () {
                      (R = null), L || P.apply(e, t);
                    }, D)),
                    n && P.apply(e, t);
                });
            function X() {
              var e,
                t = this,
                n = t.get();
              Y.call(t) &&
                (t.options.update.call(t, n),
                t.$ && 'undefined' == typeof Prototype
                  ? t.$(t.element).trigger('update.croppie', n)
                  : (window.CustomEvent
                      ? (e = new CustomEvent('update', { detail: n }))
                      : (e = document.createEvent('CustomEvent')).initCustomEvent(
                          'update',
                          !0,
                          !0,
                          n
                        ),
                    t.element.dispatchEvent(e)));
            }
            function Y() {
              return (
                this.elements.preview.offsetHeight > 0 && this.elements.preview.offsetWidth > 0
              );
            }
            function B() {
              var e,
                r = this,
                o = {},
                i = r.elements.preview,
                a = new v(0, 0, 1),
                s = new y();
              Y.call(r) &&
                !r.data.bound &&
                ((r.data.bound = !0),
                (o[n] = a.toString()),
                (o[t] = s.toString()),
                (o.opacity = 1),
                h(i, o),
                (e = r.elements.preview.getBoundingClientRect()),
                (r._originalImageWidth = e.width),
                (r._originalImageHeight = e.height),
                (r.data.orientation = T.call(r) ? _(r.elements.img) : r.data.orientation),
                r.options.enableZoom ? F.call(r, !0) : (r._currentZoom = 1),
                (a.scale = r._currentZoom),
                (o[n] = a.toString()),
                h(i, o),
                r.data.points.length ? N.call(r, r.data.points) : Z.call(r),
                O.call(r),
                z.call(r));
            }
            function F(e) {
              var t,
                n,
                r,
                o,
                i = this,
                a = Math.max(i.options.minZoom, 0) || 0,
                s = i.options.maxZoom || 1.5,
                f = i.elements.zoomer,
                c = parseFloat(f.value),
                l = i.elements.boundary.getBoundingClientRect(),
                h = m(i.elements.img, i.data.orientation),
                p = i.elements.viewport.getBoundingClientRect();
              i.options.enforceBoundary &&
                ((r = p.width / h.width), (o = p.height / h.height), (a = Math.max(r, o))),
                a >= s && (s = a + 1),
                (f.min = G(a, 4)),
                (f.max = G(s, 4)),
                !e && (c < f.min || c > f.max)
                  ? E.call(i, c < f.min ? f.min : f.max)
                  : e &&
                    ((n = Math.max(l.width / h.width, l.height / h.height)),
                    (t = null !== i.data.boundZoom ? i.data.boundZoom : n),
                    E.call(i, t)),
                u(f);
            }
            function N(e) {
              if (4 !== e.length) throw 'Croppie - Invalid number of points supplied: ' + e;
              var r = this,
                o = e[2] - e[0],
                i = r.elements.viewport.getBoundingClientRect(),
                a = r.elements.boundary.getBoundingClientRect(),
                s = i.left - a.left,
                f = i.top - a.top,
                c = i.width / o,
                l = e[1],
                u = e[0],
                p = -1 * e[1] + f,
                d = -1 * e[0] + s,
                b = {};
              (b[t] = u + 'px ' + l + 'px'),
                (b[n] = new v(d, p, c).toString()),
                h(r.elements.preview, b),
                E.call(r, c),
                (r._currentZoom = c);
            }
            function Z() {
              var e = this,
                t = e.elements.preview.getBoundingClientRect(),
                r = e.elements.viewport.getBoundingClientRect(),
                o = e.elements.boundary.getBoundingClientRect(),
                i = r.left - o.left,
                a = r.top - o.top,
                s = i - (t.width - r.width) / 2,
                f = a - (t.height - r.height) / 2,
                c = new v(s, f, e._currentZoom);
              h(e.elements.preview, n, c.toString());
            }
            function q(e) {
              var t = this,
                n = t.elements.canvas,
                r = t.elements.img;
              n.getContext('2d').clearRect(0, 0, n.width, n.height),
                (n.width = r.width),
                (n.height = r.height),
                w(n, r, (t.options.enableOrientation && e) || _(r));
            }
            function H(e) {
              var t = this,
                n = e.points,
                r = b(n[0]),
                o = b(n[1]),
                i = b(n[2]) - r,
                a = b(n[3]) - o,
                s = e.circle,
                f = document.createElement('canvas'),
                c = f.getContext('2d'),
                l = e.outputWidth || i,
                u = e.outputHeight || a;
              (f.width = l),
                (f.height = u),
                e.backgroundColor && ((c.fillStyle = e.backgroundColor), c.fillRect(0, 0, l, u));
              var h = r,
                p = o,
                d = i,
                m = a,
                g = 0,
                v = 0,
                y = l,
                _ = u;
              return (
                r < 0 && ((h = 0), (g = (Math.abs(r) / i) * l)),
                d + h > t._originalImageWidth && (y = ((d = t._originalImageWidth - h) / i) * l),
                o < 0 && ((p = 0), (v = (Math.abs(o) / a) * u)),
                m + p > t._originalImageHeight && (_ = ((m = t._originalImageHeight - p) / a) * u),
                c.drawImage(this.elements.preview, h, p, d, m, g, v, y, _),
                s &&
                  ((c.fillStyle = '#fff'),
                  (c.globalCompositeOperation = 'destination-in'),
                  c.beginPath(),
                  c.arc(f.width / 2, f.height / 2, f.width / 2, 0, 2 * Math.PI, !0),
                  c.closePath(),
                  c.fill()),
                f
              );
            }
            function j(e) {
              var t = e.points,
                n = document.createElement('div'),
                r = document.createElement('img'),
                o = t[2] - t[0],
                i = t[3] - t[1];
              return (
                p(n, 'croppie-result'),
                n.appendChild(r),
                h(r, { left: -1 * t[0] + 'px', top: -1 * t[1] + 'px' }),
                (r.src = e.url),
                h(n, { width: o + 'px', height: i + 'px' }),
                n
              );
            }
            function W(e) {
              return H.call(this, e).toDataURL(e.format, e.quality);
            }
            function U(e) {
              var t = this;
              return new Promise(function (n) {
                H.call(t, e).toBlob(
                  function (e) {
                    n(e);
                  },
                  e.format,
                  e.quality
                );
              });
            }
            function V(e) {
              this.elements.img.parentNode &&
                (Array.prototype.forEach.call(this.elements.img.classList, function (t) {
                  e.classList.add(t);
                }),
                this.elements.img.parentNode.replaceChild(e, this.elements.img),
                (this.elements.preview = e)),
                (this.elements.img = e);
            }
            function $(e, t) {
              var n,
                r = this,
                o = [],
                i = null,
                a = T.call(r);
              if ('string' == typeof e) (n = e), (e = {});
              else if (Array.isArray(e)) o = e.slice();
              else {
                if (void 0 === e && r.data.url) return B.call(r), X.call(r), null;
                (n = e.url), (o = e.points || []), (i = void 0 === e.zoom ? null : e.zoom);
              }
              return (
                (r.data.bound = !1),
                (r.data.url = n || r.data.url),
                (r.data.boundZoom = i),
                (function (e, t) {
                  if (!e) throw 'Source image missing';
                  var n = new Image();
                  return (
                    (n.style.opacity = '0'),
                    new Promise(function (r, o) {
                      function i() {
                        (n.style.opacity = '1'),
                          setTimeout(function () {
                            r(n);
                          }, 1);
                      }
                      n.removeAttribute('crossOrigin'),
                        e.match(/^https?:\/\/|^\/\//) && n.setAttribute('crossOrigin', 'anonymous'),
                        (n.onload = function () {
                          t
                            ? EXIF.getData(n, function () {
                                i();
                              })
                            : i();
                        }),
                        (n.onerror = function (e) {
                          (n.style.opacity = 1),
                            setTimeout(function () {
                              o(e);
                            }, 1);
                        }),
                        (n.src = e);
                    })
                  );
                })(n, a).then(function (n) {
                  if ((V.call(r, n), o.length))
                    r.options.relative &&
                      (o = [
                        (o[0] * n.naturalWidth) / 100,
                        (o[1] * n.naturalHeight) / 100,
                        (o[2] * n.naturalWidth) / 100,
                        (o[3] * n.naturalHeight) / 100,
                      ]);
                  else {
                    var i,
                      a,
                      s = m(n),
                      f = r.elements.viewport.getBoundingClientRect(),
                      c = f.width / f.height;
                    s.width / s.height > c
                      ? (i = (a = s.height) * c)
                      : ((i = s.width), (a = s.height / c));
                    var l = (s.width - i) / 2,
                      u = (s.height - a) / 2,
                      h = l + i,
                      p = u + a;
                    r.data.points = [l, u, h, p];
                  }
                  (r.data.orientation = e.orientation || 1),
                    (r.data.points = o.map(function (e) {
                      return parseFloat(e);
                    })),
                    r.options.useCanvas && q.call(r, r.data.orientation),
                    B.call(r),
                    X.call(r),
                    t && t();
                })
              );
            }
            function G(e, t) {
              return parseFloat(e).toFixed(t || 0);
            }
            function K() {
              var e = this,
                t = e.elements.preview.getBoundingClientRect(),
                n = e.elements.viewport.getBoundingClientRect(),
                r = n.left - t.left,
                o = n.top - t.top,
                i = (n.width - e.elements.viewport.offsetWidth) / 2,
                a = (n.height - e.elements.viewport.offsetHeight) / 2,
                s = r + e.elements.viewport.offsetWidth + i,
                f = o + e.elements.viewport.offsetHeight + a,
                c = e._currentZoom;
              (c === 1 / 0 || isNaN(c)) && (c = 1);
              var l = e.options.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
              return (
                (r = Math.max(l, r / c)),
                (o = Math.max(l, o / c)),
                (s = Math.max(l, s / c)),
                (f = Math.max(l, f / c)),
                { points: [G(r), G(o), G(s), G(f)], zoom: c, orientation: e.data.orientation }
              );
            }
            var Q = { type: 'canvas', format: 'png', quality: 1 },
              J = ['jpeg', 'webp', 'png'];
            function ee(e) {
              var t = this,
                n = K.call(t),
                r = c(l(Q), l(e)),
                o = 'string' == typeof e ? e : r.type || 'base64',
                i = r.size || 'viewport',
                a = r.format,
                s = r.quality,
                f = r.backgroundColor,
                u = 'boolean' == typeof r.circle ? r.circle : 'circle' === t.options.viewport.type,
                h = t.elements.viewport.getBoundingClientRect(),
                p = h.width / h.height;
              return (
                'viewport' === i
                  ? ((n.outputWidth = h.width), (n.outputHeight = h.height))
                  : 'object' == typeof i &&
                    (i.width && i.height
                      ? ((n.outputWidth = i.width), (n.outputHeight = i.height))
                      : i.width
                      ? ((n.outputWidth = i.width), (n.outputHeight = i.width / p))
                      : i.height && ((n.outputWidth = i.height * p), (n.outputHeight = i.height))),
                J.indexOf(a) > -1 && ((n.format = 'image/' + a), (n.quality = s)),
                (n.circle = u),
                (n.url = t.data.url),
                (n.backgroundColor = f),
                new Promise(function (e) {
                  switch (o.toLowerCase()) {
                    case 'rawcanvas':
                      e(H.call(t, n));
                      break;
                    case 'canvas':
                    case 'base64':
                      e(W.call(t, n));
                      break;
                    case 'blob':
                      U.call(t, n).then(e);
                      break;
                    default:
                      e(j.call(t, n));
                  }
                })
              );
            }
            function te() {
              B.call(this);
            }
            function ne(e) {
              if (!this.options.useCanvas || !this.options.enableOrientation)
                throw 'Croppie: Cannot rotate without enableOrientation && EXIF.js included';
              var t,
                n,
                r,
                o,
                i,
                f = this,
                c = f.elements.canvas;
              if (
                ((f.data.orientation =
                  ((t = f.data.orientation),
                  (n = e),
                  (r = a.indexOf(t) > -1 ? a : s),
                  (o = r.indexOf(t)),
                  (i = (n / 90) % r.length),
                  r[(r.length + o + (i % r.length)) % r.length])),
                w(c, f.elements.img, f.data.orientation),
                O.call(f, !0),
                F.call(f),
                (Math.abs(e) / 90) % 2 == 1)
              ) {
                var l = f._originalImageHeight,
                  u = f._originalImageWidth;
                (f._originalImageWidth = l), (f._originalImageHeight = u);
              }
            }
            function re() {
              var e,
                t,
                n = this;
              n.element.removeChild(n.elements.boundary),
                (e = n.element),
                (t = 'croppie-container'),
                e.classList ? e.classList.remove(t) : (e.className = e.className.replace(t, '')),
                n.options.enableZoom && n.element.removeChild(n.elements.zoomerWrap),
                delete n.elements;
            }
            if ('undefined' != typeof window && window.jQuery) {
              var oe = window.jQuery;
              oe.fn.croppie = function (e) {
                if ('string' == typeof e) {
                  var t = Array.prototype.slice.call(arguments, 1),
                    n = oe(this).data('croppie');
                  return 'get' === e
                    ? n.get()
                    : 'result' === e
                    ? n.result.apply(n, t)
                    : 'bind' === e
                    ? n.bind.apply(n, t)
                    : this.each(function () {
                        var n = oe(this).data('croppie');
                        if (n) {
                          var r = n[e];
                          if (!oe.isFunction(r)) throw 'Croppie ' + e + ' method not found';
                          r.apply(n, t), 'destroy' === e && oe(this).removeData('croppie');
                        }
                      });
                }
                return this.each(function () {
                  var t = new ie(this, e);
                  (t.$ = oe), oe(this).data('croppie', t);
                });
              };
            }
            function ie(e, t) {
              if (e.className.indexOf('croppie-container') > -1)
                throw new Error("Croppie: Can't initialize croppie more than once");
              if (
                ((this.element = e),
                (this.options = c(l(ie.defaults), t)),
                'img' === this.element.tagName.toLowerCase())
              ) {
                var n = this.element;
                p(n, 'cr-original-image'), d(n, { 'aria-hidden': 'true', alt: '' });
                var r = document.createElement('div');
                this.element.parentNode.appendChild(r),
                  r.appendChild(n),
                  (this.element = r),
                  (this.options.url = this.options.url || n.src);
              }
              if ((x.call(this), this.options.url)) {
                var o = { url: this.options.url, points: this.options.points };
                delete this.options.url, delete this.options.points, $.call(this, o);
              }
            }
            return (
              (ie.defaults = {
                viewport: { width: 100, height: 100, type: 'square' },
                boundary: {},
                orientationControls: { enabled: !0, leftClass: '', rightClass: '' },
                resizeControls: { width: !0, height: !0 },
                customClass: '',
                showZoomer: !0,
                enableZoom: !0,
                enableResize: !1,
                mouseWheelZoom: !0,
                enableExif: !1,
                enforceBoundary: !0,
                enableOrientation: !1,
                enableKeyMovement: !0,
                update: function () {},
              }),
              (ie.globals = { translate: 'translate3d' }),
              c(ie.prototype, {
                bind: function (e, t) {
                  return $.call(this, e, t);
                },
                get: function () {
                  var e = K.call(this),
                    t = e.points;
                  return (
                    this.options.relative &&
                      ((t[0] /= this.elements.img.naturalWidth / 100),
                      (t[1] /= this.elements.img.naturalHeight / 100),
                      (t[2] /= this.elements.img.naturalWidth / 100),
                      (t[3] /= this.elements.img.naturalHeight / 100)),
                    e
                  );
                },
                result: function (e) {
                  return ee.call(this, e);
                },
                refresh: function () {
                  return te.call(this);
                },
                setZoom: function (e) {
                  E.call(this, e), u(this.elements.zoomer);
                },
                rotate: function (e) {
                  ne.call(this, e);
                },
                destroy: function () {
                  return re.call(this);
                },
              }),
              ie
            );
          }),
          void 0 === (o = r.call(t, n, t, e)) || (e.exports = o);
      },
      43: (e, t, n) => {
        'use strict';
        e.exports = n.p + '8b43027f47b20503057d.eot';
      },
      975: (e, t, n) => {
        'use strict';
        e.exports = n.p + '8b43027f47b20503057d.eot?v=4.7.0';
      },
      197: (e, t, n) => {
        'use strict';
        e.exports = n.p + 'c1e38fd9e0e74ba58f7a.svg?v=4.7.0';
      },
      615: (e, t, n) => {
        'use strict';
        e.exports = n.p + '1e59d2330b4c6deb84b3.ttf?v=4.7.0';
      },
      35: (e, t, n) => {
        'use strict';
        e.exports = n.p + '20fd1704ea223900efa9.woff2?v=4.7.0';
      },
      809: (e, t, n) => {
        'use strict';
        e.exports = n.p + 'f691f37e57f04c152e23.woff?v=4.7.0';
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + '');
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName('script');
        r.length && (e = r[r.length - 1].src);
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser');
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (n.p = e);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      'use strict';
      var e = n(379),
        t = n.n(e),
        r = n(795),
        o = n.n(r),
        i = n(569),
        a = n.n(i),
        s = n(565),
        f = n.n(s),
        c = n(216),
        l = n.n(c),
        u = n(589),
        h = n.n(u),
        p = n(705),
        d = {};
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function m(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      (d.styleTagTransform = h()),
        (d.setAttributes = f()),
        (d.insert = a().bind(null, 'head')),
        (d.domAPI = o()),
        (d.insertStyleElement = l()),
        t()(p.Z, d),
        p.Z && p.Z.locals && p.Z.locals;
      var g,
        v,
        y,
        _,
        w,
        x,
        T,
        k,
        E,
        C,
        M,
        S,
        O,
        A,
        z,
        P = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
        D = { duration: 0.5, overwrite: !1, delay: 0 },
        L = 1e8,
        R = 1 / L,
        I = 2 * Math.PI,
        X = I / 4,
        Y = 0,
        B = Math.sqrt,
        F = Math.cos,
        N = Math.sin,
        Z = function (e) {
          return 'string' == typeof e;
        },
        q = function (e) {
          return 'function' == typeof e;
        },
        H = function (e) {
          return 'number' == typeof e;
        },
        j = function (e) {
          return void 0 === e;
        },
        W = function (e) {
          return 'object' == typeof e;
        },
        U = function (e) {
          return !1 !== e;
        },
        V = function () {
          return 'undefined' != typeof window;
        },
        $ = function (e) {
          return q(e) || Z(e);
        },
        G = ('function' == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
        K = Array.isArray,
        Q = /(?:-?\.?\d|\.)+/gi,
        J = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        ee = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        te = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ne = /[+-]=-?[.\d]+/,
        re = /[^,'"\[\]\s]+/gi,
        oe = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ie = {},
        ae = {},
        se = function (e) {
          return (ae = Ie(e, ie)) && In;
        },
        fe = function (e, t) {
          return console.warn(
            'Invalid property',
            e,
            'set to',
            t,
            'Missing plugin? gsap.registerPlugin()'
          );
        },
        ce = function (e, t) {
          return !t && console.warn(e);
        },
        le = function (e, t) {
          return (e && (ie[e] = t) && ae && (ae[e] = t)) || ie;
        },
        ue = function () {
          return 0;
        },
        he = { suppressEvents: !0, isStart: !0, kill: !1 },
        pe = { suppressEvents: !0, kill: !1 },
        de = { suppressEvents: !0 },
        be = {},
        me = [],
        ge = {},
        ve = {},
        ye = {},
        _e = 30,
        we = [],
        xe = '',
        Te = function (e) {
          var t,
            n,
            r = e[0];
          if ((W(r) || q(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
            for (n = we.length; n-- && !we[n].targetTest(r); );
            t = we[n];
          }
          for (n = e.length; n--; )
            (e[n] && (e[n]._gsap || (e[n]._gsap = new Gt(e[n], t)))) || e.splice(n, 1);
          return e;
        },
        ke = function (e) {
          return e._gsap || Te(dt(e))[0]._gsap;
        },
        Ee = function (e, t, n) {
          return (n = e[t]) && q(n) ? e[t]() : (j(n) && e.getAttribute && e.getAttribute(t)) || n;
        },
        Ce = function (e, t) {
          return (e = e.split(',')).forEach(t) || e;
        },
        Me = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        Se = function (e) {
          return Math.round(1e7 * e) / 1e7 || 0;
        },
        Oe = function (e, t) {
          var n = t.charAt(0),
            r = parseFloat(t.substr(2));
          return (
            (e = parseFloat(e)), '+' === n ? e + r : '-' === n ? e - r : '*' === n ? e * r : e / r
          );
        },
        Ae = function (e, t) {
          for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
          return r < n;
        },
        ze = function () {
          var e,
            t,
            n = me.length,
            r = me.slice(0);
          for (ge = {}, me.length = 0, e = 0; e < n; e++)
            (t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
        },
        Pe = function (e, t, n, r) {
          me.length && !v && ze(),
            e.render(t, n, r || (v && t < 0 && (e._initted || e._startAt))),
            me.length && !v && ze();
        },
        De = function (e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + '').match(re).length < 2 ? t : Z(e) ? e.trim() : e;
        },
        Le = function (e) {
          return e;
        },
        Re = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        Ie = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        Xe = function e(t, n) {
          for (var r in n)
            '__proto__' !== r &&
              'constructor' !== r &&
              'prototype' !== r &&
              (t[r] = W(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
          return t;
        },
        Ye = function (e, t) {
          var n,
            r = {};
          for (n in e) n in t || (r[n] = e[n]);
          return r;
        },
        Be = function (e) {
          var t,
            n = e.parent || _,
            r = e.keyframes
              ? ((t = K(e.keyframes)),
                function (e, n) {
                  for (var r in n)
                    r in e || ('duration' === r && t) || 'ease' === r || (e[r] = n[r]);
                })
              : Re;
          if (U(e.inherit)) for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
          return e;
        },
        Fe = function (e, t, n, r, o) {
          void 0 === n && (n = '_first'), void 0 === r && (r = '_last');
          var i,
            a = e[r];
          if (o) for (i = t[o]; a && a[o] > i; ) a = a._prev;
          return (
            a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
            t._next ? (t._next._prev = t) : (e[r] = t),
            (t._prev = a),
            (t.parent = t._dp = e),
            t
          );
        },
        Ne = function (e, t, n, r) {
          void 0 === n && (n = '_first'), void 0 === r && (r = '_last');
          var o = t._prev,
            i = t._next;
          o ? (o._next = i) : e[n] === t && (e[n] = i),
            i ? (i._prev = o) : e[r] === t && (e[r] = o),
            (t._next = t._prev = t.parent = null);
        },
        Ze = function (e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), (e._act = 0);
        },
        qe = function (e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
          return e;
        },
        He = function (e) {
          for (var t = e.parent; t && t.parent; ) (t._dirty = 1), t.totalDuration(), (t = t.parent);
          return e;
        },
        je = function (e, t, n, r) {
          return (
            e._startAt &&
            (v
              ? e._startAt.revert(pe)
              : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(t, !0, r))
          );
        },
        We = function e(t) {
          return !t || (t._ts && e(t.parent));
        },
        Ue = function (e) {
          return e._repeat ? Ve(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
        },
        Ve = function (e, t) {
          var n = Math.floor((e /= t));
          return e && n === e ? n - 1 : n;
        },
        $e = function (e, t) {
          return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
        },
        Ge = function (e) {
          return (e._end = Se(e._start + (e._tDur / Math.abs(e._ts || e._rts || R) || 0)));
        },
        Ke = function (e, t) {
          var n = e._dp;
          return (
            n &&
              n.smoothChildTiming &&
              e._ts &&
              ((e._start = Se(
                n._time -
                  (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
              )),
              Ge(e),
              n._dirty || qe(n, e)),
            e
          );
        },
        Qe = function (e, t) {
          var n;
          if (
            ((t._time || (t._initted && !t._dur)) &&
              ((n = $e(e.rawTime(), t)),
              (!t._dur || lt(0, t.totalDuration(), n) - t._tTime > R) && t.render(n, !0)),
            qe(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
          ) {
            if (e._dur < e.duration())
              for (n = e; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            e._zTime = -R;
          }
        },
        Je = function (e, t, n, r) {
          return (
            t.parent && Ze(t),
            (t._start = Se((H(n) ? n : n || e !== _ ? st(e, n, t) : e._time) + t._delay)),
            (t._end = Se(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
            Fe(e, t, '_first', '_last', e._sort ? '_start' : 0),
            rt(t) || (e._recent = t),
            r || Qe(e, t),
            e._ts < 0 && Ke(e, e._tTime),
            e
          );
        },
        et = function (e, t) {
          return (ie.ScrollTrigger || fe('scrollTrigger', t)) && ie.ScrollTrigger.create(t, e);
        },
        tt = function (e, t, n, r, o) {
          return (
            on(e, t, o),
            e._initted
              ? !n &&
                e._pt &&
                !v &&
                ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
                E !== Xt.frame
                ? (me.push(e), (e._lazy = [o, r]), 1)
                : void 0
              : 1
          );
        },
        nt = function e(t) {
          var n = t.parent;
          return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
        },
        rt = function (e) {
          var t = e.data;
          return 'isFromStart' === t || 'isStart' === t;
        },
        ot = function (e, t, n, r) {
          var o = e._repeat,
            i = Se(t) || 0,
            a = e._tTime / e._tDur;
          return (
            a && !r && (e._time *= i / e._dur),
            (e._dur = i),
            (e._tDur = o ? (o < 0 ? 1e10 : Se(i * (o + 1) + e._rDelay * o)) : i),
            a > 0 && !r && Ke(e, (e._tTime = e._tDur * a)),
            e.parent && Ge(e),
            n || qe(e.parent, e),
            e
          );
        },
        it = function (e) {
          return e instanceof Qt ? qe(e) : ot(e, e._dur);
        },
        at = { _start: 0, endTime: ue, totalDuration: ue },
        st = function e(t, n, r) {
          var o,
            i,
            a,
            s = t.labels,
            f = t._recent || at,
            c = t.duration() >= L ? f.endTime(!1) : t._dur;
          return Z(n) && (isNaN(n) || n in s)
            ? ((i = n.charAt(0)),
              (a = '%' === n.substr(-1)),
              (o = n.indexOf('=')),
              '<' === i || '>' === i
                ? (o >= 0 && (n = n.replace(/=/, '')),
                  ('<' === i ? f._start : f.endTime(f._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (a ? (o < 0 ? f : r).totalDuration() / 100 : 1))
                : o < 0
                ? (n in s || (s[n] = c), s[n])
                : ((i = parseFloat(n.charAt(o - 1) + n.substr(o + 1))),
                  a && r && (i = (i / 100) * (K(r) ? r[0] : r).totalDuration()),
                  o > 1 ? e(t, n.substr(0, o - 1), r) + i : c + i))
            : null == n
            ? c
            : +n;
        },
        ft = function (e, t, n) {
          var r,
            o,
            i = H(t[1]),
            a = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            s = t[a];
          if ((i && (s.duration = t[1]), (s.parent = n), e)) {
            for (r = s, o = n; o && !('immediateRender' in r); )
              (r = o.vars.defaults || {}), (o = U(o.vars.inherit) && o.parent);
            (s.immediateRender = U(r.immediateRender)),
              e < 2 ? (s.runBackwards = 1) : (s.startAt = t[a - 1]);
          }
          return new ln(t[0], s, t[a + 1]);
        },
        ct = function (e, t) {
          return e || 0 === e ? t(e) : t;
        },
        lt = function (e, t, n) {
          return n < e ? e : n > t ? t : n;
        },
        ut = function (e, t) {
          return Z(e) && (t = oe.exec(e)) ? t[1] : '';
        },
        ht = [].slice,
        pt = function (e, t) {
          return (
            e &&
            W(e) &&
            'length' in e &&
            ((!t && !e.length) || (e.length - 1 in e && W(e[0]))) &&
            !e.nodeType &&
            e !== w
          );
        },
        dt = function (e, t, n) {
          return y && !t && y.selector
            ? y.selector(e)
            : !Z(e) || n || (!x && Yt())
            ? K(e)
              ? (function (e, t, n) {
                  return (
                    void 0 === n && (n = []),
                    e.forEach(function (e) {
                      var r;
                      return (Z(e) && !t) || pt(e, 1) ? (r = n).push.apply(r, dt(e)) : n.push(e);
                    }) || n
                  );
                })(e, n)
              : pt(e)
              ? ht.call(e, 0)
              : e
              ? [e]
              : []
            : ht.call((t || T).querySelectorAll(e), 0);
        },
        bt = function (e) {
          return (
            (e = dt(e)[0] || ce('Invalid scope') || {}),
            function (t) {
              var n = e.current || e.nativeElement || e;
              return dt(
                t,
                n.querySelectorAll ? n : n === e ? ce('Invalid scope') || T.createElement('div') : e
              );
            }
          );
        },
        mt = function (e) {
          return e.sort(function () {
            return 0.5 - Math.random();
          });
        },
        gt = function (e) {
          if (q(e)) return e;
          var t = W(e) ? e : { each: e },
            n = jt(t.ease),
            r = t.from || 0,
            o = parseFloat(t.base) || 0,
            i = {},
            a = r > 0 && r < 1,
            s = isNaN(r) || a,
            f = t.axis,
            c = r,
            l = r;
          return (
            Z(r)
              ? (c = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
              : !a && s && ((c = r[0]), (l = r[1])),
            function (e, a, u) {
              var h,
                p,
                d,
                b,
                m,
                g,
                v,
                y,
                _,
                w = (u || t).length,
                x = i[w];
              if (!x) {
                if (!(_ = 'auto' === t.grid ? 0 : (t.grid || [1, L])[1])) {
                  for (v = -L; v < (v = u[_++].getBoundingClientRect().left) && _ < w; );
                  _--;
                }
                for (
                  x = i[w] = [],
                    h = s ? Math.min(_, w) * c - 0.5 : r % _,
                    p = _ === L ? 0 : s ? (w * l) / _ - 0.5 : (r / _) | 0,
                    v = 0,
                    y = L,
                    g = 0;
                  g < w;
                  g++
                )
                  (d = (g % _) - h),
                    (b = p - ((g / _) | 0)),
                    (x[g] = m = f ? Math.abs('y' === f ? b : d) : B(d * d + b * b)),
                    m > v && (v = m),
                    m < y && (y = m);
                'random' === r && mt(x),
                  (x.max = v - y),
                  (x.min = y),
                  (x.v = w =
                    (parseFloat(t.amount) ||
                      parseFloat(t.each) *
                        (_ > w ? w - 1 : f ? ('y' === f ? w / _ : _) : Math.max(_, w / _)) ||
                      0) * ('edges' === r ? -1 : 1)),
                  (x.b = w < 0 ? o - w : o),
                  (x.u = ut(t.amount || t.each) || 0),
                  (n = n && w < 0 ? qt(n) : n);
              }
              return (w = (x[e] - x.min) / x.max || 0), Se(x.b + (n ? n(w) : w) * x.v) + x.u;
            }
          );
        },
        vt = function (e) {
          var t = Math.pow(10, ((e + '').split('.')[1] || '').length);
          return function (n) {
            var r = Se(Math.round(parseFloat(n) / e) * e * t);
            return (r - (r % 1)) / t + (H(n) ? 0 : ut(n));
          };
        },
        yt = function (e, t) {
          var n,
            r,
            o = K(e);
          return (
            !o &&
              W(e) &&
              ((n = o = e.radius || L),
              e.values ? ((e = dt(e.values)), (r = !H(e[0])) && (n *= n)) : (e = vt(e.increment))),
            ct(
              t,
              o
                ? q(e)
                  ? function (t) {
                      return (r = e(t)), Math.abs(r - t) <= n ? r : t;
                    }
                  : function (t) {
                      for (
                        var o,
                          i,
                          a = parseFloat(r ? t.x : t),
                          s = parseFloat(r ? t.y : 0),
                          f = L,
                          c = 0,
                          l = e.length;
                        l--;

                      )
                        (o = r ? (o = e[l].x - a) * o + (i = e[l].y - s) * i : Math.abs(e[l] - a)) <
                          f && ((f = o), (c = l));
                      return (c = !n || f <= n ? e[c] : t), r || c === t || H(t) ? c : c + ut(t);
                    }
                : vt(e)
            )
          );
        },
        _t = function (e, t, n, r) {
          return ct(K(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
            return K(e)
              ? e[~~(Math.random() * e.length)]
              : (n = n || 1e-5) &&
                  (r = n < 1 ? Math.pow(10, (n + '').length - 2) : 1) &&
                  Math.floor(
                    Math.round((e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n) * n * r
                  ) / r;
          });
        },
        wt = function (e, t, n) {
          return ct(n, function (n) {
            return e[~~t(n)];
          });
        },
        xt = function (e) {
          for (var t, n, r, o, i = 0, a = ''; ~(t = e.indexOf('random(', i)); )
            (r = e.indexOf(')', t)),
              (o = '[' === e.charAt(t + 7)),
              (n = e.substr(t + 7, r - t - 7).match(o ? re : Q)),
              (a += e.substr(i, t - i) + _t(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
              (i = r + 1);
          return a + e.substr(i, e.length - i);
        },
        Tt = function (e, t, n, r, o) {
          var i = t - e,
            a = r - n;
          return ct(o, function (t) {
            return n + (((t - e) / i) * a || 0);
          });
        },
        kt = function (e, t, n) {
          var r,
            o,
            i,
            a = e.labels,
            s = L;
          for (r in a)
            (o = a[r] - t) < 0 == !!n && o && s > (o = Math.abs(o)) && ((i = r), (s = o));
          return i;
        },
        Et = function (e, t, n) {
          var r,
            o,
            i,
            a = e.vars,
            s = a[t],
            f = y,
            c = e._ctx;
          if (s)
            return (
              (r = a[t + 'Params']),
              (o = a.callbackScope || e),
              n && me.length && ze(),
              c && (y = c),
              (i = r ? s.apply(o, r) : s.call(o)),
              (y = f),
              i
            );
        },
        Ct = function (e) {
          return (
            Ze(e),
            e.scrollTrigger && e.scrollTrigger.kill(!!v),
            e.progress() < 1 && Et(e, 'onInterrupt'),
            e
          );
        },
        Mt = function (e) {
          var t = (e = (!e.name && e.default) || e).name,
            n = q(e),
            r =
              t && !n && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            o = { init: ue, render: yn, add: nn, kill: wn, modifier: _n, rawVars: 0 },
            i = { targetTest: 0, get: 0, getSetter: bn, aliases: {}, register: 0 };
          if ((Yt(), e !== r)) {
            if (ve[t]) return;
            Re(r, Re(Ye(e, o), i)),
              Ie(r.prototype, Ie(o, Ye(e, i))),
              (ve[(r.prop = t)] = r),
              e.targetTest && (we.push(r), (be[t] = 1)),
              (t = ('css' === t ? 'CSS' : t.charAt(0).toUpperCase() + t.substr(1)) + 'Plugin');
          }
          le(t, r), e.register && e.register(In, r, kn);
        },
        St = 255,
        Ot = {
          aqua: [0, St, St],
          lime: [0, St, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, St],
          navy: [0, 0, 128],
          white: [St, St, St],
          olive: [128, 128, 0],
          yellow: [St, St, 0],
          orange: [St, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [St, 0, 0],
          pink: [St, 192, 203],
          cyan: [0, St, St],
          transparent: [St, St, St, 0],
        },
        At = function (e, t, n) {
          return (
            ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
              ? t + (n - t) * e * 6
              : e < 0.5
              ? n
              : 3 * e < 2
              ? t + (n - t) * (2 / 3 - e) * 6
              : t) *
              St +
              0.5) |
            0
          );
        },
        zt = function (e, t, n) {
          var r,
            o,
            i,
            a,
            s,
            f,
            c,
            l,
            u,
            h,
            p = e ? (H(e) ? [e >> 16, (e >> 8) & St, e & St] : 0) : Ot.black;
          if (!p) {
            if ((',' === e.substr(-1) && (e = e.substr(0, e.length - 1)), Ot[e])) p = Ot[e];
            else if ('#' === e.charAt(0)) {
              if (
                (e.length < 6 &&
                  ((r = e.charAt(1)),
                  (o = e.charAt(2)),
                  (i = e.charAt(3)),
                  (e =
                    '#' +
                    r +
                    r +
                    o +
                    o +
                    i +
                    i +
                    (5 === e.length ? e.charAt(4) + e.charAt(4) : ''))),
                9 === e.length)
              )
                return [
                  (p = parseInt(e.substr(1, 6), 16)) >> 16,
                  (p >> 8) & St,
                  p & St,
                  parseInt(e.substr(7), 16) / 255,
                ];
              p = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & St, e & St];
            } else if ('hsl' === e.substr(0, 3))
              if (((p = h = e.match(Q)), t)) {
                if (~e.indexOf('=')) return (p = e.match(J)), n && p.length < 4 && (p[3] = 1), p;
              } else
                (a = (+p[0] % 360) / 360),
                  (s = +p[1] / 100),
                  (r = 2 * (f = +p[2] / 100) - (o = f <= 0.5 ? f * (s + 1) : f + s - f * s)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = At(a + 1 / 3, r, o)),
                  (p[1] = At(a, r, o)),
                  (p[2] = At(a - 1 / 3, r, o));
            else p = e.match(Q) || Ot.transparent;
            p = p.map(Number);
          }
          return (
            t &&
              !h &&
              ((r = p[0] / St),
              (o = p[1] / St),
              (i = p[2] / St),
              (f = ((c = Math.max(r, o, i)) + (l = Math.min(r, o, i))) / 2),
              c === l
                ? (a = s = 0)
                : ((u = c - l),
                  (s = f > 0.5 ? u / (2 - c - l) : u / (c + l)),
                  (a =
                    c === r
                      ? (o - i) / u + (o < i ? 6 : 0)
                      : c === o
                      ? (i - r) / u + 2
                      : (r - o) / u + 4),
                  (a *= 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * s + 0.5)),
              (p[2] = ~~(100 * f + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          );
        },
        Pt = function (e) {
          var t = [],
            n = [],
            r = -1;
          return (
            e.split(Lt).forEach(function (e) {
              var o = e.match(ee) || [];
              t.push.apply(t, o), n.push((r += o.length + 1));
            }),
            (t.c = n),
            t
          );
        },
        Dt = function (e, t, n) {
          var r,
            o,
            i,
            a,
            s = '',
            f = (e + s).match(Lt),
            c = t ? 'hsla(' : 'rgba(',
            l = 0;
          if (!f) return e;
          if (
            ((f = f.map(function (e) {
              return (
                (e = zt(e, t, 1)) &&
                c + (t ? e[0] + ',' + e[1] + '%,' + e[2] + '%,' + e[3] : e.join(',')) + ')'
              );
            })),
            n && ((i = Pt(e)), (r = n.c).join(s) !== i.c.join(s)))
          )
            for (a = (o = e.replace(Lt, '1').split(ee)).length - 1; l < a; l++)
              s +=
                o[l] +
                (~r.indexOf(l)
                  ? f.shift() || c + '0,0,0,0)'
                  : (i.length ? i : f.length ? f : n).shift());
          if (!o) for (a = (o = e.split(Lt)).length - 1; l < a; l++) s += o[l] + f[l];
          return s + o[a];
        },
        Lt = (function () {
          var e,
            t = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
          for (e in Ot) t += '|' + e + '\\b';
          return new RegExp(t + ')', 'gi');
        })(),
        Rt = /hsl[a]?\(/,
        It = function (e) {
          var t,
            n = e.join(' ');
          if (((Lt.lastIndex = 0), Lt.test(n)))
            return (t = Rt.test(n)), (e[1] = Dt(e[1], t)), (e[0] = Dt(e[0], t, Pt(e[1]))), !0;
        },
        Xt = (function () {
          var e,
            t,
            n,
            r,
            o,
            i,
            a = Date.now,
            s = 500,
            f = 33,
            c = a(),
            l = c,
            u = 1e3 / 240,
            h = u,
            p = [],
            d = function n(d) {
              var b,
                m,
                g,
                v,
                y = a() - l,
                _ = !0 === d;
              if (
                (y > s && (c += y - f),
                ((b = (g = (l += y) - c) - h) > 0 || _) &&
                  ((v = ++r.frame),
                  (o = g - 1e3 * r.time),
                  (r.time = g /= 1e3),
                  (h += b + (b >= u ? 4 : u - b)),
                  (m = 1)),
                _ || (e = t(n)),
                m)
              )
                for (i = 0; i < p.length; i++) p[i](g, o, v, d);
            };
          return (
            (r = {
              time: 0,
              frame: 0,
              tick: function () {
                d(!0);
              },
              deltaRatio: function (e) {
                return o / (1e3 / (e || 60));
              },
              wake: function () {
                k &&
                  (!x &&
                    V() &&
                    ((w = x = window),
                    (T = w.document || {}),
                    (ie.gsap = In),
                    (w.gsapVersions || (w.gsapVersions = [])).push(In.version),
                    se(ae || w.GreenSockGlobals || (!w.gsap && w) || {}),
                    (n = w.requestAnimationFrame)),
                  e && r.sleep(),
                  (t =
                    n ||
                    function (e) {
                      return setTimeout(e, (h - 1e3 * r.time + 1) | 0);
                    }),
                  (M = 1),
                  d(2));
              },
              sleep: function () {
                (n ? w.cancelAnimationFrame : clearTimeout)(e), (M = 0), (t = ue);
              },
              lagSmoothing: function (e, t) {
                (s = e || 1 / 0), (f = Math.min(t || 33, s));
              },
              fps: function (e) {
                (u = 1e3 / (e || 240)), (h = 1e3 * r.time + u);
              },
              add: function (e, t, n) {
                var o = t
                  ? function (t, n, i, a) {
                      e(t, n, i, a), r.remove(o);
                    }
                  : e;
                return r.remove(e), p[n ? 'unshift' : 'push'](o), Yt(), o;
              },
              remove: function (e, t) {
                ~(t = p.indexOf(e)) && p.splice(t, 1) && i >= t && i--;
              },
              _listeners: p,
            }),
            r
          );
        })(),
        Yt = function () {
          return !M && Xt.wake();
        },
        Bt = {},
        Ft = /^[\d.\-M][\d.\-,\s]/,
        Nt = /["']/g,
        Zt = function (e) {
          for (
            var t,
              n,
              r,
              o = {},
              i = e.substr(1, e.length - 3).split(':'),
              a = i[0],
              s = 1,
              f = i.length;
            s < f;
            s++
          )
            (n = i[s]),
              (t = s !== f - 1 ? n.lastIndexOf(',') : n.length),
              (r = n.substr(0, t)),
              (o[a] = isNaN(r) ? r.replace(Nt, '').trim() : +r),
              (a = n.substr(t + 1).trim());
          return o;
        },
        qt = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Ht = function e(t, n) {
          for (var r, o = t._first; o; )
            o instanceof Qt
              ? e(o, n)
              : !o.vars.yoyoEase ||
                (o._yoyo && o._repeat) ||
                o._yoyo === n ||
                (o.timeline
                  ? e(o.timeline, n)
                  : ((r = o._ease), (o._ease = o._yEase), (o._yEase = r), (o._yoyo = n))),
              (o = o._next);
        },
        jt = function (e, t) {
          return (
            (e &&
              (q(e)
                ? e
                : Bt[e] ||
                  (function (e) {
                    var t,
                      n,
                      r,
                      o,
                      i = (e + '').split('('),
                      a = Bt[i[0]];
                    return a && i.length > 1 && a.config
                      ? a.config.apply(
                          null,
                          ~e.indexOf('{')
                            ? [Zt(i[1])]
                            : ((t = e),
                              (n = t.indexOf('(') + 1),
                              (r = t.indexOf(')')),
                              (o = t.indexOf('(', n)),
                              t.substring(n, ~o && o < r ? t.indexOf(')', r + 1) : r))
                                .split(',')
                                .map(De)
                        )
                      : Bt._CE && Ft.test(e)
                      ? Bt._CE('', e)
                      : a;
                  })(e))) ||
            t
          );
        },
        Wt = function (e, t, n, r) {
          void 0 === n &&
            (n = function (e) {
              return 1 - t(1 - e);
            }),
            void 0 === r &&
              (r = function (e) {
                return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
              });
          var o,
            i = { easeIn: t, easeOut: n, easeInOut: r };
          return (
            Ce(e, function (e) {
              for (var t in ((Bt[e] = ie[e] = i), (Bt[(o = e.toLowerCase())] = n), i))
                Bt[o + ('easeIn' === t ? '.in' : 'easeOut' === t ? '.out' : '.inOut')] = Bt[
                  e + '.' + t
                ] = i[t];
            }),
            i
          );
        },
        Ut = function (e) {
          return function (t) {
            return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
          };
        },
        Vt = function e(t, n, r) {
          var o = n >= 1 ? n : 1,
            i = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            a = (i / I) * (Math.asin(1 / o) || 0),
            s = function (e) {
              return 1 === e ? 1 : o * Math.pow(2, -10 * e) * N((e - a) * i) + 1;
            },
            f =
              'out' === t
                ? s
                : 'in' === t
                ? function (e) {
                    return 1 - s(1 - e);
                  }
                : Ut(s);
          return (
            (i = I / i),
            (f.config = function (n, r) {
              return e(t, n, r);
            }),
            f
          );
        },
        $t = function e(t, n) {
          void 0 === n && (n = 1.70158);
          var r = function (e) {
              return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
            },
            o =
              'out' === t
                ? r
                : 'in' === t
                ? function (e) {
                    return 1 - r(1 - e);
                  }
                : Ut(r);
          return (
            (o.config = function (n) {
              return e(t, n);
            }),
            o
          );
        };
      Ce('Linear,Quad,Cubic,Quart,Quint,Strong', function (e, t) {
        var n = t < 5 ? t + 1 : t;
        Wt(
          e + ',Power' + (n - 1),
          t
            ? function (e) {
                return Math.pow(e, n);
              }
            : function (e) {
                return e;
              },
          function (e) {
            return 1 - Math.pow(1 - e, n);
          },
          function (e) {
            return e < 0.5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2;
          }
        );
      }),
        (Bt.Linear.easeNone = Bt.none = Bt.Linear.easeIn),
        Wt('Elastic', Vt('in'), Vt('out'), Vt()),
        (S = 7.5625),
        (A = 1 / (O = 2.75)),
        Wt(
          'Bounce',
          function (e) {
            return 1 - z(1 - e);
          },
          (z = function (e) {
            return e < A
              ? S * e * e
              : e < 0.7272727272727273
              ? S * Math.pow(e - 1.5 / O, 2) + 0.75
              : e < 0.9090909090909092
              ? S * (e -= 2.25 / O) * e + 0.9375
              : S * Math.pow(e - 2.625 / O, 2) + 0.984375;
          })
        ),
        Wt('Expo', function (e) {
          return e ? Math.pow(2, 10 * (e - 1)) : 0;
        }),
        Wt('Circ', function (e) {
          return -(B(1 - e * e) - 1);
        }),
        Wt('Sine', function (e) {
          return 1 === e ? 1 : 1 - F(e * X);
        }),
        Wt('Back', $t('in'), $t('out'), $t()),
        (Bt.SteppedEase =
          Bt.steps =
          ie.SteppedEase =
            {
              config: function (e, t) {
                void 0 === e && (e = 1);
                var n = 1 / e,
                  r = e + (t ? 0 : 1),
                  o = t ? 1 : 0,
                  i = 1 - R;
                return function (e) {
                  return (((r * lt(0, i, e)) | 0) + o) * n;
                };
              },
            }),
        (D.ease = Bt['quad.out']),
        Ce('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (e) {
          return (xe += e + ',' + e + 'Params,');
        });
      var Gt = function (e, t) {
          (this.id = Y++),
            (e._gsap = this),
            (this.target = e),
            (this.harness = t),
            (this.get = t ? t.get : Ee),
            (this.set = t ? t.getSetter : bn);
        },
        Kt = (function () {
          function e(e) {
            (this.vars = e),
              (this._delay = +e.delay || 0),
              (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
                ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
              (this._ts = 1),
              ot(this, +e.duration, 1, 1),
              (this.data = e.data),
              y && ((this._ctx = y), y.data.push(this)),
              M || Xt.wake();
          }
          var t = e.prototype;
          return (
            (t.delay = function (e) {
              return e || 0 === e
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + e - this._delay),
                  (this._delay = e),
                  this)
                : this._delay;
            }),
            (t.duration = function (e) {
              return arguments.length
                ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e)
                : this.totalDuration() && this._dur;
            }),
            (t.totalDuration = function (e) {
              return arguments.length
                ? ((this._dirty = 0),
                  ot(
                    this,
                    this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (t.totalTime = function (e, t) {
              if ((Yt(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (Ke(this, e), !n._dp || n.parent || Qe(n, this); n && n.parent; )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && e < this._tDur) ||
                    (this._ts < 0 && e > 0) ||
                    (!this._tDur && !e)) &&
                  Je(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== e ||
                  (!this._dur && !t) ||
                  (this._initted && Math.abs(this._zTime) === R) ||
                  (!e && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = e), Pe(this, e, t)),
                this
              );
            }),
            (t.time = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), e + Ue(this)) % (this._dur + this._rDelay) ||
                      (e ? this._dur : 0),
                    t
                  )
                : this._time;
            }),
            (t.totalProgress = function (e, t) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * e, t)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (t.progress = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Ue(this),
                    t
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (t.iteration = function (e, t) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (e - 1) * n, t)
                : this._repeat
                ? Ve(this._tTime, n) + 1
                : 1;
            }),
            (t.timeScale = function (e) {
              if (!arguments.length) return this._rts === -R ? 0 : this._rts;
              if (this._rts === e) return this;
              var t = this.parent && this._ts ? $e(this.parent._time, this) : this._tTime;
              return (
                (this._rts = +e || 0),
                (this._ts = this._ps || e === -R ? 0 : this._rts),
                this.totalTime(lt(-this._delay, this._tDur, t), !0),
                Ge(this),
                He(this)
              );
            }),
            (t.paused = function (e) {
              return arguments.length
                ? (this._ps !== e &&
                    ((this._ps = e),
                    e
                      ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Yt(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() && Math.abs(this._zTime) !== R && (this._tTime -= R)
                        ))),
                  this)
                : this._ps;
            }),
            (t.startTime = function (e) {
              if (arguments.length) {
                this._start = e;
                var t = this.parent || this._dp;
                return t && (t._sort || !this.parent) && Je(t, this, e - this._delay), this;
              }
              return this._start;
            }),
            (t.endTime = function (e) {
              return (
                this._start +
                (U(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
              );
            }),
            (t.rawTime = function (e) {
              var t = this.parent || this._dp;
              return t
                ? e && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? $e(t.rawTime(e), this)
                  : this._tTime
                : this._tTime;
            }),
            (t.revert = function (e) {
              void 0 === e && (e = de);
              var t = v;
              return (
                (v = e),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(e),
                  this.totalTime(-0.01, e.suppressEvents)),
                'nested' !== this.data && !1 !== e.kill && this.kill(),
                (v = t),
                this
              );
            }),
            (t.globalTime = function (e) {
              for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
                (n = t._start + n / (t._ts || 1)), (t = t._dp);
              return !this.parent && this._sat
                ? this._sat.vars.immediateRender
                  ? -1
                  : this._sat.globalTime(e)
                : n;
            }),
            (t.repeat = function (e) {
              return arguments.length
                ? ((this._repeat = e === 1 / 0 ? -2 : e), it(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (t.repeatDelay = function (e) {
              if (arguments.length) {
                var t = this._time;
                return (this._rDelay = e), it(this), t ? this.time(t) : this;
              }
              return this._rDelay;
            }),
            (t.yoyo = function (e) {
              return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
            }),
            (t.seek = function (e, t) {
              return this.totalTime(st(this, e), U(t));
            }),
            (t.restart = function (e, t) {
              return this.play().totalTime(e ? -this._delay : 0, U(t));
            }),
            (t.play = function (e, t) {
              return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
            }),
            (t.reverse = function (e, t) {
              return (
                null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
              );
            }),
            (t.pause = function (e, t) {
              return null != e && this.seek(e, t), this.paused(!0);
            }),
            (t.resume = function () {
              return this.paused(!1);
            }),
            (t.reversed = function (e) {
              return arguments.length
                ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -R : 0)), this)
                : this._rts < 0;
            }),
            (t.invalidate = function () {
              return (this._initted = this._act = 0), (this._zTime = -R), this;
            }),
            (t.isActive = function () {
              var e,
                t = this.parent || this._dp,
                n = this._start;
              return !(
                t &&
                !(
                  this._ts &&
                  this._initted &&
                  t.isActive() &&
                  (e = t.rawTime(!0)) >= n &&
                  e < this.endTime(!0) - R
                )
              );
            }),
            (t.eventCallback = function (e, t, n) {
              var r = this.vars;
              return arguments.length > 1
                ? (t
                    ? ((r[e] = t),
                      n && (r[e + 'Params'] = n),
                      'onUpdate' === e && (this._onUpdate = t))
                    : delete r[e],
                  this)
                : r[e];
            }),
            (t.then = function (e) {
              var t = this;
              return new Promise(function (n) {
                var r = q(e) ? e : Le,
                  o = function () {
                    var e = t.then;
                    (t.then = null),
                      q(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                      n(r),
                      (t.then = e);
                  };
                (t._initted && 1 === t.totalProgress() && t._ts >= 0) || (!t._tTime && t._ts < 0)
                  ? o()
                  : (t._prom = o);
              });
            }),
            (t.kill = function () {
              Ct(this);
            }),
            e
          );
        })();
      Re(Kt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -R,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Qt = (function (e) {
        function t(t, n) {
          var r;
          return (
            void 0 === t && (t = {}),
            ((r = e.call(this, t) || this).labels = {}),
            (r.smoothChildTiming = !!t.smoothChildTiming),
            (r.autoRemoveChildren = !!t.autoRemoveChildren),
            (r._sort = U(t.sortChildren)),
            _ && Je(t.parent || _, b(r), n),
            t.reversed && r.reverse(),
            t.paused && r.paused(!0),
            t.scrollTrigger && et(b(r), t.scrollTrigger),
            r
          );
        }
        m(t, e);
        var n = t.prototype;
        return (
          (n.to = function (e, t, n) {
            return ft(0, arguments, this), this;
          }),
          (n.from = function (e, t, n) {
            return ft(1, arguments, this), this;
          }),
          (n.fromTo = function (e, t, n, r) {
            return ft(2, arguments, this), this;
          }),
          (n.set = function (e, t, n) {
            return (
              (t.duration = 0),
              (t.parent = this),
              Be(t).repeatDelay || (t.repeat = 0),
              (t.immediateRender = !!t.immediateRender),
              new ln(e, t, st(this, n), 1),
              this
            );
          }),
          (n.call = function (e, t, n) {
            return Je(this, ln.delayedCall(0, e, t), n);
          }),
          (n.staggerTo = function (e, t, n, r, o, i, a) {
            return (
              (n.duration = t),
              (n.stagger = n.stagger || r),
              (n.onComplete = i),
              (n.onCompleteParams = a),
              (n.parent = this),
              new ln(e, n, st(this, o)),
              this
            );
          }),
          (n.staggerFrom = function (e, t, n, r, o, i, a) {
            return (
              (n.runBackwards = 1),
              (Be(n).immediateRender = U(n.immediateRender)),
              this.staggerTo(e, t, n, r, o, i, a)
            );
          }),
          (n.staggerFromTo = function (e, t, n, r, o, i, a, s) {
            return (
              (r.startAt = n),
              (Be(r).immediateRender = U(r.immediateRender)),
              this.staggerTo(e, t, r, o, i, a, s)
            );
          }),
          (n.render = function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              f,
              c,
              l,
              u,
              h,
              p,
              d,
              b = this._time,
              m = this._dirty ? this.totalDuration() : this._tDur,
              g = this._dur,
              y = e <= 0 ? 0 : Se(e),
              w = this._zTime < 0 != e < 0 && (this._initted || !g);
            if ((this !== _ && y > m && e >= 0 && (y = m), y !== this._tTime || n || w)) {
              if (
                (b !== this._time && g && ((y += this._time - b), (e += this._time - b)),
                (r = y),
                (u = this._start),
                (f = !(l = this._ts)),
                w && (g || (b = this._zTime), (e || !t) && (this._zTime = e)),
                this._repeat)
              ) {
                if (((p = this._yoyo), (s = g + this._rDelay), this._repeat < -1 && e < 0))
                  return this.totalTime(100 * s + e, t, n);
                if (
                  ((r = Se(y % s)),
                  y === m
                    ? ((a = this._repeat), (r = g))
                    : ((a = ~~(y / s)) && a === y / s && ((r = g), a--), r > g && (r = g)),
                  (h = Ve(this._tTime, s)),
                  !b && this._tTime && h !== a && (h = a),
                  p && 1 & a && ((r = g - r), (d = 1)),
                  a !== h && !this._lock)
                ) {
                  var x = p && 1 & h,
                    T = x === (p && 1 & a);
                  if (
                    (a < h && (x = !x),
                    (b = x ? 0 : g),
                    (this._lock = 1),
                    (this.render(b || (d ? 0 : Se(a * s)), t, !g)._lock = 0),
                    (this._tTime = y),
                    !t && this.parent && Et(this, 'onRepeat'),
                    this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1),
                    (b && b !== this._time) ||
                      f !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((g = this._dur),
                    (m = this._tDur),
                    T &&
                      ((this._lock = 2),
                      (b = x ? g : -1e-4),
                      this.render(b, !0),
                      this.vars.repeatRefresh && !d && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !f)
                  )
                    return this;
                  Ht(this, d);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((c = (function (e, t, n) {
                    var r;
                    if (n > t)
                      for (r = e._first; r && r._start <= n; ) {
                        if ('isPause' === r.data && r._start > t) return r;
                        r = r._next;
                      }
                    else
                      for (r = e._last; r && r._start >= n; ) {
                        if ('isPause' === r.data && r._start < t) return r;
                        r = r._prev;
                      }
                  })(this, Se(b), Se(r))),
                  c && (y -= r - (r = c._start))),
                (this._tTime = y),
                (this._time = r),
                (this._act = !l),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = e),
                  (b = 0)),
                !b && r && !t && (Et(this, 'onStart'), this._tTime !== y))
              )
                return this;
              if (r >= b && e >= 0)
                for (o = this._first; o; ) {
                  if (((i = o._next), (o._act || r >= o._start) && o._ts && c !== o)) {
                    if (o.parent !== this) return this.render(e, t, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (r - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) + (r - o._start) * o._ts,
                        t,
                        n
                      ),
                      r !== this._time || (!this._ts && !f))
                    ) {
                      (c = 0), i && (y += this._zTime = -R);
                      break;
                    }
                  }
                  o = i;
                }
              else {
                o = this._last;
                for (var k = e < 0 ? e : r; o; ) {
                  if (((i = o._prev), (o._act || k <= o._end) && o._ts && c !== o)) {
                    if (o.parent !== this) return this.render(e, t, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (k - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) + (k - o._start) * o._ts,
                        t,
                        n || (v && (o._initted || o._startAt))
                      ),
                      r !== this._time || (!this._ts && !f))
                    ) {
                      (c = 0), i && (y += this._zTime = k ? -R : R);
                      break;
                    }
                  }
                  o = i;
                }
              }
              if (
                c &&
                !t &&
                (this.pause(), (c.render(r >= b ? 0 : -R)._zTime = r >= b ? 1 : -1), this._ts)
              )
                return (this._start = u), Ge(this), this.render(e, t, n);
              this._onUpdate && !t && Et(this, 'onUpdate', !0),
                ((y === m && this._tTime >= this.totalDuration()) || (!y && b)) &&
                  ((u !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((e || !g) &&
                      ((y === m && this._ts > 0) || (!y && this._ts < 0)) &&
                      Ze(this, 1),
                    t ||
                      (e < 0 && !b) ||
                      (!y && !b && m) ||
                      (Et(this, y === m && e >= 0 ? 'onComplete' : 'onReverseComplete', !0),
                      this._prom && !(y < m && this.timeScale() > 0) && this._prom())));
            }
            return this;
          }),
          (n.add = function (e, t) {
            var n = this;
            if ((H(t) || (t = st(this, t, e)), !(e instanceof Kt))) {
              if (K(e))
                return (
                  e.forEach(function (e) {
                    return n.add(e, t);
                  }),
                  this
                );
              if (Z(e)) return this.addLabel(e, t);
              if (!q(e)) return this;
              e = ln.delayedCall(0, e);
            }
            return this !== e ? Je(this, e, t) : this;
          }),
          (n.getChildren = function (e, t, n, r) {
            void 0 === e && (e = !0),
              void 0 === t && (t = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = -L);
            for (var o = [], i = this._first; i; )
              i._start >= r &&
                (i instanceof ln
                  ? t && o.push(i)
                  : (n && o.push(i), e && o.push.apply(o, i.getChildren(!0, t, n)))),
                (i = i._next);
            return o;
          }),
          (n.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
              if (t[n].vars.id === e) return t[n];
          }),
          (n.remove = function (e) {
            return Z(e)
              ? this.removeLabel(e)
              : q(e)
              ? this.killTweensOf(e)
              : (Ne(this, e), e === this._recent && (this._recent = this._last), qe(this));
          }),
          (n.totalTime = function (t, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = Se(
                    Xt.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts)
                  )),
                e.prototype.totalTime.call(this, t, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (e, t) {
            return (this.labels[e] = st(this, t)), this;
          }),
          (n.removeLabel = function (e) {
            return delete this.labels[e], this;
          }),
          (n.addPause = function (e, t, n) {
            var r = ln.delayedCall(0, t || ue, n);
            return (r.data = 'isPause'), (this._hasPause = 1), Je(this, r, st(this, e));
          }),
          (n.removePause = function (e) {
            var t = this._first;
            for (e = st(this, e); t; )
              t._start === e && 'isPause' === t.data && Ze(t), (t = t._next);
          }),
          (n.killTweensOf = function (e, t, n) {
            for (var r = this.getTweensOf(e, n), o = r.length; o--; )
              Jt !== r[o] && r[o].kill(e, t);
            return this;
          }),
          (n.getTweensOf = function (e, t) {
            for (var n, r = [], o = dt(e), i = this._first, a = H(t); i; )
              i instanceof ln
                ? Ae(i._targets, o) &&
                  (a
                    ? (!Jt || (i._initted && i._ts)) &&
                      i.globalTime(0) <= t &&
                      i.globalTime(i.totalDuration()) > t
                    : !t || i.isActive()) &&
                  r.push(i)
                : (n = i.getTweensOf(o, t)).length && r.push.apply(r, n),
                (i = i._next);
            return r;
          }),
          (n.tweenTo = function (e, t) {
            t = t || {};
            var n,
              r = this,
              o = st(r, e),
              i = t,
              a = i.startAt,
              s = i.onStart,
              f = i.onStartParams,
              c = i.immediateRender,
              l = ln.to(
                r,
                Re(
                  {
                    ease: t.ease || 'none',
                    lazy: !1,
                    immediateRender: !1,
                    time: o,
                    overwrite: 'auto',
                    duration:
                      t.duration ||
                      Math.abs((o - (a && 'time' in a ? a.time : r._time)) / r.timeScale()) ||
                      R,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var e =
                          t.duration ||
                          Math.abs((o - (a && 'time' in a ? a.time : r._time)) / r.timeScale());
                        l._dur !== e && ot(l, e, 0, 1).render(l._time, !0, !0), (n = 1);
                      }
                      s && s.apply(l, f || []);
                    },
                  },
                  t
                )
              );
            return c ? l.render(0) : l;
          }),
          (n.tweenFromTo = function (e, t, n) {
            return this.tweenTo(t, Re({ startAt: { time: st(this, e) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (e) {
            return void 0 === e && (e = this._time), kt(this, st(this, e));
          }),
          (n.previousLabel = function (e) {
            return void 0 === e && (e = this._time), kt(this, st(this, e), 1);
          }),
          (n.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + R);
          }),
          (n.shiftChildren = function (e, t, n) {
            void 0 === n && (n = 0);
            for (var r, o = this._first, i = this.labels; o; )
              o._start >= n && ((o._start += e), (o._end += e)), (o = o._next);
            if (t) for (r in i) i[r] >= n && (i[r] += e);
            return qe(this);
          }),
          (n.invalidate = function (t) {
            var n = this._first;
            for (this._lock = 0; n; ) n.invalidate(t), (n = n._next);
            return e.prototype.invalidate.call(this, t);
          }),
          (n.clear = function (e) {
            void 0 === e && (e = !0);
            for (var t, n = this._first; n; ) (t = n._next), this.remove(n), (n = t);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              e && (this.labels = {}),
              qe(this)
            );
          }),
          (n.totalDuration = function (e) {
            var t,
              n,
              r,
              o = 0,
              i = this,
              a = i._last,
              s = L;
            if (arguments.length)
              return i.timeScale(
                (i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -e : e)
              );
            if (i._dirty) {
              for (r = i.parent; a; )
                (t = a._prev),
                  a._dirty && a.totalDuration(),
                  (n = a._start) > s && i._sort && a._ts && !i._lock
                    ? ((i._lock = 1), (Je(i, a, n - a._delay, 1)._lock = 0))
                    : (s = n),
                  n < 0 &&
                    a._ts &&
                    ((o -= n),
                    ((!r && !i._dp) || (r && r.smoothChildTiming)) &&
                      ((i._start += n / i._ts), (i._time -= n), (i._tTime -= n)),
                    i.shiftChildren(-n, !1, -Infinity),
                    (s = 0)),
                  a._end > o && a._ts && (o = a._end),
                  (a = t);
              ot(i, i === _ && i._time > o ? i._time : o, 1, 1), (i._dirty = 0);
            }
            return i._tDur;
          }),
          (t.updateRoot = function (e) {
            if ((_._ts && (Pe(_, $e(e, _)), (E = Xt.frame)), Xt.frame >= _e)) {
              _e += P.autoSleep || 120;
              var t = _._first;
              if ((!t || !t._ts) && P.autoSleep && Xt._listeners.length < 2) {
                for (; t && !t._ts; ) t = t._next;
                t || Xt.sleep();
              }
            }
          }),
          t
        );
      })(Kt);
      Re(Qt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Jt,
        en,
        tn = function (e, t, n, r, o, i, a) {
          var s,
            f,
            c,
            l,
            u,
            h,
            p,
            d,
            b = new kn(this._pt, e, t, 0, 1, vn, null, o),
            m = 0,
            g = 0;
          for (
            b.b = n,
              b.e = r,
              n += '',
              (p = ~(r += '').indexOf('random(')) && (r = xt(r)),
              i && (i((d = [n, r]), e, t), (n = d[0]), (r = d[1])),
              f = n.match(te) || [];
            (s = te.exec(r));

          )
            (l = s[0]),
              (u = r.substring(m, s.index)),
              c ? (c = (c + 1) % 5) : 'rgba(' === u.substr(-5) && (c = 1),
              l !== f[g++] &&
                ((h = parseFloat(f[g - 1]) || 0),
                (b._pt = {
                  _next: b._pt,
                  p: u || 1 === g ? u : ',',
                  s: h,
                  c: '=' === l.charAt(1) ? Oe(h, l) - h : parseFloat(l) - h,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (m = te.lastIndex));
          return (
            (b.c = m < r.length ? r.substring(m, r.length) : ''),
            (b.fp = a),
            (ne.test(r) || p) && (b.e = 0),
            (this._pt = b),
            b
          );
        },
        nn = function (e, t, n, r, o, i, a, s, f, c) {
          q(r) && (r = r(o || 0, e, i));
          var l,
            u = e[t],
            h =
              'get' !== n
                ? n
                : q(u)
                ? f
                  ? e[t.indexOf('set') || !q(e['get' + t.substr(3)]) ? t : 'get' + t.substr(3)](f)
                  : e[t]()
                : u,
            p = q(u) ? (f ? pn : hn) : un;
          if (
            (Z(r) &&
              (~r.indexOf('random(') && (r = xt(r)),
              '=' === r.charAt(1) && ((l = Oe(h, r) + (ut(h) || 0)) || 0 === l) && (r = l)),
            !c || h !== r || en)
          )
            return isNaN(h * r) || '' === r
              ? (!u && !(t in e) && fe(t, r), tn.call(this, e, t, h, r, p, s || P.stringFilter, f))
              : ((l = new kn(
                  this._pt,
                  e,
                  t,
                  +h || 0,
                  r - (h || 0),
                  'boolean' == typeof u ? gn : mn,
                  0,
                  p
                )),
                f && (l.fp = f),
                a && l.modifier(a, this, e),
                (this._pt = l));
        },
        rn = function (e, t, n, r, o, i) {
          var a, s, f, c;
          if (
            ve[e] &&
            !1 !==
              (a = new ve[e]()).init(
                o,
                a.rawVars
                  ? t[e]
                  : (function (e, t, n, r, o) {
                      if (
                        (q(e) && (e = sn(e, o, t, n, r)),
                        !W(e) || (e.style && e.nodeType) || K(e) || G(e))
                      )
                        return Z(e) ? sn(e, o, t, n, r) : e;
                      var i,
                        a = {};
                      for (i in e) a[i] = sn(e[i], o, t, n, r);
                      return a;
                    })(t[e], r, o, i, n),
                n,
                r,
                i
              ) &&
            ((n._pt = s = new kn(n._pt, o, e, 0, 1, a.render, a, 0, a.priority)), n !== C)
          )
            for (f = n._ptLookup[n._targets.indexOf(o)], c = a._props.length; c--; )
              f[a._props[c]] = s;
          return a;
        },
        on = function e(t, n, r) {
          var o,
            i,
            a,
            s,
            f,
            c,
            l,
            u,
            h,
            p,
            d,
            b,
            m,
            y = t.vars,
            w = y.ease,
            x = y.startAt,
            T = y.immediateRender,
            k = y.lazy,
            E = y.onUpdate,
            C = y.onUpdateParams,
            M = y.callbackScope,
            S = y.runBackwards,
            O = y.yoyoEase,
            A = y.keyframes,
            z = y.autoRevert,
            P = t._dur,
            I = t._startAt,
            X = t._targets,
            Y = t.parent,
            B = Y && 'nested' === Y.data ? Y.vars.targets : X,
            F = 'auto' === t._overwrite && !g,
            N = t.timeline;
          if (
            (N && (!A || !w) && (w = 'none'),
            (t._ease = jt(w, D.ease)),
            (t._yEase = O ? qt(jt(!0 === O ? w : O, D.ease)) : 0),
            O && t._yoyo && !t._repeat && ((O = t._yEase), (t._yEase = t._ease), (t._ease = O)),
            (t._from = !N && !!y.runBackwards),
            !N || (A && !y.stagger))
          ) {
            if (
              ((b = (u = X[0] ? ke(X[0]).harness : 0) && y[u.prop]),
              (o = Ye(y, be)),
              I &&
                (I._zTime < 0 && I.progress(1),
                n < 0 && S && T && !z ? I.render(-1, !0) : I.revert(S && P ? pe : he),
                (I._lazy = 0)),
              x)
            ) {
              if (
                (Ze(
                  (t._startAt = ln.set(
                    X,
                    Re(
                      {
                        data: 'isStart',
                        overwrite: !1,
                        parent: Y,
                        immediateRender: !0,
                        lazy: !I && U(k),
                        startAt: null,
                        delay: 0,
                        onUpdate: E,
                        onUpdateParams: C,
                        callbackScope: M,
                        stagger: 0,
                      },
                      x
                    )
                  ))
                ),
                (t._startAt._dp = 0),
                (t._startAt._sat = t),
                n < 0 && (v || (!T && !z)) && t._startAt.revert(pe),
                T && P && n <= 0 && r <= 0)
              )
                return void (n && (t._zTime = n));
            } else if (S && P && !I)
              if (
                (n && (T = !1),
                (a = Re(
                  {
                    overwrite: !1,
                    data: 'isFromStart',
                    lazy: T && !I && U(k),
                    immediateRender: T,
                    stagger: 0,
                    parent: Y,
                  },
                  o
                )),
                b && (a[u.prop] = b),
                Ze((t._startAt = ln.set(X, a))),
                (t._startAt._dp = 0),
                (t._startAt._sat = t),
                n < 0 && (v ? t._startAt.revert(pe) : t._startAt.render(-1, !0)),
                (t._zTime = n),
                T)
              ) {
                if (!n) return;
              } else e(t._startAt, R, R);
            for (t._pt = t._ptCache = 0, k = (P && U(k)) || (k && !P), i = 0; i < X.length; i++) {
              if (
                ((l = (f = X[i])._gsap || Te(X)[i]._gsap),
                (t._ptLookup[i] = p = {}),
                ge[l.id] && me.length && ze(),
                (d = B === X ? i : B.indexOf(f)),
                u &&
                  !1 !== (h = new u()).init(f, b || o, t, d, B) &&
                  ((t._pt = s = new kn(t._pt, f, h.name, 0, 1, h.render, h, 0, h.priority)),
                  h._props.forEach(function (e) {
                    p[e] = s;
                  }),
                  h.priority && (c = 1)),
                !u || b)
              )
                for (a in o)
                  ve[a] && (h = rn(a, o, t, d, f, B))
                    ? h.priority && (c = 1)
                    : (p[a] = s = nn.call(t, f, a, 'get', o[a], d, B, 0, y.stringFilter));
              t._op && t._op[i] && t.kill(f, t._op[i]),
                F &&
                  t._pt &&
                  ((Jt = t), _.killTweensOf(f, p, t.globalTime(n)), (m = !t.parent), (Jt = 0)),
                t._pt && k && (ge[l.id] = 1);
            }
            c && Tn(t), t._onInit && t._onInit(t);
          }
          (t._onUpdate = E),
            (t._initted = (!t._op || t._pt) && !m),
            A && n <= 0 && N.render(L, !0, !0);
        },
        an = function (e, t, n, r) {
          var o,
            i,
            a = t.ease || r || 'power1.inOut';
          if (K(t))
            (i = n[e] || (n[e] = [])),
              t.forEach(function (e, n) {
                return i.push({ t: (n / (t.length - 1)) * 100, v: e, e: a });
              });
          else
            for (o in t)
              (i = n[o] || (n[o] = [])),
                'ease' === o || i.push({ t: parseFloat(e), v: t[o], e: a });
        },
        sn = function (e, t, n, r, o) {
          return q(e) ? e.call(t, n, r, o) : Z(e) && ~e.indexOf('random(') ? xt(e) : e;
        },
        fn = xe + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
        cn = {};
      Ce(fn + ',id,stagger,delay,duration,paused,scrollTrigger', function (e) {
        return (cn[e] = 1);
      });
      var ln = (function (e) {
        function t(t, n, r, o) {
          var i;
          'number' == typeof n && ((r.duration = n), (n = r), (r = null));
          var a,
            s,
            f,
            c,
            l,
            u,
            h,
            p,
            d = (i = e.call(this, o ? n : Be(n)) || this).vars,
            m = d.duration,
            v = d.delay,
            y = d.immediateRender,
            w = d.stagger,
            x = d.overwrite,
            T = d.keyframes,
            k = d.defaults,
            E = d.scrollTrigger,
            C = d.yoyoEase,
            M = n.parent || _,
            S = (K(t) || G(t) ? H(t[0]) : 'length' in n) ? [t] : dt(t);
          if (
            ((i._targets = S.length
              ? Te(S)
              : ce('GSAP target ' + t + ' not found. https://greensock.com', !P.nullTargetWarn) ||
                []),
            (i._ptLookup = []),
            (i._overwrite = x),
            T || w || $(m) || $(v))
          ) {
            if (
              ((n = i.vars),
              (a = i.timeline =
                new Qt({
                  data: 'nested',
                  defaults: k || {},
                  targets: M && 'nested' === M.data ? M.vars.targets : S,
                })).kill(),
              (a.parent = a._dp = b(i)),
              (a._start = 0),
              w || $(m) || $(v))
            ) {
              if (((c = S.length), (h = w && gt(w)), W(w)))
                for (l in w) ~fn.indexOf(l) && (p || (p = {}), (p[l] = w[l]));
              for (s = 0; s < c; s++)
                ((f = Ye(n, cn)).stagger = 0),
                  C && (f.yoyoEase = C),
                  p && Ie(f, p),
                  (u = S[s]),
                  (f.duration = +sn(m, b(i), s, u, S)),
                  (f.delay = (+sn(v, b(i), s, u, S) || 0) - i._delay),
                  !w &&
                    1 === c &&
                    f.delay &&
                    ((i._delay = v = f.delay), (i._start += v), (f.delay = 0)),
                  a.to(u, f, h ? h(s, u, S) : 0),
                  (a._ease = Bt.none);
              a.duration() ? (m = v = 0) : (i.timeline = 0);
            } else if (T) {
              Be(Re(a.vars.defaults, { ease: 'none' })), (a._ease = jt(T.ease || n.ease || 'none'));
              var O,
                A,
                z,
                D = 0;
              if (K(T))
                T.forEach(function (e) {
                  return a.to(S, e, '>');
                }),
                  a.duration();
              else {
                for (l in ((f = {}), T))
                  'ease' === l || 'easeEach' === l || an(l, T[l], f, T.easeEach);
                for (l in f)
                  for (
                    O = f[l].sort(function (e, t) {
                      return e.t - t.t;
                    }),
                      D = 0,
                      s = 0;
                    s < O.length;
                    s++
                  )
                    ((z = {
                      ease: (A = O[s]).e,
                      duration: ((A.t - (s ? O[s - 1].t : 0)) / 100) * m,
                    })[l] = A.v),
                      a.to(S, z, D),
                      (D += z.duration);
                a.duration() < m && a.to({}, { duration: m - a.duration() });
              }
            }
            m || i.duration((m = a.duration()));
          } else i.timeline = 0;
          return (
            !0 !== x || g || ((Jt = b(i)), _.killTweensOf(S), (Jt = 0)),
            Je(M, b(i), r),
            n.reversed && i.reverse(),
            n.paused && i.paused(!0),
            (y ||
              (!m && !T && i._start === Se(M._time) && U(y) && We(b(i)) && 'nested' !== M.data)) &&
              ((i._tTime = -R), i.render(Math.max(0, -v) || 0)),
            E && et(b(i), E),
            i
          );
        }
        m(t, e);
        var n = t.prototype;
        return (
          (n.render = function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              f,
              c,
              l,
              u,
              h = this._time,
              p = this._tDur,
              d = this._dur,
              b = e < 0,
              m = e > p - R && !b ? p : e < R ? 0 : e;
            if (d) {
              if (
                m !== this._tTime ||
                !e ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== b)
              ) {
                if (((r = m), (l = this.timeline), this._repeat)) {
                  if (((a = d + this._rDelay), this._repeat < -1 && b))
                    return this.totalTime(100 * a + e, t, n);
                  if (
                    ((r = Se(m % a)),
                    m === p
                      ? ((i = this._repeat), (r = d))
                      : ((i = ~~(m / a)) && i === m / a && ((r = d), i--), r > d && (r = d)),
                    (f = this._yoyo && 1 & i) && ((u = this._yEase), (r = d - r)),
                    (s = Ve(this._tTime, a)),
                    r === h && !n && this._initted)
                  )
                    return (this._tTime = m), this;
                  i !== s &&
                    (l && this._yEase && Ht(l, f),
                    !this.vars.repeatRefresh ||
                      f ||
                      this._lock ||
                      ((this._lock = n = 1), (this.render(Se(a * i), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (tt(this, b ? e : r, n, t, m)) return (this._tTime = 0), this;
                  if (h !== this._time) return this;
                  if (d !== this._dur) return this.render(e, t, n);
                }
                if (
                  ((this._tTime = m),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = c = (u || this._ease)(r / d)),
                  this._from && (this.ratio = c = 1 - c),
                  r && !h && !t && (Et(this, 'onStart'), this._tTime !== m))
                )
                  return this;
                for (o = this._pt; o; ) o.r(c, o.d), (o = o._next);
                (l && l.render(e < 0 ? e : !r && f ? -R : l._dur * l._ease(r / this._dur), t, n)) ||
                  (this._startAt && (this._zTime = e)),
                  this._onUpdate && !t && (b && je(this, e, 0, n), Et(this, 'onUpdate')),
                  this._repeat &&
                    i !== s &&
                    this.vars.onRepeat &&
                    !t &&
                    this.parent &&
                    Et(this, 'onRepeat'),
                  (m !== this._tDur && m) ||
                    this._tTime !== m ||
                    (b && !this._onUpdate && je(this, e, 0, !0),
                    (e || !d) &&
                      ((m === this._tDur && this._ts > 0) || (!m && this._ts < 0)) &&
                      Ze(this, 1),
                    t ||
                      (b && !h) ||
                      !(m || h || f) ||
                      (Et(this, m === p ? 'onComplete' : 'onReverseComplete', !0),
                      this._prom && !(m < p && this.timeScale() > 0) && this._prom()));
              }
            } else
              !(function (e, t, n, r) {
                var o,
                  i,
                  a,
                  s = e.ratio,
                  f =
                    t < 0 ||
                    (!t &&
                      ((!e._start && nt(e) && (e._initted || !rt(e))) ||
                        ((e._ts < 0 || e._dp._ts < 0) && !rt(e))))
                      ? 0
                      : 1,
                  c = e._rDelay,
                  l = 0;
                if (
                  (c &&
                    e._repeat &&
                    ((l = lt(0, e._tDur, t)),
                    (i = Ve(l, c)),
                    e._yoyo && 1 & i && (f = 1 - f),
                    i !== Ve(e._tTime, c) &&
                      ((s = 1 - f), e.vars.repeatRefresh && e._initted && e.invalidate())),
                  f !== s || v || r || e._zTime === R || (!t && e._zTime))
                ) {
                  if (!e._initted && tt(e, t, r, n, l)) return;
                  for (
                    a = e._zTime,
                      e._zTime = t || (n ? R : 0),
                      n || (n = t && !a),
                      e.ratio = f,
                      e._from && (f = 1 - f),
                      e._time = 0,
                      e._tTime = l,
                      o = e._pt;
                    o;

                  )
                    o.r(f, o.d), (o = o._next);
                  t < 0 && je(e, t, 0, !0),
                    e._onUpdate && !n && Et(e, 'onUpdate'),
                    l && e._repeat && !n && e.parent && Et(e, 'onRepeat'),
                    (t >= e._tDur || t < 0) &&
                      e.ratio === f &&
                      (f && Ze(e, 1),
                      n ||
                        v ||
                        (Et(e, f ? 'onComplete' : 'onReverseComplete', !0), e._prom && e._prom()));
                } else e._zTime || (e._zTime = t);
              })(this, e, t, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function (t) {
            return (
              (!t || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(t),
              e.prototype.invalidate.call(this, t)
            );
          }),
          (n.resetTo = function (e, t, n, r) {
            M || Xt.wake(), this._ts || this.play();
            var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return (
              this._initted || on(this, o),
              (function (e, t, n, r, o, i, a) {
                var s,
                  f,
                  c,
                  l,
                  u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
                if (!u)
                  for (u = e._ptCache[t] = [], c = e._ptLookup, l = e._targets.length; l--; ) {
                    if ((s = c[l][t]) && s.d && s.d._pt)
                      for (s = s.d._pt; s && s.p !== t && s.fp !== t; ) s = s._next;
                    if (!s) return (en = 1), (e.vars[t] = '+=0'), on(e, a), (en = 0), 1;
                    u.push(s);
                  }
                for (l = u.length; l--; )
                  ((s = (f = u[l])._pt || f).s =
                    (!r && 0 !== r) || o ? s.s + (r || 0) + i * s.c : r),
                    (s.c = n - s.s),
                    f.e && (f.e = Me(n) + ut(f.e)),
                    f.b && (f.b = s.s + ut(f.b));
              })(this, e, t, n, r, this._ease(o / this._dur), o)
                ? this.resetTo(e, t, n, r)
                : (Ke(this, 0),
                  this.parent ||
                    Fe(this._dp, this, '_first', '_last', this._dp._sort ? '_start' : 0),
                  this.render(0))
            );
          }),
          (n.kill = function (e, t) {
            if ((void 0 === t && (t = 'all'), !(e || (t && 'all' !== t))))
              return (this._lazy = this._pt = 0), this.parent ? Ct(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(e, t, Jt && !0 !== Jt.vars.overwrite)._first || Ct(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  ot(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              o,
              i,
              a,
              s,
              f,
              c,
              l = this._targets,
              u = e ? dt(e) : l,
              h = this._ptLookup,
              p = this._pt;
            if (
              (!t || 'all' === t) &&
              (function (e, t) {
                for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n]; );
                return n < 0;
              })(l, u)
            )
              return 'all' === t && (this._pt = 0), Ct(this);
            for (
              r = this._op = this._op || [],
                'all' !== t &&
                  (Z(t) &&
                    ((s = {}),
                    Ce(t, function (e) {
                      return (s[e] = 1);
                    }),
                    (t = s)),
                  (t = (function (e, t) {
                    var n,
                      r,
                      o,
                      i,
                      a = e[0] ? ke(e[0]).harness : 0,
                      s = a && a.aliases;
                    if (!s) return t;
                    for (r in ((n = Ie({}, t)), s))
                      if ((r in n)) for (o = (i = s[r].split(',')).length; o--; ) n[i[o]] = n[r];
                    return n;
                  })(l, t))),
                c = l.length;
              c--;

            )
              if (~u.indexOf(l[c]))
                for (s in ((o = h[c]),
                'all' === t ? ((r[c] = t), (a = o), (i = {})) : ((i = r[c] = r[c] || {}), (a = t)),
                a))
                  (f = o && o[s]) &&
                    (('kill' in f.d && !0 !== f.d.kill(s)) || Ne(this, f, '_pt'), delete o[s]),
                    'all' !== i && (i[s] = 1);
            return this._initted && !this._pt && p && Ct(this), this;
          }),
          (t.to = function (e, n) {
            return new t(e, n, arguments[2]);
          }),
          (t.from = function (e, t) {
            return ft(1, arguments);
          }),
          (t.delayedCall = function (e, n, r, o) {
            return new t(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: e,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: o,
            });
          }),
          (t.fromTo = function (e, t, n) {
            return ft(2, arguments);
          }),
          (t.set = function (e, n) {
            return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n);
          }),
          (t.killTweensOf = function (e, t, n) {
            return _.killTweensOf(e, t, n);
          }),
          t
        );
      })(Kt);
      Re(ln.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
        Ce('staggerTo,staggerFrom,staggerFromTo', function (e) {
          ln[e] = function () {
            var t = new Qt(),
              n = ht.call(arguments, 0);
            return n.splice('staggerFromTo' === e ? 5 : 4, 0, 0), t[e].apply(t, n);
          };
        });
      var un = function (e, t, n) {
          return (e[t] = n);
        },
        hn = function (e, t, n) {
          return e[t](n);
        },
        pn = function (e, t, n, r) {
          return e[t](r.fp, n);
        },
        dn = function (e, t, n) {
          return e.setAttribute(t, n);
        },
        bn = function (e, t) {
          return q(e[t]) ? hn : j(e[t]) && e.setAttribute ? dn : un;
        },
        mn = function (e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
        },
        gn = function (e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t);
        },
        vn = function (e, t) {
          var n = t._pt,
            r = '';
          if (!e && t.b) r = t.b;
          else if (1 === e && t.e) r = t.e;
          else {
            for (; n; )
              (r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + r),
                (n = n._next);
            r += t.c;
          }
          t.set(t.t, t.p, r, t);
        },
        yn = function (e, t) {
          for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
        },
        _n = function (e, t, n, r) {
          for (var o, i = this._pt; i; ) (o = i._next), i.p === r && i.modifier(e, t, n), (i = o);
        },
        wn = function (e) {
          for (var t, n, r = this._pt; r; )
            (n = r._next),
              (r.p === e && !r.op) || r.op === e ? Ne(this, r, '_pt') : r.dep || (t = 1),
              (r = n);
          return !t;
        },
        xn = function (e, t, n, r) {
          r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
        },
        Tn = function (e) {
          for (var t, n, r, o, i = e._pt; i; ) {
            for (t = i._next, n = r; n && n.pr > i.pr; ) n = n._next;
            (i._prev = n ? n._prev : o) ? (i._prev._next = i) : (r = i),
              (i._next = n) ? (n._prev = i) : (o = i),
              (i = t);
          }
          e._pt = r;
        },
        kn = (function () {
          function e(e, t, n, r, o, i, a, s, f) {
            (this.t = t),
              (this.s = r),
              (this.c = o),
              (this.p = n),
              (this.r = i || mn),
              (this.d = a || this),
              (this.set = s || un),
              (this.pr = f || 0),
              (this._next = e),
              e && (e._prev = this);
          }
          return (
            (e.prototype.modifier = function (e, t, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = xn),
                (this.m = e),
                (this.mt = n),
                (this.tween = t);
            }),
            e
          );
        })();
      Ce(
        xe +
          'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
        function (e) {
          return (be[e] = 1);
        }
      ),
        (ie.TweenMax = ie.TweenLite = ln),
        (ie.TimelineLite = ie.TimelineMax = Qt),
        (_ = new Qt({
          sortChildren: !1,
          defaults: D,
          autoRemoveChildren: !0,
          id: 'root',
          smoothChildTiming: !0,
        })),
        (P.stringFilter = It);
      var En = [],
        Cn = {},
        Mn = [],
        Sn = 0,
        On = function (e) {
          return (Cn[e] || Mn).map(function (e) {
            return e();
          });
        },
        An = function () {
          var e = Date.now(),
            t = [];
          e - Sn > 2 &&
            (On('matchMediaInit'),
            En.forEach(function (e) {
              var n,
                r,
                o,
                i,
                a = e.queries,
                s = e.conditions;
              for (r in a)
                (n = w.matchMedia(a[r]).matches) && (o = 1), n !== s[r] && ((s[r] = n), (i = 1));
              i && (e.revert(), o && t.push(e));
            }),
            On('matchMediaRevert'),
            t.forEach(function (e) {
              return e.onMatch(e);
            }),
            (Sn = e),
            On('matchMedia'));
        },
        zn = (function () {
          function e(e, t) {
            (this.selector = t && bt(t)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              e && this.add(e);
          }
          var t = e.prototype;
          return (
            (t.add = function (e, t, n) {
              q(e) && ((n = t), (t = e), (e = q));
              var r = this,
                o = function () {
                  var e,
                    o = y,
                    i = r.selector;
                  return (
                    o && o !== r && o.data.push(r),
                    n && (r.selector = bt(n)),
                    (y = r),
                    (e = t.apply(r, arguments)),
                    q(e) && r._r.push(e),
                    (y = o),
                    (r.selector = i),
                    (r.isReverted = !1),
                    e
                  );
                };
              return (r.last = o), e === q ? o(r) : e ? (r[e] = o) : o;
            }),
            (t.ignore = function (e) {
              var t = y;
              (y = null), e(this), (y = t);
            }),
            (t.getTweens = function () {
              var t = [];
              return (
                this.data.forEach(function (n) {
                  return n instanceof e
                    ? t.push.apply(t, n.getTweens())
                    : n instanceof ln && !(n.parent && 'nested' === n.parent.data) && t.push(n);
                }),
                t
              );
            }),
            (t.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (t.kill = function (e, t) {
              var n = this;
              if (e) {
                var r = this.getTweens();
                this.data.forEach(function (e) {
                  'isFlip' === e.data &&
                    (e.revert(),
                    e.getChildren(!0, !0, !1).forEach(function (e) {
                      return r.splice(r.indexOf(e), 1);
                    }));
                }),
                  r
                    .map(function (e) {
                      return { g: e.globalTime(0), t: e };
                    })
                    .sort(function (e, t) {
                      return t.g - e.g || -1;
                    })
                    .forEach(function (t) {
                      return t.t.revert(e);
                    }),
                  this.data.forEach(function (t) {
                    return !(t instanceof Kt) && t.revert && t.revert(e);
                  }),
                  this._r.forEach(function (t) {
                    return t(e, n);
                  }),
                  (this.isReverted = !0);
              } else
                this.data.forEach(function (e) {
                  return e.kill && e.kill();
                });
              if ((this.clear(), t)) {
                var o = En.indexOf(this);
                ~o && En.splice(o, 1);
              }
            }),
            (t.revert = function (e) {
              this.kill(e || {});
            }),
            e
          );
        })(),
        Pn = (function () {
          function e(e) {
            (this.contexts = []), (this.scope = e);
          }
          var t = e.prototype;
          return (
            (t.add = function (e, t, n) {
              W(e) || (e = { matches: e });
              var r,
                o,
                i,
                a = new zn(0, n || this.scope),
                s = (a.conditions = {});
              for (o in (this.contexts.push(a), (t = a.add('onMatch', t)), (a.queries = e), e))
                'all' === o
                  ? (i = 1)
                  : (r = w.matchMedia(e[o])) &&
                    (En.indexOf(a) < 0 && En.push(a),
                    (s[o] = r.matches) && (i = 1),
                    r.addListener ? r.addListener(An) : r.addEventListener('change', An));
              return i && t(a), this;
            }),
            (t.revert = function (e) {
              this.kill(e || {});
            }),
            (t.kill = function (e) {
              this.contexts.forEach(function (t) {
                return t.kill(e, !0);
              });
            }),
            e
          );
        })(),
        Dn = {
          registerPlugin: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t.forEach(function (e) {
              return Mt(e);
            });
          },
          timeline: function (e) {
            return new Qt(e);
          },
          getTweensOf: function (e, t) {
            return _.getTweensOf(e, t);
          },
          getProperty: function (e, t, n, r) {
            Z(e) && (e = dt(e)[0]);
            var o = ke(e || {}).get,
              i = n ? Le : De;
            return (
              'native' === n && (n = ''),
              e
                ? t
                  ? i(((ve[t] && ve[t].get) || o)(e, t, n, r))
                  : function (t, n, r) {
                      return i(((ve[t] && ve[t].get) || o)(e, t, n, r));
                    }
                : e
            );
          },
          quickSetter: function (e, t, n) {
            if ((e = dt(e)).length > 1) {
              var r = e.map(function (e) {
                  return In.quickSetter(e, t, n);
                }),
                o = r.length;
              return function (e) {
                for (var t = o; t--; ) r[t](e);
              };
            }
            e = e[0] || {};
            var i = ve[t],
              a = ke(e),
              s = (a.harness && (a.harness.aliases || {})[t]) || t,
              f = i
                ? function (t) {
                    var r = new i();
                    (C._pt = 0),
                      r.init(e, n ? t + n : t, C, 0, [e]),
                      r.render(1, r),
                      C._pt && yn(1, C);
                  }
                : a.set(e, s);
            return i
              ? f
              : function (t) {
                  return f(e, s, n ? t + n : t, a, 1);
                };
          },
          quickTo: function (e, t, n) {
            var r,
              o = In.to(e, Ie((((r = {})[t] = '+=0.1'), (r.paused = !0), r), n || {})),
              i = function (e, n, r) {
                return o.resetTo(t, e, n, r);
              };
            return (i.tween = o), i;
          },
          isTweening: function (e) {
            return _.getTweensOf(e, !0).length > 0;
          },
          defaults: function (e) {
            return e && e.ease && (e.ease = jt(e.ease, D.ease)), Xe(D, e || {});
          },
          config: function (e) {
            return Xe(P, e || {});
          },
          registerEffect: function (e) {
            var t = e.name,
              n = e.effect,
              r = e.plugins,
              o = e.defaults,
              i = e.extendTimeline;
            (r || '').split(',').forEach(function (e) {
              return e && !ve[e] && !ie[e] && ce(t + ' effect requires ' + e + ' plugin.');
            }),
              (ye[t] = function (e, t, r) {
                return n(dt(e), Re(t || {}, o), r);
              }),
              i &&
                (Qt.prototype[t] = function (e, n, r) {
                  return this.add(ye[t](e, W(n) ? n : (r = n) && {}, this), r);
                });
          },
          registerEase: function (e, t) {
            Bt[e] = jt(t);
          },
          parseEase: function (e, t) {
            return arguments.length ? jt(e, t) : Bt;
          },
          getById: function (e) {
            return _.getById(e);
          },
          exportRoot: function (e, t) {
            void 0 === e && (e = {});
            var n,
              r,
              o = new Qt(e);
            for (
              o.smoothChildTiming = U(e.smoothChildTiming),
                _.remove(o),
                o._dp = 0,
                o._time = o._tTime = _._time,
                n = _._first;
              n;

            )
              (r = n._next),
                (!t && !n._dur && n instanceof ln && n.vars.onComplete === n._targets[0]) ||
                  Je(o, n, n._start - n._delay),
                (n = r);
            return Je(_, o, 0), o;
          },
          context: function (e, t) {
            return e ? new zn(e, t) : y;
          },
          matchMedia: function (e) {
            return new Pn(e);
          },
          matchMediaRefresh: function () {
            return (
              En.forEach(function (e) {
                var t,
                  n,
                  r = e.conditions;
                for (n in r) r[n] && ((r[n] = !1), (t = 1));
                t && e.revert();
              }) || An()
            );
          },
          addEventListener: function (e, t) {
            var n = Cn[e] || (Cn[e] = []);
            ~n.indexOf(t) || n.push(t);
          },
          removeEventListener: function (e, t) {
            var n = Cn[e],
              r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1);
          },
          utils: {
            wrap: function e(t, n, r) {
              var o = n - t;
              return K(t)
                ? wt(t, e(0, t.length), n)
                : ct(r, function (e) {
                    return ((o + ((e - t) % o)) % o) + t;
                  });
            },
            wrapYoyo: function e(t, n, r) {
              var o = n - t,
                i = 2 * o;
              return K(t)
                ? wt(t, e(0, t.length - 1), n)
                : ct(r, function (e) {
                    return t + ((e = (i + ((e - t) % i)) % i || 0) > o ? i - e : e);
                  });
            },
            distribute: gt,
            random: _t,
            snap: yt,
            normalize: function (e, t, n) {
              return Tt(e, t, 0, 1, n);
            },
            getUnit: ut,
            clamp: function (e, t, n) {
              return ct(n, function (n) {
                return lt(e, t, n);
              });
            },
            splitColor: zt,
            toArray: dt,
            selector: bt,
            mapRange: Tt,
            pipe: function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              return function (e) {
                return t.reduce(function (e, t) {
                  return t(e);
                }, e);
              };
            },
            unitize: function (e, t) {
              return function (n) {
                return e(parseFloat(n)) + (t || ut(n));
              };
            },
            interpolate: function e(t, n, r, o) {
              var i = isNaN(t + n)
                ? 0
                : function (e) {
                    return (1 - e) * t + e * n;
                  };
              if (!i) {
                var a,
                  s,
                  f,
                  c,
                  l,
                  u = Z(t),
                  h = {};
                if ((!0 === r && (o = 1) && (r = null), u)) (t = { p: t }), (n = { p: n });
                else if (K(t) && !K(n)) {
                  for (f = [], c = t.length, l = c - 2, s = 1; s < c; s++)
                    f.push(e(t[s - 1], t[s]));
                  c--,
                    (i = function (e) {
                      e *= c;
                      var t = Math.min(l, ~~e);
                      return f[t](e - t);
                    }),
                    (r = n);
                } else o || (t = Ie(K(t) ? [] : {}, t));
                if (!f) {
                  for (a in n) nn.call(h, t, a, 'get', n[a]);
                  i = function (e) {
                    return yn(e, h) || (u ? t.p : t);
                  };
                }
              }
              return ct(r, i);
            },
            shuffle: mt,
          },
          install: se,
          effects: ye,
          ticker: Xt,
          updateRoot: Qt.updateRoot,
          plugins: ve,
          globalTimeline: _,
          core: {
            PropTween: kn,
            globals: le,
            Tween: ln,
            Timeline: Qt,
            Animation: Kt,
            getCache: ke,
            _removeLinkedListItem: Ne,
            reverting: function () {
              return v;
            },
            context: function (e) {
              return e && y && (y.data.push(e), (e._ctx = y)), y;
            },
            suppressOverwrites: function (e) {
              return (g = e);
            },
          },
        };
      Ce('to,from,fromTo,delayedCall,set,killTweensOf', function (e) {
        return (Dn[e] = ln[e]);
      }),
        Xt.add(Qt.updateRoot),
        (C = Dn.to({}, { duration: 0 }));
      var Ln = function (e, t) {
          for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; ) n = n._next;
          return n;
        },
        Rn = function (e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function (e, n, r) {
              r._onInit = function (e) {
                var r, o;
                if (
                  (Z(n) &&
                    ((r = {}),
                    Ce(n, function (e) {
                      return (r[e] = 1);
                    }),
                    (n = r)),
                  t)
                ) {
                  for (o in ((r = {}), n)) r[o] = t(n[o]);
                  n = r;
                }
                !(function (e, t) {
                  var n,
                    r,
                    o,
                    i = e._targets;
                  for (n in t)
                    for (r = i.length; r--; )
                      (o = e._ptLookup[r][n]) &&
                        (o = o.d) &&
                        (o._pt && (o = Ln(o, n)), o && o.modifier && o.modifier(t[n], e, i[r], n));
                })(e, n);
              };
            },
          };
        },
        In =
          Dn.registerPlugin(
            {
              name: 'attr',
              init: function (e, t, n, r, o) {
                var i, a, s;
                for (i in ((this.tween = n), t))
                  (s = e.getAttribute(i) || ''),
                    ((a = this.add(e, 'setAttribute', (s || 0) + '', t[i], r, o, 0, 0, i)).op = i),
                    (a.b = s),
                    this._props.push(i);
              },
              render: function (e, t) {
                for (var n = t._pt; n; ) v ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
              },
            },
            {
              name: 'endArray',
              init: function (e, t) {
                for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
              },
            },
            Rn('roundProps', vt),
            Rn('modifiers'),
            Rn('snap', yt)
          ) || Dn;
      (ln.version = Qt.version = In.version = '3.11.4'),
        (k = 1),
        V() && Yt(),
        Bt.Power0,
        Bt.Power1,
        Bt.Power2,
        Bt.Power3,
        Bt.Power4,
        Bt.Linear,
        Bt.Quad,
        Bt.Cubic,
        Bt.Quart,
        Bt.Quint,
        Bt.Strong,
        Bt.Elastic,
        Bt.Back,
        Bt.SteppedEase,
        Bt.Bounce,
        Bt.Sine,
        Bt.Expo,
        Bt.Circ;
      var Xn,
        Yn,
        Bn,
        Fn,
        Nn,
        Zn,
        qn,
        Hn,
        jn = {},
        Wn = 180 / Math.PI,
        Un = Math.PI / 180,
        Vn = Math.atan2,
        $n = /([A-Z])/g,
        Gn = /(left|right|width|margin|padding|x)/i,
        Kn = /[\s,\(]\S/,
        Qn = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
        Jn = function (e, t) {
          return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
        },
        er = function (e, t) {
          return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
        },
        tr = function (e, t) {
          return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t);
        },
        nr = function (e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        rr = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        or = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        ir = function (e, t, n) {
          return (e.style[t] = n);
        },
        ar = function (e, t, n) {
          return e.style.setProperty(t, n);
        },
        sr = function (e, t, n) {
          return (e._gsap[t] = n);
        },
        fr = function (e, t, n) {
          return (e._gsap.scaleX = e._gsap.scaleY = n);
        },
        cr = function (e, t, n, r, o) {
          var i = e._gsap;
          (i.scaleX = i.scaleY = n), i.renderTransform(o, i);
        },
        lr = function (e, t, n, r, o) {
          var i = e._gsap;
          (i[t] = n), i.renderTransform(o, i);
        },
        ur = 'transform',
        hr = ur + 'Origin',
        pr = function (e, t) {
          var n = this,
            r = this.target,
            o = r.style;
          if (e in jn) {
            if (
              ((this.tfm = this.tfm || {}),
              'transform' !== e &&
                (~(e = Qn[e] || e).indexOf(',')
                  ? e.split(',').forEach(function (e) {
                      return (n.tfm[e] = zr(r, e));
                    })
                  : (this.tfm[e] = r._gsap.x ? r._gsap[e] : zr(r, e))),
              this.props.indexOf(ur) >= 0)
            )
              return;
            r._gsap.svg &&
              ((this.svgo = r.getAttribute('data-svg-origin')), this.props.push(hr, t, '')),
              (e = ur);
          }
          (o || t) && this.props.push(e, t, o[e]);
        },
        dr = function (e) {
          e.translate &&
            (e.removeProperty('translate'), e.removeProperty('scale'), e.removeProperty('rotate'));
        },
        br = function () {
          var e,
            t,
            n = this.props,
            r = this.target,
            o = r.style,
            i = r._gsap;
          for (e = 0; e < n.length; e += 3)
            n[e + 1]
              ? (r[n[e]] = n[e + 2])
              : n[e + 2]
              ? (o[n[e]] = n[e + 2])
              : o.removeProperty(n[e].replace($n, '-$1').toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg && (i.renderTransform(), r.setAttribute('data-svg-origin', this.svgo || '')),
              !(e = qn()) || e.isStart || o[ur] || (dr(o), (i.uncache = 1));
          }
        },
        mr = function (e, t) {
          var n = { target: e, props: [], revert: br, save: pr };
          return (
            t &&
              t.split(',').forEach(function (e) {
                return n.save(e);
              }),
            n
          );
        },
        gr = function (e, t) {
          var n = Yn.createElementNS
            ? Yn.createElementNS((t || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), e)
            : Yn.createElement(e);
          return n.style ? n : Yn.createElement(e);
        },
        vr = function e(t, n, r) {
          var o = getComputedStyle(t);
          return (
            o[n] ||
            o.getPropertyValue(n.replace($n, '-$1').toLowerCase()) ||
            o.getPropertyValue(n) ||
            (!r && e(t, _r(n) || n, 1)) ||
            ''
          );
        },
        yr = 'O,Moz,ms,Ms,Webkit'.split(','),
        _r = function (e, t, n) {
          var r = (t || Nn).style,
            o = 5;
          if (e in r && !n) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(yr[o] + e in r); );
          return o < 0 ? null : (3 === o ? 'ms' : o >= 0 ? yr[o] : '') + e;
        },
        wr = function () {
          'undefined' != typeof window &&
            window.document &&
            ((Xn = window),
            (Yn = Xn.document),
            (Bn = Yn.documentElement),
            (Nn = gr('div') || { style: {} }),
            gr('div'),
            (ur = _r(ur)),
            (hr = ur + 'Origin'),
            (Nn.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
            (Hn = !!_r('perspective')),
            (qn = In.core.reverting),
            (Fn = 1));
        },
        xr = function e(t) {
          var n,
            r = gr(
              'svg',
              (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
                'http://www.w3.org/2000/svg'
            ),
            o = this.parentNode,
            i = this.nextSibling,
            a = this.style.cssText;
          if ((Bn.appendChild(r), r.appendChild(this), (this.style.display = 'block'), t))
            try {
              (n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = e);
            } catch (e) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            o && (i ? o.insertBefore(this, i) : o.appendChild(this)),
            Bn.removeChild(r),
            (this.style.cssText = a),
            n
          );
        },
        Tr = function (e, t) {
          for (var n = t.length; n--; ) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
        },
        kr = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (n) {
            t = xr.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) || e.getBBox === xr || (t = xr.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +Tr(e, ['x', 'cx', 'x1']) || 0,
                  y: +Tr(e, ['y', 'cy', 'y1']) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Er = function (e) {
          return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !kr(e));
        },
        Cr = function (e, t) {
          if (t) {
            var n = e.style;
            t in jn && t !== hr && (t = ur),
              n.removeProperty
                ? (('ms' !== t.substr(0, 2) && 'webkit' !== t.substr(0, 6)) || (t = '-' + t),
                  n.removeProperty(t.replace($n, '-$1').toLowerCase()))
                : n.removeAttribute(t);
          }
        },
        Mr = function (e, t, n, r, o, i) {
          var a = new kn(e._pt, t, n, 0, 1, i ? or : rr);
          return (e._pt = a), (a.b = r), (a.e = o), e._props.push(n), a;
        },
        Sr = { deg: 1, rad: 1, turn: 1 },
        Or = { grid: 1, flex: 1 },
        Ar = function e(t, n, r, o) {
          var i,
            a,
            s,
            f,
            c = parseFloat(r) || 0,
            l = (r + '').trim().substr((c + '').length) || 'px',
            u = Nn.style,
            h = Gn.test(n),
            p = 'svg' === t.tagName.toLowerCase(),
            d = (p ? 'client' : 'offset') + (h ? 'Width' : 'Height'),
            b = 100,
            m = 'px' === o,
            g = '%' === o;
          return o === l || !c || Sr[o] || Sr[l]
            ? c
            : ('px' !== l && !m && (c = e(t, n, r, 'px')),
              (f = t.getCTM && Er(t)),
              (!g && '%' !== l) || (!jn[n] && !~n.indexOf('adius'))
                ? ((u[h ? 'width' : 'height'] = b + (m ? l : o)),
                  (a =
                    ~n.indexOf('adius') || ('em' === o && t.appendChild && !p) ? t : t.parentNode),
                  f && (a = (t.ownerSVGElement || {}).parentNode),
                  (a && a !== Yn && a.appendChild) || (a = Yn.body),
                  (s = a._gsap) && g && s.width && h && s.time === Xt.time && !s.uncache
                    ? Me((c / s.width) * b)
                    : ((g || '%' === l) &&
                        !Or[vr(a, 'display')] &&
                        (u.position = vr(t, 'position')),
                      a === t && (u.position = 'static'),
                      a.appendChild(Nn),
                      (i = Nn[d]),
                      a.removeChild(Nn),
                      (u.position = 'absolute'),
                      h && g && (((s = ke(a)).time = Xt.time), (s.width = a[d])),
                      Me(m ? (i * c) / b : i && c ? (b / i) * c : 0)))
                : ((i = f ? t.getBBox()[h ? 'width' : 'height'] : t[d]),
                  Me(g ? (c / i) * b : (c / 100) * i)));
        },
        zr = function (e, t, n, r) {
          var o;
          return (
            Fn || wr(),
            t in Qn && 'transform' !== t && ~(t = Qn[t]).indexOf(',') && (t = t.split(',')[0]),
            jn[t] && 'transform' !== t
              ? ((o = Zr(e, r)),
                (o =
                  'transformOrigin' !== t
                    ? o[t]
                    : o.svg
                    ? o.origin
                    : qr(vr(e, hr)) + ' ' + o.zOrigin + 'px'))
              : (!(o = e.style[t]) || 'auto' === o || r || ~(o + '').indexOf('calc(')) &&
                (o =
                  (Rr[t] && Rr[t](e, t, n)) || vr(e, t) || Ee(e, t) || ('opacity' === t ? 1 : 0)),
            n && !~(o + '').trim().indexOf(' ') ? Ar(e, t, o, n) + n : o
          );
        },
        Pr = function (e, t, n, r) {
          if (!n || 'none' === n) {
            var o = _r(t, e, 1),
              i = o && vr(e, o, 1);
            i && i !== n
              ? ((t = o), (n = i))
              : 'borderColor' === t && (n = vr(e, 'borderTopColor'));
          }
          var a,
            s,
            f,
            c,
            l,
            u,
            h,
            p,
            d,
            b,
            m,
            g = new kn(this._pt, e.style, t, 0, 1, vn),
            v = 0,
            y = 0;
          if (
            ((g.b = n),
            (g.e = r),
            (n += ''),
            'auto' == (r += '') && ((e.style[t] = r), (r = vr(e, t) || r), (e.style[t] = n)),
            It((a = [n, r])),
            (r = a[1]),
            (f = (n = a[0]).match(ee) || []),
            (r.match(ee) || []).length)
          ) {
            for (; (s = ee.exec(r)); )
              (h = s[0]),
                (d = r.substring(v, s.index)),
                l
                  ? (l = (l + 1) % 5)
                  : ('rgba(' !== d.substr(-5) && 'hsla(' !== d.substr(-5)) || (l = 1),
                h !== (u = f[y++] || '') &&
                  ((c = parseFloat(u) || 0),
                  (m = u.substr((c + '').length)),
                  '=' === h.charAt(1) && (h = Oe(c, h) + m),
                  (p = parseFloat(h)),
                  (b = h.substr((p + '').length)),
                  (v = ee.lastIndex - b.length),
                  b || ((b = b || P.units[t] || m), v === r.length && ((r += b), (g.e += b))),
                  m !== b && (c = Ar(e, t, u, b) || 0),
                  (g._pt = {
                    _next: g._pt,
                    p: d || 1 === y ? d : ',',
                    s: c,
                    c: p - c,
                    m: (l && l < 4) || 'zIndex' === t ? Math.round : 0,
                  }));
            g.c = v < r.length ? r.substring(v, r.length) : '';
          } else g.r = 'display' === t && 'none' === r ? or : rr;
          return ne.test(r) && (g.e = 0), (this._pt = g), g;
        },
        Dr = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
        Lr = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n,
              r,
              o,
              i = t.t,
              a = i.style,
              s = t.u,
              f = i._gsap;
            if ('all' === s || !0 === s) (a.cssText = ''), (r = 1);
            else
              for (o = (s = s.split(',')).length; --o > -1; )
                (n = s[o]), jn[n] && ((r = 1), (n = 'transformOrigin' === n ? hr : ur)), Cr(i, n);
            r &&
              (Cr(i, ur),
              f && (f.svg && i.removeAttribute('transform'), Zr(i, 1), (f.uncache = 1), dr(a)));
          }
        },
        Rr = {
          clearProps: function (e, t, n, r, o) {
            if ('isFromStart' !== o.data) {
              var i = (e._pt = new kn(e._pt, t, n, 0, 0, Lr));
              return (i.u = r), (i.pr = -10), (i.tween = o), e._props.push(n), 1;
            }
          },
        },
        Ir = [1, 0, 0, 1, 0, 0],
        Xr = {},
        Yr = function (e) {
          return 'matrix(1, 0, 0, 1, 0, 0)' === e || 'none' === e || !e;
        },
        Br = function (e) {
          var t = vr(e, ur);
          return Yr(t) ? Ir : t.substr(7).match(J).map(Me);
        },
        Fr = function (e, t) {
          var n,
            r,
            o,
            i,
            a = e._gsap || ke(e),
            s = e.style,
            f = Br(e);
          return a.svg && e.getAttribute('transform')
            ? '1,0,0,1,0,0' ===
              (f = [
                (o = e.transform.baseVal.consolidate().matrix).a,
                o.b,
                o.c,
                o.d,
                o.e,
                o.f,
              ]).join(',')
              ? Ir
              : f
            : (f !== Ir ||
                e.offsetParent ||
                e === Bn ||
                a.svg ||
                ((o = s.display),
                (s.display = 'block'),
                ((n = e.parentNode) && e.offsetParent) ||
                  ((i = 1), (r = e.nextElementSibling), Bn.appendChild(e)),
                (f = Br(e)),
                o ? (s.display = o) : Cr(e, 'display'),
                i && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : Bn.removeChild(e))),
              t && f.length > 6 ? [f[0], f[1], f[4], f[5], f[12], f[13]] : f);
        },
        Nr = function (e, t, n, r, o, i) {
          var a,
            s,
            f,
            c = e._gsap,
            l = o || Fr(e, !0),
            u = c.xOrigin || 0,
            h = c.yOrigin || 0,
            p = c.xOffset || 0,
            d = c.yOffset || 0,
            b = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            _ = l[5],
            w = t.split(' '),
            x = parseFloat(w[0]) || 0,
            T = parseFloat(w[1]) || 0;
          n
            ? l !== Ir &&
              (s = b * v - m * g) &&
              ((f = x * (-m / s) + T * (b / s) - (b * _ - m * y) / s),
              (x = x * (v / s) + T * (-g / s) + (g * _ - v * y) / s),
              (T = f))
            : ((x = (a = kr(e)).x + (~w[0].indexOf('%') ? (x / 100) * a.width : x)),
              (T = a.y + (~(w[1] || w[0]).indexOf('%') ? (T / 100) * a.height : T))),
            r || (!1 !== r && c.smooth)
              ? ((y = x - u),
                (_ = T - h),
                (c.xOffset = p + (y * b + _ * g) - y),
                (c.yOffset = d + (y * m + _ * v) - _))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = x),
            (c.yOrigin = T),
            (c.smooth = !!r),
            (c.origin = t),
            (c.originIsAbsolute = !!n),
            (e.style[hr] = '0px 0px'),
            i &&
              (Mr(i, c, 'xOrigin', u, x),
              Mr(i, c, 'yOrigin', h, T),
              Mr(i, c, 'xOffset', p, c.xOffset),
              Mr(i, c, 'yOffset', d, c.yOffset)),
            e.setAttribute('data-svg-origin', x + ' ' + T);
        },
        Zr = function (e, t) {
          var n = e._gsap || new Gt(e);
          if ('x' in n && !t && !n.uncache) return n;
          var r,
            o,
            i,
            a,
            s,
            f,
            c,
            l,
            u,
            h,
            p,
            d,
            b,
            m,
            g,
            v,
            y,
            _,
            w,
            x,
            T,
            k,
            E,
            C,
            M,
            S,
            O,
            A,
            z,
            D,
            L,
            R,
            I = e.style,
            X = n.scaleX < 0,
            Y = 'px',
            B = 'deg',
            F = getComputedStyle(e),
            N = vr(e, hr) || '0';
          return (
            (r = o = i = f = c = l = u = h = p = 0),
            (a = s = 1),
            (n.svg = !(!e.getCTM || !Er(e))),
            F.translate &&
              (('none' === F.translate && 'none' === F.scale && 'none' === F.rotate) ||
                (I[ur] =
                  ('none' !== F.translate
                    ? 'translate3d(' +
                      (F.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                      ') '
                    : '') +
                  ('none' !== F.rotate ? 'rotate(' + F.rotate + ') ' : '') +
                  ('none' !== F.scale ? 'scale(' + F.scale.split(' ').join(',') + ') ' : '') +
                  ('none' !== F[ur] ? F[ur] : '')),
              (I.scale = I.rotate = I.translate = 'none')),
            (m = Fr(e, n.svg)),
            n.svg &&
              (n.uncache
                ? ((M = e.getBBox()),
                  (N = n.xOrigin - M.x + 'px ' + (n.yOrigin - M.y) + 'px'),
                  (C = ''))
                : (C = !t && e.getAttribute('data-svg-origin')),
              Nr(e, C || N, !!C || n.originIsAbsolute, !1 !== n.smooth, m)),
            (d = n.xOrigin || 0),
            (b = n.yOrigin || 0),
            m !== Ir &&
              ((_ = m[0]),
              (w = m[1]),
              (x = m[2]),
              (T = m[3]),
              (r = k = m[4]),
              (o = E = m[5]),
              6 === m.length
                ? ((a = Math.sqrt(_ * _ + w * w)),
                  (s = Math.sqrt(T * T + x * x)),
                  (f = _ || w ? Vn(w, _) * Wn : 0),
                  (u = x || T ? Vn(x, T) * Wn + f : 0) && (s *= Math.abs(Math.cos(u * Un))),
                  n.svg && ((r -= d - (d * _ + b * x)), (o -= b - (d * w + b * T))))
                : ((R = m[6]),
                  (D = m[7]),
                  (O = m[8]),
                  (A = m[9]),
                  (z = m[10]),
                  (L = m[11]),
                  (r = m[12]),
                  (o = m[13]),
                  (i = m[14]),
                  (c = (g = Vn(R, z)) * Wn),
                  g &&
                    ((C = k * (v = Math.cos(-g)) + O * (y = Math.sin(-g))),
                    (M = E * v + A * y),
                    (S = R * v + z * y),
                    (O = k * -y + O * v),
                    (A = E * -y + A * v),
                    (z = R * -y + z * v),
                    (L = D * -y + L * v),
                    (k = C),
                    (E = M),
                    (R = S)),
                  (l = (g = Vn(-x, z)) * Wn),
                  g &&
                    ((v = Math.cos(-g)),
                    (L = T * (y = Math.sin(-g)) + L * v),
                    (_ = C = _ * v - O * y),
                    (w = M = w * v - A * y),
                    (x = S = x * v - z * y)),
                  (f = (g = Vn(w, _)) * Wn),
                  g &&
                    ((C = _ * (v = Math.cos(g)) + w * (y = Math.sin(g))),
                    (M = k * v + E * y),
                    (w = w * v - _ * y),
                    (E = E * v - k * y),
                    (_ = C),
                    (k = M)),
                  c && Math.abs(c) + Math.abs(f) > 359.9 && ((c = f = 0), (l = 180 - l)),
                  (a = Me(Math.sqrt(_ * _ + w * w + x * x))),
                  (s = Me(Math.sqrt(E * E + R * R))),
                  (g = Vn(k, E)),
                  (u = Math.abs(g) > 2e-4 ? g * Wn : 0),
                  (p = L ? 1 / (L < 0 ? -L : L) : 0)),
              n.svg &&
                ((C = e.getAttribute('transform')),
                (n.forceCSS = e.setAttribute('transform', '') || !Yr(vr(e, ur))),
                C && e.setAttribute('transform', C))),
            Math.abs(u) > 90 &&
              Math.abs(u) < 270 &&
              (X
                ? ((a *= -1), (u += f <= 0 ? 180 : -180), (f += f <= 0 ? 180 : -180))
                : ((s *= -1), (u += u <= 0 ? 180 : -180))),
            (t = t || n.uncache),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                ((!t && n.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (e.offsetWidth * n.xPercent) / 100
                : 0) +
              Y),
            (n.y =
              o -
              ((n.yPercent =
                o &&
                ((!t && n.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-o) ? -50 : 0)))
                ? (e.offsetHeight * n.yPercent) / 100
                : 0) +
              Y),
            (n.z = i + Y),
            (n.scaleX = Me(a)),
            (n.scaleY = Me(s)),
            (n.rotation = Me(f) + B),
            (n.rotationX = Me(c) + B),
            (n.rotationY = Me(l) + B),
            (n.skewX = u + B),
            (n.skewY = h + B),
            (n.transformPerspective = p + Y),
            (n.zOrigin = parseFloat(N.split(' ')[2]) || 0) && (I[hr] = qr(N)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = P.force3D),
            (n.renderTransform = n.svg ? Gr : Hn ? $r : jr),
            (n.uncache = 0),
            n
          );
        },
        qr = function (e) {
          return (e = e.split(' '))[0] + ' ' + e[1];
        },
        Hr = function (e, t, n) {
          var r = ut(t);
          return Me(parseFloat(t) + parseFloat(Ar(e, 'x', n + 'px', r))) + r;
        },
        jr = function (e, t) {
          (t.z = '0px'), (t.rotationY = t.rotationX = '0deg'), (t.force3D = 0), $r(e, t);
        },
        Wr = '0deg',
        Ur = '0px',
        Vr = ') ',
        $r = function (e, t) {
          var n = t || this,
            r = n.xPercent,
            o = n.yPercent,
            i = n.x,
            a = n.y,
            s = n.z,
            f = n.rotation,
            c = n.rotationY,
            l = n.rotationX,
            u = n.skewX,
            h = n.skewY,
            p = n.scaleX,
            d = n.scaleY,
            b = n.transformPerspective,
            m = n.force3D,
            g = n.target,
            v = n.zOrigin,
            y = '',
            _ = ('auto' === m && e && 1 !== e) || !0 === m;
          if (v && (l !== Wr || c !== Wr)) {
            var w,
              x = parseFloat(c) * Un,
              T = Math.sin(x),
              k = Math.cos(x);
            (x = parseFloat(l) * Un),
              (w = Math.cos(x)),
              (i = Hr(g, i, T * w * -v)),
              (a = Hr(g, a, -Math.sin(x) * -v)),
              (s = Hr(g, s, k * w * -v + v));
          }
          b !== Ur && (y += 'perspective(' + b + Vr),
            (r || o) && (y += 'translate(' + r + '%, ' + o + '%) '),
            (_ || i !== Ur || a !== Ur || s !== Ur) &&
              (y +=
                s !== Ur || _
                  ? 'translate3d(' + i + ', ' + a + ', ' + s + ') '
                  : 'translate(' + i + ', ' + a + Vr),
            f !== Wr && (y += 'rotate(' + f + Vr),
            c !== Wr && (y += 'rotateY(' + c + Vr),
            l !== Wr && (y += 'rotateX(' + l + Vr),
            (u === Wr && h === Wr) || (y += 'skew(' + u + ', ' + h + Vr),
            (1 === p && 1 === d) || (y += 'scale(' + p + ', ' + d + Vr),
            (g.style[ur] = y || 'translate(0, 0)');
        },
        Gr = function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            s = t || this,
            f = s.xPercent,
            c = s.yPercent,
            l = s.x,
            u = s.y,
            h = s.rotation,
            p = s.skewX,
            d = s.skewY,
            b = s.scaleX,
            m = s.scaleY,
            g = s.target,
            v = s.xOrigin,
            y = s.yOrigin,
            _ = s.xOffset,
            w = s.yOffset,
            x = s.forceCSS,
            T = parseFloat(l),
            k = parseFloat(u);
          (h = parseFloat(h)),
            (p = parseFloat(p)),
            (d = parseFloat(d)) && ((p += d = parseFloat(d)), (h += d)),
            h || p
              ? ((h *= Un),
                (p *= Un),
                (n = Math.cos(h) * b),
                (r = Math.sin(h) * b),
                (o = Math.sin(h - p) * -m),
                (i = Math.cos(h - p) * m),
                p &&
                  ((d *= Un),
                  (a = Math.tan(p - d)),
                  (o *= a = Math.sqrt(1 + a * a)),
                  (i *= a),
                  d && ((a = Math.tan(d)), (n *= a = Math.sqrt(1 + a * a)), (r *= a))),
                (n = Me(n)),
                (r = Me(r)),
                (o = Me(o)),
                (i = Me(i)))
              : ((n = b), (i = m), (r = o = 0)),
            ((T && !~(l + '').indexOf('px')) || (k && !~(u + '').indexOf('px'))) &&
              ((T = Ar(g, 'x', l, 'px')), (k = Ar(g, 'y', u, 'px'))),
            (v || y || _ || w) &&
              ((T = Me(T + v - (v * n + y * o) + _)), (k = Me(k + y - (v * r + y * i) + w))),
            (f || c) &&
              ((a = g.getBBox()),
              (T = Me(T + (f / 100) * a.width)),
              (k = Me(k + (c / 100) * a.height))),
            (a = 'matrix(' + n + ',' + r + ',' + o + ',' + i + ',' + T + ',' + k + ')'),
            g.setAttribute('transform', a),
            x && (g.style[ur] = a);
        },
        Kr = function (e, t, n, r, o) {
          var i,
            a,
            s = 360,
            f = Z(o),
            c = parseFloat(o) * (f && ~o.indexOf('rad') ? Wn : 1) - r,
            l = r + c + 'deg';
          return (
            f &&
              ('short' === (i = o.split('_')[1]) && (c %= s) != c % 180 && (c += c < 0 ? s : -360),
              'cw' === i && c < 0
                ? (c = ((c + 36e9) % s) - ~~(c / s) * s)
                : 'ccw' === i && c > 0 && (c = ((c - 36e9) % s) - ~~(c / s) * s)),
            (e._pt = a = new kn(e._pt, t, n, r, c, er)),
            (a.e = l),
            (a.u = 'deg'),
            e._props.push(n),
            a
          );
        },
        Qr = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        Jr = function (e, t, n) {
          var r,
            o,
            i,
            a,
            s,
            f,
            c,
            l = Qr({}, n._gsap),
            u = n.style;
          for (o in (l.svg
            ? ((i = n.getAttribute('transform')),
              n.setAttribute('transform', ''),
              (u[ur] = t),
              (r = Zr(n, 1)),
              Cr(n, ur),
              n.setAttribute('transform', i))
            : ((i = getComputedStyle(n)[ur]), (u[ur] = t), (r = Zr(n, 1)), (u[ur] = i)),
          jn))
            (i = l[o]) !== (a = r[o]) &&
              'perspective,force3D,transformOrigin,svgOrigin'.indexOf(o) < 0 &&
              ((s = ut(i) !== (c = ut(a)) ? Ar(n, o, i, c) : parseFloat(i)),
              (f = parseFloat(a)),
              (e._pt = new kn(e._pt, r, o, s, f - s, Jn)),
              (e._pt.u = c || 0),
              e._props.push(o));
          Qr(r, l);
        };
      Ce('padding,margin,Width,Radius', function (e, t) {
        var n = 'Top',
          r = 'Right',
          o = 'Bottom',
          i = 'Left',
          a = (t < 3 ? [n, r, o, i] : [n + i, n + r, o + r, o + i]).map(function (n) {
            return t < 2 ? e + n : 'border' + n + e;
          });
        Rr[t > 1 ? 'border' + e : e] = function (e, t, n, r, o) {
          var i, s;
          if (arguments.length < 4)
            return (
              (i = a.map(function (t) {
                return zr(e, t, n);
              })),
              5 === (s = i.join(' ')).split(i[0]).length ? i[0] : s
            );
          (i = (r + '').split(' ')),
            (s = {}),
            a.forEach(function (e, t) {
              return (s[e] = i[t] = i[t] || i[((t - 1) / 2) | 0]);
            }),
            e.init(t, s, o);
        };
      });
      var eo,
        to,
        no = {
          name: 'css',
          register: wr,
          targetTest: function (e) {
            return e.style && e.nodeType;
          },
          init: function (e, t, n, r, o) {
            var i,
              a,
              s,
              f,
              c,
              l,
              u,
              h,
              p,
              d,
              b,
              m,
              g,
              v,
              y,
              _,
              w,
              x,
              T,
              k,
              E = this._props,
              C = e.style,
              M = n.vars.startAt;
            for (u in (Fn || wr(),
            (this.styles = this.styles || mr(e)),
            (_ = this.styles.props),
            (this.tween = n),
            t))
              if ('autoRound' !== u && ((a = t[u]), !ve[u] || !rn(u, t, n, r, e, o)))
                if (
                  ((c = typeof a),
                  (l = Rr[u]),
                  'function' === c && (c = typeof (a = a.call(n, r, e, o))),
                  'string' === c && ~a.indexOf('random(') && (a = xt(a)),
                  l)
                )
                  l(this, e, u, a, n) && (y = 1);
                else if ('--' === u.substr(0, 2))
                  (i = (getComputedStyle(e).getPropertyValue(u) + '').trim()),
                    (a += ''),
                    (Lt.lastIndex = 0),
                    Lt.test(i) || ((h = ut(i)), (p = ut(a))),
                    p ? h !== p && (i = Ar(e, u, i, p) + p) : h && (a += h),
                    this.add(C, 'setProperty', i, a, r, o, 0, 0, u),
                    E.push(u),
                    _.push(u, 0, C[u]);
                else if ('undefined' !== c) {
                  if (
                    (M && u in M
                      ? ((i = 'function' == typeof M[u] ? M[u].call(n, r, e, o) : M[u]),
                        Z(i) && ~i.indexOf('random(') && (i = xt(i)),
                        ut(i + '') || (i += P.units[u] || ut(zr(e, u)) || ''),
                        '=' === (i + '').charAt(1) && (i = zr(e, u)))
                      : (i = zr(e, u)),
                    (f = parseFloat(i)),
                    (d = 'string' === c && '=' === a.charAt(1) && a.substr(0, 2)) &&
                      (a = a.substr(2)),
                    (s = parseFloat(a)),
                    u in Qn &&
                      ('autoAlpha' === u &&
                        (1 === f && 'hidden' === zr(e, 'visibility') && s && (f = 0),
                        _.push('visibility', 0, C.visibility),
                        Mr(
                          this,
                          C,
                          'visibility',
                          f ? 'inherit' : 'hidden',
                          s ? 'inherit' : 'hidden',
                          !s
                        )),
                      'scale' !== u &&
                        'transform' !== u &&
                        ~(u = Qn[u]).indexOf(',') &&
                        (u = u.split(',')[0])),
                    (b = u in jn))
                  )
                    if (
                      (this.styles.save(u),
                      m ||
                        (((g = e._gsap).renderTransform && !t.parseTransform) ||
                          Zr(e, t.parseTransform),
                        (v = !1 !== t.smoothOrigin && g.smooth),
                        ((m = this._pt =
                          new kn(this._pt, C, ur, 0, 1, g.renderTransform, g, 0, -1)).dep = 1)),
                      'scale' === u)
                    )
                      (this._pt = new kn(
                        this._pt,
                        g,
                        'scaleY',
                        g.scaleY,
                        (d ? Oe(g.scaleY, d + s) : s) - g.scaleY || 0,
                        Jn
                      )),
                        (this._pt.u = 0),
                        E.push('scaleY', u),
                        (u += 'X');
                    else {
                      if ('transformOrigin' === u) {
                        _.push(hr, 0, C[hr]),
                          (x = void 0),
                          (T = void 0),
                          (k = void 0),
                          (T = (x = (w = a).split(' '))[0]),
                          (k = x[1] || '50%'),
                          ('top' !== T && 'bottom' !== T && 'left' !== k && 'right' !== k) ||
                            ((w = T), (T = k), (k = w)),
                          (x[0] = Dr[T] || T),
                          (x[1] = Dr[k] || k),
                          (a = x.join(' ')),
                          g.svg
                            ? Nr(e, a, 0, v, 0, this)
                            : ((p = parseFloat(a.split(' ')[2]) || 0) !== g.zOrigin &&
                                Mr(this, g, 'zOrigin', g.zOrigin, p),
                              Mr(this, C, u, qr(i), qr(a)));
                        continue;
                      }
                      if ('svgOrigin' === u) {
                        Nr(e, a, 1, v, 0, this);
                        continue;
                      }
                      if (u in Xr) {
                        Kr(this, g, u, f, d ? Oe(f, d + a) : a);
                        continue;
                      }
                      if ('smoothOrigin' === u) {
                        Mr(this, g, 'smooth', g.smooth, a);
                        continue;
                      }
                      if ('force3D' === u) {
                        g[u] = a;
                        continue;
                      }
                      if ('transform' === u) {
                        Jr(this, a, e);
                        continue;
                      }
                    }
                  else u in C || (u = _r(u) || u);
                  if (b || ((s || 0 === s) && (f || 0 === f) && !Kn.test(a) && u in C))
                    s || (s = 0),
                      (h = (i + '').substr((f + '').length)) !==
                        (p = ut(a) || (u in P.units ? P.units[u] : h)) && (f = Ar(e, u, i, p)),
                      (this._pt = new kn(
                        this._pt,
                        b ? g : C,
                        u,
                        f,
                        (d ? Oe(f, d + s) : s) - f,
                        b || ('px' !== p && 'zIndex' !== u) || !1 === t.autoRound ? Jn : nr
                      )),
                      (this._pt.u = p || 0),
                      h !== p && '%' !== p && ((this._pt.b = i), (this._pt.r = tr));
                  else if (u in C) Pr.call(this, e, u, i, d ? d + a : a);
                  else if (u in e) this.add(e, u, i || e[u], d ? d + a : a, r, o);
                  else if ('parseTransform' !== u) {
                    fe(u, a);
                    continue;
                  }
                  b || (u in C ? _.push(u, 0, C[u]) : _.push(u, 1, i || e[u])), E.push(u);
                }
            y && Tn(this);
          },
          render: function (e, t) {
            if (t.tween._time || !qn()) for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
            else t.styles.revert();
          },
          get: zr,
          aliases: Qn,
          getSetter: function (e, t, n) {
            var r = Qn[t];
            return (
              r && r.indexOf(',') < 0 && (t = r),
              t in jn && t !== hr && (e._gsap.x || zr(e, 'x'))
                ? n && Zn === n
                  ? 'scale' === t
                    ? fr
                    : sr
                  : (Zn = n || {}) && ('scale' === t ? cr : lr)
                : e.style && !j(e.style[t])
                ? ir
                : ~t.indexOf('-')
                ? ar
                : bn(e, t)
            );
          },
          core: { _removeProperty: Cr, _getMatrix: Fr },
        };
      (In.utils.checkPrefix = _r),
        (In.core.getStyleSaver = mr),
        (to = Ce(
          'x,y,z,scale,scaleX,scaleY,xPercent,yPercent' +
            ',' +
            (eo = 'rotation,rotationX,rotationY,skewX,skewY') +
            ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
          function (e) {
            jn[e] = 1;
          }
        )),
        Ce(eo, function (e) {
          (P.units[e] = 'deg'), (Xr[e] = 1);
        }),
        (Qn[to[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + eo),
        Ce(
          '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
          function (e) {
            var t = e.split(':');
            Qn[t[1]] = to[t[0]];
          }
        ),
        Ce(
          'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
          function (e) {
            P.units[e] = 'px';
          }
        ),
        In.registerPlugin(no);
      var ro,
        oo,
        io,
        ao,
        so,
        fo,
        co,
        lo,
        uo,
        ho = In.registerPlugin(no) || In,
        po = (ho.core.Tween, 'transform'),
        bo = po + 'Origin',
        mo = function (e) {
          var t = e.ownerDocument || e;
          !(po in e.style) && 'msTransform' in e.style && (bo = (po = 'msTransform') + 'Origin');
          for (; t.parentNode && (t = t.parentNode); );
          if (((oo = window), (co = new Mo()), t)) {
            (ro = t),
              (io = t.documentElement),
              (ao = t.body),
              ((lo = ro.createElementNS('http://www.w3.org/2000/svg', 'g')).style.transform =
                'none');
            var n = t.createElement('div'),
              r = t.createElement('div');
            ao.appendChild(n),
              n.appendChild(r),
              (n.style.position = 'static'),
              (n.style[po] = 'translate3d(0,0,1px)'),
              (uo = r.offsetParent !== n),
              ao.removeChild(n);
          }
          return t;
        },
        go = function (e) {
          for (var t, n; e && e !== ao; )
            (n = e._gsap) && n.uncache && n.get(e, 'x'),
              n &&
                !n.scaleX &&
                !n.scaleY &&
                n.renderTransform &&
                ((n.scaleX = n.scaleY = 1e-4), n.renderTransform(1, n), t ? t.push(n) : (t = [n])),
              (e = e.parentNode);
          return t;
        },
        vo = [],
        yo = [],
        _o = function () {
          return oo.pageYOffset || ro.scrollTop || io.scrollTop || ao.scrollTop || 0;
        },
        wo = function () {
          return oo.pageXOffset || ro.scrollLeft || io.scrollLeft || ao.scrollLeft || 0;
        },
        xo = function (e) {
          return e.ownerSVGElement || ('svg' === (e.tagName + '').toLowerCase() ? e : null);
        },
        To = function e(t) {
          return (
            'fixed' === oo.getComputedStyle(t).position ||
            ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
          );
        },
        ko = function e(t, n) {
          if (t.parentNode && (ro || mo(t))) {
            var r = xo(t),
              o = r
                ? r.getAttribute('xmlns') || 'http://www.w3.org/2000/svg'
                : 'http://www.w3.org/1999/xhtml',
              i = r ? (n ? 'rect' : 'g') : 'div',
              a = 2 !== n ? 0 : 100,
              s = 3 === n ? 100 : 0,
              f = 'position:absolute;display:block;pointer-events:none;margin:0;padding:0;',
              c = ro.createElementNS
                ? ro.createElementNS(o.replace(/^https/, 'http'), i)
                : ro.createElement(i);
            return (
              n &&
                (r
                  ? (fo || (fo = e(t)),
                    c.setAttribute('width', 0.01),
                    c.setAttribute('height', 0.01),
                    c.setAttribute('transform', 'translate(' + a + ',' + s + ')'),
                    fo.appendChild(c))
                  : (so || ((so = e(t)).style.cssText = f),
                    (c.style.cssText =
                      f + 'width:0.1px;height:0.1px;top:' + s + 'px;left:' + a + 'px'),
                    so.appendChild(c))),
              c
            );
          }
          throw 'Need document and parent.';
        },
        Eo = function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            s,
            f = xo(e),
            c = e === f,
            l = f ? vo : yo,
            u = e.parentNode;
          if (e === oo) return e;
          if ((l.length || l.push(ko(e, 1), ko(e, 2), ko(e, 3)), (n = f ? fo : so), f))
            c
              ? ((o = (function (e) {
                  var t,
                    n = e.getCTM();
                  return (
                    n ||
                      ((t = e.style[po]),
                      (e.style[po] = 'none'),
                      e.appendChild(lo),
                      (n = lo.getCTM()),
                      e.removeChild(lo),
                      t
                        ? (e.style[po] = t)
                        : e.style.removeProperty(po.replace(/([A-Z])/g, '-$1').toLowerCase())),
                    n || co.clone()
                  );
                })(e)),
                (i = -o.e / o.a),
                (a = -o.f / o.d),
                (r = co))
              : e.getBBox
              ? ((o = e.getBBox()),
                (r = (r = e.transform ? e.transform.baseVal : {}).numberOfItems
                  ? r.numberOfItems > 1
                    ? (function (e) {
                        for (var t = new Mo(), n = 0; n < e.numberOfItems; n++)
                          t.multiply(e.getItem(n).matrix);
                        return t;
                      })(r)
                    : r.getItem(0).matrix
                  : co),
                (i = r.a * o.x + r.c * o.y),
                (a = r.b * o.x + r.d * o.y))
              : ((r = new Mo()), (i = a = 0)),
              t && 'g' === e.tagName.toLowerCase() && (i = a = 0),
              (c ? f : u).appendChild(n),
              n.setAttribute(
                'transform',
                'matrix(' +
                  r.a +
                  ',' +
                  r.b +
                  ',' +
                  r.c +
                  ',' +
                  r.d +
                  ',' +
                  (r.e + i) +
                  ',' +
                  (r.f + a) +
                  ')'
              );
          else {
            if (((i = a = 0), uo))
              for (r = e.offsetParent, o = e; o && (o = o.parentNode) && o !== r && o.parentNode; )
                (oo.getComputedStyle(o)[po] + '').length > 4 &&
                  ((i = o.offsetLeft), (a = o.offsetTop), (o = 0));
            if ('absolute' !== (s = oo.getComputedStyle(e)).position && 'fixed' !== s.position)
              for (r = e.offsetParent; u && u !== r; )
                (i += u.scrollLeft || 0), (a += u.scrollTop || 0), (u = u.parentNode);
            ((o = n.style).top = e.offsetTop - a + 'px'),
              (o.left = e.offsetLeft - i + 'px'),
              (o[po] = s[po]),
              (o[bo] = s[bo]),
              (o.position = 'fixed' === s.position ? 'fixed' : 'absolute'),
              e.parentNode.appendChild(n);
          }
          return n;
        },
        Co = function (e, t, n, r, o, i, a) {
          return (e.a = t), (e.b = n), (e.c = r), (e.d = o), (e.e = i), (e.f = a), e;
        },
        Mo = (function () {
          function e(e, t, n, r, o, i) {
            void 0 === e && (e = 1),
              void 0 === t && (t = 0),
              void 0 === n && (n = 0),
              void 0 === r && (r = 1),
              void 0 === o && (o = 0),
              void 0 === i && (i = 0),
              Co(this, e, t, n, r, o, i);
          }
          var t = e.prototype;
          return (
            (t.inverse = function () {
              var e = this.a,
                t = this.b,
                n = this.c,
                r = this.d,
                o = this.e,
                i = this.f,
                a = e * r - t * n || 1e-10;
              return Co(
                this,
                r / a,
                -t / a,
                -n / a,
                e / a,
                (n * i - r * o) / a,
                -(e * i - t * o) / a
              );
            }),
            (t.multiply = function (e) {
              var t = this.a,
                n = this.b,
                r = this.c,
                o = this.d,
                i = this.e,
                a = this.f,
                s = e.a,
                f = e.c,
                c = e.b,
                l = e.d,
                u = e.e,
                h = e.f;
              return Co(
                this,
                s * t + c * r,
                s * n + c * o,
                f * t + l * r,
                f * n + l * o,
                i + u * t + h * r,
                a + u * n + h * o
              );
            }),
            (t.clone = function () {
              return new e(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (t.equals = function (e) {
              var t = this.a,
                n = this.b,
                r = this.c,
                o = this.d,
                i = this.e,
                a = this.f;
              return t === e.a && n === e.b && r === e.c && o === e.d && i === e.e && a === e.f;
            }),
            (t.apply = function (e, t) {
              void 0 === t && (t = {});
              var n = e.x,
                r = e.y,
                o = this.a,
                i = this.b,
                a = this.c,
                s = this.d,
                f = this.e,
                c = this.f;
              return (t.x = n * o + r * a + f || 0), (t.y = n * i + r * s + c || 0), t;
            }),
            e
          );
        })();
      function So(e, t, n, r) {
        if (!e || !e.parentNode || (ro || mo(e)).documentElement === e) return new Mo();
        var o = go(e),
          i = xo(e) ? vo : yo,
          a = Eo(e, n),
          s = i[0].getBoundingClientRect(),
          f = i[1].getBoundingClientRect(),
          c = i[2].getBoundingClientRect(),
          l = a.parentNode,
          u = !r && To(e),
          h = new Mo(
            (f.left - s.left) / 100,
            (f.top - s.top) / 100,
            (c.left - s.left) / 100,
            (c.top - s.top) / 100,
            s.left + (u ? 0 : wo()),
            s.top + (u ? 0 : _o())
          );
        if ((l.removeChild(a), o))
          for (s = o.length; s--; ) ((f = o[s]).scaleX = f.scaleY = 0), f.renderTransform(1, f);
        return t ? h.inverse() : h;
      }
      function Oo(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      var Ao,
        zo,
        Po,
        Do,
        Lo,
        Ro,
        Io,
        Xo,
        Yo,
        Bo,
        Fo,
        No,
        Zo,
        qo,
        Ho,
        jo,
        Wo,
        Uo,
        Vo,
        $o,
        Go,
        Ko = 0,
        Qo = function () {
          return 'undefined' != typeof window;
        },
        Jo = function () {
          return Ao || (Qo() && (Ao = window.gsap) && Ao.registerPlugin && Ao);
        },
        ei = function (e) {
          return 'function' == typeof e;
        },
        ti = function (e) {
          return 'object' == typeof e;
        },
        ni = function (e) {
          return void 0 === e;
        },
        ri = function () {
          return !1;
        },
        oi = 'transform',
        ii = 'transformOrigin',
        ai = function (e) {
          return Math.round(1e4 * e) / 1e4;
        },
        si = Array.isArray,
        fi = function (e, t) {
          var n = Po.createElementNS
            ? Po.createElementNS((t || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), e)
            : Po.createElement(e);
          return n.style ? n : Po.createElement(e);
        },
        ci = 180 / Math.PI,
        li = 1e20,
        ui = new Mo(),
        hi =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        pi = [],
        di = {},
        bi = 0,
        mi = /^(?:a|input|textarea|button|select)$/i,
        gi = 0,
        vi = {},
        yi = {},
        _i = function (e, t) {
          var n,
            r = {};
          for (n in e) r[n] = t ? e[n] * t : e[n];
          return r;
        },
        wi = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        xi = function e(t, n) {
          for (var r, o = t.length; o--; )
            n ? (t[o].style.touchAction = n) : t[o].style.removeProperty('touch-action'),
              (r = t[o].children) && r.length && e(r, n);
        },
        Ti = function () {
          return pi.forEach(function (e) {
            return e();
          });
        },
        ki = function (e) {
          pi.push(e), 1 === pi.length && Ao.ticker.add(Ti);
        },
        Ei = function () {
          return !pi.length && Ao.ticker.remove(Ti);
        },
        Ci = function (e) {
          for (var t = pi.length; t--; ) pi[t] === e && pi.splice(t, 1);
          Ao.to(Ei, { overwrite: !0, delay: 15, duration: 0, onComplete: Ei, data: '_draggable' });
        },
        Mi = function (e, t, n, r) {
          if (e.addEventListener) {
            var o = Zo[t];
            (r = r || (Fo ? { passive: !1 } : null)),
              e.addEventListener(o || t, n, r),
              o && t !== o && e.addEventListener(t, n, r);
          }
        },
        Si = function (e, t, n, r) {
          if (e.removeEventListener) {
            var o = Zo[t];
            e.removeEventListener(o || t, n, r), o && t !== o && e.removeEventListener(t, n, r);
          }
        },
        Oi = function (e) {
          e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation();
        },
        Ai = function (e, t) {
          for (var n = e.length; n--; ) if (e[n].identifier === t) return !0;
        },
        zi = function e(t) {
          (qo = t.touches && Ko < t.touches.length), Si(t.target, 'touchend', e);
        },
        Pi = function (e) {
          (qo = e.touches && Ko < e.touches.length), Mi(e.target, 'touchend', zi);
        },
        Di = function (e) {
          return (
            zo.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
          );
        },
        Li = function (e) {
          return (
            zo.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
          );
        },
        Ri = function e(t, n) {
          Mi(t, 'scroll', n), Xi(t.parentNode) || e(t.parentNode, n);
        },
        Ii = function e(t, n) {
          Si(t, 'scroll', n), Xi(t.parentNode) || e(t.parentNode, n);
        },
        Xi = function (e) {
          return !(
            e &&
            e !== Do &&
            9 !== e.nodeType &&
            e !== Po.body &&
            e !== zo &&
            e.nodeType &&
            e.parentNode
          );
        },
        Yi = function (e, t) {
          var n = 'x' === t ? 'Width' : 'Height',
            r = 'scroll' + n,
            o = 'client' + n;
          return Math.max(
            0,
            Xi(e) ? Math.max(Do[r], Lo[r]) - (zo['inner' + n] || Do[o] || Lo[o]) : e[r] - e[o]
          );
        },
        Bi = function e(t, n) {
          var r = Yi(t, 'x'),
            o = Yi(t, 'y');
          Xi(t) ? (t = yi) : e(t.parentNode, n),
            (t._gsMaxScrollX = r),
            (t._gsMaxScrollY = o),
            n || ((t._gsScrollX = t.scrollLeft || 0), (t._gsScrollY = t.scrollTop || 0));
        },
        Fi = function (e, t, n) {
          var r = e.style;
          r &&
            (ni(r[t]) && (t = Yo(t, e) || t),
            null == n
              ? r.removeProperty && r.removeProperty(t.replace(/([A-Z])/g, '-$1').toLowerCase())
              : (r[t] = n));
        },
        Ni = function (e) {
          return zo.getComputedStyle(
            e instanceof Element ? e : e.host || (e.parentNode || {}).host || e
          );
        },
        Zi = {},
        qi = function (e) {
          if (e === zo)
            return (
              (Zi.left = Zi.top = 0),
              (Zi.width = Zi.right = Do.clientWidth || e.innerWidth || Lo.clientWidth || 0),
              (Zi.height = Zi.bottom =
                (e.innerHeight || 0) - 20 < Do.clientHeight
                  ? Do.clientHeight
                  : e.innerHeight || Lo.clientHeight || 0),
              Zi
            );
          var t = e.ownerDocument || Po,
            n = ni(e.pageX)
              ? e.nodeType || ni(e.left) || ni(e.top)
                ? Bo(e)[0].getBoundingClientRect()
                : e
              : {
                  left: e.pageX - Li(t),
                  top: e.pageY - Di(t),
                  right: e.pageX - Li(t) + 1,
                  bottom: e.pageY - Di(t) + 1,
                };
          return (
            ni(n.right) && !ni(n.width)
              ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
              : ni(n.width) &&
                (n = {
                  width: n.right - n.left,
                  height: n.bottom - n.top,
                  right: n.right,
                  left: n.left,
                  bottom: n.bottom,
                  top: n.top,
                }),
            n
          );
        },
        Hi = function (e, t, n) {
          var r,
            o = e.vars,
            i = o[n],
            a = e._listeners[t];
          return (
            ei(i) && (r = i.apply(o.callbackScope || e, o[n + 'Params'] || [e.pointerEvent])),
            a && !1 === e.dispatchEvent(t) && (r = !1),
            r
          );
        },
        ji = function (e, t) {
          var n,
            r,
            o,
            i = Bo(e)[0];
          return i.nodeType || i === zo
            ? Ui(i, t)
            : ni(e.left)
            ? {
                left: (r = e.min || e.minX || e.minRotation || 0),
                top: (n = e.min || e.minY || 0),
                width: (e.max || e.maxX || e.maxRotation || 0) - r,
                height: (e.max || e.maxY || 0) - n,
              }
            : ((o = { x: 0, y: 0 }),
              { left: e.left - o.x, top: e.top - o.y, width: e.width, height: e.height });
        },
        Wi = {},
        Ui = function (e, t) {
          t = Bo(t)[0];
          var n,
            r,
            o,
            i,
            a,
            s,
            f,
            c,
            l,
            u,
            h,
            p,
            d,
            b = e.getBBox && e.ownerSVGElement,
            m = e.ownerDocument || Po;
          if (e === zo)
            (o = Di(m)),
              (r =
                (n = Li(m)) +
                (m.documentElement.clientWidth || e.innerWidth || m.body.clientWidth || 0)),
              (i =
                o +
                ((e.innerHeight || 0) - 20 < m.documentElement.clientHeight
                  ? m.documentElement.clientHeight
                  : e.innerHeight || m.body.clientHeight || 0));
          else {
            if (t === zo || ni(t)) return e.getBoundingClientRect();
            (n = o = 0),
              b
                ? ((h = (u = e.getBBox()).width), (p = u.height))
                : (e.viewBox &&
                    (u = e.viewBox.baseVal) &&
                    ((n = u.x || 0), (o = u.y || 0), (h = u.width), (p = u.height)),
                  h ||
                    ((u = 'border-box' === (d = Ni(e)).boxSizing),
                    (h =
                      (parseFloat(d.width) || e.clientWidth || 0) +
                      (u ? 0 : parseFloat(d.borderLeftWidth) + parseFloat(d.borderRightWidth))),
                    (p =
                      (parseFloat(d.height) || e.clientHeight || 0) +
                      (u ? 0 : parseFloat(d.borderTopWidth) + parseFloat(d.borderBottomWidth))))),
              (r = h),
              (i = p);
          }
          return e === t
            ? { left: n, top: o, width: r - n, height: i - o }
            : ((s = (a = So(t, !0).multiply(So(e))).apply({ x: n, y: o })),
              (f = a.apply({ x: r, y: o })),
              (c = a.apply({ x: r, y: i })),
              (l = a.apply({ x: n, y: i })),
              {
                left: (n = Math.min(s.x, f.x, c.x, l.x)),
                top: (o = Math.min(s.y, f.y, c.y, l.y)),
                width: Math.max(s.x, f.x, c.x, l.x) - n,
                height: Math.max(s.y, f.y, c.y, l.y) - o,
              });
        },
        Vi = function (e, t, n, r, o, i) {
          var a,
            s,
            f,
            c = {};
          if (t)
            if (1 !== o && t instanceof Array) {
              if (((c.end = a = []), (f = t.length), ti(t[0])))
                for (s = 0; s < f; s++) a[s] = _i(t[s], o);
              else for (s = 0; s < f; s++) a[s] = t[s] * o;
              (n += 1.1), (r -= 1.1);
            } else
              ei(t)
                ? (c.end = function (n) {
                    var r,
                      i,
                      a = t.call(e, n);
                    if (1 !== o)
                      if (ti(a)) {
                        for (i in ((r = {}), a)) r[i] = a[i] * o;
                        a = r;
                      } else a *= o;
                    return a;
                  })
                : (c.end = t);
          return (
            (n || 0 === n) && (c.max = n), (r || 0 === r) && (c.min = r), i && (c.velocity = 0), c
          );
        },
        $i = function e(t) {
          var n;
          return (
            !(!t || !t.getAttribute || t === Lo) &&
            (!(
              'true' !== (n = t.getAttribute('data-clickable')) &&
              ('false' === n ||
                (!t.onclick &&
                  !mi.test(t.nodeName + '') &&
                  'true' !== t.getAttribute('contentEditable')))
            ) ||
              e(t.parentNode))
          );
        },
        Gi = function (e, t) {
          for (var n, r = e.length; r--; )
            ((n = e[r]).ondragstart = n.onselectstart = t ? null : ri),
              Ao.set(n, { lazy: !0, userSelect: t ? 'text' : 'none' });
        },
        Ki = function e(t) {
          return (
            'fixed' === Ni(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
          );
        },
        Qi = function (e, t) {
          (e = Ao.utils.toArray(e)[0]), (t = t || {});
          var n,
            r,
            o,
            i,
            a,
            s,
            f = document.createElement('div'),
            c = f.style,
            l = e.firstChild,
            u = 0,
            h = 0,
            p = e.scrollTop,
            d = e.scrollLeft,
            b = e.scrollWidth,
            m = e.scrollHeight,
            g = 0,
            v = 0,
            y = 0;
          $o && !1 !== t.force3D
            ? ((a = 'translate3d('), (s = 'px,0px)'))
            : oi && ((a = 'translate('), (s = 'px)')),
            (this.scrollTop = function (e, t) {
              if (!arguments.length) return -this.top();
              this.top(-e, t);
            }),
            (this.scrollLeft = function (e, t) {
              if (!arguments.length) return -this.left();
              this.left(-e, t);
            }),
            (this.left = function (n, r) {
              if (!arguments.length) return -(e.scrollLeft + h);
              var o = e.scrollLeft - d,
                i = h;
              if ((o > 2 || o < -2) && !r)
                return (
                  (d = e.scrollLeft),
                  Ao.killTweensOf(this, { left: 1, scrollLeft: 1 }),
                  this.left(-d),
                  void (t.onKill && t.onKill())
                );
              (n = -n) < 0
                ? ((h = (n - 0.5) | 0), (n = 0))
                : n > v
                ? ((h = (n - v) | 0), (n = v))
                : (h = 0),
                (h || i) &&
                  (this._skip || (c[oi] = a + -h + 'px,' + -u + s),
                  h + g >= 0 && (c.paddingRight = h + g + 'px')),
                (e.scrollLeft = 0 | n),
                (d = e.scrollLeft);
            }),
            (this.top = function (n, r) {
              if (!arguments.length) return -(e.scrollTop + u);
              var o = e.scrollTop - p,
                i = u;
              if ((o > 2 || o < -2) && !r)
                return (
                  (p = e.scrollTop),
                  Ao.killTweensOf(this, { top: 1, scrollTop: 1 }),
                  this.top(-p),
                  void (t.onKill && t.onKill())
                );
              (n = -n) < 0
                ? ((u = (n - 0.5) | 0), (n = 0))
                : n > y
                ? ((u = (n - y) | 0), (n = y))
                : (u = 0),
                (u || i) && (this._skip || (c[oi] = a + -h + 'px,' + -u + s)),
                (e.scrollTop = 0 | n),
                (p = e.scrollTop);
            }),
            (this.maxScrollTop = function () {
              return y;
            }),
            (this.maxScrollLeft = function () {
              return v;
            }),
            (this.disable = function () {
              for (l = f.firstChild; l; ) (i = l.nextSibling), e.appendChild(l), (l = i);
              e === f.parentNode && e.removeChild(f);
            }),
            (this.enable = function () {
              if ((l = e.firstChild) !== f) {
                for (; l; ) (i = l.nextSibling), f.appendChild(l), (l = i);
                e.appendChild(f), this.calibrate();
              }
            }),
            (this.calibrate = function (t) {
              var i,
                a,
                s,
                l = e.clientWidth === n;
              (p = e.scrollTop),
                (d = e.scrollLeft),
                (l &&
                  e.clientHeight === r &&
                  f.offsetHeight === o &&
                  b === e.scrollWidth &&
                  m === e.scrollHeight &&
                  !t) ||
                  ((u || h) &&
                    ((a = this.left()),
                    (s = this.top()),
                    this.left(-e.scrollLeft),
                    this.top(-e.scrollTop)),
                  (i = Ni(e)),
                  (l && !t) ||
                    ((c.display = 'block'),
                    (c.width = 'auto'),
                    (c.paddingRight = '0px'),
                    (g = Math.max(0, e.scrollWidth - e.clientWidth)) &&
                      (g += parseFloat(i.paddingLeft) + (Go ? parseFloat(i.paddingRight) : 0))),
                  (c.display = 'inline-block'),
                  (c.position = 'relative'),
                  (c.overflow = 'visible'),
                  (c.verticalAlign = 'top'),
                  (c.boxSizing = 'content-box'),
                  (c.width = '100%'),
                  (c.paddingRight = g + 'px'),
                  Go && (c.paddingBottom = i.paddingBottom),
                  (n = e.clientWidth),
                  (r = e.clientHeight),
                  (b = e.scrollWidth),
                  (m = e.scrollHeight),
                  (v = e.scrollWidth - n),
                  (y = e.scrollHeight - r),
                  (o = f.offsetHeight),
                  (c.display = 'block'),
                  (a || s) && (this.left(a), this.top(s)));
            }),
            (this.content = f),
            (this.element = e),
            (this._skip = !1),
            this.enable();
        },
        Ji = function (e) {
          if (Qo() && document.body) {
            var t = window && window.navigator;
            (zo = window),
              (Po = document),
              (Do = Po.documentElement),
              (Lo = Po.body),
              (Ro = fi('div')),
              (Uo = !!window.PointerEvent),
              ((Io = fi('div')).style.cssText =
                'visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab'),
              (Wo = 'grab' === Io.style.cursor ? 'grab' : 'move'),
              (Ho = t && -1 !== t.userAgent.toLowerCase().indexOf('android')),
              (No =
                ('ontouchstart' in Do && 'orientation' in zo) ||
                (t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0))),
              (r = fi('div')),
              (i = (o = fi('div')).style),
              (a = Lo),
              (i.display = 'inline-block'),
              (i.position = 'relative'),
              (r.style.cssText =
                'width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden'),
              r.appendChild(o),
              a.appendChild(r),
              (n = o.offsetHeight + 18 > r.scrollHeight),
              a.removeChild(r),
              (Go = n),
              (Zo = (function (e) {
                for (
                  var t = e.split(','),
                    n = (
                      ('onpointerdown' in Ro)
                        ? 'pointerdown,pointermove,pointerup,pointercancel'
                        : ('onmspointerdown' in Ro)
                        ? 'MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel'
                        : e
                    ).split(','),
                    r = {},
                    o = 4;
                  --o > -1;

                )
                  (r[t[o]] = n[o]), (r[n[o]] = t[o]);
                try {
                  Do.addEventListener(
                    'test',
                    null,
                    Object.defineProperty({}, 'passive', {
                      get: function () {
                        Fo = 1;
                      },
                    })
                  );
                } catch (e) {}
                return r;
              })('touchstart,touchmove,touchend,touchcancel')),
              Mi(Po, 'touchcancel', ri),
              Mi(zo, 'touchmove', ri),
              Lo && Lo.addEventListener('touchstart', ri),
              Mi(Po, 'contextmenu', function () {
                for (var e in di) di[e].isPressed && di[e].endDrag();
              }),
              (Ao = Xo = Jo());
          }
          var n, r, o, i, a;
          Ao
            ? ((jo = Ao.plugins.inertia),
              (Vo = Ao.core.context || function () {}),
              (Yo = Ao.utils.checkPrefix),
              (oi = Yo(oi)),
              (ii = Yo(ii)),
              (Bo = Ao.utils.toArray),
              ($o = !!Yo('perspective')))
            : e && console.warn('Please gsap.registerPlugin(Draggable)');
        },
        ea = (function (e) {
          var t, n;
          function r(t, n) {
            var o;
            (o = e.call(this) || this),
              Xo || Ji(1),
              (t = Bo(t)[0]),
              jo || (jo = Ao.plugins.inertia),
              (o.vars = n = _i(n || {})),
              (o.target = t),
              (o.x = o.y = o.rotation = 0),
              (o.dragResistance = parseFloat(n.dragResistance) || 0),
              (o.edgeResistance = isNaN(n.edgeResistance) ? 1 : parseFloat(n.edgeResistance) || 0),
              (o.lockAxis = n.lockAxis),
              (o.autoScroll = n.autoScroll || 0),
              (o.lockedAxis = null),
              (o.allowEventDefault = !!n.allowEventDefault),
              Ao.getProperty(t, 'x');
            var i,
              a,
              s,
              f,
              c,
              l,
              u,
              h,
              p,
              d,
              b,
              m,
              g,
              v,
              y,
              _,
              w,
              x,
              T,
              k,
              E,
              C,
              M,
              S,
              O,
              A,
              z,
              P,
              D,
              L,
              R,
              I,
              X,
              Y = (n.type || 'x,y').toLowerCase(),
              B = ~Y.indexOf('x') || ~Y.indexOf('y'),
              F = -1 !== Y.indexOf('rotation'),
              N = F ? 'rotation' : B ? 'x' : 'left',
              Z = B ? 'y' : 'top',
              q = !(!~Y.indexOf('x') && !~Y.indexOf('left') && 'scroll' !== Y),
              H = !(!~Y.indexOf('y') && !~Y.indexOf('top') && 'scroll' !== Y),
              j = n.minimumMovement || 2,
              W = Oo(o),
              U = Bo(n.trigger || n.handle || t),
              V = {},
              $ = 0,
              G = !1,
              K = n.autoScrollMarginTop || 40,
              Q = n.autoScrollMarginRight || 40,
              J = n.autoScrollMarginBottom || 40,
              ee = n.autoScrollMarginLeft || 40,
              te = n.clickableTest || $i,
              ne = 0,
              re = t._gsap || Ao.core.getCache(t),
              oe = Ki(t),
              ie = function (e, n) {
                return parseFloat(re.get(t, e, n));
              },
              ae = t.ownerDocument || Po,
              se = function (e) {
                return Oi(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1;
              },
              fe = function e(n) {
                if (W.autoScroll && W.isDragging && (G || w)) {
                  var r,
                    o,
                    i,
                    s,
                    f,
                    c,
                    l,
                    u,
                    p = t,
                    d = 15 * W.autoScroll;
                  for (
                    G = !1,
                      yi.scrollTop =
                        null != zo.pageYOffset
                          ? zo.pageYOffset
                          : null != ae.documentElement.scrollTop
                          ? ae.documentElement.scrollTop
                          : ae.body.scrollTop,
                      yi.scrollLeft =
                        null != zo.pageXOffset
                          ? zo.pageXOffset
                          : null != ae.documentElement.scrollLeft
                          ? ae.documentElement.scrollLeft
                          : ae.body.scrollLeft,
                      s = W.pointerX - yi.scrollLeft,
                      f = W.pointerY - yi.scrollTop;
                    p && !o;

                  )
                    (r = (o = Xi(p.parentNode)) ? yi : p.parentNode),
                      (i = o
                        ? {
                            bottom: Math.max(Do.clientHeight, zo.innerHeight || 0),
                            right: Math.max(Do.clientWidth, zo.innerWidth || 0),
                            left: 0,
                            top: 0,
                          }
                        : r.getBoundingClientRect()),
                      (c = l = 0),
                      H &&
                        ((u = r._gsMaxScrollY - r.scrollTop) < 0
                          ? (l = u)
                          : f > i.bottom - J && u
                          ? ((G = !0),
                            (l = Math.min(u, (d * (1 - Math.max(0, i.bottom - f) / J)) | 0)))
                          : f < i.top + K &&
                            r.scrollTop &&
                            ((G = !0),
                            (l = -Math.min(
                              r.scrollTop,
                              (d * (1 - Math.max(0, f - i.top) / K)) | 0
                            ))),
                        l && (r.scrollTop += l)),
                      q &&
                        ((u = r._gsMaxScrollX - r.scrollLeft) < 0
                          ? (c = u)
                          : s > i.right - Q && u
                          ? ((G = !0),
                            (c = Math.min(u, (d * (1 - Math.max(0, i.right - s) / Q)) | 0)))
                          : s < i.left + ee &&
                            r.scrollLeft &&
                            ((G = !0),
                            (c = -Math.min(
                              r.scrollLeft,
                              (d * (1 - Math.max(0, s - i.left) / ee)) | 0
                            ))),
                        c && (r.scrollLeft += c)),
                      o &&
                        (c || l) &&
                        (zo.scrollTo(r.scrollLeft, r.scrollTop),
                        we(W.pointerX + c, W.pointerY + l)),
                      (p = r);
                }
                if (w) {
                  var b = W.x,
                    m = W.y;
                  F
                    ? ((W.deltaX = b - parseFloat(re.rotation)),
                      (W.rotation = b),
                      (re.rotation = b + 'deg'),
                      re.renderTransform(1, re))
                    : a
                    ? (H && ((W.deltaY = m - a.top()), a.top(m)),
                      q && ((W.deltaX = b - a.left()), a.left(b)))
                    : B
                    ? (H && ((W.deltaY = m - parseFloat(re.y)), (re.y = m + 'px')),
                      q && ((W.deltaX = b - parseFloat(re.x)), (re.x = b + 'px')),
                      re.renderTransform(1, re))
                    : (H &&
                        ((W.deltaY = m - parseFloat(t.style.top || 0)), (t.style.top = m + 'px')),
                      q &&
                        ((W.deltaX = b - parseFloat(t.style.left || 0)),
                        (t.style.left = b + 'px'))),
                    !h ||
                      n ||
                      P ||
                      ((P = !0),
                      !1 === Hi(W, 'drag', 'onDrag') &&
                        (q && (W.x -= W.deltaX), H && (W.y -= W.deltaY), e(!0)),
                      (P = !1));
                }
                w = !1;
              },
              ce = function (e, n) {
                var r,
                  o,
                  i = W.x,
                  s = W.y;
                t._gsap || (re = Ao.core.getCache(t)),
                  re.uncache && Ao.getProperty(t, 'x'),
                  B
                    ? ((W.x = parseFloat(re.x)), (W.y = parseFloat(re.y)))
                    : F
                    ? (W.x = W.rotation = parseFloat(re.rotation))
                    : a
                    ? ((W.y = a.top()), (W.x = a.left()))
                    : ((W.y = parseFloat(t.style.top || ((o = Ni(t)) && o.top)) || 0),
                      (W.x = parseFloat(t.style.left || (o || {}).left) || 0)),
                  (T || k || E) &&
                    !n &&
                    (W.isDragging || W.isThrowing) &&
                    (E &&
                      ((vi.x = W.x),
                      (vi.y = W.y),
                      (r = E(vi)).x !== W.x && ((W.x = r.x), (w = !0)),
                      r.y !== W.y && ((W.y = r.y), (w = !0))),
                    T && (r = T(W.x)) !== W.x && ((W.x = r), F && (W.rotation = r), (w = !0)),
                    k && ((r = k(W.y)) !== W.y && (W.y = r), (w = !0))),
                  w && fe(!0),
                  e ||
                    ((W.deltaX = W.x - i),
                    (W.deltaY = W.y - s),
                    Hi(W, 'throwupdate', 'onThrowUpdate'));
              },
              le = function (e, t, n, r) {
                return (
                  null == t && (t = -li),
                  null == n && (n = li),
                  ei(e)
                    ? function (o) {
                        var i = W.isPressed ? 1 - W.edgeResistance : 1;
                        return (
                          e.call(W, (o > n ? n + (o - n) * i : o < t ? t + (o - t) * i : o) * r) * r
                        );
                      }
                    : si(e)
                    ? function (r) {
                        for (var o, i, a = e.length, s = 0, f = li; --a > -1; )
                          (i = (o = e[a]) - r) < 0 && (i = -i),
                            i < f && o >= t && o <= n && ((s = a), (f = i));
                        return e[s];
                      }
                    : isNaN(e)
                    ? function (e) {
                        return e;
                      }
                    : function () {
                        return e * r;
                      }
                );
              },
              ue = function () {
                var e, r, o, i;
                (u = !1),
                  a
                    ? (a.calibrate(),
                      (W.minX = b = -a.maxScrollLeft()),
                      (W.minY = g = -a.maxScrollTop()),
                      (W.maxX = d = W.maxY = m = 0),
                      (u = !0))
                    : n.bounds &&
                      ((e = ji(n.bounds, t.parentNode)),
                      F
                        ? ((W.minX = b = e.left),
                          (W.maxX = d = e.left + e.width),
                          (W.minY = g = W.maxY = m = 0))
                        : ni(n.bounds.maxX) && ni(n.bounds.maxY)
                        ? ((r = ji(t, t.parentNode)),
                          (W.minX = b = Math.round(ie(N, 'px') + e.left - r.left)),
                          (W.minY = g = Math.round(ie(Z, 'px') + e.top - r.top)),
                          (W.maxX = d = Math.round(b + (e.width - r.width))),
                          (W.maxY = m = Math.round(g + (e.height - r.height))))
                        : ((e = n.bounds),
                          (W.minX = b = e.minX),
                          (W.minY = g = e.minY),
                          (W.maxX = d = e.maxX),
                          (W.maxY = m = e.maxY)),
                      b > d && ((W.minX = d), (W.maxX = d = b), (b = W.minX)),
                      g > m && ((W.minY = m), (W.maxY = m = g), (g = W.minY)),
                      F && ((W.minRotation = b), (W.maxRotation = d)),
                      (u = !0)),
                  n.liveSnap &&
                    ((o = !0 === n.liveSnap ? n.snap || {} : n.liveSnap),
                    (i = si(o) || ei(o)),
                    F
                      ? ((T = le(i ? o : o.rotation, b, d, 1)), (k = null))
                      : o.points
                      ? (E = (function (e, t, n, r, o, i, a) {
                          return (
                            (i = i && i < li ? i * i : li),
                            ei(e)
                              ? function (s) {
                                  var f,
                                    c,
                                    l,
                                    u = W.isPressed ? 1 - W.edgeResistance : 1,
                                    h = s.x,
                                    p = s.y;
                                  return (
                                    (s.x = h =
                                      h > n ? n + (h - n) * u : h < t ? t + (h - t) * u : h),
                                    (s.y = p =
                                      p > o ? o + (p - o) * u : p < r ? r + (p - r) * u : p),
                                    (f = e.call(W, s)) !== s && ((s.x = f.x), (s.y = f.y)),
                                    1 !== a && ((s.x *= a), (s.y *= a)),
                                    i < li &&
                                      (c = s.x - h) * c + (l = s.y - p) * l > i &&
                                      ((s.x = h), (s.y = p)),
                                    s
                                  );
                                }
                              : si(e)
                              ? function (t) {
                                  for (var n, r, o, a, s = e.length, f = 0, c = li; --s > -1; )
                                    (a = (n = (o = e[s]).x - t.x) * n + (r = o.y - t.y) * r) < c &&
                                      ((f = s), (c = a));
                                  return c <= i ? e[f] : t;
                                }
                              : function (e) {
                                  return e;
                                }
                          );
                        })(i ? o : o.points, b, d, g, m, o.radius, a ? -1 : 1))
                      : (q && (T = le(i ? o : o.x || o.left || o.scrollLeft, b, d, a ? -1 : 1)),
                        H && (k = le(i ? o : o.y || o.top || o.scrollTop, g, m, a ? -1 : 1))));
              },
              he = function () {
                (W.isThrowing = !1), Hi(W, 'throwcomplete', 'onThrowComplete');
              },
              pe = function () {
                W.isThrowing = !1;
              },
              de = function (e, r) {
                var o, i, s, f;
                e && jo
                  ? (!0 === e &&
                      ((o = n.snap || n.liveSnap || {}),
                      (i = si(o) || ei(o)),
                      (e = {
                        resistance: (n.throwResistance || n.resistance || 1e3) / (F ? 10 : 1),
                      }),
                      F
                        ? (e.rotation = Vi(W, i ? o : o.rotation, d, b, 1, r))
                        : (q &&
                            (e[N] = Vi(
                              W,
                              i ? o : o.points || o.x || o.left,
                              d,
                              b,
                              a ? -1 : 1,
                              r || 'x' === W.lockedAxis
                            )),
                          H &&
                            (e[Z] = Vi(
                              W,
                              i ? o : o.points || o.y || o.top,
                              m,
                              g,
                              a ? -1 : 1,
                              r || 'y' === W.lockedAxis
                            )),
                          (o.points || (si(o) && ti(o[0]))) &&
                            ((e.linkedProps = N + ',' + Z), (e.radius = o.radius)))),
                    (W.isThrowing = !0),
                    (f = isNaN(n.overshootTolerance)
                      ? 1 === n.edgeResistance
                        ? 0
                        : 1 - W.edgeResistance + 0.2
                      : n.overshootTolerance),
                    e.duration ||
                      (e.duration = {
                        max: Math.max(n.minDuration || 0, 'maxDuration' in n ? n.maxDuration : 2),
                        min: isNaN(n.minDuration)
                          ? 0 === f || (ti(e) && e.resistance > 1e3)
                            ? 0
                            : 0.5
                          : n.minDuration,
                        overshoot: f,
                      }),
                    (W.tween = s =
                      Ao.to(a || t, {
                        inertia: e,
                        data: '_draggable',
                        onComplete: he,
                        onInterrupt: pe,
                        onUpdate: n.fastMode ? Hi : ce,
                        onUpdateParams: n.fastMode
                          ? [W, 'onthrowupdate', 'onThrowUpdate']
                          : o && o.radius
                          ? [!1, !0]
                          : [],
                      })),
                    n.fastMode ||
                      (a && (a._skip = !0),
                      s.render(1e9, !0, !0),
                      ce(!0, !0),
                      (W.endX = W.x),
                      (W.endY = W.y),
                      F && (W.endRotation = W.x),
                      s.play(0),
                      ce(!0, !0),
                      a && (a._skip = !1)))
                  : u && W.applyBounds();
              },
              be = function (e) {
                var n,
                  r = S;
                (S = So(t.parentNode, !0)),
                  e &&
                    W.isPressed &&
                    !S.equals(r || new Mo()) &&
                    ((n = r.inverse().apply({ x: s, y: f })), S.apply(n, n), (s = n.x), (f = n.y)),
                  S.equals(ui) && (S = null);
              },
              me = function () {
                var e,
                  n,
                  r,
                  o = 1 - W.edgeResistance,
                  i = oe ? Li(ae) : 0,
                  h = oe ? Di(ae) : 0;
                B &&
                  ((re.x = ie(N, 'px') + 'px'), (re.y = ie(Z, 'px') + 'px'), re.renderTransform()),
                  be(!1),
                  (Wi.x = W.pointerX - i),
                  (Wi.y = W.pointerY - h),
                  S && S.apply(Wi, Wi),
                  (s = Wi.x),
                  (f = Wi.y),
                  w && (we(W.pointerX, W.pointerY), fe(!0)),
                  (I = So(t)),
                  a
                    ? (ue(), (l = a.top()), (c = a.left()))
                    : (ge() ? (ce(!0, !0), ue()) : W.applyBounds(),
                      F
                        ? ((e = t.ownerSVGElement
                            ? [re.xOrigin - t.getBBox().x, re.yOrigin - t.getBBox().y]
                            : (Ni(t)[ii] || '0 0').split(' ')),
                          (_ = W.rotationOrigin =
                            So(t).apply({ x: parseFloat(e[0]) || 0, y: parseFloat(e[1]) || 0 })),
                          ce(!0, !0),
                          (n = W.pointerX - _.x - i),
                          (r = _.y - W.pointerY + h),
                          (c = W.x),
                          (l = W.y = Math.atan2(r, n) * ci))
                        : ((l = ie(Z, 'px')), (c = ie(N, 'px')))),
                  u &&
                    o &&
                    (c > d ? (c = d + (c - d) / o) : c < b && (c = b - (b - c) / o),
                    F || (l > m ? (l = m + (l - m) / o) : l < g && (l = g - (g - l) / o))),
                  (W.startX = c = ai(c)),
                  (W.startY = l = ai(l));
              },
              ge = function () {
                return W.tween && W.tween.isActive();
              },
              ve = function () {
                !Io.parentNode || ge() || W.isDragging || Io.parentNode.removeChild(Io);
              },
              ye = function (e, o) {
                var c;
                if (
                  !i ||
                  W.isPressed ||
                  !e ||
                  (!(('mousedown' !== e.type && 'pointerdown' !== e.type) || o) &&
                    hi() - ne < 30 &&
                    Zo[W.pointerEvent.type])
                )
                  R && e && i && Oi(e);
                else {
                  if (
                    ((O = ge()),
                    (X = !1),
                    (W.pointerEvent = e),
                    Zo[e.type]
                      ? ((M = ~e.type.indexOf('touch') ? e.currentTarget || e.target : ae),
                        Mi(M, 'touchend', xe),
                        Mi(M, 'touchmove', _e),
                        Mi(M, 'touchcancel', xe),
                        Mi(ae, 'touchstart', Pi))
                      : ((M = null), Mi(ae, 'mousemove', _e)),
                    (z = null),
                    (Uo && M) ||
                      (Mi(ae, 'mouseup', xe), e && e.target && Mi(e.target, 'mouseup', xe)),
                    (C = te.call(W, e.target) && !1 === n.dragClickables && !o))
                  )
                    return (
                      Mi(e.target, 'change', xe),
                      Hi(W, 'pressInit', 'onPressInit'),
                      Hi(W, 'press', 'onPress'),
                      Gi(U, !0),
                      void (R = !1)
                    );
                  if (
                    ((A =
                      !(
                        !M ||
                        q === H ||
                        !1 === W.vars.allowNativeTouchScrolling ||
                        (W.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2))
                      ) && (q ? 'y' : 'x')),
                    (R = !A && !W.allowEventDefault) && (Oi(e), Mi(zo, 'touchforcechange', Oi)),
                    e.changedTouches
                      ? ((e = v = e.changedTouches[0]), (y = e.identifier))
                      : e.pointerId
                      ? (y = e.pointerId)
                      : (v = y = null),
                    Ko++,
                    ki(fe),
                    (f = W.pointerY = e.pageY),
                    (s = W.pointerX = e.pageX),
                    Hi(W, 'pressInit', 'onPressInit'),
                    (A || W.autoScroll) && Bi(t.parentNode),
                    !t.parentNode ||
                      !W.autoScroll ||
                      a ||
                      F ||
                      !t.parentNode._gsMaxScrollX ||
                      Io.parentNode ||
                      t.getBBox ||
                      ((Io.style.width = t.parentNode.scrollWidth + 'px'),
                      t.parentNode.appendChild(Io)),
                    me(),
                    W.tween && W.tween.kill(),
                    (W.isThrowing = !1),
                    Ao.killTweensOf(a || t, V, !0),
                    a && Ao.killTweensOf(t, { scrollTo: 1 }, !0),
                    (W.tween = W.lockedAxis = null),
                    (n.zIndexBoost || (!F && !a && !1 !== n.zIndexBoost)) &&
                      (t.style.zIndex = r.zIndex++),
                    (W.isPressed = !0),
                    (h = !(!n.onDrag && !W._listeners.drag)),
                    (p = !(!n.onMove && !W._listeners.move)),
                    !1 !== n.cursor || n.activeCursor)
                  )
                    for (c = U.length; --c > -1; )
                      Ao.set(U[c], {
                        cursor: n.activeCursor || n.cursor || ('grab' === Wo ? 'grabbing' : Wo),
                      });
                  Hi(W, 'press', 'onPress');
                }
              },
              _e = function (e) {
                var n,
                  r,
                  o,
                  a,
                  c,
                  l,
                  u = e;
                if (i && !qo && W.isPressed && e) {
                  if (((W.pointerEvent = e), (n = e.changedTouches))) {
                    if ((e = n[0]) !== v && e.identifier !== y) {
                      for (
                        a = n.length;
                        --a > -1 && (e = n[a]).identifier !== y && e.target !== t;

                      );
                      if (a < 0) return;
                    }
                  } else if (e.pointerId && y && e.pointerId !== y) return;
                  M &&
                  A &&
                  !z &&
                  ((Wi.x = e.pageX - (oe ? Li(ae) : 0)),
                  (Wi.y = e.pageY - (oe ? Di(ae) : 0)),
                  S && S.apply(Wi, Wi),
                  (r = Wi.x),
                  (o = Wi.y),
                  (((c = Math.abs(r - s)) !== (l = Math.abs(o - f)) && (c > j || l > j)) ||
                    (Ho && A === z)) &&
                    ((z = c > l && q ? 'x' : 'y'),
                    A && z !== A && Mi(zo, 'touchforcechange', Oi),
                    !1 !== W.vars.lockAxisOnTouchScroll &&
                      q &&
                      H &&
                      ((W.lockedAxis = 'x' === z ? 'y' : 'x'),
                      ei(W.vars.onLockAxis) && W.vars.onLockAxis.call(W, u)),
                    Ho && A === z))
                    ? xe(u)
                    : (W.allowEventDefault || (A && (!z || A === z)) || !1 === u.cancelable
                        ? R && (R = !1)
                        : (Oi(u), (R = !0)),
                      W.autoScroll && (G = !0),
                      we(e.pageX, e.pageY, p));
                } else R && e && i && Oi(e);
              },
              we = function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  h,
                  p,
                  v = 1 - W.dragResistance,
                  y = 1 - W.edgeResistance,
                  x = W.pointerX,
                  C = W.pointerY,
                  M = l,
                  O = W.x,
                  A = W.y,
                  z = W.endX,
                  P = W.endY,
                  D = W.endRotation,
                  L = w;
                (W.pointerX = e),
                  (W.pointerY = t),
                  oe && ((e -= Li(ae)), (t -= Di(ae))),
                  F
                    ? ((a = Math.atan2(_.y - t, e - _.x) * ci),
                      (h = W.y - a) > 180
                        ? ((l -= 360), (W.y = a))
                        : h < -180 && ((l += 360), (W.y = a)),
                      W.x !== c || Math.abs(l - a) > j
                        ? ((W.y = a), (i = c + (l - a) * v))
                        : (i = c))
                    : (S && ((p = e * S.a + t * S.c + S.e), (t = e * S.b + t * S.d + S.f), (e = p)),
                      (o = t - f) < j && o > -j && (o = 0),
                      (r = e - s) < j && r > -j && (r = 0),
                      (W.lockAxis || W.lockedAxis) &&
                        (r || o) &&
                        ((p = W.lockedAxis) ||
                          ((W.lockedAxis = p =
                            q && Math.abs(r) > Math.abs(o) ? 'y' : H ? 'x' : null),
                          p && ei(W.vars.onLockAxis) && W.vars.onLockAxis.call(W, W.pointerEvent)),
                        'y' === p ? (o = 0) : 'x' === p && (r = 0)),
                      (i = ai(c + r * v)),
                      (a = ai(l + o * v))),
                  (T || k || E) &&
                    (W.x !== i || (W.y !== a && !F)) &&
                    (E && ((vi.x = i), (vi.y = a), (p = E(vi)), (i = ai(p.x)), (a = ai(p.y))),
                    T && (i = ai(T(i))),
                    k && (a = ai(k(a)))),
                  u &&
                    (i > d
                      ? (i = d + Math.round((i - d) * y))
                      : i < b && (i = b + Math.round((i - b) * y)),
                    F ||
                      (a > m
                        ? (a = Math.round(m + (a - m) * y))
                        : a < g && (a = Math.round(g + (a - g) * y)))),
                  (W.x !== i || (W.y !== a && !F)) &&
                    (F
                      ? ((W.endRotation = W.x = W.endX = i), (w = !0))
                      : (H && ((W.y = W.endY = a), (w = !0)), q && ((W.x = W.endX = i), (w = !0))),
                    n && !1 === Hi(W, 'move', 'onMove')
                      ? ((W.pointerX = x),
                        (W.pointerY = C),
                        (l = M),
                        (W.x = O),
                        (W.y = A),
                        (W.endX = z),
                        (W.endY = P),
                        (W.endRotation = D),
                        (w = L))
                      : !W.isDragging &&
                        W.isPressed &&
                        ((W.isDragging = X = !0), Hi(W, 'dragstart', 'onDragStart')));
              },
              xe = function e(r, o) {
                if (
                  i &&
                  W.isPressed &&
                  (!r ||
                    null == y ||
                    o ||
                    !(
                      (r.pointerId && r.pointerId !== y && r.target !== t) ||
                      (r.changedTouches && !Ai(r.changedTouches, y))
                    ))
                ) {
                  W.isPressed = !1;
                  var a,
                    s,
                    f,
                    c,
                    l,
                    u = r,
                    h = W.isDragging,
                    p = W.vars.allowContextMenu && r && (r.ctrlKey || r.which > 2),
                    d = Ao.delayedCall(0.001, ve);
                  if (
                    (M
                      ? (Si(M, 'touchend', e),
                        Si(M, 'touchmove', _e),
                        Si(M, 'touchcancel', e),
                        Si(ae, 'touchstart', Pi))
                      : Si(ae, 'mousemove', _e),
                    Si(zo, 'touchforcechange', Oi),
                    (Uo && M) ||
                      (Si(ae, 'mouseup', e), r && r.target && Si(r.target, 'mouseup', e)),
                    (w = !1),
                    h && (($ = gi = hi()), (W.isDragging = !1)),
                    Ci(fe),
                    C && !p)
                  )
                    return (
                      r && (Si(r.target, 'change', e), (W.pointerEvent = u)),
                      Gi(U, !1),
                      Hi(W, 'release', 'onRelease'),
                      Hi(W, 'click', 'onClick'),
                      void (C = !1)
                    );
                  for (s = U.length; --s > -1; )
                    Fi(U[s], 'cursor', n.cursor || (!1 !== n.cursor ? Wo : null));
                  if ((Ko--, r)) {
                    if ((a = r.changedTouches) && (r = a[0]) !== v && r.identifier !== y) {
                      for (
                        s = a.length;
                        --s > -1 && (r = a[s]).identifier !== y && r.target !== t;

                      );
                      if (s < 0 && !o) return;
                    }
                    (W.pointerEvent = u), (W.pointerX = r.pageX), (W.pointerY = r.pageY);
                  }
                  return (
                    p && u
                      ? (Oi(u), (R = !0), Hi(W, 'release', 'onRelease'))
                      : u && !h
                      ? ((R = !1),
                        O && (n.snap || n.bounds) && de(n.inertia || n.throwProps),
                        Hi(W, 'release', 'onRelease'),
                        (Ho && 'touchmove' === u.type) ||
                          -1 !== u.type.indexOf('cancel') ||
                          (Hi(W, 'click', 'onClick'),
                          hi() - ne < 300 && Hi(W, 'doubleclick', 'onDoubleClick'),
                          (c = u.target || t),
                          (ne = hi()),
                          (l = function () {
                            ne === D ||
                              !W.enabled() ||
                              W.isPressed ||
                              u.defaultPrevented ||
                              (c.click
                                ? c.click()
                                : ae.createEvent &&
                                  ((f = ae.createEvent('MouseEvents')).initMouseEvent(
                                    'click',
                                    !0,
                                    !0,
                                    zo,
                                    1,
                                    W.pointerEvent.screenX,
                                    W.pointerEvent.screenY,
                                    W.pointerX,
                                    W.pointerY,
                                    !1,
                                    !1,
                                    !1,
                                    !1,
                                    0,
                                    null
                                  ),
                                  c.dispatchEvent(f)));
                          }),
                          Ho || u.defaultPrevented || Ao.delayedCall(0.05, l)))
                      : (de(n.inertia || n.throwProps),
                        W.allowEventDefault ||
                        !u ||
                        (!1 === n.dragClickables && te.call(W, u.target)) ||
                        !h ||
                        (A && (!z || A !== z)) ||
                        !1 === u.cancelable
                          ? (R = !1)
                          : ((R = !0), Oi(u)),
                        Hi(W, 'release', 'onRelease')),
                    ge() && d.duration(W.tween.duration()),
                    h && Hi(W, 'dragend', 'onDragEnd'),
                    !0
                  );
                }
                R && r && i && Oi(r);
              },
              Te = function (e) {
                if (e && W.isDragging && !a) {
                  var n = e.target || t.parentNode,
                    r = n.scrollLeft - n._gsScrollX,
                    o = n.scrollTop - n._gsScrollY;
                  (r || o) &&
                    (S
                      ? ((s -= r * S.a + o * S.c), (f -= o * S.d + r * S.b))
                      : ((s -= r), (f -= o)),
                    (n._gsScrollX += r),
                    (n._gsScrollY += o),
                    we(W.pointerX, W.pointerY));
                }
              },
              ke = function (e) {
                var t = hi(),
                  n = t - ne < 100,
                  r = t - $ < 50,
                  o = n && D === ne,
                  i = W.pointerEvent && W.pointerEvent.defaultPrevented,
                  a = n && L === ne,
                  s = e.isTrusted || (null == e.isTrusted && n && o);
                if (
                  ((o || (r && !1 !== W.vars.suppressClickOnDrag)) &&
                    e.stopImmediatePropagation &&
                    e.stopImmediatePropagation(),
                  n && (!W.pointerEvent || !W.pointerEvent.defaultPrevented) && (!o || (s && !a)))
                )
                  return s && o && (L = ne), void (D = ne);
                (W.isPressed || r || n) && ((s && e.detail && n && !i) || Oi(e)),
                  n || r || X || (e && e.target && (W.pointerEvent = e), Hi(W, 'click', 'onClick'));
              },
              Ee = function (e) {
                return S
                  ? { x: e.x * S.a + e.y * S.c + S.e, y: e.x * S.b + e.y * S.d + S.f }
                  : { x: e.x, y: e.y };
              };
            return (
              (x = r.get(t)) && x.kill(),
              (o.startDrag = function (e, n) {
                var r, o, i, a;
                ye(e || W.pointerEvent, !0),
                  n &&
                    !W.hitTest(e || W.pointerEvent) &&
                    ((r = qi(e || W.pointerEvent)),
                    (o = qi(t)),
                    (i = Ee({ x: r.left + r.width / 2, y: r.top + r.height / 2 })),
                    (a = Ee({ x: o.left + o.width / 2, y: o.top + o.height / 2 })),
                    (s -= i.x - a.x),
                    (f -= i.y - a.y)),
                  W.isDragging || ((W.isDragging = X = !0), Hi(W, 'dragstart', 'onDragStart'));
              }),
              (o.drag = _e),
              (o.endDrag = function (e) {
                return xe(e || W.pointerEvent, !0);
              }),
              (o.timeSinceDrag = function () {
                return W.isDragging ? 0 : (hi() - $) / 1e3;
              }),
              (o.timeSinceClick = function () {
                return (hi() - ne) / 1e3;
              }),
              (o.hitTest = function (e, t) {
                return r.hitTest(W.target, e, t);
              }),
              (o.getDirection = function (e, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  f,
                  u = 'velocity' === e && jo ? e : ti(e) && !F ? 'element' : 'start';
                return (
                  'element' === u && ((s = qi(W.target)), (f = qi(e))),
                  (r =
                    'start' === u
                      ? W.x - c
                      : 'velocity' === u
                      ? jo.getVelocity(t, N)
                      : s.left + s.width / 2 - (f.left + f.width / 2)),
                  F
                    ? r < 0
                      ? 'counter-clockwise'
                      : 'clockwise'
                    : ((n = n || 2),
                      (o =
                        'start' === u
                          ? W.y - l
                          : 'velocity' === u
                          ? jo.getVelocity(t, Z)
                          : s.top + s.height / 2 - (f.top + f.height / 2)),
                      (a = (i = Math.abs(r / o)) < 1 / n ? '' : r < 0 ? 'left' : 'right'),
                      i < n && ('' !== a && (a += '-'), (a += o < 0 ? 'up' : 'down')),
                      a)
                );
              }),
              (o.applyBounds = function (e, r) {
                var o, i, a, s, f, c;
                if (e && n.bounds !== e) return (n.bounds = e), W.update(!0, r);
                if ((ce(!0), ue(), u && !ge())) {
                  if (
                    ((o = W.x),
                    (i = W.y),
                    o > d ? (o = d) : o < b && (o = b),
                    i > m ? (i = m) : i < g && (i = g),
                    (W.x !== o || W.y !== i) &&
                      ((a = !0),
                      (W.x = W.endX = o),
                      F ? (W.endRotation = o) : (W.y = W.endY = i),
                      (w = !0),
                      fe(!0),
                      W.autoScroll && !W.isDragging))
                  )
                    for (
                      Bi(t.parentNode),
                        s = t,
                        yi.scrollTop =
                          null != zo.pageYOffset
                            ? zo.pageYOffset
                            : null != ae.documentElement.scrollTop
                            ? ae.documentElement.scrollTop
                            : ae.body.scrollTop,
                        yi.scrollLeft =
                          null != zo.pageXOffset
                            ? zo.pageXOffset
                            : null != ae.documentElement.scrollLeft
                            ? ae.documentElement.scrollLeft
                            : ae.body.scrollLeft;
                      s && !c;

                    )
                      (f = (c = Xi(s.parentNode)) ? yi : s.parentNode),
                        H && f.scrollTop > f._gsMaxScrollY && (f.scrollTop = f._gsMaxScrollY),
                        q && f.scrollLeft > f._gsMaxScrollX && (f.scrollLeft = f._gsMaxScrollX),
                        (s = f);
                  W.isThrowing &&
                    (a || W.endX > d || W.endX < b || W.endY > m || W.endY < g) &&
                    de(n.inertia || n.throwProps, a);
                }
                return W;
              }),
              (o.update = function (e, n, r) {
                if (n && W.isPressed) {
                  var o = So(t),
                    i = I.apply({ x: W.x - c, y: W.y - l }),
                    a = So(t.parentNode, !0);
                  a.apply({ x: o.e - i.x, y: o.f - i.y }, i),
                    (W.x -= i.x - a.e),
                    (W.y -= i.y - a.f),
                    fe(!0),
                    me();
                }
                var s = W.x,
                  f = W.y;
                return (
                  be(!n),
                  e ? W.applyBounds() : (w && r && fe(!0), ce(!0)),
                  n && (we(W.pointerX, W.pointerY), w && fe(!0)),
                  W.isPressed &&
                    !n &&
                    ((q && Math.abs(s - W.x) > 0.01) || (H && Math.abs(f - W.y) > 0.01 && !F)) &&
                    me(),
                  W.autoScroll &&
                    (Bi(t.parentNode, W.isDragging),
                    (G = W.isDragging),
                    fe(!0),
                    Ii(t, Te),
                    Ri(t, Te)),
                  W
                );
              }),
              (o.enable = function (e) {
                var r,
                  o,
                  s,
                  f = { lazy: !0 };
                if (
                  (!1 !== n.cursor && (f.cursor = n.cursor || Wo),
                  Ao.utils.checkPrefix('touchCallout') && (f.touchCallout = 'none'),
                  'soft' !== e)
                ) {
                  for (
                    xi(
                      U,
                      q === H
                        ? 'none'
                        : (n.allowNativeTouchScrolling &&
                            (t.scrollHeight === t.clientHeight) ==
                              (t.scrollWidth === t.clientHeight)) ||
                          n.allowEventDefault
                        ? 'manipulation'
                        : q
                        ? 'pan-y'
                        : 'pan-x'
                    ),
                      o = U.length;
                    --o > -1;

                  )
                    (s = U[o]),
                      Uo || Mi(s, 'mousedown', ye),
                      Mi(s, 'touchstart', ye),
                      Mi(s, 'click', ke, !0),
                      Ao.set(s, f),
                      s.getBBox &&
                        s.ownerSVGElement &&
                        q !== H &&
                        Ao.set(s.ownerSVGElement, {
                          touchAction:
                            n.allowNativeTouchScrolling || n.allowEventDefault
                              ? 'manipulation'
                              : q
                              ? 'pan-y'
                              : 'pan-x',
                        }),
                      n.allowContextMenu || Mi(s, 'contextmenu', se);
                  Gi(U, !1);
                }
                return (
                  Ri(t, Te),
                  (i = !0),
                  jo && 'soft' !== e && jo.track(a || t, B ? 'x,y' : F ? 'rotation' : 'top,left'),
                  (t._gsDragID = r = 'd' + bi++),
                  (di[r] = W),
                  a && (a.enable(), (a.element._gsDragID = r)),
                  (n.bounds || F) && me(),
                  n.bounds && W.applyBounds(),
                  W
                );
              }),
              (o.disable = function (e) {
                for (var n, r = W.isDragging, o = U.length; --o > -1; ) Fi(U[o], 'cursor', null);
                if ('soft' !== e) {
                  for (xi(U, null), o = U.length; --o > -1; )
                    (n = U[o]),
                      Fi(n, 'touchCallout', null),
                      Si(n, 'mousedown', ye),
                      Si(n, 'touchstart', ye),
                      Si(n, 'click', ke, !0),
                      Si(n, 'contextmenu', se);
                  Gi(U, !0),
                    M && (Si(M, 'touchcancel', xe), Si(M, 'touchend', xe), Si(M, 'touchmove', _e)),
                    Si(ae, 'mouseup', xe),
                    Si(ae, 'mousemove', _e);
                }
                return (
                  Ii(t, Te),
                  (i = !1),
                  jo && 'soft' !== e && jo.untrack(a || t, B ? 'x,y' : F ? 'rotation' : 'top,left'),
                  a && a.disable(),
                  Ci(fe),
                  (W.isDragging = W.isPressed = C = !1),
                  r && Hi(W, 'dragend', 'onDragEnd'),
                  W
                );
              }),
              (o.enabled = function (e, t) {
                return arguments.length ? (e ? W.enable(t) : W.disable(t)) : i;
              }),
              (o.kill = o.revert =
                function () {
                  return (
                    (W.isThrowing = !1),
                    W.tween && W.tween.kill(),
                    W.disable(),
                    Ao.set(U, { clearProps: 'userSelect' }),
                    delete di[t._gsDragID],
                    W
                  );
                }),
              ~Y.indexOf('scroll') &&
                ((a = o.scrollProxy =
                  new Qi(
                    t,
                    wi(
                      {
                        onKill: function () {
                          W.isPressed && xe(null);
                        },
                      },
                      n
                    )
                  )),
                (t.style.overflowY = H && !No ? 'auto' : 'hidden'),
                (t.style.overflowX = q && !No ? 'auto' : 'hidden'),
                (t = a.content)),
              F ? (V.rotation = 1) : (q && (V[N] = 1), H && (V[Z] = 1)),
              (re.force3D = !('force3D' in n) || n.force3D),
              Vo(Oo(o)),
              o.enable(),
              o
            );
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.register = function (e) {
              (Ao = e), Ji();
            }),
            (r.create = function (e, t) {
              return (
                Xo || Ji(!0),
                Bo(e).map(function (e) {
                  return new r(e, t);
                })
              );
            }),
            (r.get = function (e) {
              return di[(Bo(e)[0] || {})._gsDragID];
            }),
            (r.timeSinceDrag = function () {
              return (hi() - gi) / 1e3;
            }),
            (r.hitTest = function (e, t, n) {
              if (e === t) return !1;
              var r,
                o,
                i,
                a = qi(e),
                s = qi(t),
                f = a.top,
                c = a.left,
                l = a.right,
                u = a.bottom,
                h = a.width,
                p = a.height,
                d = s.left > l || s.right < c || s.top > u || s.bottom < f;
              return d || !n
                ? !d
                : ((i = -1 !== (n + '').indexOf('%')),
                  (n = parseFloat(n) || 0),
                  ((r = { left: Math.max(c, s.left), top: Math.max(f, s.top) }).width =
                    Math.min(l, s.right) - r.left),
                  (r.height = Math.min(u, s.bottom) - r.top),
                  !(r.width < 0 || r.height < 0) &&
                    (i
                      ? ((n *= 0.01),
                        (o = r.width * r.height) >= h * p * n || o >= s.width * s.height * n)
                      : r.width > n && r.height > n));
            }),
            r
          );
        })(
          (function () {
            function e(e) {
              (this._listeners = {}), (this.target = e || this);
            }
            var t = e.prototype;
            return (
              (t.addEventListener = function (e, t) {
                var n = this._listeners[e] || (this._listeners[e] = []);
                ~n.indexOf(t) || n.push(t);
              }),
              (t.removeEventListener = function (e, t) {
                var n = this._listeners[e],
                  r = n && n.indexOf(t);
                r >= 0 && n.splice(r, 1);
              }),
              (t.dispatchEvent = function (e) {
                var t,
                  n = this;
                return (
                  (this._listeners[e] || []).forEach(function (r) {
                    return !1 === r.call(n, { type: e, target: n.target }) && (t = !1);
                  }),
                  t
                );
              }),
              e
            );
          })()
        );
      !(function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
      })(ea.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1,
      }),
        (ea.zIndex = 1e3),
        (ea.version = '3.11.4'),
        Jo() && Ao.registerPlugin(ea);
      var ta = n(672),
        na = {};
      (na.styleTagTransform = h()),
        (na.setAttributes = f()),
        (na.insert = a().bind(null, 'head')),
        (na.domAPI = o()),
        (na.insertStyleElement = l()),
        t()(ta.Z, na),
        ta.Z && ta.Z.locals && ta.Z.locals,
        ho.registerPlugin(ea);
      var ra = n(981),
        oa = {};
      (oa.styleTagTransform = h()),
        (oa.setAttributes = f()),
        (oa.insert = a().bind(null, 'head')),
        (oa.domAPI = o()),
        (oa.insertStyleElement = l()),
        t()(ra.Z, oa),
        ra.Z && ra.Z.locals && ra.Z.locals;
      var ia = n(378),
        aa = {};
      (aa.styleTagTransform = h()),
        (aa.setAttributes = f()),
        (aa.insert = a().bind(null, 'head')),
        (aa.domAPI = o()),
        (aa.insertStyleElement = l()),
        t()(ia.Z, aa),
        ia.Z && ia.Z.locals && ia.Z.locals;
      var sa = n(36),
        fa = {};
      (fa.styleTagTransform = h()),
        (fa.setAttributes = f()),
        (fa.insert = a().bind(null, 'head')),
        (fa.domAPI = o()),
        (fa.insertStyleElement = l()),
        t()(sa.Z, fa),
        sa.Z && sa.Z.locals && sa.Z.locals;
      var ca = n(585),
        la = {};
      (la.styleTagTransform = h()),
        (la.setAttributes = f()),
        (la.insert = a().bind(null, 'head')),
        (la.domAPI = o()),
        (la.insertStyleElement = l()),
        t()(ca.Z, la),
        ca.Z && ca.Z.locals && ca.Z.locals,
        n(257);
      var ua = n(367),
        ha = {};
      (ha.styleTagTransform = h()),
        (ha.setAttributes = f()),
        (ha.insert = a().bind(null, 'head')),
        (ha.domAPI = o()),
        (ha.insertStyleElement = l()),
        t()(ua.Z, ha),
        ua.Z && ua.Z.locals && ua.Z.locals;
      var pa = n(606),
        da = {};
      (da.styleTagTransform = h()),
        (da.setAttributes = f()),
        (da.insert = a().bind(null, 'head')),
        (da.domAPI = o()),
        (da.insertStyleElement = l()),
        t()(pa.Z, da),
        pa.Z && pa.Z.locals && pa.Z.locals;
      var ba = {
        d: (e, t) => {
          for (var n in t)
            ba.o(t, n) && !ba.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      };
      function ma(e = { width: 3, height: 2 }, t = { width: 640, height: 480 }) {
        let n;
        switch (ga(e)) {
          case 'portrait':
          case 'landscape':
          case 'square':
            n = 'xMidYMid slice';
        }
        const r = 'http://www.w3.org/2000/svg',
          o = document.createElementNS(r, 'svg');
        o.setAttribute('width', '100%'),
          o.setAttribute('height', '100%'),
          o.setAttribute('viewBox', `0 0 ${t.width} ${t.height}`),
          o.setAttribute('preserveAspectRatio', n);
        const i = document.createElementNS(r, 'defs'),
          a = document.createElementNS(r, 'style');
        a.textContent =
          '\n      .cls-1 {\n          fill: #0c0c0c;\n          fill-rule: evenodd;\n          opacity: 1;\n      }';
        const s = document.createElementNS(r, 'path');
        s.classList.add('cls-1');
        const f = (function ({ viewBox: e, cropDimensions: t }) {
          let n;
          const r = ga(t),
            o = t.width / t.height,
            i = e.width / e.height;
          switch (r) {
            case 'portrait':
              n = o < i ? 'width' : 'height';
            case 'square':
            case 'landscape':
              n = o > i ? 'width' : 'height';
          }
          const [a, s] = (function ({
              aspect: e = { width: o, height: r },
              rect: t = { width: o, height: r },
              anchor: n,
            }) {
              let r, o, i;
              const a = e.height / e.width;
              if ('height' == n) (i = t.height / e.height), (r = t.height), (o = r / a);
              else {
                if ('width' != n)
                  throw new TypeError(
                    'unexpected anchor value. Must be either width or height but found: ' + n
                  );
                (i = t.width / e.width), (o = t.width), (r = o * a);
              }
              return [o, r];
            })({ aspect: t, rect: e, anchor: n }),
            f = ((e.width - a) / 2).toFixed(2),
            c = parseInt(f) + parseInt(a),
            l = ((e.height - s) / 2).toFixed(2),
            u = parseInt(l) + parseInt(s);
          return `M0,0H${e.width}V${e.height}H0V0ZM${f},${l}H${c}V${u}H${f}V1Z`;
        })({ viewBox: t, cropDimensions: e });
        return s.setAttribute('d', f), o.append(i), i.append(a), o.append(s), o;
      }
      function ga({ width: e, height: t }) {
        return e > t ? 'landscape' : e < t ? 'portrait' : 'square';
      }
      ba.d({}, { k: () => ma });
      var va = n(412),
        ya = {};
      (ya.styleTagTransform = h()),
        (ya.setAttributes = f()),
        (ya.insert = a().bind(null, 'head')),
        (ya.domAPI = o()),
        (ya.insertStyleElement = l()),
        t()(va.Z, ya),
        va.Z && va.Z.locals && va.Z.locals;
      var _a = n(423),
        wa = {};
      (wa.styleTagTransform = h()),
        (wa.setAttributes = f()),
        (wa.insert = a().bind(null, 'head')),
        (wa.domAPI = o()),
        (wa.insertStyleElement = l()),
        t()(_a.Z, wa),
        _a.Z && _a.Z.locals && _a.Z.locals;
    })();
})();
