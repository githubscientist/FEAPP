export const SETUSER = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export const LOGOUT = () => ({
    type: 'LOGOUT',
});

export const SETTOKEN = (token) => ({
    type: 'SET_TOKEN',
    payload: token,
});

export const SETUSERS = (users) => ({
    type: 'SET_USERS',
    payload: users,
});