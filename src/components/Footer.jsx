import React from 'react';
import Logo from "../assets/images/Logo-Automacao-2000.png";

const Footer = () => {
    return (
        <footer className="p-2 bg-white md:p-8 lg:p-10 dark:bg-red-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="h-12 mr-2" src={Logo} alt="Logo" />
                </a>
                <p className="my-6 text-gray-500 dark:text-gray-400">O nosso diferencial é poder oferecer a melhor solução para cada cliente.</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">

                    {/* Informações de endereços */}
                    <li className="mb-4 md:mb-6">
                        <div className="mb-2 md:mb-0">
                            <a href="#" className="mr-4 hover:underline md:mr-6">São Paulo</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">Rua Urbano Duarte, 529</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">Casa Verde</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">(11) 3855-6100</a>
                        </div>
                    </li>

                    <li className="mb-4 md:mb-6">
                        <div className="mb-2 md:mb-0">
                            <a href="#" className="mr-4 hover:underline md:mr-6">São Bernardo do Campo</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">Avenida Redenção, 724</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">Jardim do Mar</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">(11) 2897-2552</a>
                        </div>
                    </li>

                    <li className="mb-4 md:mb-6">
                        <div className="mb-2 md:mb-0">
                            <a href="#" className="mr-4 hover:underline md:mr-6">Santos</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">Rua Campos Melo, 157 cj.1406</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">Vila Mathias</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">(13) 3877-0727</a>
                        </div>
                    </li>

                    <li className="mb-4 md:mb-6">
                        <div className="mb-2 md:mb-0">
                            <a href="#" className="mr-4 hover:underline md:mr-6">Campinas</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">Rua Alaíde Nascimento de Lemos, 949</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">Vila Lemos</a>
                        </div>
                        <div>
                            <a href="#" className="mr-4 md:mr-6">(19) 3295-5651</a>
                        </div>
                    </li>

                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">©2024 <a href="#" className="hover:underline">Naki's</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
