import React, { useState } from 'react'

import './App.css'

import TopDiv from './style/StyledMain'
import ToComponent from './components/todoforms'

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
					<ToComponent />
				</TopDiv>
			</ToDoContext.Provider>
		</>
	)
}

export default App
