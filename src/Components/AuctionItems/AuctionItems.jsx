import React from 'react';

const AuctionItems = ({ auctionItems }) => {
    return (
        <div className=''>
            <div className="card bg-base-100 w-96 border-[1px] mx-4 shadow-sm " >
                <figure>
                    <img
                        src={auctionItems.image} className='w-96 h-64 object-cover'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{auctionItems.title}</h2>
                    <p>{auctionItems.description}</p>

                       <div className='flex gap-5 justify-between my-4'>
                        <h3 className='text-lg '><span className='text-red-500'>{auctionItems.timeLeft} left</span></h3>
                        <h3 className='text-lg '><span className='text-red-500'>{auctionItems.bidsCount}</span> Bids already</h3>
                       </div>


                    <div className="card-actions justify-between">
                        <h3 className='text-lg'>Bid : <span className='text-red-500'>{auctionItems.currentBidPrice}</span> USD</h3>
                        <button className="btn btn-primary">Bid Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionItems;