import {call, put} from 'redux-saga/effects'
import { setPost } from '../../actions/posts'
import {requestUserPost} from '../requests/posts'

export function* handleUserPosts (action) {
    try {
        const response = yield call(requestUserPost)
        const {data} = response
        yield put(setPost(data))
    }
    catch(error) {
        console.log(error)
    }
}