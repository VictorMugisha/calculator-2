

import { ScreenContext, ScreenContextType } from "./screenContextProvider";
import { useContext } from "react";

export function useScreenContext(): ScreenContextType {
    const context = useContext(ScreenContext)

    if(context === null) {
        throw new Error ("Screen context is null")
    }

    return context
}