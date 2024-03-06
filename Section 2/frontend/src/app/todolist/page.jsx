import React from 'react'

const TodoList = () => {

    const addNewTask = (e) => {
        console.log(e.code);
    }

    return (
        <div className='vh-100 bg-primary-subtle'>

            <div className='container py-5'>
                <h1 className='display-3 text-center fw-bold'>ToDo List</h1>
                <div className='card shadow'>
                    <div className="card-header">

                        <input
                            type="text"
                            className='form-control border-primary border-3'
                            placeholder='Press Enter to add Task'
                            onKeyDown={}
                        />

                    </div>
                    <div className="card-body"></div>
                </div>
            </div>

        </div>
    )
}

export default TodoList;