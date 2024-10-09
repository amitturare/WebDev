import { Outlet } from "react-router-dom";

import styles from "./Login.module.scss";

const Login = () => {
	return (
		<div className={styles.Container}>
			<div className={styles.Intro}>
				<h1>Restaurant Management System</h1>
				<h2>Bringing the Flavors, With No Extra Charges</h2>
				<p>
					Welcome to the world of restaurants where ‘I’m just looking at the menu’ is the universal code for
					‘I have no idea what I want!’ Whether you run a fancy dining experience or the local food truck that
					serves fries of all shapes and sizes, we’ve got your back.
				</p>
				<p>Note: System cannot stop customers from asking for free breadsticks.</p>
				<p>
					Manage your restaurant like a pro and get ready for the endless sea of ‘What’s your Wi-Fi password?’
					inquiries.
				</p>
			</div>

			<div className={styles.Form}>
				<Outlet />
			</div>
		</div>
	);
};

export default Login;
