import '/src/components/Projetos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projetos() {
    return (
        <section id='secao-projetos' className='secao-projetos'>
            <section className='projetos'>
                <h2>Projetos</h2>
                <section className='cards-project'>

                    {/* Projeto AlfaTech */}
                    <div className="card">
                        <img src="/hospedagem.png" alt="Projeto AlfaTech" />
                        <div className='card-text'>
                            <h3>AlfaTech</h3>
                            <div className='card-buttons'>
                                <a href="https://site-hospedagem-rouge.vercel.app" target='_blank' rel="noopener noreferrer" className='hover'>
                                    Deploy <FontAwesomeIcon icon={faEye} className='iconsColor' size="1x" />
                                </a>
                                <a href="https://github.com/Gleidsonj/Website-Hospedagem" target='_blank' rel="noopener noreferrer" className='hover'>
                                    Github <FontAwesomeIcon icon={faGithub} size="1x" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Projeto Pet Boutique */}
                    <div className="card">
                        <img src="/pet-bouquite.png" alt="Projeto Pet Boutique" />
                        <div className='card-text'>
                            <h3>Pet Boutique</h3>
                            <div className='card-buttons'>
                                <a href="https://pet-shop-ten-iota.vercel.app" target='_blank' rel="noopener noreferrer" className='hover'>
                                    Deploy <FontAwesomeIcon icon={faEye} className='iconsColor' size="1x" />
                                </a>
                                <a href="https://github.com/Gleidsonj/Site-Petshop" target='_blank' rel="noopener noreferrer" className='hover'>
                                    Github <FontAwesomeIcon icon={faGithub} size="1x" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Projeto Pousada Secreta */}
                    <div className="card">
                        <img src="/pousada-secreta.png" alt="Projeto Pousada Secreta" />
                        <div className='card-text'>
                            <h3>Pousada Secreta</h3>
                            <div className='card-buttons'>
                                <a href="https://site-pousada-nine.vercel.app" target='_blank' rel="noopener noreferrer" className='hover'>
                                    Deploy <FontAwesomeIcon icon={faEye} className='iconsColor' size="1x" />
                                </a>
                                <a href="https://github.com/Gleidsonj/SIte-Pousada" target='_blank' rel="noopener noreferrer" className='hover'>
                                    Github <FontAwesomeIcon icon={faGithub} size="1x" />
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
