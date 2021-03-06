import React, { createContext, useContext, useReducer } from 'react';

//Preparing Data Layer
export const StateContext = createContext();

//Wrap our app and provide our data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from data layer
export const useStateValue = () => useContext(StateContext);