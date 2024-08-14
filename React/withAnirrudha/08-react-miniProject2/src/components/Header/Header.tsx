import { IHeaderProps } from "./Header.types";

import styles from "./Header.module.scss";

const Header = ({}: IHeaderProps) => {
	return (
		<header className={styles.Header}>
			<h1>Employee Management System</h1>
		</header>
	);
};

export default Header;
