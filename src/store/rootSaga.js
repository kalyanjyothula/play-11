import { all } from 'redux-saga/effects';
import { AppSaga } from '../container/App/saga';

export default function* watcherSaga() {
  yield all([...AppSaga]);
  // yield takeLatest(getUser.type, getUserSaga);
}
