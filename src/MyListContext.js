import React, { createContext, useContext, useState } from 'react';


const MyListContext = createContext();

export function MyListProvider({ children }) {
    const [myList, setMyList] = useState([]); // Your array goes here

    return (
        <MyListContext.Provider value={{ myList, setMyList }}>
            {children}
        </MyListContext.Provider>
    );
}

export function useMyList() {
    return useContext(MyListContext);
}