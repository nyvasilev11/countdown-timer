(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{144:function(e,t,n){e.exports=n(376)},374:function(e,t,n){},375:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(30),o=n.n(r),l=n(56),i=n.n(l),u=(n(98),n(5)),m=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.date}));return c.a.createElement("div",{className:"config-side__config config-side__config--date"},c.a.createElement("p",{className:"sub-title"},"Countdown to date:"),c.a.createElement(i.a,{className:"config-side__input",dateFormat:"dd/MM/yyyy",selected:t,onChange:function(t){return e(function(e){return{type:"calendar",payload:e}}(t))},minDate:new Date}))},s=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.clock}));return c.a.createElement("div",{className:"config-side__config config-side__config--time"},c.a.createElement("p",{className:"sub-title"},"Event time:"),c.a.createElement(i.a,{className:"config-side__input",selected:t,onChange:function(t){return e(function(e){return{type:"clock",payload:e}}(t))},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:10,timeCaption:"Time",dateFormat:"HH:mm"}))},d=function(){var e=Object(u.b)(),t=Object(a.useRef)();return c.a.createElement("div",{className:"config-side__config config-side__config--name"},c.a.createElement("p",{className:"sub-title"},"Countdown title"),c.a.createElement("input",{className:"config-side__input",ref:t,type:"text",onChange:function(t){var n=t.target.value;e(function(e){return{type:"name",payload:e}}(n))},placeholder:"Event Name"}))},f=function(){return c.a.createElement("section",{className:"config-side"},c.a.createElement(d,null),c.a.createElement(m,null),c.a.createElement(s,null))},b=function(){var e=Object(u.c)((function(e){return e.eventName}));return c.a.createElement("p",{className:"main-side__title"},e)},E=n(22),p=n(26),g=function(){var e=Object(u.c)((function(e){return e.clock})),t=Object(u.c)((function(e){return e.date})),n=Object(a.useState)({}),r=Object(p.a)(n,2),o=r[0],l=r[1],i=Object(a.useState)({}),m=Object(p.a)(i,2),s=m[0],d=m[1];return Object(a.useEffect)((function(){var n=setInterval((function(){var n=new Date,a=e-n,c=t-n,r=Math.floor(c/864e5),i=Math.floor(a%864e5/36e5),u=Math.floor(a%36e5/6e4),m=Math.floor(a%6e4/1e3);l(Object(E.a)({},o,{hour:i,minute:u,second:m})),d({day:r+1})}),1e3);return function(){clearInterval(n)}})),c.a.createElement("div",{className:"main-side__clock"},c.a.createElement("div",null,s.day,c.a.createElement("p",null,s.day>1||s.day<-1?" days ":" day ")),c.a.createElement("div",{className:"main-side__clock--border"},o.hour,c.a.createElement("p",null,o.hour>1||o.hour<-1?" hours ":" hour ")),c.a.createElement("div",{className:"main-side__clock--border"},o.minute,c.a.createElement("p",null,o.minute>1||o.minute<-1?" minutes ":" minute ")),c.a.createElement("div",null,o.second,c.a.createElement("p",null,o.second>1||o.second<-1?" seconds ":" second ")),c.a.createElement("p",{className:"main-side__timeAndDate"},new Date(t).toDateString()))},v=function(){return c.a.createElement("section",{className:"main-side"},c.a.createElement(b,{className:"main-side__event-name"}),c.a.createElement(g,{className:"main-side__time-date"}))},h=n(35),O=n(36);function j(){var e=Object(h.a)(["\n  background-color: ",";\n  color: ",";\n  /* color: #f1f1f1; */\n"]);return j=function(){return e},e}function _(){var e=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]);return _=function(){return e},e}function N(){var e=Object(h.a)(["\n  position: absolute;\n  z-index: 2;\n"]);return N=function(){return e},e}function k(){var e=Object(h.a)(["\n  width: 6rem;\n  height: 6rem;\n  border-radius: 0.2rem;\n  background-color: ",";\n"]);return k=function(){return e},e}function C(){var e=Object(h.a)(["\n  padding: 0.5rem;\n  background-color: #fff;\n  border-radius: 0.1rem;\n  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  width: 6rem;\n  height: 6rem;\n"]);return C=function(){return e},e}var y=O.a.div(C()),w=O.a.div(k(),(function(e){return e.background?e.background:"#f00"})),x=O.a.div(N()),D=O.a.div(_()),S=O.a.div(j(),(function(e){return e.background?e.background:"#0af"}),(function(e){return e.tColor?e.tColor:"#f1f1f1"})),M=n(63),T=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],o=Object(u.b)(),l=Object(u.c)((function(e){return e.bgColor}));return c.a.createElement("div",null,c.a.createElement(y,{onClick:function(){r(!n)}},c.a.createElement(w,{background:l})),n?c.a.createElement(x,null,c.a.createElement(D,{onClick:function(){r(!1)}}),c.a.createElement(M.SketchPicker,{color:l,onChange:function(e){return o(function(e){return{type:"bgColor",payload:e}}(e))}})):null)},I=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],o=Object(u.b)(),l=Object(u.c)((function(e){return e.textColor}));return c.a.createElement("div",null,c.a.createElement(y,{onClick:function(){r(!n)}},c.a.createElement(w,{background:l})),n?c.a.createElement(x,null,c.a.createElement(D,{onClick:function(){r(!1)}}),c.a.createElement(M.SketchPicker,{color:l,onChange:function(e){return o(function(e){return{type:"textColor",payload:e}}(e))}})):null)},B=function(){return c.a.createElement("section",{className:"styling-side"},c.a.createElement("div",{className:"color-panel"},c.a.createElement("p",{className:"sub-title"},"Colors"),c.a.createElement("div",{className:"color-panel--left"},c.a.createElement(T,null),c.a.createElement("p",{className:"color-panel__title--left"},"Background Color")),c.a.createElement("div",{className:"color-panel--right"},c.a.createElement(I,null),c.a.createElement("p",{className:"color-panel__title--right"},"Text Color"))))};var F=function(){var e=Object(u.c)((function(e){return e.bgColor})),t=Object(u.c)((function(e){return e.textColor}));return c.a.createElement("main",{id:"app"},c.a.createElement(f,null),c.a.createElement(S,{className:"main-side--wrapper",background:e,tColor:t},c.a.createElement(v,null)),c.a.createElement(B,null))},H=n(55),J={date:Date.parse(new Date),clock:new Date,eventName:"Event Name",bgColor:"",textColor:""},P=(n(374),n(375),Object(H.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"calendar":return Object(E.a)({},e,{date:Date.parse(a)});case"clock":return Object(E.a)({},e,{clock:a.getTime()});case"name":return Object(E.a)({},e,{eventName:a});case"bgColor":return Object(E.a)({},e,{bgColor:a.hex});case"textColor":return Object(E.a)({},e,{textColor:a.hex});default:console.log(e)}return e})));o.a.render(c.a.createElement(u.a,{store:P},c.a.createElement(F,null)),document.getElementById("wrapper"))}},[[144,1,2]]]);
//# sourceMappingURL=main.00176019.chunk.js.map