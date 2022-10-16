import React, { FC, useContext } from 'react'
import { useToDoContext } from '../context/ToDoContext'
import StyledButton from '../style/StyledDoneList'

const ButtonX: FC = () => {
	return (
		<StyledButton>
			Usuń zadanie
		</StyledButton>
	)
}

export default ButtonX
