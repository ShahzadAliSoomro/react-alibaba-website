import React from "react";
import './AliBaba.css';

const Sresult = (props) => {
    const img = `https://source.unsplash.com/400x600/?${props.name}`;
    return(
        <>
        <div className="result">
            <img src={img} alt="search" />
        </div>
        </>
    )
}

export default Sresult;