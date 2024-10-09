import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "../../components/TextField/TextField";
import Pagination from "../../components/Pagination/Pagination";

import { EntityCardsProps } from "./EntityCards.types";
import styles from "./EntityCards.module.scss";

const EntityCards = ({ children, onSearch, currentPage, totalPages, onPageChange, baseUrl }: EntityCardsProps) => {
	const navigate = useNavigate();
	const [searchString, setSearchString] = useState("");

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		onSearch(value);
		setSearchString(value);
		navigate(`${baseUrl}?page=1`);
	};

	const handlePageChange = (page: number) => {
		onPageChange(page);
		navigate(`${baseUrl}?page=${page}`);
	};

	return (
		<div className={styles.Container}>
			<div className={styles.SearchContainer}>
				<TextField
					id="searchString"
					label="Search Here"
					type="text"
					value={searchString}
					required={false}
					onChange={handleSearchChange}
				/>
			</div>

			<div className={`${styles.EntityCards} ${baseUrl.endsWith("users") && styles.UserCards}`}>{children}</div>

			{totalPages > 1 && (
				<div className={styles.Pagination}>
					<Pagination
						totalPages={totalPages}
						currPage={currentPage}
						pageChangeHandler={(page) => handlePageChange(page)}
					/>
				</div>
			)}
		</div>
	);
};

export default EntityCards;
