(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t,n){},133:function(e,t,n){},142:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(23),c=n.n(r),i=n(50),o=(n(130),n(131),n(211)),u=n(212),j=n(37),l=n.n(j),b=n(58),p=n(116),d="SET_MESSAGES",m="START_LOADING",O="END_LOADING",f="SET_ERROR",g="ADD_MASSAGE",h=function(e){return{type:f,payload:e}},x=(n(133),n(17)),y=Object(i.b)((function(e){return{messages:e.messages,isLoading:e.isLoading,error:e.error}}),{getMessages:function(){return function(){var e=Object(b.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m}),e.next=3,fetch("/posts");case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,200===n.status?t({type:d,payload:s}):t(h(s)),t({type:O});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.messages,n=e.getMessages,a=e.isLoading;return Object(s.useEffect)((function(){n()}),[n]),a?Object(x.jsx)("div",{className:"chat center",children:Object(x.jsx)(o.a,{size:"large"})}):t.length?Object(x.jsx)("div",{className:"chat",children:t.map((function(e){var t=e.name,n=e.message,s=e._id;return Object(x.jsx)(u.a,{title:t,style:{width:"80%"},children:Object(x.jsx)("p",{children:n})},s)}))}):Object(x.jsx)("div",{className:"chat center",children:Object(x.jsx)("p",{children:"Sorry, no message for you!"})})})),v=n(28),S=n(115),w=n(213),T=n(214),L=n(114),M=(n(142),{labelCol:{span:4},wrapperCol:{span:20}}),N={wrapperCol:{offset:4,span:4}},A=Object(i.b)(null,{sendMessage:function(e){return function(){var t=Object(b.a)(l.a.mark((function t(n){var s,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return s=t.sent,t.next=5,s.json();case 5:return a=t.sent,200===s.status&&(p.b.success("Message send"),n({type:g,payload:a})),t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.sendMessage,n=w.a.useForm(),s=Object(S.a)(n,1)[0],a=function(){var e=Object(b.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n);case 2:(a=e.sent).error?p.b.error(a.message):s.setFieldsValue({text:null});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(w.a,Object(v.a)(Object(v.a)({form:s},M),{},{className:"form-message",name:"basic",initialValues:{remember:!0},onFinish:a,children:[Object(x.jsx)(w.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"},{pattern:/^[a-z\u0430-\u044f\u0456\u0457\u04510-9_]+$/i,message:"Uncorrect name"}],children:Object(x.jsx)(T.a,{})}),Object(x.jsx)(w.a.Item,{label:"Message",name:"message",rules:[{required:!0,message:"Please input your message!"}],children:Object(x.jsx)(T.a.TextArea,{autoSize:{minRows:2,maxRows:5}})}),Object(x.jsx)(w.a.Item,Object(v.a)(Object(v.a)({},N),{},{children:Object(x.jsx)(L.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))})),E=n(80),C=n(117),D={messages:[],isLoading:!1,error:null},F=n(112),I=n(113),_=Object(E.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,n=t.type,s=t.payload;switch(n){case d:return Object(v.a)(Object(v.a)({},e),{},{messages:s});case g:return Object(v.a)(Object(v.a)({},e),{},{messages:[s].concat(Object(C.a)(e.messages))});case m:return Object(v.a)(Object(v.a)({},e),{},{isLoading:!0});case O:return Object(v.a)(Object(v.a)({},e),{},{isLoading:!1});case f:return Object(v.a)(Object(v.a)({},e),{},{error:s});default:return e}}),Object(I.composeWithDevTools)(Object(E.applyMiddleware)(F.a)));var R=function(){return Object(x.jsx)(i.a,{store:_,children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(y,{}),Object(x.jsx)(A,{})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,215)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};n(208);c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(R,{})}),document.getElementById("root")),k()}},[[209,1,2]]]);
//# sourceMappingURL=main.258a8236.chunk.js.map