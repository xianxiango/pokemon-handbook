const ArticleReducers = (state = {
    aid:'',
    pmlist:''
}, action) => {
    let newState
    switch(action.type){
        case 'SUCCESS_PMARTICLE':
            state.pmlist = action.pmlist;
            newState = Object.assign({},state)
            return newState
        case 'SUCCESS_PMAID':
            // state = {};
            state.aid = action.aid;
            newState = Object.assign({},state)
            return newState
        default:
            return state
    }
}

export default ArticleReducers;
