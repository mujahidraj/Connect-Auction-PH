import React from 'react';
import hero from '../../assets/Banner-min.jpg'
import { FaArrowRight } from "react-icons/fa";
import './HeroSection.css'


const HeroSection = () => {
    return (
        <div className='relative sora-font w-full'>
            <img src={hero} className='h-[600px] w-full object-cover' alt="" />
            <div className='absolute top-40 ml-20  text-white'>
                <h3 className='font-semibold sm:text-5xl text-2xl  sm:my-7'>Bid on Unique Items from <br /> Around the World</h3>
                <p className='sm:text-2xl text-lg font-light opacity-80 my-5'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                <button className='px-8 py-4 bg-white text-black rounded-4xl font-semibold flex items-center gap-3  '>Explore Auctions <FaArrowRight size={22} className='hover:bg-amber-400 hover:p-1 hover:rounded-full duration-300' />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;