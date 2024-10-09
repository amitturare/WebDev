export interface MenuItemsProps {
	menuItems: string[];
	activeTab: string;
	handleActiveTab: (clickedTab: string) => void;
}
