/*! caja-kissy 2013-09-03 */
KISSY.add("init-countdown-widgets",function(t){function n(n,e){var r=this;cfg={timeBegin:0,collateurl:"",collateval:0},r.timeStart=new Date,r.config=t.merge(cfg,e||{}),r._countTime(n)}function e(n,r,o){var i={d:".ks-d",h:".ks-h",m:".ks-m",s:".ks-s",i:".ks-i"},a={interval:1e3,timeUnitCls:i,minDigit:2,timeRunCls:".ks-countdown-run",timeEndCls:".ks-countdown-end"},s=t.merge(a,o);s.run&&!t.isFunction(s.run)&&delete s.run,s.end&&!t.isFunction(s.end)&&delete s.end,s.interval=parseInt(s.interval),(isNaN(s.interval)||200>s.interval)&&(s.interval=200),e.superclass.constructor.call(this,r,s),this.counter(n)}function r(n,e){var r=function(n){t.isDate(n)||(n=new Date),t.isFunction(e)&&e(n)};t.io({url:n,type:"HEAD",success:function(t,n,e){r(new Date(e.getResponseHeader("date")))},error:function(){r(new Date)},cache:!1})}function r(n,e){function r(t,n){1e3>t?e(n):3>i?o():e(new Date(n.setMilliseconds(n.getMilliseconds()+t/2)))}function o(){var e=new Date;i++,t.io({url:n,type:"HEAD",success:function(t,n,o){r(new Date-e,new Date(o.getResponseHeader("date")))},error:function(){r()},cache:!1})}var i=0;o()}function o(n,e,o){n="."+(n||"J_TWidget");var a=function(r){t.query(n,e).each(function(n){var e=i.attr(n,"data-widget-type"),o=i.attr(n,"data-widget-config");"Countdown"===e&&(o=t.isNull(o)?{}:JSON.parse(o.replace(/'/g,'"')),r&&t.isDate(r)&&(o.timeBegin=r),new t.Countdown(n,o.endTime,o))})};o?r(o,a):a()}var i=t.DOM,a={d:864e5,h:36e5,m:6e4,s:1e3,i:1},s=["d","h","m","s","i"];return n.prototype={_countTime:function(n){var e=this,r=e.config,o=r.timeBegin,i=0;if(/^(\d{4})\-(\d{1,2})\-(\d{1,2})(\s+)(\d{1,2}):(\d{1,2}):(\d{1,2})$/gi.test(n.replace(/\./g,"-"))){var a=n.match(/\d+/g);n=new Date(a[0],a[1]-1,a[2],a[3],a[4],a[5])}else/^\d+&/.test(n)&&(n=parseInt(n));i=t.isNull(o)||isNaN(o)||0>=o?t.isDate(n)?n-new Date:parseInt(n):typeof o==typeof n?n-o:0,(!t.isNumber(i)||0>i)&&(i=0),e.timeRemain=i},getRemain:function(){var t=parseInt(this.timeRemain-(new Date-this.timeStart));return isNaN(t)||0>=t?0:t},format:function(n){var e=Array.prototype.slice.call(arguments,1),r=[];return t.each(e,function(t){if(a[t]){var e=Math.floor(n/a[t]);n-=e*a[t],r.push(e)}}),r},fetch:function(t,n,e){var r=this,o=setInterval(function(){var t=r.getRemain();t>0?n&&n.call(r,t):(n&&n.call(r,0),e&&e.call(r),clearInterval(o))},t)}},t.extend(e,n,{counter:function(n){var e=this,r=e.config,o=function(n){var o=[n].concat(d),i=e.format.apply(this,o);t.each(l,function(t,n){t.text(i[n])}),r.run&&r.run.call(e,o,i)},i=function(){u.hide(),c.show(),r.end&&r.end.call(e)},a=r.timeUnitCls,n=t.one(n),u=n.all(r.timeRunCls),c=n.all(r.timeEndCls),l=[],d=[];t.each(s,function(t){a[t]&&n.one(a[t])&&(l.push(n.one(a[t])),d.push(t))}),u.show(),c.hide(),e.fetch(r.interval,o,i)}}),e.autoRender=o,e.Core=n,e.getServerTime=r,t.Countdown=e,e}),KISSY.use("switchable, init-countdown-widgets",function(t,n,e){function r(r,o){function i(){t.later(function(){if(0!==u.length){try{a(u.shift())}catch(n){t.log("��ʼ����������")}i()}},0)}function a(r){var o,i=r.getAttribute("data-widget-type");if(i)try{switch(o=r.getAttribute("data-widget-config"),o&&(o=o.replace(/'/g,'"')),o=t.JSON.parse(o),!0){case s.switchable.indexOf(i)>-1:new n(r,o);break;case s.countdown.indexOf(i)>-1:new e(r,o.endTime,o);break;default:t.log("��kissy����û�в��ҵ�����Ҫ��ʼ��������")}}catch(a){t.log("widget "+a,"warn")}}r="."+(r||"KS_Widget");var s={switchable:"Tabs Slide Carousel Accordion",overlay:"Popup",countdown:"Countdown"},u=t.query(r,o);i()}var o=t.DOM,i="J_TScriptedModule";KISSY.each(o.query("."+i),function(t){r("J_TWidget",t)})});