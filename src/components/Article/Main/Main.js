/*
 * @Author: xianminghui
 * @Date:   2017-12-28 17:24:08
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-28 17:25:49
 */

import React from 'react';
import {
	connect
} from 'react-redux';
import {
	Flex,
	WhiteSpace
} from 'antd-mobile';
require('./Main.less')


class Main extends React.Component {
	constructor(...arg) {
		super(...arg);
	}

	render() {
		let {
			main,
			megamain
		} = this.props
		let aid = "";
		if(main.aid){
			aid = main.aid.slice(1,4);
		}
		if(main){
			return (
				<div className="article-main">
						<Flex>
								<Flex.Item><div className="borderstyle backgroundfff">{main.name}</div></Flex.Item>
								<Flex.Item><div className="borderstyle backgroundfff">#{aid}</div></Flex.Item>
						</Flex>
						<WhiteSpace size="lg" />
						<Flex>
							<div className="boxborder backgroundfff imgbox">
								<img className = "pmimg" src={`/images/pokemon${aid}.png`}/>
							</div>
							
						</Flex>
						<WhiteSpace size="lg" />
						<Flex>
								<Flex.Item>
									<div className="boxborder backgroundstyle propertybox">
										<div>特性</div>
										<div className="boxborder backgroundfff margintop5">{main.property}</div>
									</div>
								</Flex.Item>
								<Flex.Item>
									<div className="boxborder backgroundstyle propertybox">
										<div>分类</div>
										<div className="boxborder backgroundfff margintop5">{main.classify}</div>
									</div>
								</Flex.Item>
							</Flex>
							<WhiteSpace size="lg" />
							<div className="boxborder backgroundstyle propertybox">
								<div>特性</div>
								<Flex>
									<Flex.Item><div className="boxborder backgroundfff margintop5">{main.features.normal.map(function(value){return value})}</div></Flex.Item>
									<Flex.Item><div className="boxborder backgroundfff margintop5">{main.features.special}<div>梦特</div></div></Flex.Item>
								</Flex>
							</div>
							<WhiteSpace size="lg" />
							<div className="boxborder backgroundstyle propertybox">
								<div>100级时经验值</div>
								<div className="boxborder backgroundfff margintop5">{main.exp_max}</div>
							</div>
							<WhiteSpace size="lg" />
							<Flex>
								<Flex.Item>
									<div className="boxborder backgroundstyle propertybox">
										<div>身高</div>
										<div className="boxborder backgroundfff margintop5">{main.height}</div>
									</div>
								</Flex.Item>
								<Flex.Item>
									<div className="boxborder backgroundstyle propertybox">
										<div>体重</div>
										<div className="boxborder backgroundfff margintop5">{main.weight}</div>
									</div>
									
								</Flex.Item>
						</Flex>
						<WhiteSpace size="lg" />
						<Flex>
								<Flex.Item>
									<div className="boxborder backgroundstyle propertybox">
										<div>体型</div>
										<div className="boxborder backgroundfff margintop5">{main.shape}</div>
									</div>
								</Flex.Item>
								<Flex.Item>
									<div className="boxborder backgroundstyle propertybox">
										<div>脚印</div>
										<div className="boxborder backgroundfff margintop5">1</div>
									</div>
								</Flex.Item>
						</Flex>
							<WhiteSpace size="lg" />
							<Flex>
								<Flex.Item>
									<div className="boxborder backgroundstyle propertybox">
										<div>图鉴颜色</div>
										<div className="boxborder backgroundfff margintop5">{main.handBookColor}</div>
									</div>
								</Flex.Item>
								<Flex.Item>
									<div className="boxborder backgroundstyle propertybox">
										<div>捕获率</div>
										<div className="boxborder backgroundfff margintop5">{main.catchRate}</div>
									</div>
								</Flex.Item>
						</Flex>
							<WhiteSpace size="lg" />
							<div className="boxborder backgroundstyle propertybox">
								<div>性别比例</div>
								<div className="boxborder backgroundfff margintop5">{main.sexScale}</div>
							</div>
							<WhiteSpace size="lg" />
							<div className="boxborder backgroundstyle propertybox">
								<div>培育</div>
								<Flex>
									<Flex.Item><div className="boxborder backgroundfff margintop5">{main.Cultivate.population}</div></Flex.Item>
									<Flex.Item><div className="boxborder backgroundfff margintop5">{main.Cultivate.stepNumber}</div></Flex.Item>
								</Flex>
							</div>
							<WhiteSpace size="lg" />
							<div className="boxborder backgroundstyle propertybox">
								<div>取得基础点数</div>
								<Flex>
									{
										main.baseStats.map(function(value, index){
											return (
												<Flex.Item key={`ss${index}`}>
													<div className="boxborder backgroundfff margintop5">{value}</div>
												</Flex.Item>
											)
										})
									}
								</Flex>
								<Flex>
									<Flex.Item><div className="boxborder backgroundfff margintop5">{main.getExp.baseExp}</div></Flex.Item>
									<Flex.Item><div className="boxborder backgroundfff margintop5">{main.getExp.fightExp}</div></Flex.Item>
								</Flex>
							</div>
							<WhiteSpace size="lg" />	
					</div>
					
			)
		}
		else{
			return(<div></div>)
		}
		
	}
}

export default Main;