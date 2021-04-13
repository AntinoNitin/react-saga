const initialState = {
    post: []
}

const posts = (state = initialState, action) => {
    const {type, payload} =  action
    switch(type) {
        case 'SET_POST':
            return {...state, post:payload}
        default:
            return state
    }
}

export default posts