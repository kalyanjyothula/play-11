import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from './combineReducer';
import watcherSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(watcherSaga);

export default store;
