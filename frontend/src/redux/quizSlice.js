import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants";

export const getQuestions = createAsyncThunk(
    'questions/getQuestions',
    async (prompt, {rejectedWithValue}) => {
        try {
            const response = await axios.post(`${API_URL}/aiapp/`, prompt,{
                headers:{
                    'Content-Type': 'application/json'
                },
            });
            console.log(response.data.message)
            return response.data;
        }

        catch (error) {
            return rejectedWithValue(error.response?.data || "Something went wrong");
        }
    }
);

const quizSlice = createSlice({
    name:'questions',
    initialState:{
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getQuestions.pending, (state) => {
            state.loading = true;
        })
        .addCase(getQuestions.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.message;
        })
        .addCase(getQuestions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default quizSlice.reducer;