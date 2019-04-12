import React from 'react'
import '../App.css';

const Slider = ({value, sliderChange, max, step}) => {
    return (
        <div className="Slider" >
            <div>
                <input 
                    id="saturation"
                    type="range"
                    value={value}
                    min="0"
                    max={max}
                    step={step}
                    onChange={(e) => sliderChange(e)}

                />
            </div>
        </div>
    )

}

export default Slider