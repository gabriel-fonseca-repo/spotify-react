import React from "react";
import styles from "../Faq.module.css";
import {useState} from 'react';

export function ContentFaq() {

  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);

  function showResult(e, number) {
    e.preventDefault();
    if(number === 0){
      setIsShown(current => !current);
    }else if(number === 1){
      setIsShown1(current => !current);
    }else if(number === 2){
      setIsShown2(current => !current);
    }else if(number === 3){
      setIsShown3(current => !current);
    }else if(number === 4){
      setIsShown4(current => !current);
    }else if(number === 5){
      setIsShown5(current => !current);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.faq_categories_container}>
        <header>
          <h3>ATENDIMENTO DO SPOTIFY</h3>
        </header>
        <div className={styles.faq_help_container}>
          <p>Como podemos ajudar?</p>
          <h1>
            <span className={styles.faq_link_login} href="#">
              Faça log in
            </span>{" "}
            para ter ajuda mais rápido
          </h1>
        </div>
        <div className={styles.faq_barra_de_busca_container}>
          <input
            type="text"
            aria-label="Buscar"
            placeholder="🔎 Buscar"
            autoComplete="off"
            className={styles.faq_barra_de_busca}
          />
        </div>

        <div className={styles.faq_categories}>
          <div
            className={styles.faq_categorie_card}
            id={styles.card_ajuda_com_pagamentos}
          >
            <img
              className={styles.card_img}
              src="../assets/img/ajuda-com-pagamentos.webp"
              alt="Imagem"
            />
            <div className={styles.card_details}>
              <div className={styles.title}>Ajuda com pagamentos</div>
            </div>
          </div>
          <div
            className={styles.faq_categorie_card}
            id={styles.card_ajuda_com_o_plano}
          >
            <img
              className={styles.card_img}
              src="../assets/img/ajuda-com-o-plano.webp"
              alt="Imagem"
            />
            <div className={styles.card_details}>
              <div className={styles.title}>Ajuda com o plano</div>
            </div>
          </div>

          <div
            className={styles.faq_categorie_card}
            id={styles.card_ajuda_com_o_app}
          >
            <img
              className={styles.card_img}
              src="../assets/img/ajuda-com-o-app.webp"
              alt="Imagem"
            />
            <div className={styles.card_details}>
              <div className={styles.title}>Ajuda com o app</div>
            </div>
          </div>

          <div
            className={styles.faq_categorie_card}
            id={styles.card_ajuda_com_dispositivos}
          >
            <img
              className={styles.card_img}
              src="../assets/img/ajuda-com-dispositivos.webp"
              alt="Imagem"
            />
            <div className={styles.card_details}>
              <div className={styles.title}>Ajuda com dispositivos</div>
            </div>
          </div>

          <div
            className={styles.faq_categorie_card}
            id={styles.card_privacidade_e_seguranca}
          >
            <img
              className={styles.card_img}
              src="../assets/img/privacidade-e-seguranca.png"
              alt="Imagem"
            />
            <div className={styles.card_details}>
              <div className={styles.title}>Privacidade e segurança</div>
            </div>
          </div>

          <div
            className={styles.faq_categorie_card}
            id={styles.card_ajuda_com_a_conta}
          >
            <img
              className={styles.card_img}
              src="../assets/img/ajuda-com-a-conta.png"
              alt="Imagem"
            />
            <div className={styles.card_details}>
              <div className={styles.title}>Ajuda com a conta</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.faq_help_section_container}>
        <h2 className={styles.faq_help_links_title}>Ajuda rápida</h2>
        <div className={styles.faq_help_links_container}>
          <ul role="list" className={styles.faq_help_link_items_list}>
            <li className={styles.faq_help_link_item} onClick={(event) => showResult(event, 0)}>
              <a className={styles.faq_help_link_text}>
                Não consigo redefinir a senha
              </a>
              <img
                className={styles.faq_help_link_arrow_icon}
                src="../assets/svg/arrow-right.svg"
                alt="Ir para link"
              />
            </li>
            {isShown && (
              <li className={styles.faq_help_link_item}>
                Tente inserir qualquer outro endereço de e-mail que você possa ter usado para criar uma conta.
              </li>
            )}
            <li className={styles.faq_help_link_item} onClick={(event) => showResult(event, 1)}>
              <a className={styles.faq_help_link_text} href="#">
                Tem algo errado com a minha conta
              </a>
              <img
                className={styles.faq_help_link_arrow_icon}
                src="../assets/svg/arrow-right.svg"
                alt="Ir para link"
              />
            </li>
            {isShown1 && (
              <li className={styles.faq_help_link_item}>
                Se notar algo estranho, diferente ou corrompido, é possível que você tenha entrado em outra conta do Spotify.
              </li>
            )}
            <li className={styles.faq_help_link_item} onClick={(event) => showResult(event, 2)}>
              <a className={styles.faq_help_link_text} href="#">
                Não lembro minhas informações de login
              </a>
              <img
                className={styles.faq_help_link_arrow_icon}
                src="../assets/svg/arrow-right.svg"
                alt="Ir para link"
              />
            </li>
            {isShown2 && (
              <li className={styles.faq_help_link_item}>
               Se você não se lembrar da sua senha, use a página de redefinição de senha.
              </li>
            )}
            <li className={styles.faq_help_link_item} onClick={(event) => showResult(event, 3)}>
              <a className={styles.faq_help_link_text} href="#">
                Ajuda para entrar com o Facebook
              </a>
              <img
                className={styles.faq_help_link_arrow_icon}
                src="../assets/svg/arrow-right.svg"
                alt="Ir para link"
              />
            </li>
            {isShown3 && (
              <li className={styles.faq_help_link_item}>
                Para entrar no Spotify com sua conta do Facebook, use essa rede social na inscrição ou faça a vinculação.
              </li>
            )}
            <li className={styles.faq_help_link_item} onClick={(event) => showResult(event, 4)}>
              <a className={styles.faq_help_link_text} href="#">
                Formas de pagamento
              </a>
              <img
                className={styles.faq_help_link_arrow_icon}
                src="../assets/svg/arrow-right.svg"
                alt="Ir para link"
              />
            </li>
            {isShown4 && (
              <li className={styles.faq_help_link_item}>
                os métodos variam de acordo com o país ou região.
              </li>
            )}
            <li className={styles.faq_help_link_item} onClick={(event) => showResult(event, 5)}>
              <a className={styles.faq_help_link_text} href="#">
                Criar ou entrar em um plano Família
              </a>
              <img
                className={styles.faq_help_link_arrow_icon}
                src="../assets/svg/arrow-right.svg"
                alt="Ir para link"
              />
            </li>
            {isShown5 && (
              <li className={styles.faq_help_link_item}>
                O Premium Família é um plano com desconto para até 6 pessoas que moram juntas.
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className={styles.visite_nossa_comunidade_container}>
        <h2 className={styles.visite_nossa_comunidade_titulo}>
          Visite nossa Comunidade
        </h2>
        <p className={styles.visite_nossa_comunidade_pergunta}>
          Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs
          especialistas do mundo todo!
        </p>
        <a className={styles.link_botao_acesse_a_comunidade} href="#">
          Acesse a Comunidade do Spotify
        </a>
      </div>

      <div className={styles.faq_rodape_container}>
        <div className={styles.faq_rodape_column_container}>
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
        <div className={styles.faq_rodape_column_container}>
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
        <div className={styles.faq_rodape_column_container}>
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
      <div className={styles.faq_rodape_socials_container}>
        <a href="#" title="Instagram" className={styles.faq_rodape_icone_botao}>
          <img src="../assets/svg/instagram.svg" alt="Instagram" />
        </a>
        <a href="#" title="Twitter" className={styles.faq_rodape_icone_botao}>
          <img src="../assets/svg/twitter.svg" alt="Twitter" />
        </a>
        <a href="#" title="Facebook" className={styles.faq_rodape_icone_botao}>
          <img src="../assets/svg/facebook.svg" alt="Facebook" />
        </a>
      </div>
      <div className={styles.faq_rodape_links_location_container}>
        <div className={styles.faq_rodape_links_genericos_container}>
          <a href="#" className={styles.faq_rodape_link_generico}>
            Legal
          </a>
          <a href="#" className={styles.faq_rodape_link_generico}>
            Centro de Privacidade
          </a>
          <a href="#" className={styles.faq_rodape_link_generico}>
            Política de privacidade
          </a>
          <a href="#" className={styles.faq_rodape_link_generico}>
            Cookies
          </a>
          <a href="#" className={styles.faq_rodape_link_generico}>
            Sobre anúncios
          </a>
        </div>
        <div className={styles.faq_rodape_location}>
          <a href="#" className={styles.faq_rodape_link_generico}>
            🌍Brasil
          </a>
          <h1 className={styles.faq_rodape_spotify_corp}>© 2022 Spotify AB</h1>
        </div>
      </div>
    </div>
  );
}
