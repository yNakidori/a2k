import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
    { name: 'TOTVS Food Service', href: '/', current: false },
    { name: 'Equipamentos', href: '/sales', current: false },
    { name: 'Compras', href: '/shop', current: false },
    { name: 'XTAG', href: '/xtag', current: false },
    { name: 'Pagamentos', href: '/payments', current: false },
    { name: 'Apoio', href: '/help', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function MenuAppBar() {
    const location = useLocation();

    return (
        <Disclosure as="nav" className="bg-red-700">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                                    <span className="sr-only">Abrir menu principal</span>
                                    {open ? (
                                        <svg className="block h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    ) : (
                                        <svg className="block h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                                        </svg>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0">
                                    <Link to="/" className="flex items-center">
                                        <svg className="h-8 w-8 text-white mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.414 12l5.293-5.293a1 1 0 011.414 0L18.707 12l-6.293 6.293a1 1 0 01-1.414 0L5.414 12zm1.14-1.057L10.586 7.3a1.5 1.5 0 012.056 0L17.446 11h-3.4a1 1 0 00-.937.652l-.795 2.384-2.212-4.36a1 1 0 00-1.828 0l-3.1 7.04H6.524l3.03-7.198-1.6-3.152a1 1 0 00-1.828 0l-2.786 5.49-1.125 3.375a1 1 0 00.976 1.312h3.72L6.554 10.16z"></path>
                                        </svg>
                                        <span className="font-bold text-white text-xl">A2K</span>
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium font-ubuntu' // Adicionando classe 'font-ubuntu' aqui
                                                )}
                                                aria-current={location.pathname === item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                        location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium font-ubuntu' // Adicionando classe 'font-ubuntu' aqui também
                                    )}
                                    aria-current={location.pathname === item.href ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
