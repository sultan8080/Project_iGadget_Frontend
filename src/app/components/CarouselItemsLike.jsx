import React from 'react';
import CardItemsLike from './cards/CardItemsLike';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function CarouselItemsLike() {

const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
}

    return (
        <div id="content" className='CarouselItems p-4 flex max-w-full items-center justify-center overflow-x-auto scroll-smooth relative'>
            <button className='p-4' onClick={scrollLeft}><FiChevronLeft /></button>
            <div className='p-4'><CardItemsLike /></div>
            <div className='p-4'><CardItemsLike /></div>
            <div className='p-4'><CardItemsLike /></div>
            <button onClick={scrollRight} className='p-4'><FiChevronRight /></button>
        </div>
    );
};

export default CarouselItemsLike;

