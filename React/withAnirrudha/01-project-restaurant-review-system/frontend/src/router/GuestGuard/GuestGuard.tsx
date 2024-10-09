import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BackdropLoader from "../../components/BackdropLoader/BackdropLoader";

import { useAuthContext } from "../../pages/Login/auth.context";
import { GuestGuardProps } from "./GuestGuard.types";

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
	const navigate = useNavigate();
	const storedAuthToken = localStorage.getItem("authToken");
	const { isLoading, isAuthenticated } = useAuthContext();

	useEffect(() => {
		if (storedAuthToken) navigate("/");
	}, [storedAuthToken]);

	if (isLoading && !isAuthenticated) return <BackdropLoader />;

	return <>{children}</>;
};

export default GuestGuard;
