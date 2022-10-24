import React, { useState, useEffect } from 'react'
import styled, {ThemeProvider} from 'styled-components'

import { dark, light } from "./themes"

import Header from './components/Header'
import CreateTodo from './components/CreateTodo'
import ShowTodos from './components/ShowTodos'

const App = () => {

  const [todos, setTodos] = useState([])
  
  const [darkState, setDarkState] = useState(dark);
 

  // get todos of local storage on the load
  
  useEffect(() => {
    let content = localStorage.getItem('todos')
    if (content) {
      setTodos(JSON.parse(content))
    }
    
    let darkMode = localStorage.getItem('pageMode')
    if (darkMode) {
      setDarkState(JSON.parse(darkMode))
    }

  }, [])

  // update the local storage every time state change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    localStorage.setItem('pageMode', darkState)
  }, [darkState])

  
  // add todo to state
  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  // delete todo of state
  const deleteTodo = (id, index) => {
    const newTodos = todos.filter((e, i) => i !== index)
    setTodos(newTodos)
  }

  // update the condition of checked
  const updateToDo = (index) => {
    const newTodos = todos.map((e, i) => {
      if (i === index) {
        e.doit = !e.doit
      }
      return (e)
    })

    setTodos(newTodos)
  }

  // update dark mode

  const changeTheme = () => {
    setDarkState(!darkState);
  }

  return (
    <ThemeProvider theme={darkState === true ? dark : light}>
      <Containerr>
          <Header changeTheme={changeTheme}/>
          <ContainerComp>
            <CreateTodo addTodo={addTodo}/>
            <ShowTodos todos={todos} deleteTodo={deleteTodo} updateToDo={updateToDo} />
          </ContainerComp>
      </Containerr>
    </ThemeProvider>
  )
}

export default App



const Containerr = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.body};
  
`

const ContainerComp = styled.div`
  display: flex;
  flex-direction: column;
  //align-self: flex-start;
  
  margin-top: 10px;
  padding: 30px;
  width: 40%;

 // border: 1px solid #000;

 @media screen and (max-width: 600px) {
   width: 100%;
 }
`
