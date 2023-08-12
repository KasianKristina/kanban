import { createSlice } from "@reduxjs/toolkit";
import data from '../../../data/data.json'

const columnsSlice = createSlice({
    name: 'columns',
    initialState: data.columns,
    reducers: {
        addTask: (state, action) => {
            const { title, status, description, newColIndex } = action.payload;
            const task = { title, description, status };
            const column = state.find((col, index) => index === newColIndex);
            if (typeof column !== 'undefined')
                column.tasks.push(task);
        },
    }
})

export default columnsSlice