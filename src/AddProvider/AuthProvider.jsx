import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

import { createContext } from 'react'
import auth from '../Firebase/Firebase_init'
import { signInWithEmailAndPassword } from 'firebase/auth/cordova'
export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const[user , setUser] = useState(null) 
    const [loading, setLoading] = useState(true)

    const creatUser = (email,passWord)=>{
        setLoading (true)
        return createUserWithEmailAndPassword(auth,email,passWord)
    }

    const loginuser = (email,passWord)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,passWord)
    }

    useEffect(()=>{
        const Unsubscribed  = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
          setLoading(false)
        })
          return ()=>[
            Unsubscribed()
          ]
      },[])

   const  useInfo ={
    loading,
    user,
    setUser,
    creatUser,
    loginuser

   }
  return (
   <AuthContext.Provider value={useInfo}>
    {children}
   </AuthContext.Provider>
  )
}
