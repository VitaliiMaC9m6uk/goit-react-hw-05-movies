"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[224],{930:function(n,e,t){t.d(e,{EW:function(){return d},Pn:function(){return p},cI:function(){return h},kh:function(){return x},nc:function(){return u}});var r=t(861),a=t(757),i=t.n(a),s=t(243),c="e03f5baf62035d5c2a9b07531dbf82b3";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/trending/movie/week",{params:{api_key:c}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e),{params:{api_key:c},language:"en-US"});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("search/movie?query=".concat(e),{params:{api_key:c},language:"en-US"});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:c,language:"en-US"}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:c,language:"en-US"}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/"},224:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,i,s=t(861),c=t(439),u=t(757),o=t.n(u),p=t(930),l=t(791),d=t(689),f=t(87),h=t(345),v=t(168),x=t(444),m=x.ZP.div(r||(r=(0,v.Z)(["\nmargin-top:20px;\nmargin-left:20px;\n\n\n"]))),g=x.ZP.div(a||(a=(0,v.Z)(["\nwidth:400px;\n"]))),j=x.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),w=t(184),k=function(){var n,e,t,r,a=(0,l.useState)([]),i=(0,c.Z)(a,2),u=i[0],v=i[1],x=(0,l.useState)(!1),k=(0,c.Z)(x,2),Z=k[0],b=k[1],y=(0,d.UO)(),_=null===y||void 0===y?void 0:y.movieId,U=(0,d.TH)(),S=(0,l.useRef)(null!==(n=null===(e=U.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,l.useEffect)((function(){function n(){return(n=(0,s.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Pn)(_);case 3:e=n.sent,v(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),b(!0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[_]),(0,w.jsx)(w.Fragment,{children:!Z&&(0,w.jsxs)(m,{children:[(0,w.jsx)(f.rU,{to:S.current,children:"Back"}),(0,w.jsxs)(j,{children:[(0,w.jsx)("img",{src:null!==u&&void 0!==u&&u.poster_path?"https://image.tmdb.org/t/p/w500".concat(u.poster_path):h,alt:""}),(0,w.jsxs)(g,{children:[(0,w.jsx)("h2",{children:u.original_title}),(0,w.jsx)("p",{children:u.vote_average}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:u.overview}),(0,w.jsx)("h4",{children:"Genres"}),(0,w.jsx)("ul",{children:0===(null===u||void 0===u||null===(t=u.genres)||void 0===t?void 0:t.length)?(0,w.jsx)("p",{children:"No data available"}):null===u||void 0===u||null===(r=u.genres)||void 0===r?void 0:r.map((function(n){return(0,w.jsx)("li",{children:(0,w.jsx)("p",{children:n.name})},n.name)}))})]})]}),(0,w.jsx)("p",{children:"Additional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(f.rU,{to:"cast",children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(f.rU,{to:"reviews",children:"Reviews"})})]}),(0,w.jsx)(l.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(d.j3,{})})]})})}},345:function(n,e,t){n.exports=t.p+"static/media/default-image.7b7a6ca910672ffb6298.jpg"}}]);
//# sourceMappingURL=224.051d3e17.chunk.js.map