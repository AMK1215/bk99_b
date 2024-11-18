import React from 'react'
import { Dropdown } from 'react-bootstrap'
import mm from '../assets/img/mm.png'
import en from '../assets/img/en.png'

const LanguageDropdown = () => {
  return (
    <Dropdown>
    <Dropdown.Toggle className='border-0 px-1 px-lg-2 ' style={{background:'#38434D'}}  id="dropdown-basic">
        <img src={mm} className='flag' />
    </Dropdown.Toggle>

    <Dropdown.Menu className='langDropdown mt-5'>
      <Dropdown.Item  >
      <img src={mm} className='flag' />
       </Dropdown.Item>
      <Dropdown.Item  >
      <img src={en} className='flag' />
        </Dropdown.Item>
     </Dropdown.Menu>
  </Dropdown>
  )
}

export default LanguageDropdown
