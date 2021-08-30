(this["webpackJsonpreact-study"]=this["webpackJsonpreact-study"]||[]).push([[0],{38:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(14),a=c.n(s),j=(c(38),c(21)),b=c(1);var i=function(){return Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"React study"})})},o=c(13);var h=function(){return Object(b.jsx)("nav",{className:"nav",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("h2",{children:Object(b.jsx)(o.b,{to:"members",activeClassName:"active",children:"Members"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("h2",{children:Object(b.jsx)(o.b,{to:"search",activeClassName:"active",children:"Search"})})})]})})},l=c(9);var m=Object(l.b)("membersStore")(Object(l.c)((function(e){var t=e.membersStore.member;return Object(b.jsxs)("footer",{children:["Copyright ",t.name]})}))),d=c(3);var u=Object(l.b)("membersStore")(Object(l.c)((function(e){console.log(e);var t=e.membersStore,c=t.members,r=t.member;return Object(n.useEffect)((function(){t.membersRead()}),[t]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Members"}),Object(b.jsx)("hr",{className:"d-block"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Read"}),Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Age"}),Object(b.jsx)("th",{children:"Modify"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,c){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"text",placeholder:"Name",value:e.name,onChange:function(t){e.name=t.target.value}})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"text",placeholder:"Age",value:e.age,onChange:function(t){console.log(t),e.age=Number(t.target.value)}})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{onClick:function(){return t.membersUpdate(c,e)},children:"Update"}),Object(b.jsx)("button",{onClick:function(){return t.membersDelete(c)},children:"Delete"})]})]},c)}))})]})]}),Object(b.jsx)("hr",{className:"d-block"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Create"}),Object(b.jsx)("input",{type:"text",placeholder:"Name",value:r.name,onChange:function(e){r.name=e.target.value}}),Object(b.jsx)("input",{type:"text",placeholder:"Age",value:r.age,onChange:function(e){r.age=e.target.value}}),Object(b.jsx)("button",{onClick:function(){return t.membersCreate()},children:"Create"})]})]})}))),O=c(33);var x=Object(l.b)("membersStore","searchStore")(Object(l.c)((function(e){console.log(e.location);var t=new URLSearchParams(e.location.search).get("q")||"",c=e.membersStore,r=e.searchStore,s=e.history,a=c.members,j=Object(n.useState)(""),i=Object(O.a)(j,2),o=i[0],h=i[1];return Object(n.useEffect)((function(){r.searchRead(t),h(t)}),[r,t]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Search"}),Object(b.jsx)("hr",{className:"d-block"}),Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(e){!function(e){e.preventDefault(),s.push("/search?q=".concat(o))}(e)},children:[Object(b.jsx)("input",{type:"text",placeholder:"Search",value:o,onChange:function(e){h(e.target.value)}}),Object(b.jsx)("button",{children:"Search"})]})}),Object(b.jsx)("hr",{className:"d-block"}),Object(b.jsx)("div",{children:Object(b.jsxs)("table",{className:"table-search",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Age"})]})}),Object(b.jsx)("tbody",{children:a.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.age})]},t)}))})]})})]})})));var f=function(){return Object(b.jsx)(o.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(i,{}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("section",{className:"contents",children:Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/members",component:u}),Object(b.jsx)(d.b,{exact:!0,path:"/search",render:function(e){return Object(b.jsx)(x,Object(j.a)(Object(j.a)({},e),{},{testProps:!0}))}}),Object(b.jsx)(d.a,{to:{pathname:"/members"}})]})}),Object(b.jsx)("hr",{})]}),Object(b.jsx)(m,{})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))},p=c(15),g=c(16),y=c(2),C=c(10),S=c.n(C),k=function(e){console.error(e.response||e.message||e)};S.a.defaults.baseURL="https://react-study-backend.herokuapp.com",Object(y.f)({enforceActions:"never",useProxies:"never"});var N=new(function(){function e(){Object(p.a)(this,e),this.members=[],this.member={name:"",age:""},Object(y.l)(this)}return Object(g.a)(e,[{key:"membersCreate",value:function(){var e=this;S.a.post("/api/v1/members",this.member).then((function(t){console.log("Done membersCreate",t),e.membersRead()})).catch((function(e){k(e)}))}},{key:"membersRead",value:function(){var e=this;S.a.get("/api/v1/members").then((function(t){console.log("Done membersRead",t),e.members=t.data.members})).catch((function(e){k(e)}))}},{key:"membersUpdate",value:function(e,t){var c=this,n={index:e,member:t};S.a.patch("/api/v1/members",n).then((function(e){console.log("Done membersUpdate",e),c.membersRead()})).catch((function(e){k(e)}))}},{key:"membersDelete",value:function(e){var t=this,c="/api/v1/members/"+e;S.a.delete(c).then((function(e){console.log("Done membersDelete",e),t.membersRead()})).catch((function(e){k(e)}))}}]),e}()),R=new(function(){function e(){Object(p.a)(this,e),Object(y.l)(this)}return Object(g.a)(e,[{key:"searchRead",value:function(e){var t="/api/v1/search?q=".concat(e);S.a.get(t).then((function(e){console.log("Done searchRead",e),N.members=e.data.members})).catch((function(e){k(e)}))}}]),e}());a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(l.a,{searchStore:R,membersStore:N,children:Object(b.jsx)(f,{})})}),document.getElementById("root")),v()}},[[62,1,2]]]);
//# sourceMappingURL=main.17e4c77e.chunk.js.map