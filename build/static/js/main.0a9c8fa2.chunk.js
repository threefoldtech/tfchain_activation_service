(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{201:function(t,e,n){},202:function(t,e,n){},206:function(t,e){},207:function(t,e){},225:function(t,e){},226:function(t,e){},233:function(t,e){},235:function(t,e){},245:function(t,e){},247:function(t,e){},277:function(t,e){},279:function(t,e){},286:function(t,e){},287:function(t,e){},305:function(t,e){},327:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(16),r=n.n(i),o=(n(201),n.p+"static/media/3fold_logo.b121932e.png"),s=(n(202),n(32)),u=n.n(s),d=n(69),l=n(2),f=n(365),j=n(367),b=n(364),h=n(360),p=n(363),v=n(361),x=n(11);function O(t){var e=t.activate,n=Object(c.useState)(""),a=Object(l.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(""),s=Object(l.a)(o,2),O=s[0],m=s[1],g=function(){var t=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==i){t.next=3;break}return m("Address not valid"),t.abrupt("return");case 3:t.prev=3,(new v.a).addFromAddress(i),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(3),m("Address not found"),t.abrupt("return");case 12:m(""),e(i);case 14:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{style:{padding:"50px",display:"flex",flexDirection:"column",width:"90%",margin:"auto"},children:[Object(x.jsx)("span",{style:{fontSize:22,marginBottom:"1em"},children:"Enter your tfchain address to activate"}),Object(x.jsxs)(f.a,{children:[Object(x.jsx)(j.a,{htmlFor:"tfchainAddress",children:"Tfchain Address"}),Object(x.jsx)(b.a,{value:i,onChange:function(t){m(""),r(t.target.value)},id:"tfchainAddress","aria-describedby":"my-helper-text"}),Object(x.jsx)(h.a,{id:"my-helper-text",children:"Enter a tfchain address"}),O&&Object(x.jsx)("div",{children:O})]}),Object(x.jsx)(p.a,{color:"primary",variant:"contained",style:{marginTop:25},type:"submit",onClick:function(){return g()},children:"Activate"})]})})}var m=n(182),g=n.n(m),y=n(76);var A=function(){var t=Object(y.b)().enqueueSnackbar;return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(x.jsx)(O,{activate:function(e){g.a.post("http://localhost:3000/activation/activate",{substrateAccountID:e}).then((function(e){t("Successfully activated account!"),console.log(e)})).catch((function(e){t("Failed to activate account"),console.log(e)}))}})]})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,368)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(y.a,{maxSnack:3,children:Object(x.jsx)(A,{})})}),document.getElementById("root")),k()}},[[327,1,2]]]);
//# sourceMappingURL=main.0a9c8fa2.chunk.js.map