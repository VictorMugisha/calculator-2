import { useResultContext } from "../context/useResultContext"
import { useScreenContext } from "../context/useScreenContext"

export default function Screen() {
    const { currentScreenValue } = useScreenContext()
    const { result } = useResultContext()
    return (
        <div
            className="h-44 lg:h-48 shadow-md w-full flex rounded-3xl py-5 px-4 flex-col justify-between items-end"
        >
            <div
                className="relative w-full font-semibold text-5xl flex items-center justify-end flex-wrap break-words overflow-hidden"
            >
                <span className="truncate">{currentScreenValue}</span> {/* 18 */}
            </div>

            <div
                className="text-3xl text-blue-600 font-semibold"
            >
                {result}
            </div>
        </div>
    )
}
