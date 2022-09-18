import React from 'react';

const BeautifulScreen = (props) => {
    return (
        <div className='BeautifulScreen'>
            <div className='result'>

                <h1>{props.result}</h1>
            </div>
            <div className='text'>
                <h3>{props.text}</h3>
            </div>
        </div>
    )
}

export default BeautifulScreen;