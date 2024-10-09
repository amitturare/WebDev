import { PropsWithChildren } from "react";
import { ROLES } from "../../common/constants";

export interface RoleGuardProps extends PropsWithChildren {
	permittedRoles: ROLES[];
}
