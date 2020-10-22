import React, { useReducer } from 'react';

//! this function is used to help add in a new resource (img, comments, etc.), just need to create another context file with a reducer, functions that calls with dispatch and return a function that dispatches an action thats going to attempt to modify our state then call createDataContext

export default (reducer, actions, initialState) => {
  //! createContext object helps move data to different components
  const Context = React.createContext();

  //!component that holds state (Below)
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => {return () => {}}}
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }

    return <Context.Provider value={{ state, ...boundActions }}>
      {children}
      </Context.Provider>;
  };
  return { Context, Provider };
};

