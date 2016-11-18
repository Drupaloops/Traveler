import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Test from './components/test';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/oops" component={Test}/>
		<Route path="/abs" component={Test}/>
		<Route path="/qq" component={Test}/>
	</Router>
), document.getElementById('content'));