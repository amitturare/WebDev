import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ROLES, ROUTER } from "../common/constants";
import RoleGuard from "./RoleGuard/RoleGuard";
import GuestGuard from "./GuestGuard/GuestGuard";

import Layout from "../pages/Layout/Layout";

import Login from "../pages/Login/Login";
import SignInForm from "../pages/Login/SignInForm/SignInForm";
import SignUpForm from "../pages/Login/SignUpForm/SignUpForm";

import Restaurant from "../pages/Restaurant/Restaurant";
import User from "../pages/User/User";

import BackdropLoader from "../components/BackdropLoader/BackdropLoader";

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<RoleGuard permittedRoles={[ROLES.USER, ROLES.ADMIN]}>
					<Layout />
				</RoleGuard>
			),
			children: [
				{
					path: ROUTER.GET_RESTAURANTS_PATH,
					id: ROUTER.GET_RESTAURANTS_ID,
					element: <Restaurant />,
				},
				{
					path: ROUTER.GET_USERS_PATH,
					id: ROUTER.GET_USERS_ID,
					element: <User />,
				},
			],
		},
		{
			element: (
				<GuestGuard>
					<Login />
				</GuestGuard>
			),
			children: [
				{ path: ROUTER.LOGIN, element: <SignInForm /> },
				{ path: ROUTER.REGISTER, element: <SignUpForm /> },
			],
		},
	]);

	return <RouterProvider router={router} fallbackElement={<BackdropLoader />} />;
};

export default Router;
