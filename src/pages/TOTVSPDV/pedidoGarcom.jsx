import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import Footer from '../../components/Footer'
import VideoComponent from '../../components/VideoComponent'
import Card from '../../components/Card'
import pdvtotvs from '../../assets/videos/pdvtutorial.mp4'
import churras from '../../assets/images/clientes/churras.jpg'
import hocca from '../../assets/images/clientes/hocca.png'
import oue from '../../assets/images/clientes/oue.png'

const clients = [
    {
        imageSrc: churras,
        clientName: 'Tradi Hamburgueria',
        clientDescription: 'R. Diogo Jácome, 391 - Moema, São Paulo - SP, 04512-001',
    },
    {
        imageSrc: hocca,
        clientName: 'Raful Culinaria Arabe',
        clientDescription: 'R. Comendador Abdo Schahin, 118 · (11) 3229-8406',
    },
    {
        imageSrc: oue,
        clientName: 'Degas Pompéia',
        clientDescription: 'Av. Pompéia, 796 - Pompeia, São Paulo - SP, 05022-000',
    },
];

const advantages = [
    {
        title: 'Gerenciamento de Operações',
        description: 'Controle total das vendas nas mesas, no balcão e no delivery.',
    },
    {
        title: 'Atendimento Personalizado',
        description: 'Cadastro de clientes com histórico de pedidos, facilitando um atendimento mais eficiente e personalizado.',
    },
    {
        title: 'Interface Amigável',
        description: 'Design intuitivo e fácil de usar, criado para otimizar a experiência do usuário.',
    },
    {
        title: 'Relatórios Detalhados',
        description: 'Acompanhe as vendas por produto, faturamento por tipo de pagamento, e fechamentos diários, semanais e mensais do caixa.',
    },
    {
        title: 'Impressões Remotas',
        description: 'Envio automático de pedidos para cozinha, bar, copa e outros pontos de produção, garantindo agilidade no atendimento.',
    },
    {
        title: 'Fechamento de Caixa',
        description: 'Detalhamento por operadores, horários e dias, proporcionando um controle financeiro preciso.',
    },
    {
        title: 'Flexibilidade nas Operações',
        description: 'Permite a transferência de mesas e cancelamentos, adaptando-se às necessidades do seu negócio.',
    },
];

const solutions = [
    {
        title: 'Pedido Garçom',
        description: 'Comanda eletrônica diretamente no celular do garçom, proporcionando agilidade no atendimento.',
    },
    {
        title: 'Pedido Maquininha',
        description: 'Comanda eletrônica disponível na maquininha de cartão de crédito (smart POS), facilitando o processo de pagamento.',
    },
    {
        title: 'Pedido Cliente',
        description: 'Cardápio digital acessível via QR code no celular do cliente, oferecendo uma experiência moderna e conveniente.',
    },
    {
        title: 'Pedido Tablet',
        description: 'Cardápio digital disponível em tablets, permitindo uma visualização mais ampla e interativa.',
    },
    {
        title: 'Pedido Delivery',
        description: 'Cardápio digital otimizado para pedidos de delivery, garantindo praticidade e eficiência.',
    },
    {
        title: 'Pedido Totem',
        description: 'Totem de autoatendimento, proporcionando autonomia e rapidez para os clientes.',
    },
    {
        title: 'Pedido Kilo',
        description: 'Sistema de pedidos especializado para restaurantes de comida por quilo, facilitando a operação.',
    },
    {
        title: 'Pedido iFood',
        description: 'Integrações completas com plataformas de delivery como iFood e Rappi, expandindo suas opções de atendimento.',
    },
    {
        title: 'Delivery Próprio',
        description: 'Soluções de delivery personalizadas e customizadas para atender às necessidades específicas do seu negócio.',
    },
    {
        title: 'KDS Cozinha',
        description: 'Sistema de monitoramento de pedidos na cozinha (KDS), otimizando a gestão e o tempo de preparo.',
    },
    {
        title: 'Fidelidade Clientes',
        description: 'Programa de fidelidade para clientes, incentivando a recorrência e premiando a lealdade.',
    },
    {
        title: 'Pagamento QR Code',
        description: 'Pagamento via QR code diretamente pelo celular, oferecendo uma solução prática e moderna.',
    },
    {
        title: 'Acesso Catraca',
        description: 'Integração e controle de acessos em catracas, garantindo segurança e organização no fluxo de clientes.',
    },
];

const PedidoGarcom = () => {
    const pdvDescription = [
        'Transforme a Gestão do seu Negócio com Nosso Sistema de PDV e Caixa',
        'Maximize a eficiência e os lucros do seu negócio com nosso sistema de gestão avançado. Nossa solução automatiza processos diários, proporcionando uma operação mais ágil e lucrativa. Além disso, o módulo fiscal integrado permite a emissão de cupons fiscais eletrônicos (CF-e), garantindo conformidade e praticidade.',
        'Atendimento Completo para Diversos Segmentos:',
        'Bares e Restaurantes',
        'Lanchonetes e Padarias',
        'Choperias e Mercados',
        'Açougues e Adegas',
        'Mercearias e Serviços de Delivery',
        'Restaurantes por Kilo, entre outros.',
        'Ambiente Técnico:',
        'O sistema é compatível com a plataforma Windows, oferecendo uma interface amigável e de fácil utilização.',
    ];

    return (
        <>
            <div className='bg-gray-800 min-h-screen flex flex-col'>
                <MenuAppBar />
                <div className="flex-grow flex flex-col items-center justify-center mt-4">
                    <VideoComponent
                        videoSrc={pdvtotvs}
                        title="PDV TOTVS"
                        descriptions={pdvDescription}
                    />

                    <h2 className="text-white text-3xl font-bold mt-8">Parceiros Populares</h2>
                    <div className="mt-8 w-full flex flex-wrap justify-center gap-4">
                        {clients.map((client, index) => (
                            <Card
                                key={index}
                                imageSrc={client.imageSrc}
                                clientName={client.clientName}
                                clientDescription={client.clientDescription}
                            />
                        ))}
                    </div>

                    <h2 className="text-white text-3xl font-bold mt-8">Soluções de Pedidos e Atendimento</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 px-4">
                        {solutions.map((solution, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                                <p className="text-gray-700">{solution.description}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-white text-3xl font-bold mt-8">Vantagens</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 px-4">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                                <p className="text-gray-700">{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-6'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default PedidoGarcom