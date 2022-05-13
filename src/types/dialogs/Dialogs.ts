export type UserDialogType = { id: number, name: string, photo: string };
export type MessageType = { id: string, me: boolean, name: string, message: string, avatarUrl: string };

export type DialogsType = {
    dialogsUsers: Array<UserDialogType>,
    messages: Array<MessageType>,
    defaultTextMessage: string
}
