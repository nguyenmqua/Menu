import React from "react"
import appetizer from "../components/appetizer.json";
import Modal from "../components/Modal"

const Appetizer = () =>{

    return (
        <div className="container">
        <Modal 
        buttonLabel="Appetizer"
        category={appetizer}
        
/>
        </div>
    )
}

export default Appetizer