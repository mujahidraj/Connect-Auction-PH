import React, { useEffect, useState } from 'react';
import AuctionItems from '../AuctionItems/AuctionItems';
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import AuctionItemsTable from '../AuctionItemsTable/AuctionItemsTable';



const Auction = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('Items.json').then(res => res.json()).then(data => setItems(data)

        )
    }, [])

    const [grid, setGrid] = useState(true)

    const handleGrid = () => {

        setGrid(!grid)
    }

    return (

        <div>
            <div className='flex gap-5 justify-center mb-10'>
                <button className={` border-[1px] p-2 hover:bg-slate-300 duration-300  active:bg-blue-700`} onClick={handleGrid}>

        {grid===true? <TfiLayoutGrid2 size={30} />:<GiHamburgerMenu size={30} />}</button>
            </div>
            <div className={`grid lg:grid-cols-2 ${grid===true? "visible":"hidden"}  max-md:grid-cols-1 gap-5 `}>
                {items.map(auctionItems => <AuctionItems key={auctionItems.id} auctionItems={auctionItems}></AuctionItems>)}
            </div>


            <div className={` ${grid===true? "hidden" :"visible"}   `}>
                <AuctionItemsTable items={items}></AuctionItemsTable>
            </div>
        </div>
    );
};

export default Auction;