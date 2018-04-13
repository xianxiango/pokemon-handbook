/*
 * @Author: xianminghui
 * @Date:   2017-12-28 17:23:53
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-28 17:32:56
 */

import React from 'react';
import {
	connect
} from 'react-redux';
import {
	Flex,
	WhiteSpace
} from 'antd-mobile'
import { get, post, formPost } from "../../../util/post";

require('./Game.less')

class Game extends React.Component {
	constructor(...arg) {
		super(...arg);
		this.getAid = this.getAid.bind(this);
	}


	async getAid(params){
		let data = await post("/api/pmnamefromaid", {name: params});
		// console.log(data.data.message.pm[0].allPmId);
		if(data.data.message.pm[0].allPmId){
			return data.data.message.pm[0].allPmId
		}

		
		
	}

	render() {
		let {
			game,
			property
		} = this.props
		
		
		if(game&&this.state==null){
			(async ()=>{
				let _this = this;
				let Evolution = [];
				for(let value of game.evolution){
					let evolutionData = value;
					if(value.type==1){
						let img = await _this.getAid(evolutionData.data.name)
						evolutionData.data.img = img
					}
					Evolution.push(evolutionData);
					
				}
				this.setState({
					evolution:Evolution
				})
			})();
			
			
			
		}
		let evolution = this.state;
		if(evolution){
			let _this = this;
			return (
				<div >
						<div className="boxborder backgroundstyle propertybox tablestyle">
							<Flex>
							  <Flex.Item><div className="borderstyle backgroundstyle borderradius0 propertybox overspread">种族值</div></Flex.Item>
							  <Flex.Item>
								  <div className="borderstyle backgroundstyle borderradius0 propertybox">能力值范围</div>
								  <Flex>
								  <Flex.Item><div className="borderstyle backgroundstyle borderradius0 propertybox">50级时</div></Flex.Item>
								  <Flex.Item><div className="borderstyle backgroundstyle borderradius0 propertybox">100级时</div></Flex.Item>
								</Flex>
							  </Flex.Item>
							</Flex>
							<Flex>
							  <Flex.Item>
								  <div className="borderstyle backgroundHp borderradius0 propertybox">HP：{game.STATS.speciesStrength.hp}</div>
								  <div className="borderstyle backgroundAtk borderradius0 propertybox">攻击：{game.STATS.speciesStrength.atk}</div>
								  <div className="borderstyle backgroundDef borderradius0 propertybox">防御：{game.STATS.speciesStrength.def}</div>
								  <div className="borderstyle backgroundSpa borderradius0 propertybox">特攻：{game.STATS.speciesStrength.spa}</div>
								  <div className="borderstyle backgroundSpd borderradius0 propertybox">特防：{game.STATS.speciesStrength.spd}</div>
								  <div className="borderstyle backgroundSpe borderradius0 propertybox">速度：{game.STATS.speciesStrength.spe}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="borderstyle backgroundHp borderradius0 propertybox">{game.STATS.range50.hp}</div>
								  <div className="borderstyle backgroundAtk borderradius0 propertybox">{game.STATS.range50.atk}</div>
								  <div className="borderstyle backgroundDef borderradius0 propertybox">{game.STATS.range50.def}</div>
								  <div className="borderstyle backgroundSpa borderradius0 propertybox">{game.STATS.range50.spa}</div>
								  <div className="borderstyle backgroundSpd borderradius0 propertybox">{game.STATS.range50.spd}</div>
								  <div className="borderstyle backgroundSpe borderradius0 propertybox">{game.STATS.range50.spe}</div>
							  </Flex.Item>
							  <Flex.Item>
							  	<div className="borderstyle backgroundHp borderradius0 propertybox">{game.STATS.range100.hp}</div>
								<div className="borderstyle backgroundAtk borderradius0 propertybox">{game.STATS.range100.atk}</div>
								<div className="borderstyle backgroundDef borderradius0 propertybox">{game.STATS.range100.def}</div>
								<div className="borderstyle backgroundSpa borderradius0 propertybox">{game.STATS.range100.spa}</div>
								<div className="borderstyle backgroundSpd borderradius0 propertybox">{game.STATS.range100.spd}</div>
								<div className="borderstyle backgroundSpe borderradius0 propertybox">{game.STATS.range100.spe}</div>
							  </Flex.Item>
							</Flex>
							<div className="borderstyle backgroundstyle borderradius0 propertybox">总和：{parseInt(game.STATS.speciesStrength.hp)+parseInt(game.STATS.speciesStrength.atk)+parseInt(game.STATS.speciesStrength.def)+parseInt(game.STATS.speciesStrength.spa)+parseInt(game.STATS.speciesStrength.spd)+parseInt(game.STATS.speciesStrength.spe)}</div>
						</div>
						<WhiteSpace size="lg" />
						<div className="boxborder backgroundstyle propertybox tablestyle">
							<div>宝可梦图鉴</div>
							{
								game.handBookExplain.map(function(value, index){
									return(
										<div className="margintop5" key={`handbookexp${index}`}>
											<div className="boxborder backgroundfff borderradius0">{value.generation}</div>
											{
												value.data.map(function(value, index){
													return(
														<Flex key={`shidai${index}`}>
															<Flex.Item>
																<div className="boxborder backgroundfff borderradius0">{value.version}</div>
															</Flex.Item>
															<Flex.Item>
																<div className="boxborder backgroundfff borderradius0">{value.content}</div>
															</Flex.Item>
														</Flex>
													)
												})
											}
											
										</div>
									)
								})
							}
							
						</div>
						<WhiteSpace size="lg" />
						<div className="boxborder backgroundstyle propertybox tablestyle">
							<div>获得方式</div>
							<Flex className="margintop5">
							  <Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox">游戏版本</div></Flex.Item>
							  <Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox">地点</div></Flex.Item>
							  <Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox">方式</div></Flex.Item>
							  <Flex.Item><div className="boxborder backgroundstyle borderradius0 propertybox">备注</div></Flex.Item>
							</Flex>
							{
								game.getWay.map(function(value, index){
									return(
										<Flex key={`getway${index}`}>
											<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.version.map(function(value){return value})}</div></Flex.Item>
											<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.place}</div></Flex.Item>
											<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.way}</div></Flex.Item>
											<Flex.Item><div className="boxborder backgroundfff borderradius0">{value.remark}</div></Flex.Item>
										</Flex>
									)
								})
							}
							
