import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

/* estilos css */
import "/src/components/Global.css";
import "/src/components/Header.css";

function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleDarkMode() {
        const html = document.documentElement;

        if (html.getAttribute("data-theme") === "dark") {
            html.removeAttribute("data-theme"); // volta pro claro
            setDarkMode(false);
        } else {
            html.setAttribute("data-theme", "dark"); // ativa escuro
            setDarkMode(true);
        }
    }

    return (
        <header>
            <div className="cabecalho global">
                <div className="logo">
                    <a href="#header">G</a>
                </div>

                <div className="navButtons">
                    {/* Menu hamburguer visível só no mobile */}
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
                    </button>

                    {/* NavBar */}
                    <nav
                        className={`navBar ${menuOpen ? "ativo" : ""}`}
                        onClick={() => setMenuOpen(false)} // fecha ao clicar em qualquer link
                    >
                        <a href="#">Início</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#habilidades">Habilidades</a>
                        <a href="#secao-projetos">Projetos</a>
                        <a href="#contato">Contatos</a>
                    </nav>

                    {/* Botão Dark Mode */}
                    <button
                        onClick={toggleDarkMode}
                        id="darkMode"
                        style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                        {darkMode ? (
                            <FontAwesomeIcon icon={faSun} size="lg" />
                        ) : (
                            <FontAwesomeIcon icon={faMoon} size="lg" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
