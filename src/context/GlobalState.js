import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  members: [
    { id: 1, name: 'Nempumbuluni Lusani', designation: 'Frontend Dev' }
   
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeMember(id) {
    dispatch({
      type: 'REMOVE_MEMBER',
      payload: id
    });
  }

  function addMember(member) {
    dispatch({
      type: 'ADD_MEMBER',
      payload: member
    });
  }

  function editMember(member) {
    dispatch({
      type: 'EDIT_MEMBER',
      payload: member
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        members: state.members,
        removeMember,
        addMember,
        editMember
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
