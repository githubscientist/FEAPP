import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
});

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    try {
        const serializedState = JSON.stringify(store.getState());

        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.log(error);
    }
});

export default store;