/*
 * @Author: xianminghui
 * @Date:   2017-12-22 10:38:37
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-22 11:07:26
 */

import React from 'react';
import {
	connect
} from 'react-redux';

import {
	Grid,
	ActivityIndicator
} from 'antd-mobile';
import {
	Link
} from 'react-router';
// import actions from '../actions/actions';



class Handbook extends React.Component {
	constructor(...arg) {
		super(...arg);
	}
	componentDidMount() {
		let {
			actions,
			dispatch,
			state
		} = this.props
		dispatch(actions.request_pmlist())
	}
	gotohandbox(name){
		let {
			actions,
			dispatch,
		} = this.props;
		dispatch(actions.request_handboxpmlisttype(name))
		dispatch(actions.request_handboxpmlist(name));
	}
	render() {
		let {
			state
		} = this.props
		let data =[];
		let pmlist = state.Handbook.pmlist
		if(pmlist){
			pmlist.forEach((item, index) => {
				let URL= '/images/handbook'+index+'.png';
				data.push({
					icon: URL,
					text: item.sid.slice(2),
					handbookname: item.sid
				})
			});
		}
		

		return (
			<div>
			{
				data.length!=0
				?
				<div>
					<Grid 
						columnNum={3} 
						data={data} 
						renderItem={dataItem => (
							<Link to={`/handlist`}>
								<div className="am-grid-item-inner-content column-num-3" onClick={this.gotohandbox.bind(this,dataItem.handbookname)}>
									<img className="am-grid-icon" src={dataItem.icon} />
									<div className="am-grid-text">{dataItem.text}</div>
								</div>
							</Link>
						)}
						
					/>
				</div>
				:
				<div className="activityIndicator">
					<ActivityIndicator size="large" />
				</div>
			}
			</div>

		)
	}
}

function HandbookList(state) {
	// console.log(state)
	return {
		state: state
	}
}

export default connect(HandbookList)(Handbook)