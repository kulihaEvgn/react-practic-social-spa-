const initialState = {
    links: [
        { id: 1, url: '/profile', name: 'Profile' },
        { id: 2, url: '/dialogs', name: 'Message' },
        { id: 3, url: '/users', name: 'User' },
        { id: 4, url: '/music', name: 'Music' },
        { id: 5, url: '/news', name: 'News' },
        { id: 6, url: '/setting', name: 'Setting' },
    ]
}

export const navbarReduser = (state = initialState, action) => {
    return state;
}