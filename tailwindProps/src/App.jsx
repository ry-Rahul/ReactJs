import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
    const [count, setCount] = useState(0);

    let myObj = {
        name: "Rahul",
        age: 20,
        city: "Delhi",
    };

    let Arr = ["Rahul", "Rohit", "Raj"];

    return (
        <>
            <h1 className="bg-green-400 text-black rounded-xl p-5">
                Tailwind css
            </h1>

            <Card userName="Rahul Yadav" someObj={myObj} Array={Arr}  btnText="click Me"/>
            <Card userName="Rohit Kumar"/>

        </>
    );
}

export default App;
