import React from 'react';

const Product = () => {
    return (
        <div className="flex font-sans">
            <div className="flex-none w-2/5 relative">
                <img src="src/app/assets/test/PixelWave_blanc.png" alt="photo produit" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-4xl font-semibold text-slate-900">
                        PixelWave 14
                    </h1>
                </div>
                <div className="flex mt-2">
                    <svg aria-hidden="true" className={`w-5 h-5 ${"" / 2 >= 1 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className={`w-5 h-5 ${"" / 2 >= 2 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className={`w-5 h-5 ${"" / 2 >= 3 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className={`w-5 h-5 ${"" / 2 >= 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className={`w-5 h-5 ${"" / 2 >= 5 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>

                <p className="text-base text-justify text-slate-700 mt-6">
                    Découvrez le PixelWave 14 ! Avec son design élégant et ses fonctionnalités avancées, il vous permettra de rester connecté en toute simplicité. Profitez d'un écran de qualité supérieure, d'une batterie durable et d'un appareil photo haute résolution pour capturer tous les moments importants de votre vie. Découvrez une nouvelle manière de communiquer !
                </p>
                <div className="w-full flex-none text-xl font-medium text-slate-700 mt-8">
                    En stock
                </div>
                <div className="text-2xl font-semibold text-slate-700">
                    1 329 €
                </div>
                <div className="flex justify-end mt-4">
                    <button className="h-10 px-6 btn-third rounded-3xl" type="button">
                        Ajouter au panier
                    </button>
                </div>
                <div className="flex flex-row mt-2">
                    <img src="src/app/assets/test/PixelWave_blanc_2.png" alt="photo supp produit" className="inset-0 w-52 h-56 object-cover" loading="lazy" />
                </div>
            </form>

        </div>
    );
};

export default Product;