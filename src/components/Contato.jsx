import '/src/components/Contato.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contato() {
    const form = useRef();
    const [status, setStatus] = useState(""); // mensagem de status
    const [sending, setSending] = useState(false); // controlar botão

    function sendEmail(e) {
        e.preventDefault();
        setSending(true);
        setStatus("");

        emailjs.sendForm(
            "service_k1licyr",    // seu Service ID
            "template_6vp37i6",   // seu Template ID
            form.current,
            "IRf1Jz2XlSfw3c2NH"   // sua Public Key
        )
        .then(() => {
            setStatus("✅ Mensagem enviada com sucesso!");
            form.current.reset();
            setSending(false);
        });
    }

    return (
        <section id='contato' className='secao-contato'>
            <section className='contato'>
                <h2>Entre em Contato</h2>

                <section className='containers'>
                    {/* -- cards de contato -- */}
                    <div className='container-1'>
                        <div className='cards-contantos'>
                            <div className='cards'>
                                <div className='contact-logo'>
                                    <FontAwesomeIcon icon={faEnvelope} className='iconsColor' size="2x" />
                                </div>
                                <div className='card-text'>
                                    <p>Email</p>
                                    <span>gleidsonlimacrf@gmail.com</span>
                                </div>
                            </div>

                            <div className='cards'>
                                <div className='contact-logo'>
                                    <FontAwesomeIcon icon={faLocationDot} className='iconsColor' size="2x" />
                                </div>
                                <div className='card-text'>
                                    <p>Localização</p>
                                    <span>Capivari de Baixo, SC, Brasil</span>
                                </div>
                            </div>

                            <div className='cards'>
                                <div className='contact-logo'>
                                    <FontAwesomeIcon icon={faPhone} className='iconsColor' size="2x" />
                                </div>
                                <div className='card-text'>
                                    <p>Celular</p>
                                    <span>(85) 98220-1096</span>
                                </div>
                            </div>
                        </div>

                        <div className="conecte-se">
                            <p>Vamos nos conectar!</p>
                            <div>
                                <a href="https://github.com/Gleidsonj" target='_blank'>
                                    <FontAwesomeIcon icon={faGithub} className='icon hover' size='2x'/>
                                </a>
                                <a href="https://www.linkedin.com/in/gleidsonsant/" target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedinIn} className='icon hover' size="2x" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* -- formulário -- */}
                    <div className='container-2'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" name="from_name" required />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="from_email" required />
                            </div>

                            <div>
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea id="mensagem" name="message" required></textarea>
                            </div>

                            <button type="submit" disabled={sending}>
                                {sending ? "Enviando..." : "Enviar Mensagem →"}
                            </button>

                            {/* -- Mensagem de status -- */}
                            {status && <p className="status-message">{status}</p>}
                        </form>    
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Contato;