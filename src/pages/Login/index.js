import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export function Login() {
	const [msg, setMsg] = useState("");
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const navigate = useNavigate();

	const showMessage = (message, type) => {
		setMsg({ message, type });
	};

	const handleSubmit = async () => {
		await logar().then((user) => {
			console.log(user);
			if (user.validateLogin === null)
				return showMessage("Usuario não cadastrado!", "error");

			if (!user.validateLogin)
				return showMessage("Email ou senha incorretos!", "error");

			localStorage.setItem("user", JSON.stringify(user));
			navigate("/");
		});
	};

	const logar = async () => {
		const opcoes = {
			crossDomain: true,
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				password: password,
				email: email,
			}),
		};

		return await fetch(
			process.env.REACT_APP_URL_API + "/users/validate/",
			opcoes
		)
			.then((res) => res.json())
			.then((json) => json);
	};

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
				<h1 className={styles.title}>
					Entre na sua conta e tenha acesso ao site!
				</h1>
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
				{msg !== "" && (
					<div className={`${styles[msg.type]}  ${styles.msg}`}>
						<p>{msg.message}</p>
						<button onClick={() => setMsg("")}>X</button>
					</div>
				)}
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
						Ainda não tem uma conta?<Link to="/cadastro"> Crie uma conta</Link>.
					</p>
				</span>
			</div>
		</div>
	);
}
