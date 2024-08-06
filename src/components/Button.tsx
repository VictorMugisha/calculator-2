import { useEffect } from "react";
import { FaBackspace } from "react-icons/fa";

import { useScreenContext } from "../context/useScreenContext";
import { VscLaw } from "react-icons/vsc";

interface ButtonProps {
    className?: string;
    value: string;
    type?: string;
}

export default function Button({ className, value, type }: ButtonProps) {
    const { currentScreenValue, setCurrentScreenValue } = useScreenContext()

    function addNumberToScreen(number: string, setCurrentScreenValue: React.Dispatch<React.SetStateAction<string>>) {
        if (currentScreenValue.length > 16) return

        if (value === "Regenerate") {
            return
        }

        if (type === "operator") {
            const last = currentScreenValue.slice(-1)
            const isLastOperator = last === "+" || last === "-" || last === "÷" || last === "X"
            switch (value) {
                case "+":
                    if (isLastOperator) return
                    break
                case "-":
                    if (isLastOperator) return
                    break
                case "X":
                    if (isLastOperator) return
                    break
                case "÷":
                    if (isLastOperator) return
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

        setCurrentScreenValue(prev => prev + number);
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
