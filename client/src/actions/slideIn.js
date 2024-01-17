export const SLIDE_IN = 'SLIDE_IN';
export const SLIDE_OUT = 'SLIDE_OUT';

// action creators
export const slideIn = () => {
  return { type: SLIDE_IN };
};

export const slideOut = () => {
  return { type: SLIDE_OUT };
};