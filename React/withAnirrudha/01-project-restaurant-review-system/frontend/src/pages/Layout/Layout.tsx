import { Outlet } from "react-router-dom";

import { LayoutProvider } from "./Layout.context";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";

import styles from "./Layout.module.scss";

const Layout = () => {
	return (
		<LayoutProvider>
			<div className={styles.Container}>
				<Header />

				<div className={styles.Layout}>
					<SideBar />

					<main className={styles.MainContent}>
						<Outlet />
					</main>
				</div>
			</div>
		</LayoutProvider>
	);
};

export default Layout;
