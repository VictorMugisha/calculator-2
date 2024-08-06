import { useEffect } from "react";
import { FaBackspace } from "react-icons/fa";

import { useScreenContext } from "../context/useScreenContext";

interface ButtonProps {
    className?: string;
    value: string;
    type?: string;
}

export default function Button({ className, value, type }: ButtonProps) {
    const { currentScreenValue, setCurrentScreenValue } = useScreenContext()

    function calculateResult() {
        const lastChar = currentScreenValue.slice(-1)

        if (lastChar === '.' || lastChar === "+" || lastChar === "-" || lastChar === "÷" || lastChar === "x") return

        alert(eval(currentScreenValue))
    }

    function addNumberToScreen(number: string, setCurrentScreenValue: React.Dispatch<React.SetStateAction<string>>) {
        if (currentScreenValue.length >= 9) return

        if (value === "Regenerate") {
            return
        }

        if (value === "=") {
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
            className={`p-6 outline-none flex items-center justify-center rounded-3xl font-semibold text-2xl shadow-md ${className}`}
            onClick={() => addNumberToScreen(value, setCurrentScreenValue)}
        >
            {value === "back" ? <FaBackspace /> : value}
        </button>
    );
}
