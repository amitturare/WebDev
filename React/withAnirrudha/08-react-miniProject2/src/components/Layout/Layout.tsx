import { ILayoutProps } from "./Layout.types";

import Header from "../Header/Header";
import Main from "../Main/Main";

import styles from "./Layout.module.scss";

const Layout = ({}: ILayoutProps) => {
	return (
		<div className={styles.Layout}>
			<Header />
			<Main />
		</div>
	);
};

export default Layout;
