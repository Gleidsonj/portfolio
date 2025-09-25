import '/src/components/Habilidades.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Habilidades() {
    return (
        <section id='habilidades' className='secao-habilidades'>
            <section className='habilidades'>
                <h2>Tecnologias</h2>
                <section>
                    <div className='cards'>
                        <div className='hover'>
                            <img src="/html.svg" alt="HTML5" />
                            <p>HTML5</p>
                        </div>
                        <div className='hover'>
                            <img src="/css.svg" alt="CSS3" />
                            <p>CSS3</p>
                        </div>
                        <div className='hover'>
                            <img src="/js.svg" alt="JavaScript" />
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className='hover'>
                            <img src="/react.svg" alt="React" />
                            <p>REACT</p>
                        </div>

                        <div className='hover'>
                            <img src="/git.svg" alt="Git" />
                            <p>GIT</p>
                        </div>
                        <div className='hover'>
                            <FontAwesomeIcon icon={faGithub} className='icon hover' size="2x" />
                            <p>GITHUB</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default Habilidades;