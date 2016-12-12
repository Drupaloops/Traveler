import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {Provider} from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import rootReducer from './reducers/index';
import rootRoute from './routers/index';

const rootStore=createStore(rootReducer);

ReactDOM.render(
	<Provider store={rootStore}>
		<Router
			history={hashHistory}
			routes={rootRoute} />
	</Provider>,
	document.getElementById('content')
)
