import React, { createContext } from 'react'

export const Context = createContext();

export const UserContext =(children)=>{
    const user ={name: "Mounishwaran",phn:"8489524091"}
    return(
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}
