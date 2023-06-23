import React from 'react';

function Cards() {
    return (
     <div className='flex justify-between w-full'>

        <div className="card w-96  bg-white shadow-xl text-primary-content ml-20">
            <div className="card-body">
                <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={"https://www.ifj.org/fileadmin/user_upload/pakistan.JPG"} />  
                        </div>
                            <div className='ml-4'>
                               <b><p className='text-zinc-950'>Sultan</p></b>  
                                <div className="rating rating-xs ">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>  
                            </div>    
                </div>
                    <p className='ml-8 mt-4 text-zinc-950'><b>Tres bien</b></p>
                    <p className='ml-8 text-zinc-950'> Excellent rapport qualité/prix Polyvalence incroyable</p>
                 <div className='flex mt-4'> 
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className='text-green-600'> Achat verifié</p> 
                 </div>
                        <div className="card-actions ">
                        Avis posté le 19/04/2023
                        </div>
            </div>
        </div>

        <div className="card w-96  bg-white shadow-xl text-primary-content ">
            <div className="card-body">
                <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={"https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} />  
                        </div>
                            <div className='ml-4'>
                               <b><p className='text-zinc-950'>Antoine</p></b>  
                                <div className="rating rating-xs ">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>  
                            </div>    
                </div>
                    <p className='ml-8 mt-4 text-zinc-950'><b>Tres bien</b></p>
                    <p className='ml-8 text-zinc-950'> Excellent rapport qualité/prix Polyvalence incroyable</p>
                 <div className='flex mt-4'> 
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className='text-green-600'> Achat verifié</p> 
                 </div>
                        <div className="card-actions ">
                        Avis posté le 19/04/2023
                        </div>
            </div>
        </div>



        <div className="card w-96  bg-white shadow-xl text-primary-content mr-20">
            <div className="card-body">
                <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={"https://images.unsplash.com/photo-1633002239926-181ca9b48a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} />  
                        </div>
                            <div className='ml-4'>
                               <b><p className='text-zinc-950'>Manon</p></b>  
                                <div className="rating rating-xs ">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>  
                            </div>    
                </div>
                    <p className='ml-8 mt-4 text-zinc-950'><b>Tres bien</b></p>
                    <p className='ml-8 text-zinc-950'> Excellent rapport qualité/prix Polyvalence incroyable</p>
                 <div className='flex mt-4'> 
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className='text-green-600'> Achat verifié</p> 
                 </div>
                        <div className="card-actions ">
                        Avis posté le 19/04/2023
                        </div>
            </div>
        </div>

     </div>
    );
};

export default Cards;
