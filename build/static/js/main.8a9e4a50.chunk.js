(this.webpackJsonpbreaking=this.webpackJsonpbreaking||[]).push([[0],{3:function(e,t,c){e.exports={container:"Footer_container__C_LIv",ul:"Footer_ul__2awWD",li:"Footer_li__2hzpO",copyright:"Footer_copyright__2gsbn"}},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),r=c(15),i=c.n(r),j=c(6),l=c.n(j),o=c(16),b=c(4),d=c(17),h=c.n(d),u=c.p+"static/media/logo.e6ecab44.png",m=function(){return Object(a.jsx)("header",{className:"center",children:Object(a.jsx)("img",{src:u,alt:"logo"})})},O=function(e){var t=e.item;return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-inner",children:[Object(a.jsx)("div",{className:"card-front",children:Object(a.jsx)("img",{src:t.img,alt:""})}),Object(a.jsxs)("div",{className:"card-back",children:[Object(a.jsx)("h1",{children:t.name}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},x=c.p+"static/media/spinner.11d9cde8.gif",f=function(){return Object(a.jsx)("img",{src:x,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},p=function(e){var t=e.items;return e.isLoading?Object(a.jsx)(f,{}):Object(a.jsx)("section",{className:"cards",children:t.map((function(e){return Object(a.jsx)(O,{item:e},e.char_id)}))})},g=function(e){var t=e.getQuery,c=Object(s.useState)(""),n=Object(b.a)(c,2),r=n[0],i=n[1];return Object(a.jsx)("section",{className:"search",children:Object(a.jsx)("form",{children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",value:r,onChange:function(e){return c=e.target.value,i(c),void t(c);var c},autoFocus:!0})})})},v=c(3),y=c.n(v),N=function(){return Object(a.jsxs)("footer",{className:y.a.container,children:[Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:y.a.ul,children:[Object(a.jsxs)("li",{className:y.a.li,children:["  ",Object(a.jsx)("a",{href:"https://github.com/myamann",children:Object(a.jsx)("i",{class:"fab fa-github fa-lg"})}),"  "]}),Object(a.jsxs)("li",{className:y.a.li,children:["  ",Object(a.jsx)("a",{href:"https://www.linkedin.com/in/mehmet-yaman-05b7a1167/",children:Object(a.jsx)("i",{class:"fab fa-linkedin fa-lg"})}),"  "]}),Object(a.jsxs)("li",{className:y.a.li,children:["  ",Object(a.jsxs)("a",{href:"https://www.instagram.com/mmehmetyamann/",children:[" ",Object(a.jsx)("i",{class:"fab fa-instagram fa-lg"})]}),"   "]})]})}),Object(a.jsx)("div",{className:y.a.copyright,children:Object(a.jsxs)("p",{children:["\u276e ",Object(a.jsx)("a",{href:"https://mehmetyaman.netlify.app/",children:"Mehmet Yaman"})," 2020 \u276f"]})})]})},w=(c(41),function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!0),i=Object(b.a)(r,2),j=i[0],d=i[1],u=Object(s.useState)(""),O=Object(b.a)(u,2),x=O[0],f=O[1];return Object(s.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://www.breakingbadapi.com/api/characters?name=".concat(x));case 2:t=e.sent,n(t.data),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(m,{path:"/"}),Object(a.jsx)(g,{getQuery:function(e){return f(e)}}),Object(a.jsx)(p,{isLoading:j,items:c}),Object(a.jsx)(N,{})]})});i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.8a9e4a50.chunk.js.map