import React from 'react';


const AmazingNumberButton = (props) => {

    // let handleClick = () => {
        
        
    //     props.addToTextParent({props,number});
    //     console.log("click détecté");
    //   }

    return (
        <div onClick={()=> props.handleClick(props.number)} className='AmazingNumberButton'>

            <h1>{props.number}</h1>
        </div>
    );
};

export default AmazingNumberButton;