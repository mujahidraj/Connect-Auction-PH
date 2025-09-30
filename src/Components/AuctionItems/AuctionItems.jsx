import { Suspense } from "react";
import { ImHammer2 } from "react-icons/im";
import { toast } from "react-toastify";


const AuctionItems = ({ auctionItems ,handleBid ,handleEnable}) => {


    return (
        <div className=''>
            <div className="card bg-base-100 w-full border-[1px] shadow-sm " >
                <figure>
                    <Suspense fallback={<h2>Image are loading</h2>}>
                        <img
                        src={auctionItems.image} className='w-full h-64 object-cover'
                        alt="items" />
                    </Suspense>
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
                        <button className={` btn btn-primary text-xl`} disabled={handleEnable(auctionItems.id) } onClick={()=>{
                    
                        handleBid(auctionItems);
                        toast.success(`${auctionItems.title} has been added to favourite list!`)
                        }
                        }>
                            Bid Now <ImHammer2 className={`${handleEnable(auctionItems.id)?"-rotate-45":""}`} size={25}/>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionItems;