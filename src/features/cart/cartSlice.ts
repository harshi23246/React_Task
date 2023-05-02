import {createSlice} from '@reduxjs/toolkit';

export type cartItemType={
    title:string,
    price:number,
    quantity:number,
    author?:string,
    imgSource?:string
}

type InitialState={
    cartItems:cartItemType[]
}

const initialState : InitialState={
    cartItems:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            console.log("action.payload ",action.payload);
            let bookFound=state.cartItems.find((item)=>item.title===action.payload.title);
            console.log("Index is",bookFound);
            if(bookFound){
                bookFound.quantity+=1;
            }else{
                state.cartItems.push(action.payload);
            }
        },
        removeBook:(state,action)=>{
            console.log("action.payload ",action.payload);
            let bookFound=state.cartItems.find((item)=>item.title===action.payload.title)!;
            if(bookFound?.quantity===1){
                state.cartItems=state.cartItems.filter(book=>{
                    return book.title !==action.payload.title
                });
            }else{
                bookFound.quantity=bookFound.quantity-1;
            }
        },
        clearCart:(state)=>{
            state.cartItems=[];
        }
    }
});

export default cartSlice.reducer;
export const{addToCart,clearCart,removeBook}=cartSlice.actions;