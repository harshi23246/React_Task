import {createSlice} from '@reduxjs/toolkit';

type InitialState={
    orders:object[]
}

const initialState : InitialState={
    orders:[]
}
const orderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{
        addOrder:(state,action)=>{
            state.orders.push(action.payload)
        }
    }
});

export default orderSlice.reducer;
export const {addOrder}=orderSlice.actions