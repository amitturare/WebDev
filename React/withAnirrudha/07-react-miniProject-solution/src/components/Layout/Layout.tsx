import Header from "../Header/Header";
import Main from "../Main/Main";

import styles from "./Layout.module.scss";

const Layout = () => {
	const { Layout } = styles;

	return (
		<div className={Layout}>
			<Header />
			<Main />
		</div>
	);
};

export default Layout;
