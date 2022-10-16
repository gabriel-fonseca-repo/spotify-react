import styles from "./Home.module.css";
import { NavbarHome } from "./components/NavbarHome";
import { MainHome } from "./components/MainHome";
import { FooterHome } from "./components/FooterHome";

export function Home() {
	return (
		<div className={styles.container}>
			<NavbarHome />
			<MainHome />
			<FooterHome />
		</div>
	);
}
