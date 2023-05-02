import {configureStore} from '@reduxjs/toolkit';
import bookSliceReducer from '../features/book/bookSlice';
import cartSliceReducer from '../features/cart/cartSlice';
import orderSliceReducer from '../features/order/orderSlice';
import titleSliceReducer from '../features/title/titleSlice';
import addressSliceReducer from '../features/address/addressSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import bookDetailSliceReducer from '../features/bookDetail/bookDetailSlice';

const sagaMiddleware=createSagaMiddleware();

const store=configureStore({
    reducer:{
        book:bookSliceReducer,
        title:titleSliceReducer,
        cart:cartSliceReducer,
        order:orderSliceReducer,
        address:addressSliceReducer,
        bookDetail:bookDetailSliceReducer
    },
    middleware:[sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;