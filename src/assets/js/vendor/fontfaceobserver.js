!function(){"use strict";var t,e=[];function n(){for(;e.length;)e[0](),e.shift()}function o(t){this.a=i,this.b=void 0,this.f=[];var e=this;try{t(function(t){!function t(e,n){if(e.a==i){if(n==e)throw new TypeError;var o=!1;try{var r=n&&n.then;if(null!=n&&"object"==typeof n&&"function"==typeof r)return void r.call(n,function(n){o||t(e,n),o=!0},function(t){o||a(e,t),o=!0})}catch(t){return void(o||a(e,t))}e.a=0,e.b=n,s(e)}}(e,t)},function(t){a(e,t)})}catch(t){a(e,t)}}t=function(){setTimeout(n)};var i=2;function r(t){return new o(function(e){e(t)})}function a(t,e){if(t.a==i){if(e==t)throw new TypeError;t.a=1,t.b=e,s(t)}}function s(n){var o;o=function(){if(n.a!=i)for(;n.f.length;){var t=(r=n.f.shift())[0],e=r[1],o=r[2],r=r[3];try{0==n.a?o("function"==typeof t?t.call(void 0,n.b):n.b):1==n.a&&("function"==typeof e?o(e.call(void 0,n.b)):r(n.b))}catch(t){r(t)}}},e.push(o),1==e.length&&t()}o.prototype.g=function(t){return this.c(void 0,t)},o.prototype.c=function(t,e){var n=this;return new o(function(o,i){n.f.push([t,e,o,i]),s(n)})},window.Promise||(window.Promise=o,window.Promise.resolve=r,window.Promise.reject=function(t){return new o(function(e,n){n(t)})},window.Promise.race=function(t){return new o(function(e,n){for(var o=0;o<t.length;o+=1)r(t[o]).c(e,n)})},window.Promise.all=function(t){return new o(function(e,n){function o(n){return function(o){a[n]=o,(i+=1)==t.length&&e(a)}}var i=0,a=[];0==t.length&&e(a);for(var s=0;s<t.length;s+=1)r(t[s]).c(o(s),n)})},window.Promise.prototype.then=o.prototype.c,window.Promise.prototype.catch=o.prototype.g)}(),function(){function t(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function e(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function n(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+e+";"}function o(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e&&(t.g=e,!0)}function i(e,n){function i(){var t=r;o(t)&&t.a.parentNode&&n(t.g)}var r=e;t(e.b,i),t(e.c,i),o(e)}function r(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}var a=null,s=null,c=null,d=null;function l(t,e){return[t.style,t.weight,function(){if(null===c){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif"}catch(t){}c=""!==t.style.font}return c}()?t.stretch:"","100px",e].join(" ")}r.prototype.load=function(t,o){var r=this,c=t||"BESbswy",f=0,u=o||3e3,h=(new Date).getTime();return new Promise(function(t,o){var p,m;if(null===d&&(d=!!document.fonts),(p=d)&&(null===s&&(s=/OS X.*Version\/10\..*Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),p=!s),p){p=new Promise(function(t,e){!function n(){(new Date).getTime()-h>=u?e():document.fonts.load(l(r,'"'+r.family+'"'),c).then(function(e){1<=e.length?t():setTimeout(n,25)},function(){e()})}()});var w=new Promise(function(t,e){f=setTimeout(e,u)});Promise.race([w,p]).then(function(){clearTimeout(f),t(r)},function(){o(r)})}else m=function(){function s(){var e;(e=-1!=w&&-1!=v||-1!=w&&-1!=y||-1!=v&&-1!=y)&&((e=w!=v&&w!=y&&v!=y)||(null===a&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),a=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=a&&(w==g&&v==g&&y==g||w==b&&v==b&&y==b||w==x&&v==x&&y==x)),e=!e),e&&(E.parentNode&&E.parentNode.removeChild(E),clearTimeout(f),t(r))}var d=new e(c),p=new e(c),m=new e(c),w=-1,v=-1,y=-1,g=-1,b=-1,x=-1,E=document.createElement("div");E.dir="ltr",n(d,l(r,"sans-serif")),n(p,l(r,"serif")),n(m,l(r,"monospace")),E.appendChild(d.a),E.appendChild(p.a),E.appendChild(m.a),document.body.appendChild(E),g=d.a.offsetWidth,b=p.a.offsetWidth,x=m.a.offsetWidth,function t(){if((new Date).getTime()-h>=u)E.parentNode&&E.parentNode.removeChild(E),o(r);else{var e=document.hidden;!0!==e&&void 0!==e||(w=d.a.offsetWidth,v=p.a.offsetWidth,y=m.a.offsetWidth,s()),f=setTimeout(t,50)}}(),i(d,function(t){w=t,s()}),n(d,l(r,'"'+r.family+'",sans-serif')),i(p,function(t){v=t,s()}),n(p,l(r,'"'+r.family+'",serif')),i(m,function(t){y=t,s()}),n(m,l(r,'"'+r.family+'",monospace'))},document.body?m():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),m()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),m())})})},"undefined"!=typeof module?module.exports=r:(window.FontFaceObserver=r,window.FontFaceObserver.prototype.load=r.prototype.load)}();