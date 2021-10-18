/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash))}catch(e){t=r(a.hash)}if("#"===t){if(!A.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(n,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));;
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());;
/* jquery.nicescroll
-- version 3.7.6
-- copyright 2017-07-19 InuYaksa*2017
-- licensed under the MIT
--
-- https://nicescroll.areaaperta.com/
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/

/* jshint expr: true */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS.
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals.
    factory(jQuery);
  }
}(function (jQuery) {

  "use strict";

  // globals
  var domfocus = false,
    mousefocus = false,
    tabindexcounter = 0,
    ascrailcounter = 2000,
    globalmaxzindex = 0;

  var $ = jQuery,       // sandbox
    _doc = document,
    _win = window,
    $window = $(_win);

  var delegatevents = [];

  // http://stackoverflow.com/questions/2161159/get-script-path
  function getScriptPath() {
    var scripts = _doc.currentScript || (function () { var s = _doc.getElementsByTagName('script'); return (s.length) ? s[s.length - 1] : false; })();
    var path = scripts ? scripts.src.split('?')[0] : '';
    return (path.split('/').length > 0) ? path.split('/').slice(0, -1).join('/') + '/' : '';
  }

  // based on code by Paul Irish https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/  
  var setAnimationFrame = _win.requestAnimationFrame || _win.webkitRequestAnimationFrame || _win.mozRequestAnimationFrame || false;
  var clearAnimationFrame = _win.cancelAnimationFrame || _win.webkitCancelAnimationFrame || _win.mozCancelAnimationFrame || false;

  if (!setAnimationFrame) {
    var anilasttime = 0;
    setAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - anilasttime));
      var id = _win.setTimeout(function () { callback(currTime + timeToCall); },
        timeToCall);
      anilasttime = currTime + timeToCall;
      return id;
    };
    clearAnimationFrame = function (id) {
      _win.clearTimeout(id);
    };
  } else {
    if (!_win.cancelAnimationFrame) clearAnimationFrame = function (id) { };
  }

  var ClsMutationObserver = _win.MutationObserver || _win.WebKitMutationObserver || false;

  var now = Date.now || function () { return new Date().getTime(); };

  var _globaloptions = {
    zindex: "auto",
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorcolor: "#424242",
    cursorwidth: "6px",
    cursorborder: "1px solid #fff",
    cursorborderradius: "5px",
    scrollspeed: 40,
    mousescrollstep: 9 * 3,
    touchbehavior: false,   // deprecated
    emulatetouch: false,    // replacing touchbehavior
    hwacceleration: true,
    usetransition: true,
    boxzoom: false,
    dblclickzoom: true,
    gesturezoom: true,
    grabcursorenabled: true,
    autohidemode: true,
    background: "",
    iframeautoresize: true,
    cursorminheight: 32,
    preservenativescrolling: true,
    railoffset: false,
    railhoffset: false,
    bouncescroll: true,
    spacebarenabled: true,
    railpadding: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    disableoutline: true,
    horizrailenabled: true,
    railalign: "right",
    railvalign: "bottom",
    enabletranslate3d: true,
    enablemousewheel: true,
    enablekeyboard: true,
    smoothscroll: true,
    sensitiverail: true,
    enablemouselockapi: true,
    //      cursormaxheight:false,
    cursorfixedheight: false,
    directionlockdeadzone: 6,
    hidecursordelay: 400,
    nativeparentscrolling: true,
    enablescrollonselection: true,
    overflowx: true,
    overflowy: true,
    cursordragspeed: 0.3,
    rtlmode: "auto",
    cursordragontouch: false,
    oneaxismousemode: "auto",
    scriptpath: getScriptPath(),
    preventmultitouchscrolling: true,
    disablemutationobserver: false,
    enableobserver: true,
    scrollbarid: false
  };

  var browserdetected = false;

  var getBrowserDetection = function () {

    if (browserdetected) return browserdetected;

    var _el = _doc.createElement('DIV'),
      _style = _el.style,
      _agent = navigator.userAgent,
      _platform = navigator.platform,
      d = {};

    d.haspointerlock = "pointerLockElement" in _doc || "webkitPointerLockElement" in _doc || "mozPointerLockElement" in _doc;

    d.isopera = ("opera" in _win); // 12-
    d.isopera12 = (d.isopera && ("getUserMedia" in navigator));
    d.isoperamini = (Object.prototype.toString.call(_win.operamini) === "[object OperaMini]");

    d.isie = (("all" in _doc) && ("attachEvent" in _el) && !d.isopera); //IE10-
    d.isieold = (d.isie && !("msInterpolationMode" in _style)); // IE6 and older
    d.isie7 = d.isie && !d.isieold && (!("documentMode" in _doc) || (_doc.documentMode === 7));
    d.isie8 = d.isie && ("documentMode" in _doc) && (_doc.documentMode === 8);
    d.isie9 = d.isie && ("performance" in _win) && (_doc.documentMode === 9);
    d.isie10 = d.isie && ("performance" in _win) && (_doc.documentMode === 10);
    d.isie11 = ("msRequestFullscreen" in _el) && (_doc.documentMode >= 11); // IE11+

    d.ismsedge = ("msCredentials" in _win);  // MS Edge 14+

    d.ismozilla = ("MozAppearance" in _style);

    d.iswebkit = !d.ismsedge && ("WebkitAppearance" in _style);

    d.ischrome = d.iswebkit && ("chrome" in _win);
    d.ischrome38 = (d.ischrome && ("touchAction" in _style)); // behavior changed in touch emulation    
    d.ischrome22 = (!d.ischrome38) && (d.ischrome && d.haspointerlock);
    d.ischrome26 = (!d.ischrome38) && (d.ischrome && ("transition" in _style)); // issue with transform detection (maintain prefix)

    d.cantouch = ("ontouchstart" in _doc.documentElement) || ("ontouchstart" in _win); // with detection for Chrome Touch Emulation    
    d.hasw3ctouch = (_win.PointerEvent || false) && ((navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)); //IE11 pointer events, following W3C Pointer Events spec
    d.hasmstouch = (!d.hasw3ctouch) && (_win.MSPointerEvent || false); // IE10 pointer events

    d.ismac = /^mac$/i.test(_platform);

    d.isios = d.cantouch && /iphone|ipad|ipod/i.test(_platform);
    d.isios4 = d.isios && !("seal" in Object);
    d.isios7 = d.isios && ("webkitHidden" in _doc);  //iOS 7+
    d.isios8 = d.isios && ("hidden" in _doc);  //iOS 8+
    d.isios10 = d.isios && _win.Proxy;  //iOS 10+

    d.isandroid = (/android/i.test(_agent));

    d.haseventlistener = ("addEventListener" in _el);

    d.trstyle = false;
    d.hastransform = false;
    d.hastranslate3d = false;
    d.transitionstyle = false;
    d.hastransition = false;
    d.transitionend = false;

    d.trstyle = "transform";
    d.hastransform = ("transform" in _style) || (function () {
      var check = ['msTransform', 'webkitTransform', 'MozTransform', 'OTransform'];
      for (var a = 0, c = check.length; a < c; a++) {
        if (_style[check[a]] !== undefined) {
          d.trstyle = check[a];
          break;
        }
      }
      d.hastransform = (!!d.trstyle);
    })();

    if (d.hastransform) {
      _style[d.trstyle] = "translate3d(1px,2px,3px)";
      d.hastranslate3d = /translate3d/.test(_style[d.trstyle]);
    }

    d.transitionstyle = "transition";
    d.prefixstyle = '';
    d.transitionend = "transitionend";

    d.hastransition = ("transition" in _style) || (function () {

      d.transitionend = false;
      var check = ['webkitTransition', 'msTransition', 'MozTransition', 'OTransition', 'OTransition', 'KhtmlTransition'];
      var prefix = ['-webkit-', '-ms-', '-moz-', '-o-', '-o', '-khtml-'];
      var evs = ['webkitTransitionEnd', 'msTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd', 'KhtmlTransitionEnd'];
      for (var a = 0, c = check.length; a < c; a++) {
        if (check[a] in _style) {
          d.transitionstyle = check[a];
          d.prefixstyle = prefix[a];
          d.transitionend = evs[a];
          break;
        }
      }
      if (d.ischrome26) d.prefixstyle = prefix[1];  // always use prefix

      d.hastransition = (d.transitionstyle);

    })();

    function detectCursorGrab() {
      var lst = ['grab', '-webkit-grab', '-moz-grab'];
      if ((d.ischrome && !d.ischrome38) || d.isie) lst = []; // force setting for IE returns false positive and chrome cursor bug
      for (var a = 0, l = lst.length; a < l; a++) {
        var p = lst[a];
        _style.cursor = p;
        if (_style.cursor == p) return p;
      }
      return 'url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize'; // thanks to https://cdnjs.com/ for the openhand cursor!
    }
    d.cursorgrabvalue = detectCursorGrab();

    d.hasmousecapture = ("setCapture" in _el);

    d.hasMutationObserver = (ClsMutationObserver !== false);

    _el = null; //memory released

    browserdetected = d;

    return d;
  };

  var NiceScrollClass = function (myopt, me) {

    var self = this;

    this.version = '3.7.6';
    this.name = 'nicescroll';

    this.me = me;

    var $body = $("body");

    var opt = this.opt = {
      doc: $body,
      win: false
    };

    $.extend(opt, _globaloptions);  // clone opts

    // Options for internal use
    opt.snapbackspeed = 80;

    if (myopt || false) {
      for (var a in opt) {
        if (myopt[a] !== undefined) opt[a] = myopt[a];
      }
    }

    if (opt.disablemutationobserver) ClsMutationObserver = false;

    this.doc = opt.doc;
    this.iddoc = (this.doc && this.doc[0]) ? this.doc[0].id || '' : '';
    this.ispage = /^BODY|HTML/.test((opt.win) ? opt.win[0].nodeName : this.doc[0].nodeName);
    this.haswrapper = (opt.win !== false);
    this.win = opt.win || (this.ispage ? $window : this.doc);
    this.docscroll = (this.ispage && !this.haswrapper) ? $window : this.win;
    this.body = $body;
    this.viewport = false;

    this.isfixed = false;

    this.iframe = false;
    this.isiframe = ((this.doc[0].nodeName == 'IFRAME') && (this.win[0].nodeName == 'IFRAME'));

    this.istextarea = (this.win[0].nodeName == 'TEXTAREA');

    this.forcescreen = false; //force to use screen position on events

    this.canshowonmouseevent = (opt.autohidemode != "scroll");

    // Events jump table    
    this.onmousedown = false;
    this.onmouseup = false;
    this.onmousemove = false;
    this.onmousewheel = false;
    this.onkeypress = false;
    this.ongesturezoom = false;
    this.onclick = false;

    // Nicescroll custom events
    this.onscrollstart = false;
    this.onscrollend = false;
    this.onscrollcancel = false;

    this.onzoomin = false;
    this.onzoomout = false;

    // Let's start!  
    this.view = false;
    this.page = false;

    this.scroll = {
      x: 0,
      y: 0
    };
    this.scrollratio = {
      x: 0,
      y: 0
    };
    this.cursorheight = 20;
    this.scrollvaluemax = 0;

    // http://dev.w3.org/csswg/css-writing-modes-3/#logical-to-physical
    // http://dev.w3.org/csswg/css-writing-modes-3/#svg-writing-mode
    if (opt.rtlmode == "auto") {
      var target = this.win[0] == _win ? this.body : this.win;
      var writingMode = target.css("writing-mode") || target.css("-webkit-writing-mode") || target.css("-ms-writing-mode") || target.css("-moz-writing-mode");

      if (writingMode == "horizontal-tb" || writingMode == "lr-tb" || writingMode === "") {
        this.isrtlmode = (target.css("direction") == "rtl");
        this.isvertical = false;
      } else {
        this.isrtlmode = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl" || writingMode == "rl-tb");
        this.isvertical = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl");
      }
    } else {
      this.isrtlmode = (opt.rtlmode === true);
      this.isvertical = false;
    }
    //    this.checkrtlmode = false;

    this.scrollrunning = false;

    this.scrollmom = false;

    this.observer = false;  // observer div changes
    this.observerremover = false;  // observer on parent for remove detection
    this.observerbody = false;  // observer on body for position change

    if (opt.scrollbarid !== false) {
      this.id = opt.scrollbarid;
    } else {
      do {
        this.id = "ascrail" + (ascrailcounter++);
      } while (_doc.getElementById(this.id));
    }

    this.rail = false;
    this.cursor = false;
    this.cursorfreezed = false;
    this.selectiondrag = false;

    this.zoom = false;
    this.zoomactive = false;

    this.hasfocus = false;
    this.hasmousefocus = false;

    //this.visibility = true;
    this.railslocked = false;  // locked by resize
    this.locked = false;  // prevent lost of locked status sets by user
    this.hidden = false; // rails always hidden
    this.cursoractive = true; // user can interact with cursors

    this.wheelprevented = false; //prevent mousewheel event

    this.overflowx = opt.overflowx;
    this.overflowy = opt.overflowy;

    this.nativescrollingarea = false;
    this.checkarea = 0;

    this.events = []; // event list for unbind

    this.saved = {};  // style saved

    this.delaylist = {};
    this.synclist = {};

    this.lastdeltax = 0;
    this.lastdeltay = 0;

    this.detected = getBrowserDetection();

    var cap = $.extend({}, this.detected);

    this.canhwscroll = (cap.hastransform && opt.hwacceleration);
    this.ishwscroll = (this.canhwscroll && self.haswrapper);

    if (!this.isrtlmode) {
      this.hasreversehr = false;
    } else if (this.isvertical) { // RTL mode with reverse horizontal axis
      this.hasreversehr = !(cap.iswebkit || cap.isie || cap.isie11);
    } else {
      this.hasreversehr = !(cap.iswebkit || (cap.isie && !cap.isie10 && !cap.isie11));
    }

    this.istouchcapable = false; // desktop devices with touch screen support

    //## Check WebKit-based desktop with touch support
    //## + Firefox 18 nightly build (desktop) false positive (or desktop with touch support)

    if (!cap.cantouch && (cap.hasw3ctouch || cap.hasmstouch)) {  // desktop device with multiple input
      this.istouchcapable = true;
    } else if (cap.cantouch && !cap.isios && !cap.isandroid && (cap.iswebkit || cap.ismozilla)) {
      this.istouchcapable = true;
    }

    //## disable MouseLock API on user request
    if (!opt.enablemouselockapi) {
      cap.hasmousecapture = false;
      cap.haspointerlock = false;
    }

    this.debounced = function (name, fn, tm) {
      if (!self) return;
      var dd = self.delaylist[name] || false;
      if (!dd) {
        self.delaylist[name] = {
          h: setAnimationFrame(function () {
            self.delaylist[name].fn.call(self);
            self.delaylist[name] = false;
          }, tm)
        };
        fn.call(self);
      }
      self.delaylist[name].fn = fn;
    };


    this.synched = function (name, fn) {
      if (self.synclist[name]) self.synclist[name] = fn;
      else {
        self.synclist[name] = fn;
        setAnimationFrame(function () {
          if (!self) return;
          self.synclist[name] && self.synclist[name].call(self);
          self.synclist[name] = null;
        });
      }
    };

    this.unsynched = function (name) {
      if (self.synclist[name]) self.synclist[name] = false;
    };

    this.css = function (el, pars) { // save & set
      for (var n in pars) {
        self.saved.css.push([el, n, el.css(n)]);
        el.css(n, pars[n]);
      }
    };

    this.scrollTop = function (val) {
      return (val === undefined) ? self.getScrollTop() : self.setScrollTop(val);
    };

    this.scrollLeft = function (val) {
      return (val === undefined) ? self.getScrollLeft() : self.setScrollLeft(val);
    };

    // derived by by Dan Pupius www.pupius.net
    var BezierClass = function (st, ed, spd, p1, p2, p3, p4) {

      this.st = st;
      this.ed = ed;
      this.spd = spd;

      this.p1 = p1 || 0;
      this.p2 = p2 || 1;
      this.p3 = p3 || 0;
      this.p4 = p4 || 1;

      this.ts = now();
      this.df = ed - st;
    };
    BezierClass.prototype = {
      B2: function (t) {
        return 3 * (1 - t) * (1 - t) * t;
      },
      B3: function (t) {
        return 3 * (1 - t) * t * t;
      },
      B4: function (t) {
        return t * t * t;
      },
      getPos: function () {
        return (now() - this.ts) / this.spd;
      },
      getNow: function () {
        var pc = (now() - this.ts) / this.spd;
        var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
        return (pc >= 1) ? this.ed : this.st + (this.df * bz) | 0;
      },
      update: function (ed, spd) {
        this.st = this.getNow();
        this.ed = ed;
        this.spd = spd;
        this.ts = now();
        this.df = this.ed - this.st;
        return this;
      }
    };

    //derived from http://stackoverflow.com/questions/11236090/
    function getMatrixValues() {
      var tr = self.doc.css(cap.trstyle);
      if (tr && (tr.substr(0, 6) == "matrix")) {
        return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, '').split(/, +/);
      }
      return false;
    }

    if (this.ishwscroll) {    // hw accelerated scroll

      this.doc.translate = {
        x: 0,
        y: 0,
        tx: "0px",
        ty: "0px"
      };

      //this one can help to enable hw accel on ios6 http://indiegamr.com/ios6-html-hardware-acceleration-changes-and-how-to-fix-them/
      if (cap.hastranslate3d && cap.isios) this.doc.css("-webkit-backface-visibility", "hidden"); // prevent flickering http://stackoverflow.com/questions/3461441/      

      this.getScrollTop = function (last) {
        if (!last) {
          var mtx = getMatrixValues();
          if (mtx) return (mtx.length == 16) ? -mtx[13] : -mtx[5]; //matrix3d 16 on IE10
          if (self.timerscroll && self.timerscroll.bz) return self.timerscroll.bz.getNow();
        }
        return self.doc.translate.y;
      };

      this.getScrollLeft = function (last) {
        if (!last) {
          var mtx = getMatrixValues();
          if (mtx) return (mtx.length == 16) ? -mtx[12] : -mtx[4]; //matrix3d 16 on IE10
          if (self.timerscroll && self.timerscroll.bh) return self.timerscroll.bh.getNow();
        }
        return self.doc.translate.x;
      };

      this.notifyScrollEvent = function (el) {
        var e = _doc.createEvent("UIEvents");
        e.initUIEvent("scroll", false, false, _win, 1);
        e.niceevent = true;
        el.dispatchEvent(e);
      };

      var cxscrollleft = (this.isrtlmode) ? 1 : -1;

      if (cap.hastranslate3d && opt.enabletranslate3d) {
        this.setScrollTop = function (val, silent) {
          self.doc.translate.y = val;
          self.doc.translate.ty = (val * -1) + "px";
          self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
        this.setScrollLeft = function (val, silent) {
          self.doc.translate.x = val;
          self.doc.translate.tx = (val * cxscrollleft) + "px";
          self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
      } else {
        this.setScrollTop = function (val, silent) {
          self.doc.translate.y = val;
          self.doc.translate.ty = (val * -1) + "px";
          self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
        this.setScrollLeft = function (val, silent) {
          self.doc.translate.x = val;
          self.doc.translate.tx = (val * cxscrollleft) + "px";
          self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
      }
    } else {    // native scroll

      this.getScrollTop = function () {
        return self.docscroll.scrollTop();
      };
      this.setScrollTop = function (val) {
        self.docscroll.scrollTop(val);
      };

      this.getScrollLeft = function () {
        var val;
        if (!self.hasreversehr) {
          val = self.docscroll.scrollLeft();
        } else if (self.detected.ismozilla) {
          val = self.page.maxw - Math.abs(self.docscroll.scrollLeft());
        } else {
          val = self.page.maxw - self.docscroll.scrollLeft();
        }
        return val;
      };
      this.setScrollLeft = function (val) {
        return setTimeout(function () {
          if (!self) return;
          if (self.hasreversehr) {
            if (self.detected.ismozilla) {
              val = -(self.page.maxw - val);
            } else {
              val = self.page.maxw - val;
            }
          }
          return self.docscroll.scrollLeft(val);
        }, 1);
      };
    }

    this.getTarget = function (e) {
      if (!e) return false;
      if (e.target) return e.target;
      if (e.srcElement) return e.srcElement;
      return false;
    };

    this.hasParent = function (e, id) {
      if (!e) return false;
      var el = e.target || e.srcElement || e || false;
      while (el && el.id != id) {
        el = el.parentNode || false;
      }
      return (el !== false);
    };

    function getZIndex() {
      var dom = self.win;
      if ("zIndex" in dom) return dom.zIndex(); // use jQuery UI method when available
      while (dom.length > 0) {
        if (dom[0].nodeType == 9) return false;
        var zi = dom.css('zIndex');
        if (!isNaN(zi) && zi !== 0) return parseInt(zi);
        dom = dom.parent();
      }
      return false;
    }

    //inspired by http://forum.jquery.com/topic/width-includes-border-width-when-set-to-thin-medium-thick-in-ie
    var _convertBorderWidth = {
      "thin": 1,
      "medium": 3,
      "thick": 5
    };

    function getWidthToPixel(dom, prop, chkheight) {
      var wd = dom.css(prop);
      var px = parseFloat(wd);
      if (isNaN(px)) {
        px = _convertBorderWidth[wd] || 0;
        var brd = (px == 3) ? ((chkheight) ? (self.win.outerHeight() - self.win.innerHeight()) : (self.win.outerWidth() - self.win.innerWidth())) : 1; //DON'T TRUST CSS
        if (self.isie8 && px) px += 1;
        return (brd) ? px : 0;
      }
      return px;
    }

    this.getDocumentScrollOffset = function () {
      return {
        top: _win.pageYOffset || _doc.documentElement.scrollTop,
        left: _win.pageXOffset || _doc.documentElement.scrollLeft
      };
    };

    this.getOffset = function () {
      if (self.isfixed) {
        var ofs = self.win.offset();  // fix Chrome auto issue (when right/bottom props only)
        var scrl = self.getDocumentScrollOffset();
        ofs.top -= scrl.top;
        ofs.left -= scrl.left;
        return ofs;
      }
      var ww = self.win.offset();
      if (!self.viewport) return ww;
      var vp = self.viewport.offset();
      return {
        top: ww.top - vp.top,
        left: ww.left - vp.left
      };
    };

    this.updateScrollBar = function (len) {
      var pos, off;
      if (self.ishwscroll) {
        self.rail.css({
          height: self.win.innerHeight() - (opt.railpadding.top + opt.railpadding.bottom)
        });
        if (self.railh) self.railh.css({
          width: self.win.innerWidth() - (opt.railpadding.left + opt.railpadding.right)
        });
      } else {
        var wpos = self.getOffset();
        pos = {
          top: wpos.top,
          left: wpos.left - (opt.railpadding.left + opt.railpadding.right)
        };
        pos.top += getWidthToPixel(self.win, 'border-top-width', true);
        pos.left += (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win, 'border-right-width') - self.rail.width : getWidthToPixel(self.win, 'border-left-width');

        off = opt.railoffset;
        if (off) {
          if (off.top) pos.top += off.top;
          if (off.left) pos.left += off.left;
        }

        if (!self.railslocked) self.rail.css({
          top: pos.top,
          left: pos.left,
          height: ((len) ? len.h : self.win.innerHeight()) - (opt.railpadding.top + opt.railpadding.bottom)
        });

        if (self.zoom) {
          self.zoom.css({
            top: pos.top + 1,
            left: (self.rail.align == 1) ? pos.left - 20 : pos.left + self.rail.width + 4
          });
        }

        if (self.railh && !self.railslocked) {
          pos = {
            top: wpos.top,
            left: wpos.left
          };
          off = opt.railhoffset;
          if (off) {
            if (off.top) pos.top += off.top;
            if (off.left) pos.left += off.left;
          }
          var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win, 'border-top-width', true) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win, 'border-top-width', true);
          var x = pos.left + getWidthToPixel(self.win, 'border-left-width');
          self.railh.css({
            top: y - (opt.railpadding.top + opt.railpadding.bottom),
            left: x,
            width: self.railh.width
          });
        }

      }
    };

    this.doRailClick = function (e, dbl, hr) {
      var fn, pg, cur, pos;

      if (self.railslocked) return;

      self.cancelEvent(e);

      if (!("pageY" in e)) {
        e.pageX = e.clientX + _doc.documentElement.scrollLeft;
        e.pageY = e.clientY + _doc.documentElement.scrollTop;
      }

      if (dbl) {
        fn = (hr) ? self.doScrollLeft : self.doScrollTop;
        cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth / 2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight / 2)) * self.scrollratio.y);
        self.unsynched("relativexy");
        fn(cur|0);
      } else {
        fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
        cur = (hr) ? self.scroll.x : self.scroll.y;
        pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
        pg = (hr) ? self.view.w : self.view.h;
        fn((cur >= pos) ? pg : -pg);
      }

    };

    self.newscrolly = self.newscrollx = 0;

    self.hasanimationframe = ("requestAnimationFrame" in _win);
    self.hascancelanimationframe = ("cancelAnimationFrame" in _win);

    self.hasborderbox = false;

    this.init = function () {

      self.saved.css = [];

      if (cap.isoperamini) return true; // SORRY, DO NOT WORK!
      if (cap.isandroid && !("hidden" in _doc)) return true; // Android 3- SORRY, DO NOT WORK!

      opt.emulatetouch = opt.emulatetouch || opt.touchbehavior;  // mantain compatibility with "touchbehavior"      

      self.hasborderbox = _win.getComputedStyle && (_win.getComputedStyle(_doc.body)['box-sizing'] === "border-box");

      var _scrollyhidden = { 'overflow-y': 'hidden' };
      if (cap.isie11 || cap.isie10) _scrollyhidden['-ms-overflow-style'] = 'none';  // IE 10 & 11 is always a world apart!

      if (self.ishwscroll) {
        this.doc.css(cap.transitionstyle, cap.prefixstyle + 'transform 0ms ease-out');
        if (cap.transitionend) self.bind(self.doc, cap.transitionend, self.onScrollTransitionEnd, false); //I have got to do something usefull!!
      }

      self.zindex = "auto";
      if (!self.ispage && opt.zindex == "auto") {
        self.zindex = getZIndex() || "auto";
      } else {
        self.zindex = opt.zindex;
      }

      if (!self.ispage && self.zindex != "auto" && self.zindex > globalmaxzindex) {
        globalmaxzindex = self.zindex;
      }

      if (self.isie && self.zindex === 0 && opt.zindex == "auto") { // fix IE auto == 0
        self.zindex = "auto";
      }

      if (!self.ispage || !cap.isieold) {

        var cont = self.docscroll;
        if (self.ispage) cont = (self.haswrapper) ? self.win : self.doc;

        self.css(cont, _scrollyhidden);

        if (self.ispage && (cap.isie11 || cap.isie)) { // IE 7-11
          self.css($("html"), _scrollyhidden);
        }

        if (cap.isios && !self.ispage && !self.haswrapper) self.css($body, {
          "-webkit-overflow-scrolling": "touch"
        }); //force hw acceleration

        var cursor = $(_doc.createElement('div'));
        cursor.css({
          position: "relative",
          top: 0,
          "float": "right",
          width: opt.cursorwidth,
          height: 0,
          'background-color': opt.cursorcolor,
          border: opt.cursorborder,
          'background-clip': 'padding-box',
          '-webkit-border-radius': opt.cursorborderradius,
          '-moz-border-radius': opt.cursorborderradius,
          'border-radius': opt.cursorborderradius
        });

        cursor.addClass('nicescroll-cursors');

        self.cursor = cursor;

        var rail = $(_doc.createElement('div'));
        rail.attr('id', self.id);
        rail.addClass('nicescroll-rails nicescroll-rails-vr');

        var v, a, kp = ["left", "right", "top", "bottom"];  //**
        for (var n in kp) {
          a = kp[n];
          v = opt.railpadding[a] || 0;
          v && rail.css("padding-" + a, v + "px");
        }

        rail.append(cursor);

        rail.width = Math.max(parseFloat(opt.cursorwidth), cursor.outerWidth());
        rail.css({
          width: rail.width + "px",
          zIndex: self.zindex,
          background: opt.background,
          cursor: "default"
        });

        rail.visibility = true;
        rail.scrollable = true;

        rail.align = (opt.railalign == "left") ? 0 : 1;

        self.rail = rail;

        self.rail.drag = false;

        var zoom = false;
        if (opt.boxzoom && !self.ispage && !cap.isieold) {
          zoom = _doc.createElement('div');

          self.bind(zoom, "click", self.doZoom);
          self.bind(zoom, "mouseenter", function () {
            self.zoom.css('opacity', opt.cursoropacitymax);
          });
          self.bind(zoom, "mouseleave", function () {
            self.zoom.css('opacity', opt.cursoropacitymin);
          });

          self.zoom = $(zoom);
          self.zoom.css({
            cursor: "pointer",
            zIndex: self.zindex,
            backgroundImage: 'url(' + opt.scriptpath + 'zoomico.png)',
            height: 18,
            width: 18,
            backgroundPosition: '0 0'
          });
          if (opt.dblclickzoom) self.bind(self.win, "dblclick", self.doZoom);
          if (cap.cantouch && opt.gesturezoom) {
            self.ongesturezoom = function (e) {
              if (e.scale > 1.5) self.doZoomIn(e);
              if (e.scale < 0.8) self.doZoomOut(e);
              return self.cancelEvent(e);
            };
            self.bind(self.win, "gestureend", self.ongesturezoom);
          }
        }

        // init HORIZ

        self.railh = false;
        var railh;

        if (opt.horizrailenabled) {

          self.css(cont, {
            overflowX: 'hidden'
          });

          cursor = $(_doc.createElement('div'));
          cursor.css({
            position: "absolute",
            top: 0,
            height: opt.cursorwidth,
            width: 0,
            backgroundColor: opt.cursorcolor,
            border: opt.cursorborder,
            backgroundClip: 'padding-box',
            '-webkit-border-radius': opt.cursorborderradius,
            '-moz-border-radius': opt.cursorborderradius,
            'border-radius': opt.cursorborderradius
          });

          if (cap.isieold) cursor.css('overflow', 'hidden');  //IE6 horiz scrollbar issue

          cursor.addClass('nicescroll-cursors');

          self.cursorh = cursor;

          railh = $(_doc.createElement('div'));
          railh.attr('id', self.id + '-hr');
          railh.addClass('nicescroll-rails nicescroll-rails-hr');
          railh.height = Math.max(parseFloat(opt.cursorwidth), cursor.outerHeight());
          railh.css({
            height: railh.height + "px",
            'zIndex': self.zindex,
            "background": opt.background
          });

          railh.append(cursor);

          railh.visibility = true;
          railh.scrollable = true;

          railh.align = (opt.railvalign == "top") ? 0 : 1;

          self.railh = railh;

          self.railh.drag = false;

        }

        if (self.ispage) {

          rail.css({
            position: "fixed",
            top: 0,
            height: "100%"
          });

          rail.css((rail.align) ? { right: 0 } : { left: 0 });

          self.body.append(rail);
          if (self.railh) {
            railh.css({
              position: "fixed",
              left: 0,
              width: "100%"
            });

            railh.css((railh.align) ? { bottom: 0 } : { top: 0 });

            self.body.append(railh);
          }
        } else {
          if (self.ishwscroll) {
            if (self.win.css('position') == 'static') self.css(self.win, { 'position': 'relative' });
            var bd = (self.win[0].nodeName == 'HTML') ? self.body : self.win;
            $(bd).scrollTop(0).scrollLeft(0);  // fix rail position if content already scrolled
            if (self.zoom) {
              self.zoom.css({
                position: "absolute",
                top: 1,
                right: 0,
                "margin-right": rail.width + 4
              });
              bd.append(self.zoom);
            }
            rail.css({
              position: "absolute",
              top: 0
            });
            rail.css((rail.align) ? { right: 0 } : { left: 0 });
            bd.append(rail);
            if (railh) {
              railh.css({
                position: "absolute",
                left: 0,
                bottom: 0
              });
              railh.css((railh.align) ? { bottom: 0 } : { top: 0 });
              bd.append(railh);
            }
          } else {
            self.isfixed = (self.win.css("position") == "fixed");
            var rlpos = (self.isfixed) ? "fixed" : "absolute";

            if (!self.isfixed) self.viewport = self.getViewport(self.win[0]);
            if (self.viewport) {
              self.body = self.viewport;
              if (!(/fixed|absolute/.test(self.viewport.css("position")))) self.css(self.viewport, {
                "position": "relative"
              });
            }

            rail.css({
              position: rlpos
            });
            if (self.zoom) self.zoom.css({
              position: rlpos
            });
            self.updateScrollBar();
            self.body.append(rail);
            if (self.zoom) self.body.append(self.zoom);
            if (self.railh) {
              railh.css({
                position: rlpos
              });
              self.body.append(railh);
            }
          }

          if (cap.isios) self.css(self.win, {
            '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
            '-webkit-touch-callout': 'none'
          }); // prevent grey layer on click

          if (opt.disableoutline) {
            if (cap.isie) self.win.attr("hideFocus", "true"); // IE, prevent dotted rectangle on focused div
            if (cap.iswebkit) self.win.css('outline', 'none');  // Webkit outline
          }

        }

        if (opt.autohidemode === false) {
          self.autohidedom = false;
          self.rail.css({
            opacity: opt.cursoropacitymax
          });
          if (self.railh) self.railh.css({
            opacity: opt.cursoropacitymax
          });
        } else if ((opt.autohidemode === true) || (opt.autohidemode === "leave")) {
          self.autohidedom = $().add(self.rail);
          if (cap.isie8) self.autohidedom = self.autohidedom.add(self.cursor);
          if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
          if (self.railh && cap.isie8) self.autohidedom = self.autohidedom.add(self.cursorh);
        } else if (opt.autohidemode == "scroll") {
          self.autohidedom = $().add(self.rail);
          if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
        } else if (opt.autohidemode == "cursor") {
          self.autohidedom = $().add(self.cursor);
          if (self.railh) self.autohidedom = self.autohidedom.add(self.cursorh);
        } else if (opt.autohidemode == "hidden") {
          self.autohidedom = false;
          self.hide();
          self.railslocked = false;
        }

        if (cap.cantouch || self.istouchcapable || opt.emulatetouch || cap.hasmstouch) {

          self.scrollmom = new ScrollMomentumClass2D(self);

          var delayedclick = null;

          self.ontouchstart = function (e) {

            if (self.locked) return false;

            //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
            if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return false;  // need test on surface!!

            self.hasmoving = false;

            if (self.scrollmom.timer) {
              self.triggerScrollEnd();
              self.scrollmom.stop();
            }

            if (!self.railslocked) {
              var tg = self.getTarget(e);

              if (tg) {
                var skp = (/INPUT/i.test(tg.nodeName)) && (/range/i.test(tg.type));
                if (skp) return self.stopPropagation(e);
              }

              var ismouse = (e.type === "mousedown");

              if (!("clientX" in e) && ("changedTouches" in e)) {
                e.clientX = e.changedTouches[0].clientX;
                e.clientY = e.changedTouches[0].clientY;
              }

              if (self.forcescreen) {
                var le = e;
                e = {
                  "original": (e.original) ? e.original : e
                };
                e.clientX = le.screenX;
                e.clientY = le.screenY;
              }

              self.rail.drag = {
                x: e.clientX,
                y: e.clientY,
                sx: self.scroll.x,
                sy: self.scroll.y,
                st: self.getScrollTop(),
                sl: self.getScrollLeft(),
                pt: 2,
                dl: false,
                tg: tg
              };

              if (self.ispage || !opt.directionlockdeadzone) {

                self.rail.drag.dl = "f";

              } else {

                var view = {
                  w: $window.width(),
                  h: $window.height()
                };

                var page = self.getContentSize();

                var maxh = page.h - view.h;
                var maxw = page.w - view.w;

                if (self.rail.scrollable && !self.railh.scrollable) self.rail.drag.ck = (maxh > 0) ? "v" : false;
                else if (!self.rail.scrollable && self.railh.scrollable) self.rail.drag.ck = (maxw > 0) ? "h" : false;
                else self.rail.drag.ck = false;

              }

              if (opt.emulatetouch && self.isiframe && cap.isie) {
                var wp = self.win.position();
                self.rail.drag.x += wp.left;
                self.rail.drag.y += wp.top;
              }

              self.hasmoving = false;
              self.lastmouseup = false;
              self.scrollmom.reset(e.clientX, e.clientY);

              if (tg&&ismouse) {

                var ip = /INPUT|SELECT|BUTTON|TEXTAREA/i.test(tg.nodeName);
                if (!ip) {
                  if (cap.hasmousecapture) tg.setCapture();
                  if (opt.emulatetouch) {
                    if (tg.onclick && !(tg._onclick || false)) { // intercept DOM0 onclick event
                      tg._onclick = tg.onclick;
                      tg.onclick = function (e) {
                        if (self.hasmoving) return false;
                        tg._onclick.call(this, e);
                      };
                    }
                    return self.cancelEvent(e);
                  }
                  return self.stopPropagation(e);
                }

                if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
                  self.preventclick = {
                    "tg": tg,
                    "click": false
                  };
                }

              }
            }

          };

          self.ontouchend = function (e) {

            if (!self.rail.drag) return true;

            if (self.rail.drag.pt == 2) {
              //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
              if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return false;

              self.rail.drag = false;

              var ismouse = (e.type === "mouseup");

              if (self.hasmoving) {
                self.scrollmom.doMomentum();
                self.lastmouseup = true;
                self.hideCursor();
                if (cap.hasmousecapture) _doc.releaseCapture();
                if (ismouse) return self.cancelEvent(e);
              }

            }
            else if (self.rail.drag.pt == 1) {
              return self.onmouseup(e);
            }

          };

          var moveneedoffset = (opt.emulatetouch && self.isiframe && !cap.hasmousecapture);

          var locktollerance = opt.directionlockdeadzone * 0.3 | 0;

          self.ontouchmove = function (e, byiframe) {

            if (!self.rail.drag) return true;

            if (e.targetTouches && opt.preventmultitouchscrolling) {
              if (e.targetTouches.length > 1) return true; // multitouch
            }

            //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
            if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return true;

            if (self.rail.drag.pt == 2) {

              if (("changedTouches" in e)) {
                e.clientX = e.changedTouches[0].clientX;
                e.clientY = e.changedTouches[0].clientY;
              }

              var ofy, ofx;
              ofx = ofy = 0;

              if (moveneedoffset && !byiframe) {
                var wp = self.win.position();
                ofx = -wp.left;
                ofy = -wp.top;
              }

              var fy = e.clientY + ofy;
              var my = (fy - self.rail.drag.y);
              var fx = e.clientX + ofx;
              var mx = (fx - self.rail.drag.x);

              var ny = self.rail.drag.st - my;

              if (self.ishwscroll && opt.bouncescroll) {
                if (ny < 0) {
                  ny = Math.round(ny / 2);
                } else if (ny > self.page.maxh) {
                  ny = self.page.maxh + Math.round((ny - self.page.maxh) / 2);
                }
              } else {
                if (ny < 0) {
                  ny = 0;
                  fy = 0;
                }
                else if (ny > self.page.maxh) {
                  ny = self.page.maxh;
                  fy = 0;
                }
                if (fy === 0 && !self.hasmoving) {
                  if (!self.ispage) self.rail.drag = false;
                  return true;
                }
              }

              var nx = self.getScrollLeft();

              if (self.railh && self.railh.scrollable) {
                nx = (self.isrtlmode) ? mx - self.rail.drag.sl : self.rail.drag.sl - mx;

                if (self.ishwscroll && opt.bouncescroll) {
                  if (nx < 0) {
                    nx = Math.round(nx / 2);
                  } else if (nx > self.page.maxw) {
                    nx = self.page.maxw + Math.round((nx - self.page.maxw) / 2);
                  }
                } else {
                  if (nx < 0) {
                    nx = 0;
                    fx = 0;
                  }
                  if (nx > self.page.maxw) {
                    nx = self.page.maxw;
                    fx = 0;
                  }
                }

              }


              if (!self.hasmoving) {

                if (self.rail.drag.y === e.clientY && self.rail.drag.x === e.clientX) return self.cancelEvent(e);  // prevent first useless move event 

                var ay = Math.abs(my);
                var ax = Math.abs(mx);
                var dz = opt.directionlockdeadzone;

                if (!self.rail.drag.ck) {
                  if (ay > dz && ax > dz) self.rail.drag.dl = "f";
                  else if (ay > dz) self.rail.drag.dl = (ax > locktollerance) ? "f" : "v";
                  else if (ax > dz) self.rail.drag.dl = (ay > locktollerance) ? "f" : "h";
                }
                else if (self.rail.drag.ck == "v") {
                  if (ax > dz && ay <= locktollerance) {
                    self.rail.drag = false;
                  }
                  else if (ay > dz) self.rail.drag.dl = "v";

                }
                else if (self.rail.drag.ck == "h") {

                  if (ay > dz && ax <= locktollerance) {
                    self.rail.drag = false;
                  }
                  else if (ax > dz) self.rail.drag.dl = "h";

                }

                if (!self.rail.drag.dl) return self.cancelEvent(e);

                self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);
                self.hasmoving = true;
              }

              if (self.preventclick && !self.preventclick.click) {
                self.preventclick.click = self.preventclick.tg.onclick || false;
                self.preventclick.tg.onclick = self.onpreventclick;
              }

              if (self.rail.drag.dl) {
                if (self.rail.drag.dl == "v") nx = self.rail.drag.sl;
                else if (self.rail.drag.dl == "h") ny = self.rail.drag.st;
              }

              self.synched("touchmove", function () {
                if (self.rail.drag && (self.rail.drag.pt == 2)) {
                  if (self.prepareTransition) self.resetTransition();
                  if (self.rail.scrollable) self.setScrollTop(ny);
                  self.scrollmom.update(fx, fy);
                  if (self.railh && self.railh.scrollable) {
                    self.setScrollLeft(nx);
                    self.showCursor(ny, nx);
                  } else {
                    self.showCursor(ny);
                  }
                  if (cap.isie10) _doc.selection.clear();
                }
              });

              return self.cancelEvent(e);

            }
            else if (self.rail.drag.pt == 1) { // drag on cursor
              return self.onmousemove(e);
            }

          };

          self.ontouchstartCursor = function (e, hronly) {
            if (self.rail.drag && self.rail.drag.pt != 3) return;
            if (self.locked) return self.cancelEvent(e);
            self.cancelScroll();
            self.rail.drag = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
              sx: self.scroll.x,
              sy: self.scroll.y,
              pt: 3,
              hr: (!!hronly)
            };
            var tg = self.getTarget(e);
            if (!self.ispage && cap.hasmousecapture) tg.setCapture();
            if (self.isiframe && !cap.hasmousecapture) {
              self.saved.csspointerevents = self.doc.css("pointer-events");
              self.css(self.doc, { "pointer-events": "none" });
            }
            return self.cancelEvent(e);
          };

          self.ontouchendCursor = function (e) {
            if (self.rail.drag) {
              if (cap.hasmousecapture) _doc.releaseCapture();
              if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved.csspointerevents);
              if (self.rail.drag.pt != 3) return;
              self.rail.drag = false;
              return self.cancelEvent(e);
            }
          };

          self.ontouchmoveCursor = function (e) {
            if (self.rail.drag) {
              if (self.rail.drag.pt != 3) return;

              self.cursorfreezed = true;

              if (self.rail.drag.hr) {
                self.scroll.x = self.rail.drag.sx + (e.touches[0].clientX - self.rail.drag.x);
                if (self.scroll.x < 0) self.scroll.x = 0;
                var mw = self.scrollvaluemaxw;
                if (self.scroll.x > mw) self.scroll.x = mw;
              } else {
                self.scroll.y = self.rail.drag.sy + (e.touches[0].clientY - self.rail.drag.y);
                if (self.scroll.y < 0) self.scroll.y = 0;
                var my = self.scrollvaluemax;
                if (self.scroll.y > my) self.scroll.y = my;
              }

              self.synched('touchmove', function () {
                if (self.rail.drag && (self.rail.drag.pt == 3)) {
                  self.showCursor();
                  if (self.rail.drag.hr) self.doScrollLeft(Math.round(self.scroll.x * self.scrollratio.x), opt.cursordragspeed);
                  else self.doScrollTop(Math.round(self.scroll.y * self.scrollratio.y), opt.cursordragspeed);
                }
              });

              return self.cancelEvent(e);
            }

          };

        }

        self.onmousedown = function (e, hronly) {
          if (self.rail.drag && self.rail.drag.pt != 1) return;
          if (self.railslocked) return self.cancelEvent(e);
          self.cancelScroll();
          self.rail.drag = {
            x: e.clientX,
            y: e.clientY,
            sx: self.scroll.x,
            sy: self.scroll.y,
            pt: 1,
            hr: hronly || false
          };
          var tg = self.getTarget(e);

          if (cap.hasmousecapture) tg.setCapture();
          if (self.isiframe && !cap.hasmousecapture) {
            self.saved.csspointerevents = self.doc.css("pointer-events");
            self.css(self.doc, {
              "pointer-events": "none"
            });
          }
          self.hasmoving = false;
          return self.cancelEvent(e);
        };

        self.onmouseup = function (e) {
          if (self.rail.drag) {
            if (self.rail.drag.pt != 1) return true;

            if (cap.hasmousecapture) _doc.releaseCapture();
            if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved.csspointerevents);
            self.rail.drag = false;
            self.cursorfreezed = false;
            if (self.hasmoving) self.triggerScrollEnd();
            return self.cancelEvent(e);
          }
        };

        self.onmousemove = function (e) {
          if (self.rail.drag) {
            if (self.rail.drag.pt !== 1) return;

            if (cap.ischrome && e.which === 0) return self.onmouseup(e);

            self.cursorfreezed = true;

            if (!self.hasmoving) self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);

            self.hasmoving = true;

            if (self.rail.drag.hr) {
              self.scroll.x = self.rail.drag.sx + (e.clientX - self.rail.drag.x);
              if (self.scroll.x < 0) self.scroll.x = 0;
              var mw = self.scrollvaluemaxw;
              if (self.scroll.x > mw) self.scroll.x = mw;
            } else {
              self.scroll.y = self.rail.drag.sy + (e.clientY - self.rail.drag.y);
              if (self.scroll.y < 0) self.scroll.y = 0;
              var my = self.scrollvaluemax;
              if (self.scroll.y > my) self.scroll.y = my;
            }

            self.synched('mousemove', function () {

              if (self.cursorfreezed) {
                self.showCursor();

                if (self.rail.drag.hr) {
                  self.scrollLeft(Math.round(self.scroll.x * self.scrollratio.x));
                } else {
                  self.scrollTop(Math.round(self.scroll.y * self.scrollratio.y));
                }

              }
            });

            return self.cancelEvent(e);
          }
          else {
            self.checkarea = 0;
          }
        };

        if (cap.cantouch || opt.emulatetouch) {

          self.onpreventclick = function (e) {
            if (self.preventclick) {
              self.preventclick.tg.onclick = self.preventclick.click;
              self.preventclick = false;
              return self.cancelEvent(e);
            }
          };

          self.onclick = (cap.isios) ? false : function (e) {  // it needs to check IE11 ???
            if (self.lastmouseup) {
              self.lastmouseup = false;
              return self.cancelEvent(e);
            } else {
              return true;
            }
          };

          if (opt.grabcursorenabled && cap.cursorgrabvalue) {
            self.css((self.ispage) ? self.doc : self.win, {
              'cursor': cap.cursorgrabvalue
            });
            self.css(self.rail, {
              'cursor': cap.cursorgrabvalue
            });
          }

        } else {

          var checkSelectionScroll = function (e) {
            if (!self.selectiondrag) return;

            if (e) {
              var ww = self.win.outerHeight();
              var df = (e.pageY - self.selectiondrag.top);
              if (df > 0 && df < ww) df = 0;
              if (df >= ww) df -= ww;
              self.selectiondrag.df = df;
            }
            if (self.selectiondrag.df === 0) return;

            var rt = -(self.selectiondrag.df*2/6)|0;
            self.doScrollBy(rt);

            self.debounced("doselectionscroll", function () {
              checkSelectionScroll();
            }, 50);
          };

          if ("getSelection" in _doc) { // A grade - Major browsers
            self.hasTextSelected = function () {
              return (_doc.getSelection().rangeCount > 0);
            };
          } else if ("selection" in _doc) { //IE9-
            self.hasTextSelected = function () {
              return (_doc.selection.type != "None");
            };
          } else {
            self.hasTextSelected = function () { // no support
              return false;
            };
          }

          self.onselectionstart = function (e) {
            //  More testing - severe chrome issues           
            /* 
                          if (!self.haswrapper&&(e.which&&e.which==2)) {  // fool browser to manage middle button scrolling
                            self.win.css({'overflow':'auto'});
                            setTimeout(function(){
                              self.win.css({'overflow':'hidden'});
                            },10);                
                            return true;
                          }            
            */
            if (self.ispage) return;
            self.selectiondrag = self.win.offset();
          };

          self.onselectionend = function (e) {
            self.selectiondrag = false;
          };
          self.onselectiondrag = function (e) {
            if (!self.selectiondrag) return;
            if (self.hasTextSelected()) self.debounced("selectionscroll", function () {
              checkSelectionScroll(e);
            }, 250);
          };
        }

        if (cap.hasw3ctouch) { //IE11+
          self.css((self.ispage) ? $("html") : self.win, { 'touch-action': 'none' });
          self.css(self.rail, {
            'touch-action': 'none'
          });
          self.css(self.cursor, {
            'touch-action': 'none'
          });
          self.bind(self.win, "pointerdown", self.ontouchstart);
          self.bind(_doc, "pointerup", self.ontouchend);
          self.delegate(_doc, "pointermove", self.ontouchmove);
        } else if (cap.hasmstouch) { //IE10
          self.css((self.ispage) ? $("html") : self.win, { '-ms-touch-action': 'none' });
          self.css(self.rail, {
            '-ms-touch-action': 'none'
          });
          self.css(self.cursor, {
            '-ms-touch-action': 'none'
          });
          self.bind(self.win, "MSPointerDown", self.ontouchstart);
          self.bind(_doc, "MSPointerUp", self.ontouchend);
          self.delegate(_doc, "MSPointerMove", self.ontouchmove);
          self.bind(self.cursor, "MSGestureHold", function (e) {
            e.preventDefault();
          });
          self.bind(self.cursor, "contextmenu", function (e) {
            e.preventDefault();
          });
        } else if (cap.cantouch) { // smartphones/touch devices
          self.bind(self.win, "touchstart", self.ontouchstart, false, true);
          self.bind(_doc, "touchend", self.ontouchend, false, true);
          self.bind(_doc, "touchcancel", self.ontouchend, false, true);
          self.delegate(_doc, "touchmove", self.ontouchmove, false, true);
        }

        if (opt.emulatetouch) {
          self.bind(self.win, "mousedown", self.ontouchstart, false, true);
          self.bind(_doc, "mouseup", self.ontouchend, false, true);
          self.bind(_doc, "mousemove", self.ontouchmove, false, true);
        }

        if (opt.cursordragontouch || (!cap.cantouch && !opt.emulatetouch)) {

          self.rail.css({
            cursor: "default"
          });
          self.railh && self.railh.css({
            cursor: "default"
          });

          self.jqbind(self.rail, "mouseenter", function () {
            if (!self.ispage && !self.win.is(":visible")) return false;
            if (self.canshowonmouseevent) self.showCursor();
            self.rail.active = true;
          });
          self.jqbind(self.rail, "mouseleave", function () {
            self.rail.active = false;
            if (!self.rail.drag) self.hideCursor();
          });

          if (opt.sensitiverail) {
            self.bind(self.rail, "click", function (e) {
              self.doRailClick(e, false, false);
            });
            self.bind(self.rail, "dblclick", function (e) {
              self.doRailClick(e, true, false);
            });
            self.bind(self.cursor, "click", function (e) {
              self.cancelEvent(e);
            });
            self.bind(self.cursor, "dblclick", function (e) {
              self.cancelEvent(e);
            });
          }

          if (self.railh) {
            self.jqbind(self.railh, "mouseenter", function () {
              if (!self.ispage && !self.win.is(":visible")) return false;
              if (self.canshowonmouseevent) self.showCursor();
              self.rail.active = true;
            });
            self.jqbind(self.railh, "mouseleave", function () {
              self.rail.active = false;
              if (!self.rail.drag) self.hideCursor();
            });

            if (opt.sensitiverail) {
              self.bind(self.railh, "click", function (e) {
                self.doRailClick(e, false, true);
              });
              self.bind(self.railh, "dblclick", function (e) {
                self.doRailClick(e, true, true);
              });
              self.bind(self.cursorh, "click", function (e) {
                self.cancelEvent(e);
              });
              self.bind(self.cursorh, "dblclick", function (e) {
                self.cancelEvent(e);
              });
            }

          }

        }

        if (opt.cursordragontouch && (this.istouchcapable || cap.cantouch)) {
          self.bind(self.cursor, "touchstart", self.ontouchstartCursor);
          self.bind(self.cursor, "touchmove", self.ontouchmoveCursor);
          self.bind(self.cursor, "touchend", self.ontouchendCursor);
          self.cursorh && self.bind(self.cursorh, "touchstart", function (e) {
            self.ontouchstartCursor(e, true);
          });
          self.cursorh && self.bind(self.cursorh, "touchmove", self.ontouchmoveCursor);
          self.cursorh && self.bind(self.cursorh, "touchend", self.ontouchendCursor);
        }

