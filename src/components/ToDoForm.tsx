import React, { FC, ChangeEvent, MouseEvent } from 'react'
import { useState } from 'react'

import { IQuest, IPrev } from '../interface/interface'

localStorage.setItem('name', 'lucas')

const element = localStorage.getItem('name')
console.log(element)

const ToDoComponent: FC = () => {
	const [input, setInput] = useState<string>('')
	const [toDoList, setToDoList] = useState<IQuest[]>([])
	const [status, setStatus] = useState(Boolean)
	const [nameLogin, setNameLogin] = useState<String>('')
	const [questNumber, setQuestNumber] = useState(Number)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value)
	}
	const nameHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNameLogin(event.target.value)
	}

	const questOnClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		const newTask = { taskName: input, isAdd: status, id: questNumber }
		setToDoList([...toDoList, newTask])
		setInput('')
		setStatus(true)
		console.log(toDoList)
	}
	const nameOnClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		const userNameLogin = nameLogin
	}
	const questClickStatus = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setToDoList([])
		setStatus(prevState => !prevState)
	}
	return (
		<>
			<form action=''>
				<h1>Witam w aplikacji To Do</h1>
				<br />
				<br />
				<input id='task' type='text' placeholder='Wpisz swoje imię' onChange={nameHandleChange} />{' '}
				<button onClick={nameOnClick}>Dodaj do bazy danych</button>
				<br />
				<br />
				<input onChange={handleChange} type='text' placeholder='Wpisz zadanie do wykonania' value={input} name='text' />
				<button onClick={questClickStatus}>Kasuj zadania</button>
				<button onClick={questOnClick}>Nowe zadanie</button>
			</form>
			<br />
			<div>ZADANIA DO WYKONANIA</div>
			<div>
				{toDoList.map((input: IQuest) => {
					return (
						<>
							<li>
								{input.taskName}
								{input.isAdd}
								<button>V</button>
								<button>X</button>
							</li>
						</>
					)
				})}
			</div>
		</>
	)
}
export default ToDoComponent
