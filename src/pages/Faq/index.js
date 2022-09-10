import { HeaderFaq } from "./components/HeaderFaq";
import { ContentFaq } from "./components/ContentFaq";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <div className={styles.container}>
      <main>
        <HeaderFaq></HeaderFaq>
        <ContentFaq></ContentFaq>
      </main>
    </div>
  );
}
