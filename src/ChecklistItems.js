import React from 'react';
import Goods from './Goods'

function ChecklistItems(props) {



    return(
        <div>
            <div>
                Search Bar
            </div>
            <div>
                <p>Name</p>
                <p>Price</p>
                <Goods />
                <Goods />
            </div>
        </div>
    )
}

export default ChecklistItems;