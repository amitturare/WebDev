import { ChangeEvent } from "react";
import { Pagination as MuiPagination } from "@mui/material";

import { PaginationProps } from "./Pagination.types";

const Pagination = ({ totalPages, currPage, pageChangeHandler }: PaginationProps) => {
	const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
		pageChangeHandler(page);
	};

	return <MuiPagination count={totalPages} page={currPage} color="primary" onChange={handlePageChange} />;
};

export default Pagination;
