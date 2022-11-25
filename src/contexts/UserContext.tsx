import { createContext, useContext, useState } from 'react'

type User = {
  id: number
  email: string
}

type UserProviderProps = {
  children: React.ReactNode
}

type UserContextData = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

const UserContext = createContext({} as UserContextData)

// A way to persist the user when refresh the page
const storageUser = JSON.parse(
  localStorage.getItem('user') as string
) as unknown as User

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>(storageUser || ({} as User))

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  return context
}
