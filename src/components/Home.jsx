import React from 'react';

const Home = () => {
    return (
        <>
            <div className="common-pages">
                Home
            </div>
            <div className="makepost">
                <div id="textarea">
                    <img className='image'></img>
                    <textarea name="text" placeholder="What's happening?"></textarea>
                </div>
                <div className='post'><button>Post</button></div>
            </div>
        </>
    );
};
export default Home;