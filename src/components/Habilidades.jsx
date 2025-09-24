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
                            <img src="../public/html.svg" alt="" />
                            <p>HTML5</p>
                        </div>
                        <div className='hover'>
                            <img src="../public/css.svg" alt="" />
                            <p>CSS3</p>
                        </div>
                        <div className='hover'>
                            <img src="../public/js.svg" alt="" />
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className='hover'>
                            <img src="../public/react.svg" alt="" />
                            <p>REACT</p>
                        </div>

                        <div className='hover'>
                            <img src="../public/git.svg" alt="" />
                            <p>GIT</p>
                        </div>
                        <div className='hover'>
                            <FontAwesomeIcon icon={faGithub} className='icon  hover' size="2x" />
                            <p>GITHUB</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Habilidades;