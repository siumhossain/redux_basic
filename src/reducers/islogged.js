const isloggedReducer = (state=false,action) => {
    switch (action.type){
        case 'LOGED':
            return !state
        default:
            return state
    }
}

export default isloggedReducer;