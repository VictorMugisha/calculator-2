import { useEffect } from "react";
import Button from "./Button";
import { useScreenContext } from "../context/useScreenContext";

export default function Keyboard() {
    const { setCurrentScreenValue } = useScreenContext()

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
            if (event.key === "Backspace") {
                setCurrentScreenValue(prevValue => {
                    if (prevValue.length > 0) {
                        return prevValue.slice(0, -1)
                    } else {
                        return ''
                    }
                })
                return
            }
            if (!numbers.includes(event.key)) return
            setCurrentScreenValue(prevValue => {
                if (prevValue.length >= 9) return prevValue
                return prevValue + event.key
            })
        }
        window.addEventListener("keydown", handleKeyPress);

        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [setCurrentScreenValue]);

    return (
        <div className="mt-4 w-full border shadow-md p-5 rounded-3xl">
            <div className="grid w-full grid-cols-4 gap-4">
                <Button value="AC" type="reset" />
                <Button value="Regenerate" className="col-span-2 text-green-500 text-lg lg:text-xl" type="regenerate" />
                <Button value="÷" className="text-blue-500" type="operator" />
                {['7', '8', '9'].map(number => (
                    <Button key={number} value={number} type="number" />
                ))}
                <Button value="-" className="text-blue-500 text-5xl" type="operator" />
                {['4', '5', '6'].map(number => (
                    <Button key={number} value={number} type="number" />
                ))}
                <Button value="x" className="text-blue-500 text-5xl" type="operator" />
                {['1', '2', '3'].map(number => (
                    <Button key={number} value={number} type="number" />
                ))}
                <Button value="+" className="text-blue-500 text-5xl" type="operator" />
                {['0', '.', 'back'].map(item => (
                    <Button key={item} value={item} type={item} />
                ))}
                <Button value="=" className="text-blue-500 text-5xl" type="equal" />
            </div>
        </div>
    )
}
