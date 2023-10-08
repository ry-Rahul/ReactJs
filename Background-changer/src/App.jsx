import { useState } from "react";
import "./App.css";

function App() {
    const [color, setColor] = useState("green");

    return (
        <div className="h-screen w-screen" style={{ backgroundColor: color }}>
            <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2 ">
                <div className="flex px-3 py-3 rounded-lg flex-wrap justify-center gap-3 shadow-lg bg-white fixed bottom-12">
                    <button
                        className="outline-none text-white px-4 py-1 rounded-full"
                        style={{ backgroundColor: "red" }}
                        onClick={() => setColor("red")}
                    >
                        Red
                    </button>
                    <button
                        className="outline-none text-white px-4 py-1 rounded-full"
                        style={{ backgroundColor: "green" }}
                        onClick={() => setColor("green")}
                    >
                        Green
                    </button>
                    <button
                        className="outline-none text-white px-4 py-1 rounded-full"
                        style={{ backgroundColor: "blue" }}
                        onClick={()=>setColor("blue")}
                    >
                        Blue
                    </button>
                    <button
                        className="outline-none text-white px-4 py-1 rounded-full"
                        style={{ backgroundColor: "orange" }}
                        onClick={()=>setColor("orange")}
                    >
                        Orange
                    </button>
                    <button
                        className="outline-none text-white px-4 py-1 rounded-full"
                        style={{ backgroundColor: "purple" }}
                        onClick={()=>setColor("purple")}
                    >
                        Purple
                    </button>
                    <button
                        className="outline-none text-white px-4 py-1 rounded-full"
                        style={{ backgroundColor: "yellowgreen" }}
                        onClick={()=>setColor("yellowgreen")}
                    >
                        Yellow Green
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
