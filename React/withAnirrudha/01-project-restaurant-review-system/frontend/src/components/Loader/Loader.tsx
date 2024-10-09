import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.scss";

const Loader = () => {
	return (
		<div className={styles.Audio}>
			<TailSpin height={25} color="white" />
		</div>
	);
};

export default Loader;
