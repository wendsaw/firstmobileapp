import { createContext, useEffect, useState } from "react"
import { account } from "../lib/appWrite"
import { ID } from "react-native-appwrite"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authCheck, SetAuthChecked]=useState(false)

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password)
      const response = await account.get()
      setUser(response)

    } catch (error) {
     throw Error(error.message);
     
    }
    finally{

      SetAuthChecked(true)
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password)
      await login(email, password)
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function logout() {

    await account.deleteSessions('current')
    setUser(null)

  }

  async function getInitialUserValue (){

    try {
      const response=await account.get()
      setUser(response)
      
    } catch (error) {
      setUser(null)
    }


  }

 useEffect(()=>{

  getInitialUserValue()

 },[])

  return (
    <UserContext.Provider value={{ 
      user, login, logout, register,authCheck
    }}>
      {children}
    </UserContext.Provider>
  );
}

// Wrap the UserProvider component around the root layout stack