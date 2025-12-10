import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

import '/src/components/Introduce.css';

function Introduce() {
    return (
        <main className='introdution'>
            <section>
                <div className='container-01'>
                    <div className='myName'>
                        <span>Olá, eu sou</span>
                        <h1>Gleidson Lima</h1>
                        <h2>Desenvolvedor Full Stack</h2>
                        <p>Gosto de criar coisas úteis e bem feitas.</p>
                    </div>

                    <div className='link-cv'>
                        <a href="#secao-projetos" className='projetos hover'>
                            Meus projetos <FontAwesomeIcon icon={faArrowDown} style={{ color: "#fff" }} />
                        </a>

                        <a href="/GleidsonLima.pdf" download="Gleidson Lima - Curriculo.pdf" className='cv hover'>
                            Baixar CV <FontAwesomeIcon icon={faFileArrowDown} />
                        </a>
                    </div>

                    <div className='linkedin-cv'>
                        <a href="https://github.com/Gleidsonj" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className='icon hover' size='2x' />
                        </a>

                        <a href="https://www.linkedin.com/in/gleidsonsant/" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedinIn} className='icon hover' size="2x" />
                        </a>
                    </div>
                </div>

                <div className='container-02'>
                    <img src="/foto-perfil.jpg" alt="" />
                </div>
            </section>
        </main>
    );
}

export default Introduce;