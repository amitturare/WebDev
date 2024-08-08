import { IChartBarProps } from "./ChartBar.types";

import styles from "./ChartBar.module.scss";

const ChartBar = ({ value, label, maxValue }: IChartBarProps) => {
	const { chartBar, inner, fill, labelTag } = styles;

	let barHeight = "0%";
	if (maxValue > 0) {
		barHeight = Math.round((value / maxValue) * 100) + "%";
	}

	return (
		<div className={chartBar}>
			<div className={inner}>
				<div className={fill} style={{ height: barHeight }}></div>
			</div>
			<div className={labelTag}>{label}</div>
		</div>
	);
};

export default ChartBar;
