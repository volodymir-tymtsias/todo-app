(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{43:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var c,o,a=n(0),i=n(32),r=n(11),s=(n(41),n(42),n(43),n(2)),l=n(23),u=n(7),d=n(5),j=n(51),f=n(50),b=n(9),p=n.n(b);!function(t){t.All="/",t.Active="/active",t.Completed="/completed"}(c||(c={})),function(t){t.LoadTodos="Failed to load todos",t.LoadUser="Failed to load user",t.Add="Unable to add a todo",t.Delete="Unable to delete a todo",t.Update="Unable to update a todo",t.TitleIsEmpty="Title can't be empty"}(o||(o={}));var m=n(3),h=function(t){var e=t.todo,n=t.deleteHandler,c=void 0===n?function(){}:n,o=t.isProcessed,i=t.onUpdate,r=void 0===i?function(){}:i,s=Object(a.useState)(!1),l=Object(d.a)(s,2),u=l[0],j=l[1],f=Object(a.useState)(e.title),b=Object(d.a)(f,2),h=b[0],O=b[1],v=function(){h.length||c(e.id),h!==e.title&&h.length&&r(e.id,h),j(!1)};return Object(m.jsxs)("div",{className:p()("todo",{completed:e.completed}),children:[Object(m.jsx)("label",{className:"todo__status-label",children:Object(m.jsx)("input",{type:"checkbox",className:"todo__status",checked:e.completed,onChange:function(){return r(e.id)}})}),u?Object(m.jsx)("form",{onSubmit:function(t){t.preventDefault(),v(),h.trim()?O(h.trim()):O(e.title)},children:Object(m.jsx)("input",{type:"text",className:"todo__title-field",placeholder:"Empty todo will be deleted",value:h,autoFocus:!0,onChange:function(t){O(t.target.value)},onBlur:function(){return v()},onKeyUp:function(t){"Escape"===t.key&&(j(!1),O(e.title))}})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:"todo__title",onDoubleClick:function(){return j(!0)},children:e.title}),Object(m.jsx)("button",{type:"button",className:"todo__remove",onClick:function(){return c(e.id)},children:"\xd7"})]}),Object(m.jsxs)("div",{className:p()("modal","overlay",{"is-active":o}),children:[Object(m.jsx)("div",{className:"modal-background has-background-white-ter"}),Object(m.jsx)("div",{className:"loader"})]})]})};h.defaultProps={deleteHandler:function(){},onUpdate:function(){}};var O=function(){return Object(m.jsxs)("nav",{className:"filter",children:[Object(m.jsx)(r.b,{to:"/",className:function(t){var e=t.isActive;return p()("filter__link",{selected:e})},children:"All"}),Object(m.jsx)(r.b,{to:"/active",className:function(t){var e=t.isActive;return p()("filter__link",{selected:e})},children:"Active"}),Object(m.jsx)(r.b,{to:"/completed",className:function(t){var e=t.isActive;return p()("filter__link",{selected:e})},children:"Completed"})]})},v="https://mate.academy/students-api";function x(t){return new Promise((function(e){setTimeout(e,t)}))}function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:e};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),x(300).then((function(){return fetch(v+t,c)})).then((function(t){if(!t.ok)throw new Error;return t.json()}))}var y=function(t){return _(t)},N=function(t,e){return _(t,"POST",e)},g=function(t,e){return _(t,"PATCH",e)},T=function(t){return _(t,"DELETE")},k=function(t,e){return g("/todos/".concat(t),e)},S=10433,E=function(){var t=Object(a.useState)(JSON.parse(localStorage.getItem("todos")||"null")||[]),e=Object(d.a)(t,2),n=e[0],i=e[1],r=function(t){i(t),localStorage.setItem("todos",JSON.stringify(t))},b=Object(a.useState)(null),v=Object(d.a)(b,2),x=v[0],_=v[1],g=Object(a.useState)(null),E=Object(d.a)(g,2),U=E[0],C=E[1],A=Object(a.useState)(""),I=Object(d.a)(A,2),w=I[0],P=I[1],D=Object(a.useState)(""),L=Object(d.a)(D,2),F=L[0],J=L[1],H=Object(a.useState)(!1),B=Object(d.a)(H,2),G=B[0],K=B[1],M=Object(a.useState)([]),R=Object(d.a)(M,2),W=R[0],q=R[1],z=Object(a.useState)(""),Q=Object(d.a)(z,2),V=Q[0],X=Q[1],Y=Object(s.l)().pathname,Z=n.filter((function(t){return!t.completed})),$=n.filter((function(t){return t.completed})),tt=n.every((function(t){return t.completed})),et=function(t){P("");var e=t?[t]:$.map((function(t){return t.id}));q(e);var c=e.map((function(t){return function(t){return T("/todos/".concat(t))}(t)}));Promise.all(c).then((function(){r(t?n.filter((function(e){return e.id!==t})):Object(u.a)(Z))})).catch((function(){P(o.Delete),J(o.Delete)})).finally((function(){q([])}))},nt=function(t,e){var c=n.findIndex((function(e){return e.id===t})),a=e?{title:e.trim()}:{completed:!n[c].completed};if(e&&!e.trim())return P(o.TitleIsEmpty),void J(o.TitleIsEmpty);P(""),q([t]),k(t,a).then((function(t){n.splice(c,1,t),r(Object(u.a)(n))})).catch((function(){P(o.Update),J(o.Update)})).finally((function(){return q([])}))},ct=function(){if(!V.trim())return X(""),P(o.TitleIsEmpty),void J(o.TitleIsEmpty);var t={userId:S,title:V.trim(),completed:!1};P(""),K(!0),_(Object(l.a)(Object(l.a)({},t),{},{id:0})),function(t){return N("/todos",t)}(t).then((function(t){r([].concat(Object(u.a)(n),[t])),X("")})).catch((function(){P(o.Add),J(o.Add)})).finally((function(){_(null),K(!1)}))};Object(a.useEffect)((function(){var t;(t=S,y("/users/".concat(t))).then((function(t){return C(t)})).catch((function(){P(o.LoadUser),J(o.LoadUser)}))}),[]),Object(a.useEffect)((function(){var t;(t=S,y("/todos?userId=".concat(t))).then((function(t){return r(t)})).catch((function(){P(o.LoadTodos),J(o.LoadTodos)}))}),[]),Object(a.useEffect)((function(){var t=setTimeout(P,3e3,"");return function(){return clearTimeout(t)}}),[w]);var ot=Object(a.useMemo)((function(){switch(Y){case c.Active:return Z;case c.Completed:return $;default:return n}}),[Y,n]);return Object(m.jsxs)("div",{className:"todoapp",children:[Object(m.jsx)("h1",{className:"todoapp__title",children:"todos"}),Object(m.jsx)("h5",{className:"todoapp__subtitle",children:U?U.name:""}),Object(m.jsxs)("div",{className:"todoapp__content",children:[Object(m.jsxs)("header",{className:"todoapp__header",children:[!!n.length&&Object(m.jsx)("button",{type:"button",className:p()("todoapp__toggle-all",{active:tt}),onClick:function(){var t=tt?$.map((function(t){return t.id})):Z.map((function(t){return t.id})),e={completed:!tt};P(""),q(t);var c=t.map((function(t){return k(t,e)}));Promise.all(c).then((function(t){r(tt?t:n.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{completed:!0})})))})).catch((function(){P(o.Update),J(o.Update)})).finally((function(){return q([])}))}}),Object(m.jsx)("form",{onSubmit:function(t){t.preventDefault(),ct()},children:Object(m.jsx)("input",{type:"text",className:"todoapp__new-todo",placeholder:"What needs to be done?",value:V,onChange:function(t){G||X(t.target.value)},"data-cy":"createTodo"})})]}),(!!n.length||x)&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("section",{className:"todoapp__main",children:Object(m.jsxs)(j.a,{children:[ot.map((function(t){return Object(m.jsx)(f.a,{timeout:500,classNames:"item",children:Object(m.jsx)(h,{todo:t,deleteHandler:et,isProcessed:W.includes(t.id),onUpdate:nt})},t.id)})),x&&Object(m.jsx)(f.a,{timeout:500,classNames:"temp-item",children:Object(m.jsx)(h,{todo:x,isProcessed:!0})},0)]})}),Object(m.jsxs)("footer",{className:"todoapp__footer",children:[Object(m.jsx)("span",{className:"todo-count",children:"".concat(Z.length," items left")}),Object(m.jsx)(O,{}),Object(m.jsx)("button",{type:"button",className:"todoapp__clear-completed",style:{visibility:$.length?"visible":"hidden"},onClick:function(){return et()},children:"Clear completed"})]})]})]}),Object(m.jsxs)("div",{className:p()("notification","is-danger","is-light","has-text-weight-normal",{hidden:!w}),children:[Object(m.jsx)("button",{type:"button",className:"delete",onClick:function(){return P("")}}),F]})]})},U=function(){return Object(m.jsx)(s.c,{children:Object(m.jsxs)(s.a,{path:"/",children:[Object(m.jsx)(s.a,{index:!0,element:Object(m.jsx)(E,{})}),Object(m.jsx)(s.a,{path:"active",element:Object(m.jsx)(E,{})}),Object(m.jsx)(s.a,{path:"completed",element:Object(m.jsx)(E,{})})]})})};Object(i.createRoot)(document.getElementById("root")).render(Object(m.jsx)(r.a,{children:Object(m.jsx)(U,{})}))}},[[48,1,2]]]);
//# sourceMappingURL=main.32c9f9ae.chunk.js.map