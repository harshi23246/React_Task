import {createSlice,PayloadAction} from '@reduxjs/toolkit';

type InitialState={
    title:string
}

const initialState:InitialState={
    title:'eCommerce Site'
}

const titleSlice=createSlice({
    name:'title',
    initialState,
    reducers:{
        updateTitle:(state,action:PayloadAction<string | undefined>)=>{
            state.title ="eCommerce Site "+ "| "+ action.payload;
        },
        resetTitle:(state)=>{
            state.title="eCommerce Site";
        }
    }
});

export default titleSlice.reducer;
export const {updateTitle,resetTitle}=titleSlice.actions;