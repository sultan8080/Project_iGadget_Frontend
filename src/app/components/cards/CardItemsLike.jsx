import React from "react";


function CardItemsLike(){
    return(<>
<div className="cardItems bg-white w-[200px] h-[240px] m-1 rounded-lg shadow">
    <div className="top p-3">
        <img className="w-[150px] h-[100px] object-cover" src="src/app/assets/test/MacBookPro_gris_3.png" alt="image1" />
    </div>
    <div className="bottom flex flex-col justify-center items-start p-3">
        <div className="title font-semibold">
            MacBookPro
        </div>
        <div className="description text-xs">
        Qui laborum enim optio corporis magnam. Et non quia numquam est dolor qui.
        </div>
    </div>
</div>

    </>)
}
export default CardItemsLike;