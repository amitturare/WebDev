import { ROLES } from "../../common/constants";

export const UserMenuItems = ["Restaurants"];
export const AdminMenuItems = ["Users", "Restaurants"];

export const menuItems = {
	[ROLES.USER]: UserMenuItems,
	[ROLES.ADMIN]: AdminMenuItems,
};
