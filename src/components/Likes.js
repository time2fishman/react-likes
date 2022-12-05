import React, { useState } from 'react';
import LikeTotal from './LikeTotal';

const Likes = () => {
    const [totalLikes, setTotalLikes] = useState(0)
    const [totalLikes3, setTotalLikes3] = useState(0)

    return (
        <div>
            <LikeTotal totalLikes={totalLikes} setTotalLikes={setTotalLikes} totalLikes3={totalLikes3} setTotalLikes3={setTotalLikes3} />
        </div>
    );
};

export default Likes;