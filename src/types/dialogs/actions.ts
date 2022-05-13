export const ADD_MESSAGE = 'ADD-MESSAGE';
export const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';

type addMessageACType = { type: typeof ADD_MESSAGE }
type changeTextMessageACType = { type: typeof CHANGE_TEXT_MESSAGE, message: string }

export type DialogsActionsType = addMessageACType | changeTextMessageACType