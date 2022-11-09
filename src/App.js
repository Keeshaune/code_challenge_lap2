import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, Result } from './components'
import { getResult } from './actions'

function App() {

  const result = useSelector(state => state.result);
  const username = useSelector(state => state.username);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error)

  const dispatch = useDispatch()

  const search = searchTerm => dispatch(getResult(searchTerm))

  const renderResult = () => loading ? <p>Loading...</p> : <Result result ={result}/>

  return (
    <div >
      <h1>Hello Sean</h1>
      <SearchForm getResult={search}/>

      <h1>{username}</h1>

      {error ? <p>there was an error {error}</p> : renderResult() }
    </div>
  );
}

export default App;
