(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(7),a=n.n(i),o=(n(13),n(6)),r=n(8),s=n(2),l=(n(14),n(0));function u(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),i=n[0],a=n[1],o=Object(c.useState)(!1),r=Object(s.a)(o,2),u=r[0],d=r[1],j="all"===e.filter?"active-filter":"",b="active"===e.filter?"active-filter":"",h="completed"===e.filter?"active-filter":"",f=u?Object(l.jsx)("div",{style:{color:"red"},children:"Title is required"}):null;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{className:u?"error":"",value:i,onChange:function(e){a(e.currentTarget.value),d(!1)},onKeyPress:function(t){13===t.charCode&&(e.addTask(i),a(""))}}),Object(l.jsx)("button",{onClick:function(){var t=i.trim();t?e.addTask(t):d(!0),a("")},children:"+"}),f]}),Object(l.jsx)("ul",{children:e.tasks.map((function(t){return Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"checkbox",checked:t.isDone,onChange:function(n){return e.changeTasksStatus(t.id,n.currentTarget.checked)}}),Object(l.jsx)("span",{children:t.title}),Object(l.jsx)("button",{onClick:function(){e.removeTask(t.id)},children:"x"})]},t.id)}))}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:j,onClick:function(){e.changeFilter("all")},children:"All"}),Object(l.jsx)("button",{className:b,onClick:function(){e.changeFilter("active")},children:"Active"}),Object(l.jsx)("button",{className:h,onClick:function(){e.changeFilter("completed")},children:"Completed"})]})]})}var d=n(18),j=function(){console.log();var e=Object(c.useState)([{id:Object(d.a)(),title:"HTML&CSS",isDone:!0},{id:Object(d.a)(),title:"JS",isDone:!0},{id:Object(d.a)(),title:"ReactJS",isDone:!1}]),t=Object(s.a)(e,2),n=t[0],i=t[1];console.log(n);var a=Object(c.useState)("all"),j=Object(s.a)(a,2),b=j[0],h=j[1],f=n;return"active"===b&&(f=n.filter((function(e){return!e.isDone}))),"completed"===b&&(f=n.filter((function(e){return e.isDone}))),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(u,{filter:b,title:"What to learn",tasks:f,removeTask:function(e){var t=n.filter((function(t){return t.id!==e}));i(t)},changeFilter:function(e){h(e)},changeTasksStatus:function(e,t){var c=n.map((function(n){return n.id===e?Object(o.a)(Object(o.a)({},n),{},{isDone:t}):n}));i(c)},addTask:function(e){var t=[{id:Object(d.a)(),title:e,isDone:!1}].concat(Object(r.a)(n));i(t)}})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(j,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.c638b54f.chunk.js.map