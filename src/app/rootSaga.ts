import {all,fork} from 'redux-saga/effects';
import watchGetBooks from '../features/book/booksSaga';
import watchGetBookDetails from '../features/bookDetail/bookDetailSaga';

const rootSaga=function *(){
    yield all([
        fork(watchGetBooks),
        fork(watchGetBookDetails)
    ]);
}

export default rootSaga;