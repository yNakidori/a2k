import React from 'react';
import MenuAppBar from '../../components/MenuAppBar';
import VideoComponent from '../../components/VideoComponent';
import Card from '../../components/Card';
import pdvtotvs from '../../assets/videos/pdvtutorial.mp4';
import tradi from '../../assets/images/clientes/tradi.png';
import raful from '../../assets/images/clientes/raful.png';
import degas from '../../assets/images/clientes/degas.png';

const clients = [
    {
        imageSrc: tradi,
        clientName: 'Tradi Hamburgueria',
        clientDescription: 'R. Diogo Jácome, 391 - Moema, São Paulo - SP, 04512-001',
    },
    {
        imageSrc: raful,
        clientName: 'Raful Culinaria Arabe',
        clientDescription: 'R. Comendador Abdo Schahin, 118 · (11) 3229-8406',
    },
    {
        imageSrc: degas,
        clientName: 'Degas Pompéia',
        clientDescription: 'Av. Pompéia, 796 - Pompeia, São Paulo - SP, 05022-000',
    },
];

const PdvTotvs = () => {
    return (
        <div className='bg-gray-800'>
            <MenuAppBar />
            <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center mt-4">
                <VideoComponent
                    videoSrc={pdvtotvs}
                    title="PDV TOTVS"
                    description={`Transforme a Gestão do seu Negócio com Nosso Sistema de PDV e Caixa

Maximize a eficiência e os lucros do seu negócio com nosso sistema de gestão avançado. Nossa solução automatiza processos diários, proporcionando uma operação mais ágil e lucrativa. Além disso, o módulo fiscal integrado permite a emissão de cupons fiscais eletrônicos (CF-e), garantindo conformidade e praticidade.

Atendimento Completo para Diversos Segmentos:

Nosso sistema Totvs é ideal para:

- Bares e Restaurantes
- Lanchonetes e Padarias
- Choperias e Mercados
- Açougues e Adegas
- Mercearias e Serviços de Delivery
- Restaurantes por Kilo, entre outros.

Ambiente Técnico:
O sistema é compatível com a plataforma Windows, oferecendo uma interface amigável e de fácil utilização.`}
                />
                <h2 className="text-white text-3xl font-bold mt-8">Clientes Populares</h2>
                <div className="mt-4 w-full flex flex-wrap justify-center">
                    {clients.map((client, index) => (
                        <Card
                            key={index}
                            imageSrc={client.imageSrc}
                            clientName={client.clientName}
                            clientDescription={client.clientDescription}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PdvTotvs;
