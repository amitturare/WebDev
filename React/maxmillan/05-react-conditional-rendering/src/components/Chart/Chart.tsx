import { IChartProps } from "./Chart.types";

import ChartBar from "./ChartBar/ChartBar";

import styles from "./Chart.module.scss";

const Chart = ({ dataPoints }: IChartProps) => {
	const { chart } = styles;

	const totalMax = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));

	console.log(dataPoints);

	return (
		<div className={chart}>
			{dataPoints.map(({ value, label }) => (
				<ChartBar key={label} value={value} label={label} maxValue={totalMax} />
			))}
		</div>
	);
};

export default Chart;
