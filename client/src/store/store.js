import React, { createContext, useContext, useReducer } from 'react';
import { LOGIN, LOGOUT, SET_USER, UNSET_USER, SHOW_ADD, INTEREST_INFO, SET_USER_NAME } from './actions';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
      return {
        ...state,
        loading: true,
      };

    case SET_USER:
      return {
        ...state,
        user: action.user,
        loggedInAs: {
          msg: action.msg,
          isLoggedOn: true,
        },
        loading: false
      };

    case SET_USER_NAME:
      return {
        ...state, 
        user_name: action.user_name
      }

    case UNSET_USER:
      return {
        ...state,
        user: null,
        loading: false,
      };

    case SHOW_ADD:
      return {
        ...state,
        showAdd: action.showAdd,
      };

    case INTEREST_INFO:
      return {
        ...state,
        interestItem: action.interestItem,
      }

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    user_name: null,
    loading: false,
    loggedInAs: {
      isLoggedOn: false,
      msg: 'not logged on'
    },
    showAdd: false,
    interestItem: {
      name: '',
        description: '',
        price: '',
        imgUrl: '',
        itemId: '',
        interest: '',
    }
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
