(this["webpackJsonpmenu-app"]=this["webpackJsonpmenu-app"]||[]).push([[0],{26:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(2),l=c.n(s),a=c(7),n=c.n(a),o=(c(26),c(3)),i=(c(9),c(20)),r=c.n(i),j=c.p+"static/media/Logo.e933f3fb.png",d=c.p+"static/media/bg-elem3.32bd16f5.png",b=c(14),x=c(21),m=c(1);var u=function(e){var t=e.info;return Object(m.jsx)("li",{className:"w-full flex flex-row",children:Object(m.jsxs)("div",{className:"food-item bg-gray-200 bg-opacity-60 rounded-lg flex w-full flex-row",children:[Object(m.jsxs)("div",{className:"flex flex-col w-2/3",children:[Object(m.jsxs)("div",{className:"flex flex-row mt-1",children:["1"===t[2]&&Object(m.jsx)(b.a,{className:"veg my-auto border text-sm border-black"}),"0"===t[2]&&Object(m.jsx)(b.a,{className:"nveg my-auto border text-sm border-black"}),"1"===t[1]&&Object(m.jsx)(x.a,{className:"chili ml-2 text-lg"})]}),Object(m.jsx)("div",{className:"text-lg mb-1",children:t[0]}),Object(m.jsx)("div",{className:"text-xs text-gray-600",children:t[4]})]}),Object(m.jsx)("div",{className:"flex w-1/3",children:Object(m.jsxs)("div",{className:"m-auto",children:["\u20b9 ",parseFloat(t[3])]})})]})})},f=c(15);var O=function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),l=c[0],a=c[1],n=Object(s.useState)([]),i=Object(o.a)(n,2),r=i[0],j=i[1],d=Object(s.useState)(0),b=Object(o.a)(d,2),x=b[0],O=b[1],h=function(){a(!l),console.log(l)};Object(s.useEffect)((function(){if(void 0!==e.info){for(var t=[],c=0,s=0,l=e.info.length;s<l;s++){var a=[e.info[s].name,e.info[s].spicy,e.info[s].veg,e.info[s].price,e.info[s].desc];"1"===a[2]&&c++,e.veg&&"0"===a[2]||t.push(Object(m.jsx)(u,{info:a},a[0]))}j(t),O(c)}}),[e.info,e.veg]);var p=function(){return l?Object(m.jsx)("div",{className:"",children:Object(m.jsx)("ul",{children:r})}):null},v=function(){return e.veg&&0===x?null:Object(m.jsxs)("div",{id:e.type,className:"flex flex-col mx-2 my-2",children:[Object(m.jsxs)("div",{className:"flex flex-row type py-1 px-2 font-semibold",onClick:h,children:[Object(m.jsx)("div",{className:"text-lg",children:e.type}),!l&&Object(m.jsx)(f.a,{className:"ml-auto my-auto text-xl"}),l&&Object(m.jsx)(f.a,{className:"ml-auto my-auto text-xl",style:{transform:"rotate(180deg)"}})]}),Object(m.jsx)(p,{})]})};return Object(m.jsx)(v,{})},h=c(16);var p=function(){var e=Object(s.useState)({}),t=Object(o.a)(e,2),c=t[0],l=t[1],a=Object(s.useState)([]),n=Object(o.a)(a,2),i=n[0],b=n[1],x=Object(s.useState)(!1),u=Object(o.a)(x,2),f=u[0],p=u[1],v=Object(s.useState)(!1),g=Object(o.a)(v,2),N=g[0],y=g[1],w={},k=function(){p(!f)};Object(s.useEffect)((function(){r.a.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTLVa_XJg7juISPoVIRTz-_VomvyaF07xEcDnSj8T6UKUB7cA28KgxSLNeSp3thdw4wyxU8fFu3Ybc-/pub?gid=0&single=true&output=csv",{download:!0,header:!0,complete:function(e){for(var t=e.data,s=[],a=0,n=t.length;a<n;a++)void 0===w[t[a].type]&&(w[t[a].type]=[],s.push(t[a].type)),w[t[a].type].push(t[a]);0===Object.keys(c).length&&l(w),0===i.length&&b(s)}})}),[]);var S=function(){for(var e=[],t=0,c=i.length;t<c;t++)0===t?e.push(Object(m.jsx)("div",{className:"my-2 ",children:Object(m.jsx)(h.Link,{to:"start",spy:!0,smooth:!0,onClick:function(){return y(!N)},children:i[t]})})):e.push(Object(m.jsx)("div",{className:"my-2 border-t bord",children:Object(m.jsx)(h.Link,{to:i[t-1],spy:!0,smooth:!0,onClick:function(){return y(!N)},children:i[t]})}));return Object(m.jsxs)("div",{className:"flex flex-col browse mx-auto my-2 w-1/2  text-center",children:[Object(m.jsx)("div",{onClick:function(){return y(!N)},className:"px-4 py-2 text-normal menu font-bold rounded-full",children:"Browse Menu"}),N&&Object(m.jsx)("div",{className:"text-normal font-bold menu-item rounded-lg p-1",children:e})]})},C=function(){for(var e=[],t=0,s=i.length;t<s;t++)e.push(Object(m.jsx)(O,{type:i[t],info:c[i[t]],veg:f},i[t]));return e};return Object(m.jsxs)("div",{className:"container flex flex-col",children:[Object(m.jsx)("img",{className:"element1 object-contain",src:d,alt:""}),Object(m.jsx)("div",{className:"flex justify-center",children:Object(m.jsx)("img",{className:"m-5 h-16 object-contain",src:j,alt:""})}),Object(m.jsx)("div",{className:"title flex mx-auto mb-2 text-center",children:Object(m.jsx)("h1",{className:"px-5 py-2 text-3xl font-semibold",children:"Menu"})}),Object(m.jsx)("div",{className:"flex ml-auto mr-2",children:Object(m.jsxs)("label",{htmlFor:"toggleB",className:"flex items-center cursor-pointer",children:[Object(m.jsxs)("div",{className:"relative",children:[Object(m.jsx)("input",{type:"checkbox",id:"toggleB",className:"sr-only"}),Object(m.jsx)("div",{className:"block out w-10 h-6 rounded-full",onClick:k}),Object(m.jsx)("div",{className:"dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition",onClick:k})]}),Object(m.jsx)("div",{id:"start",className:"ml-3 font-bold",style:{color:"#008277"},children:"Veg"})]})}),Object(m.jsx)(S,{}),Object(m.jsx)(C,{})]})};n.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[38,1,2]]]);
//# sourceMappingURL=main.6d5cafae.chunk.js.map