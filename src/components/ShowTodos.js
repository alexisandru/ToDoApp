import React from 'react'
import styled from 'styled-components'

import delete_svg from './svg/delete.svg'

const ShowTodos = (props) => {

    const noTodos = <Note><Text center>No ToDos</Text></Note>

    
    const todos = props.todos.map((todo, index) => {
        return (
            <Note state={todo.doit} key={todo.id}>
                <Check type="checkbox" checked={todo.doit} onChange={() => props.updateToDo(index)} />
                <Text>{todo.todo}</Text>
                <DeleteBtn src={delete_svg} alt="" onClick={() => props.deleteTodo(todo.id, index)} />
            </Note>
        )
    })

    return (
        <Container>
            {props.todos.length !== 0 ? todos : noTodos}
        </Container>
    )
}

export default ShowTodos


const Container = styled.div`
    margin-top: 20px;
`



const Note = styled.div`
    border: ${props => props.theme.border ? "1px solid #cccccc" : "none"};
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadow ? "0 1px 10px 1px #cccccc" : "none"};
    
    padding: 10px 15px;
    margin: 15px 0;
    
    width: 100%;

    display: flex;
    align-items: center;

    justify-content: space-between;

    background-color: ${props => props.theme.creator};

    

    text-decoration: ${props => props.state ? "line-through" : ""};
    color: ${props => props.state ? "#cfd0d1" : props.theme.color};

`

const Text = styled.div`    
    width: 100%;
    justify-self: center;
    margin: 3px 15px;

    word-break: break-all;
    
    text-align: ${props => props.center ? 'center' : ''};
`

const Check = styled.input`
    height: 2em;
    width: 2em;

    min-width: 2em;

    @media screen and (max-width: 600px) {
        width: 1.5em;
        min-width: 1.5em;
    }
`

const DeleteBtn = styled.img`
    width: 2em; 
    height: 2em;

    border-radius: 5px;

    cursor: pointer;

    background-color: #fc6565;

    &:hover {
        background-color: #ed3737;
    }

    @media screen and (max-width: 600px) {
        width: 1.5em;
        height: 1.5em;
    }
`