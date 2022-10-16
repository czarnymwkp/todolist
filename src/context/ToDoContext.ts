import { createContext, useContext, useState } from 'react'

export const contextToDo = {
	input: '',
	status: false,
	toDoList: [],
	id:0
}

export const ToDoContext = createContext(contextToDo)
export const useToDoContext = () => useContext(ToDoContext)
