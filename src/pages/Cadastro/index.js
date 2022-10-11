import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Cadastro.module.css";

export function Cadastro() {
  const [email, setEmail] = useState(null);
  const [emailConfirm, setEmailConfirm] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState(null);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const handleSubmit = () => {
    console.log(check3);
    // só é efetuado se tiver marcado o checkbox de termos
    if (check3) {
      console.log({
        email,
        emailConfirm,
        password,
        name,
        birthdate,
        gender,
        check1,
        check2,
        check3,
      });

      let usersAtuais = [];

      if (localStorage.getItem("users") !== null) {
        usersAtuais = JSON.parse(localStorage.getItem("users"));
      }

      usersAtuais.push({
        email,
        emailConfirm,
        password,
        name,
        birthdate,
        gender,
        check1,
        check2,
      });

      localStorage.setItem("users", JSON.stringify(usersAtuais));

      console.log("TODOS OS USUARIOS CADASTRADOS:");
      console.log(usersAtuais);
    }
  };

  const handleInputChange = (e) => {
    const { value, checked, name } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "emailConfirm") {
      setEmailConfirm(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "name") {
      setName(value);
    }
    if (name === "birthdate") {
      setBirthdate(value);
    }
    if (name === "gender") {
      setGender(value);
    }
    if (name === "check1") {
      setCheck1(checked);
    }
    if (name === "check2") {
      setCheck2(checked);
    }
    if (name === "check3") {
      setCheck3(checked);
    }
  };

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
      <div className={(styles.teste, styles.form)} action="">
        <div className={styles.input_group}>
          <label for="email">Qual é o seu e-mail?</label>
          <input
            className={styles.text_input}
            type="email"
            name="email"
            placeholder="Insira o seu e-mail."
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className={styles.input_group}>
          <label for="emailConfirm">Confirme seu e_mail:</label>
          <input
            className={styles.text_input}
            type="email"
            name="emailConfirm"
            placeholder="Insira o seu e-mail novamente."
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className={styles.input_group}>
          <label for="password">Crie uma senha:</label>
          <input
            className={styles.text_input}
            type="password"
            name="password"
            placeholder="Crie uma senha."
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className={styles.input_group}>
          <label for="name">Como devemos chamar você?</label>
          <input
            className={styles.text_input}
            type="text"
            name="name"
            placeholder="Insira o seu nome."
            onChange={(e) => handleInputChange(e)}
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
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className={styles.input_group}>
          <label for="country">Qual o seu gênero?</label>
          <div className={styles.options}>
            <span>
              <input
                type="radio"
                id="man"
                name="gender"
                value="Masculino"
                onChange={(e) => handleInputChange(e)}
              />
              <label for="man">Masculino</label>
            </span>
            <span>
              <input
                type="radio"
                id="woman"
                name="gender"
                value="Feminino"
                onChange={(e) => handleInputChange(e)}
              />
              <label for="woman">Feminino</label>
            </span>
            <span>
              <input
                type="radio"
                id="nonBinary"
                name="gender"
                value="Não binário"
                onChange={(e) => handleInputChange(e)}
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
              name="check1"
              onChange={(e) => handleInputChange(e)}
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
              name="check2"
              onChange={(e) => handleInputChange(e)}
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
              name="check3"
              onChange={(e) => handleInputChange(e)}
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
          <button
            onClick={() => handleSubmit()}
            className={styles.button}
            type="submit"
          >
            Inscrever_se
          </button>
          <p>
            Já tem uma conta?<span>Faça login</span>.
          </p>
        </span>
      </div>
    </div>
  );
}
