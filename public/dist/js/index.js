webpackJsonp([0],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),l=n(1),s=a(l),c=n(30),h=a(c),m=n(163),d=function(t){function e(t){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return u(e,t),i(e,[{key:"componentWillReceiveProps",value:function(){}},{key:"render",value:function(){function t(t){return"[object Array]"===Object.prototype.toString.call(t)}if(t(this.props.data))var e=this.props.data;else var e=this.props.data.data;var n=e.map(function(t){return s.default.createElement(f,{author:t.author,key:t.id},t.text)});return s.default.createElement("div",{className:"commentList"},n)}}]),e}(l.Component),p=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={author:"",text:""},n.handleAuthorChange=n.handleAuthorChange.bind(n),n.handleTextChange=n.handleTextChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n}return u(e,t),i(e,[{key:"handleAuthorChange",value:function(t){this.setState({author:t.target.value})}},{key:"handleTextChange",value:function(t){this.setState({text:t.target.value})}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=this.state.author.trim(),n=this.state.text.trim();n&&e&&(this.props.onCommentSubmit({author:e,text:n}),this.setState({author:"",text:""}))}},{key:"render",value:function(){new Remarkable;return s.default.createElement("form",{className:"commentForm",onSubmit:this.handleSubmit},s.default.createElement("input",{type:"text",placeholder:"Your name",value:this.state.author,onChange:this.handleAuthorChange}),s.default.createElement("input",{type:"text",placeholder:"Say something...",value:this.state.text,onChange:this.handleTextChange}),s.default.createElement("input",{type:"submit",value:"Post"}))}}]),e}(l.Component),f=function(t){function e(t){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return u(e,t),i(e,[{key:"rawMarkup",value:function t(){var e=new Remarkable,t=e.render(this.props.children.toString());return{__html:t}}},{key:"render",value:function(){return s.default.createElement("div",{className:"comment"},s.default.createElement("h2",{className:"commentAuthor"},this.props.author),s.default.createElement("span",{dangerouslySetInnerHTML:this.rawMarkup()}))}}]),e}(l.Component),b=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={data:[{id:1,author:"oops",text:"This is one comment"}]},n.handleCommentSubmit=n.handleCommentSubmit.bind(n),n}return u(e,t),i(e,[{key:"loadCommentsFromServer",value:function(){m.ajax({url:this.props.url,dataType:"json",cache:!1,success:function(t){this.setState({data:t})}.bind(this),error:function(t,e,n){console.error(this.props.url,e,n.toString())}.bind(this)})}},{key:"handleCommentSubmit",value:function(t){var e=this.state.data.data;console.log(e),console.log(t),t.id=Date.now();var n=e.concat([t]);this.setState({data:n}),m.ajax({url:this.props.url,dataType:"json",type:"POST",data:t,success:function(t){this.setState({})}.bind(this),error:function(t,e,n){console.error(this.props.url,e,n.toString())}.bind(this)})}},{key:"componentDidMount",value:function(){this.loadCommentsFromServer()}},{key:"render",value:function(){return s.default.createElement("div",{className:"CommentBox"},s.default.createElement("h1",null,"Oops"),s.default.createElement(d,{data:this.state.data}),s.default.createElement(p,{onCommentSubmit:this.handleCommentSubmit}))}}]),e}(l.Component);b.defaultProps={data:[{id:1,author:"oops",text:"This is one comment"}]},h.default.render(s.default.createElement(b,{url:"/oops",pollInterval:2e3}),document.getElementById("content"))},163:function(t,e){t.exports=window.$}});
//# sourceMappingURL=index.js.map?v=20161110