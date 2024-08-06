import ScreenContextProvider from "../context/screenContextProvider";
import Keyboard from "./Keyboard";
import Screen from "./Screen";

export default function Layout() {
    return (
        <div
            className="flex flex-col items-center bg-custom-gray lg:w-1/3 p-5 shadow-xl rounded-3xl"
        >
            <ScreenContextProvider>
                <Screen />
                <Keyboard />
            </ScreenContextProvider>
        </div>
    )
}
