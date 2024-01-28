const initialState = {
    user: null,
    token: null,
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                token: null,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
            };
        
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            };
        
        default:
            return state;
    }
};

export default userReducer;