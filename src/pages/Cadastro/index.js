import { Link } from "react-router-dom";
import styles from "./Cadastro.module.css";

export function Cadastro() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/">
          <img
            className={styles.logo}
            src="../assets/svg/logo-dark.svg"
            alt="Logo do spotify"
          />
        </Link>
        <h1 className={styles.title}>Inscreva-se grátis e comece a curtir.</h1>
      </div>
      <div id="line">
        <hr />
      </div>
      <form className={styles.teste} action="">
        <div className={styles.input_group}>
          <label for="email">Qual é o seu e-mail?</label>
          <input
            className={styles.text_input}
            type="email"
            name="email"
            placeholder="Insira o seu e-mail."
          />
        </div>
        <div className={styles.input_group}>
          <label for="emailConfirm">Confirme seu e_mail:</label>
          <input
            className={styles.text_input}
            type="email"
            name="emailConfirm"
            placeholder="Insira o seu e-mail novamente."
          />
        </div>
        <div className={styles.input_group}>
          <label for="password">Crie uma senha:</label>
          <input
            className={styles.text_input}
            type="password"
            name="password"
            placeholder="Crie uma senha."
          />
        </div>
        <div className={styles.input_group}>
          <label for="name">Como devemos chamar você?</label>
          <input
            className={styles.text_input}
            type="text"
            name="name"
            placeholder="Insira o seu nome."
          />
          <p className={styles.custom_mt_5}>Isso aparece no seu perfil.</p>
        </div>
        <div className={styles.input_group}>
          <label for="birthdate">Qual a sua data de nascimento?</label>
          <input
            className={styles.text_input}
            type="date"
            name="birthdate"
            placeholder="Insira a sua data de nascimento."
          />
        </div>
        <div className={styles.input_group}>
          <label for="country">Qual o seu gênero?</label>
          <div className={styles.options}>
            <span>
              <input type="radio" id="man" name="man" value="Masculino" />
              <label for="man">Masculino</label>
            </span>
            <span>
              <input type="radio" id="woman" name="woman" value="Feminino" />
              <label for="woman">Feminino</label>
            </span>
            <span>
              <input
                type="radio"
                id="nonBinary"
                name="nonBinary"
                value="Não binário"
              />
              <label for="nonBinary">Não binário</label>
            </span>
          </div>
        </div>
        <div className={styles.checkbox_group}>
          <div className={styles.checkbox}>
            <input
              className={styles.block}
              type="checkbox"
              id="msg"
              name="msg"
            />
            <label for="msg">
              Não quero receber mensagens de marketing do Spotify
            </label>
          </div>
          <div className={styles.checkbox}>
            <input
              className={styles.block}
              type="checkbox"
              id="dados"
              name="dados"
            />
            <label for="dados">
              Compartilhar meus dados cadastrais com os provedores de conteúdo
              do Spotify para fins de marketing.
            </label>
          </div>
          <div className={styles.checkbox}>
            <input
              className={styles.block}
              type="checkbox"
              id="termos"
              name="termos"
            />
            <label for="termos">
              Eu concordo com os
              <span>Termos e Condições de Uso do Spotify.</span>
            </label>
          </div>
        </div>
        <p className={styles.terms}>
          Para saber mais sobre como o Spotify coleta, utiliza, compartilha e
          protege seus dados pessoais, leia a
          <span>Política de Privacidade do Spotify</span>.
        </p>
        <span className={styles.submit}>
          <button className={styles.button} type="submit">
            Inscrever_se
          </button>
          <p>
            Já tem uma conta?<span>Faça login</span>.
          </p>
        </span>
      </form>
    </div>
  );
}
