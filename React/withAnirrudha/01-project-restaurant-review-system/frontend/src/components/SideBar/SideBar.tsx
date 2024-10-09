import { useLayoutContext } from "../../pages/Layout/Layout.context";
import { useAuthContext } from "../../pages/Login/auth.context";
import { ROLES } from "../../common/constants";

import MenuItems from "../MenuItems/MenuItems";

import { menuItems } from "./Sidebar.types";
import styles from "./SideBar.module.scss";

const SideBar = () => {
	const { userRole } = useAuthContext();
	const { activeTab, handleActiveTab } = useLayoutContext();

	return (
		<aside className={styles.SideBar}>
			<ul className={styles.Nav}>
				<MenuItems
					menuItems={menuItems[userRole as ROLES]}
					activeTab={activeTab}
					handleActiveTab={handleActiveTab}
				/>
			</ul>
		</aside>
	);
};

export default SideBar;