//        if (!cap.cantouch && !opt.emulatetouch) {
        if (!opt.emulatetouch && !cap.isandroid && !cap.isios) {

          self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.onmouseup);
          self.bind(_doc, "mousemove", self.onmousemove);
          if (self.onclick) self.bind(_doc, "click", self.onclick);

          self.bind(self.cursor, "mousedown", self.onmousedown);
          self.bind(self.cursor, "mouseup", self.onmouseup);

          if (self.railh) {
            self.bind(self.cursorh, "mousedown", function (e) {
              self.onmousedown(e, true);
            });
            self.bind(self.cursorh, "mouseup", self.onmouseup);
          }

          if (!self.ispage && opt.enablescrollonselection) {
            self.bind(self.win[0], "mousedown", self.onselectionstart);
            self.bind(_doc, "mouseup", self.onselectionend);
            self.bind(self.cursor, "mouseup", self.onselectionend);
            if (self.cursorh) self.bind(self.cursorh, "mouseup", self.onselectionend);
            self.bind(_doc, "mousemove", self.onselectiondrag);
          }

          if (self.zoom) {
            self.jqbind(self.zoom, "mouseenter", function () {
              if (self.canshowonmouseevent) self.showCursor();
              self.rail.active = true;
            });
            self.jqbind(self.zoom, "mouseleave", function () {
              self.rail.active = false;
              if (!self.rail.drag) self.hideCursor();
            });
          }

        } else {

          self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.ontouchend);
          if (self.onclick) self.bind(_doc, "click", self.onclick);

          if (opt.cursordragontouch) {
            self.bind(self.cursor, "mousedown", self.onmousedown);
            self.bind(self.cursor, "mouseup", self.onmouseup);
            self.cursorh && self.bind(self.cursorh, "mousedown", function (e) {
              self.onmousedown(e, true);
            });
            self.cursorh && self.bind(self.cursorh, "mouseup", self.onmouseup);
          } else {
            self.bind(self.rail, "mousedown", function (e) { e.preventDefault(); });  // prevent text selection             
            self.railh && self.bind(self.railh, "mousedown", function (e) { e.preventDefault(); });
          }

        }


        if (opt.enablemousewheel) {
          if (!self.isiframe) self.mousewheel((cap.isie && self.ispage) ? _doc : self.win, self.onmousewheel);
          self.mousewheel(self.rail, self.onmousewheel);
          if (self.railh) self.mousewheel(self.railh, self.onmousewheelhr);
        }

        if (!self.ispage && !cap.cantouch && !(/HTML|^BODY/.test(self.win[0].nodeName))) {
          if (!self.win.attr("tabindex")) self.win.attr({
            "tabindex": ++tabindexcounter
          });

          self.bind(self.win, "focus", function (e) {  // better using native events
            domfocus = (self.getTarget(e)).id || self.getTarget(e) || false;
            self.hasfocus = true;
            if (self.canshowonmouseevent) self.noticeCursor();
          });
          self.bind(self.win, "blur", function (e) {  // *
            domfocus = false;
            self.hasfocus = false;
          });

          self.bind(self.win, "mouseenter", function (e) {   // *
            mousefocus = (self.getTarget(e)).id || self.getTarget(e) || false;
            self.hasmousefocus = true;
            if (self.canshowonmouseevent) self.noticeCursor();
          });
          self.bind(self.win, "mouseleave", function (e) {   // *       
            mousefocus = false;
            self.hasmousefocus = false;
            if (!self.rail.drag) self.hideCursor();
          });

        }


        //Thanks to http://www.quirksmode.org !!
        self.onkeypress = function (e) {
          if (self.railslocked && self.page.maxh === 0) return true;

          e = e || _win.event;
          var tg = self.getTarget(e);
          if (tg && /INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
            var tp = tg.getAttribute('type') || tg.type || false;
            if ((!tp) || !(/submit|button|cancel/i.tp)) return true;
          }

          if ($(tg).attr('contenteditable')) return true;

          if (self.hasfocus || (self.hasmousefocus && !domfocus) || (self.ispage && !domfocus && !mousefocus)) {
            var key = e.keyCode;

            if (self.railslocked && key != 27) return self.cancelEvent(e);

            var ctrl = e.ctrlKey || false;
            var shift = e.shiftKey || false;

            var ret = false;
            switch (key) {
              case 38:
              case 63233: //safari
                self.doScrollBy(24 * 3);
                ret = true;
                break;
              case 40:
              case 63235: //safari
                self.doScrollBy(-24 * 3);
                ret = true;
                break;
              case 37:
              case 63232: //safari
                if (self.railh) {
                  (ctrl) ? self.doScrollLeft(0) : self.doScrollLeftBy(24 * 3);
                  ret = true;
                }
                break;
              case 39:
              case 63234: //safari
                if (self.railh) {
                  (ctrl) ? self.doScrollLeft(self.page.maxw) : self.doScrollLeftBy(-24 * 3);
                  ret = true;
                }
                break;
              case 33:
              case 63276: // safari
                self.doScrollBy(self.view.h);
                ret = true;
                break;
              case 34:
              case 63277: // safari
                self.doScrollBy(-self.view.h);
                ret = true;
                break;
              case 36:
              case 63273: // safari                
                (self.railh && ctrl) ? self.doScrollPos(0, 0) : self.doScrollTo(0);
                ret = true;
                break;
              case 35:
              case 63275: // safari
                (self.railh && ctrl) ? self.doScrollPos(self.page.maxw, self.page.maxh) : self.doScrollTo(self.page.maxh);
                ret = true;
                break;
              case 32:
                if (opt.spacebarenabled) {
                  (shift) ? self.doScrollBy(self.view.h) : self.doScrollBy(-self.view.h);
                  ret = true;
                }
                break;
              case 27: // ESC
                if (self.zoomactive) {
                  self.doZoom();
                  ret = true;
                }
                break;
            }
            if (ret) return self.cancelEvent(e);
          }
        };

        if (opt.enablekeyboard) self.bind(_doc, (cap.isopera && !cap.isopera12) ? "keypress" : "keydown", self.onkeypress);

        self.bind(_doc, "keydown", function (e) {
          var ctrl = e.ctrlKey || false;
          if (ctrl) self.wheelprevented = true;
        });
        self.bind(_doc, "keyup", function (e) {
          var ctrl = e.ctrlKey || false;
          if (!ctrl) self.wheelprevented = false;
        });
        self.bind(_win, "blur", function (e) {
          self.wheelprevented = false;
        });

        self.bind(_win, 'resize', self.onscreenresize);
        self.bind(_win, 'orientationchange', self.onscreenresize);

        self.bind(_win, "load", self.lazyResize);

        if (cap.ischrome && !self.ispage && !self.haswrapper) { //chrome void scrollbar bug - it persists in version 26
          var tmp = self.win.attr("style");
          var ww = parseFloat(self.win.css("width")) + 1;
          self.win.css('width', ww);
          self.synched("chromefix", function () {
            self.win.attr("style", tmp);
          });
        }


        // Trying a cross-browser implementation - good luck!

        self.onAttributeChange = function (e) {
          self.lazyResize(self.isieold ? 250 : 30);
        };

        if (opt.enableobserver) {

          if ((!self.isie11) && (ClsMutationObserver !== false)) {  // IE11 crashes  #568
            self.observerbody = new ClsMutationObserver(function (mutations) {
              mutations.forEach(function (mut) {
                if (mut.type == "attributes") {
                  return ($body.hasClass("modal-open") && $body.hasClass("modal-dialog") && !$.contains($('.modal-dialog')[0], self.doc[0])) ? self.hide() : self.show();  // Support for Bootstrap modal; Added check if the nice scroll element is inside a modal
                }
              });
              if (self.me.clientWidth != self.page.width || self.me.clientHeight != self.page.height) return self.lazyResize(30);
            });
            self.observerbody.observe(_doc.body, {
              childList: true,
              subtree: true,
              characterData: false,
              attributes: true,
              attributeFilter: ['class']
            });
          }

          if (!self.ispage && !self.haswrapper) {

            var _dom = self.win[0];

            // redesigned MutationObserver for Chrome18+/Firefox14+/iOS6+ with support for: remove div, add/remove content
            if (ClsMutationObserver !== false) {
              self.observer = new ClsMutationObserver(function (mutations) {
                mutations.forEach(self.onAttributeChange);
              });
              self.observer.observe(_dom, {
                childList: true,
                characterData: false,
                attributes: true,
                subtree: false
              });
              self.observerremover = new ClsMutationObserver(function (mutations) {
                mutations.forEach(function (mo) {
                  if (mo.removedNodes.length > 0) {
                    for (var dd in mo.removedNodes) {
                      if (!!self && (mo.removedNodes[dd] === _dom)) return self.remove();
                    }
                  }
                });
              });
              self.observerremover.observe(_dom.parentNode, {
                childList: true,
                characterData: false,
                attributes: false,
                subtree: false
              });
            } else {
              self.bind(_dom, (cap.isie && !cap.isie9) ? "propertychange" : "DOMAttrModified", self.onAttributeChange);
              if (cap.isie9) _dom.attachEvent("onpropertychange", self.onAttributeChange); //IE9 DOMAttrModified bug
              self.bind(_dom, "DOMNodeRemoved", function (e) {
                if (e.target === _dom) self.remove();
              });
            }
          }

        }

        //

        if (!self.ispage && opt.boxzoom) self.bind(_win, "resize", self.resizeZoom);
        if (self.istextarea) {
          self.bind(self.win, "keydown", self.lazyResize);
          self.bind(self.win, "mouseup", self.lazyResize);
        }

        self.lazyResize(30);

      }

      if (this.doc[0].nodeName == 'IFRAME') {
        var oniframeload = function () {
          self.iframexd = false;
          var doc;
          try {
            doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow._doc;
            var a = doc.domain;
          } catch (e) {
            self.iframexd = true;
            doc = false;
          }

          if (self.iframexd) {
            if ("console" in _win) console.log('NiceScroll error: policy restriced iframe');
            return true; //cross-domain - I can't manage this        
          }

          self.forcescreen = true;

          if (self.isiframe) {
            self.iframe = {
              "doc": $(doc),
              "html": self.doc.contents().find('html')[0],
              "body": self.doc.contents().find('body')[0]
            };
            self.getContentSize = function () {
              return {
                w: Math.max(self.iframe.html.scrollWidth, self.iframe.body.scrollWidth),
                h: Math.max(self.iframe.html.scrollHeight, self.iframe.body.scrollHeight)
              };
            };
            self.docscroll = $(self.iframe.body);
          }

          if (!cap.isios && opt.iframeautoresize && !self.isiframe) {
            self.win.scrollTop(0); // reset position
            self.doc.height(""); //reset height to fix browser bug
            var hh = Math.max(doc.getElementsByTagName('html')[0].scrollHeight, doc.body.scrollHeight);
            self.doc.height(hh);
          }
          self.lazyResize(30);

          self.css($(self.iframe.body), _scrollyhidden);

          if (cap.isios && self.haswrapper) {
            self.css($(doc.body), {
              '-webkit-transform': 'translate3d(0,0,0)'
            }); // avoid iFrame content clipping - thanks to http://blog.derraab.com/2012/04/02/avoid-iframe-content-clipping-with-css-transform-on-ios/
          }

          if ('contentWindow' in this) {
            self.bind(this.contentWindow, "scroll", self.onscroll); //IE8 & minor
          } else {
            self.bind(doc, "scroll", self.onscroll);
          }

          if (opt.enablemousewheel) {
            self.mousewheel(doc, self.onmousewheel);
          }

          if (opt.enablekeyboard) self.bind(doc, (cap.isopera) ? "keypress" : "keydown", self.onkeypress);

          if (cap.cantouch) {
            self.bind(doc, "touchstart", self.ontouchstart);
            self.bind(doc, "touchmove", self.ontouchmove);
          }
          else if (opt.emulatetouch) {
            self.bind(doc, "mousedown", self.ontouchstart);
            self.bind(doc, "mousemove", function (e) {
              return self.ontouchmove(e, true);
            });
            if (opt.grabcursorenabled && cap.cursorgrabvalue) self.css($(doc.body), {
              'cursor': cap.cursorgrabvalue
            });
          }

          self.bind(doc, "mouseup", self.ontouchend);

          if (self.zoom) {
            if (opt.dblclickzoom) self.bind(doc, 'dblclick', self.doZoom);
            if (self.ongesturezoom) self.bind(doc, "gestureend", self.ongesturezoom);
          }
        };

        if (this.doc[0].readyState && this.doc[0].readyState === "complete") {
          setTimeout(function () {
            oniframeload.call(self.doc[0], false);
          }, 500);
        }
        self.bind(this.doc, "load", oniframeload);

      }

    };

    this.showCursor = function (py, px) {
      if (self.cursortimeout) {
        clearTimeout(self.cursortimeout);
        self.cursortimeout = 0;
      }
      if (!self.rail) return;
      if (self.autohidedom) {
        self.autohidedom.stop().css({
          opacity: opt.cursoropacitymax
        });
        self.cursoractive = true;
      }

      if (!self.rail.drag || self.rail.drag.pt != 1) {
        if (py !== undefined && py !== false) {
          self.scroll.y = (py / self.scrollratio.y) | 0;
        }
        if (px !== undefined) {
          self.scroll.x = (px / self.scrollratio.x) | 0;
        }
      }

      self.cursor.css({
        height: self.cursorheight,
        top: self.scroll.y
      });
      if (self.cursorh) {
        var lx = (self.hasreversehr) ? self.scrollvaluemaxw - self.scroll.x : self.scroll.x;
        self.cursorh.css({
          width: self.cursorwidth,
          left: (!self.rail.align && self.rail.visibility) ? lx + self.rail.width : lx
        });
        self.cursoractive = true;
      }

      if (self.zoom) self.zoom.stop().css({
        opacity: opt.cursoropacitymax
      });
    };

    this.hideCursor = function (tm) {
      if (self.cursortimeout) return;
      if (!self.rail) return;
      if (!self.autohidedom) return;

      if (self.hasmousefocus && opt.autohidemode === "leave") return;
      self.cursortimeout = setTimeout(function () {
        if (!self.rail.active || !self.showonmouseevent) {
          self.autohidedom.stop().animate({
            opacity: opt.cursoropacitymin
          });
          if (self.zoom) self.zoom.stop().animate({
            opacity: opt.cursoropacitymin
          });
          self.cursoractive = false;
        }
        self.cursortimeout = 0;
      }, tm || opt.hidecursordelay);
    };

    this.noticeCursor = function (tm, py, px) {
      self.showCursor(py, px);
      if (!self.rail.active) self.hideCursor(tm);
    };

    this.getContentSize =
      (self.ispage) ?
        function () {
          return {
            w: Math.max(_doc.body.scrollWidth, _doc.documentElement.scrollWidth),
            h: Math.max(_doc.body.scrollHeight, _doc.documentElement.scrollHeight)
          };
        } : (self.haswrapper) ?
          function () {
            return {
              w: self.doc[0].offsetWidth,
              h: self.doc[0].offsetHeight
            };
          } : function () {
            return {
              w: self.docscroll[0].scrollWidth,
              h: self.docscroll[0].scrollHeight
            };
          };

    this.onResize = function (e, page) {

      if (!self || !self.win) return false;

      var premaxh = self.page.maxh,
          premaxw = self.page.maxw,
          previewh = self.view.h,
          previeww = self.view.w;

      self.view = {
        w: (self.ispage) ? self.win.width() : self.win[0].clientWidth,
        h: (self.ispage) ? self.win.height() : self.win[0].clientHeight
      };

      self.page = (page) ? page : self.getContentSize();

      self.page.maxh = Math.max(0, self.page.h - self.view.h);
      self.page.maxw = Math.max(0, self.page.w - self.view.w);

      if ((self.page.maxh == premaxh) && (self.page.maxw == premaxw) && (self.view.w == previeww) && (self.view.h == previewh)) {
        // test position        
        if (!self.ispage) {
          var pos = self.win.offset();
          if (self.lastposition) {
            var lst = self.lastposition;
            if ((lst.top == pos.top) && (lst.left == pos.left)) return self; //nothing to do            
          }
          self.lastposition = pos;
        } else {
          return self; //nothing to do
        }
      }

      if (self.page.maxh === 0) {
        self.hideRail();
        self.scrollvaluemax = 0;
        self.scroll.y = 0;
        self.scrollratio.y = 0;
        self.cursorheight = 0;
        self.setScrollTop(0);
        if (self.rail) self.rail.scrollable = false;
      } else {
        self.page.maxh -= (opt.railpadding.top + opt.railpadding.bottom);
        self.rail.scrollable = true;
      }

      if (self.page.maxw === 0) {
        self.hideRailHr();
        self.scrollvaluemaxw = 0;
        self.scroll.x = 0;
        self.scrollratio.x = 0;
        self.cursorwidth = 0;
        self.setScrollLeft(0);
        if (self.railh) {
          self.railh.scrollable = false;
        }
      } else {
        self.page.maxw -= (opt.railpadding.left + opt.railpadding.right);
        if (self.railh) self.railh.scrollable = (opt.horizrailenabled);
      }

      self.railslocked = (self.locked) || ((self.page.maxh === 0) && (self.page.maxw === 0));
      if (self.railslocked) {
        if (!self.ispage) self.updateScrollBar(self.view);
        return false;
      }

      if (!self.hidden) {
        if (!self.rail.visibility) self.showRail();
        if (self.railh && !self.railh.visibility) self.showRailHr();
      }

      if (self.istextarea && self.win.css('resize') && self.win.css('resize') != 'none') self.view.h -= 20;

      self.cursorheight = Math.min(self.view.h, Math.round(self.view.h * (self.view.h / self.page.h)));
      self.cursorheight = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorheight);

      self.cursorwidth = Math.min(self.view.w, Math.round(self.view.w * (self.view.w / self.page.w)));
      self.cursorwidth = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorwidth);

      self.scrollvaluemax = self.view.h - self.cursorheight - (opt.railpadding.top + opt.railpadding.bottom);
      if (!self.hasborderbox) self.scrollvaluemax -= self.cursor[0].offsetHeight - self.cursor[0].clientHeight;

      if (self.railh) {
        self.railh.width = (self.page.maxh > 0) ? (self.view.w - self.rail.width) : self.view.w;
        self.scrollvaluemaxw = self.railh.width - self.cursorwidth - (opt.railpadding.left + opt.railpadding.right);
      }

      if (!self.ispage) self.updateScrollBar(self.view);

      self.scrollratio = {
        x: (self.page.maxw / self.scrollvaluemaxw),
        y: (self.page.maxh / self.scrollvaluemax)
      };

      var sy = self.getScrollTop();
      if (sy > self.page.maxh) {
        self.doScrollTop(self.page.maxh);
      } else {
        self.scroll.y = (self.getScrollTop() / self.scrollratio.y) | 0;
        self.scroll.x = (self.getScrollLeft() / self.scrollratio.x) | 0;
        if (self.cursoractive) self.noticeCursor();
      }

      if (self.scroll.y && (self.getScrollTop() === 0)) self.doScrollTo((self.scroll.y * self.scrollratio.y)|0);

      return self;
    };

    this.resize = self.onResize;

    var hlazyresize = 0;

    this.onscreenresize = function(e) {
      clearTimeout(hlazyresize);

      var hiderails = (!self.ispage && !self.haswrapper);
      if (hiderails) self.hideRails();

      hlazyresize = setTimeout(function () {
        if (self) {
          if (hiderails) self.showRails();
          self.resize();
        }
        hlazyresize=0;
      }, 120);
    };

    this.lazyResize = function (tm) { // event debounce

      clearTimeout(hlazyresize);

      tm = isNaN(tm) ? 240 : tm;

      hlazyresize = setTimeout(function () {
        self && self.resize();
        hlazyresize=0;
      }, tm);

      return self;

    };

    // derived by MDN https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel
    function _modernWheelEvent(dom, name, fn, bubble) {
      self._bind(dom, name, function (e) {
        e = e || _win.event;
        var event = {
          original: e,
          target: e.target || e.srcElement,
          type: "wheel",
          deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: function () {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            return false;
          },
          stopImmediatePropagation: function () {
            (e.stopImmediatePropagation) ? e.stopImmediatePropagation() : e.cancelBubble = true;
          }
        };

        if (name == "mousewheel") {
          e.wheelDeltaX && (event.deltaX = -1 / 40 * e.wheelDeltaX);
          e.wheelDeltaY && (event.deltaY = -1 / 40 * e.wheelDeltaY);
          !event.deltaY && !event.deltaX && (event.deltaY = -1 / 40 * e.wheelDelta);
        } else {
          event.deltaY = e.detail;
        }

        return fn.call(dom, event);
      }, bubble);
    }



    this.jqbind = function (dom, name, fn) { // use jquery bind for non-native events (mouseenter/mouseleave)
      self.events.push({
        e: dom,
        n: name,
        f: fn,
        q: true
      });
      $(dom).on(name, fn);
    };

    this.mousewheel = function (dom, fn, bubble) { // bind mousewheel
      var el = ("jquery" in dom) ? dom[0] : dom;
      if ("onwheel" in _doc.createElement("div")) { // Modern browsers support "wheel"
        self._bind(el, "wheel", fn, bubble || false);
      } else {
        var wname = (_doc.onmousewheel !== undefined) ? "mousewheel" : "DOMMouseScroll"; // older Webkit+IE support or older Firefox          
        _modernWheelEvent(el, wname, fn, bubble || false);
        if (wname == "DOMMouseScroll") _modernWheelEvent(el, "MozMousePixelScroll", fn, bubble || false); // Firefox legacy
      }
    };

    var passiveSupported = false;

    if (cap.haseventlistener) {  // W3C standard event model

      // thanks to https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
      try { var options = Object.defineProperty({}, "passive", { get: function () { passiveSupported = !0; } }); _win.addEventListener("test", null, options); } catch (err) { }

      this.stopPropagation = function (e) {
        if (!e) return false;
        e = (e.original) ? e.original : e;
        e.stopPropagation();
        return false;
      };

      this.cancelEvent = function(e) {
        if (e.cancelable) e.preventDefault();
        e.stopImmediatePropagation();
        if (e.preventManipulation) e.preventManipulation();  // IE10+
        return false;
      };      

    } else {

      // inspired from https://gist.github.com/jonathantneal/2415137      

      Event.prototype.preventDefault = function () {
        this.returnValue = false;
      };

      Event.prototype.stopPropagation = function () {
        this.cancelBubble = true;
      };

      _win.constructor.prototype.addEventListener = _doc.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (type, listener, useCapture) {
        this.attachEvent("on" + type, listener);
      };
      _win.constructor.prototype.removeEventListener = _doc.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (type, listener, useCapture) {
        this.detachEvent("on" + type, listener);
      };

      // Thanks to http://www.switchonthecode.com !!
      this.cancelEvent = function (e) {
        e = e || _win.event;
        if (e) {          
          e.cancelBubble = true;
          e.cancel = true;
          e.returnValue = false;
        }  
        return false;
      };

      this.stopPropagation = function (e) {
        e = e || _win.event;
        if (e) e.cancelBubble = true;
        return false;
      };

    }

    this.delegate = function (dom, name, fn, bubble, active) {

      var de = delegatevents[name] || false;

      if (!de) {

        de = {
          a: [],
          l: [],
          f: function (e) {
            var lst = de.l, l = lst.length - 1;
            var r = false;
            for (var a = l; a >= 0; a--) {
              r = lst[a].call(e.target, e);
              if (r === false) return false;
            }
            return r;
          }
        };

        self.bind(dom, name, de.f, bubble, active);

        delegatevents[name] = de;

      }

      if (self.ispage) {
        de.a = [self.id].concat(de.a);
        de.l = [fn].concat(de.l);
      } else {
        de.a.push(self.id);
        de.l.push(fn);        
      }

    };

    this.undelegate = function (dom, name, fn, bubble, active) {
      var de = delegatevents[name]||false;
      if (de&&de.l) {  // quick fix #683
        for (var a=0,l=de.l.length;a<l;a++) {
          if (de.a[a] === self.id) {
            de.a.splice(a);
            de.l.splice(a);
            if (de.a.length===0) {
              self._unbind(dom,name,de.l.f);
              delegatevents[name] = null;
            }
          }
        }
      }
    };

    this.bind = function (dom, name, fn, bubble, active) {
      var el = ("jquery" in dom) ? dom[0] : dom;
      self._bind(el, name, fn, bubble || false, active || false);
    };

    this._bind = function (el, name, fn, bubble, active) { // primitive bind

      self.events.push({
        e: el,
        n: name,
        f: fn,
        b: bubble,
        q: false
      });

      (passiveSupported && active) ? el.addEventListener(name, fn, { passive: false, capture: bubble }) : el.addEventListener(name, fn, bubble || false);
    };

    this._unbind = function (el, name, fn, bub) { // primitive unbind
      if (delegatevents[name]) self.undelegate(el, name, fn, bub);
      else el.removeEventListener(name, fn, bub);
    };

    this.unbindAll = function () {
      for (var a = 0; a < self.events.length; a++) {
        var r = self.events[a];
        (r.q) ? r.e.unbind(r.n, r.f) : self._unbind(r.e, r.n, r.f, r.b);
      }
    };

    this.showRails = function () {
      return self.showRail().showRailHr();
    };

    this.showRail = function () {
      if ((self.page.maxh !== 0) && (self.ispage || self.win.css('display') != 'none')) {
        //self.visibility = true;
        self.rail.visibility = true;
        self.rail.css('display', 'block');
      }
      return self;
    };

    this.showRailHr = function () {
      if (self.railh) {
        if ((self.page.maxw !== 0) && (self.ispage || self.win.css('display') != 'none')) {
          self.railh.visibility = true;
          self.railh.css('display', 'block');
        }
      }
      return self;
    };

    this.hideRails = function () {
      return self.hideRail().hideRailHr();
    };

    this.hideRail = function () {
      //self.visibility = false;
      self.rail.visibility = false;
      self.rail.css('display', 'none');
      return self;
    };

    this.hideRailHr = function () {
      if (self.railh) {
        self.railh.visibility = false;
        self.railh.css('display', 'none');
      }
      return self;
    };

    this.show = function () {
      self.hidden = false;
      self.railslocked = false;
      return self.showRails();
    };

    this.hide = function () {
      self.hidden = true;
      self.railslocked = true;
      return self.hideRails();
    };

    this.toggle = function () {
      return (self.hidden) ? self.show() : self.hide();
    };

    this.remove = function () {
      self.stop();
      if (self.cursortimeout) clearTimeout(self.cursortimeout);
      for (var n in self.delaylist) if (self.delaylist[n]) clearAnimationFrame(self.delaylist[n].h);
      self.doZoomOut();
      self.unbindAll();

      if (cap.isie9) self.win[0].detachEvent("onpropertychange", self.onAttributeChange); //IE9 DOMAttrModified bug

      if (self.observer !== false) self.observer.disconnect();
      if (self.observerremover !== false) self.observerremover.disconnect();
      if (self.observerbody !== false) self.observerbody.disconnect();

      self.events = null;

      if (self.cursor) {
        self.cursor.remove();
      }
      if (self.cursorh) {
        self.cursorh.remove();
      }
      if (self.rail) {
        self.rail.remove();
      }
      if (self.railh) {
        self.railh.remove();
      }
      if (self.zoom) {
        self.zoom.remove();
      }
      for (var a = 0; a < self.saved.css.length; a++) {
        var d = self.saved.css[a];
        d[0].css(d[1], (d[2] === undefined) ? '' : d[2]);
      }
      self.saved = false;
      self.me.data('__nicescroll', ''); //erase all traces

      // memory leak fixed by GianlucaGuarini - thanks a lot!
      // remove the current nicescroll from the $.nicescroll array & normalize array
      var lst = $.nicescroll;
      lst.each(function (i) {
        if (!this) return;
        if (this.id === self.id) {
          delete lst[i];
          for (var b = ++i; b < lst.length; b++ , i++) lst[i] = lst[b];
          lst.length--;
          if (lst.length) delete lst[lst.length];
        }
      });

      for (var i in self) {
        self[i] = null;
        delete self[i];
      }

      self = null;

    };

    this.scrollstart = function (fn) {
      this.onscrollstart = fn;
      return self;
    };
    this.scrollend = function (fn) {
      this.onscrollend = fn;
      return self;
    };
    this.scrollcancel = function (fn) {
      this.onscrollcancel = fn;
      return self;
    };

    this.zoomin = function (fn) {
      this.onzoomin = fn;
      return self;
    };
    this.zoomout = function (fn) {
      this.onzoomout = fn;
      return self;
    };

    this.isScrollable = function (e) {
      var dom = (e.target) ? e.target : e;
      if (dom.nodeName == 'OPTION') return true;
      while (dom && (dom.nodeType == 1) && (dom !== this.me[0]) && !(/^BODY|HTML/.test(dom.nodeName))) {
        var dd = $(dom);
        var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
        if (/scroll|auto/.test(ov)) return (dom.clientHeight != dom.scrollHeight);
        dom = (dom.parentNode) ? dom.parentNode : false;
      }
      return false;
    };

    this.getViewport = function (me) {
      var dom = (me && me.parentNode) ? me.parentNode : false;
      while (dom && (dom.nodeType == 1) && !(/^BODY|HTML/.test(dom.nodeName))) {
        var dd = $(dom);
        if (/fixed|absolute/.test(dd.css("position"))) return dd;
        var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
        if ((/scroll|auto/.test(ov)) && (dom.clientHeight != dom.scrollHeight)) return dd;
        if (dd.getNiceScroll().length > 0) return dd;
        dom = (dom.parentNode) ? dom.parentNode : false;
      }
      return false;
    };

    this.triggerScrollStart = function (cx, cy, rx, ry, ms) {

      if (self.onscrollstart) {
        var info = {
          type: "scrollstart",
          current: {
            x: cx,
            y: cy
          },
          request: {
            x: rx,
            y: ry
          },
          end: {
            x: self.newscrollx,
            y: self.newscrolly
          },
          speed: ms
        };
        self.onscrollstart.call(self, info);
      }

    };

    this.triggerScrollEnd = function () {
      if (self.onscrollend) {

        var px = self.getScrollLeft();
        var py = self.getScrollTop();

        var info = {
          type: "scrollend",
          current: {
            x: px,
            y: py
          },
          end: {
            x: px,
            y: py
          }
        };

        self.onscrollend.call(self, info);

      }

    };

    var scrolldiry = 0, scrolldirx = 0, scrolltmr = 0, scrollspd = 1;

    function doScrollRelative(px, py, chkscroll, iswheel) {

      if (!self.scrollrunning) {
        self.newscrolly = self.getScrollTop();
        self.newscrollx = self.getScrollLeft();
        scrolltmr = now();
      }

      var gap = (now() - scrolltmr);
      scrolltmr = now();

      if (gap > 350) {
        scrollspd = 1;
      } else {
        scrollspd += (2 - scrollspd) / 10;
      }

      px = px * scrollspd | 0;
      py = py * scrollspd | 0;

      if (px) {

        if (iswheel) { // mouse-only
          if (px < 0) {  // fix apple magic mouse swipe back/forward
            if (self.getScrollLeft() >= self.page.maxw) return true;
          } else {
            if (self.getScrollLeft() <= 0) return true;
          }
        }

        var dx = px > 0 ? 1 : -1;

        if (scrolldirx !== dx) {
          if (self.scrollmom) self.scrollmom.stop();
          self.newscrollx = self.getScrollLeft();
          scrolldirx = dx;
        }

        self.lastdeltax -= px;

      }

      if (py) {

        var chk = (function () {
          var top = self.getScrollTop();
          if (py < 0) {
            if (top >= self.page.maxh) return true;
          } else {
            if (top <= 0) return true;
          }
        })();

        if (chk) {
          if (opt.nativeparentscrolling && chkscroll && !self.ispage && !self.zoomactive) return true;
          var ny = self.view.h >> 1;
          if (self.newscrolly < -ny) { self.newscrolly = -ny; py = -1; }
          else if (self.newscrolly > self.page.maxh + ny) { self.newscrolly = self.page.maxh + ny; py = 1; }
          else py = 0;
        }

        var dy = py > 0 ? 1 : -1;

        if (scrolldiry !== dy) {
          if (self.scrollmom) self.scrollmom.stop();
          self.newscrolly = self.getScrollTop();
          scrolldiry = dy;
        }

        self.lastdeltay -= py;

      }

      if (py || px) {
        self.synched("relativexy", function () {

          var dty = self.lastdeltay + self.newscrolly;
          self.lastdeltay = 0;

          var dtx = self.lastdeltax + self.newscrollx;
          self.lastdeltax = 0;

          if (!self.rail.drag) self.doScrollPos(dtx, dty);

        });
      }

    }

    var hasparentscrollingphase = false;

    function execScrollWheel(e, hr, chkscroll) {
      var px, py;

      if (!chkscroll && hasparentscrollingphase) return true;

      if (e.deltaMode === 0) { // PIXEL
        px = -(e.deltaX * (opt.mousescrollstep / (18 * 3))) | 0;
        py = -(e.deltaY * (opt.mousescrollstep / (18 * 3))) | 0;
      } else if (e.deltaMode === 1) { // LINE
        px = -(e.deltaX * opt.mousescrollstep * 50 / 80) | 0;
        py = -(e.deltaY * opt.mousescrollstep * 50 / 80) | 0;
      }

      if (hr && opt.oneaxismousemode && (px === 0) && py) { // classic vertical-only mousewheel + browser with x/y support 
        px = py;
        py = 0;

        if (chkscroll) {
          var hrend = (px < 0) ? (self.getScrollLeft() >= self.page.maxw) : (self.getScrollLeft() <= 0);
          if (hrend) {  // preserve vertical scrolling
            py = px;
            px = 0;
          }
        }

      }

      // invert horizontal direction for rtl mode
      if (self.isrtlmode) px = -px;

      var chk = doScrollRelative(px, py, chkscroll, true);

      if (chk) {
        if (chkscroll) hasparentscrollingphase = true;
      } else {
        hasparentscrollingphase = false;
        e.stopImmediatePropagation();
        return e.preventDefault();
      }

    }

    this.onmousewheel = function (e) {
      if (self.wheelprevented||self.locked) return false;
      if (self.railslocked) {
        self.debounced("checkunlock", self.resize, 250);
        return false;
      }
      if (self.rail.drag) return self.cancelEvent(e);

      if (opt.oneaxismousemode === "auto" && e.deltaX !== 0) opt.oneaxismousemode = false; // check two-axis mouse support (not very elegant)

      if (opt.oneaxismousemode && e.deltaX === 0) {
        if (!self.rail.scrollable) {
          if (self.railh && self.railh.scrollable) {
            return self.onmousewheelhr(e);
          } else {
            return true;
          }
        }
      }

      var nw = now();
      var chk = false;
      if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
        self.nativescrollingarea = self.isScrollable(e);
        chk = true;
      }
      self.checkarea = nw;
      if (self.nativescrollingarea) return true; // this isn't my business
      var ret = execScrollWheel(e, false, chk);
      if (ret) self.checkarea = 0;
      return ret;
    };

    this.onmousewheelhr = function (e) {
      if (self.wheelprevented) return;
      if (self.railslocked || !self.railh.scrollable) return true;
      if (self.rail.drag) return self.cancelEvent(e);

      var nw = now();
      var chk = false;
      if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
        self.nativescrollingarea = self.isScrollable(e);
        chk = true;
      }
      self.checkarea = nw;
      if (self.nativescrollingarea) return true; // this is not my business
      if (self.railslocked) return self.cancelEvent(e);

      return execScrollWheel(e, true, chk);
    };

    this.stop = function () {
      self.cancelScroll();
      if (self.scrollmon) self.scrollmon.stop();
      self.cursorfreezed = false;
      self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
      self.noticeCursor();
      return self;
    };

    this.getTransitionSpeed = function (dif) {

      return 80 + (dif / 72) * opt.scrollspeed |0;

    };

    if (!opt.smoothscroll) {
      this.doScrollLeft = function (x, spd) { //direct
        var y = self.getScrollTop();
        self.doScrollPos(x, y, spd);
      };
      this.doScrollTop = function (y, spd) { //direct
        var x = self.getScrollLeft();
        self.doScrollPos(x, y, spd);
      };
      this.doScrollPos = function (x, y, spd) { //direct
        var nx = (x > self.page.maxw) ? self.page.maxw : x;
        if (nx < 0) nx = 0;
        var ny = (y > self.page.maxh) ? self.page.maxh : y;
        if (ny < 0) ny = 0;
        self.synched('scroll', function () {
          self.setScrollTop(ny);
          self.setScrollLeft(nx);
        });
      };
      this.cancelScroll = function () { }; // direct

    } else if (self.ishwscroll && cap.hastransition && opt.usetransition && !!opt.smoothscroll) {

      var lasttransitionstyle = '';

      this.resetTransition = function () {
        lasttransitionstyle = '';
        self.doc.css(cap.prefixstyle + 'transition-duration', '0ms');
      };

      this.prepareTransition = function (dif, istime) {
        var ex = (istime) ? dif : self.getTransitionSpeed(dif);
        var trans = ex + 'ms';
        if (lasttransitionstyle !== trans) {
          lasttransitionstyle = trans;
          self.doc.css(cap.prefixstyle + 'transition-duration', trans);
        }
        return ex;
      };

      this.doScrollLeft = function (x, spd) { //trans
        var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
        self.doScrollPos(x, y, spd);
      };

      this.doScrollTop = function (y, spd) { //trans
        var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
        self.doScrollPos(x, y, spd);
      };

      this.cursorupdate = {
        running: false,
        start: function () {
          var m = this;

          if (m.running) return;
          m.running = true;

          var loop = function () {
            if (m.running) setAnimationFrame(loop);
            self.showCursor(self.getScrollTop(), self.getScrollLeft());
            self.notifyScrollEvent(self.win[0]);
          };

          setAnimationFrame(loop);
        },
        stop: function () {
          this.running = false;
        }
      };

      this.doScrollPos = function (x, y, spd) { //trans

        var py = self.getScrollTop();
        var px = self.getScrollLeft();

        if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll(); //inverted movement detection      

        if (!opt.bouncescroll) {
          if (y < 0) y = 0;
          else if (y > self.page.maxh) y = self.page.maxh;
          if (x < 0) x = 0;
          else if (x > self.page.maxw) x = self.page.maxw;
        } else {
          if (y < 0) y = y / 2 | 0;
          else if (y > self.page.maxh) y = self.page.maxh + (y - self.page.maxh) / 2 | 0;
          if (x < 0) x = x / 2 | 0;
          else if (x > self.page.maxw) x = self.page.maxw + (x - self.page.maxw) / 2 | 0;
        }

        if (self.scrollrunning && x == self.newscrollx && y == self.newscrolly) return false;

        self.newscrolly = y;
        self.newscrollx = x;

        var top = self.getScrollTop();
        var lft = self.getScrollLeft();

        var dst = {};
        dst.x = x - lft;
        dst.y = y - top;

        var dd = Math.sqrt((dst.x * dst.x) + (dst.y * dst.y)) | 0;

        var ms = self.prepareTransition(dd);

        if (!self.scrollrunning) {
          self.scrollrunning = true;
          self.triggerScrollStart(lft, top, x, y, ms);
          self.cursorupdate.start();
        }

        self.scrollendtrapped = true;

        if (!cap.transitionend) {
          if (self.scrollendtrapped) clearTimeout(self.scrollendtrapped);
          self.scrollendtrapped = setTimeout(self.onScrollTransitionEnd, ms); // simulate transitionend event
        }

        self.setScrollTop(self.newscrolly);
        self.setScrollLeft(self.newscrollx);

      };

      this.cancelScroll = function () {
        if (!self.scrollendtrapped) return true;
        var py = self.getScrollTop();
        var px = self.getScrollLeft();
        self.scrollrunning = false;
        if (!cap.transitionend) clearTimeout(cap.transitionend);
        self.scrollendtrapped = false;
        self.resetTransition();
        self.setScrollTop(py); // fire event onscroll
        if (self.railh) self.setScrollLeft(px);
        if (self.timerscroll && self.timerscroll.tm) clearInterval(self.timerscroll.tm);
        self.timerscroll = false;

        self.cursorfreezed = false;

        self.cursorupdate.stop();
        self.showCursor(py, px);
        return self;
      };

      this.onScrollTransitionEnd = function () {

        if (!self.scrollendtrapped) return;

        var py = self.getScrollTop();
        var px = self.getScrollLeft();

        if (py < 0) py = 0;
        else if (py > self.page.maxh) py = self.page.maxh;
        if (px < 0) px = 0;
        else if (px > self.page.maxw) px = self.page.maxw;
        if ((py != self.newscrolly) || (px != self.newscrollx)) return self.doScrollPos(px, py, opt.snapbackspeed);

        if (self.scrollrunning) self.triggerScrollEnd();
        self.scrollrunning = false;

        self.scrollendtrapped = false;
        self.resetTransition();
        self.timerscroll = false;
        self.setScrollTop(py); // fire event onscroll        
        if (self.railh) self.setScrollLeft(px); // fire event onscroll left

        self.cursorupdate.stop();
        self.noticeCursor(false, py, px);

        self.cursorfreezed = false;

      };

    } else {

      this.doScrollLeft = function (x, spd) { //no-trans
        var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
        self.doScrollPos(x, y, spd);
      };

      this.doScrollTop = function (y, spd) { //no-trans
        var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
        self.doScrollPos(x, y, spd);
      };

      this.doScrollPos = function (x, y, spd) { //no-trans

        var py = self.getScrollTop();
        var px = self.getScrollLeft();

        if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll(); //inverted movement detection

        var clipped = false;

        if (!self.bouncescroll || !self.rail.visibility) {
          if (y < 0) {
            y = 0;
            clipped = true;
          } else if (y > self.page.maxh) {
            y = self.page.maxh;
            clipped = true;
          }
        }
        if (!self.bouncescroll || !self.railh.visibility) {
          if (x < 0) {
            x = 0;
            clipped = true;
          } else if (x > self.page.maxw) {
            x = self.page.maxw;
            clipped = true;
          }
        }

        if (self.scrollrunning && (self.newscrolly === y) && (self.newscrollx === x)) return true;

        self.newscrolly = y;
        self.newscrollx = x;

        self.dst = {};
        self.dst.x = x - px;
        self.dst.y = y - py;
        self.dst.px = px;
        self.dst.py = py;

        var dd = Math.sqrt((self.dst.x * self.dst.x) + (self.dst.y * self.dst.y)) | 0;
        var ms = self.getTransitionSpeed(dd);

        self.bzscroll = {};

        var p3 = (clipped) ? 1 : 0.58;
        self.bzscroll.x = new BezierClass(px, self.newscrollx, ms, 0, 0, p3, 1);
        self.bzscroll.y = new BezierClass(py, self.newscrolly, ms, 0, 0, p3, 1);

        var loopid = now();

        var loop = function () {

          if (!self.scrollrunning) return;
          var x = self.bzscroll.y.getPos();

          self.setScrollLeft(self.bzscroll.x.getNow());
          self.setScrollTop(self.bzscroll.y.getNow());

          if (x <= 1) {
            self.timer = setAnimationFrame(loop);
          } else {
            self.scrollrunning = false;
            self.timer = 0;
            self.triggerScrollEnd();
          }

        };

        if (!self.scrollrunning) {
          self.triggerScrollStart(px, py, x, y, ms);
          self.scrollrunning = true;
          self.timer = setAnimationFrame(loop);
        }

      };

      this.cancelScroll = function () {
        if (self.timer) clearAnimationFrame(self.timer);
        self.timer = 0;
        self.bzscroll = false;
        self.scrollrunning = false;
        return self;
      };

    }

    this.doScrollBy = function (stp, relative) {
      doScrollRelative(0, stp);
    };

    this.doScrollLeftBy = function (stp, relative) {
      doScrollRelative(stp, 0);
    };

    this.doScrollTo = function (pos, relative) {
      var ny = (relative) ? Math.round(pos * self.scrollratio.y) : pos;
      if (ny < 0) ny = 0;
      else if (ny > self.page.maxh) ny = self.page.maxh;
      self.cursorfreezed = false;
      self.doScrollTop(pos);
    };

    this.checkContentSize = function () {
      var pg = self.getContentSize();
      if ((pg.h != self.page.h) || (pg.w != self.page.w)) self.resize(false, pg);
    };

    self.onscroll = function (e) {
      if (self.rail.drag) return;
      if (!self.cursorfreezed) {
        self.synched('scroll', function () {
          self.scroll.y = Math.round(self.getScrollTop() / self.scrollratio.y);
          if (self.railh) self.scroll.x = Math.round(self.getScrollLeft() / self.scrollratio.x);
          self.noticeCursor();
        });
      }
    };
    self.bind(self.docscroll, "scroll", self.onscroll);

    this.doZoomIn = function (e) {
      if (self.zoomactive) return;
      self.zoomactive = true;

      self.zoomrestore = {
        style: {}
      };
      var lst = ['position', 'top', 'left', 'zIndex', 'backgroundColor', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight'];
      var win = self.win[0].style;
      for (var a in lst) {
        var pp = lst[a];
        self.zoomrestore.style[pp] = (win[pp] !== undefined) ? win[pp] : '';
      }

      self.zoomrestore.style.width = self.win.css('width');
      self.zoomrestore.style.height = self.win.css('height');

      self.zoomrestore.padding = {
        w: self.win.outerWidth() - self.win.width(),
        h: self.win.outerHeight() - self.win.height()
      };

      if (cap.isios4) {
        self.zoomrestore.scrollTop = $window.scrollTop();
        $window.scrollTop(0);
      }

      self.win.css({
        position: (cap.isios4) ? "absolute" : "fixed",
        top: 0,
        left: 0,
        zIndex: globalmaxzindex + 100,
        margin: 0
      });
      var bkg = self.win.css("backgroundColor");
      if ("" === bkg || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) self.win.css("backgroundColor", "#fff");
      self.rail.css({
        zIndex: globalmaxzindex + 101
      });
      self.zoom.css({
        zIndex: globalmaxzindex + 102
      });
      self.zoom.css('backgroundPosition', '0 -18px');
      self.resizeZoom();

      if (self.onzoomin) self.onzoomin.call(self);

      return self.cancelEvent(e);
    };

    this.doZoomOut = function (e) {
      if (!self.zoomactive) return;
      self.zoomactive = false;

      self.win.css("margin", "");
      self.win.css(self.zoomrestore.style);

      if (cap.isios4) {
        $window.scrollTop(self.zoomrestore.scrollTop);
      }

      self.rail.css({
        "z-index": self.zindex
      });
      self.zoom.css({
        "z-index": self.zindex
      });
      self.zoomrestore = false;
      self.zoom.css('backgroundPosition', '0 0');
      self.onResize();

      if (self.onzoomout) self.onzoomout.call(self);

      return self.cancelEvent(e);
    };

    this.doZoom = function (e) {
      return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e);
    };

    this.resizeZoom = function () {
      if (!self.zoomactive) return;

      var py = self.getScrollTop(); //preserve scrolling position
      self.win.css({
        width: $window.width() - self.zoomrestore.padding.w + "px",
        height: $window.height() - self.zoomrestore.padding.h + "px"
      });
      self.onResize();

      self.setScrollTop(Math.min(self.page.maxh, py));
    };

    this.init();

    $.nicescroll.push(this);

  };

  // Inspired by the work of Kin Blas
  // http://webpro.host.adobe.com/people/jblas/momentum/includes/jquery.momentum.0.7.js  
  var ScrollMomentumClass2D = function (nc) {
    var self = this;
    this.nc = nc;

    this.lastx = 0;
    this.lasty = 0;
    this.speedx = 0;
    this.speedy = 0;
    this.lasttime = 0;
    this.steptime = 0;
    this.snapx = false;
    this.snapy = false;
    this.demulx = 0;
    this.demuly = 0;

    this.lastscrollx = -1;
    this.lastscrolly = -1;

    this.chkx = 0;
    this.chky = 0;

    this.timer = 0;

    this.reset = function (px, py) {
      self.stop();
      self.steptime = 0;
      self.lasttime = now();
      self.speedx = 0;
      self.speedy = 0;
      self.lastx = px;
      self.lasty = py;
      self.lastscrollx = -1;
      self.lastscrolly = -1;
    };

    this.update = function (px, py) {
      var tm = now();
      self.steptime = tm - self.lasttime;
      self.lasttime = tm;
      var dy = py - self.lasty;
      var dx = px - self.lastx;
      var sy = self.nc.getScrollTop();
      var sx = self.nc.getScrollLeft();
      var newy = sy + dy;
      var newx = sx + dx;
      self.snapx = (newx < 0) || (newx > self.nc.page.maxw);
      self.snapy = (newy < 0) || (newy > self.nc.page.maxh);
      self.speedx = dx;
      self.speedy = dy;
      self.lastx = px;
      self.lasty = py;
    };

    this.stop = function () {
      self.nc.unsynched("domomentum2d");
      if (self.timer) clearTimeout(self.timer);
      self.timer = 0;
      self.lastscrollx = -1;
      self.lastscrolly = -1;
    };

    this.doSnapy = function (nx, ny) {
      var snap = false;

      if (ny < 0) {
        ny = 0;
        snap = true;
      } else if (ny > self.nc.page.maxh) {
        ny = self.nc.page.maxh;
        snap = true;
      }

      if (nx < 0) {
        nx = 0;
        snap = true;
      } else if (nx > self.nc.page.maxw) {
        nx = self.nc.page.maxw;
        snap = true;
      }

      (snap) ? self.nc.doScrollPos(nx, ny, self.nc.opt.snapbackspeed) : self.nc.triggerScrollEnd();
    };

    this.doMomentum = function (gp) {
      var t = now();
      var l = (gp) ? t + gp : self.lasttime;

      var sl = self.nc.getScrollLeft();
      var st = self.nc.getScrollTop();

      var pageh = self.nc.page.maxh;
      var pagew = self.nc.page.maxw;

      self.speedx = (pagew > 0) ? Math.min(60, self.speedx) : 0;
      self.speedy = (pageh > 0) ? Math.min(60, self.speedy) : 0;

      var chk = l && (t - l) <= 60;

      if ((st < 0) || (st > pageh) || (sl < 0) || (sl > pagew)) chk = false;

      var sy = (self.speedy && chk) ? self.speedy : false;
      var sx = (self.speedx && chk) ? self.speedx : false;

      if (sy || sx) {
        var tm = Math.max(16, self.steptime); //timeout granularity

        if (tm > 50) { // do smooth
          var xm = tm / 50;
          self.speedx *= xm;
          self.speedy *= xm;
          tm = 50;
        }

        self.demulxy = 0;

        self.lastscrollx = self.nc.getScrollLeft();
        self.chkx = self.lastscrollx;
        self.lastscrolly = self.nc.getScrollTop();
        self.chky = self.lastscrolly;

        var nx = self.lastscrollx;
        var ny = self.lastscrolly;

        var onscroll = function () {
          var df = ((now() - t) > 600) ? 0.04 : 0.02;

          if (self.speedx) {
            nx = Math.floor(self.lastscrollx - (self.speedx * (1 - self.demulxy)));
            self.lastscrollx = nx;
            if ((nx < 0) || (nx > pagew)) df = 0.10;
          }

          if (self.speedy) {
            ny = Math.floor(self.lastscrolly - (self.speedy * (1 - self.demulxy)));
            self.lastscrolly = ny;
            if ((ny < 0) || (ny > pageh)) df = 0.10;
          }

          self.demulxy = Math.min(1, self.demulxy + df);

          self.nc.synched("domomentum2d", function () {

            if (self.speedx) {
              var scx = self.nc.getScrollLeft();
              //              if (scx != self.chkx) self.stop();
              self.chkx = nx;
              self.nc.setScrollLeft(nx);
            }

            if (self.speedy) {
              var scy = self.nc.getScrollTop();
              //              if (scy != self.chky) self.stop();
              self.chky = ny;
              self.nc.setScrollTop(ny);
            }

            if (!self.timer) {
              self.nc.hideCursor();
              self.doSnapy(nx, ny);
            }

          });

          if (self.demulxy < 1) {
            self.timer = setTimeout(onscroll, tm);
          } else {
            self.stop();
            self.nc.hideCursor();
            self.doSnapy(nx, ny);
          }
        };

        onscroll();

      } else {
        self.doSnapy(self.nc.getScrollLeft(), self.nc.getScrollTop());
      }

    };

  };


  // override jQuery scrollTop
  var _scrollTop = jQuery.fn.scrollTop; // preserve original function

  jQuery.cssHooks.pageYOffset = {
    get: function (elem, computed, extra) {
      var nice = $.data(elem, '__nicescroll') || false;
      return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem);
    },
    set: function (elem, value) {
      var nice = $.data(elem, '__nicescroll') || false;
      (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call(elem, value);
      return this;
    }
  };

  jQuery.fn.scrollTop = function (value) {
    if (value === undefined) {
      var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
      return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this);
    } else {
      return this.each(function () {
        var nice = $.data(this, '__nicescroll') || false;
        (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call($(this), value);
      });
    }
  };

  // override jQuery scrollLeft
  var _scrollLeft = jQuery.fn.scrollLeft; // preserve original function

  $.cssHooks.pageXOffset = {
    get: function (elem, computed, extra) {
      var nice = $.data(elem, '__nicescroll') || false;
      return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem);
    },
    set: function (elem, value) {
      var nice = $.data(elem, '__nicescroll') || false;
      (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call(elem, value);
      return this;
    }
  };

  jQuery.fn.scrollLeft = function (value) {
    if (value === undefined) {
      var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
      return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this);
    } else {
      return this.each(function () {
        var nice = $.data(this, '__nicescroll') || false;
        (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call($(this), value);
      });
    }
  };

  var NiceScrollArray = function (doms) {
    var self = this;
    this.length = 0;
    this.name = "nicescrollarray";

    this.each = function (fn) {
      $.each(self, fn);
      return self;
    };

    this.push = function (nice) {
      self[self.length] = nice;
      self.length++;
    };

    this.eq = function (idx) {
      return self[idx];
    };

    if (doms) {
      for (var a = 0; a < doms.length; a++) {
        var nice = $.data(doms[a], '__nicescroll') || false;
        if (nice) {
          this[this.length] = nice;
          this.length++;
        }
      }
    }

    return this;
  };

  function mplex(el, lst, fn) {
    for (var a = 0, l = lst.length; a < l; a++) fn(el, lst[a]);
  }
  mplex(
    NiceScrollArray.prototype, ['show', 'hide', 'toggle', 'onResize', 'resize', 'remove', 'stop', 'doScrollPos'],
    function (e, n) {
      e[n] = function () {
        var args = arguments;
        return this.each(function () {
          this[n].apply(this, args);
        });
      };
    }
  );

  jQuery.fn.getNiceScroll = function (index) {
    if (index === undefined) {
      return new NiceScrollArray(this);
    } else {
      return this[index] && $.data(this[index], '__nicescroll') || false;
    }
  };

  var pseudos = jQuery.expr.pseudos || jQuery.expr[':'];  // jQuery 3 migration
  pseudos.nicescroll = function (a) {
    return $.data(a, '__nicescroll') !== undefined;
  };

  $.fn.niceScroll = function (wrapper, _opt) {
    if (_opt === undefined && typeof wrapper == "object" && !("jquery" in wrapper)) {
      _opt = wrapper;
      wrapper = false;
    }

    var ret = new NiceScrollArray();

    this.each(function () {
      var $this = $(this);

      var opt = $.extend({}, _opt); // cloning

      if (wrapper || false) {
        var wrp = $(wrapper);
        opt.doc = (wrp.length > 1) ? $(wrapper, $this) : wrp;
        opt.win = $this;
      }
      var docundef = !("doc" in opt);
      if (!docundef && !("win" in opt)) opt.win = $this;

      var nice = $this.data('__nicescroll') || false;
      if (!nice) {
        opt.doc = opt.doc || $this;
        nice = new NiceScrollClass(opt, $this);
        $this.data('__nicescroll', nice);
      }
      ret.push(nice);
    });

    return (ret.length === 1) ? ret[0] : ret;
  };

  _win.NiceScroll = {
    getjQuery: function () {
      return jQuery;
    }
  };

  if (!$.nicescroll) {
    $.nicescroll = new NiceScrollArray();
    $.nicescroll.options = _globaloptions;
  }

}));;
'use strict';

