/*
 * @Author: xianminghui
 * @Date:   2017-12-20 17:52:10
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2017-12-21 09:22:25
 */

import {
	combineReducers
} from 'redux';
import Handbook from './Handbook'
import Handlist from './Handlist'
import Article from './Article'

const InitReducers = combineReducers({
	Handbook,
	Handlist,
	Article
});
export default InitReducers;