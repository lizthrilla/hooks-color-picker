import React from 'react'
import '../App.css';

const MainColor = ({color}) => {

    return (
        <div className="MainColorBox">
            <div className="FinalColor"  style={{backgroundColor: color}}/>
        </div>
    )

}

export default MainColor