import { createSlice } from "@reduxjs/toolkit";

export type BookType={
    id:string
    title:string,
    author:string,
    description:string,
    isbn:string,
    pageCount:number,
    averageRating:number,
    ratingsCount:number,
    smallThumbnail:string,
    thumbnail:string,
    price:number
}

type InitialState={
    loading:boolean,
    books:BookType[],
    error:string
}

const initialState : InitialState={
    loading:false,
    books:[],
    error:''
}

// export const fetchBooks=createAsyncThunk('book/fetchBooks',()=>{
//     return axios.get('http://localhost:3000/books')
//     .then(response=>{
//         console.log("Response data is",response.data);
//         return response.data;
//     })
// });

const bookSlice=createSlice({
    name:'book',
    initialState,
    reducers:{
        getBooksRequest:(state)=>{
            state.loading=true;
        },
        getBooksSuccess:(state,action)=>{
            state.loading=false;
            state.books=action.payload;
            state.error=''
        },
        getBooksError:(state,action)=>{
            state.loading=false;
            state.books=[];
            state.error=action.payload.error.message || 'Something Went wrong';
        }

    },
    // extraReducers:(builder)=>{
    //     builder.addCase(fetchBooks.pending,(state)=>{
    //         state.loading=true
    //     })
    //     builder.addCase(fetchBooks.fulfilled,(state,action)=>{
    //         state.loading=false;
    //         state.books=action.payload;
    //         state.error=''
    //     })
    //     builder.addCase(fetchBooks.rejected,(state,action)=>{
    //         state.loading=false;
    //         state.books=[];
    //         state.error=action.error.message || 'Something Went wrong';
    //     })
    // }
})

export const {getBooksRequest,getBooksSuccess,getBooksError}=bookSlice.actions;

export default bookSlice.reducer;
