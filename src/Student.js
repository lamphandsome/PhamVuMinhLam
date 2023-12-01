import React from "react";
const Student = ({pic, name, id, email}) =>{
    return (
        <div className="card h-100 shadow-lg" color="red">
            <div className="item-container" >
                <div className="text-center p-3">
                <img src={pic} alt={id} className="user-profile-pic"></img >
                <br />
                <h5 className="card-title">{name}</h5>
                <p>{email}@gmail.com</p>
                <br />
                </div>
            </div>
        </div>
    );
};
export default Student; 