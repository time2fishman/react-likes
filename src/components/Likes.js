import React, { useState } from 'react';

const Likes = ({ increment, setSum }) => {
    const [likes, setLikes] = useState(0)

    const incrementLikes = () => {
        setLikes((prev) => prev + increment)
        setSum((prev) => prev + increment)
    }

    const decrementLikes = () => {
        setLikes((prev) => prev >= 1 ? prev - increment : 0)
        setSum((prev) => (likes >= 1) ? prev - increment : prev)

    }
    return (
        <div className='counter-container'>
            <button className='decrement-button' onClick={decrementLikes}>
                -
            </button>
            <p className='total-likes'>{likes}</p>
            <button className='increment-button' onClick={incrementLikes}>
                +
            </button>
        </div>
    );
};

export default Likes;