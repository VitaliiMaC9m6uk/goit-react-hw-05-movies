"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[156],{930:function(t,n,e){e.d(n,{EW:function(){return l},Pn:function(){return p},cI:function(){return h},kh:function(){return g},nc:function(){return s}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="e03f5baf62035d5c2a9b07531dbf82b3";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/week",{params:{api_key:i}});case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n),{params:{api_key:i},language:"en-US"});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(n),{params:{api_key:i},language:"en-US"});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews"),{params:{api_key:i,language:"en-US"}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"},927:function(t,n,e){e.d(n,{g:function(){return c}});var r=e(87),a=e(345),u=e(184),c=function(t){var n=t.url,e=t.title,c=t.activeId,i=t.location;return(0,u.jsx)("li",{children:(0,u.jsxs)(r.rU,{to:"/movies/".concat(c),state:{from:i},children:[(0,u.jsx)("img",{src:null!==n?"https://image.tmdb.org/t/p/w500".concat(n):a,alt:e}),(0,u.jsx)("h2",{children:e})]})})}},156:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r,a=e(861),u=e(439),c=e(757),i=e.n(c),s=e(930),o=e(927),p=e(791),f=e(689),l=e(168),d=e(444).ZP.ul(r||(r=(0,l.Z)(["\nlist-style:none;\ndisplay:flex;\ngap:10px;\nflex-wrap:wrap;\njustify-content:space-around;\n"]))),h=e(184),v=function(){var t=(0,p.useState)([]),n=(0,u.Z)(t,2),e=n[0],r=n[1],c=(0,p.useState)(!1),l=(0,u.Z)(c,2),v=l[0],g=l[1],m=(0,f.TH)();return(0,p.useEffect)((function(){function t(){return(t=(0,a.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.nc)();case 3:n=t.sent,r(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),g(!0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,h.jsx)(h.Fragment,{children:!v&&(0,h.jsx)(d,{children:null===e||void 0===e?void 0:e.map((function(t){return(0,h.jsx)(o.g,{location:m,title:t.original_title,url:t.poster_path,activeId:t.id},t.original_title)}))})})}},345:function(t,n,e){t.exports=e.p+"static/media/default-image.7b7a6ca910672ffb6298.jpg"}}]);
//# sourceMappingURL=156.a5e82ccd.chunk.js.map