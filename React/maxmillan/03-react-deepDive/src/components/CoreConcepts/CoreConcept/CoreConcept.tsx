import styles from "./CoreConcept.module.scss";
import { ICoreConcept } from "./CoreConcept.types";

const CoreConcept = ({ image, title, description }: ICoreConcept) => {
	const { CoreConcept } = styles;

	return (
		<li className={CoreConcept}>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
};

export default CoreConcept;
