const subsReducer = (state= {data: null},action) =>{
    switch(action.type){
        case 'SUBSCRIPTION':
            return action.payload;
        default:
            return state;
    }
}

export default subsReducer;