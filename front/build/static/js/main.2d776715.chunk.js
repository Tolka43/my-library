(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{53:function(t,e,n){},59:function(t,e,n){},61:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n(22),a=n(12),o=n(0),i=n(43),r=(n(53),function(t){var e=t.title,n=t.onButtonClick,s=t.buttonStyle;return Object(c.jsx)("button",{type:"button",className:"btn ".concat(s," m-1"),onClick:function(){return n()},children:e})}),j={apiUrl:"http://localhost:4444/api"},l=j.apiUrl+"/books",u=function(t){var e=t.title,n=t.onInputChange,s=t.inputValue;return Object(c.jsxs)("div",{className:"input-group input-group-sm mb-3",children:[Object(c.jsx)("span",{children:e}),Object(c.jsx)("input",{type:"text",className:"form-control ml-2",defaultValue:s,onChange:function(t){return n(t.target.value)}})]})},b=n(17),d=n(27),O=n(69),h=(n(59),function(t){var e=t.onInputChange,n=t.defaultOption;return Object(c.jsxs)(O.a.Group,{controlId:"exampleForm.SelectCustomSizeSm",children:[Object(c.jsx)("span",{children:"gatunek:"}),Object(c.jsxs)(O.a.Control,{as:"select",size:"sm",className:"select ml-2",custom:!0,onChange:function(t){return e(t.target.value)},children:[Object(c.jsx)("option",{children:n}),Object(c.jsx)("option",{children:"horror"}),Object(c.jsx)("option",{children:"dramat"}),Object(c.jsx)("option",{children:"literatura m\u0142odzie\u017cowa"}),Object(c.jsx)("option",{children:"powie\u015b\u0107 historyczna"})]})]})}),x=function(t){var e=t.book,n=t.id,s=Object(o.useState)(!1),O=Object(a.a)(s,2),x=O[0],m=O[1],p=Object(o.useState)(e.genre),f=Object(a.a)(p,2),g=f[0],v=f[1],k=Object(o.useState)(e.author),N=Object(a.a)(k,2),y=N[0],C=N[1],S=Object(o.useContext)(z),B=S.setBooks,w=S.books;return Object(c.jsx)("div",{className:"card mb-3 ml-2",children:Object(c.jsxs)("div",{className:"row g-0",children:[Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsx)("img",{src:j.apiUrl+e.img,className:"card-img-top",alt:"..."})}),Object(c.jsx)("div",{className:"col-md-8",children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsx)("h5",{className:"card-title",children:e.title}),Object(c.jsx)(b.a,{icon:d.a,className:"pen-icon",onClick:function(){return m(!x)}})]}),x?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{title:"autor:",onInputChange:C,inputValue:e.author}),Object(c.jsx)(h,{onInputChange:v,defaultOption:e.genre})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{className:"card-text",children:["autor: ",e.author]}),Object(c.jsxs)("p",{className:"card-text",children:["gatunek: ",e.genre]})]}),Object(c.jsx)(r,{buttonStyle:"btn-secondary",title:"usu\u0144",onButtonClick:function(){(function(t){return fetch("".concat(l,"/").concat(t),{method:"DELETE"})})(n).then((function(){var t=w.filter((function(t,e){return e!==n}));B(t)}))}}),x?Object(c.jsx)(r,{title:"zapisz",buttonStyle:"btn-outline-info",onButtonClick:function(){(function(t,e){return fetch("".concat(l,"/").concat(e),{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify(t)})})({author:y,genre:g},n).then((function(){m(!1);var t=w.map((function(t,e){return e===n?Object(i.a)(Object(i.a)({},t),{},{author:y,genre:g}):t}));B(t)}))}}):null]})})]})})},m=function(){var t=Object(o.useContext)(z),e=t.books,n=t.setBooks;return Object(o.useEffect)((function(){fetch(l).then((function(t){return t.json()})).then((function(t){return n(t.books)}))}),[n]),Object(c.jsx)("div",{className:"row",children:null===e||void 0===e?void 0:e.map((function(t,e){return Object(c.jsx)(x,{book:t,id:e},e)}))})},p=(n(61),n(71)),f=n(70),g=n(24),v=function(){return Object(c.jsxs)(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(c.jsx)(g.b,{className:"home-link m-2",to:"/",children:"Biblioteka"}),Object(c.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsxs)(p.a.Collapse,{id:"responsive-navbar-nav",children:[Object(c.jsxs)(f.a,{className:"mr-auto",children:[Object(c.jsx)(g.b,{className:"link m-2",to:"/favorites",children:"Ulubione"}),Object(c.jsx)(g.b,{className:"link m-2",to:"/settings",children:"Ustawienia"})]}),Object(c.jsx)(f.a,{children:Object(c.jsx)(g.b,{className:"link",to:"/login",children:"zaloguj si\u0119"})})]})]})},k=n(7),N=n(68),y=function(t){var e=t.title,n=t.onInputChange;return Object(c.jsxs)("div",{className:"input-group mb-3",children:[Object(c.jsx)("span",{className:"input-group-text",children:e}),Object(c.jsx)("input",{type:"text",className:"form-control",onChange:function(t){return n(t.target.value)}})]})};var C=function(){var t=Object(o.useState)(),e=Object(a.a)(t,2),n=e[0],s=e[1],i=Object(o.useState)(),j=Object(a.a)(i,2),u=j[0],b=j[1],d=Object(o.useState)(),O=Object(a.a)(d,2),h=O[0],x=O[1],m=Object(o.useState)(),p=Object(a.a)(m,2),f=p[0],g=p[1],v=Object(o.useState)(!1),k=Object(a.a)(v,2),C=k[0],S=k[1],B=function(){return S(!1)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(r,{title:"dodaj ksi\u0105\u017ck\u0119",buttonStyle:"btn-secondary m-3",onButtonClick:function(){return S(!0)}}),Object(c.jsxs)(N.a,{show:C,onHide:B,children:[Object(c.jsx)(N.a.Header,{closeButton:!0,children:Object(c.jsx)(N.a.Title,{children:"Dodaj ksi\u0105\u017ck\u0119"})}),Object(c.jsx)(y,{title:"tytu\u0142",onInputChange:s}),Object(c.jsx)(y,{title:"autor",onInputChange:b}),Object(c.jsx)(y,{title:"gatunek literacki",onInputChange:x}),Object(c.jsx)(y,{title:"data wydania",onInputChange:g}),Object(c.jsxs)(N.a.Footer,{children:[Object(c.jsx)(r,{title:"zamknij",buttonStyle:"btn-outline-dark",onButtonClick:B}),Object(c.jsx)(r,{title:"zapisz",buttonStyle:"btn-info",onButtonClick:function(){return(t={title:n,author:u,genre:h,date:f},fetch(l,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)})).then(B);var t},children:"dodaj"})]})]})]})},S=(n(64),n(37)),B=function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsxs)("div",{className:"icons-div",children:[Object(c.jsx)(b.a,{className:"icon",icon:S.b}),Object(c.jsx)(b.a,{className:"icon",icon:S.a}),Object(c.jsx)(b.a,{className:"icon",icon:S.c})]}),Object(c.jsx)("p",{className:"copyright",children:"\xa9 2021 Tolka43"})]})},w=function(){var t=[{title:Object(c.jsx)(b.a,{icon:d.b}),id:1},{title:Object(c.jsx)(b.a,{icon:d.c}),id:2}];return Object(c.jsx)("div",{className:"btn-group me-2",role:"group","aria-label":"Second group",children:t.map((function(t,e){return Object(c.jsx)("button",{type:"button",className:"btn btn-secondary",children:t.title},e)}))})},z=Object(o.createContext)(),I=function(){var t=Object(o.useState)(),e=Object(a.a)(t,2),n=e[0],s=e[1];return Object(c.jsx)(z.Provider,{value:{books:n,setBooks:s},children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)(v,{}),Object(c.jsxs)(k.c,{children:[Object(c.jsx)(k.a,{path:"/favorites",children:Object(c.jsx)("div",{className:"siteBody"})}),Object(c.jsx)(k.a,{path:"/settings",children:Object(c.jsx)("div",{className:"siteBody"})}),Object(c.jsx)(k.a,{path:"/",children:Object(c.jsxs)("div",{className:"siteBody",children:[Object(c.jsx)(w,{}),Object(c.jsx)(C,{}),Object(c.jsx)("div",{className:"container-sm",children:Object(c.jsx)(m,{books:n})})]})})]}),Object(c.jsx)(B,{})]})})},T=(n(65),document.querySelector("#root"));Object(s.render)(Object(c.jsx)(I,{}),T)}},[[66,1,2]]]);
//# sourceMappingURL=main.2d776715.chunk.js.map