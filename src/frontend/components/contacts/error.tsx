import { RefObject, useEffect, useState } from "react";
import { useErrorStore } from "@/libs/stores/errorStore";
import styles from "../../styles/components/contacts/error.module.scss";
import SuccessIcon from "@/shared/components/svgs/success";
import ErrorIcon from "@/shared/components/svgs/error";

type Props = {
	errorRef: RefObject<HTMLDivElement>;
};

export default function Error({ errorRef }: Props) {
	const error = useErrorStore((store) => store.error);
	const [displayError, setDisplayError] = useState<string>("");

	useEffect(() => {
		if (error !== "") {
			setDisplayError(error);
		}
	}, [error]);

	return (
		<div className={styles["error-container"]} data-show={error !== ""} data-success={error === "Message sent."} ref={errorRef}>
			{error === "Message sent." ? <SuccessIcon className={styles["icon-style"]} /> : <ErrorIcon className={styles["icon-style"]} />}
			<div className={styles["error-style"]}>{displayError}</div>
		</div>
	);
}
