import React, { useState, useEffect } from 'react'

function ListTodos() {
    // set todos
    const [todos, setTodos] = useState([]);

    const retrieveTodos = async () => {
        try {
            // get data
            const response = await fetch("http://localhost:4000/todos");

            // parse response
            const todosData = await response.json();

            // display data
            // console.log(todosData)

            //set todos data
            setTodos(todosData)
        } catch (err) {
            console.error(err.message)
        }
    }

    // delete todo
    const deleteTodo = async (id) => {
        try {
            // delete
            const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`, {
                method: "DELETE",
            });

            // console
            // console.log("todo deleted")

            // filter out deleted todos
            setTodos(todos.filter( todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        retrieveTodos();
    }, [])
  return (
    <>
        {todos.length === 0
            ? <div className='row mt-5'>
                <div className='co-12 d-flex justify-content-center align-items-center py-3'>
                <p className='fw-bold text-disabled'>You haven't added any todos</p>
                </div>
            </div>
            :
            <table className="table mt-5">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {/* 
                <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr> */}

            {/* mapping data */}
            {todos.map(todo => (
                <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td>EDIT</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                    </td>
                </tr>
            ))}
            
            </tbody>
        </table>
        }
    </>
  )
}

export default ListTodos