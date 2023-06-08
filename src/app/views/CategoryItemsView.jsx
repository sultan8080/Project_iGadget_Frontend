import React from 'react';
import CardItems from '../components/cards/CardItems';
import ScrollTopButton from './../components/layouts/ScrollTopButton';


const CategoryItemsView = () => {
    return (
        <div>
            <CardItems />
            <ScrollTopButton />
        </div>
    );
};

export default CategoryItemsView;