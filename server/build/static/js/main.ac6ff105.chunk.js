(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(4),a=c.n(i),o=c(2),j=(c(9),c(0));var r=function(){var e=Object(s.useState)(),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(0),a=Object(o.a)(i,2),r=a[0],l=a[1],d=Object(s.useState)(!1),b=Object(o.a)(d,2),h=b[0],f=b[1],u="/poll/";Object(s.useEffect)((function(){fetch(u).then((function(e){return e.json()})).then((function(e){n(e);var t=0;e.forEach((function(e){t+=e.votes})),l(t)}))}),[]);var O,v=function(e){if(!1===h){var t=e.target.dataset.id,s=c[t].votes;c[t].votes=s+1,l(r+1),f(!h);var n={method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}};fetch(u,n).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}};return c&&(O=c.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("div",{className:"lid close",children:[Object(j.jsx)("div",{className:"qmark",children:e.id}),Object(j.jsx)("div",{className:"face ltop"}),Object(j.jsx)("div",{className:"face lleft"}),Object(j.jsx)("div",{className:"face lright"})]}),Object(j.jsx)("div",{className:"face top"}),Object(j.jsx)("div",{className:"face left"}),Object(j.jsx)("div",{className:"face right"})]}),Object(j.jsxs)("button",{onClick:v,"data-id":e.id,children:[e.option,Object(j.jsxs)("span",{children:["- ",e.votes," Votes"]})]})]},e.id)}))),Object(j.jsxs)("div",{className:"poll",children:[Object(j.jsx)("h1",{children:"Choose the gift behind box n\xba..."}),Object(j.jsx)("ul",{className:h?"results":"options",children:O}),Object(j.jsxs)("p",{children:["Total Votes: ",r]})]})};c(11);var l=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(r,{})})};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.ac6ff105.chunk.js.map