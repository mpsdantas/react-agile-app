import React from "react";

const HomeCard = (props) => (
    <div classNameName="col-12 col-sm-4">
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top rounded mx-auto d-block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png" style={{paddingTop: '3px', width: '100px'}} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.text}</p>
                <button href="#" className="btn btn-primary" onClick={props.action}>Go somewhere</button>
                </div>
        </div>
    </div>
);

export default HomeCard;