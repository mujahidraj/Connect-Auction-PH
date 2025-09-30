import { useState } from 'react'
import './App.css'
import Auction from './Components/Auction/Auction'
import Favourite from './Components/Favourite/Favourite'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/Hero-Section/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import { Bounce, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
    />
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Hero Section */}
      <HeroSection></HeroSection>
      {/* auction table */}
      <div className='sm:mx-20 my-25'>
        <h2 className='text-[#0E2954] text-4xl text-center font-semibold mb-5'>Active Auctions</h2>
        <p className='opacity-80 text-center text-xl'>Discover and bid on extraordinary items</p>
        {/* data section */}
        <div className='flex my-10 sm:flex-row gap-10 flex-col-reverse '>
          <div className='sm:w-[70%] mx-2'>
            <Auction handleBid={handleBid} handleEnable={handleEnable} ></Auction>
          </div>
          <div className='sm:w-[30%] mx-2'>
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
