import React from 'react';

const Product = () => {
    return (
        <div class="flex font-sans">
            <div class="flex-none w-48 relative">
                <img src="" alt="photo produit" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                    <h1 class="flex-auto text-lg font-semibold text-slate-900">
                        PixelWave 14
                    </h1>
                    <div className="flex items-center mt-2">
                        <svg aria-hidden="true" className={`w-5 h-5 ${"" / 2 >= 1 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className={`w-5 h-5 ${"" / 2 >= 2 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className={`w-5 h-5 ${"" / 2 >= 3 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className={`w-5 h-5 ${"" / 2 >= 4 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className={`w-5 h-5 ${"" / 2 >= 5 ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>

                    <p class="text-sm text-slate-700">
                    Découvrez le PixelWave 14 ! Avec son design élégant et ses fonctionnalités avancées, il vous permettra de rester connecté en toute simplicité. Profitez d'un écran de qualité supérieure, d'une batterie durable et d'un appareil photo haute résolution pour capturer tous les moments importants de votre vie. Découvrez une nouvelle manière de communiquer !
                    </p>
                    <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        En stock
                    </div>
                    <div class="text-lg font-semibold text-slate-500">
                        1 329 €
                    </div>
                </div>

                <div class="flex space-x-4 mb-6 text-sm font-medium">
                    <div class="flex-auto flex space-x-4">
                        <button class="h-10 px-6 btn-red font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                            Ajouter au panier
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Product;