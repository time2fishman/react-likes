import React, { useState } from 'react';
import LikeTotal from './LikeTotal';

const Likes = () => {
    const [totalLikes, setTotalLikes] = useState(0)
    // console.log(totalLikes);

    return (
        <div>
            <LikeTotal totalLikes={totalLikes} setTotalLikes={setTotalLikes} />
        </div>
    );
};

export default Likes;