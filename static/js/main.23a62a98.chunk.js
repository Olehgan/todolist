(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{153:function(t,e,n){},154:function(t,e,n){},182:function(t,e,n){"use strict";n.r(e);var a,i,c=n(0),o=n.n(c),r=n(21),s=n.n(r),l=(n(153),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,284)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))}),d=(n(154),n(25)),u=n(16),j=n(19),b=n(119),O=n.n(b).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"5883697e-1933-44d6-978d-c735fd6eee7a"}}),f=function(){return O.get("todo-lists")},h=function(t){return O.post("todo-lists",{title:t})},T=function(t){return O.delete("todo-lists/".concat(t))},m=function(t,e){return O.put("todo-lists/".concat(t),{title:e})},g=function(t){return O.get("todo-lists/".concat(t,"/tasks"))},p=function(t,e){return O.delete("todo-lists/".concat(t,"/tasks/").concat(e))},v=function(t,e){return O.post("todo-lists/".concat(t,"/tasks"),{title:e})},x=function(t,e,n){return O.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},k=function(t){return O.post("auth/login",t)},I=function(){return O.get("auth/me")},S=function(){return O.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var C=function(t,e){t.messages.length?e(D(t.messages[0])):e(D("Some error occurred")),e(w("failed"))},E=function(t,e){e(D(t.message?t.message:"Some error occurred")),e(w("failed"))},y={isLoggedIn:!1},A=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},L={status:"idle",error:null,isInitialized:!1},D=function(t){return{type:"APP/SET-ERROR",error:t}},w=function(t){return{type:"APP/SET-STATUS",status:t}},P=[],F=n(6),N={},R=function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o=Object(u.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,title:c.title,status:c.status},e);x(n,t,o).then((function(i){if(0===i.data.resultCode){var c=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(c)}else C(i.data,a)})).catch((function(t){E(t,a)}))}else console.warn("task not found in the state")}},G=n(15),K=n(251),M=n(262),H=n(267),U=n(1),V=o.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var i=Object(c.useState)(""),o=Object(G.a)(i,2),r=o[0],s=o[1],l=Object(c.useState)(null),d=Object(G.a)(l,2),u=d[0],j=d[1],b=function(){""!==r.trim()?(e(r),s("")):j("Title is required")};return Object(U.jsxs)("div",{children:[Object(U.jsx)(M.a,{variant:"outlined",disabled:a,error:!!u,value:r,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),13===t.charCode&&b()},label:"Title",helperText:u}),Object(U.jsx)(H.a,{color:"primary",onClick:b,disabled:a,children:Object(U.jsx)(K.a,{})})]})})),z=n(130),Z=n(261),q=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(c.useState)(!1),n=Object(G.a)(e,2),a=n[0],i=n[1],o=Object(c.useState)(t.value),r=Object(G.a)(o,2),s=r[0],l=r[1];return a?Object(U.jsx)(Z.a,{value:s,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(s)}}):Object(U.jsx)("span",{onDoubleClick:function(){i(!0),l(t.value)},children:t.value})})),B=n(273),Y=n(271),J=n(263),_=n(257),$=o.a.memo((function(t){var e=Object(c.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(c.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(c.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(U.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(U.jsx)(J.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(U.jsx)(q,{value:t.task.title,onChange:i}),Object(U.jsx)(B.a,{onClick:e,children:Object(U.jsx)(_.a,{})})]},t.task.id)})),Q=o.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,i=Object(z.a)(t,["demo"]);console.log("Todolist called");var o=Object(d.b)();Object(c.useEffect)((function(){if(!n){var t,e=(t=i.todolist.id,function(e){e(w("loading")),g(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(w("succeeded"))}))});o(e)}}),[]);var r=Object(c.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(c.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),l=Object(c.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(c.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),j=Object(c.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.Completed}))),Object(U.jsxs)("div",{children:[Object(U.jsxs)("h3",{children:[Object(U.jsx)(q,{value:i.todolist.title,onChange:s}),Object(U.jsx)(B.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(U.jsx)(_.a,{})})]}),Object(U.jsx)(V,{addItem:r,disabled:"loading"===i.todolist.entityStatus}),Object(U.jsx)("div",{children:b.map((function(t){return Object(U.jsx)($,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(U.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(U.jsx)(Y.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:l,color:"inherit",children:"All"}),Object(U.jsx)(Y.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(U.jsx)(Y.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),W=n(18),X=n(258),tt=n(250),et=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(d.c)((function(t){return t.todolists})),i=Object(d.c)((function(t){return t.tasks})),o=Object(d.b)(),r=Object(d.c)((function(t){return t.auth.isLoggedIn}));Object(c.useEffect)((function(){if(!n&&r){var t=function(t){t(w("loading")),f().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(w("succeeded"))}))};o(t)}}),[]);var s=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){p(e,t).then((function(a){var i=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(i)}))}}(t,e);o(n)}),[]),l=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){n(w("loading")),v(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(w("succeeded"))}else C(t.data,n)})).catch((function(t){E(t,n)}))}}(t,e);o(n)}),[]),u=Object(c.useCallback)((function(t,e,n){var a=R(t,{status:e},n);o(a)}),[]),j=Object(c.useCallback)((function(t,e,n){var a=R(t,{title:e},n);o(a)}),[]),b=Object(c.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};o(n)}),[]),O=Object(c.useCallback)((function(t){var e,n=(e=t,function(t){t(w("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),T(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(w("succeeded"))}))});o(n)}),[]),g=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){m(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);o(n)}),[]),x=Object(c.useCallback)((function(t){var e=function(t){return function(e){e(w("loading")),h(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(w("succeeded"))}))}}(t);o(e)}),[o]);return r?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(X.a,{container:!0,style:{padding:"20px"},children:Object(U.jsx)(V,{addItem:x})}),Object(U.jsx)(X.a,{container:!0,spacing:3,children:a.map((function(t){var e=i[t.id];return Object(U.jsx)(X.a,{item:!0,children:Object(U.jsx)(tt.a,{style:{padding:"10px"},children:Object(U.jsx)(Q,{todolist:t,tasks:e,removeTask:s,changeFilter:b,addTask:l,changeTaskStatus:u,removeTodolist:O,changeTaskTitle:j,changeTodolistTitle:g,demo:n})})},t.id)}))})]}):Object(U.jsx)(W.a,{to:"/login"})},nt=n(276),at=n(277),it=n(274),ct=n(279),ot=n(278),rt=n(266),st=n(264),lt=o.a.forwardRef((function(t,e){return Object(U.jsx)(st.a,Object(u.a)({elevation:6,ref:e,variant:"filled"},t))}));function dt(){var t=Object(d.c)((function(t){return t.app.error})),e=Object(d.b)(),n=function(t,n){"clickaway"!==n&&e(D(null))};return Object(U.jsx)(rt.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(U.jsx)(lt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var ut=n(260),jt=n(272),bt=n(268),Ot=n(281),ft=n(280),ht=n(255),Tt=n(129),mt=function(){var t=Object(d.b)(),e=Object(W.g)(),n=Object(d.c)((function(t){return t.auth.isLoggedIn})),a=Object(Tt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Password length must be more than 3 characters"):e.password="Required",e},onSubmit:function(t){i(t),a.resetForm()}}),i=function(e){var n;t((n=e,function(t){t(w("loading")),k(n).then((function(e){0===e.data.resultCode?(t(A(!0)),t(w("succeeded"))):C(e.data,t)})).catch((function(e){E(e,t)}))}))};return n&&e("/"),Object(U.jsx)(jt.a,{container:!0,justifyContent:"center",children:Object(U.jsx)(jt.a,{item:!0,justifyContent:"center",children:Object(U.jsxs)(bt.a,{children:[Object(U.jsxs)(ht.a,{children:[Object(U.jsxs)("p",{children:["To log in get registered",Object(U.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(U.jsx)("p",{children:"or use common test account credentials:"}),Object(U.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(U.jsx)("p",{children:"Password: free"})]}),Object(U.jsx)("form",{onSubmit:a.handleSubmit,children:Object(U.jsxs)(ft.a,{children:[Object(U.jsx)(Z.a,Object(u.a)({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.touched.email&&a.errors.email&&Object(U.jsx)("div",{style:{color:"red"},children:a.errors.email}),Object(U.jsx)(Z.a,Object(u.a)({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.touched.password&&a.errors.password&&Object(U.jsx)("div",{style:{color:"red"},children:a.errors.password}),Object(U.jsx)(Ot.a,{label:"Remember me",control:Object(U.jsx)(J.a,Object(u.a)({},a.getFieldProps("rememberMe")))}),Object(U.jsx)(Y.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})]})})})},gt=n(275);var pt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(d.c)((function(t){return t.app.status})),i=Object(d.c)((function(t){return t.app.isInitialized})),o=Object(d.c)((function(t){return t.auth.isLoggedIn})),r=Object(d.b)();return Object(c.useEffect)((function(){r((function(t){I().then((function(e){0===e.data.resultCode&&t(A(!0))})).finally((function(){t({type:"APP/SET-INITIALIZED",isInitialized:!0})}))}))}),[]),i?Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(dt,{}),Object(U.jsxs)(nt.a,{position:"static",children:[Object(U.jsxs)(at.a,{children:[Object(U.jsx)(B.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(U.jsx)(ut.a,{})}),Object(U.jsx)(it.a,{variant:"h6",children:"News"}),o&&Object(U.jsx)(Y.a,{color:"inherit",onClick:function(){r((function(t){t(w("loading")),S().then((function(e){0===e.data.resultCode?(t(A(!1)),t(w("succeeded"))):C(e.data,t)})).catch((function(e){E(e,t)}))}))},children:"Logout"})]}),"loading"===a&&Object(U.jsx)(ot.a,{})]}),Object(U.jsx)(ct.a,{fixed:!0,children:Object(U.jsxs)(W.d,{children:[Object(U.jsx)(W.b,{path:"/",element:Object(U.jsx)(et,{demo:n})}),Object(U.jsx)(W.b,{path:"login",element:Object(U.jsx)(mt,{})}),Object(U.jsx)(W.b,{path:"404",element:Object(U.jsx)("h1",{style:{textAlign:"center"},children:" 404 : page not found "})}),Object(U.jsx)(W.b,{path:"*",element:Object(U.jsx)(W.a,{to:"/404/"})})]})})]}):Object(U.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(U.jsx)(gt.a,{})})},vt=n(90),xt=n(128),kt=Object(vt.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(F.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(F.a)({},e.task.todoListId,[e.task].concat(Object(j.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(F.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(u.a)(Object(u.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(u.a)(Object(u.a)({},t),{},Object(F.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(u.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(u.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(u.a)(Object(u.a)({},t),{},Object(F.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(u.a)(Object(u.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(j.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(u.a)(Object(u.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error});case"APP/SET-INITIALIZED":return Object(u.a)(Object(u.a)({},t),{},{isInitialized:e.isInitialized});default:return Object(u.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(u.a)(Object(u.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),It=Object(vt.c)(kt,Object(vt.a)(xt.a));window.store=It;var St=n(68);s.a.render(Object(U.jsx)(o.a.StrictMode,{children:Object(U.jsx)(St.a,{children:Object(U.jsx)(d.a,{store:It,children:Object(U.jsx)(pt,{})})})}),document.getElementById("root")),l()}},[[182,1,2]]]);
//# sourceMappingURL=main.23a62a98.chunk.js.map