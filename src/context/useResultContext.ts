import { useContext } from "react";
import { ResultContext } from "./ResultContextProvider";

export function useResultContext() {
    const result = useContext(ResultContext)

    if (result === null) {
        throw new Error("Result Context is null")
    }

    return result
}