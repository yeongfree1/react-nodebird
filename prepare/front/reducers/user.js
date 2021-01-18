export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: [],
};

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      return {
        ...state,
        isLoggedIn: true,
        loginData: action.data,
      };
    }
    case 'LOG_OUT': {
      return {
        ...state,
        isLoggedIn: false,
        loginData: null,
      };
    }
    case 'SIGN_UP': {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
