/*! caja-kissy 2013-09-03 */
KISSY.add("openjs/kissy/gallery/kcharts/1.1/index",function(t,n,e,r){function o(o){function i(t){this.inner=new n(t)}function a(t){this.inner=new e(t)}function s(t){this.inner=new r(t)}return i.prototype.render=function(){this.inner.render()},i.prototype.showLine=function(){this.inner.showLine()},i.prototype.hideLine=function(){this.inner.hideLine()},i.prototype.clear=function(){this.inner.clear()},i.prototype.on=function(t,n){this.inner.on(t,o.markFunction(function(){n.call()}))},o.markCtor(i),o.grantMethod(i,"render"),o.grantMethod(i,"showLine"),o.grantMethod(i,"hideLine"),o.grantMethod(i,"clear"),o.grantMethod(i,"on"),a.prototype.render=function(){this.inner.render()},a.prototype.clear=function(){this.inner.clear()},a.prototype.on=function(t,n){this.inner.on(t,o.markFunction(function(){n.call()}))},o.markCtor(a),o.grantMethod(a,"render"),o.grantMethod(a,"clear"),o.grantMethod(a,"on"),s.prototype.render=function(){this.inner.render()},s.prototype.clear=function(){this.inner.clear()},s.prototype.on=function(t,n){this.inner.on(t,o.markFunction(function(){n.call()}))},o.markCtor(s),o.grantMethod(s,"render"),o.grantMethod(s,"clear"),o.grantMethod(s,"on"),function(n){return{KCharts:{LineChart:o.markFunction(function(){var e=t.makeArray(arguments),r=cajaAFTB.untame(e[0]);return r.renderTo=t.DOM.get(r.renderTo,n.mod),new i(r)}),BarChart:o.markFunction(function(){var e=t.makeArray(arguments),r=cajaAFTB.untame(e[0]);return r.renderTo=t.DOM.get(r.renderTo,n.mod),new a(r)}),PieChart:o.markFunction(function(){var e=t.makeArray(arguments),r=cajaAFTB.untame(e[0]);return r.renderTo=t.DOM.get(r.renderTo,n.mod),new s(r)})}}}}return t.DOM,t.Event,o},{requires:["gallery/kcharts/1.1/linechart/index","gallery/kcharts/1.1/barchart/index","gallery/kcharts/1.1/piechart/index"]});