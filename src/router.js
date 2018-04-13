/*
 * @Author: xianminghui
 * @Date:   2017-12-20 17:50:39
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-21 18:02:02
 */
import React from 'react';
import {
	Router,
	Route,
	IndexRoute,
	hashHistory
} from 'react-router';
import App from './containers/App';
import Index from './containers/Index';
import Article from './containers/Article';
import Handlist from './containers/Handlist';
class routes extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={App}>
					<IndexRoute component={Index}/>
					<Route path='/arcitle' component={Article}></Route>
					<Route path='/handlist' component={Handlist}></Route>
				</Route>	
			</Router>

		)
	}
}
export default routes;