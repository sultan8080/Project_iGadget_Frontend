import React from 'react';

const Product = () => {
    return (
      <>
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
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                </div>

                <p className="text-base text-justify text-slate-700 mt-6">
                    Découvrez le PixelWave 14 ! Avec son design élégant et ses fonctionnalités avancées, il vous permettra de rester connecté en toute simplicité. Profitez d'un écran de qualité supérieure, d'une batterie durable et d'un appareil photo haute résolution pour capturer tous les moments importants de votre vie. Découvrez une nouvelle manière de communiquer !
                </p>
                    <div className='flex  mt-8 '>
                        <p>
                             <b>
                        Couleurs disponibles
                        </b>
                            </p>
                            <div className='ml-4 align '>
                                <input type="radio" name="radio-2" className="radio radio-primary" checked />
                                <input type="radio" name="radio-2" className="radio radio-secondary" />
                            </div>
                    </div>
                <div className="w-full flex-none text-xl font-medium text-slate-700 mt-8">
                    En stock
                </div>
                <div className="text-2xl font-semibold text-slate-700">
                    1 329 €
                </div>
                <div className="flex justify-center ">
                    <button className="h-10 px-6 btn-third rounded-3xl " type="button">
                        Ajouter au panier
                    </button>
                </div>
                
            </form>

        </div>
        <div className="flex flex-row mt-2">
        <img src="src/app/assets/test/PixelWave_blanc_2.png" alt="photo supp produit" className="inset-0 w-52 h-56 object-cover" loading="lazy" />
    </div>
    <div className='ml-10'>
            <h2>
                Description
            </h2>
            <p className='mt-8 mb-8'>
            6,1″ Écran Super Retina XDRnote | Appel d’urgence par satellite |
             Détection des accidents | Double appareil photo avancé | <br></br>Objectif principal 12 Mpx | 
             Ultra grand‑angle Photonic Engine pour des couleurs et des détails incroyables | <br></br>
             Caméra avant TrueDepth avec mise au point automatique | Mode Action, pour des vidéos plus stables, <br></br>
             même en mouvement | Jusqu’à 26 heures de lecture vidéo | Puce A15 Bionic avec GPU 5 cœurs |<br></br> Connectivité cellulaire 5G ultra-rapide
            </p>
                </div>

    </>
    );
};

export default Product;