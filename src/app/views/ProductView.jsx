import React from 'react';
import Product from '../components/Product';
import ItemsLike from '../components/ItemsLike';
import CarouselItemsLike from '../components/CarouselItemsLike';

const ProductView = () => {
    return (
        <div>
            <Product />
            <ItemsLike />
            <CarouselItemsLike />
        </div>
    );
};

export default ProductView;