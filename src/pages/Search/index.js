import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, User } from '../../components'
import { getResult } from '../../actions'

const Search = () => {

  const data = useSelector(state => state.data);
  // const repos = useSelector(state => state.repos);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error)

  const dispatch = useDispatch()

  const search = searchTerm => dispatch(getResult(searchTerm))

  const renderUser = () => loading ? <p>Loading...</p> : <User data={data} />
  return (
    <>
      <SearchForm getResult={search} />
      <div id="repos">
        {error ? <p>Github Account Does Not Exist</p> : renderUser() }
      </div>
    </>
  )
}

export default Search
