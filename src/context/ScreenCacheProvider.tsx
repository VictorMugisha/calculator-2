import { createContext, useState } from "react"


interface ScreenCacheT {
    expression: string;
    result: string
}

export interface ScreenCacheType {
    screenCache: ScreenCacheT;
    setScreenCache: React.Dispatch<React.SetStateAction<ScreenCacheT>>;
}

export const ScreenCacheContext = createContext<ScreenCacheType | null>(null)

export function ScreenCacheProvider({ children }: { children: React.ReactNode }) {
    const [screenCache, setScreenCache] = useState<ScreenCacheT>({ expression: '', result: '' })
    return (
        <ScreenCacheContext.Provider value={{ screenCache, setScreenCache }}>
            {children}
        </ScreenCacheContext.Provider>
    )
}
