/*
 * @Author: xianminghui
 * @Date:   2017-12-21 09:44:15
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-22 10:45:14
 */
import {
	List
} from 'antd-mobile';
import React from 'react';
import {
	connect
} from 'react-redux';
import actions from '../actions/actions';
import Topic from './Topic';
// import Handbook from './Handbook';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			position: 'left'
		}
	}
	onOpenChange(...args) {
		console.log(1)
		this.setState({
			open: !this.state.open
		});
	}
	render() {

		let {
			state,
			dispatch
		  } = this.props

		return (
			<div>
				<Topic actions = {actions}/>	    
				
			</div>

		)

	}
}

function indexSelect(state) {
	return {
		state: state
	}
}

export default connect(indexSelect)(Index);