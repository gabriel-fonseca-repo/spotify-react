import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export function Login() {
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const showMessage = (message, type) => {
    setMsg({ message, type });
  }

  const handleSubmit = async () => {
    await logar().then((user) => {
      if(user){
        if(user.password === password){
          localStorage.setItem("user", user);
          showMessage("Login realizado com sucesso!", "success");
        }
      }else{
        return showMessage("Email ou senha incorretos!", "error");
      }
    });

  };

  const logar = async () => {
    const opcoes = {
      crossDomain: true,
      method: "GET",
      mode: "cors",
    };

    return await fetch("http://localhost:4000/users?email="+email, opcoes)
    .then((res) => res.json())
    .then((json) => json[0]);
  }

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
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
        <h1 className={styles.title}>Entre na sua conta e tenha acesso ao site!</h1>
      </div>
      <div id="line">
        <hr />
      </div>
      <div className={(styles.teste, styles.form)} action="">
        <div className={styles.input_group}>
          <label for="email">Email:</label>
          <input
            className={styles.text_input}
            type="email"
            name="email"
            placeholder="Insira o seu e-mail."
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className={styles.input_group}>
          <label for="password">Senha:</label>
          <input
            className={styles.text_input}
            type="password"
            name="password"
            placeholder="Crie uma senha."
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        {msg !== "" && 
        <div className={`${styles[msg.type]}  ${styles.msg}`}>
          <p>{msg.message}</p>
          <button onClick={()=> setMsg("")}>
              X
          </button>
        </div>
      }
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
            Logar
          </button>
          <p>
            Ainda não tem uma conta?<Link to="/Cadastro">Crie uma conta</Link>.
          </p>
        </span>
      </div>
    </div>
  );
}
