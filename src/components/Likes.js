import React, { useState } from 'react';

const Likes = (props) => {
    const [likes, setLikes] = useState(0)

    const incrementLikes = () => {
        setLikes((prev) => prev + props.increment)
        props.setSum((prev) => prev + props.increment)
    }

    const decrementLikes = () => {
        setLikes((prev) => prev >= 1 ? prev - props.increment : 0)
        props.setSum((prev) => (likes >= 1) ? prev - props.increment : prev)

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