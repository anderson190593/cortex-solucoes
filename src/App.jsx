// src/App.jsx
import { useState } from 'react';
import './App.css'; // Importa nosso CSS customizado

function App() {
  // O 'useState' controla o estado (a memória) do tema. Começamos com 'dark'.
  const [theme, setTheme] = useState('dark');

  // Função que será chamada para trocar o tema
  const toggleTheme = () => {
    // Se o tema atual for 'light', muda para 'dark', e vice-versa.
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // O atributo 'data-theme' vai aplicar os estilos CSS que definimos
    <div className="App" data-theme={theme}>
      <div className="container text-center mt-5">
        <h1>Olá! Bem-vindo ao nosso novo site.</h1>
        <p>O tema atual é: {theme}</p>
        <button className="btn btn-primary" onClick={toggleTheme}>
          Mudar para o tema {theme === 'light' ? 'Escuro' : 'Claro'}
        </button>
      </div>
    </div>
  );
}

export default App;