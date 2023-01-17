import React from "react";
import '../Stylesheets/Testimony.css';

function Testimony(props){
    return (
        <div className="testimony-container">
            <img className="testimony-image" src={require(`../Images/testimonio-${props.image}.png`)} alt={`Foto de ${props.name}`}/>
            <div className="testimony-text-container">
                <p className="testimony-name">{props.name} en {props.country}</p>
                <p className="testimony-job"><strong>{props.job}</strong> en <strong>{props.company}</strong></p>
                <p className="testimony-text">{props.testimony}</p>
            </div>
        </div>
    );
}

export default Testimony;