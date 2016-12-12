import React from 'react'
import { connect } from 'react-redux'
import { SIGNIN } from '../../actions'

import inlineStyle from './index.less'

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {mobileNo: ''};
		this.handleNoChange = this.handleNoChange.bind(this)
		this.handlePassChange = this.handlePassChange.bind(this)
		this.submitHandler = this.submitHandler.bind(this)
	}
	handleNoChange (event) {
		this.setState({
			mobileNo: event.target.value
		})
	}
	handlePassChange (event) {
		this.setState({
			password: event.target.value
		})
	}
	submitHandler () {
		// dispatch({
		// 	type: SIGNIN,
		// 	mobileNo: this.state.mobileNo,
		// 	password: this.state.password
		// })
		let data = {
			mobileNo: this.state.mobileNo,
			password: this.state.password,
		}
		$.ajax({
			url: '/account/signin',
			data: data,
			type: 'POST',
			dataType: 'json',
			success: function(data) {
				console.log("signin success")
				alert('welcome to onTravel,' +  data.mobileNo + '!')
			},
			error: function() {
				console.error("signin error");
			}
		});
	}
	render() {
		return (
			<div className="signin_container">
				<h1 className="signin_title">Welcome to onTravel</h1>
				<form onSubmit={this.submitHandler}>
					<input type="number" className="" value={this.state.mobileNo} onChange={this.handleNoChange} placeholder="手机号"/>
					<input type="password" value={this.state.password} onChange={this.handlePassChange} placeholder="密码"/>
					<button type="submit">登陆</button>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		Signin: () => {
			console.log("oops")
			dispatch(signin())
		}
	}
}

export default connect(mapDispatchToProps)(Signin);