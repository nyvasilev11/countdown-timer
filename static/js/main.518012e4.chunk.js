(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),l=n(15),r=n.n(l),i=n(23),o=n.n(i),u=(n(49),n(6)),m=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.date}));return c.a.createElement("div",{className:"leftSide__config leftSide__config--date"},c.a.createElement("p",{className:"leftSide__sub-title"},"Countdown to date:"),c.a.createElement(o.a,{className:"leftSide__input",dateFormat:"dd/MM/yyyy",selected:t,onChange:function(t){return e(function(e){return{type:"calendar",payload:e}}(t))},minDate:new Date}))},s=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.clock}));return c.a.createElement("div",{className:"leftSide__config leftSide__config--time"},c.a.createElement("p",{className:"leftSide__sub-title"},"Event time:"),c.a.createElement(o.a,{className:"leftSide__input",selected:t,onChange:function(t){return e(function(e){return{type:"clock",payload:e}}(t))},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:10,timeCaption:"Time",dateFormat:"HH:mm"}))},d=function(){var e=Object(u.b)(),t=Object(a.useRef)();return c.a.createElement("div",{className:"leftSide__config leftSide__config--name"},c.a.createElement("p",{className:"leftSide__sub-title"},"Countdown title"),c.a.createElement("input",{className:"leftSide__input",ref:t,type:"text",onChange:function(t){var n=t.target.value;e(function(e){return{type:"name",payload:e}}(n))},placeholder:"Event Name"}))},f=function(){return c.a.createElement("section",{className:"leftSide"},c.a.createElement(d,null),c.a.createElement(m,null),c.a.createElement(s,null))},p=function(){var e=Object(u.c)((function(e){return e.eventName}));return c.a.createElement("p",{className:"mainSide__title"},e)},v=n(57),E=n(47),_=function(){var e=Object(u.c)((function(e){return e.clock})),t=Object(u.c)((function(e){return e.date})),n=Object(a.useState)({}),l=Object(E.a)(n,2),r=l[0],i=l[1],o=Object(a.useState)({}),m=Object(E.a)(o,2),s=m[0],d=m[1];return Object(a.useEffect)((function(){var n=setInterval((function(){var n=new Date,a=e-n,c=t-n,l=Math.floor(c/864e5),o=Math.floor(a%864e5/36e5),u=Math.floor(a%36e5/6e4),m=Math.floor(a%6e4/1e3);i(Object(v.a)({},r,{hour:o,minute:u,second:m})),d({day:l+1})}),1e3);return function(){clearInterval(n)}})),c.a.createElement("div",{className:"mainSide__clock"},c.a.createElement("span",null,s.day,s.day>1||s.day<-1?" days ":" day "),c.a.createElement("span",null,r.hour,r.hour>1||r.hour<-1?" hours ":" hour "),c.a.createElement("span",null,r.minute,r.minute>1||r.minute<-1?" minutes ":" minute "),c.a.createElement("span",null,r.second,r.second>1||r.second<-1?" seconds ":" second "),c.a.createElement("p",null,new Date(t).toDateString()))},h=function(){return c.a.createElement("section",{className:"mainSide"},c.a.createElement(p,{className:"mainSide__event-name"}),c.a.createElement(_,{className:"mainSide__time-date"}))};var b=function(){return c.a.createElement("main",{id:"app"},c.a.createElement(f,null),c.a.createElement(h,null))},y=n(16),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.parse(new Date),t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"calendar":return Date.parse(a);default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"clock":return a.getTime();default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Event Name",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"name":return a;default:return e}},O=Object(y.b)({date:S,clock:g,eventName:N}),j=(n(125),Object(y.c)(O));r.a.render(c.a.createElement(u.a,{store:j},c.a.createElement(b,null)),document.getElementById("wrapper"))},58:function(e,t,n){e.exports=n(126)}},[[58,1,2]]]);
//# sourceMappingURL=main.518012e4.chunk.js.map