/**
* @version 1.3.2
* @author Marius Hansen <marius.o.hansen@gmail.com>
* @license MIT
* @description Easy parallax plugin using pure javascript. Cross browser support, including mobile platforms. Based on goodparallax
* @copyright © Marius Hansen 2019
*/

var windowHeight = window.innerHeight,
    windowHeightExtra = 0;
var safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    mobile = /Mobi/.test(navigator.userAgent);

// check if safari - extend height
if (safari && !mobile) {
	windowHeightExtra = window.outerHeight - window.innerHeight;
}

if (mobile) {
	windowHeight = window.screen.availHeight; // stops from jumping
	windowHeightExtra = (window.screen.availHeight - window.innerHeight) / 2; // prevents white spaces
}

// position parallax
var positionParallax = function positionParallax(container, speed, parallax, elem) {
	var bgScroll = container.top / speed - windowHeightExtra;
	parallax[elem].style.top = bgScroll + 'px';
};

// animate parallax
var animateParallax = function animateParallax(parallax, speed) {
	for (var i = 0; parallax.length > i; i++) {
		var container = parallax[i].parentElement.parentElement.getBoundingClientRect();

		// only animate if on screen
		if (container.top + container.height >= 0 && container.top <= windowHeight) {
			positionParallax(container, speed, parallax, i);
		}
	}
};

