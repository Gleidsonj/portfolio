import '/src/components/Footer.css';

function Footer(){
    return(
        <section className='rodape'>
            <section className='limite'>
                <div id='logo'>
                    <a href="#">G</a>
                </div>
                <div>
                    <p>© 2025 Gleidson Lima. Todos os direitos reservados</p>
                </div>
            </section>
            <div>
                <a className='hover' id='seta-voltar' href="#"><img src="./public/seta-cima.svg" alt="" /></a>
            </div>
        </section>
    )
}

export default Footer;