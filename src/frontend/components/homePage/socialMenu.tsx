import styles from "../../styles/components/homePage/socialMenu.module.scss";
import GitHubIcon from "../../../shared/components/svgs/github";
import LinkedinIcon from "../../../shared/components/svgs/linkedin";
import Link from "next/link";

const socialOptions = [
	{ icon: <LinkedinIcon className={styles["icon-style"]} />, link: "https://www.linkedin.com/in/roie-hemo/" },
	{ icon: <GitHubIcon className={styles["icon-style"]} />, link: "https://github.com/roihemo32321" },
];

export default function SocialMenu() {
	return (
		<div className={styles["main-socials-container"]}>
			<h1 className={styles["title-style"]}>Find me on:</h1>
			<div className={styles["social-options"]}>
				{socialOptions.map((val) => {
					return (
						<Link className={styles["option-container"]} key={val.link} href={val.link} target="_blank" aria-label="contact-me">
							{val.icon}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
