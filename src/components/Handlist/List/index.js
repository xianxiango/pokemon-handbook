/*
 * @Author: xianminghui
 * @Date:   2017-12-22 10:47:34
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-22 10:49:32
 */

import React from 'react';
import {
	connect
} from 'react-redux';
import {
	List,
	ActivityIndicator
} from 'antd-mobile';
import {
	Link
} from 'react-router';
require('./index.less')

const Item = List.Item;
const Brief = Item.Brief;
class HandList extends React.Component {
	constructor(...arg) {
		super(...arg)
		
	}

	gotoarticle(aid){
		let {
			actions,
			dispatch,
		} = this.props;
		dispatch(actions.request_pmaid(aid))
	}
	render() {
		let {
			state
		} = this.props
		let pmlistdata = [];
		let pmhandboxname = "";
		if(state.Handlist.pmlist){
			pmlistdata = state.Handlist.pmlist.data.message[0].pm;
			pmhandboxname  = state.Handlist.sid;
		}

		let _this = this;

		
		return (
			<div>
				<List renderHeader={()=>`${state.Handlist.sid.slice(2)}图鉴`} className="my-context">
					{
						pmlistdata.length!=0
						?
						pmlistdata.map(function(index){
							return(
								<Link to={`/arcitle`} key={index.allPmId}>
										<Item
											thumb={`/images/pokemon${index.allPmId.slice(1)}.png`}
											arrow="horizontal"
											onClick={() => {}}
											multipleLine
											onClick={_this.gotoarticle.bind(_this,index.allPmId)}
										>
											
												{index.pmNameCN} {index.pmNameJA} {index.pmNameEN}<Brief>({index.allPmId})</Brief>
											
										</Item>
								</Link>
							)
						})
						:
						<div className="activityIndicator">
						<ActivityIndicator size="large" />
						</div>
					}
						
						
					</List>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		state: state
	}
}
export default connect(mapStateToProps)(HandList)