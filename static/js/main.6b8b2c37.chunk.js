(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i(17),c=i.n(s),a=i(8),r=i.n(a),o=i(18),d=i(3),l=i(4),u=i(6),m=i(5),j=i(0),b=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(d.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(l.a)(i,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"search-bar ui segment",children:Object(j.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("lable",{children:"Video Search"}),Object(j.jsx)("input",{type:"text",value:this.state.term,onChange:this.onInputChange})]})})})}}]),i}(n.Component),v=i(19),h=i.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResult:5,key:"AIzaSyDcqx0_rDp-DAfff6bBPDqzafIp8wFUEbk"}}),p=(i(44),function(e){var t=e.video,i=e.onVideoSelect;return Object(j.jsxs)("div",{onClick:function(){return i(t)},className:" video-item item",children:[Object(j.jsx)("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"header",children:t.snippet.title})})]})}),O=function(e){var t=e.videos,i=e.onVideoSelect,n=t.map((function(e){return Object(j.jsx)(p,{video:e,onVideoSelect:i},e.id.videoId)}));return Object(j.jsx)("div",{className:"ui relaxed devided list",children:n})};function f(e){var t=e.video;if(!t)return Object(j.jsx)("div",{children:"Loading....."});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"ui embed",children:Object(j.jsx)("iframe",{title:"video player",src:i})}),Object(j.jsxs)("div",{className:"ui segment",children:[Object(j.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(j.jsx)("p",{children:t.snippet.description})]})]})}var x=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(d.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(o.a)(r.a.mark((function t(i){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/search",{params:{q:i}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.onTermSubmit("Buildings")}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"ui container",children:[Object(j.jsx)(b,{onFormSubmit:this.onTermSubmit}),Object(j.jsx)("div",{className:"ui grid",children:Object(j.jsxs)("div",{className:"ui row",children:[Object(j.jsx)("div",{className:"eleven wide column",children:Object(j.jsx)(f,{video:this.state.selectedVideo})}),Object(j.jsx)("div",{className:"five wide column",children:Object(j.jsx)(O,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})})]})})]})}}]),i}(n.Component);c.a.render(Object(j.jsx)(x,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6b8b2c37.chunk.js.map