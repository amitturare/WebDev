import styles from "./Header.module.scss";
import reactImg from "../../assets/react-core-concepts.png";
import { IHeaderProps } from "./Header.types";

const Header = ({}: IHeaderProps) => {
	const { Header } = styles;

	return (
		<header className={Header}>
			<img src={reactImg} alt="Stylized Atom" />
			<h1>React Essentials</h1>
			<p>Fundamental React Concepts you will need for almost any app you are going to build!</p>
		</header>
	);
};

export default Header;
