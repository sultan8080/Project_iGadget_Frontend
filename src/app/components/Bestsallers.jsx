import React from 'react';

const Bestsallers = () => {
    return (
        /**1er block */
        <main className="bestsallers max-w-[1800px] mx-auto">
            <div className="titre ">
                <h1 className="text-center uppercase font-bold mt-2"> Les <span className=" text-[#F6B20C]"> Bestsellers </span></h1>
                <h4 className="text-center mt-2">Nos produits ont du succès !</h4>
            </div>
            <div className=" grid grid-cols-2 ">
                <div className="image bg-[url('./src/app/assets/produits/autre/rectangle_orange_gauche.svg')] bg-no-repeat flex justify-center bg-[length:31%] bg-[left_calc(40%)_top_calc(42px)]">
                    <img src="./src/app/assets/produits/téléphones/AuroraMax_blanc.png" alt="" width={600} />

                </div>
                <div className="title pt-36">
                    <div className=" title flex gap-24 pt-4 pb-10">
                        <hr className="w-2/4 h-1 my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700" width={600} />
                        <h3 className="font-bold text-end mr-36 pb-5"> PixelWave14</h3>
                    </div>
                    <p className="mr-36 text-justify pt-50 pb-5">Découvrez le PixelWave 14 ! Avec son design élégant et ses fonctionnalités avancées, il vous permettra de rester connecté en toute simplicité. Profitez d'un écran de qualité supérieure, d'une batterie durable et d'un appareil photo haute résolution pour capturer tous les moments importants de votre vie. Découvrez une nouvelle manière de communiquer !.</p>
                    <div className="button flex justify-end mr-36">
                        <button
                            type="button"
                            className="text-white bg-[#F6B20C] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                        >
                            Je shop
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#F6B20C] focus:outline-none bg-white rounded-full border border-[#F6B20C] focus:z-10 focus:ring-4"
                        >
                            Détails du produit
                        </button>
                    </div>
                </div>
            </div>
            <main className="block2">
                <div className=" grid grid-cols-2 ">

                    <div className="title pt-10">
                        <div className="title">
                            <div className=" title flex gap-24 pt-4 pb-10  flex-row-reverse ml-28">
                                <hr className="w-2/4 h-1 my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700" width={700} />
                                <h3 className="font-bold text-end pb-5"> Nexus Watch</h3>
                            </div>
                            <p className="text-justify pt-50 pb-5  pl-36">Découvrez la Nexus Watch pour les personnes modernes et actives ! Grâce à son design épuré, vous pouvez suivre votre activité physique, recevoir des notifications de vos applications préférées et rester connecté avec vos contacts en un seul coup d'œil. Ne manquez jamais un appel important ou une réunion. Profitez dès maintenant des avantages de la technologie portable.</p>
                        </div>
                        <div className="button flex pl-36 ">
                            <button
                                type="button"
                                className="text-white bg-[#F6B20C] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                            >
                                Je shop
                            </button>
                            <button
                                type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#F6B20C] focus:outline-none bg-white rounded-full border border-[#F6B20C] focus:z-10 focus:ring-4"
                            >
                                Détails du produit
                            </button>
                        </div>
                    </div>
                    <div className="image bg-[url('./src/app/assets/produits/autre/rectangle_orange_droite.svg')] bg-no-repeat flex justify-center bg-[length:31%] bg-[left_calc(61%)_top_calc(0px)]">
                        <img src="./src/app/assets/produits/montres/Watch_blanc.png" alt="" width={450} />

                    </div>
                </div>
            </main>
            <div className=" grid grid-cols-2 ">
                <div className="image bg-[url('./src/app/assets/produits/autre/rectangle_orange_gauche.svg')] bg-no-repeat flex justify-center bg-[length:31%] bg-[left_calc(40%)_top_calc(42px)]">
                    <img src="./src/app/assets/produits/audios/SoundScape_blanc.png" alt="" width={600} />

                </div>
                <div className="title pt-36">
                    <div className=" title flex gap-24 pt-4 pb-10">
                        <hr className="w-2/4 h-1 my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700" width={600} />
                        <h3 className="font-bold text-end mr-36 pb-5"> SoundScape</h3>
                    </div>
                    <p className="mr-36 text-justify pt-50 pb-5">Découvrez notre dernier casque sans fil SoundScape ! Profitez d'un son cristallin et d'une liberté de mouvement totale grâce à sa technologie Bluetooth. Écoutez votre musique préférée ou prenez des appels en toute simplicité. Avec son design moderne et sa batterie longue durée, ce casque est le compagnon parfait pour vos déplacements. Commandez le vôtre dès maintenant !</p>
                    <div className="button flex justify-end mr-36">
                        <button
                            type="button"
                            className="text-white bg-[#F6B20C] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                        >
                            Je shop
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#F6B20C] focus:outline-none bg-white rounded-full border border-[#F6B20C] focus:z-10 focus:ring-4"
                        >
                            Détails du produit
                        </button>
                    </div>
                </div>
            </div>
            <div className="button flex  justify-center">
                <button
                    type="button"
                    className="text-white bg-[#87D9D4] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 "
                >
                    Voir tout nos produits
                </button>

            </div>
        </main>
    );
};

export default Bestsallers;