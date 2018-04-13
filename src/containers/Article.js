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
import Main from '../components/Article/Main/Main';
import Game from '../components/Article/Game/Game';
import Skill from '../components/Article/Skill/Skill';

class Article extends React.Component {
	constructor(...arg) {
		super(...arg);
	}
	
	componentDidMount() {
		let {
			// actions,
			dispatch,
			state
		} = this.props
		dispatch(actions.request_pmarticleinfo(state.Article.aid))
	}

	
	
	render() {
		let {
			state
		} = this.props
		let data = "",
			skill = "",
			main = "",
			megamain = "",
			game = "",
			name = "",
			propertymain = '',
			propertysecondary = '';
		if(state.Article.pmlist){
			data = state.Article.pmlist.data.message[0];
			skill = data.skill,
			main = data.main,
			megamain = data.megaMain,
			game = data.game;
			name = data.main.name;
			propertymain = main.property[0];
			propertysecondary = main.property[1];
			if(main.property[1] == ''){propertysecondary = main.property[0]};
			propertymain = turntype(propertymain);
			propertysecondary = turntype(propertysecondary);
		}
		function turntype(type){
			let result = '';
			switch(type)
			{
				case '一般':
				result = 'Normal' 
				break;
				case  '火':
				result = 'Fire'
				break;
				case  '虫':
				result = 'Bug'
				break;
				case  '蟲':
				result = 'Bug'
				break;
				case  '水':
				result = 'Water'
				break;
				case  '毒':
				result = 'Poison'
				break;
				case  '电':
				result = 'Electric'
				break;
				case  '電':
				result = 'Electric'
				break;
				case  '飞行':
				result = 'Flying '
				break;
				case  '飛行':
				result = 'Flying '
				break;
				case  '草':
				result = 'Grass'
				break;
				case  '地面':
				result = 'Ground'
				break;
				case  '冰':
				result = 'Ice'
				break;
				case  '格斗':
				result = 'Fighting'
				break;
				case  '格鬥':
				result = 'Fighting'
				break;
				case  '超能力':
				result = 'Psychic'
				break;
				case  '岩石':
				result = 'Rock '
				break;
				case  '幽靈':
				result = 'Ghost'
				break;
				case  '幽灵':
				result = 'Ghost'
				break;
				case  '龙':
				result = 'Dragon'
				break;
				case  '龍':
				result = 'Dragon'
				break;
				case  '恶':
				result = 'Dark'
				break;
				case  '惡':
				result = 'Dark'
				break;
				case  '钢':
				result = 'Steel'
				break;
				case  '鋼':
				result = 'Steel'
				break;
				case  '妖精':
				result = 'Fairy'
				break;
				case  '???':
				result = '???'
				break;
			}
			return result;
		}

		return (
			<div >
				<div style={{position:'fixed',top:0,width:'100%',zIndex:99999}}>
					<NavBar  onLeftClick={() => history.go(-1)} icon={<Icon type="left" />}> 
						{name}
		    			</NavBar>
				</div>
				
				<div className={`mainbox main-${propertymain} second-${propertysecondary}`}>
				{
					state.Article.pmlist.data
					?
					<div>
						<Main main={main} megamain={megamain} className="article-main"/>
						<Skill skill={skill} />
						<Game game={game} property={main.property}/>
					</div>
					:
					<div className="activityIndicator"><ActivityIndicator size="large" /></div>
				}
				</div>
				
			    
			</div>


		)
	}
}


function Articleinfo(state) {
	// console.log(state)
	return {
		state: state
	}
}

export default connect(Articleinfo)(Article)