import { takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { getUser } from './redux';

// export function* getUserSaga(action) {
//   try {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     const { data } = yield call(axios, { method: 'GET', url });
//     // yield put(setUser({ ...data }));
//   } catch (error) {
//     console.log(error);
//   }
// }

export function* getMatches(action) {
  try {
    const url = 'https://crickapi.com/series/getMatchesForSeriesID';
    const { data } = yield call(axios, {
      method: 'POST',
      url,
      data: {
        sf: '1IR',
      },
    });
  } catch (error) {
    console.warn(error);
  }
}

export const AppSaga = [
  // takeLatest(getUser.type, getUserSaga)
];
