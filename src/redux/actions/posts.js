export const FETCH_POST = "FETCH_POST"
export const fetchPost = () =>{
    return {
        type: FETCH_POST,
    }
}

export const setPost = (data) => {
    return {
        type: 'SET_POST',
        payload: data
    }
}