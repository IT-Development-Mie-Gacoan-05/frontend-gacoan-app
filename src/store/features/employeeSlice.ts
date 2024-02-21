import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Employee, EmployeeState } from "../types/types";
import urlsEndpoint from "../../services/urlEndpoint"

const initialState: EmployeeState = {
    employee: [],
    status: 'idle',
    error: null,
};

export const fetchEmployee = createAsyncThunk<Employee[]>(
    'posts/fetchEmployee',
    async () => {
        const response = await axios.get(`${urlsEndpoint.GET_DATA_PEGAWAI}`);
        return response.data?.data?.data;
    }
);


const employeeState = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchEmployee.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchEmployee.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.employee = action.payload;
            })
            .addCase(fetchEmployee.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            });
    },
});

export default employeeState.reducer;
