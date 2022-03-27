import { v4 as myId } from "uuid"



const initialState = {
    dialogsUsers: [
        { id: 1, name: 'Evgen', photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
        { id: 2, name: 'Oleja', photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
        { id: 3, name: 'Elena', photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
        { id: 4, name: 'Sasha', photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
        { id: 5, name: 'Hulio', photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' },
    ],
    messages: [
        { id: myId(), me: true, name: 'Evgen', message: 'Hello World', avatarUrl: 'https://media.istockphoto.com/vectors/man-silhouette-profile-picture-vector-id526947869?k=20&m=526947869&s=612x612&w=0&h=j528SMpxB1AOCNs-WUcuQjvNRVuO-0PO1djfq-Rq6dE=' },
        { id: myId(), me: false, name: 'Sasha', message: 'davay dosvidanya', avatarUrl: 'https://media.istockphoto.com/vectors/man-silhouette-profile-picture-vector-id526947869?k=20&m=526947869&s=612x612&w=0&h=j528SMpxB1AOCNs-WUcuQjvNRVuO-0PO1djfq-Rq6dE=' },
        { id: myId(), me: false, name: 'Ignat', message: 'Costya Loh ebaniy', avatarUrl: 'https://media.istockphoto.com/vectors/man-silhouette-profile-picture-vector-id526947869?k=20&m=526947869&s=612x612&w=0&h=j528SMpxB1AOCNs-WUcuQjvNRVuO-0PO1djfq-Rq6dE=' },
        { id: myId(), me: true, name: 'Evgen', message: 'Soglasen', avatarUrl: 'https://media.istockphoto.com/vectors/man-silhouette-profile-picture-vector-id526947869?k=20&m=526947869&s=612x612&w=0&h=j528SMpxB1AOCNs-WUcuQjvNRVuO-0PO1djfq-Rq6dE=' },
        { id: myId(), me: true, name: 'Evgen', message: 'Poshel on', avatarUrl: 'https://media.istockphoto.com/vectors/man-silhouette-profile-picture-vector-id526947869?k=20&m=526947869&s=612x612&w=0&h=j528SMpxB1AOCNs-WUcuQjvNRVuO-0PO1djfq-Rq6dE=' },
    ],
    defaultTextMessage: ''
}
export const dialogsReduser = (state = initialState, action) => {
    return state;
}

