const HankListReducers = (state = {
    sid: 'false',
    pmlist:''
}, action) => {
    let newState
    switch(action.type){
        case 'SUCCESS_HANDLIST':
            // state = {};
            state.pmlist = action.pmlist;
            newState = Object.assign({},state)
            return newState
        case 'SUCCESS_HANDLISTTYPE':
            state.sid = action.sid;
            newState = Object.assign({},state)
            return newState
        default:
            return state
    }
}

export default HankListReducers;
