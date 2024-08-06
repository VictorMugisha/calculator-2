import { createContext, useState } from "react"

export interface ResultContextType {
    result: string;
    setResult: React.Dispatch<React.SetStateAction<string>>;
}

export const ResultContext = createContext<ResultContextType | null>(null)

export default function ResultContextProvider({ children }: { children: React.ReactNode }) {
    const [result, setResult] = useState<string>('')
    return (
        <ResultContext.Provider value={{ result, setResult }}>
            {children}
        </ResultContext.Provider>
    )
}
