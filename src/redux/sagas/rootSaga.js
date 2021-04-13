import { takeLatest } from 'redux-saga/effects'
import {FETCH_POST} from '../actions/posts'
import { handleUserPosts } from './handlers/posts'

export function* watcherSaga(){
    yield takeLatest(FETCH_POST, handleUserPosts)
}