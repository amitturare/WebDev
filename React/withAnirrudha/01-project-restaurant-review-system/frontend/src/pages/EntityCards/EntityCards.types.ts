import z from "zod";
import { PropsWithChildren } from "react";

export const ZSearchData = z.object({ searchString: z.string().optional() });

export interface ISearchData extends z.infer<typeof ZSearchData> {}

export interface EntityCardsProps extends PropsWithChildren {
	onSearch: (searchString: string) => void;
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	baseUrl: string;
}
