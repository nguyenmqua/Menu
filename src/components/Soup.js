import React from "react"
import soup from "./soup.json";
import Modal from "./Modal"

const Soup = () =>{

    return (
        <div className="container">
        <Modal 
        buttonLabel="Soup"
        category={soup}
        
/>
        </div>
    )
}

export default Soup