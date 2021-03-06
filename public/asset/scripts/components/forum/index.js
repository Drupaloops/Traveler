import React, { Component } from 'react';
var $ = require('jquery');

class CommentList extends Component {
	constructor(props) {
		super(props);
	}
	componentWillReceiveProps() {

	}
	render() {
		function isArray(obj) {
			return Object.prototype.toString.call(obj) === '[object Array]';
		}
		if (isArray(this.props.data)) {
			var data = this.props.data;
		} else {
			var data = this.props.data.data;
		}
		var commentNodes = data.map(function(comment) {
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
}

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {author: '', text: ''};
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleAuthorChange(e) {
		this.setState({author: e.target.value});
	}
	handleTextChange(e) {
		this.setState({text: e.target.value});
	}
	handleSubmit(e) {
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if (!text || !author) {
			return;
		}
		// TODO: send request to the server
		this.props.onCommentSubmit({author: author, text: text});
		this.setState({author: '', text: ''});
	}
	render() {
		var md = new Remarkable();
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Your name"
					value={this.state.author}
					onChange={this.handleAuthorChange}
				/>
				<input
					type="text"
					placeholder="Say something..."
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<input type="submit" value="Post" />
			</form>
		);
	}
}
class Comment extends Component {
	constructor(props) {
		super(props);
	}
	rawMarkup() {
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return { __html: rawMarkup };
	}
	render() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">{this.props.author}</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
}

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{id: 1, author: "oops", text: "This is one comment"}]
		};
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

	}
	loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}
	handleCommentSubmit(comment) {
		// TODO: submit to the server and refresh the list
		var comments = this.state.data.data;
		// Optimistically set an id on the new comment. It will be replaced by an
		// id generated by the server. In a production application you would likely
		// not use Date.now() for this and would have a more robust system in place.
		comment.id = Date.now();
		var newComments = comments.concat([comment]);
		this.setState({data: newComments});
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function(data) {
				this.setState({});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}
	componentDidMount() {
		this.loadCommentsFromServer();
//            setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}
	render() {
		return (
			<div className="CommentBox">
				<h1>Oops</h1>
				<CommentList  data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
}
CommentBox.defaultProps = {
	data: [
		{id: 1, author: "oops", text: "This is one comment"}
	]
}

export default CommentBox;