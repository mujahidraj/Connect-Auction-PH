import React from 'react';
import { CiHeart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";



const Favourite = ({ bidItems,handleRemove }) => {

    
    const totalCost=()=>{
        let sum=0

    for(const bidItem of bidItems){
        sum+=bidItem.currentBidPrice;
        
    }
    return sum
    }


    return (
        <div>
            <div>
                <h3 className='flex text-3xl font-medium text-[#0E2954] gap-3 items-center justify-center mb-5'>
                    <CiHeart />

                    Favourite Items</h3>
                <hr />
                {
                    bidItems == "" ? <div>
                        <h3 className='text-center text-xl font-bold mt-5'>No favourite yet</h3>
                        <p className='font-medium mb-5'>Click the heart icon on any item to add it to your favorites</p>
                    </div> :

                        <div className=' '>
                            {bidItems.map(item =>
                                <div className='flex my-4 gap-3 border-[1px] rounded-xl p-2'>
                                    <img src={item.image} className='w-20 h-20 object-cover rounded-lg' alt="" />
                                    <div className='flex flex-col w-[80%]'>
                                        <h3 className='font-bold text-lg'>{item.title}</h3>


                                        <div className='flex gap-2 font-medium'>
                                            <p>{item.currentBidPrice}USD</p>
                                            <p>Bid:{item.bidsCount}</p>
                                        </div>

                                    </div>
                                    <IoMdClose size={35} onClick={()=>handleRemove(
                                    item.id)}/>
                                </div>
                            )}
                        </div>


                }
                <hr />
                <div className='flex text-xl font-bold justify-between mt-5'>
                    <h3>Total bid cost</h3>
                    <h3>{totalCost()}USD</h3>
                </div>


            </div>
        </div>
    );
};

export default Favourite;