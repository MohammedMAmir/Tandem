'use client'
import React, {useContext, useState, useEffect} from 'react'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }){
    const [ curentUser, setCurrentUser ] = useState(null)
    const [ userDataObj, setUserDataObj ] = useState({}) 
    const [ loading, setLoading ] = useState(true)

    const value = {

    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}