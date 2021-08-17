import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const CreateTodo = (props) => {

    const inputRef = useRef(null)

    const [todo, setTodo] = useState({
        todo: "",
        doit: false,
        id: 0,
    })


    useEffect(() => {
        inputRef.current.focus()
    }, [])


    const refreshText = (e) => {
        setTodo({
            ...todo,
            todo: e.target.value
        })

        console.log(todo)
    }

    const sendToDo = e => {
        e.preventDefault()
        todo.id = Math.random()
        props.addTodo(todo)
        setTodo({
            todo: "",
            doit: false,
            id: 0,
        })
    }

    //console.log(text)

    return (
        <Container onSubmit={sendToDo}>
            <Input 
                autoComplete="off" 
                name="text" 
                type="text" 
                ref={inputRef}  
                onChange={refreshText} 
                value={todo.todo} 
            />
            <SubmitBtn 
                type="submit" 
                value={"Post"}
            />
        </Container>
    )
}

export default CreateTodo

const Container = styled.form`
    border: ${props => props.theme.border ? "1px solid #cccccc" : "none"};
    border-radius: 5px;
    padding: 15px;
    width: 100%;
    
    background-color: ${props => props.theme.creator};

    display: flex;
    flex-wrap: nowrap;

    box-shadow: ${props => props.theme.shadow ? "0 3px 10px 2px #cccccc": "none"};

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }

`

const Input = styled.input`
    font-size: 1em;
    width: 100%;
    padding: 10px 10px;
    outline: none;

    color: ${props => props.theme.color};

    border: ${props => props.theme.border ? "1px solid #cccccc" : "1px solid #000"};
    border-radius: 5px;

    background-color: ${props => props.theme.color_input};

    &:focus {
        border: ${props => props.theme.border ? "1px solid #b3b1b1" : "1px solid #000"};
    }
`
const SubmitBtn = styled.input`
    width: 15%;
    margin-left: 5px;
    cursor: pointer; 

    //height: 30px;
    padding: 10px 0;

    align-self: center;

    border-radius: 5px;
    border: none;
    background-color: #3272d9;

    color: #fff;
    font-weight: 100;

    @media screen and (max-width: 600px) {
        margin-top: 15px;
        align-self: flex-end;
    }
`
