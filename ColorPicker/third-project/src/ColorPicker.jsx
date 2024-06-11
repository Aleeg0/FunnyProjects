import { useState } from "react";
import './ColorPicker.css'

function ColorPicker(){
    const [color,setColor] = useState("#ffffff");

    const handleColorChange = (event) => {
        setColor(event.target.value);
        const box = document.getElementsByClassName("colorBox")[0];
        box.style.backgroundColor = `${color}`;
        if (color < "#800000"){
            box.style.color = `white`;
        }
        else{
            box.style.color = `black`;
        }
    }

    return (
        <div className="colorPicker">
            <div className="colorPickerContainer">
                <div className="colorBox">
                    <h3>Current color:</h3>
                    <p>{color}</p>
                </div>
                <input type="color" value={color} onChange={handleColorChange}></input>
            </div>
        </div>
    )
}

export default ColorPicker;