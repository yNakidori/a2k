import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import Footer from '../../components/Footer'
import VideoComponent from '../../components/VideoComponent'
import Card from '../../components/Card'
import gestaowebdemo from '../../assets/videos/gestaowebDemo.mp4'
import kinoshita from '../../assets/images/clientes/kinoshita.jpg'
import mana from '../../assets/images/clientes/mana.png'
import suavesabor from '../../assets/images/clientes/suavesabor.png'

const clients = [
    {
        imageSrc: kinoshita,
        clientName: 'Kinoshita Kappo Cuisine',
        clientDescription: 'R. Jacques Félix, 405 - Vila Nova Conceição, São Paulo - SP, 04509-000',
    },
    {
        imageSrc: mana,
        clientName: 'Maná Gastronomia',
        clientDescription: 'Rua Tonelero, 302 - Vila IpojucaSão Paulo - SP, 05056-000',
    },
    {
        imageSrc: suavesabor,
        clientName: 'Suave Sabor',
        clientDescription: 'R. Antônio Camardo, 700 - Tatuapé, São Paulo - SP, 03309-060',
    },
];

const advantages = [
    {
        title: 'Relatórios Estratégicos',
        description: 'Tenha acesso a relatórios importantes e estratégicos para sua tomada de decisão, como estoque, inventário, financeiro, fiscal e dashboards.',
    },
    {
        title: 'Controle de Recebimentos e Contas',
        description: 'Faça o controle de todos os recebimentos e contas através dos módulos de contas a receber e a pagar.',
    },
    {
        title: 'Controle de Estoque',
        description: 'Reforce o controle de estoque através de inventários, detectando falhas e perdas.',
    },
    {
        title: 'Segurança das Informações',
        description: 'Obtenha segurança sobre as informações do seu negócio, uma vez que estão disponíveis online.',
    },
    {
        title: 'Acesso Remoto',
        description: 'Acesse todos os dados da sua empresa de qualquer lugar, a qualquer momento.',
    },
    {
        title: 'Controle de Acessos',
        description: 'Tenha controle sobre os acessos dos usuários, garantindo segurança e organização.',
    },
];

const solutions = [
    {
        title: 'Relatórios de Vendas',
        description: 'Acompanhe as vendas por produto, faturamento por tipo de pagamento, e fechamentos diários, semanais e mensais do caixa.',
    },
    {
        title: 'Relatórios de Estoque',
        description: 'Monitore o estoque em tempo real, garantindo uma gestão eficiente e evitando faltas ou excessos de produtos.',
    },
    {
        title: 'Relatórios Financeiros',
        description: 'Tenha uma visão completa das finanças do seu negócio, com relatórios detalhados de receitas e despesas.',
    },
    {
        title: 'Relatórios Fiscais',
        description: 'Mantenha-se em conformidade com as obrigações fiscais, com relatórios precisos e prontos para auditorias.',
    },
    {
        title: 'Dashboards Interativos',
        description: 'Visualize os principais indicadores do seu negócio em dashboards interativos e personalizáveis.',
    },
    {
        title: 'Módulo de Contas a Receber',
        description: 'Gerencie eficientemente todas as contas a receber, acompanhando pagamentos pendentes e recebidos.',
    },
    {
        title: 'Módulo de Contas a Pagar',
        description: 'Controle todas as contas a pagar, evitando atrasos e organizando suas finanças de maneira eficaz.',
    },
];


const GestaoWeb = () => {
    const gestaoWebDescription = [
        'Utilize a Retaguarda Web no Seu Sistema de PDV e Caixa',
        'Tenha acesso a informações valiosas do seu negócio, como relatórios de vendas, estoque, finanças, dashboards e muito mais.',
        'Além disso, todas as informações ficam disponíveis de forma online e você consegue acessá-las de qualquer lugar, a qualquer momento.',
        'Gestão Ineficiente do Controle de Sua Empresa: Nossa solução automatiza processos diários e proporciona uma visão completa do seu negócio, permitindo um controle mais eficaz e organizado.',
        'Desafios na Gestão de Pessoal: Com ferramentas avançadas de gestão de equipe, o sistema facilita a administração de horários, desempenho e tarefas, melhorando a eficiência da sua equipe.',
        'Falta de Dados e Insights: Nossa plataforma oferece relatórios detalhados e análises em tempo real, fornecendo insights valiosos que ajudam na tomada de decisões informadas e estratégicas.',
        'Baixa Qualidade na Obtenção de Informações Estratégicas: Com dashboards intuitivos e acesso a dados precisos, você pode facilmente obter informações essenciais para planejar e executar estratégias de crescimento eficazes.',
    ]

    return (
        <>
            <div className='bg-gray-800 min-h-screen flex flex-col'>
                <MenuAppBar />
                <div className='flex-grow flex flex-col items-center justify-center mt-4'>
                    <VideoComponent
                        videoSrc={gestaowebdemo}
                        title="Gestão Web TOTVS"
                        descriptions={gestaoWebDescription}
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

export default GestaoWeb