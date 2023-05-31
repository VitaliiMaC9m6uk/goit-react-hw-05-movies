"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[959],{930:function(t,n,e){e.d(n,{EW:function(){return l},Pn:function(){return p},cI:function(){return d},kh:function(){return m},nc:function(){return s}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="e03f5baf62035d5c2a9b07531dbf82b3";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/week",{params:{api_key:i}});case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n),{params:{api_key:i},language:"en-US"});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(n),{params:{api_key:i},language:"en-US"});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews"),{params:{api_key:i,language:"en-US"}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"},927:function(t,n,e){e.d(n,{g:function(){return c}});var r=e(87),a=e(345),u=e(184),c=function(t){var n=t.url,e=t.title,c=t.activeId,i=t.location;return(0,u.jsx)("li",{children:(0,u.jsxs)(r.rU,{to:"/movies/".concat(c),state:{from:i},children:[(0,u.jsx)("img",{src:null!==n?"https://image.tmdb.org/t/p/w500".concat(n):a,alt:e}),(0,u.jsx)("h2",{children:e})]})})}},959:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,a,u=e(861),c=e(439),i=e(757),s=e.n(i),o=e(930),p=e(927),f=e(791),l=e(87),h=e(689),d=e(168),v=e(444),m=v.ZP.ul(r||(r=(0,d.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),g=v.ZP.form(a||(a=(0,d.Z)(["\n  display:flex;\n  gap:10px;\n"]))),x=e(184),y=function(){var t=(0,f.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],a=(0,f.useState)(""),i=(0,c.Z)(a,2),d=i[0],v=i[1],y=(0,f.useState)(!1),w=(0,c.Z)(y,2),b=w[0],Z=w[1],k=(0,l.lr)(),_=(0,c.Z)(k,2),j=_[0],S=_[1],U=j.get("movies"),C=(0,h.TH)();(0,f.useEffect)((function(){function t(){return(t=(0,u.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.EW)(U.trim().replace(" ","%20"));case 3:n=t.sent,r(n.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Z(!0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}U&&function(){t.apply(this,arguments)}()}),[U]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(g,{onSubmit:function(t){t.preventDefault(),""!==d.trim()&&(S({movies:t.target[0].value}),v(""))},children:[(0,x.jsx)("label",{children:"Movie search"}),(0,x.jsx)("input",{onChange:function(t){var n=t.target.value;v(n)},value:d}),(0,x.jsx)("button",{children:"Search"})]}),!b&&(0,x.jsx)(m,{children:null===e||void 0===e?void 0:e.map((function(t){return(0,x.jsx)(p.g,{location:C,title:t.original_title,url:t.poster_path,activeId:t.id},t.id)}))})]})}},345:function(t,n,e){t.exports=e.p+"static/media/default-image.7b7a6ca910672ffb6298.jpg"}}]);
//# sourceMappingURL=959.560bc62c.chunk.js.map