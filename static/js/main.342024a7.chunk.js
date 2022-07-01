(this.webpackJsonpcoocker=this.webpackJsonpcoocker||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(19),s=c.n(a),i=(c(28),c(29),c(7)),o=c(9),j=(c(30),c(3)),l=c(8),d=c(0),b=Object(n.createContext)(),u=function(e,t){switch(t.type){case"CHANGE_COLOR":return Object(l.a)(Object(l.a)({},e),{},{color:t.payload});case"CHANGE_MODE":return Object(l.a)(Object(l.a)({},e),{},{mode:t.payload});default:return e}};function h(e){var t=e.children,c=Object(n.useReducer)(u,{color:"rgba(178, 126, 59, 0.700)",mode:"light"}),r=Object(j.a)(c,2),a=r[0],s=r[1];return Object(d.jsx)(b.Provider,{value:Object(l.a)(Object(l.a)({},a),{},{changeColor:function(e){s({type:"CHANGE_COLOR",payload:e})},changeMode:function(e){s({type:"CHANGE_MODE",payload:e})}}),children:t})}var O=function(){var e=Object(n.useContext)(b);if(void 0===e)throw new Error("useTheme() is used outside a ThemeProvider");return e};function x(e){var t=e.recipes,c=O().mode;return 0===t.length?Object(d.jsx)("div",{className:"error",children:"No recipes found"}):Object(d.jsx)("div",{className:"recipe-list",children:t.map((function(e){return Object(d.jsxs)("div",{className:"card ".concat(c),children:[Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:e.title}),Object(d.jsx)("img",{src:e.img,className:"icon",alt:"dish"})]}),Object(d.jsxs)("p",{children:[e.cookingTime," to make."]}),Object(d.jsxs)("div",{children:[e.method.substring(0,100),"..."]}),Object(d.jsx)(i.b,{to:"/recipes/".concat(e.id),children:"Select"})]},e.id)}))})}var p=c(17),m=c.n(p),f=c(22),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=Object(n.useState)(null),r=Object(j.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),d=o[0],b=o[1],u=Object(n.useState)(null),h=Object(j.a)(u,2),O=h[0],x=h[1],p=Object(n.useState)(null),g=Object(j.a)(p,2),v=g[0],N=g[1],k=function(e){N({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};return Object(n.useEffect)((function(){var c=new AbortController,n=function(){var t=Object(f.a)(m.a.mark((function t(n){var r,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.prev=1,t.next=4,fetch(e,Object(l.a)(Object(l.a)({},n),{},{signal:c.signal}));case 4:if((r=t.sent).ok){t.next=7;break}throw new Error(r.statusText);case 7:return t.next=9,r.json();case 9:a=t.sent,b(!1),s(a),x(null),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),"AbortError"===t.t0.name?console.log("the fetch was aborted"):(b(!1),x("Could not fetch the data"));case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}();return"GET"===t&&n(),"POST"===t&&v&&n(v),function(){c.abort()}}),[e,v,t]),{data:a,isPending:d,error:O,postData:k}};c(38);function v(){var e=g("http://localhost:3000/recipes"),t=e.data,c=e.isPending,n=e.error;return Object(d.jsxs)("div",{className:"home",children:[n&&Object(d.jsx)("p",{className:"error",children:n}),c&&Object(d.jsx)("p",{className:"loading",children:" Loading... "}),t&&Object(d.jsx)(x,{recipes:t})]})}var N=c(23);c(39);function k(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(j.a)(a,2),i=s[0],l=s[1],b=Object(n.useState)(""),u=Object(j.a)(b,2),h=u[0],x=u[1],p=Object(n.useState)(""),m=Object(j.a)(p,2),f=m[0],v=m[1],k=Object(n.useState)(""),C=Object(j.a)(k,2),S=C[0],y=C[1],E=Object(n.useState)([]),w=Object(j.a)(E,2),T=w[0],R=w[1],P=Object(n.useRef)(null),q=Object(o.f)(),A=O().mode,D=g("https://fake-server-app-mmolnar.herokuapp.com/recipes","POST"),G=D.postData,L=D.data,M=D.error;return Object(n.useEffect)((function(){L&&!M&&q.push("/")}),[L,q,M]),Object(d.jsxs)("div",{className:"create ".concat(A),children:[Object(d.jsx)("h2",{className:"page",children:"Add a new Recipe"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),G({title:c,ingredients:T,method:i,img:h,cookingTime:f+" minutes"})},children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Recipe title:"}),Object(d.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:c,required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Recipe ingredients"}),Object(d.jsxs)("div",{className:"ingredients",children:[Object(d.jsx)("input",{type:"text",onChange:function(e){return y(e.target.value)},value:S,ref:P}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault();var t=S.trim();t&&!T.includes(t)&&R((function(e){return[].concat(Object(N.a)(e),[t])})),y(""),P.current.focus()},className:"btn",children:"add"})]})]}),Object(d.jsxs)("p",{children:["Current ingredients: ",T.map((function(e){return Object(d.jsxs)("em",{children:[e,", "]},e)}))]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Recipe method:"}),Object(d.jsx)("textarea",{onChange:function(e){return l(e.target.value)},value:i,required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Image:"}),Object(d.jsx)("textarea",{onChange:function(e){return x(e.target.value)},value:h,required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Cooking time (minutes)"}),Object(d.jsx)("input",{type:"number",onChange:function(e){return v(e.target.value)},required:!0})]}),Object(d.jsx)("button",{className:"btn",id:"submit",children:" Submit "})]}),M&&Object(d.jsx)("p",{className:"error",children:M})]})}c(40);function C(){var e=Object(o.h)().id,t=g("https://fake-server-app-mmolnar.herokuapp.com/recipes/"+e),c=t.data,n=t.isPending,r=t.error,a=O().mode;return Object(d.jsxs)("div",{className:"recipe ".concat(a),children:[r&&Object(d.jsx)("p",{className:"error",children:r}),n&&Object(d.jsx)("p",{className:"loading",children:"Loading..."}),c&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:c.img,alt:"dish",className:"foto"}),Object(d.jsx)("h2",{className:"page-title",children:c.title}),Object(d.jsxs)("p",{children:["Takes ",c.cookingTime," to cook"]}),Object(d.jsx)("ul",{children:c.ingredients.map((function(e){return Object(d.jsx)("li",{children:e},e)}))}),Object(d.jsx)("p",{className:"method",children:c.method})]})]})}c(41);function S(){var e=Object(o.g)().search,t=new URLSearchParams(e);console.log(t);var c=t.get("query"),n=g("https://fake-server-app-mmolnar.herokuapp.com/recipes?q="+c),r=n.error,a=n.isPending,s=n.data;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"page-title",children:['Recipies including "',c,'"']}),r&&Object(d.jsx)("p",{className:"error",children:r}),a&&Object(d.jsx)("p",{className:"loading",children:"Loading"}),s&&Object(d.jsx)(x,{recipes:s})]})}c(42),c(43);function y(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(o.f)();return Object(d.jsx)("div",{className:"searchbar",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("/search?query=".concat(c))},children:[Object(d.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(d.jsx)("input",{type:"text",id:"search",onChange:function(e){return r(e.target.value)},required:!0})]})})}function E(){var e=O(),t=e.color,c=e.changeColor;return Object(d.jsx)("div",{className:"navbar",style:{background:t},children:Object(d.jsxs)("nav",{onClick:function(){return c("rgba(140, 184, 94, 0.506)")},children:[Object(d.jsx)(i.b,{to:"/",className:"brand",children:Object(d.jsx)("h1",{children:"Coocker"})}),Object(d.jsx)(y,{}),Object(d.jsx)(i.b,{to:"/create",children:" Create Recipe "})]})})}c(44);var w=c.p+"static/media/brightness.18c28fe1.svg",T=["rgba(140, 184, 94, 0.506)","rgba(178, 126, 59, 0.700)","rgba(35, 63, 5, 0.506)"];function R(){var e=O(),t=e.changeColor,c=e.changeMode,n=e.mode;return console.log(n),Object(d.jsxs)("div",{className:"theme-selector",children:[Object(d.jsx)("div",{className:"mode-toggle",children:Object(d.jsx)("img",{onClick:function(){c("dark"===n?"light":"dark")},src:w,alt:"dark/light toggle icon",style:{filter:"dark"===n?"invert(100%)":"invert(20%)"}})}),Object(d.jsx)("div",{className:"theme-buttons",children:T.map((function(e){return Object(d.jsx)("div",{onClick:function(){return t(e)},style:{background:e}},e)}))})]})}var P=function(){var e=O().mode;return Object(d.jsxs)("div",{className:"App ".concat(e),children:[Object(d.jsxs)(i.a,{children:[Object(d.jsx)(E,{}),Object(d.jsx)(R,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(v,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/create",children:Object(d.jsx)(k,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/search",children:Object(d.jsx)(S,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/recipes/:id",children:Object(d.jsx)(C,{})})]})]}),Object(d.jsx)("div",{className:"footer"})]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(h,{children:Object(d.jsx)(P,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.342024a7.chunk.js.map