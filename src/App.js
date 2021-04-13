import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { fetchPost } from './redux/actions/posts';

function App() {
  const {post} = useSelector(state=> state.posts)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPost())
  }, [dispatch])
  if(!post) {
    return
  }
  return (
    <div className="App">
      <header>
        <h1>React demo</h1>
      </header>
      {post.map(item=> {
        return (
          <div key={item.id}>
            <p>{item.body}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
