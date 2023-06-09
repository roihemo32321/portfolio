import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../../styles/components/contacts/singleSocialLink.module.scss";

type Props = {
	svg: ReactElement;
	title: string;
	link: string;
};

export default function SingleSocialLink({ svg, title, link: hrefLink }: Props) {
	return (
		<Link href={hrefLink} className={styles["social-link-style"]} aria-label="contact-me" target="_blank">
			<div className={`${styles["title-style"]} ${styles[`${title}-title-background`]}`}>{title}</div>
			<div className={`${styles["svg-container"]} ${styles[`${title}-svg-background`]}`}>
				<div className={styles["svg-style"]}>{svg}</div>
			</div>
		</Link>
	);
}
