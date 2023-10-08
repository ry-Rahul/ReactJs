import React from "react";


export default function Buttons() {

    const changeBackground = (color) =>{
        document.body.style.background = color;
    }

    return (
        <div className="p-4 rounded-xl bg-gray-500 flex gap-9">
            <button className="red bg-red-600" onClick={changeBackground("red")}>Red</button>
            <button className="green bg-green-600" onClick={changeBackground("green")}>green</button>
            <button className="blue bg-blue-600" onClick={changeBackground("blue")}>blue</button>
            <button className="yellow bg-yellow-600" onClick={changeBackground("yellow")}>yellow</button>
            <button className="orange bg-orange-600" onClick={changeBackground("orange")}>orange</button>
            <button className="purple bg-purple-600" onClick={changeBackground("purple")}>purple</button>
        </div>
    );
}
