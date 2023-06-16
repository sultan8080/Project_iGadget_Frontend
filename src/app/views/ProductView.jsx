import React from 'react';
import Product from '../components/Product';
import ItemsLike from '../components/ItemsLike';
import CarouselItemsLike from '../components/CarouselItemsLike';
import ScrollTopButton from '../components/layouts/ScrollTopButton';
import Rating from '../components/rating';
import Cards from '../components/cards';
import Itemsliketwo from '../components/Itemsliketwo';
const ProductView = () => {
    return (
        <div>
            <Product />
            <ItemsLike />
            <Rating />
            <Cards />
            <Itemsliketwo/>
            <CarouselItemsLike />
            <ScrollTopButton />
        </div>
    );
};

export default ProductView;