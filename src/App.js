import React from 'react';
import Masonry from 'react-masonry-css';
import MenuAppBar from './components/MenuAppBar';
import GridItem from './components/GridItem';
import totvs from './assets/images/totvs.png';
import tablet from './assets/images/tablet.jpg';
import delivery from './assets/images/delivery.png';
import web from './assets/images/web.jpg';
import pd from './assets/images/pd.png';
import kds from './assets/images/kds.jpg';
import garcom from './assets/images/garcom.jpg';
import totem from './assets/images/totem.jpg';
import fidelidade from './assets/images/fidelidade.jpg';
import qr from './assets/images/qr.jpg';
import maqui from './assets/images/maqui.png';
import prinx from './assets/images/prinx.jpg';
import catraca from './assets/images/catraca.jpg';
import ifood from './assets/images/ifood.png';
import pdv from './assets/images/pdv.jpg';
import './App.css'
import './index.css';

const breakpointColumnsObj = {
  default: 8,
  1100: 4,
  700: 2,
  500: 1,
};

const options = [
  { label: 'PDV TOTVS', image: totvs },
  { label: 'PEDIDO TABLET', image: tablet },
  { label: 'DELIVERY PRÓPRIO', image: delivery },
  { label: 'GESTÃO WEB TOTVS', image: web },
  { label: 'PEDIDO DELIVERY', image: pd },
  { label: 'KDS COZINHA', image: kds },
  { label: 'PEDIDO GARÇOM', image: garcom },
  { label: 'PEDIDO TOTEM', image: totem },
  { label: 'FIDELIDADE CLIENTES', image: fidelidade },
  { label: 'PEDIDO MAQUININHA', image: maqui },
  { label: 'PEDIDO KILO', image: prinx },
  { label: 'PAGAMENTO QRCODE', image: qr },
  { label: 'PEDIDO CLIENTE', image: pdv },
  { label: 'PEDIDO IFOOD', image: ifood },
  { label: 'ACESSO CATRACA', image: catraca },
];

function App() {
  return (
    <>
      <MenuAppBar />
      <div className="app-background min-h-screen">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-4">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex w-auto -ml-4"
              columnClassName="pl-4 bg-clip-padding"
            >
              {options.map((option, index) => (
                <GridItem key={index} label={option.label} image={option.image} />
              ))}
            </Masonry>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
