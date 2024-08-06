import { useEffect, useState } from "react";
import { FaBackspace } from "react-icons/fa";

import { useScreenContext } from "../context/useScreenContext";
import { useResultContext } from "../context/useResultContext";

interface ButtonProps {
    className?: string;
    value: string;
    type?: string;
}

interface ScreenCacheType {
    expression: string;
    result: string
}

export default function Button({ className, value, type }: ButtonProps) {
    const { currentScreenValue, setCurrentScreenValue } = useScreenContext()
    const { result, setResult } = useResultContext()

    const [screenCache, setScreenCache] = useState<ScreenCacheType>({ expression: '', result: '' })

    function calculateResult() {
        const lastChar = currentScreenValue.slice(-1)

        if (lastChar === '.' || lastChar === "+" || lastChar === "-" || lastChar === "÷" || lastChar === "x") return
        setResult(eval(currentScreenValue))
    }

    function addNumberToScreen(number: string, setCurrentScreenValue: React.Dispatch<React.SetStateAction<string>>) {
        if (currentScreenValue.length >= 9) return

        if (value === "Regenerate") {
            setCurrentScreenValue(screenCache.expression)
            setResult(screenCache.result)
            return
        }

        if (value === "=") {
            setScreenCache({
                expression: currentScreenValue,
                result: result
            })
            calculateResult()
            return
        }

        if (type === "operator") {
            const last = currentScreenValue.slice(-1)
            const isLastOperator = (last === "+" || last === "-" || last === "÷" || last === "x")
            const isFirst = currentScreenValue.length === 0
            switch (value) {
                case "+":
                    if (isLastOperator || isFirst) return
                    break
                case "-":
                    if (isLastOperator) return
                    break
                case "x":
                    if (isLastOperator || isFirst) return
                    break
                case "÷":
                    if (isLastOperator || isFirst) return
                    break
            }
        } else {
            if (value === "AC") {
                setCurrentScreenValue("")
                setResult("")
                return
            }

            if (value === "back") {
                setCurrentScreenValue(prev => prev.slice(0, -1))
                return
            }

            if (value === ".") {
                if (currentScreenValue.includes('.')) return
                if (currentScreenValue === "") {
                    setCurrentScreenValue("0");
                }
                setCurrentScreenValue(prev => prev + number);
                return
            }

            if (value === "0") {
                if (currentScreenValue === "0") {
                    return
                }
            }

            if (currentScreenValue === "0") {
                setCurrentScreenValue(value)
                return
            }
        }

        setCurrentScreenValue(prev => {
            return number !== "x" ? prev + number : prev + '*'
        });
    }
    useEffect(() => {
        // function handleKeyPress(event: KeyboardEvent) {
        // console.log(event.key)
        // if (!isNaN(Number(event.key)) || event.key === "." || event.key === "Backspace") {
        //     setCurrentScreenValue(prev => (event.key === "Backspace" ? prev.slice(0, -1) : prev + event.key));
        // }
        // }
        // document.addEventListener("keypress", handleKeyPress);

        // return () => document.removeEventListener("keypress", handleKeyPress);
    }, []);

    return (
        <button
            className={`p-4 lg:p-6 outline-none flex items-center justify-center rounded-3xl font-semibold text-2xl shadow-md ${className}`}
            onClick={() => addNumberToScreen(value, setCurrentScreenValue)}
        >
            {value === "back" ? <FaBackspace /> : value}
        </button>
    );
}
