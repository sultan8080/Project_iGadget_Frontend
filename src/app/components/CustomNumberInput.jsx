import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../redux-store/cartSlice';

const CustomNumberInput = ({ product }) => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.cart.find(item => item.id === product.id));

  const decrement = () => {
    if (value > 1) {
      dispatch(decrementQuantity(product.id));
      setValue((prevValue) => prevValue - 1);
    }
  };

  const increment = () => {
    dispatch(incrementQuantity(product.id));
    setValue((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    setValue(cartItem.quantity);
  }, [cartItem]);

  return (
    <div className="custom-number-input h-10 w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className="text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={decrement}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
          name="custom-input-number"
          value={value}
          readOnly
        />
        <button
          data-action="increment"
          className="text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer"
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default CustomNumberInput;
