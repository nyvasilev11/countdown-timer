(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{144:function(e,n,t){e.exports=t(376)},374:function(e,n,t){},375:function(e,n,t){},376:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(32),o=t.n(c),i=t(56),l=t.n(i),u=(t(98),t(5)),d=function(e){return{type:"transperancyChecked",payload:e}},s=function(e){return{type:"dateTimeChecked",payload:e}},m=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.date}));return r.a.createElement("div",{className:"config-side__config config-side__config--date"},r.a.createElement("p",{className:"sub-title"},"Countdown to date:"),r.a.createElement(l.a,{className:"config-side__input",dateFormat:"dd/MM/yyyy",selected:n,onChange:function(n){return e(function(e){return{type:"calendar",payload:e}}(n))},minDate:new Date}))},b=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.clock}));return r.a.createElement("div",{className:"config-side__config config-side__config--time"},r.a.createElement("p",{className:"sub-title"},"Event time:"),r.a.createElement(l.a,{className:"config-side__input",selected:n,onChange:function(n){return e(function(e){return{type:"clock",payload:e}}(n))},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:10,timeCaption:"Time",dateFormat:"HH:mm"}))},f=function(){var e=Object(u.b)(),n=Object(a.useRef)();return r.a.createElement("div",{className:"config-side__config config-side__config--name"},r.a.createElement("p",{className:"sub-title"},"Countdown title"),r.a.createElement("input",{className:"config-side__input",ref:n,type:"text",onChange:function(n){var t=n.target.value;e(function(e){return{type:"name",payload:e}}(t))},placeholder:"Event Name"}))},p=function(){return r.a.createElement("section",{className:"config-side"},r.a.createElement(f,null),r.a.createElement(m,null),r.a.createElement(b,null))},h=function(){var e=Object(u.c)((function(e){return e.eventName}));return r.a.createElement("p",{className:"main-side__title"},e)},g=t(14),E=t(28),v=function(){var e=Object(u.c)((function(e){return e.clock})),n=Object(u.c)((function(e){return e.date})),t=Object(a.useState)({}),c=Object(E.a)(t,2),o=c[0],i=c[1],l=Object(a.useState)({}),d=Object(E.a)(l,2),s=d[0],m=d[1],b=Object(u.c)((function(e){return e.dateNameShowHide}));return Object(a.useEffect)((function(){var t=setInterval((function(){var t=new Date,a=e-t,r=n-t,c=Math.floor(r/864e5),l=Math.floor(a%864e5/36e5),u=Math.floor(a%36e5/6e4),d=Math.floor(a%6e4/1e3);i(Object(g.a)({},o,{hour:l,minute:u,second:d})),m({day:c+1})}),100);return function(){clearInterval(t)}})),r.a.createElement("div",{className:"main-side__clock"},r.a.createElement("div",null,s.day,r.a.createElement("p",null,s.day>1||s.day<-1?" days ":" day ")),r.a.createElement("div",{className:"main-side__clock--border"},o.hour,r.a.createElement("p",null,o.hour>1||o.hour<-1?" hours ":" hour ")),r.a.createElement("div",{className:"main-side__clock--border"},o.minute,r.a.createElement("p",null,o.minute>1||o.minute<-1?" minutes ":" minute ")),r.a.createElement("div",null,o.second,r.a.createElement("p",null,o.second>1||o.second<-1?" seconds ":" second ")),"hideDateTitle"===b?null:r.a.createElement("p",{className:"main-side__timeAndDate"},new Date(n).toDateString()))},k=t(22),O=t(23);function j(){var e=Object(k.a)(["\n  font-size: 1.5rem;\n"]);return j=function(){return e},e}function y(){var e=Object(k.a)(['\n  position: absolute;\n  opacity: 0;\n\n  & + label {\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n  }\n\n  & + label:before {\n    content: "";\n    margin-right: 10px;\n    display: inline-block;\n    vertical-align: text-top;\n    width: 16px;\n    height: 16px;\n    background: #fff;\n  }\n\n  &:hover + label:before {\n    background: #0af;\n  }\n\n  &:checked + label:before {\n    background: #0af;\n  }\n\n  &:disabled + label {\n    color: #b8b8b8;\n    cursor: auto;\n  }\n\n  &:disabled + label:before {\n    box-shadow: none;\n    background: #ddd;\n  }\n\n  &:checked + label:after {\n    content: "";\n    position: absolute;\n    left: 3px;\n    top: 7px;\n    background: #fff;\n    width: 2px;\n    height: 2px;\n    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,\n      4px -6px 0 white, 4px -8px 0 white;\n    transform: rotate(45deg);\n  }\n']);return y=function(){return e},e}function x(){var e=Object(k.a)(["\n  -webkit-appearance: none;\n  width: 100%;\n  height: 1rem;\n  background: #a0f68b;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: 0.2s;\n  transition: opacity 0.2s;\n  margin: 2rem 0;\n\n  &::-webkit-slider-thumb {\n    ",";\n  }\n\n  &::-moz-range-thumb {\n    ",";\n  }\n"]);return x=function(){return e},e}function w(){var e=Object(k.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]);return w=function(){return e},e}function _(){var e=Object(k.a)(["\n  position: absolute;\n  z-index: 2;\n"]);return _=function(){return e},e}function C(){var e=Object(k.a)(["\n  width: 5rem;\n  height: 5rem;\n  border-radius: 0.2rem;\n  background-color: ",";\n"]);return C=function(){return e},e}function N(){var e=Object(k.a)(["\n  padding: 0.5rem;\n  background-color: #fff;\n  border-radius: 0.1rem;\n  box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  width: 6rem;\n  height: 6rem;\n"]);return N=function(){return e},e}function D(){var e=Object(k.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  width: ","rem;\n  height: ","rem;\n"]);return D=function(){return e},e}var T=O.a.section(D(),(function(e){return e.background}),(function(e){return e.tColor}),(function(e){return e.radius?"".concat(e.radius,"rem"):"0"}),(function(e){return e.width?e.width:"50"}),(function(e){return e.height?e.height:"15"})),z=O.a.div(N()),S=O.a.div(C(),(function(e){return e.background?e.background:"#f95"})),H=O.a.div(_()),F=O.a.div(w()),M=O.a.input(x(),(function(e){return"\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    background: #00DCE4;\n    cursor: pointer;\n"}),(function(e){return"\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    background: #00DCE4;\n    cursor: pointer;\n"})),R=O.a.input(y()),W=O.a.label(j()),I=function(){var e=Object(u.c)((function(e){return e.bgColor})),n=Object(u.c)((function(e){return e.textColor})),t=Object(u.c)((function(e){return e.borderRadius})),a=Object(u.c)((function(e){return e.sizeWidth})),c=Object(u.c)((function(e){return e.sizeHeight})),o=Object(u.c)((function(e){return e.bgTransperancy})),i=Object(u.c)((function(e){return e.dateNameShowHide}));return r.a.createElement(T,{background:"transparency"===o?"transperant":e,tColor:n,radius:t,width:a,height:c,className:"main-side"},"hideDateTitle"===i?null:r.a.createElement(h,{className:"main-side__event-name"}),r.a.createElement(v,{className:"main-side__time-date"}))},B=t(63),J=function(){var e=Object(a.useState)(!1),n=Object(E.a)(e,2),t=n[0],c=n[1],o=Object(u.b)(),i=Object(u.c)((function(e){return e.bgColor}));return r.a.createElement("div",null,r.a.createElement(z,{onClick:function(){c(!t)}},r.a.createElement(S,{background:i})),t?r.a.createElement(H,null,r.a.createElement(F,{onClick:function(){c(!1)}}),r.a.createElement(B.SketchPicker,{color:i,onChange:function(e){return o(function(e){return{type:"bgColor",payload:e}}(e))}})):null)},P=function(){var e=Object(a.useState)(!1),n=Object(E.a)(e,2),t=n[0],c=n[1],o=Object(u.b)(),i=Object(u.c)((function(e){return e.textColor}));return r.a.createElement("div",null,r.a.createElement(z,{onClick:function(){c(!t)}},r.a.createElement(S,{background:i})),t?r.a.createElement(H,null,r.a.createElement(F,{onClick:function(){c(!1)}}),r.a.createElement(B.SketchPicker,{color:i,onChange:function(e){return o(function(e){return{type:"textColor",payload:e}}(e))}})):null)},A=function(){var e=Object(u.b)(),n=Object(u.b)(),t=Object(u.c)((function(e){return e.sizeWidth})),a=Object(u.c)((function(e){return e.sizeHeight})),c=Object(u.c)((function(e){return e.borderRadius}));return r.a.createElement("div",null,r.a.createElement(M,{type:"range",min:"70",max:"150",step:"1",onChange:function(n){return e({type:"size",payload:n.target.value})}}),r.a.createElement("p",null,"Width:",t>0&&void 0!==t&&null!==t?"".concat(parseFloat(t).toFixed(0),"0px"):null),r.a.createElement("p",null,"Height:",a>0&&void 0!==a&&null!==a?"".concat(parseFloat(a).toFixed(0),"0px"):null),r.a.createElement(M,{type:"range",min:"0",max:"10",step:"1",value:c,onChange:function(e){return n({type:"radius",payload:e.target.value})}}))},q=function(e){var n=e.id,t=e.label,a=Object(u.b)();return r.a.createElement("div",{className:"checkboxes__element"},r.a.createElement(R,{id:n,type:"checkbox",onChange:function(e){return function(e){var n=e.target,t=function(e,n){e.checked?a(n(e.id)):e.checked||a(n("un".concat(e.id)))};switch(n.id){case"transparency":return t(n,d);case"hideDateTitle":return t(n,s);default:console.log("default: ".concat(n.id))}}(e)}}),r.a.createElement(W,{htmlFor:n},t))},G=function(){return r.a.createElement("section",{className:"styling-side"},r.a.createElement("div",{className:"color-panel"},r.a.createElement("p",{className:"sub-title"},"Colors"),r.a.createElement("div",{className:"color-panel__blocks"},r.a.createElement("div",{className:"color-panel--left"},r.a.createElement(J,null),r.a.createElement("p",{className:"color-panel__title color-panel__title--left"},"Background Color")),r.a.createElement("div",{className:"color-panel--right"},r.a.createElement(P,null),r.a.createElement("p",{className:"color-panel__title color-panel__title--right"},"Text Color")))),r.a.createElement(A,null),r.a.createElement("div",{className:"checkboxes"},r.a.createElement(q,{id:"transparency",label:"Transparent background"}),r.a.createElement(q,{id:"hideDateTitle",label:"Hide date and title"})))};var K=function(){return r.a.createElement("main",{id:"app"},r.a.createElement(p,null),r.a.createElement(I,null),r.a.createElement(G,null))},L=t(55),Q=new Date;Q.setDate(Q.getDate()+29);var U=new Date;U.setTime(U.getTime()+1e9);var V={date:Q,clock:U,eventName:"Event Name",bgColor:"#0af",textColor:"#f1f1f1",sizeWidth:null,sizeHeight:null,borderRadius:0,bgTransperancy:"",dateNameShowHide:""},X=(t(374),t(375),Object(L.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"calendar":return Object(g.a)({},e,{date:a});case"clock":return Object(g.a)({},e,{clock:a});case"name":return Object(g.a)({},e,{eventName:a});case"bgColor":return Object(g.a)({},e,{bgColor:a.hex});case"textColor":return Object(g.a)({},e,{textColor:a.hex});case"size":return Object(g.a)({},e,{sizeWidth:.5*a,sizeHeight:.2*a});case"radius":return Object(g.a)({},e,{borderRadius:a});case"transperancyChecked":return Object(g.a)({},e,{bgTransperancy:a});case"dateTimeChecked":return Object(g.a)({},e,{dateNameShowHide:a});default:console.log(e)}return e})));o.a.render(r.a.createElement(u.a,{store:X},r.a.createElement(K,null)),document.getElementById("wrapper"))}},[[144,1,2]]]);
//# sourceMappingURL=main.040f2c87.chunk.js.map