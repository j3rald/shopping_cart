import {
  all,
  call,
  fork,
  put,
  takeEvery,
} from 'redux-saga/effects';
import apiGenerator from '../utils/apiGenerator';

// function* loadProducts({ meta }) {
//   try {
//     const res = yield call(
//       axiosInstance.get,
//       '660/products',
//     );
//     yield put({
//       type: 'LOAD_PRODUCTS_SUCCESS',
//       payload: res,
//       meta,
//     });
//   } catch (error) {
//     yield put({
//       type: 'LOAD_PRODUCTS_FAIL',
//       payload: error,
//       meta,
//     });
//   }
// }

function* loadProductsRequest() {
  yield takeEvery(
    'LOAD_PRODUCTS_REQUEST',
    apiGenerator,
  );
}

export default function* rootProductsSaga() {
  yield all([fork(loadProductsRequest)]);
}
