import axios from 'axios'

export function requestUserPost () {
    return axios.request(
        {
            method: "get",
            url: 'https://jsonplaceholder.typicode.com/posts'
        }
    )
}