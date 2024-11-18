import React from 'react'
import Carousel from '../components/Carousel'
import HomeTabs from '../components/HomeTabs'
import SearchInput from '../components/SearchInput'
import AccountInfo from '../components/AccountInfo'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='p-2 p-sm-3'>
      <AccountInfo/>
      <Carousel/>
      <HomeTabs/>
      <Footer/>

     </div>
  )
}

export default HomePage
