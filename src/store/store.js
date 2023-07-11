import { createStore } from "redux";
import middleware from "./middleware";
import todoReducer from "./reducers/todo-reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "Testing",
    version: 1,
    storage: storage
}
const persistedReducer = persistReducer(persistConfig, todoReducer)

const store = createStore(persistedReducer, middleware);

export default store;