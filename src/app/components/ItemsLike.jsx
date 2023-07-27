import React from 'react';

const ItemsLike = () => {
    return (
        <div className="flex font-sans">
            <div className="flex-none relative">
                <h4 className="flex-auto items-center p-6">
                    <strong>  
                 Donnez votre avis !
                 </strong>
                </h4>
            </div>
            <div className="flex-auto p-12 items-end">
                <hr className="border-solid border-2 border-gray-700" />
            </div>
        </div>
    );
};

export default ItemsLike;