// determine height
var calculateHeight = function calculateHeight(parallax, speed) {
	for (var i = 0; parallax.length > i; i++) {
		var container = parallax[i].parentElement.parentElement.getBoundingClientRect();
		var containerTop = parallax[i].parentElement.parentElement.offsetTop;
		var elemOffsetTop = (windowHeight - container.height) / 2;

		// set bgHeight & check if it needs to stretch beyond container bottom
		var bgHeight = windowHeight > container.height + containerTop ? container.height + containerTop - containerTop / speed : container.height + (elemOffsetTop - elemOffsetTop / speed) * 2;

		parallax[i].style.height = bgHeight + windowHeightExtra * 2 + 'px';
		positionParallax(container, speed, parallax, i);
	}
};

var universalParallax = function universalParallax() {
	var up = function up(parallax, speed) {

		// check that speed is not a negative number
		if (speed < 1) {
			speed = 1;
		}

		// set height on elements
		calculateHeight(parallax, speed);

		// recalculate height on resize
		if (!mobile) {
			window.addEventListener('resize', function () {
				windowHeight = window.innerHeight;
				calculateHeight(parallax, speed);
			});
		}

		// Add scroll event listener
		window.addEventListener('scroll', function () {
			animateParallax(parallax, speed);
		});
	};

	// Ready all elements
	this.init = function (param) {
		if (typeof param === 'undefined') {
			param = {};
		}

		param = {
			speed: typeof param.speed !== 'undefined' ? param.speed : 1.5,
			className: typeof param.className !== 'undefined' ? param.className : 'parallax'
		};
		var parallax = document.getElementsByClassName(param.className);

		for (var i = 0; parallax.length > i; i++) {
			// make container div
			var wrapper = document.createElement('div');
			parallax[i].parentNode.insertBefore(wrapper, parallax[i]);
			wrapper.appendChild(parallax[i]);
			var parallaxContainer = parallax[i].parentElement;
			parallaxContainer.className += 'parallax__container';

			// parent elem need position: relative for effect to work - if not already defined, add it
			if (window.getComputedStyle(parallaxContainer.parentElement, null).getPropertyValue('position') !== 'relative') {
				parallaxContainer.parentElement.style.position = 'relative';
			}

			var imgData = parallax[i].dataset.parallaxImage;
			// add image to div if none is specified
			if (typeof imgData !== 'undefined') {
				parallax[i].style.backgroundImage = 'url(' + imgData + ')';
				// if no other class than .parallax is specified, add CSS
				if (parallax[i].classList.length === 1 && parallax[i].classList[0] === 'parallax') {
					parallax[i].style.backgroundRepeat = 'no-repeat';
					parallax[i].style.backgroundPosition = 'center';
					parallax[i].style.backgroundSize = 'cover';
				}
			}
		};

		// when page is loaded && init completed -> run function
		document.addEventListener('readystatechange', function (event) {
			if (event.target.readyState === 'complete') {
				up(parallax, param.speed);
			}
		});
	};
};
;
/*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2020 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.4-beta.32
 */