							<div className="margintop5">进化和生蛋只在没有其它直接获得方式时才列出。</div>
							<div className="margintop5">生蛋仅列出在该版本可直接获得的亲代。</div>
							<div className="margintop5">没有列出的游戏版本即需要通过其他游戏版本或外部途径传入。</div>
						</div>
						<WhiteSpace size="lg" />
						<div className="boxborder backgroundstyle propertybox tablestyle">
							<div>属性相性</div>
							<Flex className="margintop5">
							  <Flex.Item>
								  <div className="boxborder backgroundstyle borderradius0 propertybox">{property}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Normal borderradius0 overspread propertybox">一般</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[0]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Fighting borderradius0 overspread propertybox">格斗</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[1]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Flying borderradius0 overspread propertybox">飞行</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[2]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Poison borderradius0 overspread propertybox">毒</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[3]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Ground borderradius0 overspread propertybox">地面</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[4]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Rock borderradius0 overspread propertybox">岩石</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[5]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Bug borderradius0 overspread propertybox">虫</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[6]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Ghost borderradius0 overspread propertybox">幽灵</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[7]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Steel borderradius0 overspread propertybox">钢</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[8]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Fire borderradius0 overspread propertybox">火</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[9]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Water borderradius0 overspread propertybox">水</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[10]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Grass borderradius0 overspread propertybox">草</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[11]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Electric borderradius0 overspread propertybox">电</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[12]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Psychic borderradius0 overspread propertybox">超能</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[13]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Ice borderradius0 overspread propertybox">冰</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[14]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Dragon borderradius0 overspread propertybox">龙</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[15]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Dark borderradius0 overspread propertybox">恶</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[16]}</div>
							  </Flex.Item>
							  <Flex.Item>
								  <div className="boxborder main-Fairy borderradius0 overspread propertybox">妖精</div>
								  <div className="boxborder backgroundfff borderradius0">{game.restrain[17]}</div>
							  </Flex.Item>
							</Flex>
						</div>
						<WhiteSpace size="lg" />
						<div className="boxborder backgroundstyle propertybox tablestyle">
							<div>进化</div>
							<Flex className="margintop5">
								{evolution.evolution.map(function(value, index){
									if(value.type==1){
										return (
											<Flex.Item key={`evolution${index}`}>
												<div><img className="borderstyle backgroundstyle evolutionimg" src={`/images/pokemon${value.data.img.slice(1)}.png`}/></div>
												<div>{value.data.stage}</div>
												<div className="boxborder backgroundstyle propertybox">
													<div>{value.data.name}</div>
													<div>{value.data.property}</div>
												</div>
											</Flex.Item>
										)
											
									}else{
										return(
											<Flex.Item key={`evolution${index}`}>
												{/* <div>糖果</div> */}
												<div>{value.data}</div>
												<div>→</div>
											</Flex.Item>
										)
									}
								})}
							</Flex>
						</div>
				</div>
			)
		}else{
			return(<div></div>)
		}
		
	}
}

export default Game;