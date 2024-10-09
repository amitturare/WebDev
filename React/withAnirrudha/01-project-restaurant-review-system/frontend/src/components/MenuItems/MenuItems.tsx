import { MenuItemsProps } from "./MenuItems.types";
import styles from "./MenuItems.module.scss";

const MenuItems = ({ menuItems, activeTab, handleActiveTab }: MenuItemsProps) => {
	return (
		<>
			{menuItems.map((menuItem) => (
				<li
					key={menuItem}
					className={`${styles.NavItem} ${activeTab === menuItem ? styles.active : ""}`}
					onClick={() => handleActiveTab(menuItem)}
				>
					{menuItem}
				</li>
			))}
		</>
	);
};

export default MenuItems;