!function webpackUniversalModuleDefinition(root,factory){if("object"==typeof exports&&"object"==typeof module)module.exports=factory();else if("function"==typeof define&&define.amd)define([],factory);else{var a=factory();for(var i in a)("object"==typeof exports?exports:root)[i]=a[i]}}(window,function(){return modules=[function(module){module.exports=JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}')},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var $=__webpack_require__(3),window=__webpack_require__(2),document=window.document,generateMaskSet=__webpack_require__(4).generateMaskSet,analyseMask=__webpack_require__(4).analyseMask,maskScope=__webpack_require__(8);function Inputmask(alias,options,internal){if(!(this instanceof Inputmask))return new Inputmask(alias,options,internal);this.el=void 0,this.events={},this.maskset=void 0,!0!==internal&&($.isPlainObject(alias)?options=alias:(options=options||{},alias&&(options.alias=alias)),this.opts=$.extend(!0,{},this.defaults,options),this.noMasksCache=options&&void 0!==options.definitions,this.userOptions=options||{},resolveAlias(this.opts.alias,options,this.opts),this.isRTL=this.opts.numericInput),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipKeyPressEvent=!1,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.originalPlaceholder=void 0}function resolveAlias(aliasStr,options,opts){var aliasDefinition=Inputmask.prototype.aliases[aliasStr];return aliasDefinition?(aliasDefinition.alias&&resolveAlias(aliasDefinition.alias,void 0,opts),$.extend(!0,opts,aliasDefinition),$.extend(!0,opts,options),!0):(null===opts.mask&&(opts.mask=aliasStr),!1)}function importAttributeOptions(npt,opts,userOptions,dataAttribute){function importOption(option,optionData){var attrOption=""===dataAttribute?option:dataAttribute+"-"+option;optionData=void 0!==optionData?optionData:npt.getAttribute(attrOption),null!==optionData&&("string"==typeof optionData&&(0===option.indexOf("on")?optionData=window[optionData]:"false"===optionData?optionData=!1:"true"===optionData&&(optionData=!0)),userOptions[option]=optionData)}if(!0===opts.importDataAttributes){var attrOptions=npt.getAttribute(dataAttribute),option,dataoptions,optionData,p;if(attrOptions&&""!==attrOptions&&(attrOptions=attrOptions.replace(/'/g,'"'),dataoptions=JSON.parse("{"+attrOptions+"}")),dataoptions)for(p in optionData=void 0,dataoptions)if("alias"===p.toLowerCase()){optionData=dataoptions[p];break}for(option in importOption("alias",optionData),userOptions.alias&&resolveAlias(userOptions.alias,userOptions,opts),opts){if(dataoptions)for(p in optionData=void 0,dataoptions)if(p.toLowerCase()===option.toLowerCase()){optionData=dataoptions[p];break}importOption(option,optionData)}}return $.extend(!0,opts,userOptions),"rtl"!==npt.dir&&!opts.rightAlign||(npt.style.textAlign="right"),"rtl"!==npt.dir&&!opts.numericInput||(npt.dir="ltr",npt.removeAttribute("dir"),opts.isRTL=!0),Object.keys(userOptions).length}Inputmask.prototype={dataAttribute:"data-inputmask",defaults:{_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:$.noop,onincomplete:$.noop,oncleared:$.noop,repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:$.noop,onBeforeMask:null,onBeforePaste:function onBeforePaste(pastedValue,opts){return $.isFunction(opts.onBeforeMask)?opts.onBeforeMask.call(this,pastedValue,opts):pastedValue},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:$.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[8,9,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0},definitions:{9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}},aliases:{},masksCache:{},mask:function mask(elems){var that=this;return"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){var scopedOpts=$.extend(!0,{},that.opts);if(importAttributeOptions(el,scopedOpts,$.extend(!0,{},that.userOptions),that.dataAttribute)){var maskset=generateMaskSet(scopedOpts,that.noMasksCache);void 0!==maskset&&(void 0!==el.inputmask&&(el.inputmask.opts.autoUnmask=!0,el.inputmask.remove()),el.inputmask=new Inputmask(void 0,void 0,!0),el.inputmask.opts=scopedOpts,el.inputmask.noMasksCache=that.noMasksCache,el.inputmask.userOptions=$.extend(!0,{},that.userOptions),el.inputmask.isRTL=scopedOpts.isRTL||scopedOpts.numericInput,el.inputmask.el=el,el.inputmask.$el=$(el),el.inputmask.maskset=maskset,$.data(el,"_inputmask_opts",that.userOptions),maskScope.call(el.inputmask,{action:"mask"}))}}),elems&&elems[0]&&elems[0].inputmask||this},option:function option(options,noremask){return"string"==typeof options?this.opts[options]:"object"===_typeof(options)?($.extend(this.userOptions,options),this.el&&!0!==noremask&&this.mask(this.el),this):void 0},unmaskedvalue:function unmaskedvalue(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"unmaskedvalue",value:value})},remove:function remove(){return maskScope.call(this,{action:"remove"})},getemptymask:function getemptymask(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getemptymask"})},hasMaskedValue:function hasMaskedValue(){return!this.opts.autoUnmask},isComplete:function isComplete(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isComplete"})},getmetadata:function getmetadata(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getmetadata"})},isValid:function isValid(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isValid",value:value})},format:function format(value,metadata){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"format",value:value,metadata:metadata})},setValue:function setValue(value){this.el&&$(this.el).trigger("setvalue",[value])},analyseMask:analyseMask},Inputmask.extendDefaults=function(options){$.extend(!0,Inputmask.prototype.defaults,options)},Inputmask.extendDefinitions=function(definition){$.extend(!0,Inputmask.prototype.definitions,definition)},Inputmask.extendAliases=function(alias){$.extend(!0,Inputmask.prototype.aliases,alias)},Inputmask.format=function(value,options,metadata){return Inputmask(options).format(value,metadata)},Inputmask.unmask=function(value,options){return Inputmask(options).unmaskedvalue(value)},Inputmask.isValid=function(value,options){return Inputmask(options).isValid(value)},Inputmask.remove=function(elems){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){el.inputmask&&el.inputmask.remove()})},Inputmask.setValue=function(elems,value){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){el.inputmask?el.inputmask.setValue(value):$(el).trigger("setvalue",[value])})},Inputmask.dependencyLib=$,window.Inputmask=Inputmask,module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__WEBPACK_AMD_DEFINE_RESULT__=function(){return"undefined"!=typeof window?window:new(eval("require('jsdom').JSDOM"))("").window}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var window=__webpack_require__(2),document=window.document;function indexOf(list,elem){for(var i=0,len=list.length;i<len;i++)if(list[i]===elem)return i;return-1}function isWindow(obj){return null!=obj&&obj===obj.window}function isArraylike(obj){var length="length"in obj&&obj.length,ltype=_typeof(obj);return"function"!==ltype&&!isWindow(obj)&&(!(1!==obj.nodeType||!length)||("array"===ltype||0===length||"number"==typeof length&&0<length&&length-1 in obj))}function isValidElement(elem){return elem instanceof Element}function DependencyLib(elem){return elem instanceof DependencyLib?elem:this instanceof DependencyLib?void(null!=elem&&elem!==window&&(this[0]=elem.nodeName?elem:void 0!==elem[0]&&elem[0].nodeName?elem[0]:document.querySelector(elem),void 0!==this[0]&&null!==this[0]&&(this[0].eventRegistry=this[0].eventRegistry||{}))):new DependencyLib(elem)}DependencyLib.prototype={on:function on(events,handler){function addEvent(ev,namespace){elem.addEventListener?elem.addEventListener(ev,handler,!1):elem.attachEvent&&elem.attachEvent("on"+ev,handler),eventRegistry[ev]=eventRegistry[ev]||{},eventRegistry[ev][namespace]=eventRegistry[ev][namespace]||[],eventRegistry[ev][namespace].push(handler)}if(isValidElement(this[0]))for(var eventRegistry=this[0].eventRegistry,elem=this[0],_events=events.split(" "),endx=0;endx<_events.length;endx++){var nsEvent=_events[endx].split("."),ev=nsEvent[0],namespace=nsEvent[1]||"global";addEvent(ev,namespace)}return this},off:function off(events,handler){var eventRegistry,elem;function removeEvent(ev,namespace,handler){if(ev in eventRegistry==!0)if(elem.removeEventListener?elem.removeEventListener(ev,handler,!1):elem.detachEvent&&elem.detachEvent("on"+ev,handler),"global"===namespace)for(var nmsp in eventRegistry[ev])eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler),1);else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler),1)}function resolveNamespace(ev,namespace){var evts=[],hndx,hndL;if(0<ev.length)if(void 0===handler)for(hndx=0,hndL=eventRegistry[ev][namespace].length;hndx<hndL;hndx++)evts.push({ev:ev,namespace:namespace&&0<namespace.length?namespace:"global",handler:eventRegistry[ev][namespace][hndx]});else evts.push({ev:ev,namespace:namespace&&0<namespace.length?namespace:"global",handler:handler});else if(0<namespace.length)for(var evNdx in eventRegistry)for(var nmsp in eventRegistry[evNdx])if(nmsp===namespace)if(void 0===handler)for(hndx=0,hndL=eventRegistry[evNdx][nmsp].length;hndx<hndL;hndx++)evts.push({ev:evNdx,namespace:nmsp,handler:eventRegistry[evNdx][nmsp][hndx]});else evts.push({ev:evNdx,namespace:nmsp,handler:handler});return evts}if(isValidElement(this[0])){eventRegistry=this[0].eventRegistry,elem=this[0];for(var _events=events.split(" "),endx=0;endx<_events.length;endx++)for(var nsEvent=_events[endx].split("."),offEvents=resolveNamespace(nsEvent[0],nsEvent[1]),i=0,offEventsL=offEvents.length;i<offEventsL;i++)removeEvent(offEvents[i].ev,offEvents[i].namespace,offEvents[i].handler)}return this},trigger:function trigger(events,argument_1){if(isValidElement(this[0]))for(var eventRegistry=this[0].eventRegistry,elem=this[0],_events="string"==typeof events?events.split(" "):[events.type],endx=0;endx<_events.length;endx++){var nsEvent=_events[endx].split("."),ev=nsEvent[0],namespace=nsEvent[1]||"global";if(void 0!==document&&"global"===namespace){var evnt,i,params={bubbles:!0,cancelable:!0,detail:argument_1};if(document.createEvent){try{evnt=new CustomEvent(ev,params)}catch(e){evnt=document.createEvent("CustomEvent"),evnt.initCustomEvent(ev,params.bubbles,params.cancelable,params.detail)}events.type&&DependencyLib.extend(evnt,events),elem.dispatchEvent(evnt)}else evnt=document.createEventObject(),evnt.eventType=ev,evnt.detail=argument_1,events.type&&DependencyLib.extend(evnt,events),elem.fireEvent("on"+evnt.eventType,evnt)}else if(void 0!==eventRegistry[ev])if(events=events.type?events:DependencyLib.Event(events),events.detail=arguments.slice(1),"global"===namespace)for(var nmsp in eventRegistry[ev])for(i=0;i<eventRegistry[ev][nmsp].length;i++)eventRegistry[ev][nmsp][i].apply(elem,arguments);else for(i=0;i<eventRegistry[ev][namespace].length;i++)eventRegistry[ev][namespace][i].apply(elem,arguments)}return this}},DependencyLib.isFunction=function(obj){return"function"==typeof obj},DependencyLib.noop=function(){},DependencyLib.isArray=Array.isArray,DependencyLib.inArray=function(elem,arr,i){return null==arr?-1:indexOf(arr,elem,i)},DependencyLib.valHooks=void 0,DependencyLib.isPlainObject=function(obj){return"object"===_typeof(obj)&&!obj.nodeType&&!isWindow(obj)&&!(obj.constructor&&!Object.hasOwnProperty.call(obj.constructor.prototype,"isPrototypeOf"))},DependencyLib.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=!1;for("boolean"==typeof target&&(deep=target,target=arguments[i]||{},i++),"object"===_typeof(target)||DependencyLib.isFunction(target)||(target={}),i===length&&(target=this,i--);i<length;i++)if(null!=(options=arguments[i]))for(name in options)src=target[name],copy=options[name],target!==copy&&(deep&&copy&&(DependencyLib.isPlainObject(copy)||(copyIsArray=DependencyLib.isArray(copy)))?(clone=copyIsArray?(copyIsArray=!1,src&&DependencyLib.isArray(src)?src:[]):src&&DependencyLib.isPlainObject(src)?src:{},target[name]=DependencyLib.extend(deep,clone,copy)):void 0!==copy&&(target[name]=copy));return target},DependencyLib.each=function(obj,callback){var value,i=0;if(isArraylike(obj))for(var length=obj.length;i<length&&(value=callback.call(obj[i],i,obj[i]),!1!==value);i++);else for(i in obj)if(value=callback.call(obj[i],i,obj[i]),!1===value)break;return obj},DependencyLib.data=function(owner,key,value){if(void 0===value)return owner.__data?owner.__data[key]:null;owner.__data=owner.__data||{},owner.__data[key]=value},"function"==typeof window.CustomEvent?DependencyLib.Event=window.CustomEvent:(DependencyLib.Event=function(event,params){params=params||{bubbles:!1,cancelable:!1,detail:void 0};var evt=document.createEvent("CustomEvent");return evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail),evt},DependencyLib.Event.prototype=window.Event.prototype),module.exports=DependencyLib},function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(3);function generateMaskSet(opts,nocache){var ms;function generateMask(mask,metadata,opts){var regexMask=!1,masksetDefinition,maskdefKey;if(null!==mask&&""!==mask||(regexMask=null!==opts.regex,mask=regexMask?(mask=opts.regex,mask.replace(/^(\^)(.*)(\$)$/,"$2")):(regexMask=!0,".*")),1===mask.length&&!1===opts.greedy&&0!==opts.repeat&&(opts.placeholder=""),0<opts.repeat||"*"===opts.repeat||"+"===opts.repeat){var repeatStart="*"===opts.repeat?0:"+"===opts.repeat?1:opts.repeat;mask=opts.groupmarker[0]+mask+opts.groupmarker[1]+opts.quantifiermarker[0]+repeatStart+","+opts.repeat+opts.quantifiermarker[1]}return maskdefKey=regexMask?"regex_"+opts.regex:opts.numericInput?mask.split("").reverse().join(""):mask,!1!==opts.keepStatic&&(maskdefKey="ks_"+maskdefKey),void 0===Inputmask.prototype.masksCache[maskdefKey]||!0===nocache?(masksetDefinition={mask:mask,maskToken:Inputmask.prototype.analyseMask(mask,regexMask,opts),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:metadata,maskLength:void 0,jitOffset:{}},!0!==nocache&&(Inputmask.prototype.masksCache[maskdefKey]=masksetDefinition,masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]))):masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]),masksetDefinition}if($.isFunction(opts.mask)&&(opts.mask=opts.mask(opts)),$.isArray(opts.mask)){if(1<opts.mask.length){null===opts.keepStatic&&(opts.keepStatic=!0);var altMask=opts.groupmarker[0];return $.each(opts.isRTL?opts.mask.reverse():opts.mask,function(ndx,msk){1<altMask.length&&(altMask+=opts.groupmarker[1]+opts.alternatormarker+opts.groupmarker[0]),void 0===msk.mask||$.isFunction(msk.mask)?altMask+=msk:altMask+=msk.mask}),altMask+=opts.groupmarker[1],generateMask(altMask,opts.mask,opts)}opts.mask=opts.mask.pop()}return null===opts.keepStatic&&(opts.keepStatic=!1),ms=opts.mask&&void 0!==opts.mask.mask&&!$.isFunction(opts.mask.mask)?generateMask(opts.mask.mask,opts.mask,opts):generateMask(opts.mask,opts.mask,opts),ms}function analyseMask(mask,regexMask,opts){var tokenizer=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,regexTokenizer=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,escaped=!1,currentToken=new MaskToken,match,m,openenings=[],maskTokens=[],openingToken,currentOpeningToken,alternator,lastMatch,closeRegexGroup=!1;function MaskToken(isGroup,isOptional,isQuantifier,isAlternator){this.matches=[],this.openGroup=isGroup||!1,this.alternatorGroup=!1,this.isGroup=isGroup||!1,this.isOptional=isOptional||!1,this.isQuantifier=isQuantifier||!1,this.isAlternator=isAlternator||!1,this.quantifier={min:1,max:1}}function insertTestDefinition(mtoken,element,position){position=void 0!==position?position:mtoken.matches.length;var prevMatch=mtoken.matches[position-1];if(regexMask)0===element.indexOf("[")||escaped&&/\\d|\\s|\\w]/i.test(element)||"."===element?mtoken.matches.splice(position++,0,{fn:new RegExp(element,opts.casing?"i":""),static:!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element,casing:null,def:element,placeholder:void 0,nativeDef:element}):(escaped&&(element=element[element.length-1]),$.each(element.split(""),function(ndx,lmnt){prevMatch=mtoken.matches[position-1],mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||lmnt)?new RegExp("["+(opts.staticDefinitionSymbol||lmnt)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==lmnt&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||lmnt,placeholder:void 0!==opts.staticDefinitionSymbol?lmnt:void 0,nativeDef:(escaped?"'":"")+lmnt})})),escaped=!1;else{var maskdef=(opts.definitions?opts.definitions[element]:void 0)||Inputmask.prototype.definitions[element];maskdef&&!escaped?mtoken.matches.splice(position++,0,{fn:maskdef.validator?"string"==typeof maskdef.validator?new RegExp(maskdef.validator,opts.casing?"i":""):new function(){this.test=maskdef.validator}:new RegExp("."),static:maskdef.static||!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==(maskdef.definitionSymbol||element),casing:maskdef.casing,def:maskdef.definitionSymbol||element,placeholder:maskdef.placeholder,nativeDef:element,generated:maskdef.generated}):(mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||element)?new RegExp("["+(opts.staticDefinitionSymbol||element)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||element,placeholder:void 0!==opts.staticDefinitionSymbol?element:void 0,nativeDef:(escaped?"'":"")+element}),escaped=!1)}}function verifyGroupMarker(maskToken){maskToken&&maskToken.matches&&$.each(maskToken.matches,function(ndx,token){var nextToken=maskToken.matches[ndx+1];(void 0===nextToken||void 0===nextToken.matches||!1===nextToken.isQuantifier)&&token&&token.isGroup&&(token.isGroup=!1,regexMask||(insertTestDefinition(token,opts.groupmarker[0],0),!0!==token.openGroup&&insertTestDefinition(token,opts.groupmarker[1]))),verifyGroupMarker(token)})}function defaultCase(){if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],insertTestDefinition(currentOpeningToken,m),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup&&(alternator.matches[mndx].isGroup=!1);0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else insertTestDefinition(currentToken,m)}function reverseTokens(maskToken){function reverseStatic(st){return st===opts.optionalmarker[0]?st=opts.optionalmarker[1]:st===opts.optionalmarker[1]?st=opts.optionalmarker[0]:st===opts.groupmarker[0]?st=opts.groupmarker[1]:st===opts.groupmarker[1]&&(st=opts.groupmarker[0]),st}for(var match in maskToken.matches=maskToken.matches.reverse(),maskToken.matches)if(Object.prototype.hasOwnProperty.call(maskToken.matches,match)){var intMatch=parseInt(match);if(maskToken.matches[match].isQuantifier&&maskToken.matches[intMatch+1]&&maskToken.matches[intMatch+1].isGroup){var qt=maskToken.matches[match];maskToken.matches.splice(match,1),maskToken.matches.splice(intMatch+1,0,qt)}void 0!==maskToken.matches[match].matches?maskToken.matches[match]=reverseTokens(maskToken.matches[match]):maskToken.matches[match]=reverseStatic(maskToken.matches[match])}return maskToken}function groupify(matches){var groupToken=new MaskToken(!0);return groupToken.openGroup=!1,groupToken.matches=matches,groupToken}function closeGroup(){if(openingToken=openenings.pop(),openingToken.openGroup=!1,void 0!==openingToken)if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(openingToken),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup=!1,alternator.matches[mndx].alternatorGroup=!1;0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else currentToken.matches.push(openingToken);else defaultCase()}function groupQuantifier(matches){var lastMatch=matches.pop();return lastMatch.isQuantifier&&(lastMatch=groupify([matches.pop(),lastMatch])),lastMatch}for(regexMask&&(opts.optionalmarker[0]=void 0,opts.optionalmarker[1]=void 0);match=regexMask?regexTokenizer.exec(mask):tokenizer.exec(mask);){if(m=match[0],regexMask)switch(m.charAt(0)){case"?":m="{0,1}";break;case"+":case"*":m="{"+m+"}";break;case"|":if(0===openenings.length){var altRegexGroup=groupify(currentToken.matches);altRegexGroup.openGroup=!0,openenings.push(altRegexGroup),currentToken.matches=[],closeRegexGroup=!0}break}if(escaped)defaultCase();else switch(m.charAt(0)){case"(?=":break;case"(?!":break;case"(?<=":break;case"(?<!":break;case opts.escapeChar:escaped=!0,regexMask&&defaultCase();break;case opts.optionalmarker[1]:case opts.groupmarker[1]:closeGroup();break;case opts.optionalmarker[0]:openenings.push(new MaskToken(!1,!0));break;case opts.groupmarker[0]:openenings.push(new MaskToken(!0));break;case opts.quantifiermarker[0]:var quantifier=new MaskToken(!1,!1,!0);m=m.replace(/[{}]/g,"");var mqj=m.split("|"),mq=mqj[0].split(","),mq0=isNaN(mq[0])?mq[0]:parseInt(mq[0]),mq1=1===mq.length?mq0:isNaN(mq[1])?mq[1]:parseInt(mq[1]);"*"!==mq0&&"+"!==mq0||(mq0="*"===mq1?0:1),quantifier.quantifier={min:mq0,max:mq1,jit:mqj[1]};var matches=0<openenings.length?openenings[openenings.length-1].matches:currentToken.matches;if(match=matches.pop(),match.isAlternator){matches.push(match),matches=match.matches;var groupToken=new MaskToken(!0),tmpMatch=matches.pop();matches.push(groupToken),matches=groupToken.matches,match=tmpMatch}match.isGroup||(match=groupify([match])),matches.push(match),matches.push(quantifier);break;case opts.alternatormarker:if(0<openenings.length){currentOpeningToken=openenings[openenings.length-1];var subToken=currentOpeningToken.matches[currentOpeningToken.matches.length-1];lastMatch=currentOpeningToken.openGroup&&(void 0===subToken.matches||!1===subToken.isGroup&&!1===subToken.isAlternator)?openenings.pop():groupQuantifier(currentOpeningToken.matches)}else lastMatch=groupQuantifier(currentToken.matches);if(lastMatch.isAlternator)openenings.push(lastMatch);else if(lastMatch.alternatorGroup?(alternator=openenings.pop(),lastMatch.alternatorGroup=!1):alternator=new MaskToken(!1,!1,!1,!0),alternator.matches.push(lastMatch),openenings.push(alternator),lastMatch.openGroup){lastMatch.openGroup=!1;var alternatorGroup=new MaskToken(!0);alternatorGroup.alternatorGroup=!0,openenings.push(alternatorGroup)}break;default:defaultCase()}}for(closeRegexGroup&&closeGroup();0<openenings.length;)openingToken=openenings.pop(),currentToken.matches.push(openingToken);return 0<currentToken.matches.length&&(verifyGroupMarker(currentToken),maskTokens.push(currentToken)),(opts.numericInput||opts.isRTL)&&reverseTokens(maskTokens[0]),maskTokens}module.exports={generateMaskSet:generateMaskSet,analyseMask:analyseMask}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=_default;var escapeRegexRegex=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim");function _default(str){return str.replace(escapeRegexRegex,"\\$1")}},function(module,exports,__webpack_require__){"use strict";__webpack_require__(7),__webpack_require__(10),__webpack_require__(11),__webpack_require__(12),module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){"use strict";var Inputmask=__webpack_require__(1);Inputmask.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var ipValidatorRegex=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function ipValidator(chrs,maskset,pos,strict,opts){return chrs=-1<pos-1&&"."!==maskset.buffer[pos-1]?(chrs=maskset.buffer[pos-1]+chrs,-1<pos-2&&"."!==maskset.buffer[pos-2]?maskset.buffer[pos-2]+chrs:"0"+chrs):"00"+chrs,ipValidatorRegex.test(chrs)}Inputmask.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)//.*",autoUnmask:!1},ip:{mask:"i[i[i]].j[j[j]].k[k[k]].l[l[l]]",definitions:{i:{validator:ipValidator},j:{validator:ipValidator},k:{validator:ipValidator},l:{validator:ipValidator}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,casing:"lower",onBeforePaste:function onBeforePaste(pastedValue,opts){return pastedValue=pastedValue.toLowerCase(),pastedValue.replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""))}}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";__webpack_require__(9);var $=__webpack_require__(3),window=__webpack_require__(2),document=window.document,ua=window.navigator&&window.navigator.userAgent||"",ie=0<ua.indexOf("MSIE ")||0<ua.indexOf("Trident/"),mobile="ontouchstart"in window,iemobile=/iemobile/i.test(ua),iphone=/iphone/i.test(ua)&&!iemobile,keyCode=__webpack_require__(0);module.exports=function maskScope(actionObj){var inputmask=this,maskset=inputmask.maskset,opts=inputmask.opts,el=inputmask.el,isRTL=inputmask.isRTL||(inputmask.isRTL=opts.numericInput);function getMaskTemplate(baseOnInput,minimalPos,includeMode,noJit,clearOptionalTail){var greedy=opts.greedy;clearOptionalTail&&(opts.greedy=!1),minimalPos=minimalPos||0;var maskTemplate=[],ndxIntlzr,pos=0,test,testPos,jitRenderStatic;do{if(!0===baseOnInput&&maskset.validPositions[pos])testPos=clearOptionalTail&&!0===maskset.validPositions[pos].match.optionality&&void 0===maskset.validPositions[pos+1]&&(!0===maskset.validPositions[pos].generatedInput||maskset.validPositions[pos].input==opts.skipOptionalPartCharacter&&0<pos)?determineTestTemplate(pos,getTests(pos,ndxIntlzr,pos-1)):maskset.validPositions[pos],test=testPos.match,ndxIntlzr=testPos.locator.slice(),maskTemplate.push(!0===includeMode?testPos.input:!1===includeMode?test.nativeDef:getPlaceholder(pos,test));else{testPos=getTestTemplate(pos,ndxIntlzr,pos-1),test=testPos.match,ndxIntlzr=testPos.locator.slice();var jitMasking=!0!==noJit&&(!1!==opts.jitMasking?opts.jitMasking:test.jit);jitRenderStatic=jitRenderStatic&&test.static&&test.def!==opts.groupSeparator&&null===test.fn||maskset.validPositions[pos-1]&&test.static&&test.def!==opts.groupSeparator&&null===test.fn,jitRenderStatic||!1===jitMasking||void 0===jitMasking||"number"==typeof jitMasking&&isFinite(jitMasking)&&pos<jitMasking?maskTemplate.push(!1===includeMode?test.nativeDef:getPlaceholder(pos,test)):jitRenderStatic=!1}pos++}while((void 0===inputmask.maxLength||pos<inputmask.maxLength)&&(!0!==test.static||""!==test.def)||pos<minimalPos);return""===maskTemplate[maskTemplate.length-1]&&maskTemplate.pop(),!1===includeMode&&void 0!==maskset.maskLength||(maskset.maskLength=pos-1),opts.greedy=greedy,maskTemplate}function resetMaskSet(soft){maskset.buffer=void 0,!0!==soft&&(maskset.validPositions={},maskset.p=0)}function getLastValidPosition(closestTo,strict,validPositions){var before=-1,after=-1,valids=validPositions||maskset.validPositions;for(var posNdx in void 0===closestTo&&(closestTo=-1),valids){var psNdx=parseInt(posNdx);valids[psNdx]&&(strict||!0!==valids[psNdx].generatedInput)&&(psNdx<=closestTo&&(before=psNdx),closestTo<=psNdx&&(after=psNdx))}return-1===before||before==closestTo?after:-1==after?before:closestTo-before<after-closestTo?before:after}function getDecisionTaker(tst){var decisionTaker=tst.locator[tst.alternation];return"string"==typeof decisionTaker&&0<decisionTaker.length&&(decisionTaker=decisionTaker.split(",")[0]),void 0!==decisionTaker?decisionTaker.toString():""}function getLocator(tst,align){var locator=(null!=tst.alternation?tst.mloc[getDecisionTaker(tst)]:tst.locator).join("");if(""!==locator)for(;locator.length<align;)locator+="0";return locator}function determineTestTemplate(pos,tests){pos=0<pos?pos-1:0;for(var altTest=getTest(pos),targetLocator=getLocator(altTest),tstLocator,closest,bestMatch,ndx=0;ndx<tests.length;ndx++){var tst=tests[ndx];tstLocator=getLocator(tst,targetLocator.length);var distance=Math.abs(tstLocator-targetLocator);(void 0===closest||""!==tstLocator&&distance<closest||bestMatch&&!opts.greedy&&bestMatch.match.optionality&&"master"===bestMatch.match.newBlockMarker&&(!tst.match.optionality||!tst.match.newBlockMarker)||bestMatch&&bestMatch.match.optionalQuantifier&&!tst.match.optionalQuantifier)&&(closest=distance,bestMatch=tst)}return bestMatch}function getTestTemplate(pos,ndxIntlzr,tstPs){return maskset.validPositions[pos]||determineTestTemplate(pos,getTests(pos,ndxIntlzr?ndxIntlzr.slice():ndxIntlzr,tstPs))}function getTest(pos,tests){return maskset.validPositions[pos]?maskset.validPositions[pos]:(tests||getTests(pos))[0]}function positionCanMatchDefinition(pos,testDefinition,opts){for(var valid=!1,tests=getTests(pos),tndx=0;tndx<tests.length;tndx++){if(tests[tndx].match&&(!(tests[tndx].match.nativeDef!==testDefinition.match[opts.shiftPositions?"def":"nativeDef"]||opts.shiftPositions&&testDefinition.match.static)||tests[tndx].match.nativeDef===testDefinition.match.nativeDef)){valid=!0;break}if(tests[tndx].match&&tests[tndx].match.def===testDefinition.match.nativeDef){valid=void 0;break}}return!1===valid&&void 0!==maskset.jitOffset[pos]&&(valid=positionCanMatchDefinition(pos+maskset.jitOffset[pos],testDefinition,opts)),valid}function getTests(pos,ndxIntlzr,tstPs){var maskTokens=maskset.maskToken,testPos=ndxIntlzr?tstPs:0,ndxInitializer=ndxIntlzr?ndxIntlzr.slice():[0],matches=[],insertStop=!1,latestMatch,cacheDependency=ndxIntlzr?ndxIntlzr.join(""):"";function resolveTestFromToken(maskToken,ndxInitializer,loopNdx,quantifierRecurse){function handleMatch(match,loopNdx,quantifierRecurse){function isFirstMatch(latestMatch,tokenGroup){var firstMatch=0===$.inArray(latestMatch,tokenGroup.matches);return firstMatch||$.each(tokenGroup.matches,function(ndx,match){if(!0===match.isQuantifier?firstMatch=isFirstMatch(latestMatch,tokenGroup.matches[ndx-1]):Object.prototype.hasOwnProperty.call(match,"matches")&&(firstMatch=isFirstMatch(latestMatch,match)),firstMatch)return!1}),firstMatch}function resolveNdxInitializer(pos,alternateNdx,targetAlternation){var bestMatch,indexPos;if((maskset.tests[pos]||maskset.validPositions[pos])&&$.each(maskset.tests[pos]||[maskset.validPositions[pos]],function(ndx,lmnt){if(lmnt.mloc[alternateNdx])return bestMatch=lmnt,!1;var alternation=void 0!==targetAlternation?targetAlternation:lmnt.alternation,ndxPos=void 0!==lmnt.locator[alternation]?lmnt.locator[alternation].toString().indexOf(alternateNdx):-1;(void 0===indexPos||ndxPos<indexPos)&&-1!==ndxPos&&(bestMatch=lmnt,indexPos=ndxPos)}),bestMatch){var bestMatchAltIndex=bestMatch.locator[bestMatch.alternation],locator=bestMatch.mloc[alternateNdx]||bestMatch.mloc[bestMatchAltIndex]||bestMatch.locator;return locator.slice((void 0!==targetAlternation?targetAlternation:bestMatch.alternation)+1)}return void 0!==targetAlternation?resolveNdxInitializer(pos,alternateNdx):void 0}function isSubsetOf(source,target){function expand(pattern){for(var expanded=[],start=-1,end,i=0,l=pattern.length;i<l;i++)if("-"===pattern.charAt(i))for(end=pattern.charCodeAt(i+1);++start<end;)expanded.push(String.fromCharCode(start));else start=pattern.charCodeAt(i),expanded.push(pattern.charAt(i));return expanded.join("")}return source.match.def===target.match.nativeDef||!(!(opts.regex||source.match.fn instanceof RegExp&&target.match.fn instanceof RegExp)||!0===source.match.static||!0===target.match.static)&&-1!==expand(target.match.fn.toString().replace(/[[\]/]/g,"")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g,"")))}function staticCanMatchDefinition(source,target){return!0===source.match.static&&!0!==target.match.static&&target.match.fn.test(source.match.def,maskset,pos,!1,opts,!1)}function setMergeLocators(targetMatch,altMatch){var alternationNdx=targetMatch.alternation,shouldMerge=void 0===altMatch||alternationNdx===altMatch.alternation&&-1===targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);if(!shouldMerge&&alternationNdx>altMatch.alternation)for(var i=altMatch.alternation;i<alternationNdx;i++)if(targetMatch.locator[i]!==altMatch.locator[i]){alternationNdx=i,shouldMerge=!0;break}if(shouldMerge){targetMatch.mloc=targetMatch.mloc||{};var locNdx=targetMatch.locator[alternationNdx];if(void 0!==locNdx){if("string"==typeof locNdx&&(locNdx=locNdx.split(",")[0]),void 0===targetMatch.mloc[locNdx]&&(targetMatch.mloc[locNdx]=targetMatch.locator.slice()),void 0!==altMatch){for(var ndx in altMatch.mloc)"string"==typeof ndx&&(ndx=ndx.split(",")[0]),void 0===targetMatch.mloc[ndx]&&(targetMatch.mloc[ndx]=altMatch.mloc[ndx]);targetMatch.locator[alternationNdx]=Object.keys(targetMatch.mloc).join(",")}return!0}targetMatch.alternation=void 0}return!1}function isSameLevel(targetMatch,altMatch){if(targetMatch.locator.length!==altMatch.locator.length)return!1;for(var locNdx=targetMatch.alternation+1;locNdx<targetMatch.locator.length;locNdx++)if(targetMatch.locator[locNdx]!==altMatch.locator[locNdx])return!1;return!0}if(testPos>pos+opts._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+maskset.mask;if(testPos===pos&&void 0===match.matches)return matches.push({match:match,locator:loopNdx.reverse(),cd:cacheDependency,mloc:{}}),!0;if(void 0!==match.matches){if(match.isGroup&&quantifierRecurse!==match){if(match=handleMatch(maskToken.matches[$.inArray(match,maskToken.matches)+1],loopNdx,quantifierRecurse),match)return!0}else if(match.isOptional){var optionalToken=match,mtchsNdx=matches.length;if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match){if($.each(matches,function(ndx,mtch){mtchsNdx<=ndx&&(mtch.match.optionality=!0)}),latestMatch=matches[matches.length-1].match,void 0!==quantifierRecurse||!isFirstMatch(latestMatch,optionalToken))return!0;insertStop=!0,testPos=pos}}else if(match.isAlternator){var alternateToken=match,malternateMatches=[],maltMatches,currentMatches=matches.slice(),loopNdxCnt=loopNdx.length,altIndex=0<ndxInitializer.length?ndxInitializer.shift():-1;if(-1===altIndex||"string"==typeof altIndex){var currentPos=testPos,ndxInitializerClone=ndxInitializer.slice(),altIndexArr=[],amndx;if("string"==typeof altIndex)altIndexArr=altIndex.split(",");else for(amndx=0;amndx<alternateToken.matches.length;amndx++)altIndexArr.push(amndx.toString());if(void 0!==maskset.excludes[pos]){for(var altIndexArrClone=altIndexArr.slice(),i=0,exl=maskset.excludes[pos].length;i<exl;i++){var excludeSet=maskset.excludes[pos][i].toString().split(":");loopNdx.length==excludeSet[1]&&altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]),1)}0===altIndexArr.length&&(delete maskset.excludes[pos],altIndexArr=altIndexArrClone)}(!0===opts.keepStatic||isFinite(parseInt(opts.keepStatic))&&currentPos>=opts.keepStatic)&&(altIndexArr=altIndexArr.slice(0,1));for(var unMatchedAlternation=!1,ndx=0;ndx<altIndexArr.length;ndx++){amndx=parseInt(altIndexArr[ndx]),matches=[],ndxInitializer="string"==typeof altIndex&&resolveNdxInitializer(testPos,amndx,loopNdxCnt)||ndxInitializerClone.slice(),alternateToken.matches[amndx]&&handleMatch(alternateToken.matches[amndx],[amndx].concat(loopNdx),quantifierRecurse)?match=!0:0===ndx&&(unMatchedAlternation=!0),maltMatches=matches.slice(),testPos=currentPos,matches=[];for(var ndx1=0;ndx1<maltMatches.length;ndx1++){var altMatch=maltMatches[ndx1],dropMatch=!1;altMatch.match.jit=altMatch.match.jit||unMatchedAlternation,altMatch.alternation=altMatch.alternation||loopNdxCnt,setMergeLocators(altMatch);for(var ndx2=0;ndx2<malternateMatches.length;ndx2++){var altMatch2=malternateMatches[ndx2];if("string"!=typeof altIndex||void 0!==altMatch.alternation&&-1!==$.inArray(altMatch.locator[altMatch.alternation].toString(),altIndexArr)){if(altMatch.match.nativeDef===altMatch2.match.nativeDef){dropMatch=!0,setMergeLocators(altMatch2,altMatch);break}if(isSubsetOf(altMatch,altMatch2)){setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch));break}if(isSubsetOf(altMatch2,altMatch)){setMergeLocators(altMatch2,altMatch);break}if(staticCanMatchDefinition(altMatch,altMatch2)){isSameLevel(altMatch,altMatch2)||void 0!==el.inputmask.userOptions.keepStatic?setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch)):opts.keepStatic=!0;break}}}dropMatch||malternateMatches.push(altMatch)}}matches=currentMatches.concat(malternateMatches),testPos=pos,insertStop=0<matches.length,match=0<malternateMatches.length,ndxInitializer=ndxInitializerClone.slice()}else match=handleMatch(alternateToken.matches[altIndex]||maskToken.matches[altIndex],[altIndex].concat(loopNdx),quantifierRecurse);if(match)return!0}else if(match.isQuantifier&&quantifierRecurse!==maskToken.matches[$.inArray(match,maskToken.matches)-1])for(var qt=match,qndx=0<ndxInitializer.length?ndxInitializer.shift():0;qndx<(isNaN(qt.quantifier.max)?qndx+1:qt.quantifier.max)&&testPos<=pos;qndx++){var tokenGroup=maskToken.matches[$.inArray(qt,maskToken.matches)-1];if(match=handleMatch(tokenGroup,[qndx].concat(loopNdx),tokenGroup),match){if(latestMatch=matches[matches.length-1].match,latestMatch.optionalQuantifier=qndx>=qt.quantifier.min,latestMatch.jit=(qndx||1)*tokenGroup.matches.indexOf(latestMatch)>=qt.quantifier.jit,latestMatch.optionalQuantifier&&isFirstMatch(latestMatch,tokenGroup)){insertStop=!0,testPos=pos;break}return latestMatch.jit&&(maskset.jitOffset[pos]=tokenGroup.matches.length-tokenGroup.matches.indexOf(latestMatch)),!0}}else if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match)return!0}else testPos++}for(var tndx=0<ndxInitializer.length?ndxInitializer.shift():0;tndx<maskToken.matches.length;tndx++)if(!0!==maskToken.matches[tndx].isQuantifier){var match=handleMatch(maskToken.matches[tndx],[tndx].concat(loopNdx),quantifierRecurse);if(match&&testPos===pos)return match;if(pos<testPos)break}}function mergeLocators(pos,tests){var locator=[];return $.isArray(tests)||(tests=[tests]),0<tests.length&&(void 0===tests[0].alternation||!0===opts.keepStatic?(locator=determineTestTemplate(pos,tests.slice()).locator.slice(),0===locator.length&&(locator=tests[0].locator.slice())):$.each(tests,function(ndx,tst){if(""!==tst.def)if(0===locator.length)locator=tst.locator.slice();else for(var i=0;i<locator.length;i++)tst.locator[i]&&-1===locator[i].toString().indexOf(tst.locator[i])&&(locator[i]+=","+tst.locator[i])})),locator}if(-1<pos&&(void 0===inputmask.maxLength||pos<inputmask.maxLength)){if(void 0===ndxIntlzr){for(var previousPos=pos-1,test;void 0===(test=maskset.validPositions[previousPos]||maskset.tests[previousPos])&&-1<previousPos;)previousPos--;void 0!==test&&-1<previousPos&&(ndxInitializer=mergeLocators(previousPos,test),cacheDependency=ndxInitializer.join(""),testPos=previousPos)}if(maskset.tests[pos]&&maskset.tests[pos][0].cd===cacheDependency)return maskset.tests[pos];for(var mtndx=ndxInitializer.shift();mtndx<maskTokens.length;mtndx++){var match=resolveTestFromToken(maskTokens[mtndx],ndxInitializer,[mtndx]);if(match&&testPos===pos||pos<testPos)break}}return 0!==matches.length&&!insertStop||matches.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:cacheDependency}),void 0!==ndxIntlzr&&maskset.tests[pos]?$.extend(!0,[],matches):(maskset.tests[pos]=$.extend(!0,[],matches),maskset.tests[pos])}function getBufferTemplate(){return void 0===maskset._buffer&&(maskset._buffer=getMaskTemplate(!1,1),void 0===maskset.buffer&&(maskset.buffer=maskset._buffer.slice())),maskset._buffer}function getBuffer(noCache){return void 0!==maskset.buffer&&!0!==noCache||(maskset.buffer=getMaskTemplate(!0,getLastValidPosition(),!0),void 0===maskset._buffer&&(maskset._buffer=maskset.buffer.slice())),maskset.buffer}function refreshFromBuffer(start,end,buffer){var i,p,skipOptionalPartCharacter=opts.skipOptionalPartCharacter,bffr=isRTL?buffer.slice().reverse():buffer;if(opts.skipOptionalPartCharacter="",!0===start)resetMaskSet(),maskset.tests={},start=0,end=buffer.length,p=determineNewCaretPosition({begin:0,end:0},!1).begin;else{for(i=start;i<end;i++)delete maskset.validPositions[i];p=start}var keypress=new $.Event("keypress");for(i=start;i<end;i++){keypress.which=bffr[i].toString().charCodeAt(0),inputmask.ignorable=!1;var valResult=EventHandlers.keypressEvent.call(el,keypress,!0,!1,!1,p);!1!==valResult&&(p=valResult.forwardPosition)}opts.skipOptionalPartCharacter=skipOptionalPartCharacter}function casing(elem,test,pos){switch(opts.casing||test.casing){case"upper":elem=elem.toUpperCase();break;case"lower":elem=elem.toLowerCase();break;case"title":var posBefore=maskset.validPositions[pos-1];elem=0===pos||posBefore&&posBefore.input===String.fromCharCode(keyCode.SPACE)?elem.toUpperCase():elem.toLowerCase();break;default:if($.isFunction(opts.casing)){var args=Array.prototype.slice.call(arguments);args.push(maskset.validPositions),elem=opts.casing.apply(this,args)}}return elem}function checkAlternationMatch(altArr1,altArr2,na){for(var altArrC=opts.greedy?altArr2:altArr2.slice(0,1),isMatch=!1,naArr=void 0!==na?na.split(","):[],naNdx,i=0;i<naArr.length;i++)-1!==(naNdx=altArr1.indexOf(naArr[i]))&&altArr1.splice(naNdx,1);for(var alndx=0;alndx<altArr1.length;alndx++)if(-1!==$.inArray(altArr1[alndx],altArrC)){isMatch=!0;break}return isMatch}function alternate(maskPos,c,strict,fromIsValid,rAltPos,selection){var validPsClone=$.extend(!0,{},maskset.validPositions),tstClone=$.extend(!0,{},maskset.tests),lastAlt,alternation,isValidRslt=!1,returnRslt=!1,altPos,prevAltPos,i,validPos,decisionPos,lAltPos=void 0!==rAltPos?rAltPos:getLastValidPosition(),nextPos,input,begin,end;if(selection&&(begin=selection.begin,end=selection.end,selection.begin>selection.end&&(begin=selection.end,end=selection.begin)),-1===lAltPos&&void 0===rAltPos)lastAlt=0,prevAltPos=getTest(lastAlt),alternation=prevAltPos.alternation;else for(;0<=lAltPos;lAltPos--)if(altPos=maskset.validPositions[lAltPos],altPos&&void 0!==altPos.alternation){if(prevAltPos&&prevAltPos.locator[altPos.alternation]!==altPos.locator[altPos.alternation])break;lastAlt=lAltPos,alternation=maskset.validPositions[lastAlt].alternation,prevAltPos=altPos}if(void 0!==alternation){decisionPos=parseInt(lastAlt),maskset.excludes[decisionPos]=maskset.excludes[decisionPos]||[],!0!==maskPos&&maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos)+":"+prevAltPos.alternation);var validInputs=[],resultPos=-1;for(i=decisionPos;i<getLastValidPosition(void 0,!0)+1;i++)-1===resultPos&&maskPos<=i&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1),validPos=maskset.validPositions[i],validPos&&!0!==validPos.generatedInput&&(void 0===selection||i<begin||end<=i)&&validInputs.push(validPos.input),delete maskset.validPositions[i];for(-1===resultPos&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1);void 0!==maskset.excludes[decisionPos]&&maskset.excludes[decisionPos].length<10;){for(maskset.tests={},resetMaskSet(!0),isValidRslt=!0,i=0;i<validInputs.length&&(nextPos=isValidRslt.caret||getLastValidPosition(void 0,!0)+1,input=validInputs[i],isValidRslt=isValid(nextPos,input,!1,fromIsValid,!0));i++)i===resultPos&&(returnRslt=isValidRslt),1==maskPos&&isValidRslt&&(returnRslt={caretPos:i});if(isValidRslt)break;if(resetMaskSet(),prevAltPos=getTest(decisionPos),maskset.validPositions=$.extend(!0,{},validPsClone),maskset.tests=$.extend(!0,{},tstClone),!maskset.excludes[decisionPos]){returnRslt=alternate(maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}var decisionTaker=getDecisionTaker(prevAltPos);if(-1!==maskset.excludes[decisionPos].indexOf(decisionTaker+":"+prevAltPos.alternation)){returnRslt=alternate(maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}for(maskset.excludes[decisionPos].push(decisionTaker+":"+prevAltPos.alternation),i=decisionPos;i<getLastValidPosition(void 0,!0)+1;i++)delete maskset.validPositions[i]}}return returnRslt&&!1===opts.keepStatic||delete maskset.excludes[decisionPos],returnRslt}function isValid(pos,c,strict,fromIsValid,fromAlternate,validateOnly,fromCheckval){function isSelection(posObj){return isRTL?1<posObj.begin-posObj.end||posObj.begin-posObj.end==1:1<posObj.end-posObj.begin||posObj.end-posObj.begin==1}strict=!0===strict;var maskPos=pos;function processCommandObject(commandObj){if(void 0!==commandObj){if(void 0!==commandObj.remove&&($.isArray(commandObj.remove)||(commandObj.remove=[commandObj.remove]),$.each(commandObj.remove.sort(function(a,b){return b.pos-a.pos}),function(ndx,lmnt){revalidateMask({begin:lmnt,end:lmnt+1})}),commandObj.remove=void 0),void 0!==commandObj.insert&&($.isArray(commandObj.insert)||(commandObj.insert=[commandObj.insert]),$.each(commandObj.insert.sort(function(a,b){return a.pos-b.pos}),function(ndx,lmnt){""!==lmnt.c&&isValid(lmnt.pos,lmnt.c,void 0===lmnt.strict||lmnt.strict,void 0!==lmnt.fromIsValid?lmnt.fromIsValid:fromIsValid)}),commandObj.insert=void 0),commandObj.refreshFromBuffer&&commandObj.buffer){var refresh=commandObj.refreshFromBuffer;refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,commandObj.buffer),commandObj.refreshFromBuffer=void 0}void 0!==commandObj.rewritePosition&&(maskPos=commandObj.rewritePosition,commandObj=!0)}return commandObj}function _isValid(position,c,strict){var rslt=!1;return $.each(getTests(position),function(ndx,tst){var test=tst.match;if(getBuffer(!0),rslt=null!=test.fn?test.fn.test(c,maskset,position,strict,opts,isSelection(pos)):(c===test.def||c===opts.skipOptionalPartCharacter)&&""!==test.def&&{c:getPlaceholder(position,test,!0)||test.def,pos:position},!1!==rslt){var elem=void 0!==rslt.c?rslt.c:c,validatedPos=position;return elem=elem===opts.skipOptionalPartCharacter&&!0===test.static?getPlaceholder(position,test,!0)||test.def:elem,rslt=processCommandObject(rslt),!0!==rslt&&void 0!==rslt.pos&&rslt.pos!==position&&(validatedPos=rslt.pos),!0!==rslt&&void 0===rslt.pos&&void 0===rslt.c?!1:(!1===revalidateMask(pos,$.extend({},tst,{input:casing(elem,test,validatedPos)}),fromIsValid,validatedPos)&&(rslt=!1),!1)}}),rslt}void 0!==pos.begin&&(maskPos=isRTL?pos.end:pos.begin);var result=!0,positionsClone=$.extend(!0,{},maskset.validPositions);if(!1===opts.keepStatic&&void 0!==maskset.excludes[maskPos]&&!0!==fromAlternate&&!0!==fromIsValid)for(var i=maskPos;i<(isRTL?pos.begin:pos.end);i++)void 0!==maskset.excludes[i]&&(maskset.excludes[i]=void 0,delete maskset.tests[i]);if($.isFunction(opts.preValidation)&&!0!==fromIsValid&&!0!==validateOnly&&(result=opts.preValidation.call(el,getBuffer(),maskPos,c,isSelection(pos),opts,maskset,pos,strict||fromAlternate),result=processCommandObject(result)),!0===result){if(void 0===inputmask.maxLength||maskPos<inputmask.maxLength){if(result=_isValid(maskPos,c,strict),(!strict||!0===fromIsValid)&&!1===result&&!0!==validateOnly){var currentPosValid=maskset.validPositions[maskPos];if(!currentPosValid||!0!==currentPosValid.match.static||currentPosValid.match.def!==c&&c!==opts.skipOptionalPartCharacter){if(opts.insertMode||void 0===maskset.validPositions[seekNext(maskPos)]||pos.end>maskPos){var skip=!1;if(maskset.jitOffset[maskPos]&&void 0===maskset.validPositions[seekNext(maskPos)]&&(result=isValid(maskPos+maskset.jitOffset[maskPos],c,!0),!1!==result&&(!0!==fromAlternate&&(result.caret=maskPos),skip=!0)),pos.end>maskPos&&(maskset.validPositions[maskPos]=void 0),!skip&&!isMask(maskPos,opts.keepStatic))for(var nPos=maskPos+1,snPos=seekNext(maskPos);nPos<=snPos;nPos++)if(result=_isValid(nPos,c,strict),!1!==result){result=trackbackPositions(maskPos,void 0!==result.pos?result.pos:nPos)||result,maskPos=nPos;break}}}else result={caret:seekNext(maskPos)}}}else result=!1;!1!==result||!opts.keepStatic||!isComplete(getBuffer())&&0!==maskPos||strict||!0===fromAlternate?isSelection(pos)&&maskset.tests[maskPos]&&1<maskset.tests[maskPos].length&&opts.keepStatic&&!strict&&!0!==fromAlternate&&(result=alternate(!0)):result=alternate(maskPos,c,strict,fromIsValid,void 0,pos),!0===result&&(result={pos:maskPos})}if($.isFunction(opts.postValidation)&&!0!==fromIsValid&&!0!==validateOnly){var postResult=opts.postValidation.call(el,getBuffer(!0),void 0!==pos.begin?isRTL?pos.end:pos.begin:pos,c,result,opts,maskset,strict,fromCheckval);void 0!==postResult&&(result=!0===postResult?result:postResult)}result&&void 0===result.pos&&(result.pos=maskPos),!1===result||!0===validateOnly?(resetMaskSet(!0),maskset.validPositions=$.extend(!0,{},positionsClone)):trackbackPositions(void 0,maskPos,!0);var endResult=processCommandObject(result);return endResult}function trackbackPositions(originalPos,newPos,fillOnly){if(void 0===originalPos)for(originalPos=newPos-1;0<originalPos&&!maskset.validPositions[originalPos];originalPos--);for(var ps=originalPos;ps<newPos;ps++)if(void 0===maskset.validPositions[ps]&&!isMask(ps,!0)){var vp=0==ps?getTest(ps):maskset.validPositions[ps-1];if(vp){var tests=getTests(ps).slice();""===tests[tests.length-1].match.def&&tests.pop();var bestMatch=determineTestTemplate(ps,tests),np;if(bestMatch&&(!0!==bestMatch.match.jit||"master"===bestMatch.match.newBlockMarker&&(np=maskset.validPositions[ps+1])&&!0===np.match.optionalQuantifier)&&(bestMatch=$.extend({},bestMatch,{input:getPlaceholder(ps,bestMatch.match,!0)||bestMatch.match.def}),bestMatch.generatedInput=!0,revalidateMask(ps,bestMatch,!0),!0!==fillOnly)){var cvpInput=maskset.validPositions[newPos].input;return maskset.validPositions[newPos]=void 0,isValid(newPos,cvpInput,!0,!0)}}}}function revalidateMask(pos,validTest,fromIsValid,validatedPos){function IsEnclosedStatic(pos,valids,selection){var posMatch=valids[pos];if(void 0===posMatch||!0!==posMatch.match.static||!0===posMatch.match.optionality||void 0!==valids[0]&&void 0!==valids[0].alternation)return!1;var prevMatch=selection.begin<=pos-1?valids[pos-1]&&!0===valids[pos-1].match.static&&valids[pos-1]:valids[pos-1],nextMatch=selection.end>pos+1?valids[pos+1]&&!0===valids[pos+1].match.static&&valids[pos+1]:valids[pos+1];return prevMatch&&nextMatch}var offset=0,begin=void 0!==pos.begin?pos.begin:pos,end=void 0!==pos.end?pos.end:pos;if(pos.begin>pos.end&&(begin=pos.end,end=pos.begin),validatedPos=void 0!==validatedPos?validatedPos:begin,begin!==end||opts.insertMode&&void 0!==maskset.validPositions[validatedPos]&&void 0===fromIsValid||void 0===validTest){var positionsClone=$.extend(!0,{},maskset.validPositions),lvp=getLastValidPosition(void 0,!0),i;for(maskset.p=begin,i=lvp;begin<=i;i--)delete maskset.validPositions[i],void 0===validTest&&delete maskset.tests[i+1];var valid=!0,j=validatedPos,posMatch=j,t,canMatch;for(validTest&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest),posMatch++,j++),i=validTest?end:end-1;i<=lvp;i++){if(void 0!==(t=positionsClone[i])&&!0!==t.generatedInput&&(end<=i||begin<=i&&IsEnclosedStatic(i,positionsClone,{begin:begin,end:end}))){for(;""!==getTest(posMatch).match.def;){if(!1!==(canMatch=positionCanMatchDefinition(posMatch,t,opts))||"+"===t.match.def){"+"===t.match.def&&getBuffer(!0);var result=isValid(posMatch,t.input,"+"!==t.match.def,"+"!==t.match.def);if(valid=!1!==result,j=(result.pos||posMatch)+1,!valid&&canMatch)break}else valid=!1;if(valid){void 0===validTest&&t.match.static&&i===pos.begin&&offset++;break}if(!valid&&posMatch>maskset.maskLength)break;posMatch++}""==getTest(posMatch).match.def&&(valid=!1),posMatch=j}if(!valid)break}if(!valid)return maskset.validPositions=$.extend(!0,{},positionsClone),resetMaskSet(!0),!1}else validTest&&getTest(validatedPos).match.cd===validTest.match.cd&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest));return resetMaskSet(!0),offset}function isMask(pos,strict,fuzzy){var test=getTestTemplate(pos).match;if(""===test.def&&(test=getTest(pos).match),!0!==test.static)return test.fn;if(!0===fuzzy&&void 0!==maskset.validPositions[pos]&&!0!==maskset.validPositions[pos].generatedInput)return!0;if(!0!==strict&&-1<pos){if(fuzzy){var tests=getTests(pos);return tests.length>1+(""===tests[tests.length-1].match.def?1:0)}var testTemplate=determineTestTemplate(pos,getTests(pos)),testPlaceHolder=getPlaceholder(pos,testTemplate.match);return testTemplate.match.def!==testPlaceHolder}return!1}function seekNext(pos,newBlock,fuzzy){void 0===fuzzy&&(fuzzy=!0);for(var position=pos+1;""!==getTest(position).match.def&&(!0===newBlock&&(!0!==getTest(position).match.newBlockMarker||!isMask(position,void 0,!0))||!0!==newBlock&&!isMask(position,void 0,fuzzy));)position++;return position}function seekPrevious(pos,newBlock){var position=pos,tests;if(position<=0)return 0;for(;0<--position&&(!0===newBlock&&!0!==getTest(position).match.newBlockMarker||!0!==newBlock&&!isMask(position,void 0,!0)&&(tests=getTests(position),tests.length<2||2===tests.length&&""===tests[1].match.def)););return position}function writeBuffer(input,buffer,caretPos,event,triggerEvents){if(event&&$.isFunction(opts.onBeforeWrite)){var result=opts.onBeforeWrite.call(inputmask,event,buffer,caretPos,opts);if(result){if(result.refreshFromBuffer){var refresh=result.refreshFromBuffer;refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,result.buffer||buffer),buffer=getBuffer(!0)}void 0!==caretPos&&(caretPos=void 0!==result.caret?result.caret:caretPos)}}if(void 0!==input&&(input.inputmask._valueSet(buffer.join("")),void 0===caretPos||void 0!==event&&"blur"===event.type||caret(input,caretPos,void 0,void 0,void 0!==event&&"keydown"===event.type&&(event.keyCode===keyCode.DELETE||event.keyCode===keyCode.BACKSPACE)),!0===triggerEvents)){var $input=$(input),nptVal=input.inputmask._valueGet();input.inputmask.skipInputEvent=!0,$input.trigger("input"),setTimeout(function(){nptVal===getBufferTemplate().join("")?$input.trigger("cleared"):!0===isComplete(buffer)&&$input.trigger("complete")},0)}}function getPlaceholder(pos,test,returnPL){if(test=test||getTest(pos).match,void 0!==test.placeholder||!0===returnPL)return $.isFunction(test.placeholder)?test.placeholder(opts):test.placeholder;if(!0!==test.static)return opts.placeholder.charAt(pos%opts.placeholder.length);if(-1<pos&&void 0===maskset.validPositions[pos]){var tests=getTests(pos),staticAlternations=[],prevTest;if(tests.length>1+(""===tests[tests.length-1].match.def?1:0))for(var i=0;i<tests.length;i++)if(""!==tests[i].match.def&&!0!==tests[i].match.optionality&&!0!==tests[i].match.optionalQuantifier&&(!0===tests[i].match.static||void 0===prevTest||!1!==tests[i].match.fn.test(prevTest.match.def,maskset,pos,!0,opts))&&(staticAlternations.push(tests[i]),!0===tests[i].match.static&&(prevTest=tests[i]),1<staticAlternations.length&&/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)))return opts.placeholder.charAt(pos%opts.placeholder.length)}return test.def}function HandleNativePlaceholder(npt,value){if(ie){if(npt.inputmask._valueGet()!==value&&(npt.placeholder!==value||""===npt.placeholder)){var buffer=getBuffer().slice(),nptValue=npt.inputmask._valueGet();if(nptValue!==value){var lvp=getLastValidPosition();-1===lvp&&nptValue===getBufferTemplate().join("")?buffer=[]:-1!==lvp&&clearOptionalTail(buffer),writeBuffer(npt,buffer)}}}else npt.placeholder!==value&&(npt.placeholder=value,""===npt.placeholder&&npt.removeAttribute("placeholder"))}function determineNewCaretPosition(selectedCaret,tabbed){function doRadixFocus(clickPos){if(""!==opts.radixPoint&&0!==opts.digits){var vps=maskset.validPositions;if(void 0===vps[clickPos]||vps[clickPos].input===getPlaceholder(clickPos)){if(clickPos<seekNext(-1))return!0;var radixPos=$.inArray(opts.radixPoint,getBuffer());if(-1!==radixPos){for(var vp in vps)if(vps[vp]&&radixPos<vp&&vps[vp].input!==getPlaceholder(vp))return!1;return!0}}}return!1}if(tabbed&&(isRTL?selectedCaret.end=selectedCaret.begin:selectedCaret.begin=selectedCaret.end),selectedCaret.begin===selectedCaret.end){switch(opts.positionCaretOnClick){case"none":break;case"select":selectedCaret={begin:0,end:getBuffer().length};break;case"ignore":selectedCaret.end=selectedCaret.begin=seekNext(getLastValidPosition());break;case"radixFocus":if(doRadixFocus(selectedCaret.begin)){var radixPos=getBuffer().join("").indexOf(opts.radixPoint);selectedCaret.end=selectedCaret.begin=opts.numericInput?seekNext(radixPos):radixPos;break}default:var clickPosition=selectedCaret.begin,lvclickPosition=getLastValidPosition(clickPosition,!0),lastPosition=seekNext(-1!==lvclickPosition||isMask(0)?lvclickPosition:0);if(clickPosition<lastPosition)selectedCaret.end=selectedCaret.begin=isMask(clickPosition,!0)||isMask(clickPosition-1,!0)?clickPosition:seekNext(clickPosition);else{var lvp=maskset.validPositions[lvclickPosition],tt=getTestTemplate(lastPosition,lvp?lvp.match.locator:void 0,lvp),placeholder=getPlaceholder(lastPosition,tt.match);if(""!==placeholder&&getBuffer()[lastPosition]!==placeholder&&!0!==tt.match.optionalQuantifier&&!0!==tt.match.newBlockMarker||!isMask(lastPosition,opts.keepStatic)&&tt.match.def===placeholder){var newPos=seekNext(lastPosition);(newPos<=clickPosition||clickPosition===lastPosition)&&(lastPosition=newPos)}selectedCaret.end=selectedCaret.begin=lastPosition}}return selectedCaret}}var EventRuler={on:function on(input,eventName,eventHandler){var ev=function ev(e){e.originalEvent&&(e=e.originalEvent||e,arguments[0]=e);var that=this,args,inputmask=that.inputmask;if(void 0===inputmask&&"FORM"!==this.nodeName){var imOpts=$.data(that,"_inputmask_opts");$(that).off(),imOpts&&new Inputmask(imOpts).mask(that)}else{if("setvalue"===e.type||"FORM"===this.nodeName||!(that.disabled||that.readOnly&&!("keydown"===e.type&&e.ctrlKey&&67===e.keyCode||!1===opts.tabThrough&&e.keyCode===keyCode.TAB))){switch(e.type){case"input":if(!0===inputmask.skipInputEvent||e.inputType&&"insertCompositionText"===e.inputType)return inputmask.skipInputEvent=!1,e.preventDefault();break;case"keydown":inputmask.skipKeyPressEvent=!1,inputmask.skipInputEvent=!1;break;case"keypress":if(!0===inputmask.skipKeyPressEvent)return e.preventDefault();inputmask.skipKeyPressEvent=!0;break;case"click":case"focus":return inputmask.validationEvent?(inputmask.validationEvent=!1,input.blur(),HandleNativePlaceholder(input,(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).join("")),setTimeout(function(){input.focus()},3e3)):(args=arguments,setTimeout(function(){input.inputmask&&eventHandler.apply(that,args)},0)),!1}var returnVal=eventHandler.apply(that,arguments);return!1===returnVal&&(e.preventDefault(),e.stopPropagation()),returnVal}e.preventDefault()}};input.inputmask.events[eventName]=input.inputmask.events[eventName]||[],input.inputmask.events[eventName].push(ev),-1!==$.inArray(eventName,["submit","reset"])?null!==input.form&&$(input.form).on(eventName,ev):$(input).on(eventName,ev)},off:function off(input,event){var events;input.inputmask&&input.inputmask.events&&(event?(events=[],events[event]=input.inputmask.events[event]):events=input.inputmask.events,$.each(events,function(eventName,evArr){for(;0<evArr.length;){var ev=evArr.pop();-1!==$.inArray(eventName,["submit","reset"])?null!==input.form&&$(input.form).off(eventName,ev):$(input).off(eventName,ev)}delete input.inputmask.events[eventName]}))}},EventHandlers={keydownEvent:function keydownEvent(e){var input=this,$input=$(input),k=e.keyCode,pos=caret(input),kdResult=opts.onKeyDown.call(this,e,getBuffer(),pos,opts);if(void 0!==kdResult)return kdResult;if(k===keyCode.BACKSPACE||k===keyCode.DELETE||iphone&&k===keyCode.BACKSPACE_SAFARI||e.ctrlKey&&k===keyCode.X&&!("oncut"in input))e.preventDefault(),handleRemove(input,k,pos),writeBuffer(input,getBuffer(!0),maskset.p,e,input.inputmask._valueGet()!==getBuffer().join(""));else if(k===keyCode.END||k===keyCode.PAGE_DOWN){e.preventDefault();var caretPos=seekNext(getLastValidPosition());caret(input,e.shiftKey?pos.begin:caretPos,caretPos,!0)}else k===keyCode.HOME&&!e.shiftKey||k===keyCode.PAGE_UP?(e.preventDefault(),caret(input,0,e.shiftKey?pos.begin:0,!0)):(opts.undoOnEscape&&k===keyCode.ESCAPE||90===k&&e.ctrlKey)&&!0!==e.altKey?(checkVal(input,!0,!1,inputmask.undoValue.split("")),$input.trigger("click")):!0===opts.tabThrough&&k===keyCode.TAB?(!0===e.shiftKey?(!0===getTest(pos.begin).match.static&&(pos.begin=seekNext(pos.begin)),pos.end=seekPrevious(pos.begin,!0),pos.begin=seekPrevious(pos.end,!0)):(pos.begin=seekNext(pos.begin,!0),pos.end=seekNext(pos.begin,!0),pos.end<maskset.maskLength&&pos.end--),pos.begin<maskset.maskLength&&(e.preventDefault(),caret(input,pos.begin,pos.end))):e.shiftKey||opts.insertModeVisual&&!1===opts.insertMode&&(k===keyCode.RIGHT?setTimeout(function(){var caretPos=caret(input);caret(input,caretPos.begin)},0):k===keyCode.LEFT&&setTimeout(function(){var caretPos_begin=translatePosition(input.inputmask.caretPos.begin),caretPos_end=translatePosition(input.inputmask.caretPos.end);caret(input,isRTL?caretPos_begin+(caretPos_begin===maskset.maskLength?0:1):caretPos_begin-(0===caretPos_begin?0:1))},0));inputmask.ignorable=-1!==$.inArray(k,opts.ignorables)},keypressEvent:function keypressEvent(e,checkval,writeOut,strict,ndx){var input=this,$input=$(input),k=e.which||e.charCode||e.keyCode;if(!(!0===checkval||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||inputmask.ignorable))return k===keyCode.ENTER&&inputmask.undoValue!==getBuffer().join("")&&(inputmask.undoValue=getBuffer().join(""),setTimeout(function(){$input.trigger("change")},0)),inputmask.skipInputEvent=!0,!0;if(k){44!==k&&46!==k||3!==e.location||""===opts.radixPoint||(k=opts.radixPoint.charCodeAt(0));var pos=checkval?{begin:ndx,end:ndx}:caret(input),forwardPosition,c=String.fromCharCode(k);maskset.writeOutBuffer=!0;var valResult=isValid(pos,c,strict,void 0,void 0,void 0,checkval);if(!1!==valResult&&(resetMaskSet(!0),forwardPosition=void 0!==valResult.caret?valResult.caret:seekNext(valResult.pos.begin?valResult.pos.begin:valResult.pos),maskset.p=forwardPosition),forwardPosition=opts.numericInput&&void 0===valResult.caret?seekPrevious(forwardPosition):forwardPosition,!1!==writeOut&&(setTimeout(function(){opts.onKeyValidation.call(input,k,valResult)},0),maskset.writeOutBuffer&&!1!==valResult)){var buffer=getBuffer();writeBuffer(input,buffer,forwardPosition,e,!0!==checkval)}if(e.preventDefault(),checkval)return!1!==valResult&&(valResult.forwardPosition=forwardPosition),valResult}},pasteEvent:function pasteEvent(e){var input=this,inputValue=this.inputmask._valueGet(!0),caretPos=caret(this),tempValue;isRTL&&(tempValue=caretPos.end,caretPos.end=caretPos.begin,caretPos.begin=tempValue);var valueBeforeCaret=inputValue.substr(0,caretPos.begin),valueAfterCaret=inputValue.substr(caretPos.end,inputValue.length);if(valueBeforeCaret==(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).slice(0,caretPos.begin).join("")&&(valueBeforeCaret=""),valueAfterCaret==(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).slice(caretPos.end).join("")&&(valueAfterCaret=""),window.clipboardData&&window.clipboardData.getData)inputValue=valueBeforeCaret+window.clipboardData.getData("Text")+valueAfterCaret;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;inputValue=valueBeforeCaret+e.clipboardData.getData("text/plain")+valueAfterCaret}var pasteValue=inputValue;if($.isFunction(opts.onBeforePaste)){if(pasteValue=opts.onBeforePaste.call(inputmask,inputValue,opts),!1===pasteValue)return e.preventDefault();pasteValue=pasteValue||inputValue}return checkVal(this,!0,!1,pasteValue.toString().split(""),e),e.preventDefault()},inputFallBackEvent:function inputFallBackEvent(e){function ieMobileHandler(input,inputValue,caretPos){if(iemobile){var inputChar=inputValue.replace(getBuffer().join(""),"");if(1===inputChar.length){var iv=inputValue.split("");iv.splice(caretPos.begin,0,inputChar),inputValue=iv.join("")}}return inputValue}function analyseChanges(inputValue,buffer,caretPos){for(var frontPart=inputValue.substr(0,caretPos.begin).split(""),backPart=inputValue.substr(caretPos.begin).split(""),frontBufferPart=buffer.substr(0,caretPos.begin).split(""),backBufferPart=buffer.substr(caretPos.begin).split(""),fpl=frontPart.length>=frontBufferPart.length?frontPart.length:frontBufferPart.length,bpl=backPart.length>=backBufferPart.length?backPart.length:backBufferPart.length,bl,i,action="",data=[],marker="~",placeholder;frontPart.length<fpl;)frontPart.push("~");for(;frontBufferPart.length<fpl;)frontBufferPart.push("~");for(;backPart.length<bpl;)backPart.unshift("~");for(;backBufferPart.length<bpl;)backBufferPart.unshift("~");var newBuffer=frontPart.concat(backPart),oldBuffer=frontBufferPart.concat(backBufferPart);for(i=0,bl=newBuffer.length;i<bl;i++)switch(placeholder=getPlaceholder(translatePosition(i)),action){case"insertText":oldBuffer[i-1]===newBuffer[i]&&caretPos.begin==newBuffer.length-1&&data.push(newBuffer[i]),i=bl;break;case"insertReplacementText":"~"===newBuffer[i]?caretPos.end++:i=bl;break;case"deleteContentBackward":"~"===newBuffer[i]?caretPos.end++:i=bl;break;default:newBuffer[i]!==oldBuffer[i]&&("~"!==newBuffer[i+1]&&newBuffer[i+1]!==placeholder&&void 0!==newBuffer[i+1]||(oldBuffer[i]!==placeholder||"~"!==oldBuffer[i+1])&&"~"!==oldBuffer[i]?"~"===oldBuffer[i+1]&&oldBuffer[i]===newBuffer[i+1]?(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--):newBuffer[i]!==placeholder&&"~"!==newBuffer[i]&&("~"===newBuffer[i+1]||oldBuffer[i]!==newBuffer[i]&&oldBuffer[i+1]===newBuffer[i+1])?(action="insertReplacementText",data.push(newBuffer[i]),caretPos.begin--):"~"===newBuffer[i]?(action="deleteContentBackward",!isMask(translatePosition(i),!0)&&oldBuffer[i]!==opts.radixPoint||caretPos.end++):i=bl:(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--));break}return{action:action,data:data,caret:caretPos}}var input=this,inputValue=input.inputmask._valueGet(!0),buffer=(isRTL?getBuffer().slice().reverse():getBuffer()).join(""),caretPos=caret(input,void 0,void 0,!0);if(buffer!==inputValue){inputValue=ieMobileHandler(input,inputValue,caretPos);var changes=analyseChanges(inputValue,buffer,caretPos);switch((input.inputmask.shadowRoot||document).activeElement!==input&&input.focus(),writeBuffer(input,getBuffer()),caret(input,caretPos.begin,caretPos.end,!0),changes.action){case"insertText":case"insertReplacementText":$.each(changes.data,function(ndx,entry){var keypress=new $.Event("keypress");keypress.which=entry.charCodeAt(0),inputmask.ignorable=!1,EventHandlers.keypressEvent.call(input,keypress)}),setTimeout(function(){inputmask.$el.trigger("keyup")},0);break;case"deleteContentBackward":var keydown=new $.Event("keydown");keydown.keyCode=keyCode.BACKSPACE,EventHandlers.keydownEvent.call(input,keydown);break;default:applyInputValue(input,inputValue);break}e.preventDefault()}},compositionendEvent:function compositionendEvent(e){inputmask.$el.trigger("input")},setValueEvent:function setValueEvent(e,argument_1,argument_2){var input=this,value=e&&e.detail?e.detail[0]:argument_1;void 0===value&&(value=this.inputmask._valueGet(!0)),applyInputValue(this,value),(e.detail&&void 0!==e.detail[1]||void 0!==argument_2)&&caret(this,e.detail?e.detail[1]:argument_2)},focusEvent:function focusEvent(e){var input=this,nptValue=this.inputmask._valueGet();opts.showMaskOnFocus&&nptValue!==getBuffer().join("")&&writeBuffer(this,getBuffer(),seekNext(getLastValidPosition())),!0!==opts.positionCaretOnTab||!1!==inputmask.mouseEnter||isComplete(getBuffer())&&-1!==getLastValidPosition()||EventHandlers.clickEvent.apply(this,[e,!0]),inputmask.undoValue=getBuffer().join("")},invalidEvent:function invalidEvent(e){inputmask.validationEvent=!0},mouseleaveEvent:function mouseleaveEvent(){var input=this;inputmask.mouseEnter=!1,opts.clearMaskOnLostFocus&&(this.inputmask.shadowRoot||document).activeElement!==this&&HandleNativePlaceholder(this,inputmask.originalPlaceholder)},clickEvent:function clickEvent(e,tabbed){var input=this;if((this.inputmask.shadowRoot||document).activeElement===this){var newCaretPosition=determineNewCaretPosition(caret(this),tabbed);void 0!==newCaretPosition&&caret(this,newCaretPosition)}},cutEvent:function cutEvent(e){var input=this,pos=caret(this),clipboardData=window.clipboardData||e.clipboardData,clipData=isRTL?getBuffer().slice(pos.end,pos.begin):getBuffer().slice(pos.begin,pos.end);clipboardData.setData("text",isRTL?clipData.reverse().join(""):clipData.join("")),document.execCommand&&document.execCommand("copy"),handleRemove(this,keyCode.DELETE,pos),writeBuffer(this,getBuffer(),maskset.p,e,inputmask.undoValue!==getBuffer().join(""))},blurEvent:function blurEvent(e){var $input=$(this),input=this;if(this.inputmask){HandleNativePlaceholder(this,inputmask.originalPlaceholder);var nptValue=this.inputmask._valueGet(),buffer=getBuffer().slice();""!==nptValue&&(opts.clearMaskOnLostFocus&&(-1===getLastValidPosition()&&nptValue===getBufferTemplate().join("")?buffer=[]:clearOptionalTail(buffer)),!1===isComplete(buffer)&&(setTimeout(function(){$input.trigger("incomplete")},0),opts.clearIncomplete&&(resetMaskSet(),buffer=opts.clearMaskOnLostFocus?[]:getBufferTemplate().slice())),writeBuffer(this,buffer,void 0,e)),inputmask.undoValue!==getBuffer().join("")&&(inputmask.undoValue=getBuffer().join(""),$input.trigger("change"))}},mouseenterEvent:function mouseenterEvent(){var input=this;inputmask.mouseEnter=!0,(this.inputmask.shadowRoot||document).activeElement!==this&&(null==inputmask.originalPlaceholder&&this.placeholder!==inputmask.originalPlaceholder&&(inputmask.originalPlaceholder=this.placeholder),opts.showMaskOnHover&&HandleNativePlaceholder(this,(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).join("")))},submitEvent:function submitEvent(){inputmask.undoValue!==getBuffer().join("")&&inputmask.$el.trigger("change"),opts.clearMaskOnLostFocus&&-1===getLastValidPosition()&&el.inputmask._valueGet&&el.inputmask._valueGet()===getBufferTemplate().join("")&&el.inputmask._valueSet(""),opts.clearIncomplete&&!1===isComplete(getBuffer())&&el.inputmask._valueSet(""),opts.removeMaskOnSubmit&&(el.inputmask._valueSet(el.inputmask.unmaskedvalue(),!0),setTimeout(function(){writeBuffer(el,getBuffer())},0))},resetEvent:function resetEvent(){el.inputmask.refreshValue=!0,setTimeout(function(){applyInputValue(el,el.inputmask._valueGet(!0))},0)}},valueBuffer;function checkVal(input,writeOut,strict,nptvl,initiatingEvent){var inputmask=this||input.inputmask,inputValue=nptvl.slice(),charCodes="",initialNdx=-1,result=void 0;function isTemplateMatch(ndx,charCodes){for(var targetTemplate=getMaskTemplate(!0,0).slice(ndx,seekNext(ndx)).join("").replace(/'/g,""),charCodeNdx=targetTemplate.indexOf(charCodes);0<charCodeNdx&&" "===targetTemplate[charCodeNdx-1];)charCodeNdx--;var match=0===charCodeNdx&&!isMask(ndx)&&(getTest(ndx).match.nativeDef===charCodes.charAt(0)||!0===getTest(ndx).match.static&&getTest(ndx).match.nativeDef==="'"+charCodes.charAt(0)||" "===getTest(ndx).match.nativeDef&&(getTest(ndx+1).match.nativeDef===charCodes.charAt(0)||!0===getTest(ndx+1).match.static&&getTest(ndx+1).match.nativeDef==="'"+charCodes.charAt(0)));if(!match&&0<charCodeNdx&&!isMask(ndx,!1,!0)){var nextPos=seekNext(ndx);inputmask.caretPos.begin<nextPos&&(inputmask.caretPos={begin:nextPos})}return match}resetMaskSet(),maskset.tests={},initialNdx=opts.radixPoint?determineNewCaretPosition({begin:0,end:0}).begin:0,maskset.p=initialNdx,inputmask.caretPos={begin:initialNdx};var staticMatches=[],prevCaretPos=inputmask.caretPos;if($.each(inputValue,function(ndx,charCode){if(void 0!==charCode)if(void 0===maskset.validPositions[ndx]&&inputValue[ndx]===getPlaceholder(ndx)&&isMask(ndx,!0)&&!1===isValid(ndx,inputValue[ndx],!0,void 0,void 0,!0))maskset.p++;else{var keypress=new $.Event("_checkval");keypress.which=charCode.toString().charCodeAt(0),charCodes+=charCode;var lvp=getLastValidPosition(void 0,!0);isTemplateMatch(initialNdx,charCodes)?result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,lvp+1):(result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,inputmask.caretPos.begin),result&&(initialNdx=inputmask.caretPos.begin+1,charCodes="")),result?(void 0!==result.pos&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static&&void 0===maskset.validPositions[result.pos].alternation&&(staticMatches.push(result.pos),isRTL||(result.forwardPosition=result.pos+1)),writeBuffer(void 0,getBuffer(),result.forwardPosition,keypress,!1),inputmask.caretPos={begin:result.forwardPosition,end:result.forwardPosition},prevCaretPos=inputmask.caretPos):inputmask.caretPos=prevCaretPos}}),0<staticMatches.length){var sndx,validPos,nextValid=seekNext(-1,void 0,!1);if(!isComplete(getBuffer())&&staticMatches.length<=nextValid||isComplete(getBuffer())&&0<staticMatches.length&&staticMatches.length!==nextValid&&0===staticMatches[0])for(var nextSndx=nextValid;void 0!==(sndx=staticMatches.shift());){var keypress=new $.Event("_checkval");if(validPos=maskset.validPositions[sndx],validPos.generatedInput=!0,keypress.which=validPos.input.charCodeAt(0),result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,nextSndx),result&&void 0!==result.pos&&result.pos!==sndx&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static)staticMatches.push(result.pos);else if(!result)break;nextSndx++}}writeOut&&writeBuffer(input,getBuffer(),result?result.forwardPosition:inputmask.caretPos.begin,initiatingEvent||new $.Event("checkval"),initiatingEvent&&"input"===initiatingEvent.type&&inputmask.undoValue!==getBuffer().join(""))}function unmaskedvalue(input){if(input){if(void 0===input.inputmask)return input.value;input.inputmask&&input.inputmask.refreshValue&&applyInputValue(input,input.inputmask._valueGet(!0))}var umValue=[],vps=maskset.validPositions;for(var pndx in vps)vps[pndx]&&vps[pndx].match&&(1!=vps[pndx].match.static||!0!==vps[pndx].generatedInput)&&umValue.push(vps[pndx].input);var unmaskedValue=0===umValue.length?"":(isRTL?umValue.reverse():umValue).join("");if($.isFunction(opts.onUnMask)){var bufferValue=(isRTL?getBuffer().slice().reverse():getBuffer()).join("");unmaskedValue=opts.onUnMask.call(inputmask,bufferValue,unmaskedValue,opts)}return unmaskedValue}function translatePosition(pos){return!isRTL||"number"!=typeof pos||opts.greedy&&""===opts.placeholder||!el||(pos=el.inputmask._valueGet().length-pos),pos}function caret(input,begin,end,notranslate,isDelete){var range;if(void 0===begin)return"selectionStart"in input&&"selectionEnd"in input?(begin=input.selectionStart,end=input.selectionEnd):window.getSelection?(range=window.getSelection().getRangeAt(0),range.commonAncestorContainer.parentNode!==input&&range.commonAncestorContainer!==input||(begin=range.startOffset,end=range.endOffset)):document.selection&&document.selection.createRange&&(range=document.selection.createRange(),begin=0-range.duplicate().moveStart("character",-input.inputmask._valueGet().length),end=begin+range.text.length),{begin:notranslate?begin:translatePosition(begin),end:notranslate?end:translatePosition(end)};if($.isArray(begin)&&(end=isRTL?begin[0]:begin[1],begin=isRTL?begin[1]:begin[0]),void 0!==begin.begin&&(end=isRTL?begin.begin:begin.end,begin=isRTL?begin.end:begin.begin),"number"==typeof begin){begin=notranslate?begin:translatePosition(begin),end=notranslate?end:translatePosition(end),end="number"==typeof end?end:begin;var scrollCalc=parseInt(((input.ownerDocument.defaultView||window).getComputedStyle?(input.ownerDocument.defaultView||window).getComputedStyle(input,null):input.currentStyle).fontSize)*end;if(input.scrollLeft=scrollCalc>input.scrollWidth?scrollCalc:0,input.inputmask.caretPos={begin:begin,end:end},opts.insertModeVisual&&!1===opts.insertMode&&begin===end&&(isDelete||end++),input===(input.inputmask.shadowRoot||document).activeElement)if("setSelectionRange"in input)input.setSelectionRange(begin,end);else if(window.getSelection){if(range=document.createRange(),void 0===input.firstChild||null===input.firstChild){var textNode=document.createTextNode("");input.appendChild(textNode)}range.setStart(input.firstChild,begin<input.inputmask._valueGet().length?begin:input.inputmask._valueGet().length),range.setEnd(input.firstChild,end<input.inputmask._valueGet().length?end:input.inputmask._valueGet().length),range.collapse(!0);var sel=window.getSelection();sel.removeAllRanges(),sel.addRange(range)}else input.createTextRange&&(range=input.createTextRange(),range.collapse(!0),range.moveEnd("character",end),range.moveStart("character",begin),range.select())}}function determineLastRequiredPosition(returnDefinition){var buffer=getMaskTemplate(!0,getLastValidPosition(),!0,!0),bl=buffer.length,pos,lvp=getLastValidPosition(),positions={},lvTest=maskset.validPositions[lvp],ndxIntlzr=void 0!==lvTest?lvTest.locator.slice():void 0,testPos;for(pos=lvp+1;pos<buffer.length;pos++)testPos=getTestTemplate(pos,ndxIntlzr,pos-1),ndxIntlzr=testPos.locator.slice(),positions[pos]=$.extend(!0,{},testPos);var lvTestAlt=lvTest&&void 0!==lvTest.alternation?lvTest.locator[lvTest.alternation]:void 0;for(pos=bl-1;lvp<pos&&(testPos=positions[pos],(testPos.match.optionality||testPos.match.optionalQuantifier&&testPos.match.newBlockMarker||lvTestAlt&&(lvTestAlt!==positions[pos].locator[lvTest.alternation]&&1!=testPos.match.static||!0===testPos.match.static&&testPos.locator[lvTest.alternation]&&checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","),lvTestAlt.toString().split(","))&&""!==getTests(pos)[0].def))&&buffer[pos]===getPlaceholder(pos,testPos.match));pos--)bl--;return returnDefinition?{l:bl,def:positions[bl]?positions[bl].match:void 0}:bl}function clearOptionalTail(buffer){buffer.length=0;for(var template=getMaskTemplate(!0,0,!0,void 0,!0),lmnt;void 0!==(lmnt=template.shift());)buffer.push(lmnt);return buffer}function isComplete(buffer){if($.isFunction(opts.isComplete))return opts.isComplete(buffer,opts);if("*"!==opts.repeat){var complete=!1,lrp=determineLastRequiredPosition(!0),aml=seekPrevious(lrp.l);if(void 0===lrp.def||lrp.def.newBlockMarker||lrp.def.optionality||lrp.def.optionalQuantifier){complete=!0;for(var i=0;i<=aml;i++){var test=getTestTemplate(i).match;if(!0!==test.static&&void 0===maskset.validPositions[i]&&!0!==test.optionality&&!0!==test.optionalQuantifier||!0===test.static&&buffer[i]!==getPlaceholder(i,test)){complete=!1;break}}}return complete}}function handleRemove(input,k,pos,strict,fromIsValid){if((opts.numericInput||isRTL)&&(k===keyCode.BACKSPACE?k=keyCode.DELETE:k===keyCode.DELETE&&(k=keyCode.BACKSPACE),isRTL)){var pend=pos.end;pos.end=pos.begin,pos.begin=pend}var lvp=getLastValidPosition(void 0,!0),offset;if(pos.end>=getBuffer().length&&lvp>=pos.end&&(pos.end=lvp+1),k===keyCode.BACKSPACE?pos.end-pos.begin<1&&(pos.begin=seekPrevious(pos.begin)):k===keyCode.DELETE&&pos.begin===pos.end&&(pos.end=isMask(pos.end,!0,!0)?pos.end+1:seekNext(pos.end)+1),!1!==(offset=revalidateMask(pos))){if(!0!==strict&&!1!==opts.keepStatic||null!==opts.regex&&-1!==getTest(pos.begin).match.def.indexOf("|")){var result=alternate(!0);if(result){var newPos=void 0!==result.caret?result.caret:result.pos?seekNext(result.pos.begin?result.pos.begin:result.pos):getLastValidPosition(-1,!0);(k!==keyCode.DELETE||pos.begin>newPos)&&pos.begin}}!0!==strict&&(maskset.p=k===keyCode.DELETE?pos.begin+offset:pos.begin)}}function applyInputValue(input,value){input.inputmask.refreshValue=!1,$.isFunction(opts.onBeforeMask)&&(value=opts.onBeforeMask.call(inputmask,value,opts)||value),value=value.toString().split(""),checkVal(input,!0,!1,value),inputmask.undoValue=getBuffer().join(""),(opts.clearMaskOnLostFocus||opts.clearIncomplete)&&input.inputmask._valueGet()===getBufferTemplate().join("")&&-1===getLastValidPosition()&&input.inputmask._valueSet("")}function mask(){function isElementTypeSupported(input,opts){function patchValueProperty(npt){var valueGet,valueSet;function patchValhook(type){if($.valHooks&&(void 0===$.valHooks[type]||!0!==$.valHooks[type].inputmaskpatch)){var valhookGet=$.valHooks[type]&&$.valHooks[type].get?$.valHooks[type].get:function(elem){return elem.value},valhookSet=$.valHooks[type]&&$.valHooks[type].set?$.valHooks[type].set:function(elem,value){return elem.value=value,elem};$.valHooks[type]={get:function get(elem){if(elem.inputmask){if(elem.inputmask.opts.autoUnmask)return elem.inputmask.unmaskedvalue();var result=valhookGet(elem);return-1!==getLastValidPosition(void 0,void 0,elem.inputmask.maskset.validPositions)||!0!==opts.nullable?result:""}return valhookGet(elem)},set:function set(elem,value){var result=valhookSet(elem,value);return elem.inputmask&&applyInputValue(elem,value),result},inputmaskpatch:!0}}}function getter(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==getLastValidPosition()||!0!==opts.nullable?(this.inputmask.shadowRoot||document.activeElement)===this&&opts.clearMaskOnLostFocus?(isRTL?clearOptionalTail(getBuffer().slice()).reverse():clearOptionalTail(getBuffer().slice())).join(""):valueGet.call(this):"":valueGet.call(this)}function setter(value){valueSet.call(this,value),this.inputmask&&applyInputValue(this,value)}function installNativeValueSetFallback(npt){EventRuler.on(npt,"mouseenter",function(){var input=this,value=this.inputmask._valueGet(!0);value!==(isRTL?getBuffer().reverse():getBuffer()).join("")&&applyInputValue(this,value)})}if(!npt.inputmask.__valueGet){if(!0!==opts.noValuePatching){if(Object.getOwnPropertyDescriptor){var valueProperty=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt),"value"):void 0;valueProperty&&valueProperty.get&&valueProperty.set?(valueGet=valueProperty.get,valueSet=valueProperty.set,Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0})):"input"!==npt.tagName.toLowerCase()&&(valueGet=function valueGet(){return this.textContent},valueSet=function valueSet(value){this.textContent=value},Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0}))}else document.__lookupGetter__&&npt.__lookupGetter__("value")&&(valueGet=npt.__lookupGetter__("value"),valueSet=npt.__lookupSetter__("value"),npt.__defineGetter__("value",getter),npt.__defineSetter__("value",setter));npt.inputmask.__valueGet=valueGet,npt.inputmask.__valueSet=valueSet}npt.inputmask._valueGet=function(overruleRTL){return isRTL&&!0!==overruleRTL?valueGet.call(this.el).split("").reverse().join(""):valueGet.call(this.el)},npt.inputmask._valueSet=function(value,overruleRTL){valueSet.call(this.el,null==value?"":!0!==overruleRTL&&isRTL?value.split("").reverse().join(""):value)},void 0===valueGet&&(valueGet=function valueGet(){return this.value},valueSet=function valueSet(value){this.value=value},patchValhook(npt.type),installNativeValueSetFallback(npt))}}"textarea"!==input.tagName.toLowerCase()&&opts.ignorables.push(keyCode.ENTER);var elementType=input.getAttribute("type"),isSupported="input"===input.tagName.toLowerCase()&&-1!==$.inArray(elementType,opts.supportsInputType)||input.isContentEditable||"textarea"===input.tagName.toLowerCase();if(!isSupported)if("input"===input.tagName.toLowerCase()){var el=document.createElement("input");el.setAttribute("type",elementType),isSupported="text"===el.type,el=null}else isSupported="partial";return!1!==isSupported?patchValueProperty(input):input.inputmask=void 0,isSupported}EventRuler.off(el);var isSupported=isElementTypeSupported(el,opts);if(!1!==isSupported){inputmask.originalPlaceholder=el.placeholder,inputmask.maxLength=void 0!==el?el.maxLength:void 0,-1===inputmask.maxLength&&(inputmask.maxLength=void 0),"inputMode"in el&&null===el.getAttribute("inputmode")&&(el.inputMode=opts.inputmode,el.setAttribute("inputmode",opts.inputmode)),!0===isSupported&&(opts.showMaskOnFocus=opts.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(el.autocomplete),iphone&&(opts.insertModeVisual=!1),EventRuler.on(el,"submit",EventHandlers.submitEvent),EventRuler.on(el,"reset",EventHandlers.resetEvent),EventRuler.on(el,"blur",EventHandlers.blurEvent),EventRuler.on(el,"focus",EventHandlers.focusEvent),EventRuler.on(el,"invalid",EventHandlers.invalidEvent),EventRuler.on(el,"click",EventHandlers.clickEvent),EventRuler.on(el,"mouseleave",EventHandlers.mouseleaveEvent),EventRuler.on(el,"mouseenter",EventHandlers.mouseenterEvent),EventRuler.on(el,"paste",EventHandlers.pasteEvent),EventRuler.on(el,"cut",EventHandlers.cutEvent),EventRuler.on(el,"complete",opts.oncomplete),EventRuler.on(el,"incomplete",opts.onincomplete),EventRuler.on(el,"cleared",opts.oncleared),mobile||!0===opts.inputEventOnly?el.removeAttribute("maxLength"):(EventRuler.on(el,"keydown",EventHandlers.keydownEvent),EventRuler.on(el,"keypress",EventHandlers.keypressEvent)),EventRuler.on(el,"input",EventHandlers.inputFallBackEvent),EventRuler.on(el,"compositionend",EventHandlers.compositionendEvent)),EventRuler.on(el,"setvalue",EventHandlers.setValueEvent),inputmask.undoValue=getBufferTemplate().join("");var activeElement=(el.inputmask.shadowRoot||document).activeElement;if(""!==el.inputmask._valueGet(!0)||!1===opts.clearMaskOnLostFocus||activeElement===el){applyInputValue(el,el.inputmask._valueGet(!0),opts);var buffer=getBuffer().slice();!1===isComplete(buffer)&&opts.clearIncomplete&&resetMaskSet(),opts.clearMaskOnLostFocus&&activeElement!==el&&(-1===getLastValidPosition()?buffer=[]:clearOptionalTail(buffer)),(!1===opts.clearMaskOnLostFocus||opts.showMaskOnFocus&&activeElement===el||""!==el.inputmask._valueGet(!0))&&writeBuffer(el,buffer),activeElement===el&&caret(el,seekNext(getLastValidPosition()))}}}if(void 0!==actionObj)switch(actionObj.action){case"isComplete":return el=actionObj.el,isComplete(getBuffer());case"unmaskedvalue":return void 0!==el&&void 0===actionObj.value||(valueBuffer=actionObj.value,valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,valueBuffer,opts)||valueBuffer).split(""),checkVal.call(this,void 0,!1,!1,valueBuffer),$.isFunction(opts.onBeforeWrite)&&opts.onBeforeWrite.call(inputmask,void 0,getBuffer(),0,opts)),unmaskedvalue(el);case"mask":mask();break;case"format":return valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,actionObj.value,opts)||actionObj.value).split(""),checkVal.call(this,void 0,!0,!1,valueBuffer),actionObj.metadata?{value:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join(""),metadata:maskScope.call(this,{action:"getmetadata"},maskset,opts)}:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join("");case"isValid":actionObj.value?(valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,actionObj.value,opts)||actionObj.value).split(""),checkVal.call(this,void 0,!0,!1,valueBuffer)):actionObj.value=isRTL?getBuffer().slice().reverse().join(""):getBuffer().join("");for(var buffer=getBuffer(),rl=determineLastRequiredPosition(),lmib=buffer.length-1;rl<lmib&&!isMask(lmib);lmib--);return buffer.splice(rl,lmib+1-rl),isComplete(buffer)&&actionObj.value===(isRTL?getBuffer().slice().reverse().join(""):getBuffer().join(""));case"getemptymask":return getBufferTemplate().join("");case"remove":if(el&&el.inputmask){$.data(el,"_inputmask_opts",null);var cv=opts.autoUnmask?unmaskedvalue(el):el.inputmask._valueGet(opts.autoUnmask),valueProperty;cv!==getBufferTemplate().join("")?el.inputmask._valueSet(cv,opts.autoUnmask):el.inputmask._valueSet(""),EventRuler.off(el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(valueProperty=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el),"value"),valueProperty&&el.inputmask.__valueGet&&Object.defineProperty(el,"value",{get:el.inputmask.__valueGet,set:el.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&el.__lookupGetter__("value")&&el.inputmask.__valueGet&&(el.__defineGetter__("value",el.inputmask.__valueGet),el.__defineSetter__("value",el.inputmask.__valueSet)),el.inputmask=void 0}return el;case"getmetadata":if($.isArray(maskset.metadata)){var maskTarget=getMaskTemplate(!0,0,!1).join("");return $.each(maskset.metadata,function(ndx,mtdt){if(mtdt.mask===maskTarget)return maskTarget=mtdt,!1}),maskTarget}return maskset.metadata}}},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===_typeof("test".__proto__)?function(object){return object.__proto__}:function(object){return object.constructor.prototype})},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var Inputmask=__webpack_require__(1),$=Inputmask.dependencyLib,keyCode=__webpack_require__(0),currentYear=(new Date).getFullYear(),escapeRegex=__webpack_require__(5).default,formatCode={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return pad(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return pad(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],Hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return function(){return pad(Date.prototype.getHours.call(this),x)}}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return pad(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return pad(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]"],tt:["[ap]m"],T:["[AP]"],TT:["[AP]M"],Z:[""],o:[""],S:[""]},formatAlias={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function formatcode(match){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(dynMatches&&void 0!==dynMatches[0]){var fcode=formatCode[match[0][0]+"x"].slice("");return fcode[0]=fcode[0](dynMatches[0]),fcode[3]=fcode[3](dynMatches[0]),fcode}if(formatCode[match[0]])return formatCode[match[0]]}function getTokenizer(opts){if(!opts.tokenizer){var tokens=[],dyntokens=[];for(var ndx in formatCode)if(/\.*x$/.test(ndx)){var dynToken=ndx[0]+"\\d+";-1===dyntokens.indexOf(dynToken)&&dyntokens.push(dynToken)}else-1===tokens.indexOf(ndx[0])&&tokens.push(ndx[0]);opts.tokenizer="("+(0<dyntokens.length?dyntokens.join("|")+"|":"")+tokens.join("+|")+")+?|.",opts.tokenizer=new RegExp(opts.tokenizer,"g")}return opts.tokenizer}function prefillYear(dateParts,currentResult,opts){if(dateParts.year!==dateParts.rawyear){var crrntyear=currentYear.toString(),enteredPart=dateParts.rawyear.replace(/[^0-9]/g,""),currentYearPart=crrntyear.slice(0,enteredPart.length),currentYearNextPart=crrntyear.slice(enteredPart.length);if(2===enteredPart.length&&enteredPart===currentYearPart){var entryCurrentYear=new Date(currentYear,dateParts.month-1,dateParts.day);dateParts.day===entryCurrentYear.getDay()&&(!opts.max||opts.max.date.getTime()>=entryCurrentYear.getTime())&&(dateParts.date.setFullYear(currentYear),dateParts.year=crrntyear,currentResult.insert=[{pos:currentResult.pos+1,c:currentYearNextPart[0]},{pos:currentResult.pos+2,c:currentYearNextPart[1]}])}}return currentResult}function isValidDate(dateParts,currentResult,opts){if(!isFinite(dateParts.rawday)||"29"==dateParts.day&&!isFinite(dateParts.rawyear)||new Date(dateParts.date.getFullYear(),isFinite(dateParts.rawmonth)?dateParts.month:dateParts.date.getMonth()+1,0).getDate()>=dateParts.day)return currentResult;if("29"==dateParts.day){var tokenMatch=getTokenMatch(currentResult.pos,opts);if("yyyy"===tokenMatch.targetMatch[0]&&currentResult.pos-tokenMatch.targetMatchIndex==2)return currentResult.remove=currentResult.pos+1,currentResult}return!1}function isDateInRange(dateParts,result,opts,maskset,fromCheckval){if(!result)return result;if(opts.min){if(dateParts.rawyear){var rawYear=dateParts.rawyear.replace(/[^0-9]/g,""),minYear=opts.min.year.substr(0,rawYear.length),maxYear;if(rawYear<minYear){var tokenMatch=getTokenMatch(result.pos,opts);if(rawYear=dateParts.rawyear.substr(0,result.pos-tokenMatch.targetMatchIndex+1),minYear=opts.min.year.substr(0,rawYear.length),minYear<=rawYear)return result.remove=tokenMatch.targetMatchIndex+rawYear.length,result;if(rawYear="yyyy"===tokenMatch.targetMatch[0]?dateParts.rawyear.substr(1,1):dateParts.rawyear.substr(0,1),minYear=opts.min.year.substr(2,1),maxYear=opts.max?opts.max.year.substr(2,1):rawYear,1===rawYear.length&&minYear<=rawYear<=maxYear&&!0!==fromCheckval)return"yyyy"===tokenMatch.targetMatch[0]?(result.insert=[{pos:result.pos+1,c:rawYear,strict:!0}],result.caret=result.pos+2,maskset.validPositions[result.pos].input=opts.min.year[1]):(result.insert=[{pos:result.pos+1,c:opts.min.year[1],strict:!0},{pos:result.pos+2,c:rawYear,strict:!0}],result.caret=result.pos+3,maskset.validPositions[result.pos].input=opts.min.year[0]),result;result=!1}}result&&dateParts.year&&dateParts.year===dateParts.rawyear&&opts.min.date.getTime()==opts.min.date.getTime()&&(result=opts.min.date.getTime()<=dateParts.date.getTime())}return result&&opts.max&&opts.max.date.getTime()==opts.max.date.getTime()&&(result=opts.max.date.getTime()>=dateParts.date.getTime()),result}function parse(format,dateObjValue,opts,raw){var mask="",match,fcode;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);)if(void 0===dateObjValue)if(fcode=formatcode(match))mask+="("+fcode[0]+")";else switch(match[0]){case"[":mask+="(";break;case"]":mask+=")?";break;default:mask+=escapeRegex(match[0])}else if(fcode=formatcode(match))if(!0!==raw&&fcode[3]){var getFn=fcode[3];mask+=getFn.call(dateObjValue.date)}else fcode[2]?mask+=dateObjValue["raw"+fcode[2]]:mask+=match[0];else mask+=match[0];return mask}function pad(val,len){for(val=String(val),len=len||2;val.length<len;)val="0"+val;return val}function analyseMask(maskString,format,opts){var dateObj={date:new Date(1,0,1)},targetProp,mask=maskString,match,dateOperation;function setValue(dateObj,value,opts){dateObj[targetProp]=value.replace(/[^0-9]/g,"0"),dateObj["raw"+targetProp]=value,void 0!==dateOperation&&dateOperation.call(dateObj.date,"month"==targetProp?parseInt(dateObj[targetProp])-1:dateObj[targetProp])}if("string"==typeof mask){for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);){var dynMatches=new RegExp("\\d+$").exec(match[0]),fcode=dynMatches?match[0][0]+"x":match[0],value=void 0;if(dynMatches){var lastIndex=getTokenizer(opts).lastIndex,tokanMatch=getTokenMatch(match.index,opts);getTokenizer(opts).lastIndex=lastIndex,value=mask.slice(0,mask.indexOf(tokanMatch.nextMatch[0]))}else value=mask.slice(0,fcode.length);Object.prototype.hasOwnProperty.call(formatCode,fcode)&&(targetProp=formatCode[fcode][2],dateOperation=formatCode[fcode][1],setValue(dateObj,value,opts)),mask=mask.slice(value.length)}return dateObj}if(mask&&"object"===_typeof(mask)&&Object.prototype.hasOwnProperty.call(mask,"date"))return mask}function importDate(dateObj,opts){return parse(opts.inputFormat,{date:dateObj},opts)}function getTokenMatch(pos,opts){var calcPos=0,targetMatch,match,matchLength=0;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(opts.inputFormat);){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(matchLength=dynMatches?parseInt(dynMatches[0]):match[0].length,calcPos+=matchLength,pos<=calcPos){targetMatch=match,match=getTokenizer(opts).exec(opts.inputFormat);break}}return{targetMatchIndex:calcPos-matchLength,nextMatch:match,targetMatch:targetMatch}}Inputmask.extendAliases({datetime:{mask:function mask(opts){return opts.numericInput=!1,formatCode.S=opts.i18n.ordinalSuffix.join("|"),opts.inputFormat=formatAlias[opts.inputFormat]||opts.inputFormat,opts.displayFormat=formatAlias[opts.displayFormat]||opts.displayFormat||opts.inputFormat,opts.outputFormat=formatAlias[opts.outputFormat]||opts.outputFormat||opts.inputFormat,opts.placeholder=""!==opts.placeholder?opts.placeholder:opts.inputFormat.replace(/[[\]]/,""),opts.regex=parse(opts.inputFormat,void 0,opts),opts.min=analyseMask(opts.min,opts.inputFormat,opts),opts.max=analyseMask(opts.max,opts.inputFormat,opts),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,skipOptionalPartCharacter:"",i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(strict)return!0;if(isNaN(c)&&buffer[pos]!==c){var tokenMatch=getTokenMatch(pos,opts);if(tokenMatch.nextMatch&&tokenMatch.nextMatch[0]===c&&1<tokenMatch.targetMatch[0].length){var validator=formatCode[tokenMatch.targetMatch[0]][0];if(new RegExp(validator).test("0"+buffer[pos-1]))return buffer[pos]=buffer[pos-1],buffer[pos-1]="0",{fuzzy:!0,buffer:buffer,refreshFromBuffer:{start:pos-1,end:pos+1},pos:pos+1}}}return!0},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict,fromCheckval){if(strict)return!0;var tokenMatch,validator;if(!1===currentResult)return tokenMatch=getTokenMatch(pos+1,opts),tokenMatch.targetMatch&&tokenMatch.targetMatchIndex===pos&&1<tokenMatch.targetMatch[0].length&&void 0!==formatCode[tokenMatch.targetMatch[0]]&&(validator=formatCode[tokenMatch.targetMatch[0]][0],new RegExp(validator).test("0"+c))?{insert:[{pos:pos,c:"0"},{pos:pos+1,c:c}],pos:pos+1}:currentResult;if(currentResult.fuzzy&&(buffer=currentResult.buffer,pos=currentResult.pos),tokenMatch=getTokenMatch(pos,opts),tokenMatch.targetMatch&&tokenMatch.targetMatch[0]&&void 0!==formatCode[tokenMatch.targetMatch[0]]){validator=formatCode[tokenMatch.targetMatch[0]][0];var part=buffer.slice(tokenMatch.targetMatchIndex,tokenMatch.targetMatchIndex+tokenMatch.targetMatch[0].length);!1===new RegExp(validator).test(part.join(""))&&2===tokenMatch.targetMatch[0].length&&maskset.validPositions[tokenMatch.targetMatchIndex]&&maskset.validPositions[tokenMatch.targetMatchIndex+1]&&(maskset.validPositions[tokenMatch.targetMatchIndex+1].input="0")}var result=currentResult,dateParts=analyseMask(buffer.join(""),opts.inputFormat,opts);return result&&dateParts.date.getTime()==dateParts.date.getTime()&&(result=prefillYear(dateParts,result,opts),result=isValidDate(dateParts,result,opts),result=isDateInRange(dateParts,result,opts,maskset,fromCheckval)),pos&&result&&currentResult.pos!==pos?{buffer:parse(opts.inputFormat,dateParts,opts).split(""),refreshFromBuffer:{start:pos,end:currentResult.pos}}:result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var input=this;e.ctrlKey&&e.keyCode===keyCode.RIGHT&&(this.inputmask._valueSet(importDate(new Date,opts)),$(this).trigger("setvalue"))},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return unmaskedValue?parse(opts.outputFormat,analyseMask(maskedValue,opts.inputFormat,opts),opts,!0):unmaskedValue},casing:function casing(elem,test,pos,validPositions){return 0==test.nativeDef.indexOf("[ap]")?elem.toLowerCase():0==test.nativeDef.indexOf("[AP]")?elem.toUpperCase():elem},onBeforeMask:function onBeforeMask(initialValue,opts){return"[object Date]"===Object.prototype.toString.call(initialValue)&&(initialValue=importDate(initialValue,opts)),initialValue},insertMode:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric"}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var Inputmask=__webpack_require__(1),$=Inputmask.dependencyLib,keyCode=__webpack_require__(0),escapeRegex=__webpack_require__(5).default;function autoEscape(txt,opts){for(var escapedTxt="",i=0;i<txt.length;i++)Inputmask.prototype.definitions[txt.charAt(i)]||opts.definitions[txt.charAt(i)]||opts.optionalmarker[0]===txt.charAt(i)||opts.optionalmarker[1]===txt.charAt(i)||opts.quantifiermarker[0]===txt.charAt(i)||opts.quantifiermarker[1]===txt.charAt(i)||opts.groupmarker[0]===txt.charAt(i)||opts.groupmarker[1]===txt.charAt(i)||opts.alternatormarker===txt.charAt(i)?escapedTxt+="\\"+txt.charAt(i):escapedTxt+=txt.charAt(i);return escapedTxt}function alignDigits(buffer,digits,opts,force){if(0<buffer.length&&0<digits&&(!opts.digitsOptional||force)){var radixPosition=$.inArray(opts.radixPoint,buffer);-1===radixPosition&&(buffer.push(opts.radixPoint),radixPosition=buffer.length-1);for(var i=1;i<=digits;i++)isFinite(buffer[radixPosition+i])||(buffer[radixPosition+i]="0")}return buffer}function findValidator(symbol,maskset){var posNdx=0;if("+"===symbol){for(posNdx in maskset.validPositions);posNdx=parseInt(posNdx)}for(var tstNdx in maskset.tests)if(tstNdx=parseInt(tstNdx),posNdx<=tstNdx)for(var ndx=0,ndxl=maskset.tests[tstNdx].length;ndx<ndxl;ndx++)if((void 0===maskset.validPositions[tstNdx]||"-"===symbol)&&maskset.tests[tstNdx][ndx].match.def===symbol)return tstNdx+(void 0!==maskset.validPositions[tstNdx]&&"-"!==symbol?1:0);return posNdx}function findValid(symbol,maskset){var ret=-1;return $.each(maskset.validPositions,function(ndx,tst){if(tst&&tst.match.def===symbol)return ret=parseInt(ndx),!1}),ret}function parseMinMaxOptions(opts){void 0===opts.parseMinMaxOptions&&(null!==opts.min&&(opts.min=opts.min.toString().replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.min=opts.min.replace(opts.radixPoint,".")),opts.min=isFinite(opts.min)?parseFloat(opts.min):NaN,isNaN(opts.min)&&(opts.min=Number.MIN_VALUE)),null!==opts.max&&(opts.max=opts.max.toString().replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.max=opts.max.replace(opts.radixPoint,".")),opts.max=isFinite(opts.max)?parseFloat(opts.max):NaN,isNaN(opts.max)&&(opts.max=Number.MAX_VALUE)),opts.parseMinMaxOptions="done")}function genMask(opts){opts.repeat=0,opts.groupSeparator===opts.radixPoint&&opts.digits&&"0"!==opts.digits&&("."===opts.radixPoint?opts.groupSeparator=",":","===opts.radixPoint?opts.groupSeparator=".":opts.groupSeparator="")," "===opts.groupSeparator&&(opts.skipOptionalPartCharacter=void 0),1<opts.placeholder.length&&(opts.placeholder=opts.placeholder.charAt(0)),"radixFocus"===opts.positionCaretOnClick&&""===opts.placeholder&&(opts.positionCaretOnClick="lvp");var decimalDef="0",radixPointDef=opts.radixPoint;!0===opts.numericInput&&void 0===opts.__financeInput?(decimalDef="1",opts.positionCaretOnClick="radixFocus"===opts.positionCaretOnClick?"lvp":opts.positionCaretOnClick,opts.digitsOptional=!1,isNaN(opts.digits)&&(opts.digits=2),opts._radixDance=!1,radixPointDef=","===opts.radixPoint?"?":"!",""!==opts.radixPoint&&void 0===opts.definitions[radixPointDef]&&(opts.definitions[radixPointDef]={},opts.definitions[radixPointDef].validator="["+opts.radixPoint+"]",opts.definitions[radixPointDef].placeholder=opts.radixPoint,opts.definitions[radixPointDef].static=!0,opts.definitions[radixPointDef].generated=!0)):(opts.__financeInput=!1,opts.numericInput=!0);var mask="[+]",altMask;if(mask+=autoEscape(opts.prefix,opts),""!==opts.groupSeparator?(void 0===opts.definitions[opts.groupSeparator]&&(opts.definitions[opts.groupSeparator]={},opts.definitions[opts.groupSeparator].validator="["+opts.groupSeparator+"]",opts.definitions[opts.groupSeparator].placeholder=opts.groupSeparator,opts.definitions[opts.groupSeparator].static=!0,opts.definitions[opts.groupSeparator].generated=!0),mask+=opts._mask(opts)):mask+="9{+}",void 0!==opts.digits&&0!==opts.digits){var dq=opts.digits.toString().split(",");isFinite(dq[0])&&dq[1]&&isFinite(dq[1])?mask+=radixPointDef+decimalDef+"{"+opts.digits+"}":(isNaN(opts.digits)||0<parseInt(opts.digits))&&(opts.digitsOptional?(altMask=mask+radixPointDef+decimalDef+"{0,"+opts.digits+"}",opts.keepStatic=!0):mask+=radixPointDef+decimalDef+"{"+opts.digits+"}")}return mask+=autoEscape(opts.suffix,opts),mask+="[-]",altMask&&(mask=[altMask+autoEscape(opts.suffix,opts)+"[-]",mask]),opts.greedy=!1,parseMinMaxOptions(opts),mask}function hanndleRadixDance(pos,c,radixPos,maskset,opts){return opts._radixDance&&opts.numericInput&&c!==opts.negationSymbol.back&&pos<=radixPos&&(0<radixPos||c==opts.radixPoint)&&(void 0===maskset.validPositions[pos-1]||maskset.validPositions[pos-1].input!==opts.negationSymbol.back)&&(pos-=1),pos}function decimalValidator(chrs,maskset,pos,strict,opts){var radixPos=maskset.buffer?maskset.buffer.indexOf(opts.radixPoint):-1,result=-1!==radixPos&&new RegExp("[0-9\uff11-\uff19]").test(chrs);return opts._radixDance&&result&&null==maskset.validPositions[radixPos]?{insert:{pos:radixPos===pos?radixPos+1:radixPos,c:opts.radixPoint},pos:pos}:result}function checkForLeadingZeroes(buffer,opts){var numberMatches=new RegExp("(^"+(""!==opts.negationSymbol.front?escapeRegex(opts.negationSymbol.front)+"?":"")+escapeRegex(opts.prefix)+")(.*)("+escapeRegex(opts.suffix)+(""!=opts.negationSymbol.back?escapeRegex(opts.negationSymbol.back)+"?":"")+"$)").exec(buffer.slice().reverse().join("")),number=numberMatches?numberMatches[2]:"",leadingzeroes=!1;return number&&(number=number.split(opts.radixPoint.charAt(0))[0],leadingzeroes=new RegExp("^[0"+opts.groupSeparator+"]*").exec(number)),!(!leadingzeroes||!(1<leadingzeroes[0].length||0<leadingzeroes[0].length&&leadingzeroes[0].length<number.length))&&leadingzeroes}Inputmask.extendAliases({numeric:{mask:genMask,_mask:function _mask(opts){return"("+opts.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"numeric",shortcuts:{k:"000",m:"000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",definitions:{0:{validator:decimalValidator},1:{validator:decimalValidator,definitionSymbol:"9"},"+":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&("-"===chrs||chrs===opts.negationSymbol.front)}},"-":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&chrs===opts.negationSymbol.back}}},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(!1!==opts.__financeInput&&c===opts.radixPoint)return!1;var pattern;if(pattern=opts.shortcuts&&opts.shortcuts[c]){if(1<pattern.length)for(var inserts=[],i=0;i<pattern.length;i++)inserts.push({pos:pos+i,c:pattern[i],strict:!1});return{insert:inserts}}var radixPos=$.inArray(opts.radixPoint,buffer),initPos=pos;if(pos=hanndleRadixDance(pos,c,radixPos,maskset,opts),"-"===c||c===opts.negationSymbol.front){if(!0!==opts.allowMinus)return!1;var isNegative=!1,front=findValid("+",maskset),back=findValid("-",maskset);return-1!==front&&(isNegative=[front,back]),!1!==isNegative?{remove:isNegative,caret:initPos}:{insert:[{pos:findValidator("+",maskset),c:opts.negationSymbol.front,fromIsValid:!0},{pos:findValidator("-",maskset),c:opts.negationSymbol.back,fromIsValid:void 0}],caret:initPos+opts.negationSymbol.back.length}}if(strict)return!0;if(-1!==radixPos&&!0===opts._radixDance&&!1===isSelection&&c===opts.radixPoint&&void 0!==opts.digits&&(isNaN(opts.digits)||0<parseInt(opts.digits))&&radixPos!==pos)return{caret:opts._radixDance&&pos===radixPos-1?radixPos+1:radixPos};if(!1===opts.__financeInput)if(isSelection){if(opts.digitsOptional)return{rewritePosition:caretPos.end};if(!opts.digitsOptional){if(caretPos.begin>radixPos&&caretPos.end<=radixPos)return c===opts.radixPoint?{insert:{pos:radixPos+1,c:"0",fromIsValid:!0},rewritePosition:radixPos}:{rewritePosition:radixPos+1};if(caretPos.begin<radixPos)return{rewritePosition:caretPos.begin-1}}}else if(!opts.showMaskOnHover&&!opts.showMaskOnFocus&&!opts.digitsOptional&&0<opts.digits&&""===this.inputmask.__valueGet.call(this))return{rewritePosition:radixPos};return{rewritePosition:pos}},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){if(!1===currentResult)return currentResult;if(strict)return!0;if(null!==opts.min||null!==opts.max){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min&&(unmasked.toString().length>opts.min.toString().length||unmasked<0))return!1;if(null!==opts.max&&unmasked>opts.max)return!!opts.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:alignDigits(opts.max.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}return currentResult},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){if(""===unmaskedValue&&!0===opts.nullable)return unmaskedValue;var processValue=maskedValue.replace(opts.prefix,"");return processValue=processValue.replace(opts.suffix,""),processValue=processValue.replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),""!==opts.placeholder.charAt(0)&&(processValue=processValue.replace(new RegExp(opts.placeholder.charAt(0),"g"),"0")),opts.unmaskAsNumber?(""!==opts.radixPoint&&-1!==processValue.indexOf(opts.radixPoint)&&(processValue=processValue.replace(escapeRegex.call(this,opts.radixPoint),".")),processValue=processValue.replace(new RegExp("^"+escapeRegex(opts.negationSymbol.front)),"-"),processValue=processValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back)+"$"),""),Number(processValue)):processValue},isComplete:function isComplete(buffer,opts){var maskedValue=(opts.numericInput?buffer.slice().reverse():buffer).join("");return maskedValue=maskedValue.replace(new RegExp("^"+escapeRegex(opts.negationSymbol.front)),"-"),maskedValue=maskedValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back)+"$"),""),maskedValue=maskedValue.replace(opts.prefix,""),maskedValue=maskedValue.replace(opts.suffix,""),maskedValue=maskedValue.replace(new RegExp(escapeRegex(opts.groupSeparator)+"([0-9]{3})","g"),"$1"),","===opts.radixPoint&&(maskedValue=maskedValue.replace(escapeRegex(opts.radixPoint),".")),isFinite(maskedValue)},onBeforeMask:function onBeforeMask(initialValue,opts){var radixPoint=opts.radixPoint||",";isFinite(opts.digits)&&(opts.digits=parseInt(opts.digits)),"number"!=typeof initialValue&&"number"!==opts.inputType||""===radixPoint||(initialValue=initialValue.toString().replace(".",radixPoint));var valueParts=initialValue.split(radixPoint),integerPart=valueParts[0].replace(/[^\-0-9]/g,""),decimalPart=1<valueParts.length?valueParts[1].replace(/[^0-9]/g,""):"",forceDigits=1<valueParts.length;initialValue=integerPart+(""!==decimalPart?radixPoint+decimalPart:decimalPart);var digits=0;if(""!==radixPoint&&(digits=opts.digitsOptional?opts.digits<decimalPart.length?opts.digits:decimalPart.length:opts.digits,""!==decimalPart||!opts.digitsOptional)){var digitsFactor=Math.pow(10,digits||1);initialValue=initialValue.replace(escapeRegex(radixPoint),"."),isNaN(parseFloat(initialValue))||(initialValue=(opts.roundingFN(parseFloat(initialValue)*digitsFactor)/digitsFactor).toFixed(digits)),initialValue=initialValue.toString().replace(".",radixPoint)}if(0===opts.digits&&-1!==initialValue.indexOf(radixPoint)&&(initialValue=initialValue.substring(0,initialValue.indexOf(radixPoint))),null!==opts.min||null!==opts.max){var numberValue=initialValue.toString().replace(radixPoint,".");null!==opts.min&&numberValue<opts.min?initialValue=opts.min.toString().replace(".",radixPoint):null!==opts.max&&numberValue>opts.max&&(initialValue=opts.max.toString().replace(".",radixPoint))}return alignDigits(initialValue.toString().split(""),digits,opts,forceDigits).join("")},onBeforeWrite:function onBeforeWrite(e,buffer,caretPos,opts){function stripBuffer(buffer,stripRadix){if(!1!==opts.__financeInput||stripRadix){var position=$.inArray(opts.radixPoint,buffer);-1!==position&&buffer.splice(position,1)}if(""!==opts.groupSeparator)for(;-1!==(position=buffer.indexOf(opts.groupSeparator));)buffer.splice(position,1);return buffer}var result,leadingzeroes=checkForLeadingZeroes(buffer,opts);if(leadingzeroes)for(var caretNdx=buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join(""))-(leadingzeroes[0]==leadingzeroes.input?0:1),offset=leadingzeroes[0]==leadingzeroes.input?1:0,i=leadingzeroes[0].length-offset;0<i;i--)delete this.maskset.validPositions[caretNdx+i],delete buffer[caretNdx+i];if(e)switch(e.type){case"blur":case"checkval":if(null!==opts.min){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min)return{refreshFromBuffer:!0,buffer:alignDigits(opts.min.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}if(buffer[buffer.length-1]===opts.negationSymbol.front){var nmbrMtchs=new RegExp("(^"+(""!=opts.negationSymbol.front?escapeRegex(opts.negationSymbol.front)+"?":"")+escapeRegex(opts.prefix)+")(.*)("+escapeRegex(opts.suffix)+(""!=opts.negationSymbol.back?escapeRegex(opts.negationSymbol.back)+"?":"")+"$)").exec(stripBuffer(buffer.slice(),!0).reverse().join("")),number=nmbrMtchs?nmbrMtchs[2]:"";0==number&&(result={refreshFromBuffer:!0,buffer:[0]})}else""!==opts.radixPoint&&buffer[0]===opts.radixPoint&&(result&&result.buffer?result.buffer.shift():(buffer.shift(),result={refreshFromBuffer:!0,buffer:stripBuffer(buffer)}));if(opts.enforceDigitsOnBlur){result=result||{};var bffr=result&&result.buffer||buffer.slice().reverse();result.refreshFromBuffer=!0,result.buffer=alignDigits(bffr,opts.digits,opts,!0).reverse()}}return result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var $input=$(this),bffr;if(e.ctrlKey)switch(e.keyCode){case keyCode.UP:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(opts.step)),$input.trigger("setvalue"),!1;case keyCode.DOWN:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(opts.step)),$input.trigger("setvalue"),!1}if(!e.shiftKey&&(e.keyCode===keyCode.DELETE||e.keyCode===keyCode.BACKSPACE||e.keyCode===keyCode.BACKSPACE_SAFARI)&&caretPos.begin!==buffer.length){if(buffer[e.keyCode===keyCode.DELETE?caretPos.begin-1:caretPos.end]===opts.negationSymbol.front)return bffr=buffer.slice().reverse(),""!==opts.negationSymbol.front&&bffr.shift(),""!==opts.negationSymbol.back&&bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin]),!1;if(!0===opts._radixDance){var radixPos=$.inArray(opts.radixPoint,buffer);if(opts.digitsOptional){if(0===radixPos)return bffr=buffer.slice().reverse(),bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin>=bffr.length?bffr.length:caretPos.begin]),!1}else if(-1!==radixPos&&(caretPos.begin<radixPos||caretPos.end<radixPos||e.keyCode===keyCode.DELETE&&caretPos.begin===radixPos))return caretPos.begin!==caretPos.end||e.keyCode!==keyCode.BACKSPACE&&e.keyCode!==keyCode.BACKSPACE_SAFARI||caretPos.begin++,bffr=buffer.slice().reverse(),bffr.splice(bffr.length-caretPos.begin,caretPos.begin-caretPos.end+1),bffr=alignDigits(bffr,opts.digits,opts).join(""),$input.trigger("setvalue",[bffr,caretPos.begin>=bffr.length?radixPos+1:caretPos.begin]),!1}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function _mask(opts){return"("+opts.groupSeparator+"99){*|1}("+opts.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var _window=_interopRequireDefault(__webpack_require__(2)),_inputmask=_interopRequireDefault(__webpack_require__(1));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!_isNativeFunction(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof _cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _construct(Parent,args,Class){return _construct=isNativeReflectConstruct()?Reflect.construct:function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a),instance=new Constructor;return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _isNativeFunction(fn){return-1!==Function.toString.call(fn).indexOf("[native code]")}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var document=_window.default.document;if(document&&document.head&&document.head.attachShadow&&void 0===customElements.get("input-mask")){var InputmaskElement=function(_HTMLElement){function InputmaskElement(){var _this;_classCallCheck(this,InputmaskElement),_this=_possibleConstructorReturn(this,_getPrototypeOf(InputmaskElement).call(this));var attributeNames=_this.getAttributeNames(),shadow=_this.attachShadow({mode:"closed"}),input=document.createElement("input");for(var attr in input.type="text",shadow.appendChild(input),attributeNames)Object.prototype.hasOwnProperty.call(attributeNames,attr)&&input.setAttribute(attributeNames[attr],_this.getAttribute(attributeNames[attr]));var im=new _inputmask.default;return im.dataAttribute="",im.mask(input),input.inputmask.shadowRoot=shadow,_this}return _inherits(InputmaskElement,_HTMLElement),InputmaskElement}(_wrapNativeSuper(HTMLElement));customElements.define("input-mask",InputmaskElement)}}],installedModules={},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=6);function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var modules,installedModules});;
function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};
// === round-btn ==================================
$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 800 && height < 3500) {
    $('.round-btn').fadeIn();
  } else {
    $('.round-btn').fadeOut();
  }
});
// =============================================
$('._spols-block').niceScroll({
  cursoropacitymax: 0,
  background: 'transparent',
});

$('.licence__imgs-box').niceScroll({
  cursorcolor: '#003DD6',
});
// parallax
new universalParallax().init();
//RADIO
$.each($('.radio__item'), function (index, val) {
  if ($(this).find('input').prop('checked') == true) {
    $(this).addClass('_active');
  }
});
$(document).on('click', '.radio__item', function (event) {
  $(this).parents('.radio').find('.radio__item').removeClass('_active');
  $(this).parents('.radio').find('.radio__item input').prop('checked', false);
  $(this).toggleClass('_active');
  $(this).find('input').prop('checked', true);
  return false;
});




;
var ua = window.navigator.userAgent;
var msie = ua.indexOf('MSIE ');
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
  return is_ie;
}
if (isIE()) {
  document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
  document.querySelector('body').classList.add('_touch');
}
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
function ibg() {
  if (isIE()) {
    let ibg = document.querySelectorAll('._ibg');
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
        ibg[i].style.backgroundImage =
          'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }
}
ibg();

if (document.querySelector('.wrapper')) {
  document.querySelector('.wrapper').classList.add('_loaded');
}

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
  const hsh = location.hash.replace('#', '');
  if (document.querySelector('.popup_' + hsh)) {
    popup_open(hsh);
  } else if (document.querySelector('div.' + hsh)) {
    _goto(document.querySelector('.' + hsh), 500, '');
  }
}
//=================
//Menu
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu != null) {
  let delay = 500;
  iconMenu.addEventListener('click', function (e) {
    if (unlock) {
      body_lock(delay);
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    }
  });
}
function menu_close() {
  let iconMenu = document.querySelector('.icon-menu');
  let menuBody = document.querySelector('.menu__body');
  iconMenu.classList.remove('_active');
  menuBody.classList.remove('_active');
}
menuBody.addEventListener('click', function (e) {
  if (!e.target === document.querySelector('.menu__link')) {
    return;
  }
  let delay = 500;
  body_lock(delay);
  iconMenu.classList.remove('_active');
  menuBody.classList.remove('_active');
});

