/*! caja-kissy 2013-09-03 */
(function(t,n){var e=window.cajaAFTB||{},r=n;e.untame=function(t){if(r.isObject(t)||r.isArray(t)){var n=r.isObject(t)?{}:[];for(var o in t)if(t.hasOwnProperty(o)){var i=""+o;"TAMED_TWIN___"==i||(n[o]=e.untame(t[o]))}return n}return t},e.rewriteURL=function(t,n,e,o){var i=window.cajaConfig&&cajaConfig.uri||{white_list:[".taobao.com",".taobao.net",".alipay.com",".alibaba.com",".alimama.com",".koubei.com",".alisoft.com",".taobaocdn.com",".taobaocdn.net",".tbcdn.cn",".tmall.com",".hitao.com"],black_list:["s.click.alimama.com","gouwu.alimama.com","cam.taoke.alimama.com","tms.taoke.alimama.com","search8.taobao.com","p.alimama.com","z.alimama.com","t.alimama.com","s.click.taobao.com","huoban.taobao.com","login.taobao.com","member1.taobao.com","oauth.taobao.com","container.api.taoabo.com","to.taobao.com"]};if(o){if(t=r.trim(t),"src"===o.XML_ATTR)return t;var a=/^http[s]?:\/\//;if(0!==t.length&&a.test(t))if("href"!==o.XML_ATTR);else{for(var s=0,u=i.black_list.length;u>s;s++)if(-1!==t.indexOf(i.black_list[s]))return;for(var c=t.replace(a,""),l=c.lastIndexOf("/"),p=-1===l?c:c.substring(0,l),s=0,u=i.white_list.length;u>s;s++)if(-1!==p.indexOf(i.white_list[s]))return t}}},window.cajaAFTB=e})(caja,KISSY);