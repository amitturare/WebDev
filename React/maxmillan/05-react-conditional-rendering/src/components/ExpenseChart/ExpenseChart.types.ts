export interface IExpenseChart {
	expenses: {
		id: string;
		title: string;
		amount: number;
		date: Date;
	}[];
}
