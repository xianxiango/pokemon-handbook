/*
 * @Author: xianminghui
 * @Date:   2017-12-28 17:24:23
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2018-03-06 11:06:00
 */


import React from 'react';
import {
	connect
} from 'react-redux';
import {
	Flex,
	WhiteSpace
} from 'antd-mobile'


class Skill extends React.Component {
	constructor(...arg) {
		super(...arg);
	}

	render() {
		let{
			skill
		} = this.props
		if(skill){
			return (
				<div>
					<div className="boxborder backgroundstyle propertybox tablestyle">
						<div>可学会的招式</div>
						<Flex className="margintop5">
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">等级</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">招式</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">属性</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">分类</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">威力</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">命中</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">PP</div></Flex.Item>
						</Flex>
						{
							skill.selfStudy.map(function(value, index){
								return(
									<Flex key = {`selfStudy${index}`}>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.level}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.name}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.type}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.classify}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.power}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.hitRate}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.PP}</div></Flex.Item>
									</Flex>
								)
								
							})
						}
					</div>
					<WhiteSpace size="lg" />
					<div className="boxborder backgroundstyle propertybox tablestyle">
						<div>能使用的招式学习器</div>
						<Flex className="margintop5">
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">招式学习器</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">招式</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">属性</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">分类</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">威力</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">命中</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">PP</div></Flex.Item>
						</Flex>
						{
							skill.CDStudy.map(function(value, index){
								return(
									<Flex key = {`CDStudy${index}`}>
										<Flex.Item>
											<Flex>
												<Flex.Item><div className="boxborder backgroundfff borderradius0">@</div></Flex.Item>
												<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.CDNomber}</div></Flex.Item>
											</Flex>
										</Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.name}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.type}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.classify}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.power}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.hitRate}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.PP}</div></Flex.Item>
									</Flex>
								)
							})
						}
						
					</div>
					<WhiteSpace size="lg" />
					<div className="boxborder backgroundstyle propertybox tablestyle">
						<div>蛋招式</div>
						<Flex className="margintop5">
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">亲代</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">招式</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">属性</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">分类</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">威力</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">命中</div></Flex.Item>
							<Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox overspread">PP</div></Flex.Item>
						</Flex>
						{
							skill.eggStudy.map(function(value, index){
								return(
									<Flex key = {`eggStudy${index}`}>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.parent}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.name}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.type}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.classify}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.power}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.hitRate}</div></Flex.Item>
										<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.PP}</div></Flex.Item>
									</Flex>
								)
							})
						}
						
					</div>
					<WhiteSpace size="lg" />
				</div>
			
			)
		}else{
			return(
				<div></div>
			)
		}
		
	}
}

export default Skill;