const initialState = {
    slideIn: false,
  };
  
  const slideInReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SLIDE_IN':
        return {
          ...state,
          slideIn: true,
        };
      case 'SLIDE_OUT':
        return {
          ...state,
          slideIn: false,
        };
      default:
        return state;
    }
  };
  
  export default slideInReducer;
  