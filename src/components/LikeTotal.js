import React from 'react';

const LikeTotal = (props) => {
    
    return (
        <div>
            <button onClick={() => props.setTotalLikes(Math.max(0, props.totalLikes - 1))}>
                -
            </button>
            <p>{props.totalLikes}</p>
            <button onClick={() => props.setTotalLikes(props.totalLikes + 1)}>
                +
            </button>
        </div>
    );
};

export default LikeTotal;