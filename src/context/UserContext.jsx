import { createContext,useEffect,useState } from "react";
import axios from 'axios'

export const UserContext=createContext({})

export function UserContextProvider({children}){

    const [user,setUser]=useState(null)

    useEffect(()=>{
       try{
        if(!user){
            
          axios.get('https://blogserver-bskv.onrender.com/api/auth/profile')
          .then(({data})=>{
              setUser(data)
          })
      }
       }catch(err){

       }

    },[])


    return (
        <UserContext.Provider value={{user,setUser}}>
         {children}
        </UserContext.Provider>
        
    )
}
