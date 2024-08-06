import { useContext } from "react";
import { ScreenCacheContext } from "./ScreenCacheProvider";


export function useScreenCache() {
    const screenCacheContext = useContext(ScreenCacheContext)

    if (screenCacheContext === null) {
        throw new Error("Screen Cache Context is null")
    }

    return screenCacheContext
}