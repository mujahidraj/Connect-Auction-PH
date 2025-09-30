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

const handleRemove=(id)=>{
const remaining= bidItems.filter(item=>item.id !==id)  

return getItems(remaining)
}



const handleEnable =(id)=>{
  if(
    bidItems.find(item=>item.id===id)
  ){
    return true
  }
  else{
    return false
  }
  
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
        <div className='flex my-10 lg:flex-row max-sm:flex-col-reverse '>
          <div className='w-[70%]'>
            <Auction handleBid={handleBid} handleEnable={handleEnable} ></Auction>
          </div>
          <div className='w-[30%]'>
            <Favourite bidItems={bidItems} handleRemove={handleRemove} ></Favourite>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer></Footer>
    </>
  )
}

export default App
