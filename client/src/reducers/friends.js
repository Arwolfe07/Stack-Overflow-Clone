const friendReducer = (states = [], action) => {
    switch (action.type) {
        case 'FETCH_FRIENDS':
            return action.payload;
        default:
            return states;
    }
}

export default friendReducer;