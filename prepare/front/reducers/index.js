import { HYDRATE } from 'next-redux-wrapper';
const initialState = {
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
    type: 'LOG_OUT',
  };
};

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case 'LOG_IN': {
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          loginData: action.data,
        },
      };
    }
    case 'LOG_OUT': {
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          loginData: null,
        },
      };
    }
    case 'SIGN_UP': {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default rootReducers;
