import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import MenuAppBar from './components/MenuAppBar';
import GridItem from './components/GridItem';
import './App.css';
import totvs from './assets/images/totvs.png';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const GridContainer = styled(Masonry)`
  display: flex;
  width: auto;
`;

const options = [
  { label: 'PDV TOTVS', image: totvs },
  { label: 'PEDIDO TABLET' },
  { label: 'DELIVERY PRÓPRIO' },
  { label: 'GESTÃO WEB TOTVS' },
  { label: 'PEDIDO DELIVERY' },
  { label: 'KDS COZINHA' },
  { label: 'PEDIDO GARÇOM' },
  { label: 'PEDIDO TOTEM' },
  { label: 'FIDELIDADE CLIENTES' },
  { label: 'PEDIDO MAQUININHA' },
  { label: 'PEDIDO KILO' },
  { label: 'PAGAMENTO QRCODE' },
  { label: 'PEDIDO CLIENTE' },
  { label: 'PEDIDO IFOOD' },
  { label: 'ACESSO CATRACA' }
];

function App() {
  return (
    <>
      <MenuAppBar />
      <div className='app-background'>
        <GridContainer
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {options.map((option, index) => (
            <GridItem key={index} label={option.label} image={option.image} />
          ))}
        </GridContainer>
      </div>
    </>
  );
}

export default App;
