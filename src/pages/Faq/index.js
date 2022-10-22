import { HeaderFaq } from "./components/HeaderFaq";
import { ContentFaq } from "./components/ContentFaq";
import styles from "./Faq.module.css";

export function Faq() {
	return (
		<div className={styles.container}>
			<main className={styles.main_content_faq}>
				<HeaderFaq></HeaderFaq>
				<ContentFaq></ContentFaq>
			</main>
		</div>
	);
}
