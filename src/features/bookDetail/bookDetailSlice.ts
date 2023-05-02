import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookType } from "../book/bookSlice";

type InitialState={
    loading:boolean,
    books:BookType[],
    error:string
}

const initialState:InitialState={
    loading:false,
    books:[],
    error:''
}

const bookDetailSlice=createSlice({
    name:'bookItem',
    initialState,
    reducers:{
        getBookDetailRequest:(state,action: PayloadAction<string|undefined>)=>{
            state.loading=true;
            state.error='';
        },
        getBookDetailSuccess:(state,action)=>{
            state.loading=false;
            state.books=action.payload;
            state.error='';
        },
        getBookDetailError:(state,action)=>{
            state.loading=false;
            state.error=action.payload.error.message || 'Something went wrong';
        }
    }
});


export default bookDetailSlice.reducer;

export const {getBookDetailRequest,getBookDetailSuccess,getBookDetailError}=bookDetailSlice.actions;