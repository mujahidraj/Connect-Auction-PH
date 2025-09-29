import React from 'react';

const AuctionItemsTable = ({items}) => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr className="bg-gray-50 border-b border-gray-200">
        <th className="py-3 px-4 text-left font-semibold text-gray-700">Image</th>
        <th className="py-3 px-4 text-left font-semibold text-gray-700">Items</th>
        <th className="py-3 px-4 text-left font-semibold text-gray-700">Current Bid</th>
        <th className="py-3 px-4 text-left font-semibold text-gray-700">Time Left</th>
        <th className="py-3 px-4 text-left font-semibold text-gray-700">Bid Now</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td><img src={item.image} className='w-16 h-16 ' alt="" /></td>
              <td className="py-3 px-4">{item.title}</td>
              <td className="py-3 px-4">{item.currentBidPrice} USD</td>
              <td className="py-3 px-4">{item.timeLeft} left</td>
              <td className="py-3 px-4">💶</td>
            </tr>
          ))}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AuctionItemsTable;