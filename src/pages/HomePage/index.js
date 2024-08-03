import React from 'react'
import Header from '../../components/Header';
import HeaderDown from '../../components/HeaderDown';
import Footer from '../../components/Footer';


const index = () => {
  return (
    <div>
      <div className="sticky top-0">
      <Header/>
      <HeaderDown/>
      </div>
      HomePage
      <div className=' flex h-screen w-full flex-col items-center justify-center '>
        Contenu de la Home Page
        <p className='pt-36'>Content</p>
        <p className='pt-36'>Content</p>
        <p className='pt-36'>Content</p>
        <p className='pt-36'>Content</p>
        
      </div>
      <Footer/>
    </div>
  )
}

export default index
