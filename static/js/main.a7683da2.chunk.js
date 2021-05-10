(this.webpackJsonpgames=this.webpackJsonpgames||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"a":"/games"}')},17:function(e,t,n){e.exports={GamesListContainer:"Hub_GamesListContainer__dBwz7",GamesListCard:"Hub_GamesListCard__2JjrY",background:"Hub_background__36xCm",underConstructionRibbon:"Hub_underConstructionRibbon__1vC6-","move-background":"Hub_move-background__2jYHN"}},21:function(e,t,n){e.exports={pageContainer:"Layouts_pageContainer__yS6OP",pageHeader:"Layouts_pageHeader__2s1-q",pageBody:"Layouts_pageBody__F1F0S"}},30:function(e,t,n){e.exports={Breadcrumbs:"Breadcrumbs_Breadcrumbs__AcSGW"}},39:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(27),s=n.n(r),u=(n(39),n(2)),o=n(9),i=n(8),l=n(21),b=n.n(l),d=n(1);var j=function(e){var t=e.header,n=e.children,a=e.title;return Object(c.useEffect)((function(){if(a){var e=document.title;return document.title=a,function(){return document.title=e}}}),[a]),Object(d.jsxs)("div",{className:b.a.pageContainer,children:[t&&Object(d.jsx)("div",{className:b.a.pageHeader,children:t}),Object(d.jsx)("div",{className:b.a.pageBody,children:n})]})},f=n(20),m=n(28),O=n(29),h=n(32),v=n(33);var g=function(e){Object(O.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(m.a)(this,n),(c=t.call(this,e)).name="Validation Error",c}return n}(Object(v.a)(Error));var p=function(){var e=Object(c.useState)(void 0),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(c.useState)(!1),b=Object(i.a)(l,2),d=b[0],j=b[1],m=Object(c.useCallback)((function(){var e=function(){for(var e="",t=0;t<4;t++){for(var n=void 0;void 0===n||e.includes(n);)n=Math.floor(10*Math.random()).toString();e+=n}return e}();a(e),o([]),j(!1)}),[]),O=Object(c.useCallback)((function(e){if(n){!function(e,t){var n=[];e.split("").some((function(e){return isNaN(Number(e))}))&&n.push("Guess can be declared only in digits"),e.length!==new Set(e).size&&n.push("Guess has duplicated digits");var c=t.findIndex((function(t){return t.guess===e}));if(c>=0&&n.push("Guess has already been done on ".concat(c+1," turn")),1===n.length)throw new g(n.join("; "))}(e,u);var t=function(e,t){var n=0,c=0;return t.split("").forEach((function(t,a){e[a]===t?c+=1:e.includes(t)&&(n+=1)})),[n,c]}(n,e),c=Object(i.a)(t,2),a=c[0],r=c[1],s={guess:e,cows:a,bulls:r};4===r&&j(!0),o((function(e){return[].concat(Object(f.a)(e),[s])}))}}),[n,u]);return{state:Object(c.useMemo)((function(){return{number:n,turns:u,ended:d}}),[n,u,d]),start:m,guess:O}},_=n(7),x=n.n(_),C=n(13),N=n(34);function k(e){return"bnc_number_input_".concat(e)}var S=function(e){if(document){var t=document.getElementById(k(e));t&&t.focus()}};function y(e){var t=e.value,n=e.onChange,a=Object(N.a)(e,["value","onChange"]),r=Object(c.useCallback)((function(e){if(isNaN(Number(e.key))){var t=e.target;if("ArrowLeft"===e.key){var c;null===(c=t.previousElementSibling)||void 0===c||c.focus()}else{if("ArrowRight"!==e.key)return!0;var a;null===(a=t.nextElementSibling)||void 0===a||a.focus()}}else n(e.key),e.preventDefault()}),[n]);return Object(d.jsx)("input",Object(C.a)(Object(C.a)({},a),{},{maxLength:1,onChange:function(){},onKeyUp:r,className:x.a.singleNumberInput,value:t,pattern:"\\d*"}))}var B=function(e){var t=e.length,n=e.onChange,a=e.value,r=e.disabled,s=Object(c.useState)([]),u=Object(i.a)(s,2),o=u[0],l=u[1],b=Object(c.useMemo)((function(){return o.join("")}),[o]);Object(c.useEffect)((function(){n(b)}),[b,n]),Object(c.useEffect)((function(){if(a!==b){for(var e=[],n=0;n<t;n++)e.push(a[n]||"0");l(e),S(0)}}),[a]),Object(c.useEffect)((function(){for(var e=[],n=0;n<t;n++)e.push("0");l(e)}),[t]);var j=Object(c.useCallback)((function(e){return function(t){l((function(n){var c=Object(f.a)(n);return c[e]=t,c})),S(e+1)}}),[]);return Object(d.jsx)("div",{className:x.a.numberInput,children:o.map((function(e,t){return Object(d.jsx)(y,{id:k(t),value:e,disabled:r,onChange:j(t)},t)}))})},w=function(e){var t=e.turns,n=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e,t;null===(e=n.current)||void 0===e||null===(t=e.lastElementChild)||void 0===t||t.scrollIntoView()}),[t]),Object(d.jsx)("div",{className:x.a.guessesList,ref:n,children:t.map((function(e,t){var n=e.guess,c=e.cows,a=e.bulls;return Object(d.jsxs)("div",{children:[t+1,". ",n,": ",a,"B, ",c,"C"]},n)}))})};var L=[{code:"bulls_n_cows",name:"Bulls and Cows",component:function(){var e=p(),t=e.state,n=e.start,a=e.guess,r=t.ended,s=t.turns,u=t.number,o=Object(c.useState)(""),l=Object(i.a)(o,2),b=l[0],f=l[1],m=Object(c.useState)(),O=Object(i.a)(m,2),h=O[0],v=O[1],g=Object(c.useCallback)((function(){v(void 0);try{a(b),f("0000")}catch(e){v(e.toString())}}),[a,b]),_=Object(c.useCallback)((function(e){13===e.charCode&&(e.preventDefault(),g())}),[g]);return Object(d.jsx)(j,{title:"BULLS and COWS",header:Object(d.jsx)("h1",{children:"BULLS and COWS"}),children:Object(d.jsxs)("div",{className:x.a.container,children:[!!u&&Object(d.jsxs)(c.Fragment,{children:[Object(d.jsxs)("div",{className:x.a.topContainerMenu,onKeyPress:_,children:[Object(d.jsx)(B,{length:4,onChange:f,value:r?u:b,disabled:r}),r?Object(d.jsx)("button",{onClick:n,children:"START NEW"}):Object(d.jsx)("button",{onClick:g,children:"Guess"})]}),h&&Object(d.jsx)("div",{className:x.a.errorSegment,children:h}),Object(d.jsx)(w,{turns:s})]}),!u&&Object(d.jsx)("div",{className:x.a.buttonScreen,children:Object(d.jsx)("button",{onClick:n,children:"START"})})]})})},background:n.p+"static/media/cattle-like-mammal-cow-goat-family-dairy-holstein-friesian.3dd66962.jpg",description:"Classic game of guessing numbers."},{code:"tic_tac_toe",name:"Tic-tac-toe",component:function(){return Object(d.jsx)(j,{header:Object(d.jsx)("h1",{children:"TIC"})})},background:n.p+"static/media/Tic_tac_toe.svg.150fa236.png",underConstruction:!0}],E=n(30),I=n.n(E);function G(e){var t=L.find((function(t){return t.code===e}));return t?t.name:e}var H=Object(u.g)((function(e){var t=e.location.pathname.split("/").filter((function(e){return e}));return Object(d.jsx)("div",{className:I.a.Breadcrumbs,children:t.map((function(e,t,n){return t!==n.length-1?Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(o.b,{to:"/"+n.slice(0,t+1).join("/"),children:G(e)})," / "]},e):Object(d.jsx)("span",{children:G(e)},e)}))})}));function M(e){return L.map(function(e){return function(t){var n=e.path,c={key:t.code,path:"".concat(n,"/").concat(t.code),component:t.component,exact:!0};return a.a.createElement(u.b,c)}}(e))}var R=n(17),T=n.n(R),A=n(10);function J(e){var t=e.name,n=e.code,c=e.description,a=e.background,r=e.underConstruction,s=r?"span":o.b;return Object(d.jsxs)(s,{to:"".concat(A.a,"/").concat(n),className:T.a.GamesListCard,children:[a&&Object(d.jsx)("div",{className:T.a.background,style:{backgroundImage:"url(".concat(a,")")}}),Object(d.jsx)("h1",{children:t}),c&&Object(d.jsx)("p",{children:c}),r&&Object(d.jsx)("div",{className:T.a.underConstructionRibbon,children:" "})]})}var U=function(){return Object(d.jsx)("div",{className:T.a.GamesListContainer,children:L.map((function(e){return a.a.createElement(J,Object(C.a)(Object(C.a)({},e),{},{key:e.code}))}))})};var D=function(){return Object(d.jsxs)(j,{children:[Object(d.jsx)("p",{children:"Look at all these games!"}),Object(d.jsx)(U,{})]})},F=function(){return Object(d.jsx)(j,{title:"dogmf/games",header:Object(d.jsx)(H,{}),children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:A.a,children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:A.a,component:D}),M({path:A.a}),Object(d.jsx)(u.a,{to:A.a})]})}),Object(d.jsx)(u.a,{to:A.a})]})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(F,{})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={container:"BullsNCows_container__1PjJE",buttonScreen:"BullsNCows_buttonScreen__2BNz1",guessesList:"BullsNCows_guessesList__H_5iO",topContainerMenu:"BullsNCows_topContainerMenu__2HE66",errorSegment:"BullsNCows_errorSegment__2AUUC",numberInput:"BullsNCows_numberInput__1yKDD",singleNumberInput:"BullsNCows_singleNumberInput__2thyc"}}},[[46,1,2]]]);
//# sourceMappingURL=main.a7683da2.chunk.js.map