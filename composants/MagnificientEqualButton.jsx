import React from 'react';

const MagnificientEqualButton = (props) => {

    

    return (
        <div onClick={()=> props.handleClick()} className='MagnificientEqualButton'>
            <h1>=</h1>
        </div>
    );
};

export default MagnificientEqualButton;