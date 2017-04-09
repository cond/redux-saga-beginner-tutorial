import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// Our worker Saga: will perform the async decrement task
export function* decrementAsync() {
    yield call(delay, 1000)
    yield put({ type: 'DECREMENT' })
}

// Our watcher Saga: spawn a new decrementAsync task on each DECREMENT_ASYNC
export function* watchDecrementAsync() {
    yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

export function* helloSaga() {
    console.log('Hello Sagas!')
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
	helloSaga(),
	watchIncrementAsync(),
	watchDecrementAsync()
    ]
}
