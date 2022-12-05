import React from 'react';

const LikeTotal = (props) => {
    
    return (
        <div className='counter-container'>
            <button className='decrement-button' onClick={() => props.setTotalLikes(Math.max(0, props.totalLikes - 1))}>
                -
            </button>
            <p className='total-likes'>{props.totalLikes}</p>
            <button className='increment-button' onClick={() => props.setTotalLikes(props.totalLikes + 1)}>
                +
            </button>
        </div>
    );
};

export default LikeTotal;