// --------------

//=================
//BodyLock
function body_lock(delay) {
  let body = document.querySelector('body');
  if (body.classList.contains('_lock')) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}
function body_lock_remove(delay) {
  let body = document.querySelector('body');
  if (unlock) {
    let lock_padding = document.querySelectorAll('._lp');
    setTimeout(() => {
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('_lock');
    }, delay);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
function body_lock_add(delay) {
  let body = document.querySelector('body');
  if (unlock) {
    let lock_padding = document.querySelectorAll('._lp');
    for (let index = 0; index < lock_padding.length; index++) {
      const el = lock_padding[index];
      el.style.paddingRight =
        window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }
    body.style.paddingRight =
      window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.classList.add('_lock');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
//=================

// // LettersAnimation
// let title = document.querySelectorAll('._letter-animation');
// if (title) {
//   for (let index = 0; index < title.length; index++) {
//     let el = title[index];
//     let txt = el.innerHTML;
//     let txt_words = txt.replace('  ', ' ').split(' ');
//     let new_title = '';
//     for (let index = 0; index < txt_words.length; index++) {
//       let txt_word = txt_words[index];
//       let len = txt_word.length;
//       new_title = new_title + '<p>';
//       for (let index = 0; index < len; index++) {
//         let it = txt_word.substr(index, 1);
//         if (it == ' ') {
//           it = '&nbsp;';
//         }
//         new_title = new_title + '<span>' + it + '</span>';
//       }
//       el.innerHTML = new_title;
//       new_title = new_title + '&nbsp;</p>';
//     }
//   }
// }
//=================
//Spol
let spols = document.querySelectorAll('._spols');
for (let index = 0; index < spols.length; index++) {
  let spol = spols[index];
  let spols_items = spol.querySelectorAll('._spols-item');
  let spols_blocks = spol.querySelectorAll('._spols-block');
  for (let index = 0; index < spols_items.length; index++) {
    let spols_item = spols_items[index];
    spols_item.addEventListener('click', function (e) {
      for (let index = 0; index < spols_items.length; index++) {
        let spols_item = spols_items[index];
        spols_item.classList.remove('_active');
        spols_blocks[index].classList.remove('_active');
        // _slideUp(el.nextElementSibling);
        // _slideUp(spols_blocks[index]);
      }
      spols_item.classList.add('_active');
      spols_blocks[index].classList.add('_active');
      // _slideDown(spols_blocks[index]);
      // _slideDown(el.nextElementSibling);
      e.preventDefault();
    });
  }
}
//=================
//Tabs
let tabs = document.querySelectorAll('._tabs');
for (let index = 0; index < tabs.length; index++) {
  let tab = tabs[index];
  let tabs_items = tab.querySelectorAll('._tabs-item');
  let tabs_blocks = tab.querySelectorAll('._tabs-block');
  for (let index = 0; index < tabs_items.length; index++) {
    let tabs_item = tabs_items[index];
    tabs_item.addEventListener('click', function (e) {
      for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.classList.remove('_active');
        tabs_blocks[index].classList.remove('_active');
      }
      tabs_item.classList.add('_active');
      tabs_blocks[index].classList.add('_active');
      e.preventDefault();
    });
  }
}
//=================
//Spollers
let spollers = document.querySelectorAll('._spoller');
if (spollers.length > 0) {
  for (let index = 0; index < spollers.length; index++) {
    const spoller = spollers[index];
    spoller.addEventListener('click', function (e) {
      if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
        return false;
      }
      if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
        return false;
      }
      if (spoller.closest('._spollers').classList.contains('_one')) {
        let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
        for (let i = 0; i < curent_spollers.length; i++) {
          let el = curent_spollers[i];
          if (el != spoller) {
            el.classList.remove('_active');
            _slideUp(el.nextElementSibling);
          }
        }
      }
      spoller.classList.toggle('_active');
      _slideToggle(spoller.nextElementSibling);
    });
  }
}
//=================

//SearchInList
function search_in_list(input) {
  let ul = input.parentNode.querySelector('ul');
  let li = ul.querySelectorAll('li');
  let filter = input.value.toUpperCase();

  for (i = 0; i < li.length; i++) {
    let el = li[i];
    let item = el;
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  }
}
//=================
//DigiFormat
function digi(str) {
  var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  return r;
}
//=================

//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
  const el = popup_link[index];
  el.addEventListener('click', function (e) {
    if (unlock) {
      let item = el.getAttribute('href').replace('#', '');
      let video = el.getAttribute('data-video');
      popup_open(item, video);
    }
    e.preventDefault();
  });
}
for (let index = 0; index < popups.length; index++) {
  const popup = popups[index];
  popup.addEventListener('click', function (e) {
    if (!e.target.closest('.popup__body')) {
      popup_close(e.target.closest('.popup'));
    }
  });
}
function popup_open(item, video = '') {
  let activePopup = document.querySelectorAll('.popup._active');
  if (activePopup.length > 0) {
    popup_close('', false);
  }
  let curent_popup = document.querySelector('.popup_' + item);
  if (curent_popup && unlock) {
    if (video != '' && video != null) {
      let popup_video = document.querySelector('.popup_video');
      popup_video.querySelector('.popup__video').innerHTML =
        '<iframe src="https://www.youtube.com/embed/' +
        video +
        '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }
    if (!document.querySelector('.menu__body._active')) {
      body_lock_add(500);
    }
    curent_popup.classList.add('_active');
    history.pushState('', '', '#' + item);
  }
}
function popup_close(item, bodyUnlock = true) {
  if (unlock) {
    if (!item) {
      for (let index = 0; index < popups.length; index++) {
        const popup = popups[index];
        let video = popup.querySelector('.popup__video');
        if (video) {
          video.innerHTML = '';
        }
        popup.classList.remove('_active');
      }
    } else {
      let video = item.querySelector('.popup__video');
      if (video) {
        video.innerHTML = '';
      }
      item.classList.remove('_active');
    }
    if (!document.querySelector('.menu__body._active') && bodyUnlock) {
      body_lock_remove(500);
    }
    history.pushState('', '', window.location.href.split('#')[0]);
  }
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
  for (let index = 0; index < popup_close_icon.length; index++) {
    const el = popup_close_icon[index];
    el.addEventListener('click', function () {
      popup_close(el.closest('.popup'));
    });
  }
}
document.addEventListener('keydown', function (e) {
  if (e.which == 27) {
    popup_close();
  }
});
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};
let _slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};
let _slideToggle = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (window.getComputedStyle(target).display === 'none') {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
};
//========================================
//Wrap
function _wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
  for (var i = 0; i < el.length; i++) {
    el[i].classList.remove(class_name);
  }
}
//========================================
//IsHidden
function _is_hidden(el) {
  return el.offsetParent === null;
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}
function makeEaseInOut(timing) {
  return function (timeFraction) {
    if (timeFraction < 0.5) return timing(2 * timeFraction) / 2;
    else return (2 - timing(2 * (1 - timeFraction))) / 2;
  };
}
function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}
function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();


