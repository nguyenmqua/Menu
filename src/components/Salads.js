import React from "react"
import salads from "./salads.json";
import Modal from "./Modal"

const Salads = () =>{

    return (
        <div className="container">
        <Modal 
        buttonLabel="Salads"
        category={salads}
        
/>
        </div>
    )
}

export default Salads