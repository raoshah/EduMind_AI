import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./redux/quizSlice"

const store = configureStore({
    reducer:{
        quizSlice,
    },
});

store.subscribe(() => {
    console.log('Current state:', store.getState());
});

export default store;