import React from "react"
import entrees from "./entrees.json";
import Modal from "./Modal"

const Soup = () =>{

    return (
        <div className="container">
        <Modal 
        buttonLabel="Entrees"
        category={entrees}
        
/>
        </div>
    )
}

export default Soup