/*
 * @Author: xianminghui
 * @Date:   2017-12-21 16:02:46
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-21 16:33:40
 */

import React from 'react';
import {
	Drawer,
	List,
	NavBar,
	Icon,
} from 'antd-mobile';
import {
	Link
} from 'react-router';
require('./index.less')

class header extends React.Component {
	constructor(...props) {
		super(...props);
		this.state = {
			open: false,
			position: 'left'
		}
	}
	onOpenChange(...args) {
		this.setState({
			open: !this.state.open
		});
	}

	render() {

		const sidebar =
			<div style={{width:document.documentElement.clientWidth/2}}>
				<List>
		         <List.Item key='all'
		            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
		            multipleLine
		          >全国图鉴</List.Item>
		          <List.Item key='all2'
		            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
		            multipleLine
		          >关东图鉴</List.Item>
		    	</List>
			</div>;
		const drawerProps = {
			open: this.state.open,
			position: this.state.position,
			onOpenChange: this.onOpenChange.bind(this),
		};
		return (
			<div>
				<NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange.bind(this)}>pokemon图鉴</NavBar>
		      	<Drawer
		        	className="my-drawer"
		        	style={{height:document.documentElement.clientHeight}}
		        	sidebar={sidebar}
		        	dragHandleStyle={{ display: 'none' }}
		        	contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
		        	{...drawerProps}
		      	>1
	      	  	</Drawer>
			</div>

		)
	}
}

export default header;