import React, { useState } from 'react'

function InputTodo() {

    // set initial state for description
    const [description, setDescription ] = useState("");

    // on form submit
    const onFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // specify body
            const body = { description };

            // response
            const response = await fetch("http://localhost:4000/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })

            // display response
            // console.log(response)
            // refresh window after form submit
            // window.location("/")
        } catch (err) {
            console.error(err.message);
        }
    }

  return (
    <>
        <h1 className="text-center mt-5">Pern Todo</h1>
        <form className='d-flex mt-5' onSubmit={onFormSubmit}>
            <input 
                type="text" 
                className="form-control"
                value={description}
                onChange={ e => setDescription(e.target.value)}
            />
            <button className="btn btn-success">Add</button>
        </form>
    </>
  )
}

export default InputTodo