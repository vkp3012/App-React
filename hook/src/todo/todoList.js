import React, { useState } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoButton({ todo, index, markTodo, removeTodo,editTodo }) {
    return (
        <div
        className="todo"
        
        >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
            <Button variant="outline-danger" onClick={() => editTodo(index)}>Edit</Button>
            <Button variant="outline-success" onClick={() => markTodo(index)}>Task Completed</Button>{' '}
            <Button variant="outline-danger" onClick={() => removeTodo(index)}>Delete</Button>
        </div>
        </div>
    );
}

function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}> 
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );
}

function Todo() {
    const [todos, setTodos] = useState([
        {
        text: "This is a sample todo",
        isDone: false
        }
    ]);

    const [editId, setEdit] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const handleEditChange = (id, text) => {
        setEdit(id);
        setInputValue(text);
      };

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const editTodo = (id, text) => {
        let editTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.text = text;
            }
            return todo;
        });
        setTodos(editTodos);
        setEdit(false);
    }

    return (
        <div className="app">
        <div className="container">
            <h1 className="text-center mb-4">Todo List</h1>
            <FormTodo addTodo={addTodo} />
            <div>

            {todos.map((todo, index) => (
                <Card>
                    <Card.Body>
                        <TodoButton
                            key={index}
                            index={index}
                            todo={todo}
                            editTodo={editTodo}
                            
                            markTodo={markTodo}
                            removeTodo={removeTodo}
                        />
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>
        </div>
    );
}

export default Todo;