;
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
function form_submit(e) {
	let btn = event.target;
	let form = btn.closest('form');
	let message = form.getAttribute('data-message');
	let error = form_validate(form);
	if (error == 0) {
		//SendForm
		// form_clean(form);
		if (message) {
			popup_open('message-' + message);
			e.preventDefault();
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		event.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
// function form_clean(form) {
// 	let inputs = form.querySelectorAll('input,textarea');
// 	for (let index = 0; index < inputs.length; index++) {
// 		const el = inputs[index];
// 		el.parentElement.classList.remove('_focus');
// 		el.classList.remove('_focus');
// 		el.value = el.getAttribute('data-value');
// 	}
	
// }

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}




//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass") {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask('+38(999) 999 9999', {
            //"placeholder": '',
            clearIncomplete: true,
            clearMaskOnLostFocus: true,
            onincomplete: function () {
              input_clear_mask(input, input_g_value);
            },
          }).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
		
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}


;
let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
  //scr_body.setAttribute('data-scroll', pageYOffset);
  let src_value = pageYOffset;
  let header = document.querySelector('header.header');
  if (src_value > 10) {
    header.classList.add('_scroll');
  } else {
    header.classList.remove('_scroll');
  }
  if (scr_blocks.length > 0) {
    for (let index = 0; index < scr_blocks.length; index++) {
      let block = scr_blocks[index];
      let block_offset = offset(block).top;
      let block_height = block.offsetHeight;

      if (
        pageYOffset > block_offset - window.innerHeight / 1.5 &&
        pageYOffset < block_offset + block_height - window.innerHeight / 5
      ) {
        block.classList.add('_scr-sector_active');
      } else {
        if (block.classList.contains('_scr-sector_active')) {
          block.classList.remove('_scr-sector_active');
        }
      }
      if (
        pageYOffset > block_offset - window.innerHeight / 2 &&
        pageYOffset < block_offset + block_height - window.innerHeight / 5
      ) {
        if (!block.classList.contains('_scr-sector_current')) {
          block.classList.add('_scr-sector_current');
        }
      } else {
        if (block.classList.contains('_scr-sector_current')) {
          block.classList.remove('_scr-sector_current');
        }
      }
    }
  }
  if (scr_items.length > 0) {
    for (let index = 0; index < scr_items.length; index++) {
      let scr_item = scr_items[index];
      let scr_item_offset = offset(scr_item).top;
      let scr_item_height = scr_item.offsetHeight;

      let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
      if (window.innerHeight > scr_item_height) {
        scr_item_point = window.innerHeight - scr_item_height / 3;
      }

      if (
        src_value > scr_item_offset - scr_item_point &&
        src_value < scr_item_offset + scr_item_height
      ) {
        scr_item.classList.add('_active');
        scroll_load_item(scr_item);
      } else {
        scr_item.classList.remove('_active');
      }
      if (src_value > scr_item_offset - window.innerHeight) {
        if (scr_item.querySelectorAll('._lazy').length > 0) {
          scroll_lazy(scr_item);
        }
      }
    }
  }

  if (scr_fix_block.length > 0) {
    fix_block(scr_fix_block, src_value);
  }
  let custom_scroll_line = document.querySelector('._custom-scroll__line');
  if (custom_scroll_line) {
    let window_height = window.innerHeight;
    let content_height = document.querySelector('.wrapper').offsetHeight;
    let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
    let custom_scroll_line_height = custom_scroll_line.offsetHeight;
    custom_scroll_line.style.transform =
      'translateY(' + ((window_height - custom_scroll_line_height) / 100) * scr_procent + 'px)';
  }

  if (src_value > scrollDirection) {
    // downscroll code
  } else {
    // upscroll code
  }
  scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
  //document.addEventListener("DOMContentLoaded", scroll_scroll);
  scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
  let lazy_src = scr_item.querySelectorAll('*[data-src]');
  if (lazy_src.length > 0) {
    for (let index = 0; index < lazy_src.length; index++) {
      const el = lazy_src[index];
      if (!el.classList.contains('_loaded')) {
        el.setAttribute('src', el.getAttribute('data-src'));
        el.classList.add('_loaded');
      }
    }
  }
  let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
  if (lazy_srcset.length > 0) {
    for (let index = 0; index < lazy_srcset.length; index++) {
      const el = lazy_srcset[index];
      if (!el.classList.contains('_loaded')) {
        el.setAttribute('srcset', el.getAttribute('data-srcset'));
        el.classList.add('_loaded');
      }
    }
  }
}

