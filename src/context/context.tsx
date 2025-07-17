import { useState, createContext, useContext } from 'react'

interface LanContextType {
  lan: string
  setLan: React.Dispatch<React.SetStateAction<string>>
}

const defaultValue: LanContextType = {
  lan: 'en',
  setLan: () => {}
}

export const Context = createContext<LanContextType>(defaultValue)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lan, setLan] = useState<string>('en')

  return <Context.Provider value={{ lan, setLan }}>{children}</Context.Provider>
}

export const useLan = () => useContext(Context)
