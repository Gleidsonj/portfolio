import '/src/components/Projetos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function Projetos() {
    return (
        <section id='secao-projetos' className='secao-projetos'>
            <section className='projetos'>
                <h2>Projetos</h2>
                <section className='cards-project'>

                    {/* Projeto AlfaTech */}
                    <div className="card">
                        <img src="/hospedagem.png" alt="AlfaTech" />
                        <div className='card-text'>
                            <h3>AlfaTech</h3>
                            <div className='card-buttons'>
                                <a href="https://site-hospedagem-rouge.vercel.app" target='_blank' className='hover'>
                                    Deploy <FontAwesomeIcon icon={faEye} className='iconsColor' size="1x" />
                                </a>
                                <a href="https://github.com/Gleidsonj/Website-Hospedagem" target='_blank' className='hover'>
                                    Github
                                    <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>GitHub</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 ..."></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Projeto Pet Boutique */}
                    <div className="card">
                        <img src="/pet-bouquite.png" alt="Pet Boutique" />
                        <div className='card-text'>
                            <h3>Pet Boutique</h3>
                            <div className='card-buttons'>
                                <a href="https://pet-shop-ten-iota.vercel.app" target='_blank' className='hover'>
                                    Deploy <FontAwesomeIcon icon={faEye} className='iconsColor' size="1x" />
                                </a>
                                <a href="https://github.com/Gleidsonj/Site-Petshop" target='_blank' className='hover'>
                                    Github
                                    <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>GitHub</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 ..."></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Projeto Pousada Secreta */}
                    <div className="card">
                        <img src="/pousada-secreta.png" alt="Pousada Secreta" />
                        <div className='card-text'>
                            <h3>Pousada Secreta</h3>
                            <div className='card-buttons'>
                                <a href="https://site-pousada-nine.vercel.app" target='_blank' className='hover'>
                                    Deploy <FontAwesomeIcon icon={faEye} className='iconsColor' size="1x" />
                                </a>
                                <a href="https://github.com/Gleidsonj/SIte-Pousada" target='_blank' className='hover'>
                                    Github
                                    <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>GitHub</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 ..."></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </section>
            </section>
        </section>
    );
}

export default Projetos;