function scroll_load_item(scr_item) {
  if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
    let map_item = document.getElementById('map');
    if (map_item) {
      scr_item.classList.add('_loaded-map');
      map();
    }
  }
}

//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
  disableScroll();
  window.addEventListener('wheel', full_scroll);
}
function full_scroll(e) {
  let viewport_height = window.innerHeight;
  if (viewport_height >= scr_min_height) {
    if (scrolling_full) {
      // ВЫЧИСЛИТЬ!!!
      let current_scroll = pageYOffset; //parseInt(scr_body.getAttribute('data-scroll'));
      //
      let current_block = document.querySelector('._scr-sector._scr-sector_current');
      let current_block_pos = offset(current_block).top;
      let current_block_height = current_block.offsetHeight;
      let current_block_next = current_block.nextElementSibling;
      let current_block_prev = current_block.previousElementSibling;
      let block_pos;
      if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
        if (current_block_prev) {
          let current_block_prev_height = current_block_prev.offsetHeight;
          block_pos = offset(current_block_prev).top;
          if (current_block_height <= viewport_height) {
            if (current_block_prev_height >= viewport_height) {
              block_pos = block_pos + (current_block_prev_height - viewport_height);
              full_scroll_to_sector(block_pos);
            }
          } else {
            enableScroll();
            if (current_scroll <= current_block_pos) {
              full_scroll_to_sector(block_pos);
            }
          }
        } else {
          full_scroll_pagestart();
        }
      } else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
        if (current_block_next) {
          block_pos = offset(current_block_next).top;
          if (current_block_height <= viewport_height) {
            full_scroll_to_sector(block_pos);
          } else {
            enableScroll();
            if (current_scroll >= block_pos - viewport_height) {
              full_scroll_to_sector(block_pos);
            }
          }
        } else {
          full_scroll_pageend();
        }
      }
    } else {
      disableScroll();
    }
  } else {
    enableScroll();
  }
}
function full_scroll_to_sector(pos) {
  disableScroll();
  scrolling_full = false;
  _goto(pos, 800);

  let scr_pause = 500;
  if (navigator.appVersion.indexOf('Mac') != -1) {
    scr_pause = 1000;
  }
  setTimeout(function () {
    scrolling_full = true;
  }, scr_pause);
}
function full_scroll_pagestart() {}
function full_scroll_pageend() {}

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
  let blocks = [];
  for (let index = 0; index < link.length; index++) {
    let el = link[index];
    let block_name = el.getAttribute('href').replace('#', '');
    if (block_name != '' && !~blocks.indexOf(block_name)) {
      blocks.push(block_name);
    }
    el.addEventListener('click', function (e) {
      if (document.querySelector('.menu__body._active')) {
        menu_close();
        body_lock_remove(500);
      }
      let target_block_class = el.getAttribute('href').replace('#', '');
      let target_block = document.querySelector('.' + target_block_class);
      _goto(target_block, 300);
      e.preventDefault();
    });
  }

  window.addEventListener('scroll', function (el) {
    let old_current_link = document.querySelectorAll('._goto-block._active');
    if (old_current_link) {
      for (let index = 0; index < old_current_link.length; index++) {
        let el = old_current_link[index];
        el.classList.remove('_active');
      }
    }
    for (let index = 0; index < blocks.length; index++) {
      let block = blocks[index];
      let block_item = document.querySelector('.' + block);
      if (block_item) {
        let block_offset = offset(block_item).top;
        let block_height = block_item.offsetHeight;
        if (
          pageYOffset > block_offset - window.innerHeight / 3 &&
          pageYOffset < block_offset + block_height - window.innerHeight / 3
        ) {
          let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
          for (let index = 0; index < current_links.length; index++) {
            let current_link = current_links[index];
            current_link.classList.add('_active');
          }
        }
      }
    }
  });
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
  for (let index = 0; index < goto_links.length; index++) {
    let goto_link = goto_links[index];
    goto_link.addEventListener('click', function (e) {
      let target_block_class = goto_link.getAttribute('href').replace('#', '');
      let target_block = document.querySelector('.' + target_block_class);
      _goto(target_block, 300);
      e.preventDefault();
    });
  }
}
function _goto(target_block, speed, offset = 0) {
  let header = '';
  // //OffsetHeader
  // if (window.innerWidth < 992) {
  header = 'header';
  // }
  let options = {
    speedAsDuration: true,
    speed: speed,
    header: header,
    offset: offset,
    easing: 'easeOutQuad',
  };
  let scr = new SmoothScroll();
  scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
  /*if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}*/
}

function fix_block(scr_fix_block, scr_value) {
  let window_width = parseInt(window.innerWidth);
  let window_height = parseInt(window.innerHeight);
  let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
  for (let index = 0; index < scr_fix_block.length; index++) {
    const block = scr_fix_block[index];
    const block_width = block.getAttribute('data-width');
    const item = block.querySelector('._side-block');
    if (!block_width) {
      block_width = 0;
    }
    if (window_width > block_width) {
      if (item.offsetHeight < window_height - (header_height + 30)) {
        if (scr_value > offset(block).top - (header_height + 15)) {
          item.style.cssText =
            'position:fixed;bottom:auto;top:' +
            header_height +
            'px;width:' +
            block.offsetWidth +
            'px;left:' +
            offset(block).left +
            'px;';
        } else {
          gotoRelative(item);
        }
        if (
          scr_value >
          block.offsetHeight + offset(block).top - (item.offsetHeight + (header_height + 15))
        ) {
          block.style.cssText = 'position:relative;';
          item.style.cssText = 'position:absolute;bottom:0;top:auto;left:0px;width:100%';
        }
      } else {
        gotoRelative(item);
      }
    }
  }
  function gotoRelative(item) {
    item.style.cssText = 'position:relative;bottom:auto;top:0px;left:0px;';
  }
}

if (!isMobile.any()) {
  //custom_scroll();
  /*
	window.addEventListener('wheel', scroll_animate, {
		capture: true,
		passive: true
	});
	window.addEventListener('resize', custom_scroll, {
		capture: true,
		passive: true
	});
	*/
}
function custom_scroll(event) {
  scr_body.style.overflow = 'hidden';
  let window_height = window.innerHeight;
  let custom_scroll_line = document.querySelector('._custom-scroll__line');
  let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
  let custom_cursor_height = Math.min(
    window_height,
    Math.round(window_height * (window_height / custom_scroll_content_height)),
  );
  if (custom_scroll_content_height > window_height) {
    if (!custom_scroll_line) {
      let custom_scroll = document.createElement('div');
      custom_scroll_line = document.createElement('div');
      custom_scroll.setAttribute('class', '_custom-scroll');
      custom_scroll_line.setAttribute('class', '_custom-scroll__line');
      custom_scroll.appendChild(custom_scroll_line);
      scr_body.appendChild(custom_scroll);
    }
    custom_scroll_line.style.height = custom_cursor_height + 'px';
  }
}

let new_pos = pageYOffset;
function scroll_animate(event) {
  let window_height = window.innerHeight;
  let content_height = document.querySelector('.wrapper').offsetHeight;
  let start_position = pageYOffset;
  let pos_add = 100;

  if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
    new_pos = new_pos - pos_add;
  } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
    new_pos = new_pos + pos_add;
  }
  if (new_pos > content_height - window_height) new_pos = content_height - window_height;
  if (new_pos < 0) new_pos = 0;

  if (scrolling) {
    scrolling = false;
    _goto(new_pos, 1000);

    let scr_pause = 100;
    if (navigator.appVersion.indexOf('Mac') != -1) {
      scr_pause = scr_pause * 2;
    }
    setTimeout(function () {
      scrolling = true;
      _goto(new_pos, 1000);
    }, scr_pause);
  }
  //If native scroll
  //disableScroll();
}
;
!function (i) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery) }(function (i) { "use strict"; var e = window.Slick || {}; (e = function () { var e = 0; return function (t, o) { var s, n = this; n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(t), appendDots: i(t), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function (e, t) { return i('<button type="button" />').text(t + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0) } }()).prototype.activateADA = function () { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) { var s = this; if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1; s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) { i(t).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit() }, e.prototype.animateHeight = function () { var i = this; if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) { var e = i.$slides.eq(i.currentSlide).outerHeight(!0); i.$list.animate({ height: e }, i.options.speed) } }, e.prototype.animateSlide = function (e, t) { var o = {}, s = this; s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function (i) { i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o)) }, complete: function () { t && t.call() } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () { s.disableTransition(), t.call() }, s.options.speed)) }, e.prototype.getNavTarget = function () { var e = this, t = e.options.asNavFor; return t && null !== t && (t = i(t).not(e.$slider)), t }, e.prototype.asNavFor = function (e) { var t = this.getNavTarget(); null !== t && "object" == typeof t && t.each(function () { var t = i(this).slick("getSlick"); t.unslicked || t.slideHandler(e, !0) }) }, e.prototype.applyTransition = function (i) { var e = this, t = {}; !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t) }, e.prototype.autoPlay = function () { var i = this; i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed)) }, e.prototype.autoPlayClear = function () { var i = this; i.autoPlayTimer && clearInterval(i.autoPlayTimer) }, e.prototype.autoPlayIterator = function () { var i = this, e = i.currentSlide + i.options.slidesToScroll; i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e)) }, e.prototype.buildArrows = function () { var e = this; !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function () { var e, t, o = this; if (!0 === o.options.dots) { for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1)t.append(i("<li />").append(o.options.customPaging.call(this, o, e))); o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active") } }, e.prototype.buildOut = function () { var e = this; e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) { i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable") }, e.prototype.buildRows = function () { var i, e, t, o, s, n, r, l = this; if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) { for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) { var d = document.createElement("div"); for (e = 0; e < l.options.rows; e++) { var a = document.createElement("div"); for (t = 0; t < l.options.slidesPerRow; t++) { var c = i * r + (e * l.options.slidesPerRow + t); n.get(c) && a.appendChild(n.get(c)) } d.appendChild(a) } o.appendChild(d) } l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" }) } }, e.prototype.checkResponsive = function (e, t) { var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width(); if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) { s = null; for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o])); null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]) } }, e.prototype.changeSlide = function (e, t) { var o, s, n, r = this, l = i(e.currentTarget); switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) { case "previous": s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t); break; case "next": s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t); break; case "index": var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll; r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus"); break; default: return } }, e.prototype.checkNavigable = function (i) { var e, t; if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) { if (i < e[o]) { i = t; break } t = e[o] } return i }, e.prototype.cleanUpEvents = function () { var e = this; e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition) }, e.prototype.cleanUpSlideEvents = function () { var e = this; e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.cleanUpRows = function () { var i, e = this; e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i)) }, e.prototype.clickHandler = function (i) { !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault()) }, e.prototype.destroy = function (e) { var t = this; t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () { i(this).attr("style", i(this).data("originalStyling")) }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]) }, e.prototype.disableTransition = function (i) { var e = this, t = {}; t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t) }, e.prototype.fadeSlide = function (i, e) { var t = this; !1 === t.cssTransitions ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function () { t.disableTransition(i), e.call() }, t.options.speed)) }, e.prototype.fadeSlideOut = function (i) { var e = this; !1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) { var e = this; null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit()) }, e.prototype.focusHandler = function () { var e = this; e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) { t.stopImmediatePropagation(); var o = i(this); setTimeout(function () { e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay()) }, 0) }) }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () { return this.currentSlide }, e.prototype.getDotCount = function () { var i = this, e = 0, t = 0, o = 0; if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll); return o - 1 }, e.prototype.getLeft = function (i) { var e, t, o, s, n = this, r = 0; return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e }, e.prototype.getOption = e.prototype.slickGetOption = function (i) { return this.options[i] }, e.prototype.getNavigableIndexes = function () { var i, e = this, t = 0, o = 0, s = []; for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;)s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; return s }, e.prototype.getSlick = function () { return this }, e.prototype.getSlideCount = function () { var e, t, o = this; return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) { if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1 }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) { this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e) }, e.prototype.init = function (e) { var t = this; i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay()) }, e.prototype.initADA = function () { var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow), o = e.getNavigableIndexes().filter(function (i) { return i >= 0 && i < e.slideCount }); e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) { var s = o.indexOf(t); i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s }) }), e.$dots.attr("role", "tablist").find("li").each(function (s) { var n = o[s]; i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" }) }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end()); for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)e.$slides.eq(s).attr("tabindex", 0); e.activateADA() }, e.prototype.initArrowEvents = function () { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler))) }, e.prototype.initDotEvents = function () { var e = this; !0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function () { var e = this; e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1))) }, e.prototype.initializeEvents = function () { var e = this; e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition) }, e.prototype.initUI = function () { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show() }, e.prototype.keyHandler = function (i) { var e = this; i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } })) }, e.prototype.lazyLoad = function () { function e(e) { i("img[data-lazy]", e).each(function () { var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"), s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img"); r.onload = function () { e.animate({ opacity: 0 }, 100, function () { o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({ opacity: 1 }, 200, function () { e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), n.$slider.trigger("lazyLoaded", [n, e, t]) }) }, r.onerror = function () { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]) }, r.src = t }) } var t, o, s, n = this; if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++; e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)) }, e.prototype.loadSlider = function () { var i = this; i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad() }, e.prototype.next = e.prototype.slickNext = function () { this.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function () { var i = this; i.checkResponsive(), i.setPosition() }, e.prototype.pause = e.prototype.slickPause = function () { var i = this; i.autoPlayClear(), i.paused = !0 }, e.prototype.play = e.prototype.slickPlay = function () { var i = this; i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1 }, e.prototype.postSlide = function (e) { var t = this; t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus())) }, e.prototype.prev = e.prototype.slickPrev = function () { this.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function (i) { i.preventDefault() }, e.prototype.progressiveLazyLoad = function (e) { e = e || 1; var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider); d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () { s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad() }, r.onerror = function () { e < 3 ? setTimeout(function () { l.progressiveLazyLoad(e + 1) }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad()) }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]) }, e.prototype.refresh = function (e) { var t, o, s = this; o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1) }, e.prototype.registerBreakpoints = function () { var e, t, o, s = this, n = s.options.responsive || null; if ("array" === i.type(n) && n.length) { s.respondTo = s.options.respondTo || "window"; for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) { for (t = n[e].breakpoint; o >= 0;)s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--; s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings } s.breakpoints.sort(function (i, e) { return s.options.mobileFirst ? i - e : e - i }) } }, e.prototype.reinit = function () { var e = this; e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]) }, e.prototype.resize = function () { var e = this; i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () { e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50)) }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) { var o = this; if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1; o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit() }, e.prototype.setCSS = function (i) { var e, t, o = this, s = {}; !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s))) }, e.prototype.setDimensions = function () { var i = this; !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length))); var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width(); !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e) }, e.prototype.setFade = function () { var e, t = this; t.$slides.each(function (o, s) { e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 }) }, e.prototype.setHeight = function () { var i = this; if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) { var e = i.$slides.eq(i.currentSlide).outerHeight(!0); i.$list.css("height", e) } }, e.prototype.setOption = e.prototype.slickSetOption = function () { var e, t, o, s, n, r = this, l = !1; if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function (i, e) { r.options[i] = e }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else { for (e = r.options.responsive.length - 1; e >= 0;)r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--; r.options.responsive.push(s[t]) } l && (r.unload(), r.reinit()) }, e.prototype.setPosition = function () { var i = this; i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]) }, e.prototype.setProps = function () { var i = this, e = document.body.style; i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType }, e.prototype.setSlideClasses = function (i) { var e, t, o, s, n = this; if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) { var r = n.options.slidesToShow % 2 == 0 ? 1 : 0; e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center") } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")); "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad() }, e.prototype.setupInfinite = function () { var e, t, o, s = this; if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) { for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1)t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned"); for (e = 0; e < o + s.slideCount; e += 1)t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned"); s.$slideTrack.find(".slick-cloned").find("[id]").each(function () { i(this).attr("id", "") }) } }, e.prototype.interrupt = function (i) { var e = this; i || e.autoPlay(), e.interrupted = i }, e.prototype.selectHandler = function (e) { var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index")); s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s) }, e.prototype.slideHandler = function (i, e, t) { var o, s, n, r, l, d = null, a = this; if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () { a.postSlide(o) }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () { a.postSlide(o) }) : a.postSlide(o)); else { if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () { a.postSlide(s) })) : a.postSlide(s), void a.animateHeight(); !0 !== t ? a.animateSlide(d, function () { a.postSlide(s) }) : a.postSlide(s) } }, e.prototype.startLoad = function () { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function () { var i, e, t, o, s = this; return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function (i) { var e, t, o = this; if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1; if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1; if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) { switch (t = o.swipeDirection()) { case "left": case "down": e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0; break; case "right": case "up": e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1 }"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t])) } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {}) }, e.prototype.swipeHandler = function (i) { var e = this; if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) { case "start": e.swipeStart(i); break; case "move": e.swipeMove(i); break; case "end": e.swipeEnd(i) } }, e.prototype.swipeMove = function (i) { var e, t, o, s, n, r, l = this; return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft)))) }, e.prototype.swipeStart = function (i) { var e, t = this; if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1; void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0 }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () { var i = this; null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit()) }, e.prototype.unload = function () { var e = this; i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, e.prototype.unslick = function (i) { var e = this; e.$slider.trigger("unslick", [e, i]), e.destroy() }, e.prototype.updateArrows = function () { var i = this; Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, e.prototype.updateDots = function () { var i = this; null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active")) }, e.prototype.visibility = function () { var i = this; i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1) }, i.fn.slick = function () { var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length; for (i = 0; i < r; i++)if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t; return o } });
;
if ($('.slider-close').length > 0) {
  $('.slider-close').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });
}
if ($('.constructions__slider-big').length > 0) {
  $('.constructions__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    fade: true,
    infinite: false,
    asNavFor: '.constructions__slider-small',

    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
}
if ($('.constructions__slider-small').length > 0) {
  $('.constructions__slider-small').slick({
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    asNavFor: '.constructions__slider-big',
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}
if ($('.menu-slider').length > 0) {
  $('.menu-slider').slick({
    vertical: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick',
      },
    ],
  });
}

$(window).on('resize orientationchange', function () {
  if ($(window).width() > 767) {
    $('.menu-slider').slick('unslick');
  }
});

if ($('.about-slider').length > 0) {
  $('.about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    asNavFor: '.about-pagin__list',
    autoplay: false,
    fade: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
}

if ($('.about-pagin__list').length > 0) {
  $('.about-pagin__list').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    asNavFor: '.about-slider',
    centerMode: false,
    focusOnSelect: true,
    autoplay: false,
    infinite: false,
  });
}

if ($('.licence__img-slider').length > 0) {
  $('.licence__img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.licence__labels-slider',
    autoplay: false,
    fade: true,
    infinite: false,
  });
}

if ($('.licence__labels-slider').length > 0) {
  $('.licence__labels-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.licence__img-slider',
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    infinite: false,
  });
}

if ($('.storey__slider').length > 0) {
  $('.storey__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: true,
      infinite: false,
  });
}
;
// 1. Ссылку на видео храним в data-src, а не src
// 2. Обратим внимание, что выставлены параметры автовоспроизведения(autoplay=1),
// отмены воспроизведения похожих видео(rel = 0),
// не показываем информацию об авторе(showinfo = 0),
// отключаем лого ютуб(modestbranding = 1)
$(document).on('click', '.js-videoPoster', function (e) {
  //отменяем стандартное действие button
  e.preventDefault();
  var poster = $(this);
  // ищем родителя ближайшего по классу
  var wrapper = poster.closest('.js-videoWrapper');
  videoPlay(wrapper);
});

//вопроизводим видео, при этом скрывая постер
function videoPlay(wrapper) {
  var iframe = wrapper.find('.js-videoIframe');
  // Берем ссылку видео из data
  var src = iframe.data('src');
  // скрываем постер
  wrapper.addClass('videoWrapperActive');
  // подставляем в src параметр из data
  iframe.attr('src', src);
}


;
