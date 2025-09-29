import { useState } from 'react'
import './App.css'
import Auction from './Components/Auction/Auction'
import Favourite from './Components/Favourite/Favourite'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/Hero-Section/HeroSection'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [bidItems, getItems] = useState([])

  

 
     


  const handleBid = (auctionItems) => {
    const newItems = [...bidItems, auctionItems]
    getItems(newItems)
    
  }



  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Hero Section */}
      <HeroSection></HeroSection>
      {/* auction table */}
      <div className='mx-20 my-25'>
        <h2 className='text-[#0E2954] text-4xl font-semibold mb-5'>Active Auctions</h2>
        <p className='opacity-80 text-xl'>Discover and bid on extraordinary items</p>
        {/* data section */}
        <div className='flex my-10'>
          <div className='w-[70%]'>
            <Auction handleBid={handleBid}></Auction>
          </div>
          <div className='w-[30%]'>
            <Favourite bidItems={bidItems}></Favourite>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer></Footer>
    </>
  )
}

export default App
