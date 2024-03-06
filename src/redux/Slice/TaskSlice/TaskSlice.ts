/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TaskState {
	taskData: any[]
}

export const taskSlice = createSlice({
	name: 'task',
	initialState: {
		taskData: []
	} as TaskState,
	reducers: {
        addTask(state, action: PayloadAction<any> ) {
            return {...state, taskData: state.taskData.concat(action.payload) }
        },
        setTaskData(state, action: PayloadAction<any>){
            return {...state, taskData: action.payload}
        }
    },
});

export const { addTask, setTaskData } = taskSlice.actions;

export default taskSlice.reducer;
