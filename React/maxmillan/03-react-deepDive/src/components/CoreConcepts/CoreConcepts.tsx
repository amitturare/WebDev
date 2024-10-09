import styles from "./CoreConcepts.module.scss";
import { ICoreConceptsProps } from "./CoreConcepts.types";

import CoreConcept from "./CoreConcept/CoreConcept";

import { CORE_CONCEPTS } from "../../data/data";

const CoreConcepts = ({}: ICoreConceptsProps) => {
	const {} = styles;

	return (
		<section id="core-concepts">
			<h2>Core Concepts</h2>
			<ul>
				{CORE_CONCEPTS.map((coreConcept) => (
					<CoreConcept key={coreConcept.title} {...coreConcept} />
				))}
			</ul>
		</section>
	);
};

export default CoreConcepts;
