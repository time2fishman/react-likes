import React, { useState } from 'react';

const Likes = () => {
    const [totalLikes, setTotalLikes] = useState(0)
    console.log(totalLikes);

    return (
        <div>
            <button onClick={() => setTotalLikes(totalLikes + 1)}>{totalLikes}
            </button>
        </div>
    );
};

export default Likes;