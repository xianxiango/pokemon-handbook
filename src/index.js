/*
 * @Author: xianminghui
 * @Date:   2017-12-20 17:47:42
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-20 17:50:18
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import reducers from './reducers/index';
import Router from './router';

import thunk from 'redux-thunk';

let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<Router/>
	</Provider>,
	document.getElementById('container')
);