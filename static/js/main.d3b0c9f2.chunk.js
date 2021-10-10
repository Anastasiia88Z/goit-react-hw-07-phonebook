(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={container:"Container_container__QGdLi"}},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=n(12),s=n(3),l=n(20),u=n(11),b=n.n(u),m=n(0);function d(e){var t=e.children;return Object(m.jsx)("div",{className:b.a.container,children:t})}var j=n(2),f=n.n(j);function p(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),b=u[0],d=u[1],j=Object(l.a)(),p=Object(l.a)(),h=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":d(a);break;default:return}};return Object(m.jsxs)("form",{className:f.a.form,onSubmit:function(e){e.preventDefault(),t(r,b),o(""),d("")},children:[Object(m.jsxs)("label",{htmlFor:j,className:f.a.label,children:["Name",Object(m.jsx)("input",{className:f.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:j,onChange:h,value:r,placeholder:"Annie Copeland"})]}),Object(m.jsxs)("label",{htmlFor:p,className:f.a.label,children:["Number",Object(m.jsx)("input",{className:f.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:p,onChange:h,value:b,placeholder:"227-91-26"})]}),Object(m.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})}var h=n(6),O=n.n(h),_=function(e){var t=e.contacts,n=e.onDelete;return Object(m.jsx)("ul",{className:O.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(m.jsxs)("li",{className:O.a.item,children:[a," : ",c,Object(m.jsx)("button",{className:O.a.button,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},x=n(8),v=n.n(x),C=function(e){var t=e.value,n=e.onChange,a=e.onBlur;return Object(m.jsxs)("label",{htmlFor:"lab",className:v.a.label,children:["Find contacts by name",Object(m.jsx)("input",{className:v.a.input,type:"text",id:"lab",value:t,onChange:n,onBlur:a})]})},g=n(9),N=n.n(g);function S(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],b=o[1],j="contacts";Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(j));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem(j,JSON.stringify(n))}),[n]);return Object(m.jsxs)(d,{children:[Object(m.jsx)("h1",{className:N.a.title,children:"Phonebook"}),Object(m.jsx)(p,{onSubmit:function(e,t){if(n.find((function(t){return t.name.toLowerCase()===e.toLocaleLowerCase()})))alert("".concat(e," is already in contacts"));else{var a={id:Object(l.a)(),name:e,number:t};c((function(e){return[a].concat(Object(i.a)(e))}))}}}),Object(m.jsx)("h2",{className:N.a.contacts,children:"Contacts"}),Object(m.jsx)(C,{value:u,onChange:function(e){b(e.currentTarget.value)},onBlur:function(e){e.currentTarget.value="",b("")}}),Object(m.jsx)(_,{contacts:n.filter((function(e){return e.name.toLowerCase().includes(u.toLocaleLowerCase())})),onDelete:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={input:"Form_input__3mM49",form:"Form_form__179zu",button:"Form_button__1LzbY",label:"Form_label__2fgzM"}},6:function(e,t,n){e.exports={button:"ListContacts_button__2rAkk",item:"ListContacts_item__1tTfw",list:"ListContacts_list__25eOL"}},8:function(e,t,n){e.exports={input:"Filter_input__2cjRj",label:"Filter_label__2vgXe"}},9:function(e,t,n){e.exports={title:"App_title__2yMJ1",contacts:"App_contacts__iH7m6"}}},[[19,1,2]]]);
//# sourceMappingURL=main.d3b0c9f2.chunk.js.map