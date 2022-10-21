import React, { FC, ChangeEvent, MouseEvent } from 'react'
import { useState, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { IQuest, IPrev } from '../interface/interface'
import ButtonX from './Button'
import ButtonV from './ButtonV'
import StyledDiv from '../style/StyledDiv'

interface Task {
	text: string
	status: boolean
	id: string
}

interface State {
	input: string
	taskList: Task[]
}

interface SetInput {
	type: 'setInput'
	payload: string
}

interface AddTask {
	type: 'addTask'
	payload: Task
}

interface RemoveTask {
	type: 'removeTask'
	payload: string
}

type Action = SetInput | AddTask | RemoveTask

function reduceInput(state: State, action: Action): State {
	switch (action.type) {
		case 'setInput': {
			return {
				...state,
				input: action.payload,
			}
		}

		case 'addTask': {
			return {
				...state,
				taskList: [...state.taskList, action.payload],
				input: '',
			}
		}

		case 'removeTask': {
			return {
				...state,
				taskList: [...state.taskList].filter(item => item.id !== action.payload),
			}
		}

		default: {
			return state
		}
	}
}

/*

 1. Zmiana statusu - status true lub false - daj jakieś indykatory
 2. Przycisk do usuwania wszystkich tasków 
 3. Jeżeli input jest pusty = '', nie dodajesz taska 
 4. Local storage :) :
 	- Dodaj task do local storage
	- Odczytaj taski z local storage (muszą pójsć do default state useReducera)
*/

const ToComponent: FC = () => {
	const [stateInput, dispatch] = useReducer(reduceInput, { input: '', taskList: [] })

	const setInput = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'setInput', payload: event.target.value })
	}

	const addTask = () => {
		const newTask = {
			status: false,
			id: uuidv4(),
			text: stateInput.input,
		}

		dispatch({ type: 'addTask', payload: newTask })
	}

	const removeTask = (id: string) => {
		dispatch({ type: 'removeTask', payload: id })
	}

	return (
		<>
			<h1>Witam w aplikacji To Do</h1>
			<br />
			<br />
			<input
				onChange={setInput}
				type='text'
				placeholder='Wpisz zadanie do wykonania'
				value={stateInput.input}
				name='text'
			/>
			{/* <button onClick={questClickStatus}>Kasuj wszystkie zadania</button> */}
			<button onClick={addTask}>Nowe zadanie</button>
			<br />
			<div>ZADANIA DO WYKONANIA</div>
			<div>
				{stateInput.taskList.map(input => {
					return (
						<StyledDiv>
							<div key={input.id}>
								{input.text}
								<button onClick={() => removeTask(input.id)}>Usuń zadanie</button>
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
export default ToComponent
