import { FaBackspace } from "react-icons/fa";

interface ButtonProps {
    className?: string;
    value: string;
    onClick?: () => void
}

export default function Button({ className, value }: ButtonProps) {
    return (
        <button
            className={`p-6 outline-none flex items-center justify-center rounded-3xl font-semibold text-2xl shadow-md ${className}`}
        >{value === "back" ? <FaBackspace /> : value}</button>
    )
}
