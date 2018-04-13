/*
 * @Author: xianminghui
 * @Date:   2017-12-21 10:04:13
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-21 10:05:04
 */
import React from 'react';
import {
	connect
} from 'react-redux';
let width = document.documentElement.clientWidth;
//在这里面主要是需要一个登陆的状态贯穿全局
class App extends React.Component {
	componentWillMount() {}
	render() {
		let {
			state,
		} = this.props

		return (
			<div style={{width:'100%'}}>{this.props.children}</div>
		)
	}
}

function select(state) {
	return {
		state: state
	}
}
export default connect(select)(App)