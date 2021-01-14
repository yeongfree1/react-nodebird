const initialSatat = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPost: [],
  },
};

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const logoutAction = () => {
  return {
    tyoe: 'LOG_OUT',
  };
};

const rootReducer = (state = initialSatat, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        uesr: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case 'LOG_OUT':
      return {
        ...state,
        uesr: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
