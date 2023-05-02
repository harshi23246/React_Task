import {takeLatest,put} from 'redux-saga/effects';
import { BookType, getBooksError, getBooksRequest, getBooksSuccess } from './bookSlice';
import axios from 'axios';
import { AxiosResponse } from "axios";

function* booksSaga(){
    try {
        const response:AxiosResponse<BookType[]>=yield axios.get('http://localhost:3000/books');
        yield put(getBooksSuccess(response.data)); 
    } catch (error) {
        yield put(getBooksError(error));
    }
}

function* watchGetBooks(){
    yield takeLatest(getBooksRequest,booksSaga)
}

export default watchGetBooks;