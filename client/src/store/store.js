import React, { createContext, useContext, useReducer } from 'react';
import { LOGIN, LOGOUT, SET_USER, UNSET_USER, SHOW_ADD, SET_ITEM_ARRAY } from './actions';

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

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    loading: false,
    loggedInAs: {
      isLoggedOn: false,
      msg: 'not logged on'
    },
    showAdd: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
