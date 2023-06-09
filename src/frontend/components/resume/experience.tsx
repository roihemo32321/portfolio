import { resumeType } from "@/shared/libs/types/resumeType";
import styles from "../../styles/components/resume/experience.module.scss";
import ResumeSection from "./resumeSection";
import { useRef } from "react";
import useElementOnScreen from "@/shared/libs/hooks/useElementOnScreen";

type Props = {
	mainTitle: string;
	subTitle: string;
	resumeSections: resumeType[];
};

export default function Experience({ mainTitle, subTitle, resumeSections }: Props) {
	const experienceRef = useRef<HTMLDivElement | null>(null);
	const experienceAnimation = useElementOnScreen(experienceRef);

	return (
		<div className={styles["experience-container"]}>
			<div className={`${styles["titles-container"]} ${experienceAnimation ? styles["show-animation"] : ""}`} ref={experienceRef}>
				<h1 className={styles["main-title"]}>{mainTitle}</h1>
				<h2 className={styles["sub-title"]}>{subTitle}</h2>
			</div>
			<div className={styles["resume-sections"]}>
				{resumeSections.map((val, index) => {
					return <ResumeSection key={index} sectionTitle={val.sectionTitle} sectionInfo={val.sectionInfo} />;
				})}
			</div>
		</div>
	);
}
