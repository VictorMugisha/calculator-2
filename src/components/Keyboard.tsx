import Button from "./Button";

export default function Keyboard() {
    return (
        <div
            className="mt-4 w-full border shadow-md p-5 rounded-3xl"
        >
            <div className="grid w-full grid-cols-4 gap-4">
                <Button value="AC" type="reset" />
                <Button value="Regenerate" className="col-span-2 text-green-500 text-xl" type="regenerate" />
                <Button value="÷" className="text-blue-500" type="operator" />
                {
                    ['7', '8', '9'].map(number => (
                        <Button key={number} value={number} type="number" />
                    ))
                }
                <Button value="-" className="text-blue-500 text-5xl" type="operator" />
                {
                    ['4', '5', '6'].map(number => (
                        <Button key={number} value={number} type="number" />
                    ))
                }
                <Button value="X" className="text-blue-500 text-5xl" type="operator" />
                {
                    ['1', '2', '3'].map(number => (
                        <Button key={number} value={number} type="number" />
                    ))
                }
                <Button value="+" className="text-blue-500 text-5xl" type="operator" />
                {
                    ['0', '.', 'back'].map(number => (
                        <Button key={number} value={number} type={number} />
                    ))
                }
                <Button value="=" className="text-blue-500 text-5xl" type="equal" />
            </div>
        </div>
    )
}
