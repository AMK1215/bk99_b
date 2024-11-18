import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchInput = () => {
  return (
    <div className='my-3 py-1 px-2 rounded-2 searchContainer d-flex align-items-center   justify-content-between'>
      <input placeholder='Search' />
      <BiSearch/>
    </div>
  )
}

export default SearchInput
