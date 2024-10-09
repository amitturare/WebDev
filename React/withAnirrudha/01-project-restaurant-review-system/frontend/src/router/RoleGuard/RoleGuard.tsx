import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BackdropLoader from "../../components/BackdropLoader/BackdropLoader";

import { useAuthContext } from "../../pages/Login/auth.context";

import { RoleGuardProps } from "./RoleGuard.types";

const RoleGuard: FC<RoleGuardProps> = ({ children, permittedRoles }) => {
	const navigate = useNavigate();
	const { userRole, isAuthenticated, isLoading } = useAuthContext();

	useEffect(() => {
		const permitCheck = (userRole ? permittedRoles.includes(userRole) : false) && isAuthenticated;

		if (!permitCheck) navigate("/login");
	}, [permittedRoles, isAuthenticated, userRole]);

	if (isLoading) return <BackdropLoader />;

	if (userRole) return <>{children}</>; // DOUBT
};

export default RoleGuard;
