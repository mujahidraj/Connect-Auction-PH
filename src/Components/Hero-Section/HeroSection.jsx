import React from 'react';
import hero from '../../assets/Banner-min.jpg'
import { FaArrowRight } from "react-icons/fa";
import './HeroSection.css'


const HeroSection = () => {
    return (
        <div className='relative w-dvw sora-font'>
            <img src={hero} className='h-[600px] w-dvw object-cover' alt="" />
            <div className='absolute lg:top-40 max-md: top-30 ml-10  text-white'>
                <h3 className='font-semibold text-5xl my-7'>Bid on Unique Items from <br /> Around the World</h3>
                <p className='text-2xl font-light opacity-80 my-5'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                <button className='px-8 py-4 bg-white text-black rounded-4xl font-semibold flex items-center gap-3  '>Explore Auctions <FaArrowRight size={22} className='hover:bg-amber-400 hover:p-1 hover:rounded-full duration-300' />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;