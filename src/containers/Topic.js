/*
 * @Author: xianminghui
 * @Date:   2017-12-21 14:40:19
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-22 10:53:53
 */
import React from 'react';
import {
	connect
} from 'react-redux';

import Header from '../components/Topic/Header/index';
import Handbook from './Handbook';
class HomePage extends React.Component {
	constructor(...arg) {
		super(...arg)
	}

	render() {
		let {
			state,
			actions,
			dispatch
		  } = this.props
		return (
			<div className="lalala" style={{height:document.documentElement.clientHeight-99}}>
				<Header />
				<Handbook actions = {actions}/>
						
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		state: state
	}
}
export default connect(mapStateToProps)(HomePage)