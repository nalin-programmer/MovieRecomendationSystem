(this.webpackJsonpmoviereferalsystem=this.webpackJsonpmoviereferalsystem||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},193:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(13),r=n.n(s),i=(n(128),n(79)),o=n(15),l=(n(129),n(130),n(56)),j=n.n(l),d=n(2),b=function(){return Object(d.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:Object(d.jsx)(j.a,{top:!0,children:" \ud83c\udfac Movie Recommendation System"})})},u=n(9),p=n(248),O=n(251),x=n(253),h=n(110),f=n.n(h),m=n(109),g=n.n(m),v=n(72),y=n.n(v),_=n(108),w=n.n(_),S=Object(p.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#122442",zIndex:100}});function k(){var e=S(),t=c.a.useState(0),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(o.f)();return Object(a.useEffect)((function(){0===s?i.push("/"):1===s?i.push("/movies"):2===s?i.push("/series"):3===s&&i.push("/search")}),[s,i]),Object(d.jsx)(j.a,{children:Object(d.jsx)(j.a,{bottom:!0,children:Object(d.jsxs)(O.a,{value:s,onChange:function(e,t){r(t)},showLabels:!0,className:e.root,children:[Object(d.jsx)(x.a,{style:{color:"white"},label:"Trending",icon:Object(d.jsx)(w.a,{})}),Object(d.jsx)(x.a,{style:{color:"white"},label:"Movies",icon:Object(d.jsx)(g.a,{})}),Object(d.jsx)(x.a,{style:{color:"white"},label:"TV Series",icon:Object(d.jsx)(f.a,{})}),Object(d.jsx)(x.a,{style:{color:"white"},label:"Search",icon:Object(d.jsx)(y.a,{})})]})})})}var N=n(14),C=n.n(N),P=n(21),T=n(18),M=n.n(T),E=n(85),G=n(264),B=function(e){var t=e.selectedGenres,n=e.setSelectedGenres,c=e.genres,s=e.setGenres,r=e.type,i=e.setPage,o=function(){var e=Object(P.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://api.themoviedb.org/3/genre/".concat(r,"/list?api_key=").concat("7af3ff745ee1860685136e9e80d7ebce","&language=en-US"));case 2:t=e.sent,n=t.data,s(n.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return o(),function(){s({})}}),[]),Object(d.jsxs)("div",{style:{padding:"6px 0"},children:[t.map((function(e){return Object(d.jsx)(G.a,{style:{margin:2},label:e.name,color:"primary",clickable:!0,size:"small",onDelete:function(){return function(e){n(t.filter((function(t){return t.id!==e.id}))),s([].concat(Object(E.a)(c),[e])),i(1)}(e)}},e.id)})),c.map((function(e){return Object(d.jsx)(G.a,{style:{margin:2},label:e.name,clickable:!0,size:"small",onClick:function(){return function(e){n([].concat(Object(E.a)(t),[e])),s(c.filter((function(t){return t.id!==e.id}))),i(1)}(e)}},e.id)}))]})},I=n(256),U="https://image.tmdb.org/t/p/w300",z="https://image.tmdb.org/t/p/w500",D="https://www.movienewz.com/img/films/poster-holder.jpg",A=(n(157),n(263)),F=n(254),L=n(215),V=(n(158),n(255)),J=n(112),R=n.n(J),q=n(111),W=n.n(q),H=(n(192),n(193),function(e){return e.preventDefault()}),K=function(e){var t=e.id,n=e.media_type,c=Object(a.useState)([]),s=Object(u.a)(c,2),r=s[0],i=s[1],o=r.map((function(e){return Object(d.jsxs)("div",{className:"carouselItem",children:[Object(d.jsx)("img",{src:e.profile_path?"".concat(U,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:H,className:"carouselItem__img"}),Object(d.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),l=function(){var e=Object(P.a)(C.a.mark((function e(){var a,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://api.themoviedb.org/3/".concat(n,"/").concat(t,"/credits?api_key=").concat("7af3ff745ee1860685136e9e80d7ebce","&language=en-US"));case 2:a=e.sent,c=a.data,i(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),Object(d.jsx)(W.a,{mouseTracking:!0,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},items:o,autoPlay:!0})},Q=Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#24468b",border:"1px solid green",borderRadius:15,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}}));function X(e){var t=e.children,n=e.media_type,c=e.id,s=Q(),r=Object(a.useState)(!1),i=Object(u.a)(r,2),o=i[0],l=i[1],j=Object(a.useState)(),b=Object(u.a)(j,2),p=b[0],O=b[1],x=Object(a.useState)(),h=Object(u.a)(x,2),f=h[0],m=h[1],g=function(){var e=Object(P.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://api.themoviedb.org/3/".concat(n,"/").concat(c,"?api_key=").concat("7af3ff745ee1860685136e9e80d7ebce","&language=en-US"));case 2:t=e.sent,a=t.data,O(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(P.a)(C.a.mark((function e(){var t,a,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://api.themoviedb.org/3/".concat(n,"/").concat(c,"/videos?api_key=").concat("7af3ff745ee1860685136e9e80d7ebce","&language=en-US"));case 2:a=e.sent,s=a.data,m(null===(t=s.results[0])||void 0===t?void 0:t.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g(),v()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"media",style:{cursor:"pointer"},color:"inherit",onClick:function(){l(!0)},children:t}),Object(d.jsx)(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:o,onClose:function(){l(!1)},closeAfterTransition:!0,BackdropComponent:F.a,BackdropProps:{timeout:500},children:Object(d.jsx)(L.a,{in:o,children:p&&Object(d.jsx)("div",{className:s.paper,children:Object(d.jsxs)("div",{className:"ContentModal",children:[Object(d.jsx)("img",{src:p.poster_path?"".concat(z,"/").concat(p.poster_path):D,alt:p.name||p.title,className:"ContentModal__portrait"}),Object(d.jsx)("img",{src:p.backdrop_path?"".concat(z,"/").concat(p.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:p.name||p.title,className:"ContentModal__landscape"}),Object(d.jsxs)("div",{className:"ContentModal__about",children:[Object(d.jsxs)("span",{className:"ContentModal__title",children:[p.name||p.title," (",(p.first_air_date||p.release_date||"-----").substring(0,4),")"]}),p.tagline&&Object(d.jsx)("i",{className:"tagline",children:p.tagline}),Object(d.jsx)("span",{className:"ContentModal__description",children:p.overview}),Object(d.jsx)("div",{children:Object(d.jsx)(K,{id:c,media_type:n})}),Object(d.jsx)(V.a,{variant:"contained",startIcon:Object(d.jsx)(R.a,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(f),children:"Watch the Trailer"})]})]})})})})]})}var Y=function(e){var t=e.id,n=e.poster,a=e.title,c=e.date,s=e.media_type,r=e.vote_average,i=a;return a.length>18&&(i=a.substring(0,18)+"..."),Object(d.jsxs)(X,{media_type:s,id:t,children:[Object(d.jsx)(I.a,{badgeContent:r,color:r>6?"primary":"secondary"}),Object(d.jsx)("img",{className:"poster",src:n?"".concat(U).concat(n):D,alt:a}),Object(d.jsx)("b",{className:"title",children:i}),Object(d.jsxs)("span",{className:"subTitle",children:["tv"===s?"TV Series":"Movie",Object(d.jsx)("span",{className:"subTitle",children:c})]})]})},Z=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},$=n(262),ee=n(117),te=n(257),ne=Object(ee.a)({palette:{type:"dark"}});function ae(e){var t=e.setPage,n=e.numOfPages,a=void 0===n?10:n;return Object(d.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(d.jsx)(te.a,{theme:ne,children:Object(d.jsx)($.a,{onChange:function(e){return n=e.target.textContent,t(n),void window.scroll(0,0);var n},count:a,color:"primary",hideNextButton:!0,hidePrevButton:!0})})})}var ce,se,re=n(44),ie=n.n(re),oe=n(35),le=n.n(oe),je=n(83),de=n(86),be=n(84),ue=n(113),pe=n.n(ue),Oe=(n(209),n(210),n.p+"static/media/slider-badging.b33dd5b6.jpg"),xe=n.p+"static/media/slider-scale.172c6ead.jpg",he=n.p+"static/media/slider-badag.36599446.jpg",fe=n.p+"static/media/slider-scales.f921e314.jpg",me=Object(be.a)(pe.a)(ce||(ce=Object(je.a)(["\n  /* margin-top: 20px; */\n  & > button {\n    opacity: 0;\n    height: 100%;\n    width: 5vw;\n    z-index: 1;\n    &:hover {\n      opacity: 1;\n      transition: opacity 0.2s ease 0s;\n    }\n  }\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: rgb(150, 158, 171);\n    }\n  }\n  li.slick-active button:before {\n    color: white;\n  }\n  .slick-list {\n    overflow: initial;\n  }\n  .slick-prev {\n    left: -75px;\n  }\n  .slick-next {\n    right: -75px;\n  }\n"]))),ge=be.a.div(se||(se=Object(je.a)(["\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n  a {\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n      rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    display: block;\n    position: relative;\n    padding: 4px;\n    img {\n      width: 100%;\n      height: 100%;\n    }\n    &:hover {\n      padding: 0;\n      border: 4px solid rgba(249, 249, 249, 0.8);\n      transition-duration: 300ms;\n    }\n  }\n"]))),ve=function(e){e.id,e.media_type;return Object(d.jsx)("div",{children:Object(d.jsxs)(me,Object(de.a)(Object(de.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,"max-width":"100px"}),{},{children:[Object(d.jsx)(ge,{children:Object(d.jsx)("a",{children:Object(d.jsx)("img",{src:Oe,alt:""})})}),Object(d.jsx)(ge,{children:Object(d.jsx)("a",{children:Object(d.jsx)("img",{src:xe,alt:""})})}),Object(d.jsx)(ge,{children:Object(d.jsx)("a",{children:Object(d.jsx)("img",{src:he,alt:""})})}),Object(d.jsx)(ge,{children:Object(d.jsx)("a",{children:Object(d.jsx)("img",{src:fe,alt:""})})})]}))})},ye=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(u.a)(s,2),i=r[0],o=r[1],l=Object(a.useState)(1),j=Object(u.a)(l,2),b=j[0],p=j[1],O=Object(a.useState)([]),x=Object(u.a)(O,2),h=x[0],f=x[1],m=Object(a.useState)(),g=Object(u.a)(m,2),v=g[0],y=g[1],_=Z(i),w=function(){var e=Object(P.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("7af3ff745ee1860685136e9e80d7ebce","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(b,"&with_genres=").concat(_));case 2:t=e.sent,n=t.data,f(n.results),y(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){window.scroll(0,0),w()}),[_,b]),Object(d.jsxs)("div",{children:[Object(d.jsx)(ve,{}),Object(d.jsx)("br",{}),Object(d.jsx)(le.a,{children:Object(d.jsx)("span",{className:"pageTitle",children:"Discover Movies"})}),Object(d.jsx)(le.a,{children:Object(d.jsx)(B,{type:"movie",selectedGenres:i,setSelectedGenres:o,genres:n,setGenres:c,setPage:p})}),Object(d.jsx)("div",{className:"trending",children:h&&h.map((function(e){return Object(d.jsx)(ie.a,{bottom:!0,children:Object(d.jsx)(Y,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)})}))}),v>1&&Object(d.jsx)(ae,{setPage:p,numOfPages:v})]})},_e=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(u.a)(s,2),i=r[0],o=r[1],l=Object(a.useState)(1),j=Object(u.a)(l,2),b=j[0],p=j[1],O=Object(a.useState)([]),x=Object(u.a)(O,2),h=x[0],f=x[1],m=Object(a.useState)(),g=Object(u.a)(m,2),v=g[0],y=g[1],_=Z(i),w=function(){var e=Object(P.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat("7af3ff745ee1860685136e9e80d7ebce","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(b,"&with_genres=").concat(_));case 2:t=e.sent,n=t.data,f(n.results),y(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){window.scroll(0,0),w()}),[_,b]),Object(d.jsxs)("div",{children:[Object(d.jsx)(ve,{}),Object(d.jsx)("br",{}),Object(d.jsx)(le.a,{children:Object(d.jsx)("span",{className:"pageTitle",children:"Discover Series"})}),Object(d.jsx)(le.a,{children:Object(d.jsx)(B,{type:"tv",selectedGenres:i,setSelectedGenres:o,genres:n,setGenres:c,setPage:p})}),Object(d.jsx)("div",{className:"trending",children:h&&h.map((function(e){return Object(d.jsx)(ie.a,{bottom:!0,children:Object(d.jsx)(Y,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)})}))}),v>1&&Object(d.jsx)(ae,{setPage:p,numOfPages:v})]})},we=(n(211),n(260)),Se=n(261),ke=n(258),Ne=(n(212),function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(u.a)(s,2),i=r[0],o=r[1],l=Object(a.useState)(1),j=Object(u.a)(l,2),b=j[0],p=j[1],O=Object(a.useState)([]),x=Object(u.a)(O,2),h=x[0],f=x[1],m=Object(a.useState)(),g=Object(u.a)(m,2),v=g[0],_=g[1],w=Object(ee.a)({palette:{type:"dark",primary:{main:"#fff"}}}),S=function(){var e=Object(P.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("https://api.themoviedb.org/3/search/".concat(n?"tv":"movie","?api_key=").concat("7af3ff745ee1860685136e9e80d7ebce","&language=en-US&query=").concat(i,"&page=").concat(b,"&include_adult=false"));case 3:t=e.sent,a=t.data,f(a.results),_(a.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){window.scroll(0,0),S()}),[n,b]),Object(d.jsxs)("div",{children:[Object(d.jsxs)(te.a,{theme:w,children:[Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)(we.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return o(e.target.value)}}),Object(d.jsx)(V.a,{onClick:S,variant:"contained",style:{marginLeft:10},children:Object(d.jsx)(y.a,{fontSize:"large"})})]}),Object(d.jsxs)(Se.a,{value:n,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){c(t),p(1)},style:{paddingBottom:5},"aria-label":"disabled tabs example",children:[Object(d.jsx)(ke.a,{style:{width:"50%"},label:"Search Movies"}),Object(d.jsx)(ke.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(d.jsxs)("div",{className:"trending",children:[h&&h.map((function(e){return Object(d.jsx)(Y,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:n?"tv":"movie",vote_average:e.vote_average},e.id)})),i&&!h&&(n?Object(d.jsx)("h2",{children:"No Series Found"}):Object(d.jsx)("h2",{children:"No Movies Found"}))]}),v>1&&Object(d.jsx)(ae,{setPage:p,numOfPages:v})]})}),Ce=n(259);n(213);function Pe(){return console.log("Signup page"),Object(d.jsx)("div",{className:"signupbody",children:Object(d.jsxs)("div",{class:"signupcontainer",children:[Object(d.jsx)("span",{className:"pageTitle",children:"Sign Up"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{children:"First Name"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text"}),Object(d.jsx)("label",{children:"Last Name"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Email Address"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"password"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{children:"Create Account"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"/signin",className:"signupa",children:"Dont have an account?"})]})]})})}function Te(){return Object(d.jsx)("div",{className:"signupbody",children:Object(d.jsxs)("div",{class:"signupcontainer",children:[Object(d.jsx)("span",{className:"pageTitle",children:"Sign In"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{children:"Email Address"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"password"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{children:"Create Account"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"/signup",className:"signupa",children:"Already have an account?"})]})]})})}var Me=function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(Ce.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/movies",component:ye}),Object(d.jsx)(o.a,{path:"/series",component:_e}),Object(d.jsx)(o.a,{path:"/search",component:Ne}),Object(d.jsx)(o.a,{path:"/signup",component:Pe}),Object(d.jsx)(o.a,{path:"/",component:Te,exact:!0}),Object(d.jsx)(o.a,{path:"/signin",component:Te}),Object(d.jsx)(o.a,{path:"/signup",component:Pe})]})})}),Object(d.jsx)(k,{})]})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(Me,{})}),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.5037d69c.chunk.js.map