/*
 * @Author: xianminghui
 * @Date:   2018-03-20 09:45:25
 * @Last Modified by:   xianminghui
 * @Last Modified time: 2018-03-20 09:54:45
 */
import { get, post, formPost } from "../util/post";

let actions = {
	request_pmlist: () => async (dispatch,getState) =>{
		let data = await get(`/api/posts`);
		dispatch({
			type: 'SUCCESS_HANDBOOK',
			pmlist: data.data.message
		})
	},
	request_handboxpmlist: (params) => async (dispatch,getState) =>{
		dispatch({
			type: 'SUCCESS_HANDLIST',
			pmlist: ''
		})
		let data = await post("/api/handlist", {handboxname: params});
		dispatch({
			type: 'SUCCESS_HANDLIST',
			pmlist: data
		})
	},
	request_handboxpmlisttype: (sid) => ({
		type: 'SUCCESS_HANDLISTTYPE',
		sid: sid
	}),
	request_pmarticleinfo: (aid) => async (dispatch,getState) =>{
		dispatch({
			type: 'SUCCESS_PMARTICLE',
			pmlist: ''
		})
		let data = await post("/api/pmarticle", {aid: aid});
		dispatch({
			type: 'SUCCESS_PMARTICLE',
			pmlist: data
		})
	},
	request_pmaid: (aid) => ({
		type: 'SUCCESS_PMAID',
		aid: aid
	})
}

export default actions