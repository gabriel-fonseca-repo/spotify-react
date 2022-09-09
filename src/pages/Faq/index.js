import "./styles.css";

export function Faq() {
    return (
        <div className="container">
            <main>
                <header>
                    <div class="logo-container">
                        <img
                            class="logo"
                            src="/assets/svg/logo.svg"
                            alt="Logo do spotify"
                        />
                    </div>
                    <div class="subscribe-login-container">
                        <a class="subscribe-button" href="#">
                            {" "}
                            Inscreva-se{" "}
                        </a>
                        <a class="login-button" href="#">
                            {" "}
                            Entrar{" "}
                        </a>
                    </div>
                </header>

                <div class="content">
                    <div class="faq-categories-container">
                        <header>
                            <h3>ATENDIMENTO DO SPOTIFY</h3>
                        </header>
                        <div class="faq-help-container">
                            <p>Como podemos ajudar?</p>
                            <h1>
                                <a class="faq-link-login" href="#">
                                    Faça log in
                                </a>{" "}
                                para ter ajuda mais rápido
                            </h1>
                        </div>
                        <div class="faq-barra-de-busca-container">
                            <input
                                type="text"
                                aria-label="Buscar"
                                placeholder="🔎 Buscar"
                                autocomplete="off"
                                class="faq-barra-de-busca"
                            />
                        </div>

                        <div class="faq-categories">
                            <div
                                class="faq-categorie-card"
                                id="card-ajuda-com-pagamentos"
                            >
                                <img
                                    class="card-img"
                                    src="../assets/img/ajuda-com-pagamentos.webp"
                                    alt="Imagem"
                                />
                                <div class="card-details">
                                    <div class="title">
                                        Ajuda com pagamentos
                                    </div>
                                </div>
                            </div>
                            <div
                                class="faq-categorie-card"
                                id="card-ajuda-com-o-plano"
                            >
                                <img
                                    class="card-img"
                                    src="../assets/img/ajuda-com-o-plano.webp"
                                    alt="Imagem"
                                />
                                <div class="card-details">
                                    <div class="title">Ajuda com o plano</div>
                                </div>
                            </div>

                            <div
                                class="faq-categorie-card"
                                id="card-ajuda-com-o-app"
                            >
                                <img
                                    class="card-img"
                                    src="../assets/img/ajuda-com-o-app.webp"
                                    alt="Imagem"
                                />
                                <div class="card-details">
                                    <div class="title">Ajuda com o app</div>
                                </div>
                            </div>

                            <div
                                class="faq-categorie-card"
                                id="card-ajuda-com-dispositivos"
                            >
                                <img
                                    class="card-img"
                                    src="../assets/img/ajuda-com-dispositivos.webp"
                                    alt="Imagem"
                                />
                                <div class="card-details">
                                    <div class="title">
                                        Ajuda com dispositivos
                                    </div>
                                </div>
                            </div>

                            <div
                                class="faq-categorie-card"
                                id="card-privacidade-e-seguranca"
                            >
                                <img
                                    class="card-img"
                                    src="../assets/img/privacidade-e-seguranca.png"
                                    alt="Imagem"
                                />
                                <div class="card-details">
                                    <div class="title">
                                        Privacidade e segurança
                                    </div>
                                </div>
                            </div>

                            <div
                                class="faq-categorie-card"
                                id="card-ajuda-com-a-conta"
                            >
                                <img
                                    class="card-img"
                                    src="../assets/img/ajuda-com-a-conta.png"
                                    alt="Imagem"
                                />
                                <div class="card-details">
                                    <div class="title">Ajuda com a conta</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="faq-help-section-container">
                        <h2 class="faq-help-links-title">Ajuda rápida</h2>
                        <div class="faq-help-links-container">
                            <ul role="list" class="faq-help-link-items-list">
                                <li class="faq-help-link-item">
                                    <a class="faq-help-link-text" href="#">
                                        Não consigo redefinir a senha
                                    </a>
                                    <img
                                        class="faq-help-link-arrow-icon"
                                        src="../assets/svg/arrow-right.svg"
                                        alt="Ir para link"
                                    />
                                </li>
                                <li class="faq-help-link-item">
                                    <a class="faq-help-link-text" href="#">
                                        Tem algo errado com a minha conta
                                    </a>
                                    <img
                                        class="faq-help-link-arrow-icon"
                                        src="../assets/svg/arrow-right.svg"
                                        alt="Ir para link"
                                    />
                                </li>
                                <li class="faq-help-link-item">
                                    <a class="faq-help-link-text" href="#">
                                        Não lembro minhas informações de login
                                    </a>
                                    <img
                                        class="faq-help-link-arrow-icon"
                                        src="../assets/svg/arrow-right.svg"
                                        alt="Ir para link"
                                    />
                                </li>
                                <li class="faq-help-link-item">
                                    <a class="faq-help-link-text" href="#">
                                        Ajuda para entrar com o Facebook
                                    </a>
                                    <img
                                        class="faq-help-link-arrow-icon"
                                        src="../assets/svg/arrow-right.svg"
                                        alt="Ir para link"
                                    />
                                </li>
                                <li class="faq-help-link-item">
                                    <a class="faq-help-link-text" href="#">
                                        Formas de pagamento
                                    </a>
                                    <img
                                        class="faq-help-link-arrow-icon"
                                        src="../assets/svg/arrow-right.svg"
                                        alt="Ir para link"
                                    />
                                </li>
                                <li class="faq-help-link-item">
                                    <a class="faq-help-link-text" href="#">
                                        Criar ou entrar em um plano Família
                                    </a>
                                    <img
                                        class="faq-help-link-arrow-icon"
                                        src="../assets/svg/arrow-right.svg"
                                        alt="Ir para link"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="visite-nossa-comunidade-container">
                        <h2 class="visite-nossa-comunidade-titulo">
                            Visite nossa Comunidade
                        </h2>
                        <p class="visite-nossa-comunidade-pergunta">
                            Tem uma pergunta? Encontre respostas na nossa
                            Comunidade de fãs especialistas do mundo todo!
                        </p>
                        <a class="link-botao-acesse-a-comunidade" href="#">
                            Acesse a Comunidade do Spotify
                        </a>
                    </div>

                    <div class="faq-rodape-container">
                        <div class="faq-rodape-column-container">
                            <h1>EMPRESA</h1>
                            <ul>
                                <li>
                                    <a href="#">Sobre</a>
                                </li>
                                <li>
                                    <a href="#">Empregos</a>
                                </li>
                                <li>
                                    <a href="#">For the record</a>
                                </li>
                            </ul>
                        </div>
                        <div class="faq-rodape-column-container">
                            <h1>COMUNIDADES</h1>
                            <ul>
                                <li>
                                    <a href="#">Para Artistas</a>
                                </li>
                                <li>
                                    <a href="#">Desenvolvedores</a>
                                </li>
                                <li>
                                    <a href="#">Publicidade</a>
                                </li>
                                <li>
                                    <a href="#">Investidores</a>
                                </li>
                                <li>
                                    <a href="#">Fornecedores</a>
                                </li>
                            </ul>
                        </div>
                        <div class="faq-rodape-column-container">
                            <h1>LINKS ÚTEIS</h1>
                            <ul>
                                <li>
                                    <a href="#">Suporte</a>
                                </li>
                                <li>
                                    <a href="#">Player da Web</a>
                                </li>
                                <li>
                                    <a href="#">Aplicativo móvel grátis</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="faq-rodape-socials-container">
                        <a
                            href="#"
                            title="Instagram"
                            class="faq-rodape-icone-botao"
                        >
                            <img
                                src="../assets/svg/instagram.svg"
                                alt="Instagram"
                            />
                        </a>
                        <a
                            href="#"
                            title="Twitter"
                            class="faq-rodape-icone-botao"
                        >
                            <img
                                src="../assets/svg/twitter.svg"
                                alt="Twitter"
                            />
                        </a>
                        <a
                            href="#"
                            title="Facebook"
                            class="faq-rodape-icone-botao"
                        >
                            <img
                                src="../assets/svg/facebook.svg"
                                alt="Facebook"
                            />
                        </a>
                    </div>
                    <div class="faq-rodape-links-location-container">
                        <div class="faq-rodape-links-genericos-container">
                            <a href="#" class="faq-rodape-link-generico">
                                Legal
                            </a>
                            <a href="#" class="faq-rodape-link-generico">
                                Centro de Privacidade
                            </a>
                            <a href="#" class="faq-rodape-link-generico">
                                Política de privacidade
                            </a>
                            <a href="#" class="faq-rodape-link-generico">
                                Cookies
                            </a>
                            <a href="#" class="faq-rodape-link-generico">
                                Sobre anúncios
                            </a>
                        </div>
                        <div class="faq-rodape-location">
                            <a href="#" class="faq-rodape-link-generico">
                                🌍Brasil
                            </a>
                            <h1 class="faq-rodape-spotify-corp">
                                © 2022 Spotify AB
                            </h1>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
