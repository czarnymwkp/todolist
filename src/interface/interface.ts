export interface IQuest {

	taskName: string
	isAdd: boolean
	id: number
}

export interface IPrev {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
