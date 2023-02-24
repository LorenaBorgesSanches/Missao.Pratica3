import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LivroDados from './LivroDados';
import LivroLista from './LivroLista';
import Nav from './Nav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<LivroLista></LivroLista>} />
          <Route path="dados" element={<LivroDados></LivroDados>} />                
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*
2º Procedimento | Página de Cadastro e Navegação no React JS
 e) Precedendo a divisão Routes, definir o menu de navegação, com tag nav,
formatado pelo BootStrap, e utilizar elementos do tipo Link, no lugar das
âncoras, para acesso às rotas definidas

''''Implemente o componente LivroDados, no arquivo LivroDados.js:

*/