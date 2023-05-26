import React from "react";


function CardItemsLike(){
    return(<>
<div className="cardItems bg-white w-[250px] h-[300px] m-1 rounded-lg shadow">
    <div className="top flex justify-center">
        <img className="w-[125px] h-[200px] object-cover" src="src/app/assets/test/LuminX_bleu.png" alt="image1" />
    </div>
    <div className="bottom flex flex-col justify-center items-start p-3">
        <div className="title font-semibold">
            Lumin X
        </div>
        <div className="description mt-2 text-xs">
        Qui laborum enim optio corporis magnam. Et non quia numquam est dolor qui.
        </div>
    </div>
</div>

    </>)
}
export default CardItemsLike;