import React, { FC, ChangeEvent, MouseEvent } from 'react'
import { useState, useReducer } from 'react'

import { IQuest, IPrev } from '../interface/interface'
import ButtonX from './Button'
import ButtonV from './ButtonV'
import StyledDiv from '../style/StyledDiv'

interface State {
	input: string
	toDoList: []
	status: boolean
	id: number
}

localStorage.setItem('name', 'lucas')

const element = localStorage.getItem('name')
console.log(element)

function reducer() {}

const initialState: State = {
	input: '',
	toDoList: [],
	status: true,
	id: 0,
}

const ToDoComponent: FC = () => {
	// const [{input, toDoList, status, id}, dispach] = useReducer(reducer, initialState)

	const [input, setInput] = useState<string>('')
	const [toDoList, setToDoList] = useState<IQuest[]>([])
	const [status, setStatus] = useState(Boolean)
	const [id, setQuestNumber] = useState(Number)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value)
	}

	const questOnClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		const newTask = { taskName: input, isAdd: status, id: id }
		setToDoList([...toDoList, newTask])
		setInput('')
		setStatus(true)
		setQuestNumber(prevState => prevState + 1)
		console.log(toDoList)
	}

	const questClickStatus = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setToDoList([])
		setStatus(prevState => !prevState)
	}

	function handleRemove(id: number) {
		const newList = toDoList.filter(item => item.id !== id)
		setToDoList(newList)
	}

	return (
		<>
			<form action=''>
				<h1>Witam w aplikacji To Do</h1>
				<br />
				<br />
				<input onChange={handleChange} type='text' placeholder='Wpisz zadanie do wykonania' value={input} name='text' />
				<button onClick={questClickStatus}>Kasuj wszystkie zadania</button>
				<button onClick={questOnClick}>Nowe zadanie</button>
			</form>
			<br />
			<div>ZADANIA DO WYKONANIA</div>
			<div>
				{toDoList.map(input => {
					return (
						<StyledDiv>
							<div key={input.id}>
								{input.taskName}
								{input.isAdd}
								<button onClick={() => handleRemove(input.id)}>Usuń zadanie</button>
								<ButtonV></ButtonV>
								<ButtonX></ButtonX>
							</div>
						</StyledDiv>
					)
					console.log(input.id)
				})}
			</div>
		</>
	)
}
export default ToDoComponent
