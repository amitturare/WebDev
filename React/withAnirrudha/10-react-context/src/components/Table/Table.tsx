import { ITableProps } from "./Table.types";
import styles from "./Table.module.scss";

const Table = (data: ITableProps) => {
	return (
		<table>
			<thead>
				<tr>Name</tr>
				<tr>Location</tr>
				<tr>Pin</tr>
			</thead>

			<tbody></tbody>
		</table>
	);
};

export default Table;
