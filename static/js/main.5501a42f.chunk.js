(this["webpackJsonpactors-tmdb-react"]=this["webpackJsonpactors-tmdb-react"]||[]).push([[0],{66:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var o=n(8),c=n(2),a=n.n(c),i=n(18),s=n.n(i),d=(n(66),n(32)),r=n(108),l=n(112),j=n(113),u=n(118),b=n(116),h=n(110),p=n(115),x=n(49);x.a.initializeApp({apiKey:"AIzaSyCaXMyN1eHof-osSFotr99Fp_HYgck-0Bs",authDomain:"test-12e00.firebaseapp.com",databaseURL:"https://test-12e00.firebaseio.com",projectId:"test-12e00",storageBucket:"test-12e00.appspot.com",messagingSenderId:"390245151105",appId:"1:390245151105:web:5a9edc87b3a290157a7880",measurementId:"G-65BNFJF5SQ"});var O=x.a.firestore(),f=n(57),m=n.n(f),v=Object(r.a)((function(e){return{paper:{position:"absolute",top:0,left:0,right:0,bottom:0,margin:"auto",width:400,height:200,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function g(e){var t=v(),n=a.a.useState(!1),c=Object(d.a)(n,2),i=c[0],s=c[1],r=function(){s(!0)},x=function(){O.collection("todos").doc(e.id).delete(),s(!1)},f=Object(o.jsxs)("div",{className:t.paper,children:[Object(o.jsx)("h2",{id:"simple-modal-title",children:"Do you want to delete this todo?"}),Object(o.jsx)(h.a,{color:"primary",variant:"contained",onClick:x,children:"Yes"})]});return Object(o.jsx)("div",{children:i?Object(o.jsx)(p.a,{open:r,onClose:function(){s(!1)},children:f}):Object(o.jsx)(l.a,{className:"list",children:Object(o.jsxs)(j.a,{className:"list-item",children:[Object(o.jsx)(b.a,{checked:e.done,value:e.done,onClick:function(t){return O.collection("todos").doc(e.id).set({text:e.text,done:!e.done})}}),Object(o.jsx)(u.a,{className:e.done?"done":"inprogress",children:e.text}),Object(o.jsx)(h.a,{color:"secondary",onClick:e.done?x:r,children:Object(o.jsx)(m.a,{className:"hiden",color:"secondary"})})]})})})}var k=n(114),y=n(119),C=n(117);n(78);var S=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(d.a)(i,2),r=s[0],l=s[1],j=Object(c.useState)(""),u=Object(d.a)(j,2),b=u[0],p=u[1];Object(c.useEffect)((function(){O.collection("todos").orderBy("done","asc").onSnapshot((function(e){a(e.docs.map((function(e){return{id:e.id,text:e.data().text,done:e.data().done}}))),l(e.docs.map((function(e){return{id:e.id,text:e.data().text,done:e.data().done}})))}))}),[]);var x=function(){O.collection("todos").add({text:b,done:!1}),a(n.concat(b)),p("")},f=n,m=n.filter((function(e){return!1===e.done})),v=n.filter((function(e){return!0===e.done}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Vladimirs Todos!"}),Object(o.jsxs)(k.a,{children:[Object(o.jsx)(y.a,{children:"Todos:"}),Object(o.jsx)(C.a,{placeholder:"Whats next...",value:b,onChange:function(e){return p(e.target.value)},onKeyPress:function(e){return t=x,"Enter"===e.key&&t();var t}}),Object(o.jsx)(h.a,{variant:"contained",color:"primary",disabled:!b,onClick:x,children:"ADD TASK"})]}),Object(o.jsx)("ul",{children:r.map((function(e){return Object(o.jsx)(g,{id:e.id,text:e.text,done:e.done},e.id)}))}),Object(o.jsxs)("div",{className:"bottom-menu",children:[Object(o.jsxs)("h3",{children:[m.length," todos left "]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(h.a,{onClick:function(){l(f)},children:"All"}),Object(o.jsx)(h.a,{onClick:function(){l(m)},children:"Active"}),Object(o.jsx)(h.a,{onClick:function(){l(v)},children:"Completed"})]})]})]})};s.a.render(Object(o.jsx)(S,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.5501a42f.chunk.js.map