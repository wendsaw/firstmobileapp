
import { createContext, useEffect, useState } from "react"
import { account } from "../lib/appWrite"
import { ID } from "react-native-appwrite"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password)
      const response = await account.get()
      setUser(response)

    } catch (error) {
      throw Error(error.message)
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password)
      await login(email, password)
    } catch (error) {
      throw Error(error.message)
    }
  }

  async function logout() {
    await account.deleteSession("current")
    setUser(null)
  }

  async function getInitialUserValue() {
    try {
      const res = await account.get()
      setUser(res)
    } catch (error) {
      setUser(null)
    } finally {
      setAuthChecked(true)
    }
  }

  useEffect(() => {
    getInitialUserValue()
  }, [])

  return (
    <UserContext.Provider value={{ 
      user, login, logout, register, authChecked
    }}>
      {children}
    </UserContext.Provider>
  );
}

// Wrap the UserProvider component around the root layout stack
