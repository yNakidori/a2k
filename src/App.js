import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import MainPage from './pages/mainPage';
import AcessoCatraca from './pages/TOTVSPDV/acessoCatraca';
import DeliveryProprio from './pages/TOTVSPDV/deliveryProprio';
import FidelidadeClientes from './pages/TOTVSPDV/fidelidadeClientes';
import GestaoWeb from './pages/TOTVSPDV/gestaoWeb';
import Kds from './pages/TOTVSPDV/kds';
import PagamentoQr from './pages/TOTVSPDV/pagamentoQR';
import PdvTotvs from './pages/TOTVSPDV/pdvTotvs';
import PedidoGarcom from './pages/TOTVSPDV/pedidoGarcom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/acessocatraca" element={<AcessoCatraca />} />
      <Route path="/deliveryproprio" element={<DeliveryProprio />} />
      <Route path="/fidelidadeclientes" element={<FidelidadeClientes />} />
      <Route path="/gestaoweb" element={<GestaoWeb />} />
      <Route path="/kds" element={<Kds />} />
      <Route path="/pagamentoqr" element={<PagamentoQr />} />
      <Route path="/pdvtotvs" element={<PdvTotvs />} />
      <Route path="/pedidogarcom" element={<PedidoGarcom />} />
    </Routes>
  );
}

export default App;
