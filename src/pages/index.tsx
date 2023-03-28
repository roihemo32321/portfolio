import HomePage from "@/frontend/components/homePage/homePage";
import Head from "next/head";
import styles from "../frontend/styles/index.module.scss";

export default function Home() {
	return (
		<>
			<Head>
				<title>Roie Hemo | Full Stack Developer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<HomePage />
			</main>
		</>
	);
}
