// src/components/CTA/CTA.jsx

import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section id="contato" className="cta-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="cta-title">
              Pronto para levar seu negócio ao próximo nível?
            </h2>
            <p className="cta-subtitle">
              Preencha o formulário abaixo ou envie uma mensagem direta. 
              Estamos prontos para transformar sua ideia em realidade.
            </p>

            {/* --- INÍCIO DO FORMULÁRIO --- */}
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form mt-5">
              
              {/* === MUDANÇA AQUI === */}
              {/* Chave de Acesso - AGORA COM SUA CHAVE REAL */}
              <input type="hidden" name="access_key" value="71dd9e0a-1bf5-4a7f-8ba5-230ca9fb39f4" />

              {/* Campo Nome */}
              <div className="form-group mb-3">
                <input type="text" name="name" className="form-control" placeholder="Seu nome completo" required />
              </div>
              
              {/* Campo Email */}
              <div className="form-group mb-3">
                <input type="email" name="email" className="form-control" placeholder="Seu melhor e-mail" required />
              </div>

              {/* Campo Mensagem */}
              <div className="form-group mb-4">
                <textarea name="message" className="form-control" rows="5" placeholder="Conte-nos sobre o seu projeto..." required></textarea>
              </div>

              {/* Botão de Envio */}
              <button type="submit" className="btn btn-primary btn-lg">
                Enviar Mensagem
              </button>

            </form>
            {/* --- FIM DO FORMULÁRIO --- */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;