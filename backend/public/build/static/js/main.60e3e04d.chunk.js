(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],{181:function(e,t,a){},186:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(25),c=a.n(r),i=(a(181),a(67),a(24)),o=(a(142),a(57)),l=a(34),u=a(35),j=a(37),d=a(36),h=(a(130),a(43)),b=a(48),m=a(26),O=(a(186),a(51)),p=a(175),f=a(6),x=(n.Component,a(192),a(171)),v=a.p+"static/media/home.61742069.jpg",g=a.p+"static/media/slide2.a837e432.jpg",y=a.p+"static/media/slide1.0e200aaf.jpg";function w(){var e={height:"900px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79",width:"100%"};return Object(f.jsxs)(x.a,{style:{width:"100%"},autoplay:!0,children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{style:e,src:v,className:"slide"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{style:e,src:y,className:"slide"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{style:e,src:g,className:"slide"})})]})}n.Component;var k=a(30),S=(a(202),a(145),a(78)),C=a(23),I=a.n(C),A=(a(155),a(56)),P=(a(221),a(170)),M=(a(134),a(54)),N=a(174),T=(a(224),a(166)),D=function(){return Object(f.jsx)("div",{style:{margin:50,textAlign:"center"},children:Object(f.jsx)(T.a,{})})},z=function(e){var t=e.movie,a=e.showButton,s=e.isInList,r=e.getData,c=e.turnOffCommenting,o=Object(n.useState)(!1),l=Object(k.a)(o,2),u=l[0],j=l[1],d=Object(n.useState)(""),h=Object(k.a)(d,2),b=h[0],m=h[1],O=Object(n.useState)(!1),p=Object(k.a)(O,2),x=p[0],v=(p[1],Object(n.useState)([])),g=Object(k.a)(v,2),y=g[0],w=g[1];Object(n.useEffect)((function(){!c&&u&&I.a.get("/movie/".concat(t._id,"/comment")).then((function(e){var t=e.data;return w(t.data.comments)})).catch((function(e){return console.log(e)}))}),[u,c,t]);return Object(f.jsxs)(A.a,{span:4,children:[Object(f.jsxs)("div",{className:"movie-poster",children:[Object(f.jsx)("img",{src:t.Poster,alt:"movie",style:{cursor:"pointer"},onClick:function(){return c?null:j(!0)}}),Object(f.jsxs)("div",{className:"movie__details",children:[Object(f.jsx)("h2",{children:t.Title}),Object(f.jsxs)("div",{className:"movie__details-bottom",children:[Object(f.jsx)("small",{children:t.Year}),a&&!c&&Object(f.jsx)(i.a,{type:"primary",onClick:function(){return s?function(e){I.a.delete("/favorite/"+e._id).then((function(e){return e.data,r()})).catch((function(e){return console.log(e)}))}(t):function(e){I.a.post("/favorite",{poster:e.Poster,title:e.Title,type:e.Type,year:e.Year,imdbID:e.imdbID,movieId:e._id}).then((function(e){return e.data,r()})).catch((function(e){return console.log(e)}))}(t)},children:s?"Remove":"Add"})]})]})]}),Object(f.jsxs)(P.a,{title:t.Title,visible:u,footer:null,onOk:function(){return j(!1)},onCancel:function(){return j(!1)},children:[y.map((function(e){return Object(f.jsxs)("div",{className:"comment",children:[Object(f.jsx)("h4",{children:e.userId.name}),Object(f.jsx)("p",{children:e.body})]})})),x&&Object(f.jsx)(D,{}),0===y.length&&!x&&Object(f.jsx)("div",{children:"No comments found"}),a&&Object(f.jsxs)("div",{className:"modal__footer",children:[Object(f.jsx)(M.a.TextArea,{showCount:!0,maxLength:100,value:b,placeholder:"Enter your comment...",onChange:function(e){return m(e.target.value)}}),Object(f.jsx)(i.a,{type:"primary",className:"modal__footer-button",onClick:function(){I.a.post("/movie/comment",{comment:b,movieId:t._id}).then((function(e){var t=e.data;w([t.data.comment].concat(Object(N.a)(y))),j(!1),m("")})).catch((function(e){return console.log(e)}))},children:"Comment"})]})]})]})},E=function(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(k.a)(c,2),o=i[0],l=i[1];Object(n.useEffect)((function(){!!localStorage.getItem("token")&&(l(!0),u())}),[]),Object(n.useEffect)((function(){e.isAuth||l(!1)}),[e.isAuth]);var u=function(){I.a.get("/favorite").then((function(e){var t=e.data;return r(t.data.movies)})).catch((function(e){return console.log(e)}))};return Object(f.jsx)(S.a,{children:e.movies.map((function(t,a){var n=-1!==s.findIndex((function(e){return e.imdbID===t.imdbID}));return Object(f.jsx)(z,{getData:u,isInList:n,movie:t,showButton:o,turnOffCommenting:e.turnOffCommenting},a)}))})},_=function(){var e=Object(n.useState)([{Title:"Star Wars: Episode IV - A New Hope",Year:"1977",imdbID:"tt0076759",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{Title:"Star Wars: Episode V - The Empire Strikes Back",Year:"1980",imdbID:"tt0080684",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{Title:"Star Wars: Episode VI - Return of the Jedi",Year:"1983",imdbID:"tt0086190",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"}]),t=Object(k.a)(e,2),a=t[0];t[1];return Object(f.jsx)("div",{children:Object(f.jsx)(E,{movies:a})})},q=a(40),L=a.n(q),V=a(60),F=function(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(k.a)(c,2),o=i[0],l=i[1],u=function(){var e=Object(V.a)(L.a.mark((function e(){var t,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,I.a.get("/movie");case 3:t=e.sent,a=t.data,r(a.data.movies),l(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()}),[]),o?Object(f.jsx)(D,{}):Object(f.jsx)(E,{movies:s,getMovies:u,isAuth:e.isAuth})},Y=h.a.Content,X=h.a.Sider;n.Component;a(226);var B=a(172),R=(a(301),a(169)),Z=(a(157),a(39)),G=(a(302),a(140)),U=G.a.Option,W=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.onClickSubmit=Object(V.a)(L.a.mark((function e(){var t,a,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.setState({errors:{}}),e.next=4,I.a.post("/signup",Object(O.a)({},n.state));case 4:t=e.sent,a=t.data,console.log(a),s=a.data.token,I.a.defaults.headers.common.Authorization=s,localStorage.setItem("token",s),n.props.setAuth(),n.setState({visible:!1}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),n.setState({errors:e.t0.response.data.errors});case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),n.state={visible:!1,name:"",mobile:"",email:"",dob:"",gender:"",address:"",password:"",confirmPassword:"",errors:{}},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(i.a,{style:{float:"right",margin:"10px",color:"white"},type:"primary",onClick:this.showDrawer,children:"Register"}),Object(f.jsxs)(B.a,{title:"Create a new account",width:"100%",onClose:this.onClose,visible:this.state.visible,bodyStyle:{paddingBottom:80},footer:Object(f.jsxs)("div",{style:{textAlign:"right"},children:[Object(f.jsx)(i.a,{onClick:this.onClose,style:{marginRight:8},children:"Cancel"}),Object(f.jsx)(i.a,{onClick:this.onClickSubmit,type:"primary",children:"Submit"})]}),children:[Object(f.jsxs)(Z.a,{layout:"vertical",hideRequiredMark:!0,children:[Object(f.jsxs)(S.a,{gutter:16,children:[Object(f.jsx)(A.a,{span:12,children:Object(f.jsx)(Z.a.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Please enter user name"}],children:Object(f.jsx)(M.a,{value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},placeholder:"Please enter user name"})})}),Object(f.jsx)(A.a,{span:12,children:Object(f.jsx)(Z.a.Item,{name:"Date of Birth",label:"Date of Birth",rules:[{required:!0,message:"Please enter user name"}],children:Object(f.jsx)(R.a,{style:{width:"100%"},getPopupContainer:function(e){return e.parentElement},value:this.state.dob,onChange:function(t){return e.setState({dob:t.toISOString()})}})})})]}),Object(f.jsxs)(S.a,{gutter:16,children:[Object(f.jsx)(A.a,{span:12,children:Object(f.jsx)(Z.a.Item,{name:"Gender",label:"Gender",rules:[{required:!0,message:"Please select an owner"}],children:Object(f.jsxs)(G.a,{placeholder:"Please select gender",value:this.state.gender,onChange:function(t){return e.setState({gender:t.valueOf()})},children:[Object(f.jsx)(U,{value:"Male",children:"Male"}),Object(f.jsx)(U,{value:"Female",children:"Female"})]})})}),Object(f.jsx)(A.a,{span:12,children:Object(f.jsx)(Z.a.Item,{name:"Address",label:"Address",rules:[{required:!0,message:"Please enter your address"}],children:Object(f.jsx)(M.a,{placeholder:"Please enter your address",value:this.state.address,onChange:function(t){return e.setState({address:t.target.value})}})})})]}),Object(f.jsxs)(S.a,{gutter:16,children:[Object(f.jsx)(A.a,{span:12,children:Object(f.jsx)(Z.a.Item,{name:"Eamil",label:"Email",rules:[{required:!0,message:"Please enter your email address"}],children:Object(f.jsx)(M.a,{placeholder:"Please enter your email address",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})})}),Object(f.jsx)(A.a,{span:12,children:Object(f.jsx)(Z.a.Item,{name:"Mobile",label:"Mobile",rules:[{required:!0,message:"Please enter your phone number"}],children:Object(f.jsx)(M.a,{placeholder:"Please enter your phone number",value:this.state.mobile,onChange:function(t){return e.setState({mobile:t.target.value})}})})})]}),Object(f.jsxs)(S.a,{gutter:16,children:[Object(f.jsx)(A.a,{span:12,children:Object(f.jsx)(Z.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please enter your password"}],children:Object(f.jsx)(M.a.Password,{placeholder:"Please enter your password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})})}),Object(f.jsx)(A.a,{span:12,children:Object(f.jsx)(Z.a.Item,{name:"confirm-password",label:"confirmPassword",rules:[{required:!0,message:"Please re-enter your password"}],children:Object(f.jsx)(M.a.Password,{placeholder:"Please re-enter your password",value:this.state.confirmPassword,onChange:function(t){return e.setState({confirmPassword:t.target.value})}})})})]})]}),this.state.errors&&Object(f.jsx)("ul",{style:{color:"red"},children:Object.values(this.state.errors).map((function(e){return Object(f.jsx)("li",{children:e},e)}))})]})]})}}]),a}(n.Component),Q=(a(298),a(173));function H(e){var t=Object(n.useState)(""),a=Object(k.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)(""),o=Object(k.a)(c,2),l=o[0],u=o[1],j=Object(n.useState)(!1),d=Object(k.a)(j,2),h=d[0],b=d[1],m=function(){var t=Object(V.a)(L.a.mark((function t(){var a,n,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!1),t.prev=1,t.next=4,I.a.post("/login",{email:s,password:l});case 4:a=t.sent,n=a.data,r=n.data.token,I.a.defaults.headers.common.Authorization=r,localStorage.setItem("token",r),e.setAuth(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),b(!0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}(),p={wrapperCol:{offset:3,span:16}};return Object(f.jsxs)("div",{style:{marginTop:"10%"},children:[h&&Object(f.jsx)("h3",{style:{color:"red"},children:"In valid email and password!"}),Object(f.jsxs)(Z.a,Object(O.a)(Object(O.a)({},{labelCol:{span:4},wrapperCol:{span:16}}),{},{name:"basic",initialValues:{remember:!0},children:[Object(f.jsx)(Z.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(f.jsx)(M.a,{value:s,onChange:function(e){return r(e.target.value)}})}),Object(f.jsx)(Z.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(f.jsx)(M.a.Password,{value:l,onChange:function(e){return u(e.target.value)}})}),Object(f.jsx)(Z.a.Item,Object(O.a)(Object(O.a)({},p),{},{name:"remember",valuePropName:"checked",children:Object(f.jsx)(Q.a,{children:"Remember me"})})),Object(f.jsx)(Z.a.Item,Object(O.a)(Object(O.a)({},p),{},{children:Object(f.jsx)(i.a,{onClick:m,type:"primary",htmlType:"submit",children:"Submit"})}))]}))]})}var J=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).login=Object(V.a)(L.a.mark((function e(){var t,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("");case 3:t=e.sent,a=t.data,console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.state={email:"",password:""},n}return Object(u.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"login-home",children:Object(f.jsx)("center",{children:Object(f.jsx)(H,{setAuth:this.props.setAuth})})})}}]),a}(n.Component),K=function(){var e=Object(n.useState)(!0),t=Object(k.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)([]),c=Object(k.a)(r,2),i=c[0],o=c[1],l=function(){var e=Object(V.a)(L.a.mark((function e(){var t,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://www.omdbapi.com/?s=harry potter&apikey=ebe923f6",e.next=3,fetch("http://www.omdbapi.com/?s=harry potter&apikey=ebe923f6");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),o(a.Search),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),a?Object(f.jsx)(D,{}):Object(f.jsx)(E,{turnOffCommenting:!0,movies:i,getMovies:l})},$=(h.a.Content,h.a.Sider,function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(f.jsx)(K,{})}}]),a}(n.Component)),ee=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).removeItem=function(e){I.a.delete("/favorite/"+e._id).then((function(e){e.data;return n.getData()})).catch((function(e){return console.log(e)}))},n.getData=function(){I.a.get("/favorite").then((function(e){var t=e.data;return n.setState({movies:t.data.movies})})).catch((function(e){return console.log(e)}))},n.state={movies:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(f.jsx)(E,{movies:this.state.movies,getMovies:this.getData,isAuth:this.props.isAuth})}}]),a}(n.Component),te=h.a.Header,ae=h.a.Content;h.a.Footer;I.a.defaults.baseURL="http://localhost:5000";var ne=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSetIsAuth=function(){n.setState({isAuth:!0})},n.handleUnsetIsAuth=function(){n.setState({isAuth:!1})},n.onLogout=function(){n.setState({isAuth:!1}),delete I.a.defaults.headers.common.Authorization,localStorage.removeItem("token")},n.state={isAuth:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");e?(this.setState({isAuth:!0}),I.a.defaults.headers.common.Authorization=e):this.setState({isAuth:!1})}},{key:"render",value:function(){return Object(f.jsx)(b.a,{children:Object(f.jsxs)(h.a,{className:"layout",children:[Object(f.jsxs)(te,{style:{backgroundColor:"#202020"},children:[Object(f.jsx)("div",{className:"logo"}),Object(f.jsxs)(o.a,{style:{backgroundColor:"#202020"},theme:"dark",mode:"horizontal",defaultSelectedKeys:[window.location.hash.split("/")[1]],children:[Object(f.jsx)(o.a.Item,{style:{backgroundColor:"#202020"},children:Object(f.jsx)(b.b,{to:"/home",children:"Home"})},"home"),Object(f.jsx)(o.a.Item,{style:{backgroundColor:"#202020"},children:Object(f.jsx)(b.b,{to:"/movie",children:"Movie"})},"movie"),Object(f.jsx)(o.a.Item,{style:{backgroundColor:"#202020"},children:Object(f.jsx)(b.b,{to:"/series/new/1",children:"Series"})},"series"),this.state.isAuth&&Object(f.jsx)(o.a.Item,{style:{backgroundColor:"#202020"},children:Object(f.jsx)(b.b,{to:"/watch-list",children:"Watch List"})},"about"),this.state.isAuth?Object(f.jsx)(i.a,{type:"primary",onClick:this.onLogout,style:{float:"right",marginTop:"10px",color:"white"},children:"Logout"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.b,{to:"/login",children:Object(f.jsx)(i.a,{type:"primary",style:{float:"right",marginTop:"10px",color:"white"},children:"Login"})}),Object(f.jsx)(W,{setAuth:this.handleSetIsAuth})]})]})]}),Object(f.jsx)(ae,{style:{padding:"0 50px",backgroundColor:"white",width:"100%"},children:Object(f.jsx)("div",{className:"site-layout-content",children:Object(f.jsxs)(m.d,{children:[Object(f.jsx)(m.b,{path:"/home",component:w}),this.state.isAuth?Object(f.jsx)(m.b,{path:"/watch-list",children:Object(f.jsx)(ee,{isAuth:this.state.isAuth})}):Object(f.jsx)(m.b,{path:"/login",children:Object(f.jsx)(J,{setAuth:this.handleSetIsAuth})}),Object(f.jsx)(m.b,{path:"/movie",children:Object(f.jsx)(F,{isAuth:this.state.isAuth})}),Object(f.jsx)(m.b,{path:"/series",component:$}),Object(f.jsx)(m.a,{to:"/home"})]})})})]})})}}]),a}(n.Component),se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,305)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(ne,{})}),document.getElementById("root")),se()}},[[300,1,2]]]);
//# sourceMappingURL=main.60e3e04d.chunk.js.map