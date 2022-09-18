import React from 'react';

const GreatOperationButton = (props) => {

    

    return (
        <div onClick={() => {props.handleClick(props.operation)}} className='GreatOperationButton'>
            <h1>{props.operation}</h1>
        </div>
    );
};

export default GreatOperationButton;