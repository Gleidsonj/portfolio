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
                        <p>Sou Gleidson Lima, tenho 23 anos e estudo Análise e Desenvolvimento de Sistemas. Estou construindo minha carreira como desenvolvedor full stack, criando projetos práticos e bem estruturados. Faço front com HTML, CSS, JavaScript, TypeScript e React; no back uso Node.js, Express e MySQL para APIs e bancos de dados. Trabalho com Git e GitHub e estou sempre aprendendo novas ferramentas para entregar soluções mais completas.</p>
                        <div className='secao-2'>
                            <div>
                                <FontAwesomeIcon icon={faBriefcase} id='iconColor' size='2x' />
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
                </div>
            </section>
        </section>
    )
}

export default Sobre;