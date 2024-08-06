import { createContext, useState } from "react"

export interface ScreenContextType {
  currentScreenValue: string;
  setCurrentScreenValue: React.Dispatch<React.SetStateAction<string>>;
}

export const ScreenContext = createContext<ScreenContextType | null>(null)

export default function ScreenContextProvider({ children }: { children: React.ReactNode }) {
  const [currentScreenValue, setCurrentScreenValue] = useState<string>("")
  return (
    <ScreenContext.Provider value={{ currentScreenValue, setCurrentScreenValue }}>
      {children}
    </ScreenContext.Provider>
  )
}
