import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


import './Sobre.css'

function Sobre() {
    return (
        <section id='sobre' className='secao-sobre'>
            <section className='sobre-mim'>
                <h2>Sobre Mim</h2>
                <div className='container-1'>
                    <div className='secao-1'>
                        <p>Sou um desenvolvedor front end apaixonado por criar experiências digitais excepcionais. Com experiência em desenvolvimento web e mobile, busco constantemente aprender novas tecnologias e aprimorar minhas habilidades.</p>
                    </div>
                    <div className='secao-2'>
                        <div>
                            <FontAwesomeIcon icon={faBriefcase} id='iconColor' size='2x'/>
                            <h3>1+</h3>
                            <p>Anos de experiência</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBriefcase} id='iconColor' size='2x' />
                            <h3>3+</h3>
                            <p>Projetos pessoais</p>
                        </div>
                    </div>
                </div>
                <div className='container-2'>

                </div>
            </section>
        </section>
    )
}

export default Sobre;