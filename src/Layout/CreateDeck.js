import React, { useState } from "react";

function CreateDeck(){
    const initialForm = {
        name:'',
        description:''
    }
    const [formData, setFormData] = useState(initialForm);
    return <div>
        <nav>Navigation Here</nav>
        <h1>Create Deck</h1>
        <form>
            <label>Name</label>
            <input></input>
            <br></br>
            <label>Description</label>
            <input></input>
            <br></br>
            <button>Submit</button>
        </form>
    </div>
}

export default CreateDeck;