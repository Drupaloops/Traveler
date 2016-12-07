import React from 'react';
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {mobileNo: ''};
		this.handleChange = this.handleChange.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}
	handleChange (event) {
		this.setState({
			mobileNo: event.target.value
		})
	}
	submitHandler () {
		let data = {
			mobileNo: this.state.mobileNo,
			password: this.state.password,
		}
		$.ajax({
			url: 'account/login',
			data: data,
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log("login success")
			},
			error: function() {
				console.error("login error");
				router.push({
					pathname: '/users/12',
					query: { modal: true },
					state: { fromDashboard: true }
				})
			}
		});
	}
	render() {
		return (
			<div>
				<h1>Welcome to onTravel</h1>
				<form onSubmit={this.submitHandler}>
					<input type="text" value={this.state.mobileNo} onChange={this.handleChange} placeholder="手机号"/>
					<input type="password" placeholder="密码"/>
					<button type="submit">登陆</button>
				</form>
			</div>
		)
	}
}

export default Login;