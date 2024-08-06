import { useEffect } from "react";
import { FaBackspace } from "react-icons/fa";

import { useScreenContext } from "../context/useScreenContext";

interface ButtonProps {
    className?: string;
    value: string;
    type?: string; 
}

function addNumberToScreen(number: string, setCurrentScreenValue: React.Dispatch<React.SetStateAction<string>>) {
    setCurrentScreenValue(prev => prev + number);
}

export default function Button({ className, value }: ButtonProps) {
    const context = useScreenContext()

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (!isNaN(Number(event.key)) || event.key === "." || event.key === "Backspace") {
                context.setCurrentScreenValue(prev => (event.key === "Backspace" ? prev.slice(0, -1) : prev + event.key));
            }
        }
        document.addEventListener("keypress", handleKeyPress);

        return () => document.removeEventListener("keypress", handleKeyPress);
    }, []);

    return (
        <button
            className={`p-6 outline-none flex items-center justify-center rounded-3xl font-semibold text-2xl shadow-md ${className}`}
            onClick={() => addNumberToScreen(value, context.setCurrentScreenValue)}
        >
            {value === "back" ? <FaBackspace /> : value}
        </button>
    );
}
