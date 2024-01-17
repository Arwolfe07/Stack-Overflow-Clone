const verifyUserReducer = (states = [], action) => {
    switch (action.type) {
        case 'FETCH_OTP':
            return action.payload;
        
        default:
            return states;
    }
}

export default verifyUserReducer;