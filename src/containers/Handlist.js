/*
 * @Author: xianminghui
 * @Date:   2017-12-21 17:15:42
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-28 17:34:06
 */

import React from 'react';
import {
	connect
} from 'react-redux';
import {
	Flex,
	WhiteSpace,
	NavBar,
	ActivityIndicator,
	Icon
} from 'antd-mobile';
import actions from '../actions/actions';
import Handlist from '../components/Handlist/List/index';

class Handbox extends React.Component {
	constructor(...arg) {
		super(...arg);
	}
	

	render() {
		
		let {
			state,
			dispatch
		} = this.props
		// console.log(state.Handlist);
		return (
			<div>
				<div style={{position:'fixed',top:0,width:'100%',zIndex:99999}}>
					<NavBar  onLeftClick={() => history.go(-1)} icon={<Icon type="left" />}> 
						{state.Handlist.sid.slice(2)}地区
		    			</NavBar>
				</div>
				<Handlist actions = {actions}/>
			    
			</div>


		)
	}
}


function HandList(state) {
	return {
		state: state
	}
}

export default connect(HandList)(Handbox)