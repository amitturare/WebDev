import { useState } from "react";

import styles from "./Examples.module.scss";
import { IExamples, IExamplesProps } from "./Examples.types";

import TabButton from "./TabButton/TabButton";

import { EXAMPLES } from "../../data/data";
import { exampleDataArr } from "../../data/data.constants";

const Examples = ({}: IExamplesProps) => {
	const { Examples, TabContent } = styles;

	const [tabContent, setTabContent] = useState<IExamples>();

	const handleSelect = (selectedButton: "Components" | "JSX" | "Props" | "State") => {
		const tabData = EXAMPLES.find((element) => element.title === selectedButton);
		setTabContent(tabData);
	};

	let HTMLTabContent = <p>Please select a topic!</p>;

	if (tabContent) {
		HTMLTabContent = (({ title, description, code }: IExamples) => (
			<>
				<h3>{title}</h3>
				<p>{description}</p>
				<pre>
					<code>{code}</code>
				</pre>
			</>
		))(tabContent);
	}

	return (
		<section className={Examples}>
			<h2>Examples</h2>
			<menu>
				{EXAMPLES.map((item, i) => (
					<TabButton
						key={item.title}
						isSelected={item.title === exampleDataArr[i]}
						onSelect={() => handleSelect(exampleDataArr[i])}
					>
						{item.title}
					</TabButton>
				))}
			</menu>
			<div className={TabContent}>{HTMLTabContent}</div>
		</section>
	);
};

export default Examples;
