import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../auth.context";

import Button from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";

import { ISignInFormData, ZSignInFormData } from "./SignInForm.types";
import styles from "./SignInForm.module.scss";

const withGoogleAuth = (Child: React.ComponentType) => {
	return () => (
		<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
			<Child />
		</GoogleOAuthProvider>
	);
};

const SignInForm = () => {
	const { handleGoogleLogin, handleLogin, errorMessage } = useAuthContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignInFormData>({ resolver: zodResolver(ZSignInFormData) });
	const navigate = useNavigate();

	const onSubmit = async (data: ISignInFormData) => {
		try {
			await handleLogin(data);
			navigate("/");
		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	const googleSignInHandler = async (response: any) => {
		try {
			await handleGoogleLogin(response.credential);
			navigate("/");
		} catch (error) {
			console.error("Login Failed:", error);
		}
	};

	const failedLoginHandler = async (error?: any) => {
		console.log("FAILED TO LOGIN", error);
	};

	return (
		<div className={styles.Container}>
			<form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.Title}>Sign In</h2>

				<TextField
					id="username"
					label="Username"
					{...register("username", { required: "Username is required" })}
					error={!!errors.username}
					helperText={errors.username?.message || ""}
				/>

				<TextField
					id="password"
					label="Password"
					type="password"
					{...register("password", { required: "Password is required" })}
					error={!!errors.password}
					helperText={errors.password?.message || ""}
				/>

				<div className={styles.BtnContainer}>
					<Button type="submit">Sign In</Button>
					<GoogleLogin
						onSuccess={googleSignInHandler}
						onError={failedLoginHandler}
						useOneTap
						theme="outline"
						width={335}
					/>
				</div>
			</form>
			{errorMessage && <p className={styles.Error}>{errorMessage}</p>}

			<p>
				Don't have an account?{" "}
				<span className={styles.Link} onClick={() => navigate("/register")}>
					Register Now
				</span>
			</p>
		</div>
	);
};

export default withGoogleAuth(SignInForm);
