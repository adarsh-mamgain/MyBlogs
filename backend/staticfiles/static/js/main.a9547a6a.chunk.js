(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{46:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n.n(r),a=n(16),s=n.n(a),o=n(7),i=n.n(o),l=n(17),u=n(18),d=n(19),j=n(21),h=n(20),b=n(5),f=n.n(b),p=n(0);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var m=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(u.a)(this,n),(r=e.call(this,t)).renderBlogs=function(){return r.state.blogList.map((function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:t.title}),Object(p.jsx)("p",{children:t.content}),Object(p.jsx)("p",{children:t.author}),Object(p.jsx)("small",{children:t.date})]})}))},r.state={blogList:[]},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(i.a.mark((function t(){var e=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("http://localhost:8000/api/blog/?format=json").then((function(t){var n=t.data;e.setState({blogList:n})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsx)("main",{className:"content",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-6 col-sm-10 mx-auto p-0",children:Object(p.jsx)("div",{className:"card p-3",children:Object(p.jsx)("ul",{className:"list-group list-group-flush",children:this.renderBlogs()})})})})})}}]),n}(r.Component),x=m,O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.a9547a6a.chunk.js.map