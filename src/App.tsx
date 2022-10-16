import React, { useState } from 'react'

import './App.css'

import TopDiv from './style/StyledMain'
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
