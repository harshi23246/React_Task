import {createSlice} from '@reduxjs/toolkit';

type addressType={
    fName:string,
    lName:string,
    locality:string,
    pincode:number,
    state:string,
    city:string,
    country:string,
    phone:number,
    diasbled:boolean
}

const initialState:addressType ={
        fName:"",
        lName:"",
        locality:"",
        pincode:0,
        state:"",
        city:"",
        country:"",
        phone:0,
        diasbled:false
}

const addressSlice = createSlice({
    name:'address',
    initialState,
    reducers:{
        saveAddress:(state,action)=>{
            console.log("By the dispatch ",action.payload);
            state.fName=action.payload.fName;
            state.lName=action.payload.lName;
            state.locality=action.payload.locality;
            state.pincode=action.payload.pincode;
            state.state=action.payload.state;
            state.city=action.payload.city;
            state.country=action.payload.country;
            state.phone=action.payload.phone;
            state.diasbled=true;
        },
        editAddress:(state)=>{
            state.diasbled=false;
        }
    }
})

export default addressSlice.reducer;
export const {saveAddress,editAddress} = addressSlice.actions;