import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, Result } from '../../components'
import { getResult } from '../../actions'

const Search = () => {

  const result = useSelector(state => state.result);
  const username = useSelector(state => state.username);
  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error)

  const dispatch = useDispatch()




  const search = searchTerm => dispatch(getResult(searchTerm))

  console.log("********", data)
  // const renderResult = () => loading ? <p>Loading...</p> : <Result result={result} />

  return (
    <>
      <SearchForm getResult={search} />
      {/* <button onClick={dispatchload}> Press </button> */}
      <h1>{username}</h1>


      {/* {error ? <p>there was an error {error}</p> : renderResult() } */}
    </>
  )
}

export default Search
