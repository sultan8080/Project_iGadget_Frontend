import React from 'react';


    const ScrollTopButton = () => {
        
        return (
            
            <div className="flex justify-end mb-4">
        <button id="scrollToTopButton" onClick={topFunction} className='scroll-smooth'>
            <img src="src/app/assets/scroll_top.png" className="w-14"/>
        </button>
        </div>
    );
    }


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default ScrollTopButton;