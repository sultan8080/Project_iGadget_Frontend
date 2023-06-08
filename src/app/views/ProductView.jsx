import React from 'react';
import Product from '../components/Product';
import ItemsLike from '../components/ItemsLike';
import CarouselItemsLike from '../components/CarouselItemsLike';
import ScrollTopButton from '../components/layouts/ScrollTopButton';

const ProductView = () => {
    return (
        <div>
            <Product />
            <ItemsLike />
            <CarouselItemsLike />
            <ScrollTopButton />
        </div>
    );
};

export default ProductView;