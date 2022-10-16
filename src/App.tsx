import React, { useState } from 'react'

import './App.css'
import Main from './components/Main'

import TopDiv from './style/StyledMain'
import MainDiv from './style/StyledDoneList'
import ToDoComponent from './components/ToDoForm'

import { ToDoContext, contextToDo } from './context/ToDoContext'

const App: React.FC = () => {
	const input = contextToDo.input
	const status = contextToDo.status
	const toDoList = contextToDo.toDoList
	const id = contextToDo.id

	return (
		<>
			<ToDoContext.Provider value={{ input, status, toDoList, id }}>
				<TopDiv>
					<ToDoComponent />
				</TopDiv>
			</ToDoContext.Provider>
		</>
	)
}

export default App
