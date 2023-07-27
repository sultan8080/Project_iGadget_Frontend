import React from 'react';

function Rating() {
    return (
        <div className='flex ml-8'>
            <div className='text-3xl'>
                <strong> 
                4,5/5
                </strong>
             
            </div>

        <div className="rating rating-lg">
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
      </div>

      </div>
    );
};

export default Rating;
