import { PaginationItemProps } from "@mui/material";

export interface PaginationProps extends PaginationItemProps {
	totalPages: number;
	currPage: number;
	pageChangeHandler: (page: number) => void;
}
