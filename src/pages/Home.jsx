import React from 'react'
 import HomeTabs from '../components/HomeTabs'
import SearchInput from '../components/SearchInput'
 import Footer from '../components/Footer'
import LanguageDropdown from '../components/LanguageDropdown'
import Marquee from '../components/Marquee'
import Banner from '../components/Banner'
import AdsBanner from '../components/AdsBanner'

const HomePage = () => {
  return (<>
    <div className="d-flex align-items-center">
      <AdsBanner/>
        <Marquee  />
        <LanguageDropdown/>
      </div>
    <div className='px-2 pt-0 pb-2 px-sm-3 pb-sm-3'>
      <Banner/>
      <HomeTabs/>
       </div>
       <Footer/>
     </>
  )
}

export default HomePage
