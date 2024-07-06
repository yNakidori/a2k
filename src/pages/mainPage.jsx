import React from 'react';
import MenuAppBar from '../components/MenuAppBar';
import Footer from '../components/Footer';
import bg from '../assets/images/automa.jpg';
import MasonryGrid from '../components/MasonryGrid';
import images from '../components/Images';
import { Link } from 'react-router-dom';

const MainPage = () => {

    const items = [
        { label: 'PDV TOTVS', image: images.totvs, path: '/pdvtotvs' },
        { label: 'Gestão WEB', image: images.web, path: '/gestaoweb' },
        { label: 'Pedido Garçom', image: images.garcom, path: '/pedidogarcom' },
        { label: 'Pedido Maquininha', image: images.maqui, path: '/pedidomaquininha' },
        { label: 'Pedido Cliente', path: '/pedidocliente' },
        { label: 'Pedido Tablet', image: images.tablet, path: '/pedidotablet' },
        { label: 'Pedido Delivery', image: images.delivery, path: '/pedidodelivery' },
        { label: 'Pedido Totem', image: images.totem, path: '/pedidototem' },
        { label: 'Pedido Kilo', image: images.prinx, path: '/pedidokilo' },
        { label: 'Pedido iFood', image: images.ifood, path: '/pedidoifood' },
        { label: 'Delivery Próprio', path: '/deliveryproprio' },
        { label: 'KDS Cozinha', image: images.kds, path: '/kds' },
        { label: 'Fidelidade Clientes', image: images.fidelidade, path: '/fidelidadeclientes' },
        { label: 'Pagamento QRcode', image: images.fidelidade, path: '/pagamentoqr' },
        { label: 'Acesso Catraca', image: images.catraca, path: '/acessocatraca' },
    ];

    return (
        <>
            <MenuAppBar />
            <div className='bg-cover min-h-screen' style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className=''>
                    <MasonryGrid items={items.map(item => ({
                        ...item,
                        content: item.path ? (
                            <Link to={item.path} className="item-button">
                                {item.image && <img src={item.image} alt={item.label} />}
                                <span>{item.label}</span>
                            </Link>
                        ) : (
                            <div className="item-button">
                                {item.image && <img src={item.image} alt={item.label} />}
                                <span>{item.label}</span>
                            </div>
                        )
                    }))} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainPage;
