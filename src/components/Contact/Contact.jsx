// src/components/Contact/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Vamos Conversar</h2>
          <p className="lead-muted">Estamos prontos para tirar sua ideia do papel.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form action="https://api.web3forms.com/submit" method="POST">
              {/* Substitua pela sua chave de acesso do Web3Forms */}
              <input type="hidden" name="access_key" value="SUA_CHAVE_DE_ACESSO_AQUI" />
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">Seu Nome</label>
                  <input type="text" id="name" name="name" className="form-control" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">Seu E-mail</label>
                  <input type="email" id="email" name="email" className="form-control" required />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Sua Mensagem</label>
                <textarea id="message" name="message" className="form-control" rows="5" required></textarea>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="submit" className="btn btn-primary btn-lg">Enviar Mensagem</button>
                <a href="https://wa.me/SEUNUMEROAQUI" target="_blank" className="btn btn-success btn-lg">
                  <i className="bi bi-whatsapp me-2"></i> {/* Usaremos ícone do Bootstrap Icons */}
                  Contato via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;