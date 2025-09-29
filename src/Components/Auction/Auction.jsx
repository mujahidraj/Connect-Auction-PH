import React, { useEffect, useState } from 'react';
import AuctionItems from '../AuctionItems/AuctionItems';

const Auction = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('Items.json').then(res => res.json()).then(data => setItems(data)

        )
    }, [])

    const handleGrid =()=>{
        
    }

    return (

        <div>
            <div>
                <button onClick={handleGrid}></button>
                <button></button>
            </div>
            <div className='grid lg:grid-cols-2  max-md:grid-cols-1 gap-5'>
                {items.map(auctionItems => <AuctionItems key={auctionItems.id} auctionItems={auctionItems}></AuctionItems>)}
            </div>
        </div>
    );
};

export default Auction;