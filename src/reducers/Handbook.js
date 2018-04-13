const HankBookReducers = (state = {
    success: false
}, action) => {
    let newState
    switch(action.type){
        case 'SUCCESS_HANDBOOK':
            state = {};
            state.pmlist = action.pmlist;
            newState = Object.assign({},state)
            return newState
        default:
            return state
    }
}

export default HankBookReducers;
