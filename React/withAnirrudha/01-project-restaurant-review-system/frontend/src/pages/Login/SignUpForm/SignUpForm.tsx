import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../auth.context";

import Button from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";

import { ISignUpFormData, ZSignUpFormData } from "./SignUpForm.types";
import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
	const { handleRegister, errorMessage } = useAuthContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUpFormData>({ resolver: zodResolver(ZSignUpFormData) });
	const navigate = useNavigate();

	const onSubmit = async (data: ISignUpFormData) => {
		try {
			await handleRegister(data);
			navigate("/");
		} catch (error) {
			console.error("Registration failed:", error);
		}
	};

	return (
		<div className={styles.Container}>
			<form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.Title}>Sign Up</h2>

				<TextField
					id="name"
					label="Name"
					type="name"
					{...register("name", { required: "Name is required" })}
					error={!!errors.name}
					helperText={errors.name?.message || ""}
				/>

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

				<Button type="submit">Sign Up</Button>
			</form>
			{errorMessage && <p className={styles.Error}>{errorMessage}</p>}

			<p>
				Already have an account?{" "}
				<span className={styles.Link} onClick={() => navigate("/")}>
					Sign In
				</span>
			</p>
		</div>
	);
};

export default SignUpForm;
