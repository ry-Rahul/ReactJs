import { useEffect, useState ,useRef} from "react";
import "./App.css";
import { useCallback } from "react";

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("");


    const passwordRef = useRef(null)

    //callback hook is used to prevent the function from being created again and again on every render and only when the dependencies change the function is created again and again and not on every render of the component and this is done to prevent the infinite loop of the function being created again and again on every render of the component
    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) {
            str += "0123456789";
        }
        if (characterAllowed) {
            str += "!@#$%^&*()_+";
        }

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, characterAllowed, setPassword]);

    const copyToclipBoard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 20);
        window.navigator.clipboard.writeText(password);
    },[password])

    useEffect(() => {

        passwordGenerator();
        
    },[passwordGenerator, length, numberAllowed, characterAllowed,])

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500 ">
                <h1 className="text-white text-2xl text-center my-3">
                    Password Generator
                </h1>
                <div className="flex rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        placeholder="Password"
                        readOnly
                        className="outline-none w-full px-3 py-1 "
                        ref={passwordRef}
                    />
                    <button
                        className="outline-none bg-blue-600 px-4 py-0.5 shrink-0 text-white"
                        onClick={copyToclipBoard}
                    >
                        copy
                    </button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex item-center gap-x-1">
                        <input
                            id="slider"
                            type="range"
                            min={0}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => setLength(e.target.value)}
                        />
                        <label htmlFor="slider">Label: {length}</label>
                    </div>
                    <div className="flex item-center gap-x-1">
                        <input
                            id="number"
                            type="checkbox"
                            className="cursor-pointer"
                            onChange={() => {
                                setNumberAllowed((prev)=>!prev);
                            }}

                        />
                        <label htmlFor="number">Numbers</label>

                    </div>
                    <div className="flex item-center gap-x-1">
                        <input
                            id="char"
                            type="checkbox"
                            className="cursor-pointer"
                            onChange={() => {
                                setCharacterAllowed((prev)=>!prev);
                            }}

                        />
                        <label htmlFor="char">Characters</label>

                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
