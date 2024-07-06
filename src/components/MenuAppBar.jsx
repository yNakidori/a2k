import React from 'react';
import { Disclosure } from '@headlessui/react';

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
    return (
        <Disclosure as="nav" className="bg-red-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                                    <span className="sr-only">Abrir menu principal</span>
                                    {open ? (
                                        <activity className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <activity className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 items-center">
                                    {/* Coloque o seu logotipo aqui */}
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium font-ubuntu' // Adicionando classe 'font-ubuntu' aqui
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium font-ubuntu' // Adicionando classe 'font-ubuntu' aqui também
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
